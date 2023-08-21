// import * as albums from "$lib/data/albums";

import type { PageLoad } from "./$types";
import { folders, feeds } from "@/data/feeds";

export const load: PageLoad = async () => {
	return {
		folders,
		feeds
	};
};
