
onEvent('recipes', (event) => {
    const offering = [
        'ironfurnaces:rainbow_plating'
    ]
    const data = {
        recipes: [
            {
                input: {
                    item: 'kubejs:tiankongkuai'
                },
                start_item: {
                    item: 'minecraft:nether_star'
                },
                output: {
                    item: 'kubejs:cangqiong_core',
                    count: 1
                }
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event
            .custom({
                type: 'naturesaura:offering',
                input: recipe.input,
                start_item: recipe.start_item,
                output: recipe.output
            })
            //.id(recipe.id);
    });
});