onEvent('recipes', (event) => {
    const block_transmutation = [
        'astralsorcery:block_transmutation/iron_starmetal',
        'astralsorcery:block_transmutation/craftingtable_altar'
    ]
    block_transmutation.forEach((output) => {
        event.remove({ id: output });
    }); 
    const recipes = [
        {
            input: { block: 'powah:energized_steel_block' },
            output: { block: 'astralsorcery:starmetal' },
            starlight: 900,
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'astralsorcery:block_transmutation';
        event.custom(recipe)//.id(recipe.id);
    });
});