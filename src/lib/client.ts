import { goto } from '$app/navigation';
import { redirect } from '@sveltejs/kit';
import { createAuthClient } from 'better-auth/svelte';
// import { PUBLIC_BASE_URL } from '$env/static/public';

const isProd = process.env.NODE_ENV === 'production';

export const { signIn, signUp, signOut, useSession, getSession } = createAuthClient({
	baseURL: isProd ? 'https://non-us-election.vercel.app' : 'http://localhost:5173'
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
