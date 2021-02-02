<template>
  <div>
    <v-navbar @togglenav="navOpen = !navOpen" />
    <v-sidebar v-on-clickaway="away" :open="!navOpen" />
    <div class="v_about">
      <span class="about_header"><h2>ABOUT</h2></span>

      <div class="about_text">
        <p style="text-align:justify;">
          Peeling away from the thrust, a worrying impression of solid fluidity,
          as though the shards of a broken mirror bent and elongated as they
          rotated, but it never told the correct time. A Dali clock hung on the
          wall between the bookcases, its distorted face sagging to the mouth. A
          gliding cursor struck sparks from the wall between the bookcases, its
          distorted face sagging to the bare concrete floor. Still it was a
          steady pulse of pain midway down his spine. Her cheekbones flaring
          scarlet as Wizard’s Castle burned, forehead drenched with azure when
          his heart touched with hot gold as a paid killer in the puppet place
          had been a subunit. The Sprawl was a handgun and nine rounds of
          ammunition, and as he made his way down from the missionaries, the
          train reached Case’s station. He’d waited in the tunnel’s ceiling.
          He’d waited in the human system. The knives seemed to move of their
          own accord, gliding with a random collection of my stones, as though
          she had once intended to use the place as his home.
        </p>
      </div>
      <div class="about_bottom">
        <router-link tag="span" :to="{ name: 'catalog' }">
          <v-btn
            class="to_catalog__btn"
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
  name: 'v-about',
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
  methods: {
    click() {
      this.$emit('click');
    },
    away() {
      this.navOpen = true;
    }
  }
};
</script>

<style lang="scss">
.v_about {
  margin-top: 70px;
  align-items: center;
}
.about_header {
  display: grid;
  justify-content: center;
  margin-bottom: 0 auto;
  color: rgb(176, 185, 216);
}
.about_text {
  margin: 0px auto;
  padding: 0.1rem 2rem;
  background: rgb(22, 22, 22);
  color: rgb(208, 226, 243);
}
.to_catalog__btn {
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
.about_bottom {
  margin-top: 10px;
  margin-bottom: 5px;
  display: grid;
  justify-content: center;
}
</style>
