<script lang="ts">
	import { googleSignIn } from '$lib/client';
</script>

<div>
	<button onclick={googleSignIn} class="bg-rose-600 text-white active:bg-rose-900"
		>Google Sign In</button
	>
</div>
