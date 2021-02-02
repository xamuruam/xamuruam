<template>
  <div>
    <nav class="navbar">
      <!-- <button class="cart_btn">menu</button> -->
      <fa-icon class="bars_icon" icon="bars" @click="$emit('togglenav')" />
      <div class="navbar_center ">
        <h1>¯\_(ツ)_/¯</h1>
      </div>
      <div>
        <router-link
          class="cart_btn"
          :to="{ name: 'cart', params: { cart_data: CART } }"
        >
          <span> <fa-icon icon="shopping-cart" /> {{ CART.length }} </span>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'v-navbar',
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['CART'])
  },
  mounted() {},
  methods: {
    clickBtn() {}
  }
};
</script>

<style lang="scss">
.navbar {
  margin: 0 auto;
  margin-top: 0;
  padding: 1px 10px;
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(20, 28, 39, 0.933);
  z-index: 1;
}
.navbar_center {
  margin-left: 17.5px;
  display: flex;
  justify-content: center;
  color: rgb(143, 159, 193);
}
.bars_icon {
  font-size: 1.5em;
  color: rgb(143, 159, 193);
  transition: all 0.3s linear;
  cursor: pointer;
  &:hover {
    background: transparent;
    color: rgb(199, 217, 247);
  }
}
.cart_btn {
  padding: 0.37rem 0.19rem;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.1rem;
  background: rgba(20, 28, 39, 0.933);
  color: rgb(143, 159, 193);
  border: 0px solid rgb(196, 143, 221);
  border-radius: $radius;
  transition: all 0.3s linear;
  cursor: pointer;
  &:hover {
    background: transparent;
    color: rgb(199, 217, 247);
  }
}
.nav_btn {
  padding: 0.2rem 1rem;
  text-transform: uppercase;
  font-size: 0.9rem;
  background: rgb(196, 143, 221);
  color: rgb(34, 34, 34);
  border: 1px solid rgb(196, 143, 221);
  border-radius: $radius;
  transition: all 0.3s linear;
  cursor: pointer;
  &:hover {
    background: transparent;
    color: rgb(79, 119, 184);
  }
}
</style>
