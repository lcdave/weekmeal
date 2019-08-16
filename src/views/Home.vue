<template>
  <div>
    <PageHeader></PageHeader>
    <router-link class="mod_button" :to="$router.resolve({name: 'about'}).href">Generate WeekMeal</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    PageHeader
  }
}
</script>
