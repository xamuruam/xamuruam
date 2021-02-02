<template>
  <div class="v-catalog-item">
    <img
      class="v-catalog-item__image"
      :src="require('../../assets/images/' + product_data.image)"
      alt="img"
    />
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">$ {{ product_data.price }}</p>
    <span class="v-catalog-item__add_to_cart_btn btn" @click="addToCart">
      Add to cart
    </span>
  </div>
</template>

<script>
export default {
  name: 'v-catalog-item',
  props: {
    product_data: {
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
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data);
    }
  }
};
</script>

<style lang="scss">
.v-catalog-item {
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
  // .v-catalog-item__image:hover {
  //   opacity: 0.5;
}
.v-catalog-item__add_to_cart_btn {
  padding: 0.4rem 1rem;
  text-transform: uppercase;
  // letter-spacing: 0.1rem;
  font-size: 0.9rem;
  background: rgb(24, 29, 37);
  color: rgb(117, 138, 172);
  border: 1px solid rgb(79, 119, 184);
  transition: all 0.3s linear;
  cursor: pointer;
}
.v-catalog-item__add_to_cart_btn:hover {
  background: transparent;
  color: rgb(79, 119, 184);
}
</style>
