<script lang="ts">
	import * as Select from "@/registry/new-york/ui/select";
	import { i, languages, language, switchLanguage } from "@inlang/sdk-js";
	let selectedLanguage: string = language || "en";

	function switchLang() {
		switchLanguage(selectedLanguage);
	}
</script>

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
	<!-- <Select.Input name="languageselect" /> -->
</Select.Root>
