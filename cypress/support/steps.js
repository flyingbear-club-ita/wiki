import { adsShouldBeDisplayed, titleShouldBeDisplayed } from './assertions'

module.exports = {
    sanityCheckWiki: function () {
        adsShouldBeDisplayed();
        titleShouldBeDisplayed();
    },
}