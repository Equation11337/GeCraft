onEvent('item.registry', event => {
    const ritualDummies = [
        //定义图标神秘学物品
        'craft_kubejs.terra_core',
        'craft_kubejs.real_zhichun_core',
        'craft_occultism.storage_stabilizer_tier1',
        'craft_occultism.huo_ling'
    ];
    ritualDummies.forEach((item) => {
        event.create(`occultism:ritual_dummy/${item}`).type('occultism:ritual_dummy').texture('occultism:item/ritual_dummy');
    });
})