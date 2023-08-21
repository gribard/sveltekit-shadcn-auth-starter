import type { AuthUser } from "@prisma/client";

export const load = async (event: { locals: { user: AuthUser } }) => {
	return { user: event.locals.user as AuthUser };
};
