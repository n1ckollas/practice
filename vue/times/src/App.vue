<template>
  <div id="app" class ="container-fluid">
    <Filters />
  </div>
</template>

<script>
import Filters from './components/Filters.vue'

export default {
  name: 'app',
  components: {
    Filters
  }
}
</script> 

<style>
body{
  background-color: #777!important;
}
</style>
