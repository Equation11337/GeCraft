onEvent('recipes', (event) => {
    event.remove({ output: 'occultism:otherstone', type: 'occultism:spirit_fire'})
    event.remove({ output: '8x powah:dielectric_rod_horizontal'})
    event.remove({ output: 'powah:dielectric_rod_horizontal'})
    event.remove({ output: 'powah:dielectric_rod'})

    const recipes = [
        {
            input: 'botania:livingrock',
            output: 'occultism:otherstone',
        }, 
        {
            input: 'botania:dreamwood',
            output: 'occultism:otherworld_log',
        }, 
        {
            input: 'powah:dielectric_rod',
            output: 'powah:dielectric_rod_horizontal',
        },
        {
            input: 'powah:dielectric_rod_horizontal',
            output: 'powah:dielectric_rod',
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'occultism:spirit_fire',
                ingredient: Ingredient.of(recipe.input).toJson(),
                result: Ingredient.of(recipe.output).toJson()
            })
            //.id(recipe.id);
    });
});