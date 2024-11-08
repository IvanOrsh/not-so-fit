<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Hero from './Hero.svelte';
</script>

<Hero />
<Button
	onclick={() => {
		console.log('track that the user clicked this');
	}}
	href="/contact">Contact</Button
>
<Button href="/personal">Generate a programme</Button>
<Button href="/discord">Join the community</Button>
