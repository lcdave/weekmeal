<template>
	<div class="mod_header">
		<div class="header_container">
			<div class="header_grid">
				<div class="header_cell">
					<h1>{{ title }}</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'header',
		data() {
			return {
				title: 'WeekMeal'
			}
		}
	};
</script>

<style lang="scss">
	.mod_header {
		background: $color-martinique;
		padding: rem-calc(40 0);
		margin-bottom: rem-calc(70);
	}

	.header-container {
		@include xy-grid-container();
	}

	.header-grid {
		@include xy-grid();
		@include xy-gutters($negative: true);
	}

	.header-item {
		@include xy-cell(12 of 12, $breakpoint: small);

		@include breakpoint(medium) {
			@include xy-cell(12 of 12, $breakpoint: medium);
		}
		@include breakpoint(large) {
			@include xy-cell(12 of 12, $breakpoint: large);
		}
	}
</style>