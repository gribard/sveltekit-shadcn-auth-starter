<script lang="ts">
	import * as DropdownMenu from "@/registry/new-york/ui/dropdown-menu";
	import * as Avatar from "@/registry/new-york/ui/avatar";
	import { Button } from "@/registry/new-york/ui/button";
	import type { AuthUser } from "@prisma/client";
	import { LogOut } from "lucide-svelte";
	import { enhance } from "$app/forms";
	import UserSearch from "./UserSearch.svelte";
	import { cn } from "$lib/utils";
	import { LogIn } from "lucide-svelte";

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

	<UserSearch />
</nav>
