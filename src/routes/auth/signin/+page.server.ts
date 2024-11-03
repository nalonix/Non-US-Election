import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
	const session = locals.session;

	console.log('Locals session signin: ', session);

	if (session) {
		throw redirect(301, '/');
	}

	return {
		props: {
			session
		}
	};
}
