<template>
    <div>
        <!-- Create the jumbotron -->
        <b-jumbotron header-level="3" variant="text-center rounded-lg">
            <template #header>{{ headerText }}<span class="text_color4">{{ colorText }}</span></template>
            <template #lead>{{ leadText}} </template>
            <hr class="my-4 color5">
            <p>{{ jumbotronText }}</p>
            <div class="btnContainer">
                <!-- <b-button size="lg" href="#" class="homeBtn text_color1 border_color1" id="button-1" @mouseover="hover1 = true" @mouseleave="hover1 = false" :class="{ background_color1: hover1 }" @click="btnClicked = !btnClicked">{{ btnPersonal }}</b-button> -->
                <a id="button-1" role="button" tabindex="0" href="#" target="_self" class="btn homeBtn text_color1 border_color1 btn-lg" @mouseover="hover1 = true" @mouseleave="hover1 = false" :class="{ background_color1: hover1, background_transparent: !hover1 }" @click="btnClicked = !btnClicked">{{ btnPersonal }}</a>
                <a id="button-2" role="button" tabindex="0" href="#" target="_self" class="btn homeBtn text_color2 border_color2 btn-lg" @mouseover="hover2 = true" @mouseleave="hover2 = false" :class="{ background_color2: hover2, background_transparent: !hover2 }" @click="btnClicked = !btnClicked">{{ btnShop }}</a>
                <a id="button-3" role="button" tabindex="0" href="#" target="_self" class="btn homeBtn text_color3 border_color3 btn-lg" @mouseover="hover3 = true" @mouseleave="hover3 = false" :class="{ background_color3: hover3, background_transparent: !hover3 }" @click="btnClicked = !btnClicked">{{ btnBlog }}</a>
            </div>
        </b-jumbotron>
        <!-- Show an alert if the user clicks the button -->
        <b-alert show variant="danger" v-if = "btnClicked">{{ alert }}</b-alert>
        <p v-else>{{ placeholder }}</p>
        <b-tooltip target="button-1" placement="bottom">{{ tooltipText }} <span class="text_color1">{{ colorText }}</span></b-tooltip>
        <b-tooltip target="button-2" placement="bottom">{{ tooltipText }} <span class="text_color2">{{ colorText }}</span></b-tooltip>
        <b-tooltip target="button-3" placement="bottom">{{ tooltipText }} <span class="text_color3">{{ colorText }}</span></b-tooltip>
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
                btnPersonal: "Personal Site",
                btnShop: "Shop",
                btnBlog: "Blog",
                tooltipText: "Let's find those",
                btnClicked: false,
                alert: 'The site is currently being constructed. Sorry for the inconvenience',
                placeholder: 'Use links in navbar for now',
                hover1: false,
                hover2: false,
                hover3: false
            };
        },
        mounted () {
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

</style>
