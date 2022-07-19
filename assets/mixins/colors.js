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
    console.log(color);
    pos++;
    var backgrounds = document.getElementsByClassName("background_color"+pos);
    var text = document.getElementsByClassName("text_color"+pos);
    var borders = document.getElementsByClassName("border_color"+pos);

    // Set the background color
    for (var i in backgrounds) {
        console.log(backgrounds[i]);
        if (backgrounds.hasOwnProperty(i)) {
            backgrounds[i].style.backgroundColor = color;
        }
    }

    // Set the text color
    for (var i in text) {
        console.log(text[i]);
        if (text.hasOwnProperty(i)) {
            text[i].style.color = color;
        }
    }

    // Set the border color
    for (var i in borders) {
        console.log(borders[i]);
        if (borders.hasOwnProperty(i)) {
            borders[i].style.borderColor = color;
        }
    }
}

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
