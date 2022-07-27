<!-- This is how each blog post will be set up -->
<template>
    <b-card
        :key="post.id"
        class="background_color1 textLeft"
    >
        <b-row>
            <b-col cols="3">
                <b-img :src="post.imgSrc" :alt="post.imgAlt" fluid></b-img>
            </b-col>
            <b-col cols="9">
                <h4 class="text_color2">{{ post.title }}</h4>
                <p class="primary_text_color1">{{ post.text }}</p>
                <div class="textRight">
                    <a href="#" class="text_color4">{{ readMore }}</a>
                </div>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
    export default {
        data() {
            return {
                readMore: 'Read More >>',
            }
        },
        // Set up the props and validation for each blog post
        props: {
            post: {
                type: Object,
                required: true,
            },
            id: {
                type: Number,
                required: true,
                default: 0
            },
            title: {
                type: String,
                required: true,
                default: "Blog Post"
            },
            text: {
                type: String,
                required: true,
                default: "This is a blog post"
            },
            imgSrc: {
                type: String
            },
            imgAlt: {
                type: String,
                required: true,
                default: "Description of the image",
            }
        }
    }
</script>
