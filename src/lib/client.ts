import { goto } from '$app/navigation';
import { redirect } from '@sveltejs/kit';
import { PUBLIC_BETTER_AUTH_URL } from '$env/static/public';

import { createAuthClient } from 'better-auth/svelte';

export const { signIn, signUp, signOut, useSession, getSession } = createAuthClient({
	baseURL: PUBLIC_BETTER_AUTH_URL // the base url of your auth server
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
