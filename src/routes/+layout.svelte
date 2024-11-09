<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import '../app.css';
	let { children } = $props();

	$effect(() => {
		console.log('layout rendered');
	});
</script>

<header>
	<a href="/"> Not So Fit </a>
	<Button
		onclick={() => {
			window?.toggleTheme && window.toggleTheme();
		}}>toggle theme</Button
	>
</header>
{@render children()}
<footer>Made with 💘 by #TODO:?</footer>
