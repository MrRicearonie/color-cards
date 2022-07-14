<!-- This is how each blog post will be set up -->
<template>
    <b-card
        :key="post.id"
    >
    <!-- Go through each of the cards and add them to the accordion -->
        <b-card-header header-tag="header" class="p-1" role="tab">
            <!-- Use the id from the current card to create the id, and add it's title -->
            <b-button block v-b-toggle="'accordion-' + post.id" variant="info">{{ post.title }}</b-button>
        </b-card-header>
        <!-- If the first card, then default to visible. If not first, have it hidden at start -->
                <b-collapse :id="'accordion-' + post.id" :visible="post.first" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <!-- Add the image, and padding to it if needed -->
                        <div :class="'text-center ' + post.padding">
                            <b-img :src="post.imgSrc" :alt="post.imgAlt" fluid></b-img>
                        </div>
                        <!-- Add the text from the card -->
                        <b-card-text>{{ post.text }}</b-card-text>
                    </b-card-body>
                </b-collapse>
    </b-card>
</template>

<script>
    export default {
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
            first: {
                type: Boolean,
                required: true,
                default: false
            },
            padding: {
                type: String,
                required: true,
                default: ''
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
