<template>
  <v-row justify="center">
    <v-btn color="grey " dark @click.stop="dialog = true">Add a new Project</v-btn>

    <v-dialog v-model="dialog" max-width="500 ">
      <v-card>
        <v-card-actions>
          <v-btn color="grey" text @click="dialog = false">Create new Project?</v-btn>
        </v-card-actions>
      </v-card>
      <v-form class="px-3">
        <v-text-field label="title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
        <v-textarea label="infomation" v-model="content" prepend-icon="mdi-pencil"></v-textarea>

        <v-row justify="space-around">
          <v-col cols="12" lg="6">
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label=" Due Date"
                  hint="MM/DD/YYYY format"
                  prepend-icon="mdi-calendar-range"
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title @input="menu=false"></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
      </v-form>
      <!-- <v-btn text class="success mx-0 mt-3" @click="submit" : loading="loading">Add Project</v-btn> -->
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,

      //date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      date: "",
      title: "",
      content: "",
      inputRules: [(v) => v.length >= 3 || "Minium length is 3 characters"],
      loading: false,
    };
  },
 
};
</script> 