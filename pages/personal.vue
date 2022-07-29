<!-- Christopher Rempe, 2022 -->
<!-- A page to show a personal website. For desktop have image on the left, and content on the right. Mobile, image on top -->
<template>
    <div class="background_color1 main-container">
        <b-container class="full-height">
            <b-row class="full-height">
                <b-col cols="12" md="5" lg="4" xl="3" class="photo-container">
                    <div class="img-background background_color5">
                        <b-img :src="img" :alt="imgAlt" fluid rounded="circle" />
                    </div>
                </b-col>
                <b-col cols="12" md="7" lg="8" xl="9" class="text-container">
                    <div>
                        <div class="text-center welcome">
                            <h1 class="display-4 text_color4">{{ pageWelcome }} <span class="text_color2">{{ name }}</span></h1>
                        </div>
                        <p class="primary_text_color1">{{ welcomeText }}</p>
                    </div>
                    <!-- About the person -->
                    <div>
                        <h2 class="text_color2">{{ about }}</h2>
                        <p class="primary_text_color1">{{ aboutText }}</p>
                        <p class="primary_text_color1">{{ aboutText2 }}</p>
                    </div>
                    <div>
                        <h2 class="text_color2">{{ contact }}</h2>
                        <!-- Show contact icons -->
                        <div class="icon-container">
                            <font-awesome-icon :icon="['fab', 'twitter']" class="text_color4 icon"/>
                            <font-awesome-icon :icon="['fab', 'linkedin']" class="text_color4 icon"/>
                            <font-awesome-icon :icon="['fab', 'github']" class="text_color4 icon"/>
                            <font-awesome-icon :icon="['fab', 'instagram']" class="text_color4 icon"/>
                            <font-awesome-icon :icon="['fab', 'dribbble']" class="text_color4 icon"/>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import { colorMixin } from "../assets/mixins/colors.js";
    export default {
        mixins: [colorMixin],
        data() {
            return {
            pageWelcome: "Hello There! I'm ",
            name: "Chris",
            welcomeText: "This is where some welcome text can go before the meat of the page. Like a slogan or a motto",
            about: "About Me",
            aboutText: "Here is the spot for text about yourself. This could mention your hobbies, skills, interests, etc. I'm now just going to keep filling up this text box to give you space for your content. So, how's it going? Good? Bad? Whatever it is, I hope finding your next color palette will make it better! Wow, I still have some space, so let's see. How about them Yankees? They're a sports team. Uhhh, yeah, I've got nothing. Why are you still reading this? It's just filler text, your not supposed to be intrested in it. It's just here to take up space. Could I have done some Lorum Ipson text instead of this? Yes. But where is the fun in that? Alright, I think this is enough text. Have a good rest of your day!",
            aboutText2: "Wait, there's still more text to go? Hopefully not that much. Just enough to create another line? Yes? Well that's good. Alright, goodbye for real this time. Next up, contact logos. Time for the land of email, LinkedIn, GitHub, Twitter, and Dribble!",
            contact: "Contact Me",
            img: require('@/assets/SquareMe.jpg'),
            imgAlt: "A photo of Chris"
            }
        },
        head() {
            return {
                title: "Personal Example",
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'An example of a personal website using the colors generated.'
                    },
                ],
            };
        },
        mounted () {
            // Call refresh to get the appropriate colors on the page
            this.refresh();
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/scss/settings.variables';

    p {
        color: $textlight
    }

    .main-container {
        padding-bottom: 2rem;
    }

    .full-height {
        min-height: calc(100vh - 11rem);
    }

    .img-background {
        padding: 5px;
        border-radius: 100%;
    }

    .text-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 2rem;
    }

    .welcome {
        margin-top: 3rem;
    }

    .photo-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon-container {
        font-size: 2rem;
    }
    
    .icon {
        margin: 0 1rem;
    }

    $breakpoint-tablet: 768px;
    @media (max-width: $breakpoint-tablet) {
        .photo-container {
            height: 30vh;
        }

        .img-background {
            width: 30vh;
        }
    }
</style>
