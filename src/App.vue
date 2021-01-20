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
        color="primary"
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
      <v-btn
        icon
        large
      >
        <v-avatar
          size="70px"
          item
        >
          <v-img
            src="@/assets/logo.png"
            alt="Vuetify"
          ></v-img></v-avatar>
      </v-btn> 
      <v-appbar-title>College Buddy</v-appbar-title>
     <v-spacer>
     </v-spacer>
     <v-spacer>
     </v-spacer>
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
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon >mdi-account</v-icon>
      </v-btn>
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-content>

    <!-- Provides the application the proper gutter -->

      <!-- If using vue-router -->
      <router-view></router-view>
  </v-content>

  <v-footer 
    id="home-footer"
    absolute
    color="grey darken-4"
    dark
    min-height="72" app>
    <!-- -->
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <div class="d-flex flex-wrap justify-md-start justify-center justify-md-none">
            <template v-for="(s, i) in social">
              <a
                :key="s"
                class="white--text pa-1 pa-md-0"
                href="#"
                v-text="s"
              />

              <v-responsive
                v-if="i < social.length - 1"
                :key="`divider-${s}`"
                class="mx-4 shrink hidden-sm-and-down"
                max-height="24"
              >
                <v-divider vertical />
              </v-responsive>
            </template>
          </div>
        </v-col>

        <v-col
          class="text-center text-md-right"
          cols="12"
          md="6"
        >
          Copyright &copy; 2021 College Buddy
        </v-col>
      </v-row>
    </v-container>    
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
      social: [
        'Facebook',
        'Twitter',
        'Instagram',
        'Linkedin',
      ],
      items: [
        'Home',
        'Services',
        'About',
      ],
      
    }),
  
 
};
</script>