<template>
    <div>
        <h1 class="d-flex mx-auto justify-center">Edição de usuario de usuarios</h1>
        <hr>
         <v-card class="mx-auto mt-10" max-width="400">  
            <v-form class="d-flex justify-space-around flex-column px-10" lazy-validation>
                <v-text-field v-model="name"  placeholder="Name"></v-text-field>
                <v-text-field v-model="email"  placeholder="email@email.com.br"></v-text-field>
                 <v-btn class="my-3 white--text" color="green darken-1" elevation="3" large @click="update">
                    Editar
                </v-btn> 
            </v-form>
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
        update(){
            axios.put("http://localhost:3000/updateuser/"+ this.$route.params.id,
                {name: this.name,
                email: this.email,
                id: this._id}
            ).then(res => {
            console.log(res)
            this.$router.push({path:'/' })     
        }).catch(err => {
            console.log(`err ${err.response}`)
            
            
        })
            
            
        },
       
    },
}
</script>