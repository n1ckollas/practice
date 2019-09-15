<template>
    <div class="row">
        <div class="col-md-12">
            <h1>Filters and Mixins</h1>
            <p>{{ text | toUppercase | to-lowercase }}</p>
            <hr>
            <input type="text" name="text" v-model="filteredText" id="">
            <hr>
            <ul>
                <li v-for="f in filteredFruits">{{f}}</li>
            </ul>
        </div>
    </div>    
</template>
<script>
export default {
    data(){
        return {
            text : 'Hello world!!',
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            filteredText:'',
        }
    },
    filters:{
        toUppercase(value){
            return value.toUpperCase();

        }
    },
    computed: {
        filteredFruits(){
            return this.fruits.filter((element) => {
                return element.match(this.filteredText);
            })
        }
    }
}
</script>
<style scoped>

</style>