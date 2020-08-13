<template>
  <div class="Team">
    <h1 class style="marginLeft:500px">Team</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex s12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat calss="text-xs-center ma-3">
            <c-responsive class="pt4">
              <v-avatar size="150" class="grey lighten-2">
                <img :src="person.avatar">
              </v-avatar>
            </c-responsive>
            <v-card-text>
              <div class="subheading">{{person.name}}</div>
              <div class="subheading">{{person.role}}</div>

            </v-card-text>
            <v-card-actions>
              <v-btn flat color="grey">
                <v-icon small left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions> 
          </v-card>
        
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      team:[
        {name:'Cr7',role:'football player',avatar:'/avatar2.jpg'},
        {name:'Beckham',role:'football player',avatar:'/avatar1.jpg'},
        {name:'Torres',role:'football player',avatar:'/avatar3.jpg'},
       {name:'Cooner',role:'developer ',avatar:'/avatar4.jpg'}

      ]
    }
  }
};
</script>

