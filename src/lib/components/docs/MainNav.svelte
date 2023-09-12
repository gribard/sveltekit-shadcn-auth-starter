<script lang="ts">
	import * as DropdownMenu from "@/registry/new-york/ui/dropdown-menu";
	import * as Avatar from "@/registry/new-york/ui/avatar";
	import { Button } from "@/registry/new-york/ui/button";
	import { enhance } from "$app/forms";
	import { cn } from "$lib/utils";

	let className: string | undefined | null = undefined;
	import { i, languages, language, switchLanguage } from "@inlang/sdk-js";

	let selectedLanguage: string = language || "en";
	export { className as class };

	import * as Select from "@/registry/new-york/ui/select";

	function switchLang() {
		switchLanguage(selectedLanguage);
	}

	export let user: any;
</script>

<nav class={cn("flex items-center mx-auto space-x-4 lg:space-x-6", className)}>
	<a
		class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
		href="/"
	>
		{i("home")}
	</a>

	<a
		class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
		href="/auth/sign-in"
	>
		{i("signin")}
	</a>
	<a
		class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
		href="/dashboard"
	>
		Dashboard (protected)
	</a>

	<a
		class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
		href="/profile"
	>
		{i("profile.menutitle")}
	</a>

	<a
		class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
		href="/auth/sign-up"
	>
		{i("signup")}</a
	>
	<Select.Root bind:value={selectedLanguage} onValueChange={switchLang}>
		<Select.Trigger class="w-[180px]">
			<Select.Value placeholder="Select a language" />
		</Select.Trigger>
		<Select.Content>
			<Select.Group>
				<Select.Label>Languages</Select.Label>
				{#each languages as lang}
					<Select.Item value={lang} label={lang}>{lang}</Select.Item>
				{/each}
			</Select.Group>
		</Select.Content>
		<Select.Input name="favoriteFruit" />
	</Select.Root>

	{#if user}
		<DropdownMenu.Root positioning={{ placement: "bottom-end" }}>
			<DropdownMenu.Trigger asChild let:builder>
				<Button
					variant="ghost"
					builders={[builder]}
					class="relative h-8 w-8 rounded-full"
				>
					<Avatar.Root class="h-8 w-8">
						<Avatar.Image src="/avatars/01.png" alt="@shadcn" />
						<Avatar.Fallback>SC</Avatar.Fallback>
					</Avatar.Root>
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content class="w-56">
				<DropdownMenu.Label class="font-normal">
					<div class="flex flex-col space-y-1">
						<p class="text-sm font-medium leading-none">
							{user.firstName}
							{user.lastName}
						</p>
						<p class="text-xs leading-none text-muted-foreground">
							{user.email}
						</p>
					</div>
				</DropdownMenu.Label>
				<DropdownMenu.Separator />
				<DropdownMenu.Group>
					<DropdownMenu.Item>
						Profile
						<DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						Billing
						<DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						Settings
						<DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
					</DropdownMenu.Item>
					<DropdownMenu.Item>New Team</DropdownMenu.Item>
				</DropdownMenu.Group>
				<DropdownMenu.Separator />
				<DropdownMenu.Item>
					<form method="POST" action="/auth?/signout" use:enhance>
						<button type="submit" class="btn">{i("signout")}</button>
					</form>
					<DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	{/if}
</nav>
