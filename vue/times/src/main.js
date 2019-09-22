import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.filter('to-lowercase', function(value){
  return value.toLowerCase();
})
Vue.directive('highlight', {
  bind(el, binding, vnode){
    // el.style.backgroundColor = binding.value;
    let delay = 0;
    if(binding.modifiers['delay']){
      delay = 3000
    }
    setTimeout(() =>{
      if(binding.arg == 'background'){
        el.style.backgroundColor = binding.value;
      }else{
        el.style.color = binding.value;
      }
    }, delay);
  }
})
Vue.mixin({
  created(){
    console.log('Global Mixin -  Created Hook.')
  }
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
