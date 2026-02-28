onEvent('recipes', (event) => {
    event.remove({ output: '2x naturesaura:token_joy' });
    event.remove({ output: '2x naturesaura:token_sorrow' });
    event.remove({ output: '2x naturesaura:token_fear' });
    const  recipes = [
        {
            ingredients: [
                'iceandfire:fire_dragon_blood',
                'integrateddynamics:menril_torch',
                '#forge:flower',
                'twilightforest:torchberries',
                'iceandfire:ghost_ingot',
                'naturesaura:gold_leaf',
            ],
            sapling: 'twilightforest:twilight_oak_sapling',
            output: '2x naturesaura:token_joy',
            time: 10
        },
        {
            ingredients: [
                'iceandfire:ice_dragon_blood',
                'minecraft:glass',
                'iceandfire:siren_tear',
                '#forge:meats',
                'minecraft:pufferfish',
                'naturesaura:gold_leaf',
            ],
            sapling: 'twilightforest:twilight_oak_sapling',
            output: '2x naturesaura:token_sorrow',
            time: 10
        },
        {
            ingredients: [
                'twilightforest:fiery_blood',
                'iceandfire:dragonbone',
                'iceandfire:fire_dragon_flesh',
                'twilightforest:alpha_fur',
                'minecraft:wither_skeleton_skull',
                'naturesaura:gold_leaf',
            ],
            sapling: 'twilightforest:twilight_oak_sapling',
            output: '2x naturesaura:token_fear',
            time: 10
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:tree_ritual';
        recipe.ingredients = recipe.ingredients.map((input) => Ingredient.of(input).toJson());
        recipe.sapling = Item.of(recipe.sapling).toJson();
        recipe.output = Item.of(recipe.output).toResultJson();

        event.custom(recipe)//.id(recipe.id);
    });
});