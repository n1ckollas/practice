<template>
    <div>
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 text-center">
                <label for="email">Email</label>
                <input type="email" name="emai" id="email" v-model="userData.email">
            </div>
            <div class="col-md-3"></div>
        </div>
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 text-center">
                <label for="password">password</label>
                <input type="password" name="emai" id="password" v-model.lazy="userData.password">
            </div>
            <div class="col-md-3"></div>
        </div>
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 text-center">
                <label for="age">Age: </label>
                <input type="number" name="age" id="age" v-model="userData.age">
            </div>
            <div class="col-md-3"></div>
        </div>
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 text-center">
                <p>Message</p>
                <textarea name="message" id="message" v-model="message"></textarea>
            </div>
            <div class="col-md-3"></div>
        </div>
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 text-center">
                <p>Message</p>
                <input type="checkbox" v-model="sendMethod" value="sendEmail" id="sendEmail">
                <input type="checkbox" v-model="sendMethod" value="sendText" id="sendText">
                <input type="checkbox" v-model="sendMethod" value="sendLetter" id="senLetterl">
                <input type="checkbox" v-model="sendMethod" value="sendTelegram" id="sendTelegram">
            </div>
            <div class="col-md-3"></div>
        </div>
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 text-center">
                <p>Message</p>
                <input type="radio" v-model="gender" value="sendEmail" id="sendEmail">
                <input type="radio" v-model="gender" value="sendText" id="sendText">
                <input type="radio" v-model="gender" value="sendLetter" id="senLetterl">
                <input type="radio" v-model="gender" value="sendTelegram" id="sendTelegram">
            </div>
            <div class="col-md-3"></div>
        </div>
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 text-center">
                <p>Select a priority:</p>
                <select v-model="selectedPriority">
                    <option v-for="p in priorities" :key="p" :value="p" :selected="p == 'low'">{{p}}</option>
                </select>
            </div>
            <div class="col-md-3"></div>
        </div>
        <div class="row">
            <button class="btn btn-primary" @click.prevent="change()">
                send
            </button>
        </div>
        <div class="row" v-if="isSubmitted">
            <div class="col-md-3"></div>
            <div class="col-md-6 text-center">
                <h3>Form Data</h3>
                <p>Email : {{userData.email}}</p>
                <p>password : {{userData.password}}</p>
                <p>age : {{userData.age}}</p>
                <p style="white-space: pre">message : {{ message }}</p>
                <p>Send Methods {{ sendMethod}}</p>
                <p>Gender {{ gender }}</p>
                <p>Seleced {{ selectedPriority }}</p>
            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            userData:{
                email: '',
                password:'',
                age: 27,
            },
            message:'A new text',
            sendMethod:[],
            gender:'sendTelegram',
            priorities: ['high', 'medium', 'low'],
            selectedPriority: 'high',
            isSubmitted: false,
        }
    },
    methods:{
        change: function(){
            this.isSubmitted = !this.isSubmitted;
        }
    }
}
</script>

<style scoped>
p{
    background-color: #fff;
    padding: 15px;
}
textarea{
    width:100%;
    height:90px;
}
</style>