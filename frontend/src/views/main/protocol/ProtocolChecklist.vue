<template>
  <v-container>
    <v-card outlined>
      <v-list class="protocol-list" shaped>
        <v-list-item-group
            multiple
        >
          <!-- Primary Step-->
          <v-list-item
              v-for="(step, i) in checklist"
              :key="i"
          >
            <v-list-item-action>
              <v-checkbox class="protocol-checkbox ml-2" v-model="step.completed" color="deep-purple accent-4"/>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-group
                  :value=false
                  sub-group
                  prepend-icon="mdi-chevron-right"
              >
                <template v-slot:activator>
                  <v-list-item-title class="protocol-title">{{ step.step_title }}</v-list-item-title>
                  <v-list-item-subtitle class="protocol-amplifying">{{ step.step_information }}</v-list-item-subtitle>
                </template>
                <v-list-item
                    v-for="(substep, i) in step.sub_steps"
                    :key="i"
                >
                  <v-list-item-action>
                    <v-checkbox class="subprotocol-checkbox" v-model="substep.sub_step_completion"
                                color="deep-purple accent-4"/>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title class="subprotocol-description">{{ substep.sub_step_description }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="subprotocol-location">{{ substep.sub_step_location }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-img
                      v-bind:src="substep.sub_step_picture"
                      style="height: 125px; width: 100px;"
                      class="mb-2"
                  />
                </v-list-item>
              </v-list-group>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-container>
</template>


<style scoped>
.protocol-title {
  font-size: 24px;
}

.protocol-amplifying {
  font-size: 18px;
}

.protocol-checkbox {
  transform: scale(2.0);
}

.subprotocol-checkbox {
  transform: scale(1.25);
}

.subprotocol-description {
  font-size: 18px !important;
}

.subprotocol-location {
  font-size: 16px !important;
}

</style>


<script lang="ts">
import Vue from 'vue'

export default {
  name: 'ProtocolChecklist',

  data: () => ({
    checklist: {
      1: {
        number: 1,
        step_title: 'Gather Sandwich Ingredients',
        step_information: 'Gather Available Sandwich Ingredients (Mise en place)',
        output_recording: null,
        completed: false,
        sub_steps: {
          1: {
            sub_step_description: 'Obtain Two (2) Slices of Bread',
            sub_step_location: 'Shelf over Fridge',
            sub_step_completion: false,
            sub_step_picture: "https://drive.google.com/uc?export=view&id=1F-xy_8GlIHZu8Zk_6V2Hu4LJA8GTpeJM",
          },
          2: {
            sub_step_description: 'Obtain Peanut Butter',
            sub_step_location: 'Cabinet over Sink',
            sub_step_completion: false,
            sub_step_picture: "https://drive.google.com/uc?export=view&id=1T-n3RPzKg4Ma6FSUXF8d_2bKHFjv6vfP",
          },
          3: {
            sub_step_description: 'Obtain Grape Jelly',
            sub_step_location: 'Fridge Interior, Upper Door Shelf, Slot 1',
            sub_step_completion: false,
            sub_step_picture: "https://drive.google.com/uc?export=view&id=1kFjocT76MZM5WV4mIrlx7WoRpMRWgBWK",
          },
          4: {
            sub_step_description: 'Obtain Knife',
            sub_step_location: 'Cutlery Drawer, Silverware Sorter, Slot 3',
            sub_step_completion: false,
            sub_step_picture: "https://drive.google.com/uc?export=view&id=1wavvFmTD0rlq0EVD9lwRqlIlxSWrK6EM",
          },
        },
      },
      2: {
        number: 2,
        step_title: 'Position Ingredients for Sandwich Assembly',
        step_information: 'Position Ingredients for Sandwich Assembly',
        output_recording: null,
        completed: false,
        sub_steps: {
          1: {
            sub_step_description: 'Place Both Bread Slices on cutting ' +
                'board in separate piles, mark respective bread slices as ' +
                'bottom or top slice.',
            sub_step_location: 'Cutting Board',
            sub_step_completion: false,
            sub_step_picture: "",
          },
          2: {
            sub_step_description: 'Open Peanut Butter Jar through clockwise ' +
                'opening motion on lid',
            sub_step_location: 'Cutting Board',
            sub_step_completion: false,
          },
          3: {
            sub_step_description: 'Open Grape Jelly Cap and ensure that ' +
                'Grape Jelly is at bottom of squeezable bottle.',
            sub_step_location: 'Cutting Board',
            sub_step_completion: false,
          },
        },
      },
      3: {
        number: 3,
        step_title: 'Apply Spreadable Ingredients on Bread',
        step_information: '',
        output_recording: null,
        completed: false,
        sub_steps: {
          1: {
            sub_step_description: 'Insert Knife into Peanut Butter, Scooping ' +
                'upwards to obtain desired amount of peanut butter',
            sub_step_location: 'Cutting Board',
            sub_step_completion: false,
          },
          2: {
            sub_step_description: 'Spread Peanut Butter evenly onto bottom bread slice',
            sub_step_location: 'Cutting Board',
            sub_step_completion: false,
          },
          3: {
            sub_step_description: 'Squeeze Grape Jelly onto applied peanut butter.',
            sub_step_location: 'Cutting Board',
            sub_step_completion: false,
          },
          4: {
            sub_step_description: 'Using Knife, spread Grape Jelly to ensure ' +
                'even coating onto previously spread peanut butter',
            sub_step_location: 'Cutting Board',
            sub_step_completion: false,
          },
          5: {
            sub_step_description: 'Place top bread slice on top of assembled sandwich bottom',
            sub_step_location: 'Cutting Board',
            sub_step_completion: false,
          },
        },
      },
      4: {
        number: 4,
        step_title: 'Return Ingredients to Initial Location',
        step_information: '',
        output_recording: null,
        completed: false,
        sub_steps: {
          1: {
            sub_step_description: 'Place Peanut Butter back in Cabinet',
            sub_step_location: 'Cabinet over Sink',
            sub_step_completion: false,
          },
          2: {
            sub_step_description: 'Place Grape Jelly back in Refrigerator',
            sub_step_location: 'Fridge Interior, Upper Door Shelf, Slot 1',
            sub_step_completion: false,
          },
        },
      },
      5: {
        number: 5,
        step_title: 'Clean up Kitchen',
        step_information: '',
        output_recording: null,
        completed: false,
        sub_steps: {
          1: {
            sub_step_description: 'Wash Knife in Sink',
            sub_step_location: 'Sink',
            sub_step_completion: false,
          },
          2: {
            sub_step_description: 'Brush off Crumbs on cutting board into Trash Can',
            sub_step_location: 'Trash Can',
            sub_step_completion: false,
          },
        },
      },
      6: {
        number: 6,
        step_title: 'Eat Sandwich',
        step_information: '(Unless feeding to other individual)',
        output_recording: null,
        completed: false,
        sub_steps: {
          1: {
            sub_step_description: 'Eat Sandwich.',
            sub_step_location: 'Computer Desk',
            sub_step_completion: false,
          },
        },
      },
    },
  }),
}
</script>
