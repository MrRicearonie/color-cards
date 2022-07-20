import axios from "axios";

// Variables to hold the hex on each card
var hexes = ['11323b', '266363', '444543', 'd1b47c', 'dfd8b3'];

// The current pallete and which ones we like
var results = ["#11323b", "#266363", "#444543", "#d1b47c", "#dfd8b3"];
var locked = [false, false, false, false, false];

// Stuff to call the api with
var url = "https://api.huemint.com/color";
var data = {
    "mode":"transformer", // transformer, diffusion or random
    "num_colors":5, // max 12, min 2
    "temperature":"1.2", // max 2.4, min 0
    "num_results":1, // max 50 for transformer, 5 for diffusion
    "adjacency":["0", "65", "45", "35", "15", "65", "0", "35", "65", "35", "45", "35", "0", "35", "45", "35", "65", "35", "0", "15", "15", "35", "45", "15", "0"], // nxn adjacency matrix as a flat array of strings
    "palette":["-", "-", "-", "-", "-"], // locked colors as hex codes, or '-' if blank
};
var customConfig = {
    headers: {
        'Content-Type': 'application/json'
    }
};

// Use the color provided to set the colors on the correct DOM elements
function setColor(color, pos) {
    pos++;
    var backgrounds = document.getElementsByClassName("background_color"+pos);
    var text = document.getElementsByClassName("text_color"+pos);
    var borders = document.getElementsByClassName("border_color"+pos);
    var cardText = document.getElementById("hex_card"+pos);
    console.log("hex_card"+pos);

    // Set the background color
    for (var i in backgrounds) {
        if (backgrounds.hasOwnProperty(i)) {
            backgrounds[i].style.backgroundColor = color;
        }
    }

    // Set the text color
    for (var i in text) {
        if (text.hasOwnProperty(i)) {
            text[i].style.color = color;
        }
    }

    // Set the border color
    for (var i in borders) {
        if (borders.hasOwnProperty(i)) {
            borders[i].style.borderColor = color;
        }
    }

    // Change text in card to new hex value
    cardText.value = color.substring(1, color.lenght);
    hexes[pos-1] = color.substring(1, color.lenght);

    textColor(color, pos);
}

// Make sure the text is readable on the page
function textColor(color, pos) {
    var primaryText = document.getElementsByClassName("primary_text_color"+pos);

    // Get the hex code without the #
    color = color.slice(1);

    // Get the rgb value from the hex color provided
    var r = parseInt(color.slice(0, 2), 16);
    var g = parseInt(color.slice(2, 4), 16);
    var b = parseInt(color.slice(4, 6), 16);

    // Set text color based on contrast
    var text = (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? '#4c4c4c' : '#F5F5F5';

    for (var i in primaryText) {
        if (primaryText.hasOwnProperty(i)) {
            primaryText[i].style.color = text;
        }
    }
    
    // Navbar is set to background_color1, so text in it only needs to change then
    if (pos == 1) {
        var navbar = document.getElementById('navbar');
        if (text == "#F5F5F5") {
            navbar.classList.add('navbar-dark');
            navbar.classList.remove('navbar-light');
        } else {
            navbar.classList.add('navbar-light');
            navbar.classList.remove('navbar-dark');
        }
    }
}

// ------------- Stuff to do when the user changes the hex value --------------
function changeHex(cardNum) {
    // This var is set up to check each letter in the inputted hex to see if its valid
    var hexTest = /^([0-9A-F]{1}){1,6}$/i;
    var card = document.getElementById("hex_card"+cardNum);
    var hex = card.value;
    cardNum--;

    // If inputted text uses valid hex chars and is 0-6 in length, continue
    if (hexTest.test(hex) && hex.length < 7) {
        hexes[cardNum] = hex;

        // If text length is 6, update the color and lock
        if (hex.length == 6) {
            results[cardNum] = "#"+hex;
            setColor("#"+hex, cardNum);
            if (!locked[cardNum]) {
                lockCard(cardNum+1);
            }
            card.blur();
        }
    //If inputted text uses invalid chars or is 7, then set the innerText back
    } else {
        card.blur();
        card.value = hexes[cardNum-1];
        console.log(hexes);
        // clearSelection();
    }

    console.log(card.value);
}

// Lock the card provided
function lockCard(card) {
    console.log("Card inputted: "+card);
    var btnTop = document.getElementById("lock-btn-top"+card);
    var btnBottom = document.getElementById("lock-btn-bottom"+card);
    card--;
    (locked[card]) ? locked[card] = false : locked[card] = true;
    if (locked[card]) {
        btnTop.classList.add('locked-top');
        btnTop.classList.remove('unlocked-top');
        btnBottom.classList.add('locked-bottom');
        btnBottom.classList.remove('unlocked-bottom');
    } else {
        btnTop.classList.add('unlocked-top');
        btnTop.classList.remove('locked-top');
        btnBottom.classList.add('unlocked-bottom');
        btnBottom.classList.remove('locked-bottom');
    }
}


// functions that will be availble from outside
export const colorMixin = {
    methods: {
        // Get colors from Huemint and the set the colors on the site
        getColors() {

            // Create the palette to send over
            for (let i = 0; i < 5; i++) {
                if (locked[i]) {
                    data.palette[i] = results[i];
                } else {
                    data.palette[i] = "-";
                }
            }

            console.log(results);
            console.log(data.palette);

            axios.post(url, JSON.stringify(data), customConfig).then((response) => {
                results = response.data.results[0].palette;
                console.log(results);
                for (var i in results) {
                    setColor(results[i], i);
                }
            }, (error) => {
                console.log(error);
            });
        },
        // When moving between pages, refresh is needed to set the colors up again
        refresh() {
            for (var i in results) {
                setColor(results[i], i);
            }
        },
        // Lock or unlock the selected color in the palette
        lock(pos) {
            lockCard(pos);
        },
        // When someone edits the hex, run some checks and set it if right
        hexChange(card) {
            changeHex(card);
        }
    }
}
