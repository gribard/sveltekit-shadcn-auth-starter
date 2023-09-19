<script lang="ts">
	import type { ItemType } from "@/data/feeds";
	import { PlusCircled } from "radix-icons-svelte";
	import { Button } from "@/registry/new-york/ui/button";
	import { Separator } from "@/registry/new-york/ui/separator";
	import * as Tabs from "@/registry/new-york/ui/tabs";
	import {
		AlbumArtwork,
		Menu,
		PodcastEmptyPlaceholder
	} from "@/components/docs";
	import { playlists } from "$lib/data/playlists";
	import { listenNowAlbums, madeForYouAlbums } from "$lib/data/albums";

	import { cn } from "@/utils";
	let className: string | null | undefined = undefined;
	export { className as class };
	export let item: ItemType = {};
	// export let item: ItemType = {
	// 	id: 0,
	// 	name: "черное",
	// 	content: `<div><img src="https://ic.pics.livejournal.com/mi3ch/983718/14030245/14030245_original.jpg" alt="" title="" loading="lazy"><br><br>К предыдущему посту. В 1861 году вся Польша оделась в черный цвет. Одеться в траур в память о растоптанном мирном протесте призвал Польшу архиепископ Варшавский. <br><br>Стало очень популярным стихотворение Константы Гашиньского «Черное платье»<br><br>...Когда Польша вступила в гроб,<br>У меня остался только один наряд:<br>Черное платье.<br><br><br>Траур быстро охватил почти всю территорию I Речи Посполитой.  Даже невесты появлялись на свадьбе в чёрном. Эва Коженёвская, мать Джозефа Конрада, писала: «Траур настолько всеобъемлющ, что цветных платьев почти не видно». В такой атмосфере неписанный поведенческий кодекс возник сам собой. Балы и танцы считались дурным тоном, в кафе перестали играть музыку, и даже шарманщиков повыгоняли со дворов. Театр бойкотировали. <br><br>Траурные костюмы не могли не привлечь внимания властей. На улицах появились царские агенты, которые с помощью специальных крючков разрывали кринолины траурных платьев. За несоблюдение указов можно было получить высокий штраф или даже попасть в тюрьму. Женщинам разрешалось носить траур только со специального позволения чиновников. Чтобы получить разрешение, следовало доказать недавнюю смерть родителей или супруга. Но даже это не сломило сопротивления. Когда школьницам запретили носить черное, они начали чернилами рисовать черные «ремешки» на шее и руках, называя это «трауром, который нельзя снять».<br><br>p.s.<br>Траур в оккупированной Польше понятен. Но не надо думать, что Россия сегодня в лучшем положении. Страна точно так же захвачена врагами. Русских посылают на войну убивать  украинцев. Что может быть страшнее? Какие в пихву велопробеги и праздничные концерты?<br><br>У поляков получился национальный протест. Он может получиться и у русских.</div>`;`
	// };
</script>

<div class={cn("pb-12", className)}>
	<div class="space-y-4">
		<div class="px-2 py-2">
			<div class="space-y-1 h-full overflow-y-auto overflow-x-hidden">
				<pre>{item.id ? item : ""}</pre>
				<div class="col-span-3 lg:col-span-5">
					<div class="h-full px-4 py-6 lg:px-8">
						<Tabs.Root value="music" class="h-full space-y-6">
							<div class="space-between flex items-center">
								<Tabs.List>
									<Tabs.Trigger
										value="music"
										class="relative"
									>
										Music
									</Tabs.Trigger>
									<Tabs.Trigger value="podcasts" disabled
										>Podcasts</Tabs.Trigger
									>
									<Tabs.Trigger value="live" disabled
										>Live</Tabs.Trigger
									>
								</Tabs.List>
								<div class="ml-auto mr-4">
									<Button>
										<PlusCircled class="mr-2 h-4 w-4" />
										Add music
									</Button>
								</div>
							</div>
							<Tabs.Content
								value="music"
								class="border-none p-0 outline-none"
							>
								<div class="flex items-center justify-between">
									<div class="space-y-1">
										<h2
											class="text-2xl font-semibold tracking-tight"
										>
											Listen Now
										</h2>
										<p
											class="text-sm text-muted-foreground"
										>
											Top picks for you. Updated daily.
										</p>
									</div>
								</div>
								<Separator class="my-4" />
								<div class="relative">
									<div class="overflow-x-auto">
										<div class="flex space-x-4 pb-4">
											{#each listenNowAlbums as album}
												<AlbumArtwork
													{album}
													class="w-[250px]"
													aspectRatio="portrait"
													width={250}
													height={330}
												/>
											{/each}
										</div>
									</div>
								</div>
								<div class="mt-6 space-y-1">
									<h2
										class="text-2xl font-semibold tracking-tight"
									>
										Made for You
									</h2>
									<p class="text-sm text-muted-foreground">
										Your personal playlists. Updated daily.
									</p>
								</div>
								<Separator class="my-4" />
								<div class="relative">
									<div class="overflow-x-auto">
										<div class="flex space-x-4 pb-4">
											{#each madeForYouAlbums as album}
												<AlbumArtwork
													{album}
													class="w-[150px]"
													aspectRatio="square"
													width={150}
													height={150}
												/>
											{/each}
										</div>
									</div>
								</div>
							</Tabs.Content>
							<Tabs.Content
								value="podcasts"
								class="h-full flex-col border-none p-0 data-[state=active]:flex"
							>
								<div class="flex items-center justify-between">
									<div class="space-y-1">
										<h2
											class="text-2xl font-semibold tracking-tight"
										>
											New Episodes
										</h2>
										<p
											class="text-sm text-muted-foreground"
										>
											Your favorite podcasts. Updated
											daily.
										</p>
									</div>
								</div>
								<Separator class="my-4" />
								<PodcastEmptyPlaceholder />
							</Tabs.Content>
						</Tabs.Root>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
