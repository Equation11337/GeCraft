recipes.removeByName("draconicevolution:awakened_draconium_block");
recipes.removeByName("draconicevolution:components/awakened_core");
craftingTable.removeRecipe(<item:draconicevolution:wyvern_core>);
craftingTable.removeRecipe(<item:extendedcrafting:basic_table>);
<recipetype:draconicevolution:fusion_crafting>.addJSONRecipe("test_999", {  
  "result": {      
    "item": "draconicevolution:awakened_draconium_block",                  
    "count":  4                                                          
  },
  "catalyst": {
    "count": 4,                                                          
    "items": [                                                              
        {
        "item":"draconicevolution:draconium_block"
        }
    ],
    "type": "draconicevolution:ingredient_stack"         
  },
  "total_energy": 400000000,                                                
  "tier": "WYVERN",
  "ingredients": [                                                          
    {
      "item": "draconicevolution:wyvern_core"
    },
    {
      "item": "draconicevolution:wyvern_core"
    },
    {
      "item": "draconicevolution:wyvern_core"
    },
    {
      "item": "draconicevolution:wyvern_core"
    },
    {
      "item": "draconicevolution:dragon_heart"
    },
    {
      "item": "extendedcrafting:nether_star_block"
    },
    {
      "item": "powah:nitro_crystal_block"
    },
    {
      "item": "bloodmagic:demonslate"
    }
  ]
});
<recipetype:draconicevolution:fusion_crafting>.addJSONRecipe("test998", {
    "result": {
        "item": "draconicevolution:wyvern_core"         // 聚合核心中心物品
    },
    "catalyst": {                                                      // 需要合成的物品
        "item": "minecraft:nether_star"
    },
    "total_energy": 640000,                                      // 合成所需电量
    "tier": "DRACONIUM",                                    // 合成所需注入器等级  DRACONIUM(基础)   WYVERN(飞龙) DRACONIC(神龙) CHAOTIC(混沌)
    "ingredients": [                                                // 合成所用到的材料
        {
        "item": "draconicevolution:draconium_core"
        },
        {
        "item": "draconicevolution:draconium_core"
        },
        {
        "item": "draconicevolution:draconium_ingot"
        },
        {
        "item": "draconicevolution:draconium_ingot"
        },
        {
        "item": "draconicevolution:draconium_ingot"
        },
        {
        "item": "draconicevolution:draconium_ingot"
        },
        {
        "item": "draconicevolution:draconium_core"
        },
        {
        "item": "draconicevolution:draconium_core"
        }
    ]
});
<recipetype:draconicevolution:fusion_crafting>.addJSONRecipe("test997", {
    "result": {
        "item": "draconicevolution:awakened_core"         // 聚合核心中心物品
    },
    "catalyst": {                                                      // 需要合成的物品
        "item": "cagedmobs:star_infused_netherite_ingot"
    },
    "total_energy": 1280000,                                      // 合成所需电量
    "tier": "WYVERN",                                    // 合成所需注入器等级  DRACONIUM(基础)   WYVERN(飞龙) DRACONIC(神龙) CHAOTIC(混沌)
    "ingredients": [                                                // 合成所用到的材料
        {
        "item": "draconicevolution:wyvern_core"
        },
        {
        "item": "draconicevolution:wyvern_core"
        },
        {
        "item": "envirocore:xerothium"
        },
        {
        "item": "draconicevolution:awakened_draconium_block"
        },
        {
        "item": "astralsorcery:starmetal"
        },
        {
        "item": "occultism:iesnium_block"
        },
        {
        "item": "draconicevolution:wyvern_core"
        },
        {
        "item": "draconicevolution:wyvern_core"
        }
    ]
});
<recipetype:draconicevolution:fusion_crafting>.addJSONRecipe("test996", {
    "result": {
        "item": "kubejs:dragon_core"         // 聚合核心中心物品
    },
    "catalyst": {                                                      // 需要合成的物品
        "item": "draconicevolution:awakened_core"
    },
    "total_energy": 66666666,                                      // 合成所需电量
    "tier": "CHAOTIC",                                    // 合成所需注入器等级  DRACONIUM(基础)   WYVERN(飞龙) DRACONIC(神龙) CHAOTIC(混沌)
    "ingredients": [                                                // 合成所用到的材料
        {
        "item": "draconicevolution:awakened_core"
        },
        {
        "item": "draconicevolution:awakened_draconium_block"
        },
        {
        "item": "draconicevolution:infused_obsidian"
        },
        {
        "item": "lazierae2:speculative_processor"
        },
        {
        "item": "powah:capacitor_nitro"
        },
        {
        "item": "draconicevolution:reactor_prt_rotor_full"
        },
        {
        "item": "draconicevolution:reactor_prt_stab_frame"
        },
        {
        "item": "draconicevolution:reactor_prt_focus_ring"
        }
    ]
});
<recipetype:draconicevolution:fusion_crafting>.addJSONRecipe("test995", {
    "result": {
        "item": "extendedcrafting:basic_table"         // 聚合核心中心物品
    },
    "catalyst": {                                                      // 需要合成的物品
        "item": "extendedcrafting:basic_catalyst"
    },
    "total_energy": 666666666,                                      // 合成所需电量
    "tier": "CHAOTIC",                                    // 合成所需注入器等级  DRACONIUM(基础)   WYVERN(飞龙) DRACONIC(神龙) CHAOTIC(混沌)
    "ingredients": [                                                // 合成所用到的材料
        {
        "item": "extendedcrafting:basic_component"
        },
        {
        "item": "extendedcrafting:basic_component"
        },
        {
        "item": "extendedcrafting:black_iron_block"
        },
        {
        "item": "extendedcrafting:black_iron_block"
        },
        {
        "item": "extendedcrafting:luminessence_block"
        },
        {
        "item": "extendedcrafting:luminessence_block"
        },
        {
        "item": "extendedcrafting:basic_component"
        },
        {
        "item": "extendedcrafting:basic_component"
        }
    ]
});
<recipetype:draconicevolution:fusion_crafting>.addJSONRecipe("test994", {
    "result": {
        "item": "draconicevolution:creative_op_capacitor"         // 聚合核心中心物品
    },
    "catalyst": {                                                      // 需要合成的物品
        "item": "kubejs:creative_dianlu"
    },
    "total_energy": 2147483647,                                      // 合成所需电量
    "tier": "CHAOTIC",                                    // 合成所需注入器等级  DRACONIUM(基础)   WYVERN(飞龙) DRACONIC(神龙) CHAOTIC(混沌)
    "ingredients": [                                                // 合成所用到的材料
        {
        "item": "draconicevolution:chaotic_core"
        },
        {
        "item": "draconicevolution:chaotic_core"
        },
        {
        "item": "draconicevolution:energy_core"
        },
        {
        "item": "draconicevolution:energy_core"
        },
        {
        "item": "draconicevolution:reactor_stabilizer"
        },
        {
        "item": "draconicevolution:reactor_stabilizer"
        },
        {
        "item": "draconicevolution:chaotic_core"
        },
        {
        "item": "draconicevolution:chaotic_core"
        }
    ]
});