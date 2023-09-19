import { fail, redirect } from "@sveltejs/kit";
import { setError, superValidate } from "sveltekit-superforms/server";
import { auth } from "$lib/server/lucia";
import { userSchema } from "$lib/config/zod-schemas";
import { sendVerificationEmail } from "$lib/config/email-messages";

const signInSchema = userSchema.pick({
	email: true,
	password: true
});

const signUpSchema = userSchema.pick({
	firstName: true,
	lastName: true,
	email: true,
	password: true,
	terms: true
});
// export const load = async (event) => {
// 	const session = await event.locals.auth.validate();
// 	if (session) throw redirect(302, "/dashboard");
// 	const form = await superValidate(event, signUpSchema);
// 	return {
// 		form
// 	};
// };
export const load = async (event) => {
	const session = await event.locals.auth.validate();

	if (session) throw redirect(302, "/dashboard");

	// Different schemas, so no id required.
	const signupForm = await superValidate(event, signInSchema);
	const signinForm = await superValidate(event, signUpSchema);

	// Return them both
	return { signupForm, signinForm };
};

export const actions = {
	signin: async (event) => {
		const signinForm = await superValidate(event, signInSchema);
		//console.log(form);

		if (!signinForm.valid) {
			return fail(400, {
				signinForm
			});
		}

		//add user to db
		try {
			console.log("sign in user");
			const key = await auth.useKey(
				"emailpassword",
				signinForm.data.email,
				signinForm.data.password
			);
			const session = await auth.createSession(key.userId);
			event.locals.auth.setSession(session);
		} catch (e) {
			//TODO: need to return error message to client
			console.error(e);
			// email already in use
			//const { fieldErrors: errors } = e.flatten();
			return setError(
				signinForm,
				"",
				"The email or password is incorrect."
			);
		}

		return { signinForm };
	},
	signout: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) {
			throw redirect(302, "/auth");
		}
		await auth.invalidateSession(session.sessionId); // invalidate session
		locals.auth.setSession(null); // remove cookie
		throw redirect(302, "/auth");
	},
	signup: async (event) => {
		const signupForm = await superValidate(event, signUpSchema);
		//console.log(form);

		if (!signupForm.valid) {
			return fail(400, {
				signupForm
			});
		}

		//add user to db
		try {
			console.log("creating user");
			const token = crypto.randomUUID();

			const user = await auth.createUser({
				primaryKey: {
					providerId: "emailpassword",
					providerUserId: signupForm.data.email,
					password: signupForm.data.password
				},
				attributes: {
					email: signupForm.data.email,
					firstName: signupForm.data.firstName,
					lastName: signupForm.data.lastName,
					role: "USER",
					verified: false,
					receiveEmail: true,
					token: token
				}
			});

			await sendVerificationEmail(signupForm.data.email, token);
			const session = await auth.createSession(user.userId);
			event.locals.auth.setSession(session);
		} catch (e) {
			console.error(e);
			// email already in use
			//might be other type of error but this is most common and this is how lucia docs sets the error to duplicate user
			return setError(
				signupForm,
				"email",
				"A user with that email already exists."
			);
		}

		return { signupForm };
	}
};
