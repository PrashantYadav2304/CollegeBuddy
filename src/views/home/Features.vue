<template>
    <section>
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center"
          height="100%"
          width="100%"
        >
          <!----->
          <div class="container text-center">
            <h2 class="display-2 font-weight-medium mb-3">FEATURES</h2>
            <div class="v-responsive__content mb-12 mx-auto"  style="max-width: 50px;"><hr role="separator" aria-orientation="horizontal" class="v-divider primary">
            </div>
            <div class="row">
              <div class="col-md-3 col-12">
                <div class="py-12 px-4 v-card v-card--flat v-sheet theme--light grey lighten-5">
                  <div>
                    <div class="v-avatar blue lighten-2" style="height: 88px; min-width: 88px; width: 88px;"><i aria-hidden="true" class="v-icon notranslate mdi mdi-finance" style="font-size: 36px;"></i>
                    </div>
                  </div>
                  <div class="v-card__title justify-center font-weight-black text-uppercase">Business
                  </div>
                  <div class="v-card__text subtitle-1">Explore perfect opportunities to grow your business at low cost
                  </div>
                </div>
              </div>
              <v-layout justify-space-around>
                <v-icon class="mdi-48px" color="primary">mdi-compare-horizontal</v-icon>
              </v-layout>
              <div class="col-md-3 col-12">
                <div class="py-12 px-4 v-card v-card--flat v-sheet theme--light grey lighten-5">
                  <div>
                    <div class="v-avatar blue lighten-2 " style="height: 88px; min-width: 88px; width: 88px;"><i aria-hidden="true" class="v-icon notranslate mdi mdi-human-female-female" style="font-size: 36px;"></i>
                    </div>
                  </div>
                  <div class="v-card__title justify-center font-weight-black text-uppercase">College Buddy
                  </div>
                  <div class="v-card__text subtitle-1">An International platform of women to help world wide business needs  
                  </div>
                </div>
              </div>
              <v-layout justify-space-around>
                <v-icon class="mdi-48px" color="primary">mdi-compare-horizontal</v-icon>
              </v-layout>
              <div class="col-md-3 col-12">
                <div class="py-12 px-4 v-card v-card--flat v-sheet theme--light grey lighten-5">
                  <div>
                    <div class="v-avatar blue lighten-2" style="height: 88px; min-width: 88px; width: 88px;"><i aria-hidden="true" class="v-icon notranslate mdi mdi-account-group-outline" style="font-size: 36px;"></i>
                    </div>
                  </div>
                  <div class="v-card__title justify-center font-weight-black text-uppercase">Indivisuals
                  </div>
                  <div class="v-card__text subtitle-1"> Make your career &amp; personal lives better, explore now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-responsive>
      </v-container>
  </section>
</template>

<script>
  export default {
    name: 'Features',


  }
</script>