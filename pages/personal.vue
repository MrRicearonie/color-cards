<!-- Used to be called GridContent -->
<template>
    <div class="background_color1">
        <b-container class="full-height">
            <b-row class="full-height">
                <b-col cols="12" md="5" lg="4" xl="3" class="photo-container">
                    <div class="img-background background_color2">
                        <b-img :src="img" :alt="imgAlt" fluid rounded="circle" />
                    </div>
                </b-col>
                <b-col cols="12" md="7" lg="8" xl="9" class="text-container">
                    <div class="text-center my-5">
                        <h1 class="display-4 text_color4">{{ pageWelcome }} <span class="text_color5">{{ name }}</span></h1>
                    </div>
                    <p>{{ welcomeText }}</p>
                    <h2 class="text_color5">{{ about }}</h2>
                    <p>{{ aboutText }}</p>
                    <p>{{ aboutText2 }}</p>
                    <h2 class="text_color5">{{ contact }}</h2>
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
            aboutText: "Here is the spot for text about yourself. This could mention your hobbies, skills, interests, etc. I'm not just going to keep filling up this text box to give you space for your content. So, how's it going? Good? Bad? Whatever it is, I hope finding your next color palette will make it better! Wow, I still have some space, so let's see. How about them Yankees? They're a sports team. Uhhh, yeah, I've got nothing. Why are you still reading this? It's just filler text, your not supposed to be intrested in it. It's just here to take up space. Could I have done some Lorum Ipson text instead of this? Yes. But where is the fun in that? Alright, I think this is enough text. Have a good rest of your day!",
            aboutText2: "Wait, there still more text to go? Hopefully not that much. Just enough to create another line? Yes? Well that's good. Alright, goodbye for real this time. Next up, contact logos. Time for the land of email, LinkedIn, GitHub, Twitter, and Dribble!",
            contact: "Contact Me",
            img: require('@/assets/SquareMe.jpg'),
            imgAlt: "A photo of Chris"
            }
        },
        mounted () {
            this.refresh();
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/scss/settings.variables';

    p {
        color: $textlight
    }

    .full-height {
        min-height: 100vh;
    }

    .img-background {
        padding: 5px;
        border-radius: 100%;
    }

    .photo-container {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    $breakpoint-tablet: 768px;
    @media (max-width: $breakpoint-tablet) {
        .photo-container {
            height: 30vh;
        } 

        .person {
            height: 27.5vh;
        }
    }
</style>
