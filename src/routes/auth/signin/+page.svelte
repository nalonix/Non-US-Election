<script lang="ts">
	import { googleSignIn } from '$lib/client';

	let loading = $state(false);

	function handleGoogleSignIn() {
		loading = true;
		googleSignIn().then((res) => {
			console.log('Google Sign In Response: ', res);
			loading = false;
		});
	}
</script>

<div
	class="flex h-[100vh] items-center justify-center bg-gradient-to-b from-[#3a81f5]/20 via-transparent to-[#ff191f]/20"
>
	<button
		onclick={handleGoogleSignIn}
		class={`flex flex-row items-center gap-3 rounded-sm bg-stone-200 px-4 py-2 text-lg font-semibold shadow-sm transition-all duration-200 hover:bg-stone-300 active:bg-stone-400/90 ${loading ? ' animate-pulse bg-stone-400/80' : ''}`}
		disabled={loading}
	>
		<img src="/media/icon/google.png" alt="Google Logo" class="h-7 w-7" />
		Google Sign In
	</button>
</div>
