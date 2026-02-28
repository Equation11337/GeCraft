onEvent('recipes', event => {
    event.remove({output: 'create:blaze_cake'}),
    event.remove({output: 'botania:terra_plate'}),
    event.remove({output: 'create:chromatic_compound'}), 
    event.remove({output: 'mekanism:advanced_control_circuit'})
    event.recipes.create.sequenced_assembly([
        //成品：
        Item.of('create:electron_tube'),
       ],
       //输入物品：
       'projectred-core:energized_silicon_chip',
       [
       //每步的配方
       event.recipes.create.cutting('projectred-core:energized_silicon_chip', [
        'projectred-core:energized_silicon_chip',
      ]),
       event.recipes.create.deploying('projectred-core:energized_silicon_chip',[
        'projectred-core:energized_silicon_chip','create:polished_rose_quartz'
      ]),
       event.recipes.create.deploying('projectred-core:energized_silicon_chip',[
        'projectred-core:energized_silicon_chip','projectred-transmission:red_alloy_wire'
      ]),
       event.recipes.create.filling('projectred-core:energized_silicon_chip', [
        'projectred-core:energized_silicon_chip',
            Fluid.of('tconstruct:molten_iron', 16)
          ]),
       event.recipes.create.pressing('projectred-core:energized_silicon_chip', ['projectred-core:energized_silicon_chip'])
   ]).transitionalItem('projectred-core:energized_silicon_chip').loops(1)//分别为循环装配的物品id和装配次数

    event.recipes.create.sequenced_assembly([
    //成品：
        Item.of('create:precision_mechanism'),
        ],
   //输入物品：
        '#forge:plates/gold',
        [
        //每步的配方
        event.recipes.create.pressing('create:precision_mechanism', [
            'create:precision_mechanism'
        ]),
        event.recipes.create.deploying('create:precision_mechanism',[
            'create:precision_mechanism','create:electron_tube'
        ]),
        event.recipes.create.deploying('create:precision_mechanism',[
            'create:precision_mechanism','create:large_cogwheel'
        ]),
        event.recipes.create.deploying('create:precision_mechanism',[
            'create:precision_mechanism','create:cogwheel'])
        ]).transitionalItem('#forge:plates/gold').loops(1)//分别为循环装配的物品id和装配次数

    event.recipes.create.filling('create:blaze_cake', [
            'create:blaze_cake_base',
                Fluid.of('tconstruct:blazing_blood', 250)
            ])

    event.recipes.create.sequenced_assembly([
        //成品：
        Item.of('kubejs:guanghui_goujian'),
        ],
        //输入物品：
        'create:precision_mechanism',
        [
        //每步的配方
        event.recipes.create.pressing('create:precision_mechanism', [
            'create:precision_mechanism'
        ]),
        event.recipes.create.deploying('create:precision_mechanism',[
            'create:precision_mechanism','create:refined_radiance'
        ]),
        event.recipes.create.deploying('create:precision_mechanism',[
            'create:precision_mechanism','thermal:gold_gear'
        ]),
        event.recipes.create.deploying('create:precision_mechanism',[
            'create:precision_mechanism','create:refined_radiance'
        ]),
        event.recipes.create.deploying('create:precision_mechanism',[
            'create:precision_mechanism','thermal:gold_gear'])
        ]).transitionalItem('create:precision_mechanism').loops(2)//分别为循环装配的物品id和装配次数

    event.recipes.create.sequenced_assembly([
        //成品：
        Item.of('botania:terra_plate'),
        ],
        //输入物品：
        'minecraft:lapis_block',
        [
        //每步的配方
        event.recipes.create.cutting('minecraft:lapis_block', [
            'minecraft:lapis_block'
        ]),
        event.recipes.create.deploying('minecraft:lapis_block',[
            'minecraft:lapis_block','botania:manasteel_block'
        ]),
        event.recipes.create.deploying('minecraft:lapis_block',[
            'minecraft:lapis_block','botania:rune_air'
        ]),
        event.recipes.create.deploying('minecraft:lapis_block',[
            'minecraft:lapis_block','botania:rune_fire'
        ]),
        event.recipes.create.deploying('minecraft:lapis_block',[
            'minecraft:lapis_block','botania:rune_earth'
        ]),
        event.recipes.create.deploying('minecraft:lapis_block',[
            'minecraft:lapis_block','botania:rune_water'
        ]),
        event.recipes.create.deploying('minecraft:lapis_block',[
            'minecraft:lapis_block','botania:rune_mana'
        ]),
        event.recipes.create.pressing('minecraft:lapis_block', [
            'minecraft:lapis_block'])
        ]).transitionalItem('minecraft:lapis_block').loops(1)//分别为循环装配的物品id和装配次数
    
    event.recipes.create.sequenced_assembly([
        //成品：
        Item.of('mekanism:advanced_control_circuit'),
        ],
        //输入物品：
        'mekanism:basic_control_circuit',
        [
        //每步的配方
        event.recipes.create.deploying('mekanism:advanced_control_circuit',[
            'mekanism:advanced_control_circuit','mekanism:alloy_infused'
        ]),
        event.recipes.create.deploying('mekanism:advanced_control_circuit',[
            'mekanism:advanced_control_circuit','mekanism:alloy_infused'
        ]),
        event.recipes.create.deploying('mekanism:advanced_control_circuit',[
            'mekanism:advanced_control_circuit','mekanism:alloy_infused'
        ]),
        event.recipes.create.deploying('mekanism:advanced_control_circuit',[
            'mekanism:advanced_control_circuit','mekanism:alloy_infused'
        ])
        ]).transitionalItem('mekanism:basic_control_circuit').loops(1)//分别为循环装配的物品id和装配次数        

    event.recipes.createMixing('create:chromatic_compound', [
        'rats:little_black_squash_balls',
        'rats:little_black_squash_balls',
        'rats:little_black_squash_balls',
        ['create:powdered_obsidian', 'mekanism:dust_obsidian'],
        ['create:powdered_obsidian', 'mekanism:dust_obsidian'],
        ['create:powdered_obsidian', 'mekanism:dust_obsidian'],
        'create:polished_rose_quartz', 
        'create:polished_rose_quartz'
        ]).superheated()

    event.recipes.createSandpaperPolishing('rats:little_black_squash_balls', 'minecraft:coal')
    event.recipes.createDeploying('create:creative_motor',['create:furnace_engine', 'kubejs:creative_dianlu'])

    event.recipes.createMechanicalCrafting('create:handheld_worldshaper', [
        'ABCD',
        'EFGH',
        'IJKL'
      ], {
        A: 'pneumaticcraft:creative_compressed_iron_block',
        B: 'elementalcraft:tank_creative',
        C: 'appliedenergistics2:creative_energy_cell',
        D: 'draconicevolution:creative_op_capacitor', 
        E: 'pneumaticcraft:creative_compressor',
        F: 'thermal:machine_efficiency_creative_augment',
        G: 'create:creative_motor',
        H: 'ars_nouveau:creative_mana_jar',
        I: 'mekanism:creative_chemical_tank',
        J: 'ftbic:creative_battery',
        K: 'botanicalmachinery:mana_battery_creative',
        L: 'mekanism:creative_fluid_tank'
      }),
    event.recipes.createMechanicalCrafting('kubejs:yaoshui', [
        'ABCD',
        'EFGH',
        'IJKL'
      ], {
        A: Item.of('minecraft:potion', '{Potion:"minecraft:healing"}'),
        B: Item.of('minecraft:potion', '{Potion:"minecraft:regeneration"}'),
        C: Item.of('minecraft:potion', '{Potion:"minecraft:harming"}'),
        D: Item.of('minecraft:potion', '{Potion:"minecraft:weakness"}'), 
        E: Item.of('minecraft:potion', '{Potion:"minecraft:swiftness"}'),
        F: Item.of('minecraft:potion', '{Potion:"minecraft:slowness"}'),
        G: Item.of('minecraft:potion', '{Potion:"minecraft:strength"}'),
        H: Item.of('minecraft:potion', '{Potion:"minecraft:fire_resistance"}'),
        I: Item.of('minecraft:potion', '{Potion:"minecraft:poison"}'),
        J: Item.of('minecraft:potion', '{Potion:"minecraft:water_breathing"}'),
        K: Item.of('minecraft:potion', '{Potion:"minecraft:night_vision"}'),
        L: Item.of('minecraft:potion', '{Potion:"minecraft:invisibility"}')
      })
})