onEvent('recipes', event => {
    event.recipes.thermal.press('kubejs:chaomi_jiban', '6x ftbic:iridium_circuit')
    event.recipes.thermal.crucible(Fluid.of('kubejs:cool_fluid', 250), 'thermal:blizz_powder').energy(2000)
    event.recipes.thermal.smelter('thermal:machine_efficiency_creative_augment', ['64x thermal:machine_efficiency_augment', '64x thermal:upgrade_augment_3', 'kubejs:creative_dianlu']).energy(10000), 
    event.recipes.thermal.smelter('nuclearcraft:gem_boron_arsenide', ['nuclearcraft:compound_borax', 'twilightforest:carminite']).energy(3000)
    event.recipes.thermal.chiller('kubejs:yuzhousuban', [Fluid.of('kubejs:yuzhousu', 144), 'tconstruct:plate_cast'])
})