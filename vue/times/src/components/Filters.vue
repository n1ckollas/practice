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
import { filterMixin } from '../mixins/filter.mixin.js'
export default {
    mixins:[filterMixin],
    created() {
        console.log('Inside ths component')
    }
}
</script>
<style scoped>

</style>