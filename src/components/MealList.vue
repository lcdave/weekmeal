<template>
    <div class="meal-list">
        <div class="meal-list__container">
            <div class="meal-list__grid">
                <div class="meal-list__item" v-bind:key="WeekMealItem.id" v-for="(WeekMealItem, index) in WeekMeal">
                    <MenuListItem  v-bind:WeekMealItem="WeekMealItem" v-bind:WeekMealItemIndex="index" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MenuListItem from './MealListItem.vue';
    export default {
        name: 'MealList',
        props: ['meals'],
        components: {
            MenuListItem
        },
        data() {
            return {
                WeekMeal: [],
            }
        },
        computed: {  
        },
        methods: {
            getRandomMenu: function () {
                let Menus = [0,1,2,3,4,5];
                let self = this;

                $(this.meals).each(function() {
                    let randomMenu = Menus[Math.floor(Math.random() * Menus.length)];

                    $(Menus).each(function( key, value) {
                        if(value === randomMenu) {
                            Menus.splice(key, 1);
                        }
                    });

                    let randomDish = self.getMenuItem(randomMenu);

                    self.addWeekMealItem(randomDish);
                });
            },
            refreshMenuArray: function(id) {
                for( var i = 0; i < this.Menus.length; i++){
                    if ( this.Menus[i] === id) {
                        this.Menus.splice(i, 1);
                    }
                }
            },
            getMenuItem: function (id) {
                return this.meals[id];
            },
            addWeekMealItem: function (id) {
                this.WeekMeal.push(id);
            },
        },
        beforeMount(){
            this.getRandomMenu();
        },
    };

</script>

<style lang="scss">
    .meal-list {
        margin-bottom: rem-calc(70);

        &__item {
            @include xy-cell(12 of 12, $breakpoint: small);

            @include breakpoint(medium) {
                @include xy-cell(4 of 12, $breakpoint: medium);
            }
            @include breakpoint(large) {
                @include xy-cell(4 of 12, $breakpoint: large);
            }
        }

        &__container {
            @include xy-grid-container();
        }

        &__grid {
            @include xy-grid();
            @include xy-gutters($negative: true);
        }
    }
</style>