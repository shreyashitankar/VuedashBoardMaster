<template>
    <v-container class="Gridhead">
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
      <v-row>
        <v-col
          cols="6"
          md="4"
          class="pa-6"
        >
          <v-card
            class="pa-2 rounded-border"
            outlined
            tile
            :elevation="3"
            color="fade"
           
            
          >
         <v-card class="pa-3"  flat color="transparent"> 
        <v-btn class="ml-2 float-right" icon color="grey"><v-icon>mdi-cloud-download</v-icon></v-btn>
          <v-list-item-title class="blue--text title" ><p class="mytext">9823</p></v-list-item-title>
          <v-list-item-subtitle class="blue--text"><p class="mytext">Members Online</p></v-list-item-subtitle>
          
        </v-card>
            <line-chart height="60px" :colors="['#fc5603']"  :library="chartOptions" :data="{'2017-05-13': 2, '2017-05-14': 5,  '2017-05-15': 3,  '2017-05-16': 4, '2017-05-16': 5,  '2017-05-17': 4}"></line-chart>
          </v-card>
        </v-col>
        <v-col
          cols="6"
          md="4"
          class="pa-6"
        >
          <v-card
            class="pa-2 rounded-border"
            outlined
            tile
           :elevation="3"
            color="fade"
          >
         <v-card class="pa-3"  flat color="transparent"> 
        <v-btn class="ml-2 float-right" icon color="grey"><v-icon>mdi-cloud-download</v-icon></v-btn>
          <v-list-item-title class="blue--text title" ><p class="mytext">123909</p></v-list-item-title>
          <v-list-item-subtitle class="blue--text"><p class="mytext">Social Shares</p></v-list-item-subtitle>
          
        </v-card>
            <line-chart height="60px" :curve="false" :colors="['#fc5603']"  :library="chartOptions" :data="{'2017-05-13': 2, '2017-05-14': 4,  '2017-05-15': 2,  '2017-05-16': 6, '2017-05-17': 2,  '2017-05-18': 3}"></line-chart>
          </v-card>
        </v-col>
        <v-col
          cols="6"
          md="4"
          class="pa-6"
        >
          <v-card
            class="pa-2 rounded-border"
            outlined
            tile
           :elevation="3"
            color="fade"
          >
         <v-card class="pa-3"  flat color="transparent"> 
        <v-btn class="ml-2 float-right" icon color="grey"><v-icon>mdi-cloud-download</v-icon></v-btn>
          <v-list-item-title class="title"><p class="mytext">328</p></v-list-item-title>
          <v-list-item-subtitle class="blue--text"><p class="mytext">Trending Topics</p></v-list-item-subtitle>
          
        </v-card>
            <column-chart height="60px" :colors="['#fc5603']" :library="chartOptions" :data="{'2017-05-13': 2, '2017-05-14': 5,  '2017-05-15': 3,  '2017-05-16': 4, '2017-05-17': 5,  '2017-05-18': 4}"></column-chart>
          </v-card>
        </v-col>
      </v-row>
  
      <!-- Columns are always 50% wide, on mobile and desktop -->
      
    </v-container>
</template>

<script>
export default {
    name:"Cards",
    data(){
        return{
            chartOptions:{
                 layout: {
        padding: {left: 10, right: 5, top: 5, bottom: 2}
      },
      scales: {
        xAxes: [{
          display: false // this hides the x-axis
        }],
        yAxes: [{
          display: false // this hides the x-axis
        }]
      }}
        }
    }
}
</script>
<style  scoped>
.rounded-border{
    border-radius: 10px;
}
.mytext{
    color: rgb(8, 156, 255);
    height: 14px;
}
</style>