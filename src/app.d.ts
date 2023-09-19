// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}

		interface Locals {
			auth: import("lucia-auth").AuthRequest;
			user: Lucia.UserAttributes;
			startTimer: number;
			error: string;
			errorId: string;
			errorStackTrace: string;
			message: unknown;
			track: unknown;
		}
		interface Error {
			code?: string;
			errorId?: string;
	}
	}

	namespace svelteHTML {
		interface HTMLAttributes<T> {
			"on:copy-done"?: (e: CustomEvent<T>) => void;
			"on:copy-error"?: (e: CustomEvent<T>) => void;
		}
	}
}

/// <reference types="lucia-auth" />
declare global {
	namespace Lucia {
		type Auth = import("$lib/lucia").Auth;
		type UserAttributes = {
			email: string;
			firstName: string;
			lastName: string;
			role: string;
			verified: boolean;
			receiveEmail: boolean;
			token: string;
		};
	}
}

// THIS IS IMPORTANT!!!
export {};
