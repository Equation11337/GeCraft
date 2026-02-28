onEvent('recipes', (event) => {
    const mumetal = [
        'industrialforegoing:laser_drill',
        'envirocore:laser_diode'
    ]
    mumetal.forEach((output) => {
        event.remove({ output: output  });
    });
    const recipes = [
        {
            input: { item: 'industrialforegoing:machine_frame_advanced', count: 3 },
            output: { item: 'industrialforegoing:laser_drill', count: 1 },
            program: 'laser'
        }, 
        {
            input: { item: 'kubejs:speed_jiban', count: 2 },
            output: { item: 'kubejs:speed_jiban_1', count: 1 },
            program: 'laser'
        }, 
        {
            input: { item: 'pneumaticcraft:transistor', count: 1 },
            output: { item: 'envirocore:laser_diode', count: 1 },
            program: 'laser'
        }, 
        {
            input: { item: 'kubejs:creative_dianlu', count: 1 },
            output: { item: 'pneumaticcraft:creative_compressed_iron_block', count: 1 },
            program: 'drill'
        },
        {
            input: { item: 'pneumaticcraft:ingot_iron_compressed', count: 4 },
            output: { item: 'pneumaticcraft:compressed_iron_gear', count: 1 },
            program: 'drill'
        }
    ]
    recipes.forEach((recipe) => {
        recipe.input.type = 'pneumaticcraft:stacked_item';
        event
            .custom({
                type: `pneumaticcraft:assembly_${recipe.program}`,
                input: recipe.input,
                result: recipe.output,
                program: recipe.program
            })
    });
});