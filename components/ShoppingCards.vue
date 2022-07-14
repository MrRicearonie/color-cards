<!-- This is the how the shopping cards will be layed out -->
<template>
  <b-col xs="12" md="6" lg="4" xl="3">
    <b-card-group>
      <b-card
        deck
        :title="itemList.title"
        :img-src="itemList.img_src"
        :img-alt="itemList.img_alt"
        img-top
        tag="article"
        class="mb-4"
        :class="{ boldBorder: showBorder }"
      >
        <b-card-text>{{ itemList.desc }}</b-card-text>
        <!-- add click event to a button -->
        <div class="btnContainer">
            <b-button href="#" variant="primary">{{ itemList.btn_text_buy }}</b-button>
            <b-button  @click="toggleBorder()" href="#" variant="outline-primary">{{ itemList.btn_text_more }}</b-button>
        </div>
      </b-card>
    </b-card-group>
  </b-col>
</template>

<script>
import { borderMixin } from "../assets/mixins/border.js";

export default {
  mixins: [borderMixin],
  name: "item-card",

  // props and validation for the shopping cards
  props: {
    itemList: {
      type: Object,
      requred: true,
    },
    title: {
      type: String,
      required: true,
      default: "Product Name",
    },
    desc: {
      type: String,
      required: true,
      default: "Some default text",
    },
    btn_text_buy: {
      type: String,
      default: "Disabled",
    },
    btn_text_more: {
        type: String,
        default: "Disabled",
    },
    img_src: {
      type: String,
    },
    img_alt: {
      type: String,
      required: true,
      default: "Description of the image",
    },
  },
};
</script>

<!-- CSS needs to be scoped to override bootstrap card border -->
<style scoped>
    .boldBorder {
        border: 1px solid #027bff;
    }
</style>
