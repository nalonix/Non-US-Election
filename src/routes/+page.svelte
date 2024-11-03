<script lang="ts">
	import { page } from '$app/stores';
	import { handleSignOut } from '$lib/client.js';

	const { data } = $props();

	console.log('My👉: ', data);

	console.log('Page data 📃: ', $page);
</script>

<div>
	{JSON.stringify(data.session)}
</div>

{#if data.session}
	<button onclick={handleSignOut} class="bg-rose-600 text-white active:bg-rose-900">Sign Out</button
	>
{/if}

<div class="prose prose-sm prose-indigo">
	<h1>SvelteUniv</h1>
	<h2>Nice work</h2>
	<p>A SvelteKit template for building a universal app with NeonDB</p>
</div>
