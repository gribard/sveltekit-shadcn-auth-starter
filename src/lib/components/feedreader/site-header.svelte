<script lang="ts">
	import {
		Icons,
		LightSwitch,
		MainNav,
		MobileNav
	} from "@/components/feedreader";
	import { buttonVariants } from "@/registry/new-york/ui/button";
	import { siteConfig } from "$lib/config/site";
	import { cn } from "$lib/utils";
	import * as DropdownMenu from "@/registry/new-york/ui/dropdown-menu";
	import * as Avatar from "@/registry/new-york/ui/avatar";
	import { Button } from "@/registry/new-york/ui/button";
	import { enhance } from "$app/forms";

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
					<Select.Trigger class="w-[100px]">
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
		</div>
	</div>
</header>
