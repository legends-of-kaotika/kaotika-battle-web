export const attackerData = {
    _id: "66dec0786301a115d494bdb6",
    socketId: "hhwfgeihgiweiu",
    attributes: {
        intelligence: 17,
        dexterity: 37,
        insanity: 30,
        charisma: 17,
        constitution: 22,
        strength: 67,
        hit_points: 120,
        attack: 45,
        defense: 54,
        magic_resistance: 34,
        CFP: 12,
        BCFA: 21,
        resistance: 85,
    },
    isBetrayer: false,
    base_attributes: {
        intelligence: 17,
        dexterity: 37,
        insanity: 30,
        charisma: 17,
        constitution: 22,
        strength: 67,
        hit_points: 120,
        attack: 45,
        defense: 54,
        magic_resistance: 34,
        CFP: 12,
        BCFA: 21,
        resistance: 85,
    },
    equipment: {
        weapon: 'knife',
        antidote_potion: {
            modifiers: {
                hit_points: 0,
                intelligence: 0,
                dexterity: 0,
                constitution: 12,
                insanity: 0,
                charisma: 8,
                strength: 0
            },
            _id: "668bca125319ea9afdff075e",
            name: "Antidote of Frostbane Fever",
            description: "A potent concoction brewed from the rare Lumina flowers that only bloom under the full moon. The elixir emits a radiant glow and, when consumed, floods the body with purifying light, banishing the shadows and restoring the natural hue of the skin.",
            type: "antidote",
            image: "/images/equipment/potions/antidote/antidote_1.png",
            value: 10,
            recovery_effect: {
                modifiers: {
                    hit_points: 0,
                    intelligence: 0,
                    dexterity: 0,
                    insanity: 0,
                    charisma: -8,
                    constitution: -12,
                    strength: 0
                },
                _id: "6693fd5846527d0df5f0efe8",
                name: "Frostbane Fever",
                description: "A chilling illness that lowers the body temperature drastically, causing frost to form on the skin and organs to freeze.",
                type: "illness",
                antidote_effects: [
                    "restore_constitution",
                    "lesser_restore_charisma"
                ],
                poison_effects: [
                    "damage_constitution",
                    "lesser_damage_charisma"
                ]
            },
            min_lvl: 1
        },
        healing_potion: {
            modifiers: {
                hit_points: 20,
                intelligence: 0,
                dexterity: 0,
                constitution: 0,
                insanity: 0,
                charisma: 0,
                strength: 0
            },
            _id: "668bca125319ea9afdff0750",
            name: "Essence of Vitality",
            description: "A rejuvenating potion that restores vigor and vitality to the drinker.",
            type: "essence",
            image: "/images/equipment/potions/healing/healing_1.png",
            value: 10,
            min_lvl: 1
        },
        enhancer_potion: {
            modifiers: {
                intelligence: 0,
                dexterity: 0,
                constitution: 0,
                insanity: 0,
                charisma: 0,
                strength: 20,
                hit_points: 0,
                attack: 0,
                defense: 0,
                magic_resistance: 0,
                CFP: 0,
                BCFA: 0,
                resistance: 0,
            },
            _id: "668bca125319ea9afdff0767",
            name: "Elixir of Increase Strength",
            description: "This robust elixir temporarily amplifies the drinker's physical power, significantly boosting muscle strength and stamina.\n\n\n",
            type: "elixir",
            image: "/images/equipment/potions/enhancer/enhancer_1.png",
            value: 10,
            duration: 2,
            min_lvl: 1
        }
    },
    inventory: {
        antidote_potions: [],
        healing_potions: [],
        enhancer_potions: []
    },
    status: {
        ethaziumCurse: false,
        common_diseases: [],
        tired: false
    },
    name: "VICTOR JAVIER DURÁN DE FRANÇA",
    nickname: "Vittorio “Il Ratto” Di Napoli",
    email: "victor.duran@ikasle.aeg.eus",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjX8hFPf0kk1iWOz-s7lrsyaBSeOGz8vsFiT8c07uyz9oZteEEwPbxYsq7vsG-vOoOynzwNyoZrZujmFEGa6nBoxZErZlxZzbM4y-j-61owzNTxtc325CITaG09yt9yP86aUyCXQBfwhQLbBhD6KrEZ7C4UA35n2WQ1Wt3Ae4IZN7PoTxoe296Gntu3ih3L96qsMOu3YLH_bcWVK3qiORg4PZBMbn7815BwdiiEXfvNKCf0A1ihbynjSpSoz0ds_zn1YshF5e95UBYAMklwtMqHnBoHpfwqWDGpkwHIm-qUS1DLiTFDQIHl5qOCbiEYEIrfdAQGtrCMqxV8b05WGauBfVHuq-JVD9OHlN0Xhu0tblXZL2YwvSxa74-pBYfuHd7BfxxI9Lju5YMO58M9yFXQe0l0HI54Td7LApBrb0lNtrB2HpIEIHBmZQPns8OmATjlX6v83KCDSSmWJPvlxCHv19uyQswkve8pw-mmtdKkD7pf7L9vMJZsSvsK2Cu91J-777Sm4wOsn6m8EVIP0sAkSbFJKFXZ2vUNNRoof8dvuUcgnBIXqPkWlEm3N2CHR4zhnXuH_zWcYvsFtnAtnq7F6FemEyyEgT44tfGk8D2WnSNxmiwJD9cMEG8Zw2SYzucCAdyWQssQI9OtCoo3Ga88wXw9vkaZZ7MPASbGRQ0FcbkubzzQhQrCRoJXAX-pJ5MqfWLT_oSrartdlOdGP0GXobxWh9GcXGz5SE5xo-Z79qXpAowsGDDyLrtqypAcNpPqmiCtG3QLN8ryv2vcNUO1BBXqsbobziv-mMepytQe1YjJBXz67lvwRf8KGWJgyuIlwKkDS7HY3HLqVv1yfnVqda6AS0HAyQ2JvRBeW97rg4S0Ur3P5eMFsq_Zy1beWUxNPBvO8-qJkpw8miLcEUgyaU7I-rsyMtQh0xP--paKfHdtp8gtoVaG7AQseMRA1iuFdq59Is8oV2kJkBctfzCw_IiPe=s100-c",
    level: 19,
    profile: {
        name: "A"
    },
    role: "acolyte",
}
export const defenderData = {
    _id: "66dec0786301a115d494bdb6",
    socketId: "hhwfgeihgiweiu",
    attributes: {
        intelligence: 17,
        dexterity: 37,
        insanity: 30,
        charisma: 17,
        constitution: 22,
        strength: 67,
        hit_points: 120,
        attack: 45,
        defense: 54,
        magic_resistance: 34,
        CFP: 12,
        BCFA: 21,
        resistance: 85,
    },
    isBetrayer: false,
    base_attributes: {
        intelligence: 17,
        dexterity: 37,
        insanity: 30,
        charisma: 17,
        constitution: 22,
        strength: 67,
        hit_points: 120,
        attack: 45,
        defense: 54,
        magic_resistance: 34,
        CFP: 12,
        BCFA: 21,
        resistance: 85,
    },
    equipment: {
        weapon: 'knife',
        antidote_potion: {
            modifiers: {
                hit_points: 0,
                intelligence: 0,
                dexterity: 0,
                constitution: 12,
                insanity: 0,
                charisma: 8,
                strength: 0
            },
            _id: "668bca125319ea9afdff075e",
            name: "Antidote of Frostbane Fever",
            description: "A potent concoction brewed from the rare Lumina flowers that only bloom under the full moon. The elixir emits a radiant glow and, when consumed, floods the body with purifying light, banishing the shadows and restoring the natural hue of the skin.",
            type: "antidote",
            image: "/images/equipment/potions/antidote/antidote_1.png",
            value: 10,
            recovery_effect: {
                modifiers: {
                    hit_points: 0,
                    intelligence: 0,
                    dexterity: 0,
                    insanity: 0,
                    charisma: -8,
                    constitution: -12,
                    strength: 0
                },
                _id: "6693fd5846527d0df5f0efe8",
                name: "Frostbane Fever",
                description: "A chilling illness that lowers the body temperature drastically, causing frost to form on the skin and organs to freeze.",
                type: "illness",
                antidote_effects: [
                    "restore_constitution",
                    "lesser_restore_charisma"
                ],
                poison_effects: [
                    "damage_constitution",
                    "lesser_damage_charisma"
                ]
            },
            min_lvl: 1
        },
        healing_potion: {
            modifiers: {
                hit_points: 20,
                intelligence: 0,
                dexterity: 0,
                constitution: 0,
                insanity: 0,
                charisma: 0,
                strength: 0
            },
            _id: "668bca125319ea9afdff0750",
            name: "Essence of Vitality",
            description: "A rejuvenating potion that restores vigor and vitality to the drinker.",
            type: "essence",
            image: "/images/equipment/potions/healing/healing_1.png",
            value: 10,
            min_lvl: 1
        },
        enhancer_potion: {
            modifiers: {
                intelligence: 0,
                dexterity: 0,
                constitution: 0,
                insanity: 0,
                charisma: 0,
                strength: 20,
                hit_points: 0,
                attack: 0,
                defense: 0,
                magic_resistance: 0,
                CFP: 0,
                BCFA: 0,
                resistance: 0,
            },
            _id: "668bca125319ea9afdff0767",
            name: "Elixir of Increase Strength",
            description: "This robust elixir temporarily amplifies the drinker's physical power, significantly boosting muscle strength and stamina.\n\n\n",
            type: "elixir",
            image: "/images/equipment/potions/enhancer/enhancer_1.png",
            value: 10,
            duration: 2,
            min_lvl: 1
        }
    },
    inventory: {
        antidote_potions: [],
        healing_potions: [],
        enhancer_potions: []
    },
    status: {
        ethaziumCurse: false,
        common_diseases: [],
        tired: false
    },
    name: "VICTOR JAVIER DURÁN DE FRANÇA",
    nickname: "Vittorio “Il Ratto” Di Napoli",
    email: "victor.duran@ikasle.aeg.eus",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjX8hFPf0kk1iWOz-s7lrsyaBSeOGz8vsFiT8c07uyz9oZteEEwPbxYsq7vsG-vOoOynzwNyoZrZujmFEGa6nBoxZErZlxZzbM4y-j-61owzNTxtc325CITaG09yt9yP86aUyCXQBfwhQLbBhD6KrEZ7C4UA35n2WQ1Wt3Ae4IZN7PoTxoe296Gntu3ih3L96qsMOu3YLH_bcWVK3qiORg4PZBMbn7815BwdiiEXfvNKCf0A1ihbynjSpSoz0ds_zn1YshF5e95UBYAMklwtMqHnBoHpfwqWDGpkwHIm-qUS1DLiTFDQIHl5qOCbiEYEIrfdAQGtrCMqxV8b05WGauBfVHuq-JVD9OHlN0Xhu0tblXZL2YwvSxa74-pBYfuHd7BfxxI9Lju5YMO58M9yFXQe0l0HI54Td7LApBrb0lNtrB2HpIEIHBmZQPns8OmATjlX6v83KCDSSmWJPvlxCHv19uyQswkve8pw-mmtdKkD7pf7L9vMJZsSvsK2Cu91J-777Sm4wOsn6m8EVIP0sAkSbFJKFXZ2vUNNRoof8dvuUcgnBIXqPkWlEm3N2CHR4zhnXuH_zWcYvsFtnAtnq7F6FemEyyEgT44tfGk8D2WnSNxmiwJD9cMEG8Zw2SYzucCAdyWQssQI9OtCoo3Ga88wXw9vkaZZ7MPASbGRQ0FcbkubzzQhQrCRoJXAX-pJ5MqfWLT_oSrartdlOdGP0GXobxWh9GcXGz5SE5xo-Z79qXpAowsGDDyLrtqypAcNpPqmiCtG3QLN8ryv2vcNUO1BBXqsbobziv-mMepytQe1YjJBXz67lvwRf8KGWJgyuIlwKkDS7HY3HLqVv1yfnVqda6AS0HAyQ2JvRBeW97rg4S0Ur3P5eMFsq_Zy1beWUxNPBvO8-qJkpw8miLcEUgyaU7I-rsyMtQh0xP--paKfHdtp8gtoVaG7AQseMRA1iuFdq59Is8oV2kJkBctfzCw_IiPe=s100-c",
    level: 19,
    profile: {
        name: "Pariah"
    },
    role: "acolyte",
}