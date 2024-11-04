import { auth } from '$lib/auth';
import { redirect } from '@sveltejs/kit';
import { goto } from '$app/navigation';
import { db } from '$lib/server/db';
import { vote } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { user } from '$lib/server/db/schema';

export async function load({ locals, request }) {
	const session = locals.session;

	if (!session) {
		throw redirect(302, '/auth/signin');
	}

	// Check if the user has already voted
	const existingVote = await db.select().from(vote).where(eq(vote.userId, session.userId)).limit(1);
	if (!existingVote.length) {
		throw redirect(302, '/');
	}

	// Fetch details status
	const { detailsComplete } = (
		await db
			.select({ detailsComplete: user.detailsComplete })
			.from(user)
			.where(eq(user.id, session.userId))
			.limit(1)
	)[0];

	return {
		session,
		detailsComplete
	};
}

/** @satisfies {import('./$types').Actions} */
export const actions = {
	default: async ({ request, locals }) => {
		const session = locals.session;

		if (!session) {
			throw redirect(302, '/auth/signin');
		}

		const data = await request.formData();
		const yearOfBirth = parseInt(data.get('yearOfBirth') as string);
		const country = data.get('country') as string;

		await db
			.update(user)
			.set({ yearOfBirth, country, detailsComplete: true })
			.where(eq(user.id, session.userId));

		return { success: true };
	}
};
