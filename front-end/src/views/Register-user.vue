<template>
    <div>
        <h1 class="d-flex mx-auto justify-center">Registro de usuarios</h1>
        <hr>
         <v-card class="mx-auto mt-10" max-width="400">  
            <v-form class="d-flex justify-space-around flex-column px-10">
                <v-text-field v-model="name" label="Name" placeholder="Name"></v-text-field>
                <v-text-field v-model="email" placeholder="email@email.com.br"></v-text-field> 
                <v-text-field v-model="password" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" :type="show ? 'text' : 'password'" @click:append="show = !show"></v-text-field>
                <v-btn class="my-3 white--text" color="green darken-1" elevation="3" large @click="register">Cadastrar</v-btn>  
            </v-form>
        </v-card>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return{
            name:'',
            password:'',
            email:'',            
            show: false,            
        }        
    },
     
    methods: {        
        register(){
            axios.post("http://localhost:3000/addnewuser",{
                name: this.name,
                password: this.password,
                email: this.email           
            }).then(res=> {
                console.log(res)
                this.$router.push({path:'/' })
            }).catch(err=> {                
                console.log(err)
            })
            
        },
       
    },
}
</script>