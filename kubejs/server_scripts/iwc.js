onEvent('recipes', event => {
  event.remove({output: '3x naturesaura:calling_spirit'})
  event.remove({output: 'create:powdered_obsidian'})
  event.remove({output: '3x immersiveengineering:blastbrick'})
  event.remove({output: 'botania:gaia_ingot'})

  event.custom({
        "type": "interactio:item_lightning",
  "inputs": [ //输入
    {
      "item": "minecraft:skeleton_skull", //输入物品：minecraft:dirt，泥土
      "count": 1 //数量：1
    }
  ],
  "output": { //输出
    "entries": [
      {
        "result": {
          "item": "minecraft:wither_skeleton_skull", //输出物品：minecraft:grass_block，草方块
          "count": 1 //数量：1
        },
        "weight": 1 //几率
      }
    ],
    "empty_weight": 0 //空输出几率
  }
  }),
  event.custom({
        "type": "interactio:item_lightning",
  "inputs": [ //输入
    {
      "item": "naturesaura:infused_iron_block", //输入物品：minecraft:dirt，泥土
      "count": 1 //数量：1
    },
    {
      "item": "naturesaura:tainted_gold_block", //输入物品：minecraft:dirt，泥土
      "count": 1 //数量：1
    }
  ],
  "output": { //输出
    "entries": [
      {
        "result": {
          "item": "naturesaura:calling_spirit", //输出物品：minecraft:grass_block，草方块
          "count": 6 //数量：1
        },
        "weight": 1 //几率
      }
    ],
    "empty_weight": 0 //空输出几率
  }
    }),
  event.custom({
        "type": "interactio:item_anvil_smashing",
  "inputs": [ //输入
    {
      "item": "minecraft:obsidian", //输入物品：minecraft:dirt，泥土
      "count": 1 //数量：1
    }
  ],
  "output": { //输出
    "entries": [
      {
        "result": {
          "item": "create:powdered_obsidian", //输出物品：minecraft:grass_block，草方块
          "count": 3 //数量：1
        },
        "weight": 1 //几率
      }
    ],
    "empty_weight": 0 //空输出几率
  },
  "damage": 1 //铁砧损坏程度
    }),
  event.custom({
        "type": "interactio:item_explode",
  "inputs": [ //输入
    {
      "item": "immersiveengineering:cokebrick", //输入物品：minecraft:dirt，泥土
      "count": 1 //数量：1
    },
    {
      "item": "immersiveengineering:coal_coke", //输入物品：minecraft:dirt，泥土
      "count": 3 //数量：1
    }
  ],
  "output": { //输出
    "entries": [
      {
        "result": {
          "item": "immersiveengineering:blastbrick", //输出物品：minecraft:grass_block，草方块
          "count": 1 //数量：1
        },
        "weight": 1 //几率
      }
    ],
    "empty_weight": 0 //空输出几率
  }
    }),
  event.custom({
        "type": "interactio:item_anvil_smashing",
  "inputs": [ //输入
    {
      "item": "immersiveengineering:ingot_hop_graphite", //输入物品：minecraft:dirt，泥土
      "count": 4 //数量：1
    }
  ],
  "output": { //输出
    "entries": [
      {
        "result": {
          "item": "immersiveengineering:graphite_electrode", //输出物品：minecraft:grass_block，草方块
          "count": 1 //数量：1
        },
        "weight": 1 //几率
      }
    ],
    "empty_weight": 0 //空输出几率
  },
  "damage": 1 //铁砧损坏程度
    }), 
  event.custom({
      "type": "interactio:item_lightning",
  "inputs": [ //输入
  {
    "item": "botania:terrasteel_ingot", //输入物品：minecraft:dirt，泥土
    "count": 1 //数量：1
  }, 
  {
    "item": "botania:life_essence", //输入物品：minecraft:dirt，泥土
    "count": 4 //数量：1
  }
  ],
  "output": { //输出
  "entries": [
    {
      "result": {
        "item": "botania:gaia_ingot", //输出物品：minecraft:grass_block，草方块
        "count": 1 //数量：1
      },
      "weight": 1 //几率
    }
  ],
  "empty_weight": 0 //空输出几率
  }
  }),
  event.custom({
      "type": "interactio:item_lightning",
  "inputs": [ //输入
  {
    "item": "thermal:enderium_ingot", //输入物品：minecraft:dirt，泥土
    "count": 1 //数量：1
  }, 
  {
    "item": "minecraft:netherite_ingot", //输入物品：minecraft:dirt，泥土
    "count": 1 //数量：1
  }, 
  {
    "item": "minecraft:nether_star", //输入物品：minecraft:dirt，泥土
    "count": 1 //数量：1
  }
  ],
  "output": { //输出
  "entries": [
    {
      "result": {
        "item": "occultism:iesnium_ingot", //输出物品：minecraft:grass_block，草方块
        "count": 1 //数量：1
      },
      "weight": 0.7 //几率
    }, 
    {
      "result": {
        "item": "occultism:iesnium_nugget", //输出物品：minecraft:grass_block，草方块
        "count": 5 //数量：1
      },
      "weight": 0.2 //几率
    }
  ],
  "empty_weight": 0.1 //空输出几率
  }
  }), 
  event.custom({
    "type": "interactio:fluid_fluid_transform",
    "items": [{ //物品输入
        "tag": "forge:dusts/lead", //输入物品：minecraft:iron_ingot，铁锭，也可换为标签，将item改为tag，后方改为标签即可
        "count": 1, //数量：1
    },
    { //物品输入
        "tag": "forge:dusts/tin", //输入物品：minecraft:iron_ingot，铁锭，也可换为标签，将item改为tag，后方改为标签即可
        "count": 4, //数量：1
    } 
    ],
    "input": { //原先流体
      "fluid": "kubejs:cool_fluid" //流体ID：water，水
    },
    "output": { //转换后流体
      "entries": [
        {
          "result": {
            "fluid": "kubejs:cold_fluid" //流体ID：minecraft:water，水
          },
          "weight": 1 //转换几率
        }
      ],
      "empty_weight": 0 //流体变为空气几率，删除本行为必定变为流体
    }
  }), 
  event.custom({
      "type": "interactio:item_anvil_smashing",
  "inputs": [ //输入
  {
    "item": "occultism:spirit_attuned_gem", //输入物品：minecraft:dirt，泥土
    "count": 1 //数量：1
  }
  ],
  "output": { //输出
  "entries": [
    {
      "result": {
        "item": "eidolon:soul_shard", //输出物品：minecraft:grass_block，草方块
        "count": 4 //数量：1
      },
      "weight": 1 //几率
    }
  ],
  "empty_weight": 0 //空输出几率
  },
  "damage": 1 //铁砧损坏程度
  })
})