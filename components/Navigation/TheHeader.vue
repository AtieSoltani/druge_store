<template>
  <div>

    <v-app-bar
      color="color_primary"
      dark
      flat
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <img
        height="45"
        width="55"
           src="@/assets/images/navigation/logo.PNG" alt="">

      <v-spacer></v-spacer>

      <v-btn icon @click.stop="notification = !notification">
        <v-icon>mdi-bell-ring-outline</v-icon>
      </v-btn>

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
    >

      <navbar/>

    </v-navigation-drawer>

    <v-navigation-drawer
      class="notificationBar"
      color="color_primary_light"
      height="250px"
      v-model="notification"
      temporary
      bottom
      absolute
    >

      <notification/>

    </v-navigation-drawer>

  </div>
</template>

<script>
import navbar from "~/components/Navigation/Navbar";
import notification from "~/components/Navigation/NotificationBar";
import {reactive, toRefs} from "vue";

export default {
  components: {
    navbar,
    notification
  },
  setup() {
    const state = reactive({
        drawer: false,
        notification: false,
        group: null,
      }
    )
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style>

.notificationBar {
  top: 0 !important;
  left: 0 !important;
}

</style>
