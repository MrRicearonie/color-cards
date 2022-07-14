<!-- Used to be called GridContent -->
<template>
    <b-container>
        <!-- Add the page title to the top -->
        <div class="text-center my-5">
            <h1 class="display-4 text-secondary">{{ pageTitle }}</h1>
        </div>

        <!-- Create the grid using b-row -->
        <b-row>
            <!-- Loop through the grid values, and create box sizes based on what is provided -->
            <b-col v-for="grid in gridValues" :key="grid.id" :cols="grid.xs" :sm="grid.sm" :md="grid.md" :lg="grid.lg" :xl="grid.xl" :class="grid.color">
                <p>{{ xsTitle }}{{ grid.xs }}{{ columns }}</p>
                <p>{{ smTitle }}{{ grid.sm }}{{ columns }}</p>
                <p>{{ mdTitle }}{{ grid.md }}{{ columns }}</p>
                <p>{{ lgTitle }}{{ grid.lg }}{{ columns }}</p>
                <p>{{ xlTitle }}{{ grid.xl }}{{ columns }}</p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
  export default {
    data() {
      return {
        pageTitle: "The Grid",
        xsTitle: 'On XS displays, take up to ',
        smTitle: 'On small displays, take up to ',
        mdTitle: 'On medium displays, take up to ',
        lgTitle: 'On large displays, take up to ',
        xlTitle: 'On XL displays, take up to ',
        columns: ' columns.',
        gridValues: [
            {
                id: 1,
                xs: 12,
                sm: 12,
                md: 8,
                lg: 6,
                xl: 4,
                color: 'bg-primary'
            },
            {
                id: 2,
                xs: 12,
                sm: 8,
                md: 4,
                lg: 6,
                xl: 4,
                color: 'bg-secondary'
            },
            {
                id: 3,
                xs: 6,
                sm: 4,
                md: 6,
                lg: 6,
                xl: 4,
                color: 'bg-warning'
            },
            {
                id: 4,
                xs: 4,
                sm: 4,
                md: 6,
                lg: 6,
                xl: 6,
                color: 'bg-danger'
            },
            {
                id: 5,
                xs: 2,
                sm: 8,
                md: 2,
                lg: 2,
                xl: 1,
                color: 'bg-success'
            },
            {
                id: 6,
                xs: 8,
                sm: 8,
                md: 4,
                lg: 4,
                xl: 5,
                color: 'bg-info'
            },
            {
                id: 7,
                xs: 4,
                sm: 4,
                md: 6,
                lg: 6,
                xl: 12,
                color: 'bg-light'
            },
        ]
      }
    }
  }
</script>
