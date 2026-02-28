onEvent('recipes', (event) => {
    const Ritual_object = [
        'occultism:storage_stabilizer_tier1', 
        'occultism:ritual_dummy/summon_wild_afrit'
    ]

    Ritual_object.forEach((output) => {
        event.remove({ output: output  });
    });  
    recipes = [
        //bot
        {
            ritual_type: 'occultism:craft',
            activation_item: 'kubejs:zhichun_core',
            pentacle_id: 'occultism:craft_foliot',
            duration: 10,
            ritual_dummy: 'occultism:ritual_dummy/craft_kubejs.real_zhichun_core',
            ingredients: ['elementalcraft:pristine_fire_gem', 'elementalcraft:pristine_water_gem', 'elementalcraft:pristine_earth_gem', 'elementalcraft:pristine_air_gem', 'quark:waxed_white_crystal',  'quark:waxed_white_crystal', 'quark:waxed_white_crystal', 'quark:waxed_white_crystal', 'quark:waxed_white_crystal', 'quark:waxed_white_crystal', 'quark:waxed_white_crystal', 'quark:waxed_white_crystal'],
            result: 'kubejs:real_zhichun_core'
        }, 
        {
            ritual_type: 'occultism:craft',
            activation_item: 'kubejs:terra_core_buwen',
            pentacle_id: 'occultism:craft_marid',
            duration: 10,
            ritual_dummy: 'occultism:ritual_dummy/craft_kubejs.terra_core',
            ingredients: ['extrabotany:thechaos', 'botania:gaia_ingot', 'occultism:iesnium_ingot', 'ars_nouveau:mythical_clay', 'occultism:storage_stabilizer_tier1', 'occultism:storage_stabilizer_tier1', 'occultism:storage_stabilizer_tier1', 'occultism:storage_stabilizer_tier1'],
            result: 'kubejs:terra_core'
        }, 
        {
            ritual_type: 'occultism:craft',
            activation_item: 'botania:chiseled_livingrock_bricks',
            pentacle_id: 'occultism:craft_djinni',
            duration: 5,
            ritual_dummy: 'occultism:ritual_dummy/craft_occultism.storage_stabilizer_tier1',
            ingredients: ['occultism:spirit_attuned_gem', 'minecraft:blaze_powder', '#forge:storage_blocks/copper', 'occultism:otherstone_pedestal'],
            result: 'occultism:storage_stabilizer_tier1'
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: 'occultism:book_of_binding_bound_afrit',
            pentacle_id: 'occultism:craft_foliot',
            duration: 200,
            ritual_dummy: 'occultism:ritual_dummy/craft_occultism.huo_ling',
            ingredients: ['minecraft:quartz', 'minecraft:flint_and_steel', 'minecraft:gunpowder','minecraft:netherrack'],
            result: 'occultism:spawn_egg/afrit_wild'
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'occultism:ritual';

            recipe.activation_item = Ingredient.of(recipe.activation_item).toJson();
        if (recipe.item_to_use) {
            recipe.item_to_use = Ingredient.of(recipe.item_to_use).toJson();
        }
        recipe.ritual_dummy = Ingredient.of(recipe.ritual_dummy).toJson();
        recipe.ingredients = recipe.ingredients.map((input) => Ingredient.of(input).toJson());
        recipe.result = Item.of(recipe.result).toJson();

     event.custom(recipe)//.id(recipe.id)
    })
});