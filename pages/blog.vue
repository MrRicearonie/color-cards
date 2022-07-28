<!-- Christopher Rempe, 2022 -->
<!-- This is to give a blog site example. Have an artile on the left (or top on mobile) and previews on the right -->
<template>
    <div class="full-height background_color1">
        <b-container>
            <div class="text-center title">
                <h1 class="display-4 text_color2">{{ pageTitle }}</h1>
            </div>
            <b-row>
                <!-- The main article on the left/top -->
                <b-col cols="12" lg="7" class="mainPost textLeft">
                    <b-img :src="mainPost.imgSrc" :alt="mainPost.imgAlt" fluid></b-img>
                    <h2 class="text_color3">{{ mainPost.title }}</h2>
                    <p class="primary_text_color1">{{ mainPost.text }}</p>
                    <div class="textRight">
                        <a href="#" class="text_color4" @click="readMoreAlert()">{{ readMore }}</a>
                    </div>
                </b-col>
                <!-- Generate previews -->
                <b-col cols="12" lg="5">
                    <BlogPostPreview
                    v-for="(post, index) in blogPosts"
                    :key = "index"
                    :post = "post"
                    :id = "post.id"
                    :title = "post.title"
                    :text = "post.text"
                    :imgSrc = "post.imgSrc"
                    :imgAlt = "post.imgAlt"
                />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import BlogPostPreview from "../components/BlogPosts";
    import { colorMixin } from "../assets/mixins/colors.js";
    import { blogMixin } from "../assets/mixins/blog.js";
    export default {
        mixins: [colorMixin, blogMixin],
        components: { BlogPostPreview },
        data() {
            return {
                pageTitle: 'Blog',
                readMore: 'Read More >>',
                mainPost: {
                        title: 'Has the MacBook Pro Made a Comeback?',
                        imgSrc: require('@/assets/macbook.png'),
                        imgAlt: '14 and 16 inch 2021 MacBook Pros back to back',
                        padding: '',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptatum consequuntur enim, ipsa aspernatur quam nulla laudantium nemo magni. Iusto cum facere officia ducimus accusamus beatae ipsum aliquid! Voluptatem, laborum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, totam? Possimus eaque inventore, earum harum magnam dolore saepe asperiores sint assumenda eligendi, autem tenetur quidem iusto quas cumque? Non, rem. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                    },
                blogPosts: [
                    {
                        id: 1,
                        title: 'New Surface Laptop',
                        imgSrc: require('@/assets/windows.png'),
                        imgAlt: 'A black Microsoft Surface Laptop 4',
                        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas maiores deserunt dolore consequatur libero, laboriosam numquam. Ut maxime dolores dolorem...'
                    },
                    {
                        id: 2,

                        title: 'We Try PopOS!',
                        imgSrc: require('@/assets/linux.png'),
                        imgAlt: 'A System76 Linux Laptop',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nihil aliquid, animi blanditiis eligendi error neque tempora ad reprehenderit ducimus...'
                    },
                    {
                        id: 3,

                        title: 'Why Are Chomebooks So Popular?',
                        imgSrc: require('@/assets/chomeos.png'),
                        imgAlt: 'A Google Pixelbook',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea provident cumque nihil magni impedit perspiciatis eaque numquam cum atque tenetur...'
                    }
                ],
            }
        },
        mounted () {
            // Call refresh to get the appropriate colors on the page
            this.refresh();
        }
    }
</script>

<style lang="scss">
    h2 {
        margin-top: 1rem;
    }
    h4 {
        font-size: medium;
    }
    .full-height {
        min-height: calc(100vh - 11rem);
        padding-bottom: 2rem;
    }
    .title {
        padding: 3rem 0;
    }
    .mainPost {
        margin-bottom: 2rem;
    }
    .textLeft {
        text-align: left;
    }
    .textRight {
        text-align: right;
    }
</style>
