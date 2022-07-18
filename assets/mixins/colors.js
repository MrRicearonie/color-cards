import axios from "axios";

var url = "http://colormind.io/api/";
var data = {
    model: "default",
    input: ["N","N","N","N","N"]
};
var results = [];

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function setColor(color, pos) {
    console.log(color);
    pos++;
    var backgrounds = document.getElementsByClassName("background_color"+pos);
    var text = document.getElementsByClassName("text_color"+pos);
    var borders = document.getElementsByClassName("border_color"+pos);
    for (var i in backgrounds) {
        console.log(backgrounds[i]);
        if (backgrounds.hasOwnProperty(i)) {
            backgrounds[i].style.backgroundColor = color;
        }
    }
    for (var i in text) {
        console.log(text[i]);
        if (text.hasOwnProperty(i)) {
            text[i].style.color = color;
        }
    }
    for (var i in borders) {
        console.log(borders[i]);
        if (borders.hasOwnProperty(i)) {
            borders[i].style.borderColor = color;
        }
    }
}

export const colorMixin = {
    methods: {
        getColors() {
            axios({
                method: 'post',
                url: url,
                data: JSON.stringify(data)
            })
            .then((response) => {
                results = response.data.result;
                console.log(results);
                for (var i in results) {
                    setColor(rgbToHex(results[i][0], results[i][1], results[i][2]), i);
                }
            }, (error) => {
                console.log(error);
            });
        },
        refresh() {
            console.log('test');
            for (var i in results) {
                setColor(rgbToHex(results[i][0], results[i][1], results[i][2]), i);
            }
            console.log('testend')
        }
    }
}
