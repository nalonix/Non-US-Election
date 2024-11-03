import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from './server/db';

import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from '$env/static/private';
import { user, verification, session, account } from './server/db/schema';

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: 'pg',
		schema: {
			user,
			account,
			session,
			verification
		}
	}),
	socialProviders: {
		github: {
			clientId: GITHUB_CLIENT_ID as string,
			clientSecret: GITHUB_CLIENT_SECRET as string
		}
	}
});
