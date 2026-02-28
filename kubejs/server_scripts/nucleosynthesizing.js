onEvent('recipes', (event) => {
    event.remove({output: '2x extendedcrafting:luminessence'})
    event.remove({id: "extendedcrafting:black_iron_ingot"})
    event.remove({id: "extendedcrafting:ender_ingot"})
        //Recipes use about 40k rf per point of duration. 
        //Duration is not a fixed speed, as the machine runs at 10000% speed when the energy buffer is full.       
    var data = {
        recipes: [
            {
                output: Item.of('extendedcrafting:luminessence'),
                itemInput: { ingredient: { item: 'thermal:lumium_dust' } },
                gasInput: { amount: 5, gas: 'mekanism:antimatter' },
                duration: 2500,
            },
            {
                output: Item.of('extendedcrafting:black_iron_ingot'),
                itemInput: { ingredient: { item: 'nuclearcraft:alloy_tough' } },
                gasInput: { amount: 2, gas: 'mekanism:antimatter' },
                duration: 1000,
            }, 
            {
                output: Item.of('extendedcrafting:ender_ingot'),
                itemInput: { ingredient: { item: 'thermal:enderium_ingot' } },
                gasInput: { amount: 3, gas: 'mekanism:antimatter' },
                duration: 1000,
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        recipe.type = 'mekanism:nucleosynthesizing';
        event.custom(recipe)//.id(recipe.id);
    });
});