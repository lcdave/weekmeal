<template>
	<div class="header">
		<div class="header__container">
			<div class="header__grid">
				<div class="header__cell">
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
	.header {
		background: $color-martinique;
		padding: rem-calc(40 0);
		margin-bottom: rem-calc(70);

		&__container {
			@include xy-grid-container();
		}

		&__grid {
			@include xy-grid();
			@include xy-gutters($negative: true);
		}

		&__item {
			@include xy-cell(12 of 12, $breakpoint: small);

			@include breakpoint(medium) {
				@include xy-cell(12 of 12, $breakpoint: medium);
			}
			@include breakpoint(large) {
				@include xy-cell(12 of 12, $breakpoint: large);
			}
		}
	}
</style>