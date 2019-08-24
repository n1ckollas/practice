<template>
  <div>
    <h1 v-once>{{title}}</h1>
    <input type="text" v-on:input="changeTitle">
    <p>{{ sayHello() }} <a :href="link">Boogle</a></p>
    <p>{{title}}</p>
    <p v-html="insideLink"></p>

    <hr><hr>

    
  </div>
</template>

<script>
export default {
  data:function(){
    return {
      title: 'hello world',
      link: 'https://google.com',
      insideLink: '<a href="http://yahoo.com">Yahoo</a>',
    }
  },
  mounted:function(){
    console.log(this.title);
  },
  computed: {
    
  },
  methods:{
    changeTitle: function(){
      this.title = event.target.value;
      console.log(this.title);
      return this.title;
    },
    sayHello: function() {
      console.log('I am saying hello');
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
