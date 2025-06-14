import old_mjodurt_rune from "assets/runes/old-mjodurt.png"
import oak_n_orange_rune from "assets/runes/oak-n-orange.png"
import apple_spiced_rune from "assets/runes/apple-spiced.png"
import herbal_rune from "assets/runes/herbal.png"
import holiday_spiced_rune from "assets/runes/holiday-spiced.png"

import old_mjodurt_mockup from "assets/mockups/onm-oldmjodurt-mockup.png"
import oak_n_orange_mockup from "assets/mockups/onm-oaknorange-mockup.png"
import apple_spiced_mockup from "assets/mockups/onm-applespiced-mockup.png"
import herbal_mockup from "assets/mockups/onm-herbal-mockup.png"
import holiday_spiced_mockup from "assets/mockups/onm-holiday-mockup.png"

import old_mjodurt_crest from "assets/crests/old-mjodurt-crest.png"
import oak_n_orange_crest from "assets/crests/oak-n-orange-crest.png"
import apple_spiced_crest from "assets/crests/apple-spiced-crest.png"
import herbal_crest from "assets/crests/herbal-crest.png"
import holiday_spiced_crest from "assets/crests/holiday-spiced-crest.png"

import old_mjodurt_verb from "assets/verbs/herbal-verb.png"
import oak_n_orange_verb from "assets/verbs/herbal-verb.png"
import apple_spiced_verb from "assets/verbs/herbal-verb.png"
import herbal_verb from "assets/verbs/herbal-verb.png"
import holiday_spiced_verb from "assets/verbs/herbal-verb.png"

export const profiles = [
    {
        name: "Old Mjodurt",
        color: "#43402E",
        brightColor: "#5A563E",
        rune: old_mjodurt_rune,
        mockup: old_mjodurt_mockup,
        crest: old_mjodurt_crest,
        description: "Infused with Lemon Balm, our standard mead imparts the Inspiring energy of the rune, Ansuz, to enhance connections, wisdom, and understanding with our Higher Power.",
        rune_name: "Ansuz",
        rune_description: "The Breadth Of Odin",
        verb_image: old_mjodurt_verb,
        verb: "Inspiring"
    }, {
        name: "Oak-N-Orange",
        color: "#614D38",
        brightColor: "#82674B",
        rune: oak_n_orange_rune,
        mockup: oak_n_orange_mockup,
        crest: oak_n_orange_crest,
        description: "With classic hints of orange, whole peppercorns, cherries, & finished with English Oak, the Oak-n-Orange Mead harnesses the Invigorating energy of the rune Uruz to help restore your energy, strengthen resolve, and provide the courage to accelerate new growth.",
        rune_name: "Uruz",
        rune_description: "Strength",
        verb_image: oak_n_orange_verb,
        verb: "Invigorating"
    }, {
        name: "Apple-Spiced",
        color: "#55352E",
        brightColor: "#71473E",
        rune: apple_spiced_rune,
        mockup: apple_spiced_mockup,
        crest: apple_spiced_crest,
        description: "Including cored Apples along with cinnamon, nutmeg, all-spice, and clove, our Apple-Spiced Mead Warms and Illuminates the way with the rune Kenaz's energy like that of torch dispelling darkness and serving as a beacon of wisdom in a world filled with uncertainty.",
        rune_name: "Kenaz",
        rune_description: "The Torch",
        verb_image: apple_spiced_verb,
        verb: "Illuminating"
    }, {
        name: "Herbal",
        color: "#2A4739",
        brightColor: "#385F4C",
        rune: herbal_rune,
        mockup: herbal_mockup,
        crest: herbal_crest,
        description: "Complimented by fresh lemon and infused with rosemary, ginger, red clover, & other traditional herbs, our Herbal Mead captures the Healing energy of the rune Berkana and promotes rejuvenation, new growth, & fertility—in mind and body!",
        rune_name: "Berkana",
        rune_description: "Renewal",
        verb_image: herbal_verb,
        verb: "Renewing"
    }, {
        name: "Holiday Spiced",
        color: "#161616",
        brightColor: "#565656",
        rune: holiday_spiced_rune,
        mockup: holiday_spiced_mockup,
        crest: holiday_spiced_crest,
        description: "Infused with a warming combination of cranberries, juniper berries, spruce tips, and clove, our Holiday-Spiced Mead calls on the Transformational energy of the rune Isa to remind us that Winter is also a time for introspection and an opportunity to pause.",
        rune_name: "Isa",
        rune_description: "Ice/Stillness",
        verb_image: holiday_spiced_verb,
        verb: "Transforming"
    }
]