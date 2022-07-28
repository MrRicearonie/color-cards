// Christopher Rempe, 2022
// The js methods for the shopping page
export const shopMixin = {
    methods: {
        // If someone clicks on buy, tell them this is just for color inspiration
        buyClicked() {
            alert('Love the enthusiasm about buying some rocks, but this is just for color inspiration. So sorry, no rocks for sale.');
        },
        // If someone clicks on the about button
        aboutClicked() {
            alert('So these are just a pile of rocks, but on your site this button can take you to a page where there is more information about whatever you are selling! And on that note, I am not selling any rocks, sorry.')
        }
    }
}
