onEvent('recipes', event => {
    // 100表示100ticks, 也就是5秒. "example:first_machine" 在加载机械配置时确定，"example"是命名空间，first_machine表示准备机器时使用的json文件名(不带文件类型后缀)。
    event.recipes.custommachinery.custom_machine("custom:jubaoyasuoji", 20)
        .requireItem(Item.of("mekanismmatter:universal_matter", 42))
        .requireItem(Item.of("mekanismmatter:naquada_reinforced_tnt", 16))
        .produceItem(Item.of("kubejs:yuzhoucanpian", 3),"slot3");
    event.recipes.custommachinery.custom_machine("custom:jubaoyasuoji", 420)
        .requireItem(Item.of("kubejs:yuzhoucanpian", 42))
        .requireItem(Item.of("thermal:earth_tnt", 64))
        .produceItem(Item.of("kubejs:weisuozhushijie", 1),"slot3");
    event.recipes.custommachinery.custom_machine("custom:jubaoyasuoji", 100)
        .requireItem(Item.of("nuclearcraft:alloy_magnesium_diboride", 64))
        .requireItem(Item.of("thermal:ice_tnt", 12))
        .produceItem(Item.of("kubejs:jubian_2", 1),"slot3");
    event.recipes.custommachinery.custom_machine("custom:qidianrongheji", 20)
        .requireItem(Item.of("kubejs:dianlu_mk1", 1))
        .requireItem(Item.of("kubejs:better_ic2_dianlu", 1))
        .requireItem(Item.of("kubejs:unknown_dianlu", 1))
        .requireItem(Item.of("kubejs:mobiwusi_dianlu", 1))
        .produceItem(Item.of("kubejs:zhongji_dianlu", 4),"slot5");
});