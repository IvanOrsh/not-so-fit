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
