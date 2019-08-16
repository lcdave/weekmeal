<template>
	<div>
		<PageHeader></PageHeader>
		<MealList v-bind:meals="meals"></MealList>
	</div>
</template>

<script>
	// @ is an alias to /src
	import PageHeader from '@/components/Header.vue'
	import MealList from "../components/MealList";

	export default {
		name: 'home',
		components: {
			MealList,
			PageHeader
		},
		data() {
			return {
				meals: [
					{
						index: 1,
						header: 'MONTAG',
						description: 'Spaghetti Carbonara',
						bgImage: require('@/assets/images/carbonara.jpg')
					},
					{
						index: 2,
						header: 'DIENSTAG',
						description: 'Risotto Funghi',
						bgImage: require('@/assets/images/risotto_funghi.jpg')
					},
					{
						index: 3,
						header: 'MITTWOCH',
						description: 'Piccolinis',
						bgImage: require('@/assets/images/piccolinis.jpg')
					},
					{
						index: 4,
						header: 'DONNERSTAG',
						description: 'Kartoffelstock mit Fleisch und Gemüse',
						bgImage: require('@/assets/images/kartoffelstock_fleisch.jpg')
					},
					{
						index: 5,
						header: 'FREITAG',
						description: 'Pizza',
						bgImage: require('@/assets/images/pizza.jpeg')
					},
					{
						index: 6,
						header: 'SAMSTAG',
						description: 'Fajitas',
						bgImage: require('@/assets/images/fajitas.jpeg')
					}
				],
			};
		}
	}
</script>
