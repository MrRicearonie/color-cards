<!-- Christopher Rempe, 2022 -->
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
        class="mb-4 background_color5 text_color2"
        :class="{ boldBorder: showBorder }"
      >
        <b-card-text class="primary_text_color5">{{ itemList.desc }}</b-card-text>
        <!-- add click event to a button -->
        <div class="btnContainer">
            <b-button @click="buyClicked()" href="#" variant="primary" class="background_color3 border_color3">{{ itemList.btn_text_buy }}</b-button>
            <b-button :id="itemList.btn_id" @click="aboutClicked()" href="#" variant="outline-primary" class="border_color2 text_color2" @mouseover.native="btnHovered(itemList.btn_id, '2')" @mouseleave.native="btnUnhovered(itemList.btn_id)">{{ itemList.btn_text_more }}</b-button>
        </div>
      </b-card>
    </b-card-group>
  </b-col>
</template>

<script>
import { shopMixin } from "../assets/mixins/shop.js";
import { colorMixin } from "../assets/mixins/colors.js";

export default {
  mixins: [shopMixin, colorMixin],
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
    btn_id: {
      type: String,
      required: true,
      default: "shop-btn-1",
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
