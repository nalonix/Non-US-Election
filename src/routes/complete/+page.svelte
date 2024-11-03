<script lang="ts">
	import { Confetti } from 'svelte-confetti';
</script>

<div>
	<h1>Complete</h1>
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
