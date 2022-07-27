<!-- Used to be ShopContent -->
<template>
    <div class="background_color1">
        <div class="text-center title">
            <h1 class="display-4 text_color2">{{ title }}</h1>
        </div>

        <!-- Create a carousel for the images -->
        <b-carousel
            id="carousel-fade"
            fade
            controls
        >
            <!-- Go through the images and add them to the carousel -->
            <b-carousel-slide v-for="image in carouselImages" :key="image.id" :img-src="image.src" :img-alt="image.alt">
            </b-carousel-slide>
        </b-carousel>

        <b-container>
            <b-row>
                <!-- For each item in items, set up the shopping card from the Shopping Cards file -->
                <ShoppingCard
                    v-for="(itemList, index) in items"
                    :key="index"
                    :itemList="itemList"
                    :img_src="itemList.img_src"
                    :img_alt="itemList.img_alt"
                    :title="itemList.title"
                    :desc="itemList.desc"
                    :btn_id="itemList.btn_id"
                    :btn_text="itemList.btn_text"
                />
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import ShoppingCard from "../components/ShoppingCards";
    import { colorMixin } from "../assets/mixins/colors.js";
    export default {
        mixins: [colorMixin],
        components: { ShoppingCard },
        data: () => {
            return {
                title: 'Welcome to our Shop',
                carouselImages: [
                    {
                        title: 'Basement',
                        src: require('@/assets/TheBasement.jpg'),
                        alt: "A basement of an abandoned building covered in graffiti"
                    },
                    {
                        title: 'Beach',
                        src: require('@/assets/RubyBeach.jpg'),
                        alt: "Sunset over the ocean from a beach with a tall island"
                    },
                    {
                        title: 'Moss',
                        src: require('@/assets/MossRockGrass.jpg'),
                        alt: "A rock covered in moss"
                    },
                ],

                // Each item has a photo, title, description, and two buttons
                items: [
                    {
                        img_src: require('@/assets/RockPile.jpg'),
                        img_alt: "test test",
                        title: "testing",
                        desc: "This is a test",
                        btn_text_buy: "Buy",
                        btn_id: "shop-btn-1",
                        btn_text_more: "About"
                    },
                    {
                        img_src: require('@/assets/RockPile.jpg'),
                        img_alt: "test test",
                        title: "testing",
                        desc: "This is a test",
                        btn_text_buy: "Buy",
                        btn_id: "shop-btn-2",
                        btn_text_more: "About"
                    },
                    {
                        img_src: require('@/assets/RockPile.jpg'),
                        img_alt: "test test",
                        title: "testing",
                        desc: "This is a test",
                        btn_text_buy: "Buy",
                        btn_id: "shop-btn-3",
                        btn_text_more: "About"
                    },
                    {
                        img_src: require('@/assets/RockPile.jpg'),
                        img_alt: "test test",
                        title: "testing",
                        desc: "This is a test",
                        btn_text_buy: "Buy",
                        btn_id: "shop-btn-4",
                        btn_text_more: "About"
                    },
                    {
                        img_src: require('@/assets/RockPile.jpg'),
                        img_alt: "test test",
                        title: "testing",
                        desc: "This is a test",
                        btn_text_buy: "Buy",
                        btn_id: "shop-btn-5",
                        btn_text_more: "About"
                    },
                    {
                        img_src: require('@/assets/RockPile.jpg'),
                        img_alt: "test test",
                        title: "testing",
                        desc: "This is a test",
                        btn_text_buy: "Buy",
                        btn_id: "shop-btn-6",
                        btn_text_more: "About"
                    },
                    {
                        img_src: require('@/assets/RockPile.jpg'),
                        img_alt: "test test",
                        title: "testing",
                        desc: "This is a test",
                        btn_text_buy: "Buy",
                        btn_id: "shop-btn-7",
                        btn_text_more: "About"
                    },
                    {
                        img_src: require('@/assets/RockPile.jpg'),
                        img_alt: "test test",
                        title: "testing",
                        desc: "This is a test",
                        btn_text_buy: "Buy",
                        btn_id: "shop-btn-8",
                        btn_text_more: "About"
                    },
                    {
                        img_src: require('@/assets/RockPile.jpg'),
                        img_alt: "test test",
                        title: "testing",
                        desc: "This is a test",
                        btn_text_buy: "Buy",
                        btn_id: "shop-btn-9",
                        btn_text_more: "About"
                    },
                    {
                        img_src: require('@/assets/RockPile.jpg'),
                        img_alt: "test test",
                        title: "testing",
                        desc: "This is a test",
                        btn_text_buy: "Buy",
                        btn_id: "shop-btn-10",
                        btn_text_more: "About"
                    },
                    {
                        img_src: require('@/assets/RockPile.jpg'),
                        img_alt: "test test",
                        title: "testing",
                        desc: "This is a test",
                        btn_text_buy: "Buy",
                        btn_id: "shop-btn-11",
                        btn_text_more: "About"
                    },
                    {
                        img_src: require('@/assets/RockPile.jpg'),
                        img_alt: "test test",
                        title: "testing",
                        desc: "This is a test",
                        btn_text_buy: "Buy",
                        btn_id: "shop-btn-12",
                        btn_text_more: "About"
                    },
                ]
            };
        },
        mounted () {
            this.refresh();
        }
    };
</script>

<style lang="scss">
    .title {
        padding: 3rem 0;
    }
    .carousel {
        padding-bottom: 3rem;
    }
</style>
