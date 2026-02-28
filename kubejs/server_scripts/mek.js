onEvent('recipes', event => {
    event.remove({output: 'mekanism:alloy_infused'}),
    event.remove({output: 'mekanism:alloy_reinforced'}),
    event.remove({output: 'mekanism:alloy_atomic'}),
    event.remove({output: 'mekanism:basic_control_circuit'}),
    event.recipes.mekanismMetallurgicInfusing('mekanism:alloy_infused', 'powah:steel_energized', 'mekanism:redstone', 20), 
    event.recipes.mekanismMetallurgicInfusing('mekanism:alloy_reinforced', 'powah:crystal_spirited', 'mekanism:diamond', 40), 
    event.recipes.mekanismMetallurgicInfusing('mekanism:alloy_atomic', 'industrialforegoing:pink_slime_ingot', 'mekanism:refined_obsidian', 80)
    event.recipes.mekanismMetallurgicInfusing('mekanism:basic_control_circuit', 'pneumaticcraft:printed_circuit_board', 'mekanism:redstone', 40)
    event.recipes.mekanismCrushing('4x eidolon:soul_shard', 'occultism:spirit_attuned_gem')
})