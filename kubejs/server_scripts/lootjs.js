onEvent("lootjs", (event) => {
    event
        .addEntityLootModifier("minecraft:wither")
        .killedByPlayer()
        .randomChanceWithEnchantment("minecraft:looting", [0.1, 0.15, 0.2, 0.3])
        .thenAdd("kubejs:fengehuizhang");
});