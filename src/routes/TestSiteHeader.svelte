<script lang="ts">
	import {
		Icons,
		LightSwitch,
		MainNav,
		MobileNav,
		UserMenu
	} from "@/components/docs";
	import { buttonVariants } from "@/registry/new-york/ui/button";
	import * as Select from "@/registry/new-york/ui/select";
	import { siteConfig } from "$lib/config/site";
	import { cn } from "$lib/utils";

	import { i, languages, language, switchLanguage } from "@inlang/sdk-js";

	let selectedLanguage: string = language || "en";

	function switchLang() {
		switchLanguage(selectedLanguage);
	}
	export let user: any;
</script>

<header
	class="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 shadow-sm backdrop-blur"
>
	<div class="container flex h-14 items-center">
		<MainNav />
		<MobileNav />
		<div
			class="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end"
		>
			<div class="w-full flex-1 md:w-auto md:flex-none">
				<!-- Command Menu Here -->
				<Select.Root bind:value={selectedLanguage} onValueChange={switchLang}>
					<Select.Trigger class="w-[75px]">
						<Select.Value placeholder="Language" />
					</Select.Trigger>
					<Select.Content>
						<Select.Group>
							<!-- <Select.Label>Languages</Select.Label> -->
							{#each languages as lang}
								<Select.Item value={lang} label={lang}>{lang}</Select.Item>
							{/each}
						</Select.Group>
					</Select.Content>
					<Select.Input name="favoriteFruit" />
				</Select.Root>
			</div>
			<nav class="flex items-center space-x-1">
				<a href={siteConfig.links.github} target="_blank" rel="noreferrer">
					<div
						class={cn(
							buttonVariants({
								size: "sm",
								variant: "ghost"
							}),
							"w-9 px-0"
						)}
					>
						<Icons.gitHub class="h-5 w-5" />
						<span class="sr-only">GitHub</span>
					</div>
				</a>
				<a href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
					<div
						class={cn(
							buttonVariants({
								size: "sm",
								variant: "ghost"
							}),
							"w-9 px-0"
						)}
					>
						<Icons.twitter class="h-5 w-5 fill-current" />
						<span class="sr-only">Twitter</span>
					</div>
				</a>
				<LightSwitch />

				{#if user}
					<UserMenu {user} />
				{/if}
			</nav>
		</div>
	</div>
</header>
