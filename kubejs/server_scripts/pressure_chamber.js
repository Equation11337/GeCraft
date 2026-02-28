onEvent('recipes', (event) => {
    const mumetal = [
        'industrialforegoing:stasis_chamber',
    ]
    mumetal.forEach((output) => {
        event.remove({ output: output });
    }); 

    const recipes = [
        {
            inputs: [
                { item: 'ftbic:graphene', count: 1 },
                { item: 'pneumaticcraft:plastic', count: 2 },
                { item: 'powah:crystal_blazing', count: 4 }
            ],
            pressure: 4.0,
            results: [{ item: 'pneumaticcraft:transistor', count: 2 }],
        },
        {
            inputs: [
                { item: 'ftbic:iridium_alloy', count: 1 },
                { item: 'pneumaticcraft:plastic', count: 4 },
                { item: 'powah:crystal_blazing', count: 8 }
            ],
            pressure: 4.0,
            results: [{ item: 'pneumaticcraft:capacitor', count: 4 }],
        }, 
        {
            inputs: [
                { item: 'industrialforegoing:machine_frame_advanced', count: 1 },
                { item: 'minecraft:soul_sand', count: 64 },
                { item: 'thermal:ice_charge', count: 16 }, 
                { item: 'minecraft:ghast_tear', count: 16 }, 
                { item: 'minecraft:nether_star', count: 16 }
            ],
            pressure: 4.0,
            results: [{ item: 'industrialforegoing:stasis_chamber', count: 1 }],
        }, 
        {
            inputs: [
                { item: 'pneumaticcraft:printed_circuit_board', count: 3 },
                { item: 'pneumaticcraft:speed_upgrade', count: 4 },
                { item: 'industrialforegoing:pink_slime_ingot', count: 6 }, 
                { item: 'thermal:upgrade_augment_3', count: 2 }
            ],
            pressure: 4.0,
            results: [{ item: 'kubejs:speed_jiban', count: 1 }],
        }, 
        {
            inputs: [
                { item: 'pneumaticcraft:compressed_iron_block', count: 64 },
                { item: 'pneumaticcraft:advanced_pressure_tube', count: 64 },
                { item: 'pneumaticcraft:printed_circuit_board', count: 64 }, 
                { item: 'pneumaticcraft:advanced_liquid_compressor', count: 1 }, 
                { item: 'pneumaticcraft:advanced_air_compressor', count: 1 }, 
                { item: 'pneumaticcraft:flux_compressor', count: 1 }, 
                { item: 'pneumaticcraft:thermal_compressor', count: 1 }, 
                { item: 'pneumaticcraft:electrostatic_compressor', count: 1 }, 
                { item: 'kubejs:creative_dianlu', count: 1 }
            ],
            pressure: 4.0,
            results: [{ item: 'pneumaticcraft:creative_compressor', count: 1 }],
        }
    ]

    recipes.forEach((recipe) => {
        let ingredients = [];
        recipe.inputs.forEach((input) => {
            input.type = 'pneumaticcraft:stacked_item';
            ingredients.push(input);
        });

        event
            .custom({
                type: 'pneumaticcraft:pressure_chamber',
                inputs: ingredients,
                pressure: recipe.pressure,
                results: recipe.results
            })
    });
});