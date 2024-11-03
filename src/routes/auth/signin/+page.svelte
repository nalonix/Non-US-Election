<script lang="ts">
	import { gitHubSignOut, gitHubSignIn } from '$lib/client';
</script>

<div>
	<button onclick={gitHubSignIn} class="bg-rose-600 text-white active:bg-rose-900"
		>Github Sign In</button
	>
</div>
