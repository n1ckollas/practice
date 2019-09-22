export const filterMixin = {
    data(){
        return {
            text : 'Hello world!!',
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            filteredText:'',
        }
    },
    created(){
        console.log('inside Mixin Created')
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