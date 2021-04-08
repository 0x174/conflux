<template>
  <v-container>
    <v-card outlined>
      <v-list class="protocol-list" shaped>
        <v-list-item-group
            multiple
        >
          <!-- Primary Step-->
          <v-list-item
              v-for="(platform, i) in automation.platforms"
              :key="i"
          >
            <v-list-item-content>
              <v-row class="mb-0">
                <v-col class="d-flex" md="9">
                  <v-list-item-title class="platform-title">
                    <u>{{ platform.title }}</u>
                  </v-list-item-title>
                </v-col>
                <v-col class="d-flex flex-column" md="3">
                  <v-chip>
                    Estimated Cost: {{ platform.estimated_cost }}
                  </v-chip>
                </v-col>
              </v-row>
              <v-row class="mt-0 mb-0">
                <v-col class="d-flex" md="9">
                  <v-list-item-subtitle class="platform-description">{{ platform.description }}
                  </v-list-item-subtitle>
                </v-col>
                <v-col class="d-flex flex-column" md="3">
                  <v-chip color='green' v-if="platform.verified_working">
                    <v-icon left>
                      mdi-check
                    </v-icon>
                    Verified: {{ platform.verification_date }}
                  </v-chip>
                  <v-chip v-else>
                    Never Verified
                  </v-chip>

                </v-col>
              </v-row>
              <v-list-item-action>
                <div v-if="platform.protocol_available">
                  <v-btn class="automation-interaction-button"
                         color="primary"
                         elevation="2">
                    Download
                  </v-btn>
                  <v-btn class="ml-4" color="primary">
                    Send to Geist Instance
                  </v-btn>

                </div>
                <div v-else>
                  <v-btn disabled elevation="2">
                    Unavailable for this platform
                  </v-btn>
                </div>
              </v-list-item-action>
              <v-spacer/>
              <v-divider class="mt-2"/>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-container>
</template>


<style scoped>
.platform-title {
  font-size: 24px;
}


.platform-description {
  font-size: 20px !important;
}

</style>


<script lang="ts">
import Vue from 'vue'

export default {
  name: 'ProtocolAutomation',

  data: () => ({
    automation: {
      platforms: [
        {
          title: 'Opentrons OT-2',
          description: 'Opensource Limited-Throughput Liquid Handler',
          protocol_available: true,
          verified_working: true,
          verification_date: "01/01/2021",
          estimated_cost: '$4.20',
        },
        {
          title: 'Hamilton MicroSTAR',
          description: 'Highthroughput Liquid Handling Platform',
          protocol_available: true,
          verified_working: false,
          verification_date: "01/01/2021",
          estimated_cost: '$0.69',
        },
        {
          title: 'Labcyte Echo',
          description: 'Precision Acoustic Liquid Handler',
          protocol_available: false,
          verified_working: false,
          verification_date: "01/01/2021",
          estimated_cost: '$0.00',
        }
      ],
    },
  }),
}
</script>
