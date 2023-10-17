<template>
    <v-card>
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
      >
        <v-list-item class="px-2">
          <v-btn
            icon
            @click.stop="mini = !mini"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>
  
        <v-divider></v-divider>
  
        <v-list dense>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
                <router-link :to="item.link">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </router-link>
            </v-list-item-content>

          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </template>
  <script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city' , link:'/'},
          { title: 'Registration', icon: 'mdi-account' ,link:'/registration'},
          { title: 'Login', icon: 'mdi-account-group-outline', link:'/login'},
          { title:'About' ,icon:'mdi-about',link:'/about' }
        ],
        mini: true,
      }
    },
  }
</script>