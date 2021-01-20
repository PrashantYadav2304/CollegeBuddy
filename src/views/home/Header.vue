<template>
  <section>
    <v-img
      :min-height="minHeight"
      height="920"
      :src="require('@/assets/header.jpg')"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .4), rgba(5, 11, 31, .4)"
      
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center"
          height="100%"
          max-width="700"
          width="100%"
        >
        <div class="display-2 font-weight-black" >PROMOTE YOUR BUSINESS WITH ALTERNATE GIRLS</div>
          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
            
          <button type="button" class="font-weight-bold mb-12 v-btn v-btn--depressed v-btn--tile theme--light v-size--x-large primary mt-4" style="min-width: 150px;"><span class="v-btn__content"> Get Started </span></button>
          </div>
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