<script lang="ts">
	import { enhance } from '$app/forms';
	import Header from '$lib/components/Header.svelte';

	const { data } = $props();

	let selectedOption = $state('');
</script>

<Header />
<div class="flex h-[80vh] flex-col items-center justify-center gap-4 p-4">
	<p>You can only vote once!</p>
	<form action="/" use:enhance method="POST" class="flex w-full max-w-80 flex-col gap-2">
		<label for="kamala" class:selected={selectedOption === 'Kamala Harris'}>
			<img src="/media/image/kamala.jpg" class="h-9 w-9" alt="kamala harris pic" />
			<input
				type="radio"
				name="vote"
				id="kamala"
				value="Kamala Harris"
				bind:group={selectedOption}
			/>
			Kamala Harris
		</label>

		<label for="donald" class:selected={selectedOption === 'Donald Trump'}>
			<img src="/media/image/trump.jpg" class="h-9 w-9" alt="donald trump pic" />
			<input
				type="radio"
				name="vote"
				id="donald"
				value="Donald Trump"
				bind:group={selectedOption}
			/>
			Donald Trump
		</label>

		<button
			class="mt-3 rounded-sm border-2 border-blue-800 bg-blue-800 px-5 py-2 font-semibold text-white"
			>Submit Vote</button
		>
	</form>
</div>

<style lang="postcss">
	label {
		@apply flex select-none flex-row items-center gap-3 rounded-sm border-2 px-3 py-2 font-semibold transition-all duration-300 hover:bg-gray-100;
	}

	input {
		@apply sr-only;
	}

	/* Add a black border to selected labels */
	.selected {
		@apply border-2 border-gray-500;
	}
</style>
