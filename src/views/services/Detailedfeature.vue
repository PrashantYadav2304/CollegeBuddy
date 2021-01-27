<template>
<div>
    <section class="py-12 blue-grey lighten-4" id="welcome">
                      <div class="section-header text-center">
                        <h2 class="display-1 font-weight-light blue--text text--darken-3">SERVICES</h2>
                        <hr role="separator" aria-orientation="horizontal" class="mt-5 mb-4 mx-auto v-divider theme--light">
                        <p class="title font-weight-light mx-auto" style="max-width: 800px;">Get the most out of College Buddy</p>
                        </div>
                        <div class="container px-0 py-0">
                          <div class="v-responsive v-image mx-auto" style="max-height: 400px; max-width: 700px;">
                            <div class="v-responsive__sizer" style="padding-bottom: 100%;">
                            
                            <v-img  :src="require('@/assets/businessfeature.svg')" aspect-ratio="1.7" contain alt=""></v-img>
                            </div>
                          <div class="v-responsive__content" style="width: 512px;">
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6 col-12">
                            <section class="row pa-0 ma-0 text-center text-sm-left justify-center">
                              <v-layout justify-space-around>
                                <v-icon class="mdi-48px" color="blue-grey">mdi-handshake</v-icon>
                              </v-layout>
                                    <div class="col-md-10 col-12">
                                      <h3 class="title font-weight-regular mb-3 mt-2">Collaboration</h3>
                                      <p class="body-1 font-weight-light">Find & collaborate with people having same vision. Learn together & have fun. Collaborate on different projects, fun activities, learning resources & anything you can think of.</p>
                                    </div>
                                  </section>
                                </div>
                              <div class="col-md-6 col-12">
                            <section class="row pa-0 ma-0 text-center text-sm-left justify-center">
                              <v-layout justify-space-around>
                                <v-icon  class="mdi-48px" color="green">mdi-cart</v-icon>
                              </v-layout>
                                <div class="col-md-10 col-12">
                                  <h3 class="title font-weight-regular mb-3 mt-2">Stationery</h3>
                                  <p class="body-1 font-weight-light">Get variety of stationery items at cheapest rates like notebooks, pen, pencils, files, charts & all such stuffs at your doorstep within hours.</p>
                                </div>
                              </section>
                            </div>
                          <div class="col-md-6 col-12">
                            <section class="row pa-0 ma-0 text-center text-sm-left justify-center">
                              <v-layout justify-space-around>
                                <v-icon  class="mdi-48px" color="deep-orange accent-3">mdi-printer</v-icon>
                              </v-layout>
                                <div class="col-md-10 col-12">
                                  <h3 class="title font-weight-regular mb-3 mt-2">Printouts</h3>
                                  <p class="body-1 font-weight-light">Stop running, just upload your files, documents, notes, posters or flyers and get printouts delivered at your doorstep within hours.</p>
                                </div>
                              </section>
                            </div>
                          <div class="col-md-6 col-12">
                            <section class="row pa-0 ma-0 text-center text-sm-left justify-center">
                              <v-layout justify-space-around>
                                <v-icon  class="mdi-48px" color="cyan accent-4">mdi-calendar</v-icon>
                              </v-layout>
                                  <div class="col-md-10 col-12">
                                    <h3 class="title font-weight-regular mb-3 mt-2">Bunk Manager</h3>
                                    <p class="body-1 font-weight-light">Stop worrying about attendance rules, track your lecture attendances & bunks. Bunk classes on the go for something you aspire most. </p>
                                  </div>
                                </section>
                              </div>
                            <div class="col-md-6 col-12">
                              <section class="row pa-0 ma-0 text-center text-sm-left justify-center">
                                <v-layout justify-space-around>
                                  <v-icon  class="mdi-48px" color="black lighten-2">mdi-brush</v-icon>
                              </v-layout>                                                     
                              <div class="col-md-10 col-12">
                                <h3 class="title font-weight-regular mb-3 mt-2">Club Activities & Events</h3>
                                <p class="body-1 font-weight-light">Know about your campus events and participate in club activities proactively to nurture yourself. Get to know different events happening in other campuses, be aware of such events & seize such opportunities for your growth.</p>
                              </div>
                            </section>
                          </div>
                          <div class="col-md-6 col-12">
                            <section class="row pa-0 ma-0 text-center text-sm-left justify-center">
                              <v-layout justify-space-around>
                                <v-icon  class="mdi-48px" color="red accent-4">mdi-finance</v-icon>
                              </v-layout>
                                <div class="col-md-10 col-12">
                                  <h3 class="title font-weight-regular mb-3 mt-2">Business Growth</h3>
                                  <p class="body-1 font-weight-light">For vendors running stationery & printout shops near college campuses, join us to grow your business to new heights, make your business more profitable and efficient. Hurry up & join us before it's too late. </p>
                                  </div>
                                </section>
                              </div>      
                            </div>
                          </div>
                        </section>
</div>
</template>

<script>


export default {
  data: () => ({
    user: null
  }),

    
}
</script>