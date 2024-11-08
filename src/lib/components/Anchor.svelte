<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	type Props = {
		children: Snippet;
	} & HTMLAnchorAttributes;

	let { children, ...restProps }: Props = $props();
</script>

<a class="rounded-xl bg-orange-700 px-4 py-2 text-orange-100" {...restProps}>
	{@render children()}
</a>
