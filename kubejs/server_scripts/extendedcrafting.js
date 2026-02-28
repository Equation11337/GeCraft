onEvent('recipes', (event) => { 
    event.remove({output: 'extendedcrafting:advanced_table'}),
    event.remove({output: 'extendedcrafting:elite_table'}),
    event.remove({output: 'extendedcrafting:ender_crafter'}),
    event.remove({output: 'extendedcrafting:compressor'}),
    event.remove({output: 'extendedcrafting:frame'}),
    event.remove({output: 'extendedcrafting:ultimate_table'}),
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABA",
          "CDC",
          "ABA"
        ],
        "key": {
          "A": {
            "item": "extendedcrafting:advanced_component"
          },
          "B": {
            "item": "mekanism:ultimate_control_circuit"
          },
          "C": {
            "item": "extendedcrafting:basic_table"
          },
          "D": {
            "item": "extendedcrafting:advanced_catalyst"
          }
        },
        "result": {
          "item": "extendedcrafting:advanced_table"
        }
    }),
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABABA",
            "BCDCB",
            "ADEDA",
            "BCDCB",
            "ABABA"
        ],
        "key": {
            "A": {
            "item": "extendedcrafting:elite_component"
            },
            "B": {
            "item": "nuclearcraft:part_plate_elite"
            },
            "C": {
            "item": "extendedcrafting:advanced_table"
            },
            "D": {
            "item": "kubejs:mobiwusi_dianlu"
            },
            "E": {
            "item": "extendedcrafting:elite_catalyst"
            }
        },
        "result": {
            "item": "extendedcrafting:elite_table"
        }
    }), 
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABCACBA",
            "BDEDEDB",
            "CEFGFEC",
            "ADGHGDA",
            "CEFGFEC",
            "BDEDEDB",
            "ABCACBA"
        ],
        "key": {
            "A": {
            "item": "extendedcrafting:ender_star"
            },
            "B": {
            "item": "extendedcrafting:enhanced_ender_ingot"
            },
            "C": {
            "item": "extendedcrafting:ultimate_component"
            },
            "D": {
            "item": "extendedcrafting:elite_table"
            },
            "E": {
            "item": "extendedcrafting:crystaltine_block"
            },
            "F": {
            "item": "draconicevolution:chaotic_energy_core"
            },
            "G": {
            "item": "draconicevolution:chaotic_core"
            },
            "H": {
            "item": "extendedcrafting:ultimate_catalyst"
            }
        },
        "result": {
            "item": "extendedcrafting:ultimate_table"
        }
    }), 
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAAAA",
            "BCDCDCB",
            "BDEFEDB",
            "BCFGFCB",
            "BDEFEDB",
            "BCDCDCB",
            "BBBBBBB"
        ],
        "key": {
            "A": {
            "item": "envirocore:xerothium"
            },
            "B": {
            "item": "extendedcrafting:ender_ingot"
            },
            "C": {
            "item": "extendedcrafting:ender_component"
            },
            "D": {
            "item": "extendedcrafting:crystaltine_ingot"
            },
            "E": {
            "item": "extendedcrafting:advanced_table"
            },
            "F": {
            "item": "mana-and-artifice:greater_mote_ender"
            },
            "G": {
            "item": "extendedcrafting:ender_catalyst"
            }
        },
        "result": {
            "item": "extendedcrafting:ender_crafter"
        }
    }), 
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABBBBBBBA",
          "BACCCCCAB",
          "BCADEDACB",
          "BCDAFADCB",
          "BCEFGFECB",
          "BCDAFADCB",
          "BCADEDACB",
          "BACCCCCAB",
          "ABBBBBBBA"
        ],
        "key": {
          "A": {
            "item": "extendedcrafting:black_iron_slate"
          },
          "B": {
            "item": "miniutilities:ethereal_glass"
          },
          "C": {
            "item": "extendedcrafting:enhanced_ender_ingot"
          },
          "D": {
            "item": "mekanism:sps_casing"
          },
          "E": {
            "item": "mekanismmatter:trinium_reactor_casing"
          },
          "F": {
            "item": "extendedcrafting:crystaltine_block"
          },
          "G": {
            "item": "extendedcrafting:ender_star_block"
          }
        },
        "result": {
          "item": "extendedcrafting:frame"
        }
    }), 
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABBBBBBBA",
          "BACDEDCAB",
          "BCAFGFACB",
          "BDFAHAFDB",
          "BEGHIHGEB",
          "BDFAHAFDB",
          "BCAFGFACB",
          "BACDEDCAB",
          "ABBBBBBBA"
        ],
        "key": {
          "A": {
            "item": "create:sticky_mechanical_piston"
          },
          "B": {
            "item": "extendedcrafting:crystaltine_component"
          },
          "C": {
            "item": "ftbic:compressor"
          },
          "D": {
            "item": "nuclearcraft:pressuriser"
          },
          "E": {
            "item": "mekanism:ultimate_compressing_factory"
          },
          "F": {
            "item": "extendedcrafting:crystaltine_catalyst"
          },
          "G": {
            "item": "kubejs:mobiwusi_dianlu"
          },
          "H": {
            "item": "extendedcrafting:frame"
          },
          "I": {
            "item": "extrabotany:theuniverse"
          }
        },
        "result": {
          "item": "extendedcrafting:compressor"
        }
    })
    event.custom({
            "type": "extendedcrafting:shapeless_table",
            "ingredients": [
              {
                "item": "minecraft:netherite_ingot"
              },
              {
                "item": "astralsorcery:starmetal_ingot"
              },
              {
                "item": "botania:terrasteel_ingot"
              },
              {
                "item": "create:brass_ingot"
              },
              {
                "item": "draconicevolution:awakened_draconium_ingot"
              },
              {
                "item": "elementalcraft:fireite_ingot"
              },
              {
                "item": "extendedcrafting:black_iron_ingot"
              },
              {
                "item": "extendedcrafting:ender_ingot"
              },
              {
                "item": "extendedcrafting:enhanced_ender_ingot"
              },
              {
                "item": "extendedcrafting:crystaltine_ingot"
              },
              {
                "item": "extrabotany:photonium"
              },
              {
                "item": "extrabotany:shadowium"
              },
              {
                "item": "extrabotany:aerialite"
              },
              {
                "item": "immersiveengineering:ingot_hop_graphite"
              },
              {
                "item": "kubejs:mobiwusi_ingot"
              },
              {
                "item": "lazierae2:fluix_steel_ingot"
              },
              {
                "item": "mekanism:ingot_refined_obsidian"
              },
              {
                "item": "mekanism:ingot_refined_glowstone"
              },
              {
                "item": "mekanismmatter:trinium_ingot"
              },
              {
                "item": "naturesaura:sky_ingot"
              },
              {
                "item": "occultism:iesnium_ingot"
              },
              {
                "item": "pneumaticcraft:ingot_iron_compressed"
              },
              {
                "item": "projectred-core:red_ingot"
              },
              {
                "item": "projectred-core:electrotine_ingot"
              },
              {
                "item": "thermal:invar_ingot"
              },
              {
                "item": "thermal:signalum_ingot"
              },
              {
                "item": "thermal:lumium_ingot"
              },
              {
                "item": "thermal:enderium_ingot"
              },
              {
                "item": "tconstruct:slimesteel_ingot"
              },
              {
                "item": "tconstruct:rose_gold_ingot"
              },
              {
                "item": "tconstruct:pig_iron_ingot"
              },
              {
                "item": "tconstruct:queens_slime_ingot"
              },
              {
                "item": "tconstruct:manyullyn_ingot"
              },
              {
                "item": "tconstruct:hepatizon_ingot"
              },
              {
                "item": "industrialforegoing:pink_slime_ingot"
              },
              {
                "item": "cagedmobs:star_infused_netherite_ingot"
              },
              {
                "item": "eidolon:pewter_ingot"
              },
              {
                "item": "eidolon:arcane_gold_ingot"
              },
              {
                "item": "nuclearcraft:alloy_hsla_steel"
              },
              {
                "item": "nuclearcraft:alloy_silicon_carbide"
              },
              {
                "item": "nuclearcraft:ingot_graphite"
              },
              {
                "item": "nuclearcraft:ingot_manganese"
              },
              {
                "item": "nuclearcraft:ingot_oxide_thorium"
              },
              {
                "item": "nuclearcraft:ingot_oxide_uranium"
              },
              {
                "item": "nuclearcraft:alloy_zircaloy"
              },
              {
                "item": "elementalcraft:swift_alloy_ingot"
              },
              {
                "item": "elementalcraft:drenched_iron_ingot"
              },
              {
                "item": "draconicevolution:draconium_ingot"
              },
              {
                "item": "botania:elementium_ingot"
              },
              {
                "item": "nuclearcraft:alloy_extreme"
              },
              {
                "item": "nuclearcraft:alloy_hard_carbon"
              },
              {
                "item": "nuclearcraft:alloy_tough"
              },
              {
                "item": "nuclearcraft:alloy_lead_platinum"
              },
              {
                "item": "nuclearcraft:alloy_lithium_manganese_dioxide"
              },
              {
                "item": "nuclearcraft:alloy_magnesium_diboride"
              },
              {
                "item": "nuclearcraft:alloy_shibuichi"
              },
              {
                "item": "nuclearcraft:alloy_thermoconducting"
              },
              {
                "item": "nuclearcraft:alloy_tough"
              },
              {
                "item": "naturesaura:infused_iron"
              },
              {
                "item": "naturesaura:tainted_gold"
              },
              {
                "item": "extendedcrafting:redstone_ingot"
              },
              {
                "item": "botania:manasteel_ingot"
              },
              {
                "item": "minecraft:iron_ingot"
              },
              {
                "item": "minecraft:gold_ingot"
              },
              {
                "item": "mana-and-artifice:vinteum_ingot"
              },
              {
                "item": "mekanism:ingot_osmium"
              },
              {
                "item": "nuclearcraft:ingot_lithium"
              },
              {
                "item": "nuclearcraft:ingot_thorium"
              },
              {
                "item": "nuclearcraft:ingot_boron"
              },
              {
                "item": "nuclearcraft:ingot_magnesium"
              },
              {
                "item": "tconstruct:cobalt_ingot"
              },
              {
                "tag": "forge:ingots/nickel"
              },
              {
                "tag": "forge:ingots/silver"
              },
              {
                "tag": "forge:ingots/uranium"
              },
              {
                "tag": "forge:ingots/lead"
              },
              {
                "tag": "forge:ingots/tin"
              },
              {
                "tag": "forge:ingots/copper"
              },
              {
                "tag": "forge:ingots/steel"
              },
              {
                "tag": "forge:ingots/constantan"
              },
              {
                "tag": "forge:ingots/electrum"
              },
              {
                "tag": "forge:ingots/bronze"
              }
            ],
            "result": {
              "item": "extendedcrafting:the_ultimate_ingot"
            }
    })
})