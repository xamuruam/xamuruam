import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faBars,
  faShoppingCart,
  faHome,
  faInfoCircle,
  faTh,
  faShareAlt,
  faComment
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faBars,
  faShoppingCart,
  faHome,
  faInfoCircle,
  faTh,
  faShareAlt,
  faComment
);

Vue.component('fa-icon', FontAwesomeIcon);
