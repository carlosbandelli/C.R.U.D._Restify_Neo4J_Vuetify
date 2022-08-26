<template>
    <div>
        <h1 class="d-flex mx-auto justify-center">Edição de usuario de usuarios</h1>
        <hr>
         <v-card class="mx-auto mt-10" max-width="400">  
            <v-card-title class="text-h5">
                Deletar usuario
            </v-card-title>
            <v-card-text>
                Voce quer deletar {{this.name}}
            </v-card-text>
                 <v-btn class="my-3 white--text" color="red darken-1" elevation="3" large @click="deleteUser">
                    Excluir
                </v-btn>             
            </v-card>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    created() {
        axios.get("http://localhost:3000/findoneuser/" + this.$route.params.id).then(res => {
            console.log(res)
                this.name =  res.data.name,
                this.email = res.data.email
                this.id = res.data._id
        }).catch(err => {
            console.log(err.response)
            
        })
    },
    data(){
        return{
            name:'',
            email:'',
            id:'',
        }
    },     
    methods: {        
        deleteUser(){
            axios.delete("http://localhost:3000/deleteuser/"+ this.$route.params.id,).then(res => {
            console.log(res)
            this.$router.push({path:'/' })     
            }).catch(err => {
                console.log(`err ${err.response}`)           
            })           
        },
       
    },
}
</script>