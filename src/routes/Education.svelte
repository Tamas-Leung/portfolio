<script>
	import { fly } from 'svelte/transition';
</script>

<span in:fly={{ x: 100, duration: 500 }} class="grid gap-4 md:grid-cols-2">
	<div>
		<div class="experience-top-row">
			<h2 class="text-xl">McMaster University</h2>
			<p class="experience-date">Sept 2018 - April 2023</p>
		</div>
		<div class="mb-2 flex flex-col md:flex-row justify-between">
			<h2 class="text-md">B.Eng in Software Engineering (Graduated)</h2>
			<p class="text-sm">Hamilton, Canada</p>
		</div>
		<ul>
			<li class="list-item">3.96/4.00 GPA (11.94 on a 12-point scale)</li>
			<li class="list-item">Dean's Honour list all four years</li>
		</ul>
	</div>
	<div>
		<img class="image-border rotated" style="--deg: 1deg" src="/mcmaster.jpg" alt="Tamas Leung" />
	</div>
</span>

<style lang="scss">
	.list-item {
		list-style-type: circle;
		margin-left: 2rem;
		font-size: 14px;
	}

	.experience-date {
		font-size: 0.8rem;
	}

	.experience-top-row {
		display: flex;
		flex-direction: column;
		@media (min-width: 768px) {
			flex-direction: row;
			align-items: flex-end;
		}
		justify-content: space-between;
	}
</style>
