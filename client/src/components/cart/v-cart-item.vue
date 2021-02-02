<template>
  <div class="v-cart-item">
    <img
      class="v-cart-item__image"
      :src="require('../../assets/images/' + cart_item_data.image)"
      alt=""
    />
    <div class="v-cart-item_info">
      {{ cart_item_data.name }}: $ {{ cart_item_data.price }}
      <!-- <p>{{ cart_item_data.article }}</p> -->
    </div>
    <div class="v-cart-item__quantity">
      <span>
        <span class="quantity__btn" @click="decrementItem">-</span>
        {{ cart_item_data.quantity }}
        <span class="quantity__btn" @click="incrementItem">+</span>
      </span>
      <span class="v-cart-item__delete_btn" @click="deleteFromCart">
        Delete
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-cart-item',
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {
    this.$set(this.cart_item_data, 'quantity', 1);
  },
  methods: {
    incrementItem() {
      this.$emit('increment');
    },
    decrementItem() {
      this.$emit('decrement');
    },
    deleteFromCart() {
      this.$emit('deleteFromCart');
    }
  }
};
</script>

<style lang="scss">
.v-cart-item {
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  // display: inline-block;
  // padding: 2rem;
  padding: $padding * 2;
  // flex-basis: 25%;
  // box-shadow: 0 0 8px 0 #e0e0e0;
  margin-bottom: $margin * 2;
  &__image {
    // position: relative;
    // overflow: hidden;
    display: block;
    width: 100%;
    min-height: 12rem;
    transition: all 0.3s linear;
  }
}
.v-cart-item_info {
  color: rgb(34, 34, 34);
  padding: 0.9rem 0.1rem;
}
.v-cart-item__quantity {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0.1rem 0.1rem;
  color: rgb(34, 34, 34);
}
.v-cart-item__delete_btn {
  padding: 0.2rem 0.1rem;
  text-transform: uppercase;
  font-size: 0.9rem;
  background: rgba(109, 136, 173, 0.933);
  color: rgb(34, 34, 34);
  border: 1px solid rgba(20, 28, 39, 0.933);
  border-radius: $radius;
  transition: all 0.3s linear;
  cursor: pointer;
}
.v-cart-item__delete_btn:hover {
  background: transparent;
  color: rgb(79, 119, 184);
}
.quantity__btn {
  padding: 0.1rem 0.1rem;
  cursor: pointer;
}
</style>
