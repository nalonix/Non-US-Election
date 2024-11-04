<script lang="ts">
	import { enhance } from '$app/forms';
	import { Confetti } from 'svelte-confetti';

	let { data } = $props();
</script>

<div class="flex h-[80vh] flex-col items-center justify-center gap-3">
	<h1 class="text-4xl font-bold">Thank you for voting!</h1>
	<p>If willing fill the details below</p>

	{#if !data.detailsComplete}
		<form action="/" method="POST" use:enhance class="flex w-full max-w-80 flex-col gap-2">
			<label for="yob">
				Year Of Birth
				<input type="number" name="yob" id="yob" />
			</label>
			<label for="country">
				Country
				<input type="text" name="country" id="country" />
			</label>
			<button
				type="submit"
				class="mt-3 rounded-sm border-2 border-blue-800 bg-blue-800 px-5 py-2 font-semibold text-white"
				>Submit</button
			>
		</form>
	{/if}
</div>

<div
	style="
 position: fixed;
 top: -50px;
 left: 0;
 height: 100vh;
 width: 100vw;
 display: flex;
 justify-content: center;
 overflow: hidden;
 pointer-events: none;"
>
	<Confetti
		x={[-5, 5]}
		y={[0, 0.1]}
		amount={300}
		infinite
		delay={[500, 2000]}
		fallDistance="100vh"
		colorArray={['#0000FF', '#FF0000', '#FAF9F6']}
	/>
</div>

<style lang="postcss">
	input {
		@apply flex w-full select-none flex-row items-center gap-3 rounded-sm border-2 p-1 text-base transition-all duration-300;
	}
	label {
		@apply text-sm;
	}
</style>
