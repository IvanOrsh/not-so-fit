<script lang="ts">
	import Anchor from '$lib/components/Anchor.svelte';
	import Hero from './Hero.svelte';
</script>

<Hero />

<Anchor
	onclick={() => {
		console.log('track that the user clicked this');
	}}
	href="/contact">Contact</Anchor
>
<Anchor href="/personal">Generate a programme</Anchor>
<Anchor href="/discord">Join the community</Anchor>
