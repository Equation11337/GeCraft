// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

onEvent('fluid.registry', event => {
	event.create('dragon_fix')
		.textureThick('0xdc143c')
		.bucketColor('0xdc143c')
		.displayName('龙钢混合物')
	
	event.create('dragon_light')
		.textureThick('0x800080')
		.bucketColor('0x800080')
		.displayName('熔融龙霆钢')
	
	event.create('dragon_fire')
		.textureThick('0x0000ff')
		.bucketColor('0x0000ff')
		.displayName('熔融龙炎钢')

	event.create('dragon_ice')
		.textureThick('0x0000ff')
		.bucketColor('0x0000ff')
		.displayName('熔融龙霜钢')

	event.create('coke_fluid')
		.textureThick('0x696969')
		.bucketColor('0x696969')
		.displayName('焦黑催化剂')

	event.create('cold_fluid')
		.textureThick('0x1e90ff')
		.bucketColor('0x1e90ff')
		.displayName('凛冰焊料')

	event.create('cool_fluid')
		.textureThick('0x00bfff')
		.bucketColor('0x00bfff')
		.displayName('极寒之凛冰')
	
	event.create('star_fluid')
		.textureThick('0x87ceeb')
		.bucketColor('0x87ceeb')
		.displayName('升华星光')
	
	event.create('baiai_star')
		.textureThick('0xffffff')
		.bucketColor('0xffffff')
		.displayName('熔融白矮星物质')

	event.create('jifa_chaoshikong_cuihua')
		.textureThick('0x40e0d0')
		.bucketColor('0x40e0d0')
		.displayName('激发的超时空催化剂')

	event.create('life_hanliao')
		.textureThick('0x8b008b')
		.bucketColor('0x8b008b')
		.displayName('活性焊料')
	
	event.create('yuzhousu')
		.textureThick('0x008b8b')
		.bucketColor('0x008b8b')
		.displayName('熔融致密宇宙素')
	
	event.create('ciyueshu_stella')
		.textureThick('0xcd853f')
		.bucketColor('0xcd853f')
		.displayName('磁约束流体恒星物质')

	event.create('stella_fluid')
		.textureThick('0xff8c00')
		.bucketColor('0xff8c00')
		.displayName('熔融致密流体恒星物质')

	event.create('uu_matter')
		.textureThick('0x800080')
		.bucketColor('0x800080')
		.displayName('uu物质')
})

onEvent('item.registry', event => {
	event.create('cangqiong_core')
		.displayName('苍穹核心')

	event.create('guanghui_goujian')
		.displayName('光辉构件')

	event.create('dianlu_mk1')
		.displayName('原始电路')

	event.create('tiankongkuai')
		.displayName('苍穹块')

	event.create('chaomi_jiban')
		.displayName('超密电路基板')

	event.create('ender_daoxian')
		.displayName('谐振导线')

	event.create('terra_core_buwen')
		.displayName('不稳定的泰拉核心')

	event.create('terra_core')
		.displayName('稳定泰拉核心')

	event.create('better_ic2_dianlu')
		.displayName('精工电路')

	event.create('zhichun_core')
		.displayName('含杂至纯核心')

	event.create('real_zhichun_core')
		.displayName('至纯核心')

	event.create('life_core')
		.displayName('生命核心')

	event.create('unknown_dianlu')
		.displayName('未知?电路')
	
	event.create('speed_jiban')
		.displayName('未完善的高速电路基板')

	event.create('speed_jiban_1')
		.displayName('高速电路基板')

	event.create('yuanzuishenhe')
		.displayName('原罪神核')

	event.create('sijibaoyu')
		.displayName('四季宝玉')

	event.create('wuxingyuansu')
		.displayName('五行元素')

	event.create('star_core')
		.displayName('至高星核')

	event.create('weinihuizhang')
		.maxStackSize(1)
		.displayName('伪逆徽章')

	event.create('fengehuizhang')
		.maxStackSize(1)
		.displayName('分割徽章')

	event.create('weinihuizhang_1')
		.maxStackSize(1)
		.displayName('伪逆徽章（未完成）')

	event.create('fengehuizhang_jihuo')
		.glow(true)
		.maxDamage(256)
		.displayName('分割徽章（激活）')

	event.create('mobiwusi_dianlu')
		.displayName('莫比乌斯电路')

	event.create('mobiwusi_ingot')
		.displayName('莫比乌斯“稳定/不稳定”锭')

	event.create('yuzhoucanpian')
		.displayName('宇宙残片')

	event.create('dragon_core')
		.displayName('龙核')

	event.create('zhongji_dianlu')
		.displayName('终极电路')

	event.create('creative_dianlu')
		.displayName('创世电路')

	event.create('ciyueshu')
		.displayName('磁约束流体恒星物质板')

	event.create('yuzhousuban')
		.displayName('宇宙素板')

	event.create('weisuozhushijie')
		.displayName('微缩主世界')

	event.create('taikongdianti_2')
		.displayName('太空电梯强化框架')

	event.create('hongmengzhiyan_2')
		.displayName('鸿蒙之眼强化框架')

	event.create('liangzineng_2')
		.displayName('量子能转换器框架')

	event.create('duanlu_2')
		.displayName('跨纬度锻炉框架')

	event.create('liutiyueshuqi_2')
		.displayName('流体约束器框架')

	event.create('peiyang_2')
		.displayName('无菌培养室栅格方块')

	event.create('yaoshui')
		.displayName('药水混合物')

	event.create('xingguangrongqi')
		.displayName('星光容器')
})

onEvent('block.registry', event => {
	event.create('taikongdianti_1')
		.material('rock')
		.hardness(2.0)
		.displayName('太空电梯强化外壳')

	event.create('hongmengzhiyan_1')
		.material('rock')
		.hardness(2.0)
		.displayName('鸿蒙之眼强化外壳')

	event.create('jubian_1')
		.material('rock')
		.hardness(2.0)
		.displayName('聚变外壳')

	event.create('jubian_2')
		.material('rock')
		.hardness(2.0)
		.displayName('超导线圈')

	event.create('liangzineng_1')
		.material('rock')
		.hardness(2.0)
		.displayName('量子能转换器外壳')

	event.create('uu_1')
		.material('rock')
		.hardness(2.0)
		.displayName('质量生成器外壳')

	event.create('uu_2')
		.material('rock')
		.hardness(2.0)
		.displayName('质量生成器核心')

	event.create('duanlu_1')
		.material('rock')
		.hardness(2.0)
		.displayName('跨纬度锻炉外壳')

	event.create('liutiyueshuqi_1')
		.material('rock')
		.hardness(2.0)
		.displayName('流体约束器外壳')

	event.create('peiyang_1')
		.material('rock')
		.hardness(2.0)
		.displayName('无菌培养室外壳')
})