recipes.removeRecipe(<item:immersiveengineering:cokebrick> * 3);
recipes.removeRecipe(<item:create:andesite_alloy>);
craftingTable.removeRecipe(<item:powah:dielectric_paste> * 16);
craftingTable.removeRecipe(<item:powah:dielectric_paste> * 24);
craftingTable.removeRecipe(<tag:items:forge:plates>);
craftingTable.removeRecipe(<tag:items:forge:gears>);
craftingTable.removeByName("pneumaticcraft:speed_upgrade");
craftingTable.addShaped("testnether_gears", <item:thermal:netherite_gear>,
[[<item:minecraft:air>, <item:minecraft:netherite_ingot>, <item:minecraft:air>], 
[<item:minecraft:netherite_ingot>, <item:minecraft:iron_nugget>, <item:minecraft:netherite_ingot>], 
[<item:minecraft:air>, <item:minecraft:netherite_ingot>, <item:minecraft:air>]]);
craftingTable.addShaped("testdiamond_gears", <item:titanium:diamond_gear>,
[[<item:minecraft:air>, <item:minecraft:diamond>, <item:minecraft:air>], 
[<item:minecraft:diamond>, <item:minecraft:iron_nugget>, <item:minecraft:diamond>], 
[<item:minecraft:air>, <item:minecraft:diamond>, <item:minecraft:air>]]);