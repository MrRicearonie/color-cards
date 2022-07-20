<template>
    <div class="color-card-container">
        <section class="colorCard down" id="card1">
            <div class="color background_color1"></div>
            <div class="color-card-content">
            <p class="hex">#11323b</p>
            <div class="button-bottom button-bottom-ani background_color1">
                <div class="button-top button-top-ani copy">Copy</div>
            </div>
            <div id="lock-btn-bottom1" class="unlocked-bottom button-bottom lock-bottom" @click="lock(1)">
                <div id="lock-btn-top1" class="unlocked-top button-top lock">Lock</div>
            </div>
            </div>
        </section>
        <section class="colorCard down" id="card2">
            <div class="color background_color2"></div>
            <div class="color-card-content">
            <p class="hex">#266363</p>
            <div class="button-bottom button-bottom-ani background_color2">
                <div class="button-top button-top-ani copy">Copy</div>
            </div>
            <div id="lock-btn-bottom2" class="unlocked-bottom button-bottom lock-bottom" @click="lock(2)">
                <div id="lock-btn-top2" class="unlocked-top button-top lock">Lock</div>
            </div>
            </div>
        </section>
        <section class="colorCard down" id="card3">
            <div class="color background_color3"></div>
            <div class="color-card-content">
            <p class="hex">#444543</p>
            <div class="button-bottom button-bottom-ani background_color3">
                <div class="button-top button-top-ani copy">Copy</div>
            </div>
            <div id="lock-btn-bottom3" class="unlocked-bottom button-bottom lock-bottom" @click="lock(3)">
                <div id="lock-btn-top3" class="unlocked-top button-top lock">Lock</div>
            </div>
            </div>
        </section>
        <section class="colorCard down" id="card4">
            <div class="color background_color4"></div>
            <div class="color-card-content">
            <p class="hex">#d1b47c</p>
            <div class="button-bottom button-bottom-ani background_color4">
                <div class="button-top button-top-ani copy">Copy</div>
            </div>
            <div id="lock-btn-bottom4" class="unlocked-bottom button-bottom lock-bottom" @click="lock(4)">
                <div id="lock-btn-top4" class="unlocked-top button-top lock">Lock</div>
            </div>
            </div>
        </section>
        <section class="colorCard down" id="card5">
            <div class="color background_color5"></div>
            <div class="color-card-content">
            <p class="hex">#dfd8b3</p>
            <div class="button-bottom button-bottom-ani background_color5">
                <div class="button-top button-top-ani copy">Copy</div>
            </div>
            <div id="lock-btn-bottom5" class="unlocked-bottom button-bottom lock-bottom" @click="getColors()">
                <div id="lock-btn-top5" class="unlocked-top button-top lock">Lock</div>
            </div>
            </div>
        </section>
    </div>
</template>

<script>
    // import axios from "axios"
    import { colorMixin } from "../assets/mixins/colors.js";

    export default {
        mixins: [colorMixin],
    };
</script>

<style lang="scss">
</style>
