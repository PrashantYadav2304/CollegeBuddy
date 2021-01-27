<template>
  <section>
    <v-img
      :min-height="minHeight"
      height="920"
      :src="require('@/assets/header.jpg')"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .4), rgba(5, 11, 31, .4)"
      
    >
      <v-container class="fill-height px-4">
        <v-responsive
          class="d-flex align-center"
          height="100%"
          max-width="700"
          width="100%"
        >
        <div class="display-4 font-weight-black" >COLLEGE BUDDY</div>
        <div class="display-1" ><p class>"One stop solution for all your college needs"</p>
        </div>
          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
            <a href="https://play.google.com/store/apps/details?id=com.printhub.signup" style="text-decoration:none;">
          <button type="button"
          class="font-weight-regular mb-12 v-btn v-btn--depressed theme--light v-size--x-large white rounded-pill  mt-4" style="min-width: 150px;"><span class="v-btn__content blue--text text-darken-1"><v-icon left>mdi-download</v-icon> Get it on Google Play </span></button>
            </a></div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
  export default {
    name: 'Header',

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>

<style>
</style>