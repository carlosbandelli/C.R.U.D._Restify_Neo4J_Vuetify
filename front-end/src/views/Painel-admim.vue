
<template>
    <div>
        <h1 class="d-flex mx-auto justify-center">Painel de usuarios</h1>
        <hr>
        <router-link :to="{ name: 'Register-user'}">
            <v-btn elevation="2" rounded large color="blue darken-1" class="my-3 white--text d-flex mx-auto justify-center text-decoration-none">
                Cadastrar
            </v-btn>
        </router-link>
        <div class="d-flex  ma-16 flex-wrap justify-center">
            <v-card class="ma-5" v-for="user in users" :key="user.id" width="344" height="344" elevation="9" outlined shaped>
                <v-list-item three-line>
                    <v-list-item-content>
                        <div class="text-overline mb-1">
                            ID: {{user._id}}
                        </div>
                        <v-list-item-title class="text-h5 mb-1">
                            Nome: {{user.name}}
                        </v-list-item-title>
                            <v-list-item-subtitle>
                                Email: {{user.email}}
                            </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-card-actions class="d-flex mx-5 flex-wrap justify-space-around">
                    <router-link :to="{ name: 'Edit-user', params:{id: user._id}}">
                        <v-btn elevation="2" rounded large color="yellow darken-1" class="my-3 white--text text-decoration-none">
                            Editar
                        </v-btn>
                    </router-link>
                    <router-link :to="{ name: 'Delete-user', params:{id: user._id}}">
                        <v-btn elevation="2" rounded large color="red darken-1" class="my-3 white--text">
                            Deletar
                        </v-btn>
                    </router-link>
                </v-card-actions>
                 
                   
            </v-card>
        </div>


    </div>
</template>

<script>
import axios from 'axios';
export default {
    created(){
        axios.get("http://localhost:3000/userall").then(res => {
            console.log(res.data)
            this.users = res.data
        }).catch(err => {
            console.error(err)
        })

    },

    data() {
        return{
            users: [],
            dialog: false,
            deleteName:'',            
            deleteUserId:-1,

        }
    },

    methods: {
        showModal(id,name){
            this.deleteName = name            
            this.deleteUserId = id
            this.dialog = true
            console.log(this.deleteUserId)
            console.log(name)
        },
        hideModal(){
            this.dialog = false
        },
        deleteUser(){
            axios.delete("http://localhost:3000/deleteuser/"+this.deleteUserId).then(res => {
                console.log(res)
                this.dialog = false
            }).catch(err=> {
                console.log(err)
                this.dialog = false
            })
        }
       

    },
}
</script>