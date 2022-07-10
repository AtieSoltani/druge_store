<template>
  <v-list
    nav
    dense>

    <div class="my-4 pt-4 px-4 d-flex color_primary_light rounded-lg ">

      <v-avatar
        height="60px"
        width="60px"
        color="grey">

        <v-icon large dark>
          mdi-account-circle
        </v-icon>

      </v-avatar>

      <div class="pr-4">

        <p class=" font-weight-bold"> drug store</p>
        <p class="">داروخانه</p>

      </div>

    </div>

    <v-list-item-group
      color="color_primary"
      active-class=" text--accent-4"
    >

      <v-list-item nuxt to="">
        <v-list-item-title>
          <v-icon>mdi-home</v-icon>
          <span class="pr-1">صفحه اصلی</span>
        </v-list-item-title>
      </v-list-item>

      <v-list-item @click="dropDown=!dropDown">
        <v-list-item-title class="d-flex justify-space-between">
          <div>
            <v-icon>mdi-account</v-icon>
            <span class="pr-1">داشبورد من</span>
          </div>
          <div>
            <v-icon class="align-end" v-if="dropDown===false">mdi-chevron-left</v-icon>
            <v-icon left v-if="dropDown===true">mdi-chevron-down</v-icon>
          </div>
        </v-list-item-title>
      </v-list-item>

      <div v-if="dropDown" class="mr-8 ml-2 rounded-lg color_gray_light">

        <v-list-item v-for="(item,i) in dropDownItems" :key="i" nuxt :to="i.route">

          <v-list-item-title>
            {{ item.caption }}
          </v-list-item-title>

        </v-list-item>

      </div>

      <v-list-item v-for="(item,i) in items" :key="i" nuxt :to="item.route">
        <v-list-item-title>
          <v-icon>{{ item.icon }}</v-icon>
          <span class="pr-1">{{ item.caption }}</span>
        </v-list-item-title>
      </v-list-item>

    </v-list-item-group>

  </v-list>
</template>

<script>
import {reactive, toRefs} from "vue";

export default {
  setup() {
    const state = reactive({
      dropDown: false,
      dropDownItems: [
        {caption: 'پروفایل', route: ''},
        {caption: 'کیف پول', route: ''},
        {caption: 'وضعیت کاربری و امتیازات', route: ''},
        {caption: 'پیام های من', route: ''},
        {caption: 'دفترچه یادداشت', route: ''},
      ],
      items: [
        {icon: 'mdi-briefcase-search', caption: 'تعریف شیفت و فرصت', route: ''},
        {icon: 'mdi-briefcase-clock', caption: 'شیفت های من', route: ''},
        {icon: 'mdi-handshake', caption: 'مدیریت درخواست ها', route: ''},
        {icon: 'mdi-cog', caption: 'تنظیمات', route: ''},
        {icon: 'mdi-comment-text', caption: 'چت آنلاین', route: ''},
        {icon: 'mdi-phone', caption: 'تماس با ما', route: ''},
        {icon: 'mdi-clipboard-text', caption: 'قوانین و مقررات', route: ''},
        {icon: 'mdi-exit-to-app', caption: 'خروج', route: ''},
      ]
    })
    return {
      ...toRefs(state)
    }
  }

}
</script>

<style scoped>

</style>
