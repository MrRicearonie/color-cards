<!-- Christopher Rempe, 2022 -->
<!-- The navbar for the site -->
<template class="background_color1">
    <!-- Set up the navbar with the primary color -->
    <b-navbar toggleable="sm" type="dark" id="navbar" class="navbar background_color1">
        <!-- To keep the buttons in a good position, wrap them in a container -->
        <b-container>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <!-- Add the router links -->
                <b-navbar-nav>
                    <nuxt-link to="/" class="nav-link">Home</nuxt-link>
                    <nuxt-link to="/personal" class="nav-link">Personal</nuxt-link>
                    <nuxt-link to="/shop" class="nav-link">Shop</nuxt-link>
                    <nuxt-link to="/blog" class="nav-link">Blog</nuxt-link>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script>
    export default {}
</script>

<style lang="scss">
</style>
