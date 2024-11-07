## not quite sure...

- transpiling with vite with the help of sveltekit
- don't forget to check not just `tsconfig.json`, but also `./.svelte-kit/tsconfig.json` (just in case)
- #TODO: do more research about adapters (`svelte.config.js`)
- #TODO: edit `README.md`
- #TODO: edit playwright config
- vite inspector?
- https://smolcss.dev/#smol-stack-layout, what is "stack layout"?? #TODO: figure out
- just in case we need to add tailwind:

```bash
pnpm dlx sv add tailwindcss
```

## svelte's component

```svelte
<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		href: string;
		children: Snippet;
	};

	let { href, children }: Props = $props();
</script>

<a class="rounded-xl bg-orange-800 px-4 py-2 text-orange-100" {href}>
	{@render children()}
</a>
```
