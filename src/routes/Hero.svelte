<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<div class="stack | h-[50svh] bg-gradient-to-br from-orange-500 via-orange-300 to-teal-500">
	<div class="m-4 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 lg:m-8"></div>
	<div class="flex flex-col items-center gap-4 place-self-center">
		<h1
			class="bg-gradient-to-br from-orange-500 via-orange-300 to-teal-500 bg-clip-text text-7xl text-transparent lg:text-8xl"
		>
			Not So Fit
		</h1>
		<Button href="/programme">See this week&apos;s programme</Button>
	</div>
</div>
