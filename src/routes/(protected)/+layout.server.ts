export const load = async (event: { locals: { user: any } }) => {
	console.log(event.locals.user);
	return { user: event.locals.user };
};
