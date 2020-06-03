<template>
  <v-app  color="transparent">
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            
          </v-list-item-icon>
            
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  </v-app>
</template>

<script>
export default {
name:"Nav",
    data () {
    return {
      items: [
        { title: 'Dashboard'},
        { title: 'Typography'},
        { title: 'Table Basics'},
        { title: 'Notification'},
        { title: 'Components'},
        { title: 'Archives'},
      ],
    }
}
}
</script>

<style scoped>
.theme--light.v-application {
    background: rgba(255, 255, 255, 0);
    color: rgba(240, 240, 240, 0.87);
}
</style>