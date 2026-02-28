val air = <item:minecraft:air>;

<recipetype:astralsorcery:altar>.removeByName("astralsorcery:altar/perk_seal");
<recipetype:astralsorcery:altar>.removeByName("astralsorcery:altar/illumination_powder");
<recipetype:astralsorcery:altar>.removeByName("astralsorcery:altar/ritual_link");
<recipetype:astralsorcery:altar>.removeByName("astralsorcery:altar/nocturnal_powder");

<recipetype:astralsorcery:altar>.addRecipe("altar_test", "RADIANCE", <item:kubejs:xingguangrongqi>, [
[<item:astralsorcery:illumination_powder>, <item:astralsorcery:resonating_gem>, <item:bloodmagic:defaultcrystal>, <item:astralsorcery:resonating_gem>, <item:astralsorcery:illumination_powder>],
[<item:astralsorcery:resonating_gem>, <item:astralsorcery:ritual_link>, <item:astralsorcery:stardust>, <item:astralsorcery:ritual_link>, <item:astralsorcery:resonating_gem>],
[<item:bloodmagic:defaultcrystal>, <item:astralsorcery:stardust>, <item:astralsorcery:perk_seal>, <item:astralsorcery:stardust>, <item:bloodmagic:defaultcrystal>],
[<item:astralsorcery:resonating_gem>, <item:astralsorcery:ritual_link>, <item:astralsorcery:stardust>, <item:astralsorcery:ritual_link>, <item:astralsorcery:resonating_gem>],
[<item:astralsorcery:illumination_powder>, <item:astralsorcery:resonating_gem>, <item:bloodmagic:defaultcrystal>, <item:astralsorcery:resonating_gem>, <item:astralsorcery:illumination_powder>]
], 25, 2500);

<recipetype:astralsorcery:altar>.addRecipe("altar_test4", "DISCOVERY", <item:astralsorcery:illumination_powder> * 4, [
[air, air, air, air, air],
[air, air, <item:thermal:lumium_dust>, air, air],
[air, <item:thermal:lumium_dust>, <item:astralsorcery:aquamarine>, <item:thermal:lumium_dust>, air],
[air, air, <item:thermal:lumium_dust>, air, air],
[air, air, air, air, air]
], 10, 100);

<recipetype:astralsorcery:altar>.addRecipe("altar_test1", "DISCOVERY", <item:astralsorcery:nocturnal_powder> * 4, [
[air, air, air, air, air],
[air, air, <item:immersivepetroleum:petcoke_dust>, air, air],
[air, <item:eidolon:death_essence>, <item:astralsorcery:illumination_powder>, <item:eidolon:death_essence>, air],
[air, air, <item:astralsorcery:resonating_gem>, air, air],
[air, air, air, air, air]
], 10, 200);

<recipetype:astralsorcery:altar>.addRecipe("altar_test2", "ATTUNEMENT", <item:astralsorcery:perk_seal>, [
[<item:astralsorcery:nocturnal_powder>, air, air, air, <item:astralsorcery:nocturnal_powder>],
[air, air, <item:cagedmobs:nether_star_fragment>, air, air],
[air, <item:astralsorcery:stardust>, <item:astralsorcery:colored_lens_spectral>, <item:astralsorcery:stardust>, air],
[air, air, <item:cagedmobs:nether_star_fragment>, air, air],
[<item:astralsorcery:nocturnal_powder>, air, air, air, <item:astralsorcery:nocturnal_powder>]
], 10, 1500);

<recipetype:astralsorcery:altar>.addRecipe("altar_test3", "CONSTELLATION", <item:astralsorcery:ritual_link> * 2, [
[air, <item:eidolon:arcane_gold_nugget>, air, <item:eidolon:arcane_gold_nugget>, air],
[air, <item:eidolon:arcane_gold_ingot>, <item:minecraft:nether_star>, <item:eidolon:arcane_gold_ingot>, air],
[air, <item:astralsorcery:colored_lens_regeneration>, <item:astralsorcery:resonating_gem>, <item:astralsorcery:colored_lens_push>, air],
[air, <item:botania:bifrost_pane>, <item:astralsorcery:stardust>, <item:botania:bifrost_pane>, air],
[air, <item:botania:bifrost_pane>, air, <item:botania:bifrost_pane>, air]
], 10, 200);