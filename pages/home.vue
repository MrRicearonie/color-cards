<!-- Christopher Rempe, 2022 -->
<!-- The hompage for ColorCards. Let the user know what the site is about, and how to use it. -->
<template>
    <div class="background_color1 tall">
        <!-- Create the jumbotron -->
        <b-jumbotron header-level="3" variant="text-center rounded-lg" class="background_color2">
            <template #header><span class="text_color1">{{ headerText }}</span><span class="text_color4">{{ colorText }}</span></template>
            <template #lead><span class="text_color1">{{ leadText }}</span></template>
            <hr class="my-4 color5">
            <p class="primary_text_color2">{{ jumbotronText }}</p>
            <p class="primary_text_color2">{{ jumbotronText2 }}</p>
            <div class="btnContainer">
                <nuxt-link to="/personal" id="button-1" role="button" tabindex="0" class="nav-link btn homeBtn text_color3 border_color3 btn-lg" @mouseover.native="btnHovered('button-1', '3')" @mouseleave.native="btnUnhovered('button-1')">{{ btnPersonal }}</nuxt-link>
                <nuxt-link to="/shop" id="button-2" role="button" tabindex="0" class="nav-link btn homeBtn text_color4 border_color4 btn-lg" @mouseover.native="btnHovered('button-2', '4')" @mouseleave.native="btnUnhovered('button-2')">{{ btnShop }}</nuxt-link>
                <nuxt-link to="/blog" id="button-3" role="button" tabindex="0" class="nav-link btn homeBtn text_color5 border_color5 btn-lg" @mouseover.native="btnHovered('button-3', '5')" @mouseleave.native="btnUnhovered('button-3')">{{ btnBlog }}</nuxt-link>
            </div>
        </b-jumbotron>
    </div>
</template>

<script>
    import { colorMixin } from "../assets/mixins/colors.js";
    export default {
        mixins: [colorMixin],
        data: () => {
            return {
                headerText: "Hello, ",
                colorText: "Colors!",
                leadText: "Welcome to the best way to find a color palette for your next site!",
                jumbotronText: "At a lost for what colors to use for your site, or already have some in mind but need some complimentary colors for them? Color Cards is here to help! Based on your color choices, the site will generate a complementary palette and show you examples on how they will look on a webpage using Huemint's api. Let's get started by choosing what type of site you are going to be building.",
                jumbotronText2: "Click on the color card to show the hex value, set your own color, copy the color to your clipboard, or to lock that color in for the next color palette. The arrow to the right will allow you to generate the color palette, and on mobile, the arrow to the left will show you the cards.",
                btnPersonal: "Personal Site",
                btnShop: "Shop",
                btnBlog: "Blog",
                tooltipText: "Let's find those",
            };
        },
        mounted () {
            // Call refresh to get the appropriate colors on the page
            this.refresh();
        }
    };
</script>

<style lang="scss">
    @import '../assets/scss/settings.variables';

    .homeBtn {
        width: 10rem;
    }

    .background_transparent {
        background-color: transparent;
    }

    .btn:hover {
        color: white !important;
        border-color: white !important;
    }

    .tall {
        min-height: calc(100vh - 11rem);
    }

    .jumbotron {
        margin-bottom: 0;
    }

</style>
