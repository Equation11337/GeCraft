onEvent('recipes', (event) => {
    const mumetal = [
        'botania:manasteel_ingot',
        'botania:manasteel_block',
        'botania:mana_pearl',
        'botania:mana_powder',
        'botania:mana_diamond' ,
        'botania:mana_diamond_block',
    ]
    
    mumetal.forEach((output) => {
        event.remove({ output: output ,type:'botania:mana_infusion'});
    });
    const recipes = [
        {
            input: ['rftoolsbase:infused_diamond', 'powah:crystal_niotic'],
            output: 'botania:mana_diamond',
            count: 1,
            mana: 6000,
            catalyst: 'naturesaura:generator_limit_remover',
        },
        {
            input: ['naturesaura:sky_ingot', 'powah:steel_energized'],
            output: 'botania:manasteel_ingot',
            count: 1,
            mana: 3000,
            catalyst: 'naturesaura:generator_limit_remover',
        },
        {
            input: 'naturesaura:gold_powder',
            output: 'botania:mana_pearl',
            count: 1,
            mana: 3000,
            catalyst: 'naturesaura:generator_limit_remover',
        },
        {
            input: 'naturesaura:calling_spirit',
            output: 'botania:mana_powder',
            count: 1,
            mana: 6000,
            catalyst: 'naturesaura:generator_limit_remover',
        },
        {
            input: 'powah:niotic_crystal_block',
            output: 'botania:mana_diamond_block',
            count: 1,
            mana: 60000,
            catalyst: 'elementalcraft:purerock',
        }, 
        {
            input: 'powah:energized_steel_block',
            output: 'botania:manasteel_block',
            count: 1,
            mana: 30000,
            catalyst: 'elementalcraft:purerock',
        }
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'botania:mana_infusion',
            input: Ingredient.of(recipe.input).toJson(),
            output: { item: recipe.output, count: recipe.count },
            mana: recipe.mana
        };

        if (recipe.catalyst) {
            constructed_recipe.catalyst = {
                type: 'block',
                block: recipe.catalyst
            };
        }
        event.custom(constructed_recipe)//.id(recipe.id);
    });
});