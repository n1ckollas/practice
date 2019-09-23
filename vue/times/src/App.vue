<template>
  <div id="app" class ="container-fluid">
    <Animations />
    <!-- {{ text }} -->
  </div>
</template>

<script>
import Filters from './components/Filters.vue'
import Animations from './components/Animations.vue'

import { filterMixin } from './mixins/filter.mixin.js'

export default {
  // mixins: [filterMixin],
  name: 'app',
  components: {
    Filters,
    Animations
  }
}
</script> 

<style>
body{
  background-color: #777!important;
}
</style>
