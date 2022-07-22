<template>
    <div>
        <div class="color-card-container">
            <section class="colorCard down" id="card1">
                <div class="color background_color1 card-background"></div>
                <div class="color-card-content">
                <p class="hex">{{ hexStart }}<input id="hex_card1" type="text" v-model="hex1" /></p>
                <div class="button-bottom button-bottom-ani background_color1" @click="toClipboard(1)">
                    <div class="button-top button-top-ani copy">{{ c }}</div>
                </div>
                <div id="lock-btn-bottom1" class="unlocked-bottom button-bottom lock-bottom" @click="lock(1)">
                    <div id="lock-btn-top1" class="unlocked-top button-top lock">{{ l }}</div>
                </div>
                </div>
            </section>
            <section class="colorCard down" id="card2">
                <div class="color background_color2 card-background"></div>
                <div class="color-card-content">
                <p class="hex">{{ hexStart }}<input id="hex_card2" type="text" v-model="hex2" /></p>
                <div class="button-bottom button-bottom-ani background_color2" @click="toClipboard(2)">
                    <div class="button-top button-top-ani copy">{{ c }}</div>
                </div>
                <div id="lock-btn-bottom2" class="unlocked-bottom button-bottom lock-bottom" @click="lock(2)">
                    <div id="lock-btn-top2" class="unlocked-top button-top lock">{{ l }}</div>
                </div>
                </div>
            </section>
            <section class="colorCard down" id="card3">
                <div class="color background_color3 card-background"></div>
                <div class="color-card-content">
                <p class="hex">{{ hexStart }}<input id="hex_card3" type="text" v-model="hex3" /></p>
                <div class="button-bottom button-bottom-ani background_color3" @click="toClipboard(3)">
                    <div class="button-top button-top-ani copy">{{ c }}</div>
                </div>
                <div id="lock-btn-bottom3" class="unlocked-bottom button-bottom lock-bottom" @click="lock(3)">
                    <div id="lock-btn-top3" class="unlocked-top button-top lock">{{ l }}</div>
                </div>
                </div>
            </section>
            <section class="colorCard down" id="card4">
                <div class="color background_color4 card-background"></div>
                <div class="color-card-content">
                <p class="hex">{{ hexStart }}<input id="hex_card4" type="text" v-model="hex4" /></p>
                <div class="button-bottom button-bottom-ani background_color4" @click="toClipboard(4)">
                    <div class="button-top button-top-ani copy">{{ c }}</div>
                </div>
                <div id="lock-btn-bottom4" class="unlocked-bottom button-bottom lock-bottom" @click="lock(4)">
                    <div id="lock-btn-top4" class="unlocked-top button-top lock">{{ l }}</div>
                </div>
                </div>
            </section>
            <section class="colorCard down" id="card5">
                <div class="color background_color5 card-background"></div>
                <div class="color-card-content">
                <p class="hex">{{ hexStart }}<input id="hex_card5" type="text" v-model="hex5" /></p>
                <div class="button-bottom button-bottom-ani background_color5" @click="toClipboard(5)">
                    <div class="button-top button-top-ani copy">{{ c }}</div>
                </div>
                <div id="lock-btn-bottom5" class="unlocked-bottom button-bottom lock-bottom" @click="lock(5)">
                    <div id="lock-btn-top5" class="unlocked-top button-top lock">{{ l }}</div>
                </div>
                </div>
            </section>
        </div>
        <div id="gen-container" class="color-button-container">
            <p id="arrow-gen" class="arrow">&lt</p>
            <div class="gen-btn" @click="getColors()">Generate</div>
        </div>
        <div id="copy_toast">
            Hex value copied to clipboard
        </div>
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
                hexStart: '#',
                c: 'copy',
                l: 'lock',
            }
        }, mounted() {
            var currentCard = '';
            var gen = document.getElementById('gen-container');
            var arrow = document.getElementById('arrow-gen');
            var backgrounds = document.querySelectorAll('.color');

            // When the user clicks on the screen, close card if one is open
            window.addEventListener('click', function(e){
                if (currentCard != '' && !document.getElementById(currentCard).contains(e.target)){
                    (currentCard != 'gen-container') ? document.getElementById(currentCard).classList.remove('show-card') : gen.classList.remove('show-color-button-container'), arrow.classList.remove('arrow-flip');
                    currentCard = '';
                }
            });

            // Open the geration button if clicked
            gen.addEventListener('click', function() {
                if (currentCard != 'gen-container') {
                    if (currentCard != '') document.getElementById(currentCard).classList.remove('show-card');
    
                    currentCard = 'gen-container';
                    gen.classList.add('show-color-button-container');
                    arrow.classList.add('arrow-flip');
                }
            })

            // When someone clicks the arrow when the generate button is out, close it
            arrow.addEventListener('click', function() {
                if (currentCard == 'gen-container') {
                    // Have to time this out breifly to get it it the right order of execution to work
                    setTimeout(() => {
                        gen.classList.remove('show-color-button-container'); 
                        arrow.classList.remove('arrow-flip');
                        currentCard = '';
                    }, "1")
                }
            })

            // When someone clicks on the color card, open or close it
            for (const background of backgrounds) {
                background.addEventListener('click', function handleClick(event) {

                    // Get the card id
                    var parent = event.target.parentNode.id;

                    // If there is a card open (or the generate button), close it
                    if (currentCard != '') {
                        (currentCard != 'gen-container') ? document.getElementById(currentCard).classList.remove('show-card') : gen.classList.remove('show-color-button-container'), arrow.classList.remove('arrow-flip');
                    }

                    // If the currentCard is the parent, set it to nothing, else open the parent card
                    if (currentCard == parent) {
                        currentCard = '';
                    } else {
                        currentCard = parent;
                        document.getElementById(currentCard).classList.add('show-card');
                    }
                });
            };
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
