import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import inlangPlugin from "@inlang/sdk-js/adapter-sveltekit";

export default defineConfig({
	plugins: [inlangPlugin(), sveltekit()],
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"]
	},
	server: {
		fs: {
			allow: [".."]
		}
	}
});
