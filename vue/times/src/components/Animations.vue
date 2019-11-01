<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="animated infinite bounce delay-2s">Animations</h1>
                <hr>
                <br><br>
                <select class="form-control" id="ani" v-model="alertAnimation">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br><br>
                <button class="btn btn-primary mb-2 mt-2" @click="show = !show">Show Alert</button>
                <transition name="fade">
                    <div class="alert alert-info" v-if="show">First animation</div>
                </transition>
                <transition :name="alertAnimation" type="animation" appear>
                    <div class="alert alert-info" v-show="show">Appear + v-show</div>
                </transition>
                <transition enter-active-class="animated bounce" leave-active-class="animated shake">
                    <div class="alert alert-info" v-if="show">Enter and Leave classes</div>
                </transition>
                <h1>No "key"</h1>
                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-if="show">Alert ONE</div>
                    <div class="alert alert-warning" v-else>Alert TWO</div>
                </transition>
                <h1>With "key"</h1>
                <transition :name="alertAnimation" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info">Alert ONE</div>
                    <div class="alert alert-warning" v-else key="warning">Alert TWO</div>
                </transition>
                <button>
                    Add Item
                </button>
                <ul>
                    <li v-for="number in numbers" :key="number" class="list-group-item">{{number}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show:true,
            alertAnimation:'fade',
            numbers:[1, 2,3,5,4]
        }
    }
}
</script>
<style scoped>
    .fade-enter{
        opacity:0;
    }
    .fade-enter-active{
        transition: opacity 1s;
    }
    .fade-leave{
        opacity: 1;
    }
    .fade-leave-active{
        transition: opacity 1s;
        opacity: 0;
    }



    .slide-enter{
        opacity:0;
        /* transform: translate(20px); */
    }
    .slide-enter-active{
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }
    .slide-leave{
        opacity:1;
    }
    .slide-leave-active{
        animation: slide-out 1s ease-out forwards;
        transition: opacity 3s;
        opacity: 0;
    }

    @keyframes slide-in {
        from{
            transform: translateY(20px);
        }to{
            transform: translateY(0px);
        }
    }
    @keyframes slide-out {
        from{
            transform: translateY(0px);
        }to{
            transform: translateY(20px);
        }
    }

</style>