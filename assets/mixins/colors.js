import axios from "axios";

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
var results = [];

// Use the color provided to set the colors on the correct DOM elements
function setColor(color, pos) {
    pos++;
    var backgrounds = document.getElementsByClassName("background_color"+pos);
    var text = document.getElementsByClassName("text_color"+pos);
    var borders = document.getElementsByClassName("border_color"+pos);

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

// navHome.onmouseenter = function() {
//     navHome.style.color = navTextColorHover;
// };
// navHome.onmouseleave = function () {
//     navHome.style.color = navTextColor;
// };

export const colorMixin = {
    methods: {
        // Get colors from Huemint and the set the colors on the site
        getColors() {
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
        }
    }
}
