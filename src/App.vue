<template>
  <!-- App.vue -->
<v-app id='app'>
  <v-navigation-drawer
    v-model="drawer"
    bottom
    color="transparent"
    fixed
    height="auto"
    overlay-color="secondary"
    overlay-opacity=".8"
    temporary
    v-bind="$attrs"
    v-on="$listeners"
    app
  >
    <v-list
      color="white"
      shaped
    >
      <v-list-item
        v-for="name in items"
        :key="name"
        :to="{ name }"
        :exact="name === 'Home'"
        color="blue darken-1"

      >
        <v-list-item-content>
          <v-list-item-title v-text="name" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
    
  </v-navigation-drawer>

  <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="white"
      >
    <!-- -->
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      />
       <nav-logo>
          <v-img style="margin-left:10px height:60px; width:60px;"
            src="@/assets/logo.png"
            alt="Vuetify"
  
             
          ></v-img></nav-logo>
      <v-appbar-title class="display-1 "><h5 class="text--secondary font-weight-medium" style="margin:10px; padding:5px;">COLLEGE BUDDY</h5></v-appbar-title>
     <v-spacer>
     </v-spacer>
      <div>
        <v-tabs
          class="hidden-sm-and-down"
          optional
        >
          <v-tab
            v-for="(name, i) in items"
            :key="i"
            :to="{ name }"
            :exact="name === 'Home'"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
          >
            {{ name }}
          </v-tab>
        </v-tabs>
      </div>
      
      <v-btn  class="font-weight-regular v-btn--depressed theme--light v-size--large white rounded-pill blue--text text-darken-1">
        <v-icon left >mdi-account</v-icon>Login
      </v-btn>
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-content>

    <!-- Provides the application the proper gutter -->

      <!-- If using vue-router -->
      <router-view></router-view>
  </v-content>
 <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="blue darken-1 font-weight-bold">
        <p class="subheading">Get connected with us on social networks!</p>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
       <strong> {{ new Date().getFullYear() }} — &copy; College Buddy</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</v-app>
</template>

<script>
export default {
  name: 'App',
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
   icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      items: [
        'Home',
        'Services',
        'About',
      ],
      
    }),
  
 
};
</script>