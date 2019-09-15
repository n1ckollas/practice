<template>
  <div id="app" class ="container-fluid">
    <Parent />
  </div>
</template>

<script>
import Parent from './components/Parent.vue'

export default {
  name: 'app',
  components: {
    Parent
  }
}
</script> 

<style>
body{
  background-color: #777!important;
}
</style>
