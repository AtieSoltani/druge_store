<template>
  <div class=" color_primary">

    <div class="mainDiv pt-4 d-flex justify-space-around white rounded-t-xl">
      <nuxt-link v-for="(item,i) in items" :key="i" class="homeLink text-decoration-none" :to="item.route">
        <img class="px-2 py-2 color_primary_light rounded-lg"
             height="70"
             width="70"
             :src="require(`@/assets/images/dashboard/${item.img}`)" alt="">

        <p class="linksCaption  text-center font-weight-bold">{{ item.caption }}</p>
      </nuxt-link>
    </div>

    <div class="py-4 white">
      <img class="pharmacy rounded-lg"
           src="@/assets/images/dashboard/pharmacy.jpg" alt="">
    </div>

    <users/>

  </div>
</template>

<script>
import users from "~/components/Dashboard/ListOfUsers";
import {ref} from "vue";

export default {
  name: "home",
  components: {
    users
  },
  setup() {
    const items = ref([
        {img: 'time.png', caption: 'شیفت های فعال من', route: ''},
        {img: 'bag.png', caption: 'مدیریت درخواست ها', route: ''},
        {img: 'shift.svg', caption: 'تعریف شیفت و فرصت', route: ''},
      ]
    )

    return {
      items
    }
  }
}
</script>

<style lang="scss" scoped>
.mainDiv {
  margin-top: -0.75px;
}

.linksCaption {
  font-size: 8px;
  color: #454545;
  font-family: "vazirEOT", serif !important;

}

.pharmacy {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 95%;
  height: auto;
}

.homeLink:hover {
  background-color: #eaf8ff;
  border-radius: 5px
}

</style>
