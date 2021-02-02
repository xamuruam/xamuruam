<template>
  <div>
    <v-navbar @togglenav="navOpen = !navOpen" />
    <v-sidebar v-on-clickaway="away" :open="!navOpen" />
    <div class="v-catalog">
      <span class="catalog_header"><h2>CATALOG</h2></span>
      <div class="v-catalog__list">
        <v-catalog-item
          v-for="product in PRODUCTS"
          :key="product.article"
          :product_data="product"
          @addToCart="addToCart"
        />
      </div>
      <!-- <div class="bottom">
        <router-link tag="span" :to="{ name: 'home' }">
          <v-btn
            class="bottom_btn"
            :disabled="false"
            title="MAIN PAGE"
            @click="click"
          />
        </router-link>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { mixin as clickaway } from 'vue-clickaway';
import vCatalogItem from './v-catalog-item.vue';
import vNavbar from '../navbar/v-navbar.vue';
import vSidebar from '../navbar/v-sidebar.vue';
// import vBtn from '../buttons/v-btn.vue';

export default {
  name: 'v-catalog',
  components: { vCatalogItem, vNavbar, vSidebar }, // vBtn,
  mixins: [clickaway],
  props: {},
  data() {
    return {
      navOpen: true
    };
  },
  computed: {
    ...mapGetters(['PRODUCTS', 'CART'])
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
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
.v-catalog {
  margin-top: 70px;
  align-items: center;
  &__list {
    align-items: center;
    width: 90vw;
    max-width: 1170px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    grid-column-gap: 1.5rem;
    grid-row-gap: 2rem;
  }
}
.catalog_header {
  display: grid;
  justify-content: center;
  margin-bottom: 0 auto;
  color: rgb(176, 185, 216);
}

.bottom_btn {
  margin-bottom: 0.4rem;
  padding: 0.3rem 0.4rem;
  text-transform: uppercase;
  font-size: 0.9rem;
  background: rgb(79, 119, 184);
  color: rgb(34, 34, 34);
  border: 1px solid rgb(79, 119, 184);
  border-radius: $radius;
  transition: all 0.3s linear;
  cursor: pointer;
  &:hover {
    background: transparent;
    color: rgb(112, 147, 182);
  }
}
.bottom {
  display: grid;
  justify-content: center;
}
</style>
