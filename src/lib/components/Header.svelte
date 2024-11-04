<script lang="ts">
	import { handleSignOut } from '$lib/client.js';
</script>

<div class="flex w-full justify-end px-5 py-3">
	<button
		onclick={handleSignOut}
		class="w-24 rounded-sm bg-rose-600 px-2 py-1 text-white active:bg-rose-900"
	>
		leave
	</button>
</div>
