<template>
  <div>
    <v-navbar @togglenav="navOpen = !navOpen" />
    <v-sidebar v-on-clickaway="away" :open="!navOpen" />
    <div class="v_home">
      <span class="home_header"><h2>WELCOME</h2></span>

      <div class="welcome_text">
        <p style="text-align:justify;">
          Eum, voluptas explicabo libero commodi voluptates sed voluptate
          consequuntur quaerat, aperiam temporibus facilis, quo facere et sunt
          unde. Aliquam earum magni optio vel illo minus reprehenderit similique
          dolorem maxime culpa. Necessitatibus eaque at atque modi ipsum dicta?
          Officiis dolorum magnam commodi corrupti odio esse. Inventore vero
          quod quia quis eum est velit, quo perferendis excepturi amet.
          Laudantium dolores quos labore nulla blanditiis ab rem perspiciatis
          accusamus non ipsum possimus consequuntur iure, facere voluptatem
          fuga? Iure!
        </p>
      </div>
      <div class="home_bottom">
        <router-link tag="span" :to="{ name: 'catalog' }">
          <v-btn
            class="start__btn"
            :disabled="false"
            title="TO CATALOG"
            @click="click"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import vNavbar from './navbar/v-navbar.vue';
import vBtn from './buttons/v-btn.vue';
import vSidebar from './navbar/v-sidebar.vue';

export default {
  name: 'v-home',
  components: { vNavbar, vBtn, vSidebar },
  mixins: [clickaway],
  props: {},
  data() {
    return {
      navOpen: true
    };
  },
  computed: {},
  mounted() {},
  events: {},
  methods: {
    click() {
      this.$emit('click');
    },
    onClose() {
      this.navOpen = false;
    },
    away() {
      this.navOpen = true;
    }
  }
};
</script>

<style lang="scss">
.v_home {
  margin-top: 70px;
  align-items: center;
}
.home_header {
  display: grid;
  justify-content: center;
  margin-bottom: 0 auto;
  color: rgb(176, 185, 216);
}
.welcome_text {
  margin: 0px auto;
  padding: 0.1rem 2rem;
  background: rgb(22, 22, 22);
  color: rgb(208, 226, 243);
}
.start__btn {
  margin-bottom: 4px;
  width: 110px;
  padding: 0.6rem 0rem;
  text-transform: uppercase;
  font-size: 0.9rem;
  background: rgb(22, 22, 22);
  color: rgb(189, 180, 180);
  text-decoration: none;
  border: 0px solid rgb(196, 143, 221);
  border-radius: $radius;
  transition: all 0.3s linear;
  cursor: pointer;
  &:hover {
    background: rgb(63, 63, 63);
    color: rgb(189, 180, 180);
  }
}
.home_bottom {
  margin-top: 10px;
  display: grid;
  justify-content: center;
}
</style>
