<!-- Christopher Rempe, 2022 -->
<!-- The footer. Have footer text above color cards -->
<template>
    <footer class="background_color1">
        <p class="text_color2">{{ footerText }} <font-awesome-icon :icon="['fas', 'heart']" class="text_color4"/> {{ by }} <a href="https://crrempe.com" class="text_color3">{{ chris }}</a> {{ using }} <a href="https://huemint.com" class="text_color3">{{ huemint }}</a></p>
    </footer>
</template>

<script>
    export default {
        data: () => {
            return {
                footerText: 'Made with',
                by: 'by',
                chris: 'Christopher Rempe',
                using: 'using',
                huemint: 'Huemint',
            }
        }
    }
</script>

<style lang="scss">
    footer {
        display: flex;
        justify-content: center;
    }

    footer p {
        margin-top: 1rem;
        margin-bottom: 6rem;
    }
</style>
