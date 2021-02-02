<template>
  <div>
    <v-navbar @togglenav="navOpen = !navOpen" />
    <v-sidebar v-on-clickaway="away" :open="!navOpen" />
    <div class="v_contact">
      <span class="contact_header"><h2>Have Any Questions?</h2></span>

      <div class="contact_container_wrapper">
        <div id="contact" class="contact_container">
          <div v-if="show_contact == true" class="">
            <h2 class="contact_container_title">
              Contact Us
            </h2>

            <div v-if="contact_notice != ''" class="alert-warning">
              There was a problem submitting your message. {{ contact_notice }}
            </div>

            <form @submit.prevent="sendContactMessage()">
              <p>
                <textarea
                  v-model="contact_email"
                  class="input_textarea"
                  placeholder="Enter Your Email"
                  rows="1"
                />
              </p>
              <p>
                <textarea
                  v-model="contact_message"
                  class="input_textarea"
                  placeholder="Enter Your Message"
                  rows="5"
                ></textarea>
              </p>

              <div class="contact_container_bottom">
                <span class="send__btn">
                  Send Message
                </span>
              </div>
            </form>
          </div>

          <div v-else>
            <h3>Message Sent Successfully!</h3>
            <p>
              Thank you for contacting us, we'll get back to you as soon as we
              can.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import vNavbar from './navbar/v-navbar.vue';
import vSidebar from './navbar/v-sidebar.vue';

export default {
  name: 'v-contact',
  components: { vNavbar, vSidebar },
  mixins: [clickaway],
  props: {},
  data() {
    return {
      navOpen: true,
      email: '',
      message: '',
      show_contact: true,
      contact_email: '',
      contact_message: '',
      contact_notice: ''
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
.v_contact {
  margin-top: 70px;
  align-items: center;
}
.contact_header {
  display: grid;
  justify-content: center;
  margin-bottom: 0 auto;
  color: rgb(176, 185, 216);
}
.contact_container_wrapper {
  margin-top: 50px;
  margin-left: -19px;
  margin-bottom: 60px;
  align-items: center;
  color: rgb(124, 136, 141);
  align-items: center;
  width: 90vw;
  max-width: 1170px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 0.7fr));
  justify-content: center;
}
.contact_container {
  display: block;
  width: 100%;
  border: 10px rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 10px 10px;
  max-width: 900px;
  background: rgba(255, 255, 255, 0.8);
}
.contact_container_title {
  margin: 5px 0;
}
.input_textarea {
  width: 100%;
  border: 5px solid rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  resize: none;
  padding: 0 5px;
  box-sizing: border-box;
  font-family: 'Opens Sans' sans-serif;
  font-size: 18px;
}
textarea::placeholder {
  color: rgb(134, 134, 134);
  font-family: 'Opens Sans' sans-serif;
  font-size: 1em;
}
textarea:focus {
  outline: none !important;
}
.contact_container_bottom {
  display: grid;
  justify-content: center;
}
.send__btn {
  margin-bottom: 9px;
  width: 160px;
  padding: 0.6rem 0rem;
  text-transform: uppercase;
  font-size: 0.9rem;
  background: rgba(57, 79, 111, 0.933);
  color: rgb(179, 179, 179);
  text-decoration: none;
  border: 0px;
  border-radius: $radius;
  transition: all 0.3s linear;
  cursor: pointer;
  &:hover {
    background: rgba(85, 114, 158, 0.933);
    color: rgb(179, 179, 179);
  }
}
</style>
