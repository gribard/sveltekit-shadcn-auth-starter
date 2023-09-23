import { redirect } from "@sveltejs/kit";

export const load = async (event) => {
	const session = await event.locals.auth.validate();
	if (session) throw redirect(302, "/dashboard");
	throw redirect(302, "/auth");
};
