<template>
    <div class="color-card-container">
        <section class="colorCard down" id="card1">
            <div class="color background_color1"></div>
            <div class="color-card-content">
            <p class="hex">#<input id="hex_card1" type="text" v-model="hex1" /></p>
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
            <p class="hex">#<input id="hex_card2" type="text" v-model="hex2" /></p>
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
            <p class="hex">#<input id="hex_card3" type="text" v-model="hex3" /></p>
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
            <p class="hex">#<input id="hex_card4" type="text" v-model="hex4" /></p>
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
            <p class="hex">#<input id="hex_card5" type="text" v-model="hex5" /></p>
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
    import { colorMixin } from "../assets/mixins/colors.js";

    export default {
        mixins: [colorMixin],
        data() {
            return {
                hex1: '11323b',
                hex2: '266363',
                hex3: '444543',
                hex4: 'd1b47c',
                hex5: 'dfd8b3',
            }
        },
        watch: {
            'hex1': function() {
                this.hexChange(1);
            },
            'hex2': function() {
                this.hexChange(2);
            },
            'hex3': function() {
                this.hexChange(3);
            },
            'hex4': function() {
                this.hexChange(4);
            },
            'hex5': function() {
                this.hexChange(5);
            },
        }
    }
</script>

<style lang="scss">
    // Make the input feild look like normal text
    p input {
        border: none;
        border-bottom: solid 1px #4c4c4c;
        display: inline;
        font-family: inherit;
        font-size: inherit;
        padding: none;
        width: 50%;
        text-align: center;
        background-color: transparent;
    }
</style>
