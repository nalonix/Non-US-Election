import { goto } from '$app/navigation';
import { redirect } from '@sveltejs/kit';

import { createAuthClient } from 'better-auth/svelte';

export const { signIn, signUp, signOut, useSession, getSession } = createAuthClient({
	baseURL: 'http://localhost:5173' // the base url of your auth server
});

export const googleSignIn = async () => {
	const data = await signIn.social({
		provider: 'google',
		callbackURL: '/'
	});
};

export const handleSignOut = async () => {
	await signOut({
		fetchOptions: {
			onSuccess: () => {
				goto('/auth/signin');
			}
		}
	});
};
