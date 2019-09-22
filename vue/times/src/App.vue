<template>
  <div id="app" class ="container-fluid">
    <Filters />
    {{ text }}
  </div>
</template>

<script>
import Filters from './components/Filters.vue'
import { filterMixin } from './mixins/filter.mixin.js'

export default {
  mixins: [filterMixin],
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
