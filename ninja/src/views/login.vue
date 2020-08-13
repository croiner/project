 <template>
  <v-app id="inspire">
    <v-main  v-if="$route.path === '/login' " >
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn :href="source" icon large target="_blank" v-on="on"></v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="username"
                    name="username"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="username"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="Login"> >Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    Login: function () {
      // console.log(this.username);
      // console.log(this.password);

console.log(this.$route.path )

      if (this.username && this.password) {
        if (this.username == "manager") {
          let route = "manager";
          this.$router.push(`/${route}`);
        } else if (this.username == "user") {
          let route = "user";
          this.$router.push(`/${route}`);
        } else if (this.username == "admin") {
          let route = "admin";
          this.$router.push(`/${route}`);
        }else{
          this.$router.push('/Login')
        }
      }
      else {
         this.$router.push('/Login')
      }
    },
  },
  mounted: function(){
    this.$router.push('/Login')
  }
};
</script>