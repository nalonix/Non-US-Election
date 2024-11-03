import { auth } from '$lib/auth';
import { redirect } from '@sveltejs/kit';
import { goto } from '$app/navigation';

export async function load({ locals, request }) {
	const session = locals.session;

	if (!session) {
		throw redirect(302, '/auth/signin');
	}

	return {
		session
	};
}
