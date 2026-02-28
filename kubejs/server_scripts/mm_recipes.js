onEvent('recipes', (event) => {
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "assembly_machine_1",
        "controllerId": "assembly_machine_mk1",
        "ticks": 20,
        "inputs": [
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "kubejs:guanghui_goujian",
                    "count": 1
                }
            }, 
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "kubejs:cangqiong_core",
                    "count": 1
                }
            }, 
            {
                "type": "masterfulmachinery:create_rotation",
                "data":{
                    "speed": 128
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "kubejs:dianlu_mk1",
                    "count": 1
                }
            }
        ]
    }), 
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "assembly_machine_2",
        "controllerId": "assembly_machine_mk2",
        "ticks": 20,
        "inputs": [
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "kubejs:chaomi_jiban",
                    "count": 1
                }
            }, 
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "kubejs:ender_daoxian",
                    "count": 12
                }
            }, 
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "kubejs:terra_core",
                    "count": 1
                }
            }, 
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "immersivepetroleum:petcoke",
                    "count": 2
                }
            }, 
            {
                "type": "masterfulmachinery:fluids",
                "perTick": true, 
                "data":{
                    "fluid": "kubejs:cold_fluid", 
                    "amount": 100
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "kubejs:better_ic2_dianlu",
                    "count": 1
                }
            }
        ]
    }), 
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "assembly_machine_3",
        "controllerId": "assembly_machine_mk3",
        "ticks": 20,
        "inputs": [
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "kubejs:speed_jiban_1",
                    "count": 1
                }
            }, 
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "kubejs:life_core",
                    "count": 1
                }
            }, 
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "powah:ender_core",
                    "count": 3
                }
            }, 
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "powah:crystal_nitro",
                    "count": 6
                }
            }, 
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "lazierae2:speculative_processor",
                    "count": 1
                }
            }, 
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "lazierae2:parallel_processor",
                    "count": 4
                }
            }, 
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "ftbic:antimatter",
                    "count": 3
                }
            }, 
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "industrialforegoing:pink_slime_ingot",
                    "count": 3
                }
            }, 
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "industrialforegoing:plastic",
                    "count": 4
                }
            }, 
            {
                "type": "masterfulmachinery:fluids",
                "perTick": true, 
                "data":{
                    "fluid": "industrialforegoing:ether_gas", 
                    "amount": 60
                }
            }, 
            {
                "type": "masterfulmachinery:energy",
                "perTick": true, 
                "data":{
                    "amount": 100000
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "kubejs:unknown_dianlu",
                    "count": 1
                }
            }
        ]
    }), 
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "starlight_1",
        "controllerId": "starlight",
        "ticks": 5,
        "inputs": [
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "powah:steel_energized",
                    "count": 1
                }
            }, 
            {
                "type": "masterfulmachinery:fluids",
                "perTick": false, 
                "data":{
                    "fluid": "astralsorcery:liquid_starlight", 
                    "amount": 100
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "astralsorcery:starmetal_ingot",
                    "count": 1
                }
            }
        ]
    }), 
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "starlight_1",
        "controllerId": "starlight",
        "ticks": 40,
        "inputs": [
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "powah:energized_steel_block",
                    "count": 1
                }
            }, 
            {
                "type": "masterfulmachinery:fluids",
                "perTick": false, 
                "data":{
                    "fluid": "astralsorcery:liquid_starlight", 
                    "amount": 900
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "astralsorcery:starmetal",
                    "count": 1
                }
            }
        ]
    }), 
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "starlight_1",
        "controllerId": "starlight",
        "ticks": 180,
        "inputs": [
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "astralsorcery:celestial_crystal",
                    "count": 1
                }
            }, 
            {
                "type": "masterfulmachinery:fluids",
                "perTick": false, 
                "data":{
                    "fluid": "kubejs:star_fluid", 
                    "amount": 5000
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:fluids",
                "perTick": false, 
                "data":{
                    "fluid": "astralsorcery:liquid_starlight", 
                    "amount": 20000
                }
            }
        ]
    }), 
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "starlight_1",
        "controllerId": "starlight",
        "ticks": 20,
        "inputs": [
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "mana-and-artifice:chimerite_gem",
                    "count": 4
                }
            }, 
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "astralsorcery:starmetal_ingot",
                    "count": 4
                }
            }, 
            {
                "type": "masterfulmachinery:fluids",
                "perTick": false, 
                "data":{
                    "fluid": "astralsorcery:liquid_starlight", 
                    "amount": 2000
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:fluids",
                "perTick": false, 
                "data":{
                    "fluid": "kubejs:star_fluid", 
                    "amount": 1000
                }
            }
        ]
    }), 
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "starlight_1",
        "controllerId": "starlight",
        "ticks": 10,
        "inputs": [
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "astralsorcery:aquamarine",
                    "count": 1
                }
            }, 
            {
                "type": "masterfulmachinery:fluids",
                "perTick": false, 
                "data":{
                    "fluid": "kubejs:star_fluid", 
                    "amount": 80
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "astralsorcery:resonating_gem",
                    "count": 1
                }
            }
        ]
    }),
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "starlight_1",
        "controllerId": "starlight",
        "ticks": 20,
        "inputs": [
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "kubejs:xingguangrongqi",
                    "count": 1
                }
            }, 
            {
                "type": "masterfulmachinery:fluids",
                "perTick": false, 
                "data":{
                    "fluid": "kubejs:star_fluid", 
                    "amount": 1500
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "kubejs:star_core",
                    "count": 1
                }
            }
        ]
    }), 
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "assembly_machine_4",
        "controllerId": "assembly_machine_mk4",
        "ticks": 30,
        "inputs": [
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "kubejs:yuzhoucanpian",
                    "count": 2
                }
            }, 
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "kubejs:dragon_core",
                    "count": 1
                }
            }, 
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "nuclearcraft:part_plate_elite",
                    "count": 4
                }
            }, 
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "kubejs:mobiwusi_ingot",
                    "count": 4
                }
            }, 
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "kubejs:star_core",
                    "count": 1
                }
            }, 
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "mekanism:ultimate_control_circuit",
                    "count": 3
                }
            }, 
            {
                "type": "masterfulmachinery:fluids",
                "data":{
                    "fluid": "mekanism:ethene", 
                    "amount": 3000
                }
            },
            {
                "type": "masterfulmachinery:energy", 
                "data":{
                    "amount": 100000000
                }
            }, 
            {
                "type": "masterfulmachinery:mekanism_gas",
                "data":{
                    "gas": "mekanism:antimatter",
                    "amount": 25
                }
            }, 
            {
                "type": "masterfulmachinery:mekanism_slurry",
                "data":{
                    "slurry": "mekanism:clean_osmium",
                    "amount": 3000
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "kubejs:mobiwusi_dianlu",
                    "count": 1
                }
            }
        ]
    }),
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "fengehuizhang",
        "controllerId": "fengehuizhang_yishi",
        "ticks": 6000,
        "inputs": [
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "kubejs:fengehuizhang",
                    "count": 1
                }
            }, 
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:redstone",
                    "count": 8
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "kubejs:fengehuizhang_jihuo",
                    "count": 1
                }
            },  
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "miniutilities:cursed_earth",
                    "count": 25
                }
            }
        ]
    }), 
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "weinihuizhang",
        "controllerId": "weinihuizhang_yishi",
        "ticks": 20,
        "inputs": [
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "kubejs:fengehuizhang_jihuo",
                    "count": 1
                }
            }, 
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "tag": "forge:stone",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "tag": "forge:glass",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:charcoal",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:gold_ingot",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:iron_ingot",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:cooked_porkchop",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:cooked_beef",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:terracotta",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:cooked_chicken",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:green_dye",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:baked_potato",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "tag": "forge:foods/fish/cooked",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:coal_ore",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:iron_ore",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:gold_ore",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:redstone_ore",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:diamond_ore",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:emerald_ore",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:lapis_ore",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:grass_block",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:dirt",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:clay",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:sand",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:gravel",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:music_disc_13",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:music_disc_cat",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:music_disc_blocks",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:music_disc_chirp",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:music_disc_far",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:music_disc_mall",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:music_disc_mellohi",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:music_disc_stal",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:music_disc_strad",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:music_disc_ward",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:music_disc_11",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:music_disc_wait",
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "kubejs:yaoshui",
                    "count": 1
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "kubejs:weinihuizhang_1",
                    "count": 1
                }
            }
        ]
    }), 
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "assembly_machine_5",
        "controllerId": "assembly_machine_mk5",
        "ticks": 420,
        "inputs": [
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "extendedcrafting:ultimate_singularity",
                    "count": 1
                }
            }, 
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "kubejs:ciyueshu",
                    "count": 36
                }
            }, 
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "extendedcrafting:the_ultimate_catalyst",
                    "count": 12
                }
            }, 
            {
                "type": "masterfulmachinery:fluids",
                "perTick": true, 
                "data":{
                    "fluid": "kubejs:baiai_star", 
                    "amount": 960000
                }
            }, 
            {
                "type": "masterfulmachinery:fluids",
                "perTick": true, 
                "data":{
                    "fluid": "kubejs:life_hanliao", 
                    "amount": 240000
                }
            }, 
            {
                "type": "masterfulmachinery:fluids",
                "perTick": true, 
                "data":{
                    "fluid": "kubejs:jifa_chaoshikong_cuihua", 
                    "amount": 800000
                }
            }, 
            {
                "type": "masterfulmachinery:energy",
                "perTick": false, 
                "data":{
                    "amount": 2147483647
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "kubejs:creative_dianlu",
                    "count": 1
                }
            }
        ]
    }), 
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "uu_1",
        "controllerId": "uu",
        "ticks": 1,
        "inputs": [
            {
                "type": "masterfulmachinery:energy",
                "perTick": false, 
                "data":{
                    "amount": 40960
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:fluids",
                "data":{
                    "fluid": "kubejs:uu_matter", 
                    "amount": 1
                }
            }
        ]
    }), 
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "peiyang_1",
        "controllerId": "peiyang",
        "ticks": 10,
        "inputs": [
            {
                "type": "masterfulmachinery:fluids",
                "data":{
                    "fluid": "kubejs:uu_matter", 
                    "amount": 1000
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "eidolon:fungus_sprouts", 
                    "count": 8
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "extrabotany:universalpetal", 
                    "count": 24
                }
            },
            {
                "type": "masterfulmachinery:energy",
                "perTick": true, 
                "data":{
                    "amount": 128000
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:fluids",
                "data":{
                    "fluid": "kubejs:life_hanliao", 
                    "amount": 2000
                }
            }
        ]
    }),
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "taikongdianti_1",
        "controllerId": "taikongdianti",
        "ticks": 100,
        "inputs": [
            {
                "type": "masterfulmachinery:fluids",
                "data":{
                    "fluid": "thermal:refined_fuel", 
                    "amount": 128000
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "mekanism:digital_miner", 
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:energy",
                "perTick": true, 
                "data":{
                    "amount": 1280000
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:fluids",
                "data":{
                    "fluid": "kubejs:stella_fluid", 
                    "amount": 64000
                }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data":{
                    "fluid": "kubejs:baiai_star", 
                    "amount": 64000
                }
            }
        ]
    }),
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "jubian_1",
        "controllerId": "jubian",
        "ticks": 5,
        "inputs": [
            {
                "type": "masterfulmachinery:fluids",
                "data":{
                    "fluid": "kubejs:baiai_star", 
                    "amount": 16
                }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data":{
                    "fluid": "kubejs:uu_matter", 
                    "amount": 16
                }
            },
            {
                "type": "masterfulmachinery:energy",
                "perTick": true, 
                "data":{
                    "amount": 51200
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:fluids",
                "data":{
                    "fluid": "kubejs:jifa_chaoshikong_cuihua", 
                    "amount": 16
                }
            }
        ]
    }),
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "hongmengzhiyan_1",
        "controllerId": "hongmengzhiyan",
        "ticks": 100,
        "inputs": [
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "kubejs:weisuozhushijie", 
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:energy",
                "perTick": true, 
                "data":{
                    "amount": 2560000
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:fluids",
                "data":{
                    "fluid": "kubejs:yuzhousu", 
                    "amount": 1296
                }
            },
            {
                "type": "masterfulmachinery:mekanism_gas",
                "data":{
                    "gas": "mekanism:polonium", 
                    "amount": 128000
                }
            },
            {
                "type": "masterfulmachinery:mekanism_gas",
                "data":{
                    "gas": "mekanism:plutonium", 
                    "amount": 128000
                }
            }
        ]
    }),
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "liangzineng_1",
        "controllerId": "liangzineng",
        "ticks": 20,
        "inputs": [
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "draconicevolution:dragon_heart", 
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:mekanism_gas",
                "data":{
                    "gas": "mekanism:polonium", 
                    "amount": 200000
                }
            },
            {
                "type": "masterfulmachinery:energy",
                "perTick": true, 
                "data":{
                    "amount": 2560000
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "draconicevolution:chaos_shard", 
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:mekanism_gas",
                "data":{
                    "gas": "mekanism:antimatter", 
                    "amount": 120
                }
            }
        ]
    }),
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "liutiyueshuqi_1",
        "controllerId": "liutiyueshuqi",
        "ticks": 5,
        "inputs": [
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "kubejs:zhongji_dianlu", 
                    "count": 2
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "draconicevolution:awakened_core", 
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "minecraft:lodestone", 
                    "count": 16
                }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data":{
                    "fluid": "kubejs:stella_fluid", 
                    "amount": 1000
                }
            },
            {
                "type": "masterfulmachinery:energy",
                "perTick": true, 
                "data":{
                    "amount": 2560000
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:fluids",
                "data":{
                    "fluid": "kubejs:ciyueshu_stella", 
                    "amount": 1000
                }
            }
        ]
    }),
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "duanlu_1",
        "controllerId": "duanlu",
        "ticks": 20,
        "inputs": [
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "kubejs:yuzhousuban", 
                    "count": 3
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "kubejs:zhongji_dianlu", 
                    "count": 1
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "extendedcrafting:the_ultimate_nugget", 
                    "count": 4
                }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data":{
                    "fluid": "kubejs:ciyueshu_stella", 
                    "amount": 432
                }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data":{
                    "fluid": "kubejs:life_hanliao", 
                    "amount": 2000
                }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data":{
                    "fluid": "kubejs:jifa_chaoshikong_cuihua", 
                    "amount": 1500
                }
            },
            {
                "type": "masterfulmachinery:energy",
                "perTick": true, 
                "data":{
                    "amount": 10240000
                }
            }
        ],
        "outputs":[
            {
                "type": "masterfulmachinery:items",
                "data":{
                    "item": "kubejs:ciyueshu", 
                    "count": 1
                }
            }
        ]
    })
})