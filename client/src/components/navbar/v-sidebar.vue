<template>
  <transition name="show">
    <div v-if="open" class="sidebar">
      <transition-group appear name="fade">
        <router-link
          v-for="(item, index) in list"
          :key="item.to"
          :to="item.to"
          :style="{ '--index': index }"
          class="sidebar-element"
          ><fa-icon class="icon" :icon="['fas', item.icon]" size="1x"
        /></router-link>
      </transition-group>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'v-sidebar',
  props: {
    open: {
      type: Boolean,
      default() {
        return {};
      }
    }
  },
  data: () => {
    return {
      list: [
        { title: 'Home', to: '/', icon: 'home' },
        { title: 'Catalog', to: '/catalog', icon: 'th' },
        { title: 'About', to: '/about', icon: 'info-circle' },
        { title: 'Contact', to: '/contact', icon: 'comment' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  left: 0;
  top: 8.6%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  position: fixed;
  flex-direction: column;
  width: 60px;
  height: calc(92vh - 50px);
  padding-top: 48px;
  background-color: rgba($color: rgba(20, 28, 39, 0.933), $alpha: 0.6);
  .sidebar-element {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    margin-bottom: 8px;
    cursor: pointer;
    color: rgb(254, 254, 254);
    background-color: rgb(40, 46, 65);
  }
}
.show {
  &-enter,
  &-leave-to {
    opacity: 0;
    transform: translateX(-60px);
  }
  &-enter-active,
  &-leave-active {
    transition: all 500ms;
  }
}
.fade {
  &-enter {
    opacity: 0;
    transform: translateX(-60px);
  }
  &-enter-active {
    transition: all 500ms ease-in-out;
    transition-delay: calc(50ms * var(--index));
  }
}
</style>
