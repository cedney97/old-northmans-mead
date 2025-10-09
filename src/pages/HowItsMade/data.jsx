import honey from 'assets/made/ONMHoney.jpg'
import operation from 'assets/made/OurOperation.jpg'
import must from 'assets/made/TheMUST.JPG'
import yeast from 'assets/made/Yeast.jpg'
import fermenting1 from 'assets/made/Fermenting_2.mp4'
import fermenting2 from 'assets/made/Fermenting_3.mp4'
import poster1 from 'assets/made/poster_2.png'
import poster2 from 'assets/made/poster_3.png'
import bees from 'assets/made/HoneyBee.jpg'
import apiary from 'assets/made/ApiaryPics_2.jpg'

export const assets = [{
    type: "image",
    src: honey,
    caption: "The Raw, Wild Flower Honey ONM uses!"
}, {
    type: "image",
    src: operation,
    caption: "Modest Origins... and Simple Processes"
}, {
    type: "image",
    src: yeast,
    caption: "Active, Natural Yeast used..."
}, {
    type: "video",
    src: fermenting1,
    poster: poster1,
}, {
    type: "video",
    src: fermenting2,
    poster: poster2,
}, {
    type: "image",
    src: must,
    caption: "Combining and Mixing Natural Ingredients to make a Mead that is Free of Additives, Preservatives, and Toxic Chemicals!"
}]

export const steps = [
    {
        text: "Our honey is a raw, lightly filtered WildFlower Honey straight from apiaries across South Louisiana. Like all raw honeys, ours may vary in color and taste based on the bee's source of nectar, but one thing is constant: We never used Processed or Pasturized Honey!",
        assets: [
            {
                src: bees,
                caption: "Honey made by Nature's Pollinator!",
                type: "image"
            }, {
                src: apiary,
                caption: "Harvested responsibly and with great care",
                type: "image"
            }, {
                src: honey,
                caption: "Providing the beautifully rich and raw honey ONM uses in every batch of our meads!",
                type: "image"
            }
        ]
    }, {
        text: "Our process is simple - like the way our ancestors made their meads - with simple ingredients",
        assets: [
            {
                src: operation,
                caption: "Modest origins... and simple processes",
                type: "image"
            }, {
                src: yeast,
                caption: "Natural, living yeast to activate the fermentation process",
                type: "image"
            }
        ]
    }, {
        title: "A Healthy Fermentation",
        text: "Every profile of Old Northmen's Mead starts with just the right amount of dried <span style={{color: 'white'}}>Meadowsweet Herb</span> for 5 full days during the initial phase of fermentation. The Meadowsweet imparts its ageless essence upon the young Mead while also providing additional, natural yeasts to help feed <span style={{color: 'white'}}>Healthy Fermentation Process!</span>",
        assets: [
            {
                src: yeast,
                caption: "Combining and mixing natural ingredients to make a mead that is free of additives, preservatives, and toxic chemicals!",
                type: "image"
            }, {
                src: fermenting1,
                caption: "Actively stirring the \"Must\" helps aerate and blend the meadowsweet throughout this initial phase.",
                type: "video",
                poster: poster1,
            }, {
                src: fermenting2,
                caption: "Here's what a healthy fermentation looks like! OOOOH YEAH!",
                type: "video",
                poster: poster2,
            }
        ]
    }
]