<script lang="ts">
	import { enhance } from '$app/forms';
	import { Confetti } from 'svelte-confetti';
	import { countries } from '$lib/constants';

	let { data } = $props();
	let searchTerm = $state('');
	let showDropdown = $state(false);

	let filteredCountries = $state(countries);

	$effect(() => {
		filteredCountries = countries.filter((country) =>
			country.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
	});

	function selectCountry(country: { name: string; flag: string }) {
		searchTerm = country.name;
		showDropdown = false;
	}
</script>

<div class="flex h-[80vh] flex-col items-center justify-center gap-3">
	<h1 class="text-center text-4xl font-bold">Thank you for voting!</h1>

	{#if !data.detailsComplete}
		<p>If willing fill the details below</p>
		<form
			action="?/submitDetails"
			method="POST"
			use:enhance
			class="flex w-full max-w-80 flex-col gap-2"
		>
			<label for="yob">
				Year Of Birth
				<input type="number" name="yob" id="yob" required />
			</label>

			<label for="country">
				Country
				<div class="relative">
					<input
						type="text"
						placeholder="Search for a country..."
						name="country"
						id="country"
						required
						bind:value={searchTerm}
						oninput={() => (showDropdown = true)}
						class="w-full rounded border p-2"
					/>

					{#if showDropdown && filteredCountries.length > 0}
						<ul
							class="absolute left-0 top-full mt-1 max-h-40 w-full overflow-y-auto rounded border bg-white shadow-lg"
						>
							{#each filteredCountries as country}
								<li>
									<button
										onclick={() => selectCountry(country)}
										class="w-full cursor-pointer p-2 text-left hover:bg-blue-100"
									>
										{country.flag}
										{country.name}
									</button>
								</li>
							{/each}
						</ul>
					{/if}
				</div>
			</label>

			<button
				type="submit"
				class="mt-3 rounded-sm border-2 border-blue-800 bg-blue-800 px-5 py-2 font-semibold text-white active:bg-blue-900"
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
		@apply flex w-full select-none rounded-sm border-2 p-1 text-base transition-all duration-300;
	}
	label {
		@apply text-sm;
	}
	ul {
		@apply rounded border border-gray-300;
	}
</style>
