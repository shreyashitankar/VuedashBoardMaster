  

<template>
 
 <v-container class="grey lighten-5" fill-height fluid>
   
    <v-row no-gutters>
      <v-flex md2 backgroundcolor="blue" class="mynavbar"
      >
        <div class="Navigation">
          <Nav />
        </div>
      </v-flex>
      <v-flex md10
      >
        <v-card
        width="100%"
        height="60" flat>
      <v-app-bar  clipped-right  flat>
      
      <v-card class="menutitle mt-6"  flat align-canter>
        <Menu/>
        
      </v-card>  
      </v-app-bar>
        </v-card>
      <v-content color="transparent" >
      <Container />
      
    </v-content>
      </v-flex>
      
    </v-row>
    
  </v-container>
 
</template>

<script>
import Menu from "./components/menu.vue"
import Container from './components/container.vue'
import Nav from './components/Navigation.vue'
export default {
  name: 'App',
  components: {
    Menu,
    Container,
    Nav
  }}

</script>

<style>

.container{
    padding: 0;
}

.rounded-border{
    border-radius: 10px;
}
.Navigation{
    height: 1400px;
    background-color: rgb(48, 48, 83);
}
.menutitle{
    margin-left: 20px;
    
    font-family: Arial, Helvetica, sans-serif;
}

.theme--light.v-sheet {
    background-color: #ffffff00;
    
    color: rgba(3, 3, 3, 0.87);
}
@media only screen and (max-width: 786px){
.mynavbar{
    display: none;
  }
}
</style>
