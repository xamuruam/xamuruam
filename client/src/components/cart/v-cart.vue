<template>
  <div>
    <v-navbar @togglenav="navOpen = !navOpen" />
    <v-sidebar v-on-clickaway="away" :open="!navOpen" />
    <div class="v-cart">
      <span class="cart_header"><h2>YOUR CART</h2></span>

      <h3 v-if="!cart_data.length">is empty</h3>

      <div class="v-cart__list">
        <v-cart-item
          v-for="(item, index) in cart_data"
          :key="item.article"
          :cart_item_data="item"
          @deleteFromCart="deleteFromCart(index)"
          @increment="increment(index)"
          @decrement="decrement(index)"
        />
      </div>

      <div class="v-cart__total">
        <p class="total__name">TOTAL: $ {{ cartTotalCost }}</p>
        <router-link :to="{ name: 'catalog' }">
          <button class="checkout__btn">to checkout</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mixin as clickaway } from 'vue-clickaway';
import vCartItem from './v-cart-item.vue';
import vNavbar from '../navbar/v-navbar.vue';
import vSidebar from '../navbar/v-sidebar.vue';

export default {
  name: 'v-cart',
  components: {
    vCartItem,
    vNavbar,
    vSidebar
  },
  mixins: [clickaway],
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      navOpen: true
    };
  },
  computed: {
    cartTotalCost() {
      let result = [];
      if (this.cart_data.length) {
        for (const item of this.cart_data) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce((sum, el) => sum + el);

        return result;
      }
      return 0;
    }
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM'
    ]),
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    away() {
      this.navOpen = true;
    }
  }
};
</script>

<style lang="scss">
.v-cart {
  margin-top: 70px;
  margin-bottom: 35px;
  align-items: center;
  color: rgb(124, 136, 141);
  &__list {
    align-items: center;
    width: 90vw;
    max-width: 1170px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 0.3fr));
    justify-content: center;
    grid-column-gap: 1.5rem;
    grid-row-gap: 2rem;
  }
  .cart_header {
    display: grid;
    justify-content: center;
    margin-bottom: 0 auto;
    color: rgb(176, 185, 216);
  }
}
.checkout__btn {
  margin-top: $margin;
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
    color: rgb(79, 119, 184);
  }
}
.v-cart__total {
  margin: 0 auto;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 0.01rem;
  display: flex;
  justify-content: center;
  background: rgba(20, 28, 39, 0.933);
  color: rgb(255, 255, 255);
  font-size: 0.9rem;
}
.total__name {
  display: flex;
  margin-right: $margin * 2;
  margin-left: $margin * 2;
}
</style>
