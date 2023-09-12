<script lang="ts">
	import * as DropdownMenu from "@/registry/new-york/ui/dropdown-menu";
	import * as Avatar from "@/registry/new-york/ui/avatar";
	import { Button } from "@/registry/new-york/ui/button";
	import type { AuthUser } from "@prisma/client";
	import { LogOut } from "lucide-svelte";
	import { i } from "@inlang/sdk-js";
	import { enhance } from "$app/forms";

	export let user: any;
</script>

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
				{i("profile.menutitle")}
				<DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				{i("settings")}
				<DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
			</DropdownMenu.Item>
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
