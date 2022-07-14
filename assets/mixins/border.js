export const borderMixin = {
    data() {
        return {
            // Start without the border
            showBorder: false
        }
    },
    methods: {
        toggleBorder() {
            // Return the toggled showBorder
            return this.showBorder = !this.showBorder
        }
    }
}
