<template>
  <nav style="z-index:3">
    <v-toolbar color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-ligth">Projects</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="grey" outlined dark v-bind="attrs" v-on="on">
            <v-icon left>mdi-menu</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item link v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn icon color="grey" width="150" to="/login">
        <span>Sign Out</span>
        <v-icon right>mdi-login</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/avatar1.jpg" />
                  </v-avatar>
          <p class="white--text subheading mt-4">Beckham</p>
        </v-flex>
        <v-flex>
          <Popup />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item link v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">mdi-{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Popup";
export default {
  components: { Popup },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "home", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Projects", route: "/projects" },
        { icon: "group", text: "Team", route: "/team" },
        { icon: "domain", text: "Data", route: "/datatable" },
        { icon: "calendar", text: "Calendar", route: "/calendar" },
      ],
    };
  },
};
</script>