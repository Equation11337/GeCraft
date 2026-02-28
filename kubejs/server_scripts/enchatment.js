onEvent('recipes', (event) => {
    event.remove({ output: 'powah:dielectric_casing'})

    const recipes = [
        {
            inputs: [
                'ars_nouveau:mythical_clay',
                'kubejs:yuanzuishenhe',
                'ars_nouveau:mythical_clay',
                'kubejs:wuxingyuansu',
                'kubejs:wuxingyuansu',
                'ars_nouveau:mythical_clay',
                'kubejs:sijibaoyu',
                'ars_nouveau:mythical_clay'
            ],
            reagent: 'botania:terrasteel_ingot',
            sourceCost: 5000,
            output: 'kubejs:terra_core_buwen',
        }, 
        {
            inputs: [
                'eidolon:arcane_gold_ingot',
                'eidolon:shadow_gem',
                'eidolon:arcane_gold_ingot',
                'eidolon:lesser_soul_gem',
                'eidolon:lesser_soul_gem',
                'elementalcraft:purerock',
                'eidolon:shadow_gem',
                'elementalcraft:purerock'
            ],
            reagent: 'elementalcraft:purecrystal',
            sourceCost: 5000,
            output: 'kubejs:zhichun_core',
        }, 
        {
            inputs: [
                'elementalcraft:drenched_iron_ingot',
                'powah:dielectric_rod_horizontal',
                'elementalcraft:swift_alloy_ingot',
                'powah:dielectric_rod',
                'powah:dielectric_rod',
                'elementalcraft:swift_alloy_ingot',
                'powah:dielectric_rod_horizontal',
                'elementalcraft:drenched_iron_ingot'
            ],
            reagent: 'kubejs:terra_core',
            sourceCost: 2500,
            output: 'powah:dielectric_casing',
        }
    ];

    recipes.forEach((recipe) => {
        recipe.sourceCost
            ? event.recipes.ars_nouveau
                  .enchanting_apparatus(recipe.output, recipe.reagent, recipe.inputs)
                  .merge({ sourceCost: recipe.sourceCost })
                  //.id(recipe.id)
            : event.recipes.ars_nouveau
                  .enchanting_apparatus(recipe.output, recipe.reagent, recipe.inputs)
                  //.id(recipe.id);
    });
});
