<!-- Used to be called AccordionContent -->
<template>
    <b-container>
        <div class="text-center my-5">
            <h1 class="display-4 text-secondary">{{ pageTitle }}</h1>
        </div>
        <div class="accordion" role="tablist">
            <!-- Go through each of the posts and add them to the accordion -->
            <BlogPost
                v-for="(post, index) in blogPosts"
                :key = "index"
                :post = "post"
                :id = "post.id"
                :title = "post.title"
                :text = "post.text"
                :first = "post.first"
                :padding = "post.padding"
                :imgSrc = "post.imgSrc"
                :imgAlt = "post.imgAlt"
            />
        </div>
    </b-container>
</template>

<script>
    import BlogPost from "../components/BlogPosts";
    import { colorMixin } from "../assets/mixins/colors.js";
    export default {
        mixins: [colorMixin],
        components: { BlogPost },
        data() {
            return {
                pageTitle: 'Major Operating Systems',
                blogPosts: [
                    {
                        id: 1,
                        first: true,
                        title: 'Windows',
                        imgSrc: require('@/assets/windows.jpeg'),
                        imgAlt: 'A black Microsoft Surface Laptop 4',
                        padding: 'mb-5',
                        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas maiores deserunt dolore consequatur libero, laboriosam numquam. Ut maxime dolores dolorem, cumque non incidunt laboriosam totam, modi minus qui neque dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sed, eaque repudiandae ea iure ullam amet obcaecati unde laborum dolorem ratione ipsa! Cupiditate esse, atque quae assumenda incidunt accusamus nam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo omnis, animi, fugiat nesciunt maxime consequatur dignissimos ducimus officiis est blanditiis laborum accusamus? Omnis consequuntur ab quisquam ut nihil perferendis. Quos. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae culpa, maiores pariatur omnis quam placeat velit veritatis quos distinctio autem obcaecati repellat sunt illo non? Numquam iure fugit ex blanditiis.'
                    },
                    {
                        id: 2,
                        first: false,
                        title: 'Mac',
                        imgSrc: require('@/assets/macbook.jpeg'),
                        imgAlt: '14 and 16 inch 2021 MacBook Pros back to back',
                        padding: '',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptatum consequuntur enim, ipsa aspernatur quam nulla laudantium nemo magni. Iusto cum facere officia ducimus accusamus beatae ipsum aliquid! Voluptatem, laborum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, totam? Possimus eaque inventore, earum harum magnam dolore saepe asperiores sint assumenda eligendi, autem tenetur quidem iusto quas cumque? Non, rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aliquid vero laborum fugit, qui harum id dolorem nisi odit ipsa cupiditate suscipit corrupti, repellendus nihil aliquam sit soluta enim dolor. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque laborum, harum in mollitia perferendis excepturi minima repudiandae illum, praesentium possimus numquam facere maxime eligendi ratione, laudantium minus tempora voluptatem nisi!'
                    },
                    {
                        id: 3,
                        first: false,
                        title: 'Linux',
                        imgSrc: require('@/assets/linux.png'),
                        imgAlt: 'A System76 Linux Laptop',
                        padding: '',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nihil aliquid, animi blanditiis eligendi error neque tempora ad reprehenderit ducimus est aut voluptatum nemo illum necessitatibus! Ut amet et ipsam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quos quisquam beatae exercitationem iusto aut facilis tenetur assumenda! Sint, minima! Commodi omnis eligendi minus consequuntur facilis veritatis repudiandae tempore fuga.'
                    },
                    {
                        id: 4,
                        first: false,
                        title: 'ChromeOS',
                        imgSrc: require('@/assets/chomeos.png'),
                        imgAlt: 'A Google Pixelbook',
                        padding: 'mb-4',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea provident cumque nihil magni impedit perspiciatis eaque numquam cum atque tenetur doloremque reiciendis quasi voluptatem, expedita at praesentium excepturi vel iure. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos laudantium similique, dicta harum, fugit eaque consectetur pariatur assumenda aliquam maiores alias dolorem laborum est nihil ab neque corporis, officia possimus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore obcaecati repellendus incidunt aut, quisquam soluta autem necessitatibus assumenda ratione, earum mollitia dolore, repudiandae adipisci maxime vel ullam error. Sequi, repudiandae.'
                    }
                ],
            }
        },
        mounted () {
            this.refresh();
        }
    }
</script>
