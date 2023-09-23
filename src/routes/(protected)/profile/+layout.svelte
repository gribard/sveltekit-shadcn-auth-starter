<script lang="ts">
	import { Separator } from "@/registry/new-york/ui/separator";
</script>

<div class="space-y-6 p-8 pb-16">
	<div class="max-w-md space-y-0.5">
		<h2 class="text-2xl font-bold tracking-tight">Settings</h2>
		<p class="text-muted-foreground">
			Manage your account settings and set e-mail preferences.
		</p>
	</div>
	<Separator class="my-6" />
	<div class="max-w-md min-h-screen">
		<slot />
	</div>
</div>
