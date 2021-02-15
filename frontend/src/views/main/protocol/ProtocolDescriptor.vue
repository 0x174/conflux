<template>
  <v-container>
    <!--Organizational Page Header -->
    <v-row>
      <!--Organizational Logo -->
      <v-col class="d-flex flex-column" md='4' cols="3">
        <!--Logic here to to switch to a default logo if one is not present -->
        <v-card outlined>
          <v-flex justify-center>
            <v-img
                :src="require('../../../assets/damp-logo.png')"
                width="100"
                contain
                class="mx-auto"
                style="margin-bottom: 15px"
            />
          </v-flex>
          <v-divider class="mx-4"></v-divider>
          <v-flex text-xs-center>
            <v-card-subtitle class="text-center" style="font-size:16px">
              <b>Design, Automation, Manufacturing, Prototyping Lab</b>
            </v-card-subtitle>
          </v-flex>
          <v-divider class="mx-4"></v-divider>

          <!--          <v-divider class="mx-4"></v-divider>-->
          <!--          <v-flex text-xs-center>-->
          <!--            <v-card-subtitle class="text-left" style="font-size:16px">-->
          <!--              Location: Boston, Massachusetts-->
          <!--            </v-card-subtitle>-->
          <!--          </v-flex>-->
          <!--          <v-flex text-xs-center>-->
          <!--            <v-card-subtitle class="text-left" style="font-size:16px">-->
          <!--              Affiliation: Boston University-->
          <!--            </v-card-subtitle>-->
          <!--          </v-flex>-->
          <v-list two-line class="organizational-info">
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-school
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Boston University</v-list-item-title>
                <v-list-item-subtitle>Affiliation</v-list-item-subtitle>
              </v-list-item-content>

            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-city
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Boston, Massachusetts</v-list-item-title>
                <v-list-item-subtitle>Organization Location</v-list-item-subtitle>
              </v-list-item-content>

            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-flask-outline
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Private Research Lab</v-list-item-title>
                <v-list-item-subtitle>Organizational Type</v-list-item-subtitle>
              </v-list-item-content>

            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-email
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>damplab@bu.edu</v-list-item-title>
                <v-list-item-subtitle>Contact</v-list-item-subtitle>
              </v-list-item-content>

            </v-list-item>
          </v-list>


        </v-card>
      </v-col>
      <v-col class="d-flex flex-column" md="8">
        <v-card outlined height="582px">
          <v-card-title class="justify-center" style="font-size:60px;margin-top: 15px">
            <b>Spreadable Sandwich Assembly</b>
          </v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-card-text style="font-size: 22px">
            Creates a Sandwich with canonical standard spreadable condiments
            such as peanut butter and jelly.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex flex-column" md="12">
        <v-card outlined>
          <v-card-title
              class="justify-center"
              style="font-size:60px;margin-top: 15px;margin-bottom: 15px">
            <b>Protocol View</b>
          </v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-sheet elevation="6">
            <v-tabs
                primary
                next-icon="mdi-arrow-right-bold-box-outline"
                prev-icon="mdi-arrow-left-bold-box-outline"
                show-arrows
                fixed-tabs
                v-model="tabs"
            >
              <v-tab>
                Checklist
              </v-tab>
              <v-tab>
                Dependency Graph
              </v-tab>
              <v-tab>
                Available Automation Platforms
              </v-tab>
              <v-tab>
                Protocol History
              </v-tab>
            </v-tabs>
            <v-tabs-items v-model="tabs">
              <v-tab-item>
                <ProtocolChecklist/>
              </v-tab-item>
              <v-tab-item>
               <ProtocolGraph/>
              </v-tab-item>
              <v-tab-item>
                <ProtocolAutomation/>
              </v-tab-item>
              <v-tab-item>
                <ProtocolHistory/>
              </v-tab-item>
            </v-tabs-items>
          </v-sheet>
        </v-card>
      </v-col>
    </v-row>


  </v-container>
</template>

<style scoped>
.organizational-info {
  font-size: 18px;


}
</style>


<script lang="ts">
import Vue from 'vue'
import ProtocolAutomation from "@/views/main/protocol/ProtocolAutomation.vue";
import ProtocolChecklist from "@/views/main/protocol/ProtocolChecklist.vue";
import ProtocolGraph from "@/views/main/protocol/ProtocolDepGraph.vue";
import ProtocolHistory from "@/views/main/protocol/ProtocolHistory.vue";

export default Vue.extend({
  name: 'ProtocolDescriptor',
  components: {ProtocolHistory, ProtocolGraph, ProtocolChecklist, ProtocolAutomation},
  data: () => ({
    tabs: null,
    protocols: [
      {
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Molecular Cloning',
        artist: 'Rita Chen',
      },
      {
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Halcyon Days',
        artist: 'Ellie Goulding',
      },
    ],
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer',
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
  }),
})
</script>
