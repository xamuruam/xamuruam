<template>
  <div class="v-btn" :class="className" @click="click">
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'v-btn',
  props: {
    title: {
      type: String,
      default: 'PRESS'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    },
    append_icon: {
      type: String,
      default: ''
    },
    prepend_icon: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
  computed: {
    className() {
      return {
        'v-btn__disabled': this.disabled,
        'v-btn__error': this.error,
        'v-btn__success': this.success
      };
    }
  },
  methods: {
    click() {
      this.$emit('click');
    }
  }
};
</script>

<style lang="scss">
.v-btn {
  border-radius: 4px;
  padding: 8 px 16 px;
  color: #333;
  background: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s linear;
  &:hover {
    background: transparent;
    color: #4f77b8;
  }
  &__disabled {
    pointer-events: none;
  }
  &__error {
    background: red;
  }
  &__success {
    background: forestgreen;
  }
}
</style>
