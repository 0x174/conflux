<template>
  <v-container>
    <v-card outlined>
      <v-list class="protocol-history" shaped>
        <v-timeline
            reverse
            dense
        >
          <v-timeline-item
              v-for="(event, i) in history"
              :key="i"
              :color="event.color"
          >
            <v-card class="elevation-2">
              <v-card-title v-if="event.success" class="green--text headline history-headline">
                {{ event.date }}
              </v-card-title>
              <v-card-title v-else color="red" class="red--text headline history-headline">
                {{ event.date }}
              </v-card-title>
              <v-card-subtitle class="protocol-history-user">
                {{ event.user }}
              </v-card-subtitle>
              <v-list-group
                  :value="false"
                  no-action
                  sub-group
                  class="ml-0"
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title class="protocol-history-accordion">Experimental Inputs</v-list-item-title>
                  </v-list-item-content>
                </template>
                <v-list-item
                    v-for="(input, i) in event.inputs"
                    :key="i"
                    ripple=false,
                >
                  {{ input }}
                </v-list-item>
              </v-list-group>
              <v-card-text class="protocol-history-additional-comments">
                {{ event.additional_comments }}
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-list>
    </v-card>
  </v-container>
</template>


<style scoped>
.protocol-history-additional-comments {
  font-size: 24px;
}


.protocol-history-user {
  font-size: 20px !important;
}

.protocol-history-accordion{
  font-size: 24px;
}

.history-headline{
  font-size: 36px !important;
}

</style>


<script lang="ts">
import Vue from 'vue'

export default {
  name: 'ProtocolHistory',

  data: () => ({
    history: [
      {
        date: '02/14/2021',
        user: 'William Jackson',
        inputs: [
          'Peanut Butter',
          'Jelly',
          'Honey',
        ],
        success: true,
        color: 'green',
        additional_comments: "Very Good Sandwich"
      },
      {
        date: '01/21/2021',
        user: 'William Jackson',
        inputs: [
          'Lao Gan Ma',
          'Fruit Gushers',
          'Mayonnaise',
        ],
        success: false,
        color: 'red',
        additional_comments: "We should never have played God."
      },
      {
        date: '05/22/1989',
        user: 'Melissa Jackson',
        inputs: [
          'Peanut Butter',
          'Jelly',
        ],
        success: true,
        color: 'green',
        additional_comments: "Crusts Removed as per Order XXXX"
      },
      {
        date: '01/01/1762',
        user: 'The Earl of Sandwich',
        inputs: [
          'Peanut Butter',
          'Jelly',
        ],
        success: true,
        color: 'green',
        additional_comments: "Initial Sandwich Testpilot"
      },
    ],
  })
}
</script>
