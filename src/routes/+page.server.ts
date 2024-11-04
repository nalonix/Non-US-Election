import { auth } from '$lib/auth';
import { redirect } from '@sveltejs/kit';
import { goto } from '$app/navigation';
import { db } from '$lib/server/db';
import { vote } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

enum CandidateEnum {
	Kamala = 'Kamala Harris',
	Donald = 'Donald Trump'
}

export async function load({ locals, request }) {
	const session = locals.session;
	const user = locals.user;

	if (!session) {
		throw redirect(302, '/auth/signin');
	}

	// Check if the user has already voted
	const existingVote = await db.select().from(vote).where(eq(vote.userId, session.userId)).limit(1);

	if (existingVote) {
		throw redirect(302, '/complete');
	}

	return {
		session,
		user
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
		const selectedCandidate = data.get('vote') as CandidateEnum;

		if (!vote) {
			throw redirect(302, '/');
		}

		// Check if the user has already voted
		const existingVote = await db
			.select()
			.from(vote)
			.where(eq(vote.userId, session.userId))
			.limit(1);

		if (existingVote) {
			throw redirect(302, '/complete');
		}

		await db.insert(vote).values({
			userId: session.userId,
			candidate: selectedCandidate
		});

		return { success: true };
	}
};
