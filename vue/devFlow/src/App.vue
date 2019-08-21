<template>
  <div id="app">
       <h1 v-once>{{ title}}</h1>
        <input type="text" v-on:input="changeTitle">
        <p>{{ sayHello() }}  - <a v-bind:href="link">Google</a></p>
        <a :href="link">Google</a>

        <p>{{ title }}</p>
        <hr>
        <p v-html="finishedLink"></p>
        <hr>
        <hr>

        <button v-on:click="increase(2, $event)">Click</button>
        <p>{{counter}}</p>
        <p>{{counter * 2}}</p>
        <p>{{counter * 2 > 10 ? 'It is more thant 10'  : 'Not more than 10'}}</p>
        <p v-on:mousemove="updateCoords">
            Coordinates: x:{{x}} / y:{{y}}
            <span v-on:mousemove.stop="">DEAD SPOT</span>
        </p>
        <input type="text" v-on:keyup.enter.space="alertMe">
        <button v-on:click="counter ++">Click</button>
        <hr>
        <h2>two way binding</h2>
        <input type="text" v-model="name">
        <p>{{name}}</p>
        <h2>Reacting to changes with computed properties</h2>
        <button v-on:click="rcounter ++">Increase</button>
        <button @click="rcounter --">Decrease</button>
        <button v-on:click="secondCounter ++">Increase Second</button>
        <p>{{ rcounter }} | {{ secondCounter }}</p>
        <p>{{ result()}} | {{ output }}</p>
        <hr>
        <h2>Dynamicly styling with css classes</h2>
        <div class="demo" @click="attachedRed = !attachedRed" :class="divClasses"></div>
        <div class="demo" :class="{red: attachedRed}"></div>
        <div class="demo" :class="[color, {red : attachedRed}]"></div>
        <input type="text" v-model="color">


        <div class="demo" v-bind:style="{'background-color': 'purple'}"></div>
        <div class="demo" :style="myStyle"></div>
        <div class="demo" :style="[myStyle, {'height': '200px'}]"></div>
        <hr>
        <h2>Conditionals</h2>
        <p v-if="show">You can see me. <span>ME aswell</span></p>
        <p v-else>NOw Me different</p>
        <template v-if="show">
            <h1>INside the Template</h1>
        </template>

        <h1 v-show="show">show/hide exmaple</h1>
        <button @click="show = !show">Switch</button>
        <hr>
        <h2>Lists</h2>
        <ul>
            <li v-for="(ingredient, i) in ingredients" :key="ingredient">{{ ingredient }} ({{ i }})</li>
        </ul>
        <button @click="ingredients.push('spices')">Add New</button>
        <hr>
        <ul>
            <li v-for="person in persons">
                <div v-for="(value, key, index) in person">{{ key }}: {{ value }} ({{ index }})</div>
            </li>
        </ul>
        <span v-for="n in 10">{{ n }}</span>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function(){
    return  {
      title: 'Hello World',
      link: 'http://google.com',
      finishedLink: '<a href="https://google.com">google</a>',
      counter: 0,
      x:0,
      y:0,
      name: 'Mykola',
      rcounter: 0,
      secondCounter: 0,
      attachedRed: false,
      color:'yellow',
      width: 200,
      show: true,
      ingredients: ['meat', 'fruit', 'cookies'],
      persons: [
          { name: 'Max', age: 27, color: 'red' },
          { name: 'Anna', age: 'unknown', color: 'blue' }
      ],
    };
  },
    computed:{
        divClasses: function(){
            return {
                red: this.attachedRed,
                blue: !this.attachedRed,
            }
        },
        myStyle: function(){
            return{
                'background-color' : 'pink',
                'width' : this.width + 'px', 
            }
        },
        output: function(){
            console.log('computed');
            return this.rcounter > 5 ? 'Greater than 5' : 'Smaller'
        }
    },
    watch:{
        rcounter: function(value){ //the name counter matches the name in the data object
            var self = this;
            setTimeout(function(){
                self.rcounter  = 0;
            }, 1000);
        }
    },
    methods: {
        changeTitle: function(event){
            this.title = event.target.value;
            return this.title;
        },
        sayHello: function(){
            this.title = "New hello"
            return this.title
        },
        increase: function(step, event){
            return this.counter += step;
        },
        updateCoords: function(event){
            this.x = event.clientX
            this.y = event.clientY
        },
        alertMe: function(){
            alert('Alert!')
        },
        result: function(){
            console.log('method');
            return this.rcounter > 5 ? 'Greater than 5' : 'Smaller'
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
