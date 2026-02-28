onEvent('recipes', (event) => {
    const mumetal = [
        'botania:terrasteel_ingot' 
    ]

    mumetal.forEach((output) => {
        event.remove({ output: output ,type:'botania:terra_plate'});
    })
    const recipes = [
        {
            inputs: [
                { item: 'kubejs:cangqiong_core' },
                { item: 'botania:terrasteel_ingot' },
                { item: 'iceandfire:pixie_wings' },
                { item: 'twilightforest:knightmetal_block' },
                { item: 'botania:livingwood' }
            ],
            output: { item: 'botania:alfheim_portal' },
            mana: 800000,
        },
        {
            inputs: [
                { item: 'minecraft:book' },
                { item: 'botania:terrasteel_ingot' },
                { item: 'extrabotany:theorigin' }
            ],
            output: { item: 'ars_nouveau:novice_spell_book' },
            mana: 200000,
        }, 
        {
            inputs: [
                { item: 'ars_nouveau:novice_spell_book' },
                { item: 'botania:gaia_ingot' },
                { item: 'extrabotany:thechaos' }
            ],
            output: { item: 'ars_nouveau:apprentice_spell_book' },
            mana: 500000,
        }, 
        {
            inputs: [
                { item: 'ars_nouveau:apprentice_spell_book' },
                { item: 'minecraft:nether_star' },
                { item: 'minecraft:totem_of_undying' }, 
                { item: 'extrabotany:theuniverse' }, 
                { item: 'ars_nouveau:wilden_tribute' }
            ],
            output: { item: 'ars_nouveau:archmage_spell_book' },
            mana: 1000000,
        }, 
        {
            inputs: [
                { item: 'botania:manasteel_ingot' },
                { item: 'botania:rune_earth' }, 
                { item: 'botania:rune_mana' }
            ],
            output: { item: 'botania:terrasteel_ingot' },
            mana: 500000,
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'botania:terra_plate',
            ingredients: recipe.inputs.map((input) => Ingredient.of(input).toJson()),
            result: Item.of(recipe.output).toJson(),
            mana: recipe.mana
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});