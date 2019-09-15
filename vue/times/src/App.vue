<template>
  <div id="app" class ="container-fluid">
    <Directives />
  </div>
</template>

<script>
import Directives from './components/Directives.vue'
export default {
  name: 'app',
  components: {
    Directives
  }
}
</script> 

<style>
body{
  background-color: #777!important;
}
</style>
