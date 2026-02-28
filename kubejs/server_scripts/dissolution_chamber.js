onEvent('recipes', (event) => {
    const mumetal = [
        'industrialforegoing:machine_frame_simple',
        'industrialforegoing:machine_frame_advanced', 
        'industrialforegoing:mob_slaughter_factory', 
        'industrialforegoing:ore_laser_base', 
        'industrialforegoing:fluid_laser_base',
        'industrialforegoing:machine_frame_supreme', 
        'mekanism:steel_casing',
        'mekanism:ultimate_control_circuit'
    ]
    mumetal.forEach((output) => {
        event.remove({ output: output });
    });
    const recipes = [
        {
            inputs: [
                'industrialforegoing:plastic','industrialforegoing:machine_frame_pity','industrialforegoing:plastic',
                'ftbic:antimatter','ftbic:antimatter',
                'thermal:lumium_ingot','pneumaticcraft:compressed_iron_gear','thermal:lumium_ingot'
            ],
            inputFluid: 'industrialforegoing:latex',
            inputFluidAmount: 1000,
            processingTime: 100,
            outputItem: { item: 'industrialforegoing:machine_frame_simple', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
        }, 
        {
            inputs: [
                'industrialforegoing:plastic','industrialforegoing:machine_frame_simple','industrialforegoing:plastic',
                'pneumaticcraft:glycerol','pneumaticcraft:glycerol',
                'powah:crystal_nitro','industrialforegoing:pink_slime_ingot','powah:crystal_nitro'
            ],
            inputFluid: 'industrialforegoing:pink_slime',
            inputFluidAmount: 1000,
            processingTime: 100,
            outputItem: { item: 'industrialforegoing:machine_frame_advanced', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
        }, 
        {
            inputs: [
                'betterendforge:aeternium_sword','industrialforegoing:machine_frame_simple','betterendforge:aeternium_sword',
                'industrialforegoing:plastic','industrialforegoing:plastic',
                'betterendforge:aeternium_axe','#forge:gears/gold','betterendforge:aeternium_axe'
            ],
            inputFluid: 'industrialforegoing:biofuel',
            inputFluidAmount: 4000,
            processingTime: 100,
            outputItem: { item: 'industrialforegoing:mob_slaughter_factory', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
        }, 
        {
            inputs: [
                'industrialforegoing:plastic','industrialforegoing:machine_frame_advanced','industrialforegoing:plastic',
                'industrialforegoing:advanced_black_hole_unit','industrialforegoing:advanced_black_hole_unit',
                'powah:crystal_nitro','powah:nitro_crystal_block','powah:crystal_nitro'
            ],
            inputFluid: 'industrialforegoing:pink_slime',
            inputFluidAmount: 2000,
            processingTime: 100,
            outputItem: { item: 'industrialforegoing:ore_laser_base', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
        }, 
        {
            inputs: [
                'industrialforegoing:plastic','industrialforegoing:machine_frame_advanced','industrialforegoing:plastic',
                'industrialforegoing:advanced_black_hole_tank','industrialforegoing:advanced_black_hole_tank',
                'kubejs:better_ic2_dianlu','extendedcrafting:nether_star_block','kubejs:better_ic2_dianlu'
            ],
            inputFluid: 'industrialforegoing:pink_slime',
            inputFluidAmount: 2000,
            processingTime: 100,
            outputItem: { item: 'industrialforegoing:fluid_laser_base', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
        }, 
        {
            inputs: [
                'industrialforegoing:plastic','industrialforegoing:machine_frame_advanced','industrialforegoing:plastic',
                'elementalcraft:fireite_ingot','elementalcraft:fireite_ingot',
                'ftbic:iridium_neutron_reflector','lazierae2:speculative_processor','ftbic:iridium_neutron_reflector'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 400,
            processingTime: 100,
            outputItem: { item: 'industrialforegoing:machine_frame_supreme', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
        }, 
        {
            inputs: [
                'industrialforegoing:plastic','industrialforegoing:machine_frame_supreme','industrialforegoing:plastic',
                'powah:steel_energized','powah:steel_energized',
                'nuclearcraft:part_plate_du','mekanism:ingot_osmium','nuclearcraft:part_plate_du'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 800,
            processingTime: 100,
            outputItem: { item: 'mekanism:steel_casing', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
        }, 
        {
            inputs: [
                'mekanism:alloy_atomic','mekanism:elite_control_circuit','mekanism:alloy_atomic',
                'powah:capacitor_nitro','powah:capacitor_nitro',
                'mekanism:alloy_atomic','cagedmobs:star_infused_netherite_ingot','mekanism:alloy_atomic'
            ],
            inputFluid: 'industrialforegoing:biofuel',
            inputFluidAmount: 8000,
            processingTime: 100,
            outputItem: { item: 'mekanism:ultimate_control_circuit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
        }
    ];
    recipes.forEach((recipe) => {
        let ingredients = [];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input));
        });

        event
            .custom({
                type: 'industrialforegoing:dissolution_chamber',
                input: ingredients,
                inputFluid: `{FluidName:"${recipe.inputFluid}",Amount:${recipe.inputFluidAmount}}`,
                processingTime: recipe.processingTime,
                output: recipe.outputItem,
                outputFluid: `{FluidName:"${recipe.outputFluid}",Amount:${recipe.outputFluidAmount}}`
            })
            //.id(recipe.id);
    });
});