<recipetype:tconstruct:casting_basin>.removeRecipe(<item:tconstruct:smeltery_controller>);

<recipetype:tconstruct:casting_basin>.addItemCastingRecipe("item_casting_basin_test1", <item:tconstruct:seared_heater>, <fluid:kubejs:dragon_fix> * 432, <item:tconstruct:smeltery_controller>, 200, true, false);

<recipetype:tconstruct:alloying>.addRecipe("dragon_fix", [<fluid:kubejs:dragon_fire> * 144, <fluid:kubejs:dragon_ice> * 144, <fluid:kubejs:dragon_light> * 144], <fluid:kubejs:dragon_fix> * 144, 50);
<recipetype:tconstruct:alloying>.addRecipe("coke_fluid", [<fluid:tconstruct:molten_iron> * 250, <fluid:tconstruct:molten_obsidian> * 250, <fluid:tconstruct:molten_clay> * 250, <fluid:tconstruct:molten_debris> * 250], <fluid:kubejs:coke_fluid> * 1000, 50);

<recipetype:tconstruct:melting>.addMeltingRecipe("dragon_fire", <item:iceandfire:dragonsteel_fire_ingot>, <fluid:kubejs:dragon_fire> * 144, 1475, 100);
<recipetype:tconstruct:melting>.addMeltingRecipe("dragon_ice", <item:iceandfire:dragonsteel_ice_ingot>, <fluid:kubejs:dragon_ice> * 144, 1475, 100);
<recipetype:tconstruct:melting>.addMeltingRecipe("dragon_light", <item:iceandfire:dragonsteel_lightning_ingot>, <fluid:kubejs:dragon_light> * 144, 1475, 100);

<recipetype:tconstruct:casting_table>.addItemCastingRecipe("item_casting_table_test", <item:minecraft:polished_andesite_slab>, <fluid:tconstruct:molten_iron> * 16, <item:create:andesite_alloy>, 10, true, false);
<recipetype:tconstruct:casting_table>.addItemCastingRecipe("item_casting_table_test1", <item:minecraft:stone_pressure_plate>, <fluid:tconstruct:molten_gold> * 144, <item:tconstruct:plate_cast>, 160, true, false);
<recipetype:tconstruct:casting_table>.addItemCastingRecipe("item_casting_table_test2", <item:tconstruct:seared_stone>, <fluid:kubejs:coke_fluid> * 1000, <item:immersiveengineering:cokebrick>, 200, true, false);