<template>
    <v-container class="menu" >
         
        <v-row class="menu2">
            <v-card class="menuitems pa-2 white--text" app title  flat color="transparent"  width="70" >User</v-card>
            <v-card class="menuitems pa-2 white--text" app title  flat color="transparent"  width="110" >Dashboard</v-card>
            <v-card class="menuitems pa-2 white--text" app title  flat color="transparent"  width="100" >Settings</v-card>
            
            <v-text-field class=""
            
            placeholder="Search"
            filled
            rounded
            append-icon="mdi-magnify"
          ></v-text-field>
               
        </v-row>
       
    </v-container>
</template>

<script>
export default {
    name:"Menu",
    data: ()=>{
        return {
            dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana']
        }
    }
}
</script>

<style scoped>
.menuitems{
    margin-top:3%;
    margin-left: 10px;
    
}
.menu2{
    height:58px;
}
.v-text-field{
      width: 400px;
      
}
</style>