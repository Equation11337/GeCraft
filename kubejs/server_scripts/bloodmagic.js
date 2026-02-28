onEvent('recipes', event => {
    event.remove({output: 'bloodmagic:blankslate'})
    event.recipes.bloodmagic.altar('kubejs:life_core', 'kubejs:real_zhichun_core').upgradeLevel(3).altarSyphon(15000).consumptionRate(100).drainRate(0)
    event.recipes.bloodmagic.altar('bloodmagic:blankslate', 'elementalcraft:whiterock').altarSyphon(1000).consumptionRate(20).drainRate(0)
    event.recipes.bloodmagic.soulforge('mana-and-artifice:chimerite_gem', ['mana-and-artifice:arcane_compound', 'eidolon:lesser_soul_gem', 'bloodmagic:blankslate', 'elementalcraft:earthcrystal']).minimumDrain(2048).drain(64)
  })