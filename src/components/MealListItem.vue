<template>
	<div class="meal">
		<div class="meal_image" v-bind:style="{backgroundImage: 'url(' + WeekMealItem.bgImage + ')' }"></div>
		<div class="meal_body">
			<div class="meal_header">{{getCurrentDay}}</div>
			<div class="meal_description">{{ WeekMealItem.description }}</div>
			<div class="meal_details"><a href="#" class="mod_button">Rezept</a></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'MealListItem',
		props:['WeekMealItem', 'WeekMealItemIndex'],
		data() {
			return {
				days: [
					'Montag',
					'Dienstag',
					'Mittwoch',
					'Donnerstag',
					'Freitag',
					'Samstag'
				],
			}
		},
		computed: {
			getCurrentDay: function () {
				return this.days[this.WeekMealItemIndex];
			}
		},
		methods: {},
	};

</script>

<style lang="scss">
	.meal {
		position: relative;
		min-height: rem-calc(370);
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		margin-bottom: rem-calc(50);

		&:hover {
			box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
		}

		&_image {
			background-size: cover;
			width: 100%;
			height: 190px;
			background-position: center center;
		}

		&_header {
			font-size: rem-calc(12);
			padding-top: rem-calc(20);
			text-transform: uppercase;
			font-weight: bold;
			color: $color-martinique;
		}

		&_description {
			font-size: rem-calc(19);
			font-weight: bold;
		}

		&_details {
			position: absolute;
			left: 50%;
			-webkit-transform: translateX(-50%);
			transform: translateX(-50%);
			bottom: rem-calc(20);
		}

		&_body {
			padding: rem-calc(0 20);
		}
	}
</style>