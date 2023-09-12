<script lang="ts">
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
	const fruits = [
		{ value: "apple", label: "Apple" },
		{ value: "banana", label: "Banana" },
		{ value: "blueberry", label: "Blueberry" },
		{ value: "grapes", label: "Grapes" },
		{ value: "pineapple", label: "Pineapple" }
	];
</script>

<nav class={cn("flex items-center space-x-4 lg:space-x-6", className)}>
	<a
		class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
		href="/"
	>
		{i("home")}
	</a>
	<a
		href="/examples/dashboard"
		class="text-sm font-medium transition-colors hover:text-primary"
	>
		Overview
	</a>

	<a
		href="/examples/dashboard"
		class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
	>
		Customers
	</a>
	<a
		href="/examples/dashboard"
		class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
	>
		Products
	</a>
	<a
		href="/examples/dashboard"
		class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
	>
		Settings
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
</nav>
