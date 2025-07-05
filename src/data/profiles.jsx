import old_mjodurt_rune from "assets/runes/old-mjodurt.png"
import oak_n_orange_rune from "assets/runes/oak-n-orange.png"
import apple_spiced_rune from "assets/runes/apple-spiced.png"
import herbal_rune from "assets/runes/herbal.png"
import holiday_spiced_rune from "assets/runes/holiday-spiced.png"

import old_mjodurt_mockup from "assets/mockups/OMjodurt_Bottle_2025.png"
import oak_n_orange_mockup from "assets/mockups/OnO_Bottle_2025.png"
import apple_spiced_mockup from "assets/mockups/APLSPC_Bottle_2025.png"
import herbal_mockup from "assets/mockups/Herbal_Bottle_2025.png"
import holiday_spiced_mockup from "assets/mockups/Holiday_Bottle_2025.png"

import old_mjodurt_crest from "assets/crests/old-mjodurt-crest.png"
import oak_n_orange_crest from "assets/crests/oak-n-orange-crest.png"
import apple_spiced_crest from "assets/crests/apple-spiced-crest.png"
import herbal_crest from "assets/crests/herbal-crest.png"
import holiday_spiced_crest from "assets/crests/holiday-spiced-crest.png"

import old_mjodurt_verb from "assets/verbs/old-mjodurt.jpg"
import oak_n_orange_verb from "assets/verbs/oak-n-orange.jpg"
import apple_spiced_verb from "assets/verbs/apple-spiced.jpg"
import herbal_verb from "assets/verbs/herbal.jpg"
import holiday_spiced_verb from "assets/verbs/holiday-spiced.jpg"

import old_mjodurt_herb from "assets/herbs/old-mjodurt-1.webp"
import oak_n_orange_herb_1 from "assets/herbs/oak-n-orange-1.jpg"
import oak_n_orange_herb_2 from "assets/herbs/oak-n-orange-2.jpg"
import apple_spiced_herb_1 from "assets/herbs/apple-spiced-1.jpg"
import apple_spiced_herb_2 from "assets/herbs/apple-spiced-2.jpg"
import herbal_herb_1 from "assets/herbs/herbal-1.jpg"
import herbal_herb_2 from "assets/herbs/herbal-2.webp"
import holiday_spiced_herb_1 from "assets/herbs/holiday-spiced-1.jpg"
import holiday_spiced_herb_2 from "assets/herbs/holiday-spiced-2.jpg"
import holiday_spiced_herb_3 from "assets/herbs/holiday-spiced-3.jpg"

export const profiles = [
    {
        name: "Old Mjodurt",
        color: "#43402E",
        brightColor: "#5A563E",
        rune: old_mjodurt_rune,
        mockup: old_mjodurt_mockup,
        crest: old_mjodurt_crest,
        subtitle: "The ONM Standard (Pronounced Mee-Yurd Ert)",
        description: "Infused with Lemon Balm, our standard mead imparts the Inspiring energy of the rune, Ansuz, to enhance connections, wisdom, and understanding with our Higher Power.",
        rune_name: "Ansuz",
        rune_description: '"The Breath Of Odin"',
        verb_image: old_mjodurt_verb,
        verb: "Inspiring",
        spiel: <>
            <p>Our standard mead imparts the inspiring energy of the rune, Ansuz, to enhance connections, wisdom and understanding with our Higher Power.</p>
            <p>Old Northmen's Standard Mead is inbued with one simple herb - LEMON BALM - who's known properties have included:</p>
            <div>
                <ul>
                    <li>Anti-Viral</li>
                    <li>Mood Enhancing</li>
                    <li>Bolsters Memory</li>
                    <li>Aids in Sleep</li>
                </ul>
                <ul>
                    <li>Combats Free Radicals</li>
                    <li>Improves Concentration</li>
                    <li>Stress Relieving</li>
                    <li>Supports Neural Health</li>
                </ul>
            </div>
        </>,
        details_images: [old_mjodurt_herb]
    }, {
        name: "Oak-N-Orange",
        color: "#614D38",
        brightColor: "#82674B",
        rune: oak_n_orange_rune,
        mockup: oak_n_orange_mockup,
        crest: oak_n_orange_crest,
        subtitle: "The Boldest of our Meads",
        description: "With classic hints of orange, whole peppercorns, cherries, & finished with English Oak, the Oak-n-Orange Mead harnesses the Invigorating energy of the rune Uruz to help restore your energy, strengthen resolve, and provide the courage to accelerate new growth.",
        rune_name: "Uruz",
        rune_description: '"Strength"',
        verb_image: oak_n_orange_verb,
        verb: "Invigorating",
        spiel: <>
            <p>Our Oak-N-Orange Mead harnesses the <span className="red">Invigorating</span> power of URUZ to help restore your energy, strengthen resolve, and provide the courage to accelerate new growth!</p>
            <p>This powerful brew will impart classic hints of orange, black pepper, and cherry all finished off with English Oak!</p>
        </>,
        details_images: [oak_n_orange_herb_1, oak_n_orange_herb_2]
    }, {
        name: "Apple-Spiced",
        color: "#55352E",
        brightColor: "#71473E",
        rune: apple_spiced_rune,
        mockup: apple_spiced_mockup,
        crest: apple_spiced_crest,
        subtitle: "Warm and Inviting",
        description: "Including cored Apples along with cinnamon, nutmeg, all-spice, and clove, our Apple-Spiced Mead Warms and Illuminates the way with the rune Kenaz's energy like that of torch dispelling darkness and serving as a beacon of wisdom in a world filled with uncertainty.",
        rune_name: "Kenaz",
        rune_description: '"The Torch"',
        verb_image: apple_spiced_verb,
        verb: "Illuminating",
        spiel: <>
            <p>Our Applie-Spiced Mead <span className="red"><em>Warms</em></span> and <span className="red"><em>Illuminates</em></span> the way with KENAZ's energy like that of a torch dispelling darkness and serving as a beacon of wisdom in a world filled with uncertainty.</p>
            <p>Complimenting our fresh apples is whole cinammon, coarsely ground nutmeg, and other warming spices!</p>
        </>,
        details_images: [apple_spiced_herb_1, apple_spiced_herb_2]
    }, {
        name: "Herbal",
        color: "#2A4739",
        brightColor: "#385F4C",
        rune: herbal_rune,
        mockup: herbal_mockup,
        crest: herbal_crest,
        subtitle: "Healing Mind & Body",
        description: "Complimented by fresh lemon and infused with rosemary, ginger, red clover, & other traditional herbs, our Herbal Mead captures the Healing energy of the rune Berkana and promotes rejuvenation, new growth, & fertility—in mind and body!",
        rune_name: "Berkana",
        rune_description: '"Renewal"',
        verb_image: herbal_verb,
        verb: "Rejuvinating",
        spiel: <>
            <p>Our Herbal Mead captures the <span className="red">Rejuvinating</span> energy of BERKANA and promotes Healing, New Growth, & Fertility - in Mind and Body!</p>
            <p>The herbs we use are always fresh, dried, and never frozen. To impart their natural properties upon our brew, we've infused fresh lemon with Rosemary, Ginger, Red Clover, and two additional herbs found in ancient brews:</p>
            <p>YARROW - Yarrow (Achillea Millefolium) has been used for thousands of years for its potential health benefits. Benefits include helping alleviate inflamation, wound healing, and digestive health. Its genus name, Achillea, refers to the warrior Achilles in Greek Mythology, as he used yarrow to treat his soldiers' wounds</p>
            <p>SWEET GALE (or BOG MYRTLE) - Bog Myrtle has a long history of use in traditional medicine and cuisine. The leaves and berries of the plant contain a number of bioactive compounds, including tannins, flavonoids, and essential oils, that are believed to have a range of health benefits. Bog Myrtle has been used to treat digestive issues, respiratory infections, and skin conditions.</p>
        </>,
        details_images: [herbal_herb_1, herbal_herb_2]
    }, {
        name: "Holiday Spiced",
        color: "#161616",
        brightColor: "#565656",
        rune: holiday_spiced_rune,
        mockup: holiday_spiced_mockup,
        crest: holiday_spiced_crest,
        subtitle: "A Brew for all Celebrations",
        description: "Infused with a warming combination of cranberries, juniper berries, spruce tips, and clove, our Holiday-Spiced Mead calls on the Transformational energy of the rune Isa to remind us that Winter is also a time for introspection and an opportunity to pause.",
        rune_name: "Isa",
        rune_description: 'Ice/"Stillness"',
        verb_image: holiday_spiced_verb,
        verb: "Transforming",
        spiel: <>
            <p>In Norse tradition, the winter solstice was celebrated during the "Yule" with a festival marking the shortest day and the longest night. Yule was a time of celebration and spiritual reflection... and the forthcoming renewal of life the New Year would bring.</p>
            <p>Our Holiday-Spiced Mead calls on the <span className="red">Transformational</span> energy of ISA to remind us that Winter is a time for introspection and a time for pause. Spring is before us - with it comes Re-Birth and new life!</p>
            <p>This special edition brew is infused with Cranberries, Spruce Tips, Juniper Berries, and Clove to warm the soul.</p>
        </>,
        details_images: [holiday_spiced_herb_1, holiday_spiced_herb_2, holiday_spiced_herb_3]
    }
]