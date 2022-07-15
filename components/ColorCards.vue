<template>
    <div class="color-card-container">
        <section class="colorCard down" id="card1">
            <div class="color background_color1"></div>
            <div class="color-card-content">
            <p class="hex">#11323b</p>
            <div class="button-bottom background_color1">
                <div class="button-top copy">Copy</div>
            </div>
            <div class="button-bottom background_color1">
                <div class="button-top lock">Lock</div>
            </div>
            </div>
        </section>
        <section class="colorCard down" id="card2">
            <div class="color background_color2"></div>
            <div class="color-card-content">
            <p class="hex">#266363</p>
            <div class="button-bottom background_color2">
                <div class="button-top copy">Copy</div>
            </div>
            <div class="button-bottom background_color2">
                <div class="button-top lock">Lock</div>
            </div>
            </div>
        </section>
        <section class="colorCard down" id="card3">
            <div class="color background_color3"></div>
            <div class="color-card-content">
            <p class="hex">#444543</p>
            <div class="button-bottom background_color3">
                <div class="button-top copy">Copy</div>
            </div>
            <div class="button-bottom background_color3">
                <div class="button-top lock">Lock</div>
            </div>
            </div>
        </section>
        <section class="colorCard down" id="card4">
            <div class="color background_color4"></div>
            <div class="color-card-content">
            <p class="hex">#d1b47c</p>
            <div class="button-bottom background_color4">
                <div class="button-top copy">Copy</div>
            </div>
            <div class="button-bottom background_color4">
                <div class="button-top lock">Lock</div>
            </div>
            </div>
        </section>
        <section class="colorCard down" id="card5">
            <div class="color background_color5"></div>
            <div class="color-card-content">
            <p class="hex">#dfd8b3</p>
            <div class="button-bottom background_color5">
                <div class="button-top copy">Copy</div>
            </div>
            <div class="button-bottom background_color5">
                <div class="button-top lock">Lock</div>
            </div>
            </div>
        </section>
    </div>
</template>

<script>
    import axios from "axios"

    export default {};
    var url = "http://colormind.io/api/";
    var data = {
        model : "default",
        input : [[44,43,44],[90,83,82],"N","N","N"]
    }

    axios({
        method: 'post',
        url: url,
        data: JSON.stringify(data)
    })
    .then((response) => {
        console.log(response.data);
    }, (error) => {
        console.log(error);
    });
</script>

<style lang="scss">
</style>
