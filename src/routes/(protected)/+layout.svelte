<script lang="ts">
	export let data;
	console.log(data);
	export const load = async (event) => {
		const form = await superValidate(event, profileSchema);
		const { user } = await event.locals.auth.validateUser();
		form.data = {
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email
		};
		return {
			form
		};
	};
</script>

<div class="flex flex-col justify-center px-6 py-12 lg:px-8 mx-auto">
	<div class="mx-auto">
		<pre>(protected) area. user email: {data.user.email}</pre>
	</div>
	<slot />
</div>
