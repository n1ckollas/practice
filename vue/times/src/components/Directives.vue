<template>
    <div class="row">
        <div class="col-md-6">
            <h2 v-highlight:background.delay="'blue'">Highlight me</h2>
        </div>
        <div class="col-md-6">
            <h4 v-local-highlight:background.delay="'yellow'">Local Highlight</h4>
        </div>
    </div>
</template>
<script>
export default {
    directives:{
        'local-highlight':{
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
        }
    }   
}
</script>
<style scoped>

</style>