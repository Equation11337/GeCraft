onEvent('recipes', (event) => {
    event.remove({ output: 'powah:crystal_nitro', type: 'powah:energizing'})
    event.remove({ output: 'powah:crystal_spirited', type: 'powah:energizing'})
    event.remove({ output: 'powah:crystal_niotic', type: 'powah:energizing'})
    event.remove({ output: 'powah:crystal_blazing', type: 'powah:energizing'})
    event.remove({ output: 'powah:steel_energized', type: 'powah:energizing'})
    event.remove({ output: 'industrialforegoing:machine_frame_pity'})
    event.remove({ output: 'mekanism:elite_control_circuit'})
    event.remove({ output: 'draconicevolution:basic_crafting_injector'})
    event.remove({ output: 'draconicevolution:draconium_core'})
    const recipes = [
        {
            ingredients: [
                { item: 'cagedmobs:star_infused_netherite_ingot' },
                { item: 'miniutilities:netherite_opinium_core' },
                { item: 'powah:blazing_crystal_block' },
                { item: 'minecraft:redstone_block' },
                { item: 'eidolon:crimson_essence' },
                { item: 'eidolon:crimson_essence' },
            ],
            energy: 1280000,
            result: {
                item: 'powah:crystal_nitro',
                count: 12
            },
        },
        {
            ingredients: [
                { item: 'botanicalmachinery:mana_emerald' },
                { item: 'botanicalmachinery:mana_emerald' },
                { item: 'appliedenergistics2:green_lumen_paint_ball' },
                { item: 'appliedenergistics2:green_lumen_paint_ball' },
                { item: 'botania:terrasteel_ingot' },
            ],
            energy: 640000,
            result: {
                item: 'powah:crystal_spirited',
                count: 2
            },
        },
        {
            ingredients: [
                { item: 'rftoolsbase:infused_diamond' },
                { item: 'botania:mana_diamond' },
                { item: 'quark:blue_crystal' }
            ],
            energy: 320000,
            result: {
                item: 'powah:crystal_niotic',
                count: 2
            },
        },
        {
            ingredients: [
                { item: 'elementalcraft:fire_shard' },
                { item: 'elementalcraft:fire_shard' },
                { item: 'rftoolspower:blazing_rod' },
                { item: 'rftoolspower:blazing_rod' }
            ],
            energy: 160000,
            result: {
                item: 'powah:crystal_blazing',
                count: 2
            },
        },
        {
            ingredients: [
                { item: 'ftbic:advanced_alloy' },
                { item: 'eidolon:arcane_gold_ingot' }
            ],
            energy: 10000,
            result: {
                item: 'powah:steel_energized',
                count: 2
            },
        }, 
        {
            ingredients: [
                { item: 'powah:dielectric_casing' },
                { item: 'lazierae2:speculation_core_16' }, 
                { item: 'lazierae2:parallel_processor' }, 
                { item: 'kubejs:better_ic2_dianlu' }, 
                { item: 'powah:crystal_spirited' }, 
                { item: 'botania:terrasteel_ingot' }
            ],
            energy: 320000,
            result: {
                item: 'industrialforegoing:machine_frame_pity',
                count: 1
            },
        }, 
        {
            ingredients: [
                { item: 'mekanism:advanced_control_circuit' },
                { item: 'mekanism:alloy_reinforced' }, 
                { item: 'mekanism:alloy_reinforced' }, 
                { item: 'mekanism:alloy_reinforced' }, 
                { item: 'mekanism:alloy_reinforced' }
            ],
            energy: 640000,
            result: {
                item: 'mekanism:elite_control_circuit',
                count: 1
            },
        }, 
        {
            ingredients: [
                { item: 'draconicevolution:draconium_core' },
                { item: 'draconicevolution:draconium_core' }, 
                { item: 'ftbic:antimatter' }, 
                { item: 'industrialforegoing:machine_frame_supreme' }, 
                { item: 'pneumaticcraft:plastic_brick_white' }, 
                { item: 'pneumaticcraft:plastic_brick_white' }
            ],
            energy: 5000000,
            result: {
                item: 'draconicevolution:basic_crafting_injector',
                count: 1
            },
        }, 
        {
            ingredients: [
                { item: 'minecraft:nether_star' },
                { item: 'powah:crystal_niotic' }, 
                { item: 'ftbic:antimatter' }, 
                { item: 'bloodmagic:infusedslate' }, 
                { item: 'draconicevolution:draconium_ingot' }, 
                { item: 'draconicevolution:draconium_ingot' }
            ],
            energy: 640000,
            result: {
                item: 'draconicevolution:draconium_core',
                count: 2
            },
        }, 
        {
            ingredients: [
                { item: 'create:handheld_worldshaper' },
                { item: 'kubejs:creative_dianlu' }, 
                { item: 'ae2additions:netherite_256m_storage_cell' }, 
                { item: 'ae2additions:netherite_256m_storage_cell' }, 
                { item: 'ae2additions:netherite_256m_storage_cell' }, 
                { item: 'ae2additions:netherite_256m_storage_cell' }
            ],
            energy: 214748364,
            result: {
                item: 'appliedenergistics2:creative_storage_cell',
                count: 1
            },
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        event.custom(recipe)//.id(recipe.id);
    });
});