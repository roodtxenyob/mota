var images = new ImageLoader();
var Mota = {
	config: {
		//配置
		blockSize: 32,
		//单位块大小
		keys: {
			//只有注册过的按键才会触发事件
			13: 'enter', //弹窗关闭
			33: 'flying-up', //飞行魔杖 上
			34: 'flying-down', //飞行魔杖 下
			38: 'top', //人物移动上
			39: 'right', //人物移动右
			40: 'down', //人物移动下
			37: 'left', //人物移动左
			70: 'F', //冰冻魔法
			71: 'G', //记事本
			72: 'H', //怪物手册
			90: 'Z', //镐
			88: 'X', //地震卷轴
			67: 'C', //炸弹
			86: 'V', //圣水
			75: "K", //魔法钥匙
			66: 'B', //向上飞行器
			78: 'N', //向下飞行器
			77: 'M', //中心飞行器
			89: 'Y', //弹窗关闭并购买
			49: '1', //商店购买血液
			97: '1', //商店购买血液
			50: '2', //商店购买攻击力
			98: '2', //商店购买攻击力
			51: '3', //商店购买防御力
			52: '4', //记事本上一页
			100: '4', //记事本上一页
			53: '5', //记事本下一页
			101: '5', //记事本下一页
			99: '3', //商店购买防御力
			83: 'S', //游戏存档
			76: 'L', //游戏独挡
			82: 'R' //重新开始
		},
	},
	MonsterRenderingContainer: null,
	messageIsActive: false,//对话框是否激活
	messageOldMan: false,//老人对话
	messageMonster: false,//怪物对话
	isInCombat: false,//是否为战斗状态
	messageTrader: false,
	isShowNpd: false,
	isShowManual: false,
	pageNumber: 1,
	gameState: {
		//游戏状态
		currentFloor: {
			//当前楼层
			code: '1',
			name: 'tier1'
		},

		maps: {
			//地图
		},
		actor: {
			//角色相关
			C: 0, //购买物品次数
			oldPrice: 20, //价格
			Y: 0,
			X: 0,
			//坐标
			direction: 'bottom',
			//角色方向
			HP: 1000, //生命
			ATK: 10, //攻击力
			DEF: 10, //防御力
			gold: 200, //金币
			bag: {
				//背包
				"yellowKey": 1, //--- 黄钥匙
				"blueKey":1, //--- 蓝钥匙
				"redKey": 1, //--- 红钥匙
				"magicKey": 1, //--- 魔法钥匙
				"redPotion": 1, //--- 红药水
				"bluePotion": 1, //--- 蓝药水
				"redGem": 1, //--- 红宝石
				"blueGem": 1, //--- 蓝宝石

				"manual": 1, //--- 怪物手册
				"notepad": 1, //--- 记事本
				"luckyCoins": 1, //--- 幸运金币
				"cross": 1, //--- 十字架
				"flyingWand": 1, //--- 飞行魔杖



				"ironSword": 1, //--- 铁剑
				"ironShield": 1, //--- 铁盾
				"silverSword": 1, //--- 银剑
				"silverShield": 1, //--- 银盾
				"knightSword": 1, //--- 骑士剑
				"knightShield": 1, //--- 骑士盾
				"sacredSword": 1, //--- 圣剑
				"sacredShield": 1, //--- 圣盾
				"TrueSacredSword": 1, //--- 神圣剑
				"TrueSacredShield": 0, //--- 神圣盾

				"pickax": 1, //--- 镐
				"superMaigcMattok": 1, //--- 地震卷轴
				"snowCrystal": 1, //--- 冰冻魔法
				"bomb": 1, //--- 炸弹
				"dragonSlayer": 1, //--- 屠龙匕
				"flyingUp": 1, //--- 向上飞行器
				"flyingDown": 1, //--- 向下飞行器
				"flyingCenter": 1, //--- 中心飞行器
				"holyWater": 1, //--- 圣水

			}
		}
	},

	util: {
		//工具类
		unique: function (arr) {
			//数组去重
			return Array.from(new Set(arr))
		},
		autoline: function textPrewrap(ctx, content, drawX, drawY, lineHeight, lineMaxWidth, lineNum) {
			//自动换行
			var drawTxt = ''; // 当前绘制的内容
			var drawLine = 1; // 第几行开始绘制
			var drawIndex = 0; // 当前绘制内容的索引
			
			ctx.font = "14px bold 雅黑";
			//渲染的字体
			ctx.fillStyle = "#ffffff";
			//渲染的颜色
			ctx.textAlign = "left";
			// 设置水平对齐方式
			ctx.textBaseline = "middle";
			
			// 判断内容是否可以一行绘制完毕
			if (ctx.measureText(content).width <= lineMaxWidth) {
				ctx.fillText(content.substring(drawIndex, i), drawX, drawY);
			} else {
				for (var i = 0; i <= content.length; i++) {
					drawTxt += content[i];
					if (ctx.measureText(drawTxt).width > lineMaxWidth) {
						if (drawLine === lineNum) {
							// 最后一行添加省略号
							ctx.fillText(content.substring(drawIndex, i), drawX, drawY);
							break;
						} else {
							// 不是最后一行的情况
							ctx.fillText(content.substring(drawIndex, i + 1), drawX, drawY);
							drawIndex = i + 1; // 记录当前行最后一个字符串的下一个idnex，用于绘制下行第一个字
							drawLine += 1; // 行数+1
							drawY += lineHeight; // 绘制内容的y坐标对应增加行高
							drawTxt = ''; // 重置绘制的内容
						}
					}
				}
			}
		},


		clone: function(obj) {
			//深拷贝
			var o = obj instanceof Array ? [] : {};
			for (var k in obj) {
				if (k !== 'mota' && k != 'images') {
					o[k] = typeof obj[k] === 'object' ? this.clone(obj[k]) : obj[k];
				}
			}
			return o;
		},
		render: function(img, sx, sy, x, y) {
			//普通的渲染
			var bs = Mota.config.blockSize;
			gameBody.drawImage(img, sx, sy, bs, bs, x, y, bs, bs);
		},
		renderBoss: function(img, sx, sy, x, y) {
			//特殊boss的渲染
			var bbs = Mota.config.blockSize * 3;
			gameBody.drawImage(img, sx, sy, bbs, bbs, x, y, bbs, bbs);
		},
		clear: function(X, Y) {
			//清除图片以形成视觉上的动销
			gameBody.clearRect(32 * X, 32 * Y, 32, 32);
			Mota.util.render(images.floor, Resource.adorn.floor.base.pos * 32, 0, 32 * X, 32 * Y);
		},
		clearBoos: function(X, Y) {
			//清除图片以形成视觉上的动效
			gameBody.clearRect(32 * X, 32 * Y, 96, 96);
			Mota.util.render(images.floor, Resource.adorn.floor.base.pos * 32, 0, 32 * X, 32 * Y);
			Mota.util.render(images.floor, Resource.adorn.floor.base.pos * 32, 0, 32 * (X + 1), 32 * Y);
			Mota.util.render(images.floor, Resource.adorn.floor.base.pos * 32, 0, 32 * (X + 2), 32 * Y);
			Mota.util.render(images.floor, Resource.adorn.floor.base.pos * 32, 0, 32 * X, 32 * (Y + 1));
			Mota.util.render(images.floor, Resource.adorn.floor.base.pos * 32, 0, 32 * (X + 1), 32 * (Y + 1));
			Mota.util.render(images.floor, Resource.adorn.floor.base.pos * 32, 0, 32 * (X + 2), 32 * (Y + 1));
			Mota.util.render(images.floor, Resource.adorn.floor.base.pos * 32, 0, 32 * X, 32 * (Y + 2));
			Mota.util.render(images.floor, Resource.adorn.floor.base.pos * 32, 0, 32 * (X + 1), 32 * (Y + 2));
			Mota.util.render(images.floor, Resource.adorn.floor.base.pos * 32, 0, 32 * (X + 2), 32 * (Y + 2));
		},
		renderMap: function(floor) {
			if (!Mota.gameState.maps[floor]) {
				//不存在时克隆
				Mota.gameState.maps[floor] = Mota.util.clone(GLOBAL_MAPS[floor]);
				//深拷贝第当前楼层的地图数组
			}
			let flag = 0;
			for (var Y = 0; Y < Mota.gameState.maps[floor].length; Y++) {
				for (var X = 0; X < Mota.gameState.maps[floor][Y].length; X++) {
					Mota.util.render(images.floor, Resource.adorn.floor.base.pos * 32, 0, 32 * X, 32 * Y);
				}
			}
			//渲染地图
			for (var Y = 0; Y < Mota.gameState.maps[floor].length; Y++) {
				for (var X = 0; X < Mota.gameState.maps[floor][Y].length; X++) {
					switch (Mota.gameState.maps[floor][Y][X]) {
						//-----------------------开始渲染场景----------------------
						case Resource.adorn.floor.base.ID:
							Mota.util.render(images.floor, Resource.adorn.floor.base.pos * 32, 0, 32 * X, 32 * Y);
							break;
						case Resource.adorn.floor.wall.ID:
							Mota.util.render(images.floor, Resource.adorn.floor.wall.pos * 32, 0, 32 * X, 32 * Y);
							break;
						case Resource.adorn.floor.wall.ID:
							Mota.util.render(images.floor, Resource.adorn.floor.wall.pos * 32, 0, 32 * X, 32 * Y);
							break;
						case Resource.adorn.floor.empty.ID:
							Mota.util.render(images.floor, Resource.adorn.floor.empty.pos * 32, 0, 32 * X, 32 * Y);
							break;
						case Resource.adorn.floor.trap.ID:
							Mota.util.render(images.floor, Resource.adorn.floor.trap.pos * 32, 0, 32 * X, 32 * Y);
							break;
						case Resource.adorn.floor.attack.ID:
							Mota.util.render(images.floor, Resource.adorn.floor.attack.pos * 32, 0, 32 * X, 32 * Y);
							break;
							//以上为地板机关 floor
						case Resource.adorn.wall.base.ID:
							Mota.util.render(images.wall, Resource.adorn.wall.base.pos * 32, 0, 32 * X, 32 * Y);
							break;
						case Resource.adorn.wall.ironDoor.ID:
							Mota.util.render(images.wall, Resource.adorn.wall.ironDoor.pos * 32, 0, 32 * X, 32 * Y);
							break;
							//以上为墙 wall
						case Resource.adorn.door.yellow.ID:
							Mota.util.render(images.door, Resource.adorn.door.yellow.pos * 32, 0, 32 * X, 32 * Y);
							break;
						case Resource.adorn.door.blue.ID:
							Mota.util.render(images.door, Resource.adorn.door.blue.pos * 32, 0, 32 * X, 32 * Y);
							break;
						case Resource.adorn.door.red.ID:
							Mota.util.render(images.door, Resource.adorn.door.red.pos * 32, 0, 32 * X, 32 * Y);
							break;
						case Resource.adorn.door.red.ID:
							Mota.util.render(images.door, Resource.adorn.door.red.pos * 32, 0, 32 * X, 32 * Y);
							break;
						case Resource.adorn.door.flower.ID:
							Mota.util.render(images.door, Resource.adorn.door.flower.pos * 32, 0, 32 * X, 32 * Y);
							break;
							//以上为门 door
						case Resource.prop.store.fragments[0].ID:
							Mota.util.render(images.store, Resource.prop.store.fragments[0].posX * 32, 0, 32 * X, 32 * Y);
							break;
						case Resource.prop.store.fragments[1].ID:
							Mota.util.render(images.store, Resource.prop.store.fragments[1].posX * 32, 0, 32 * X, 32 * Y);
							break;
						case Resource.prop.store.fragments[2].ID:
							Mota.util.render(images.store, Resource.prop.store.fragments[2].posX * 32, 0, 32 * X, 32 * Y);
							break;
							//以上为商店的静态部分
						case Resource.adorn.stairs.down.ID:
							Mota.util.render(images.stairs, Resource.adorn.stairs.down.pos * 32, 0, 32 * X, 32 * Y);
							break;
						case Resource.adorn.stairs.up.ID:
							Mota.util.render(images.stairs, Resource.adorn.stairs.up.pos * 32, 0, 32 * X, 32 * Y);
							break;
							//以上为楼梯 stairs
							//-----------------------场景渲染完毕----------------------
							//-----------------------开始渲染消耗品----------------------
						case Resource.prop.key.yellow.ID:
							Mota.util.render(images.key, Resource.prop.key.yellow.posX * 32, Resource.prop.key.yellow.posY * 32, 32 * X,
								32 * Y);
							break;
						case Resource.prop.key.blue.ID:
							Mota.util.render(images.key, Resource.prop.key.blue.posX * 32, Resource.prop.key.blue.posY * 32, 32 * X, 32 *
								Y);
							break;
						case Resource.prop.key.red.ID:
							Mota.util.render(images.key, Resource.prop.key.red.posX * 32, Resource.prop.key.red.posY * 32, 32 * X, 32 * Y);
							break;
						case Resource.prop.key.magic.ID:
							Mota.util.render(images.key, Resource.prop.key.magic.posX * 32, Resource.prop.key.magic.posY * 32, 32 * X, 32 *
								Y);
							break;
							//以上为钥匙 key
						case Resource.prop.potion.red.ID:
							Mota.util.render(images.potion, Resource.prop.potion.red.pos * 32, 0, 32 * X, 32 * Y);
							break;
						case Resource.prop.potion.blue.ID:
							Mota.util.render(images.potion, Resource.prop.potion.blue.pos * 32, 0, 32 * X, 32 * Y);
							break;
							//以上为药水 potion
						case Resource.prop.gem.red.ID:
							Mota.util.render(images.gem, Resource.prop.gem.red.pos * 32, 0, 32 * X, 32 * Y);
							break;
						case Resource.prop.gem.blue.ID:
							Mota.util.render(images.gem, Resource.prop.gem.blue.pos * 32, 0, 32 * X, 32 * Y);
							break;
							//以上为红宝石
							//-----------------------消耗品渲染完毕----------------------
							//-----------------------开始渲染装备道具----------------------
						case Resource.prop.tool_always.manual.ID:
							Mota.util.render(images.toolAlways, Resource.prop.tool_always.manual.posX * 32, Resource.prop.tool_always.manual
								.posY * 32, 32 * X, 32 * Y);
							break;
						case Resource.prop.tool_always.notepad.ID:
							Mota.util.render(images.toolAlways, Resource.prop.tool_always.notepad.posX * 32, Resource.prop.tool_always.notepad
								.posY * 32, 32 * X, 32 * Y);
							break;
						case Resource.prop.tool_always.luckyCoins.ID:
							Mota.util.render(images.toolAlways, Resource.prop.tool_always.luckyCoins.posX * 32, Resource.prop.tool_always.luckyCoins
								.posY * 32, 32 * X, 32 * Y);
							break;
						case Resource.prop.tool_always.cross.ID:
							Mota.util.render(images.toolAlways, Resource.prop.tool_always.cross.posX * 32, Resource.prop.tool_always.cross
								.posY * 32, 32 * X, 32 * Y);
							break;
						case Resource.prop.tool_always.flyingWand.ID:
							Mota.util.render(images.toolAlways, Resource.prop.tool_always.flyingWand.posX * 32, Resource.prop.tool_always.flyingWand
								.posY * 32, 32 * X, 32 * Y);
							break;
						case Resource.prop.tool_always.effects.ID:
							Mota.util.render(images.toolAlways, Resource.prop.tool_always.effects.posX * 32, Resource.prop.tool_always.effects
								.posY * 32, 32 * X, 32 * Y);
							break;
							//以上为永久装备道具
						case Resource.prop.tool_limit.pickax.ID:
							Mota.util.render(images.toolLimit, Resource.prop.tool_limit.pickax.posX * 32, Resource.prop.tool_limit.pickax.posY *
								32, 32 * X, 32 * Y);
							break;
						case Resource.prop.tool_limit.superMaigcMattok.ID:
							Mota.util.render(images.toolLimit, Resource.prop.tool_limit.superMaigcMattok.posX * 32, Resource.prop.tool_limit
								.superMaigcMattok.posY * 32, 32 * X, 32 * Y);
							break;
						case Resource.prop.tool_limit.snowCrystal.ID:
							Mota.util.render(images.toolLimit, Resource.prop.tool_limit.snowCrystal.posX * 32, Resource.prop.tool_limit.snowCrystal
								.posY * 32, 32 * X, 32 * Y);
							break;
						case Resource.prop.tool_limit.bomb.ID:
							Mota.util.render(images.toolLimit, Resource.prop.tool_limit.bomb.posX * 32, Resource.prop.tool_limit.bomb.posY *
								32, 32 * X, 32 * Y);
							break;
						case Resource.prop.tool_limit.dragonSlayer.ID:
							Mota.util.render(images.toolLimit, Resource.prop.tool_limit.dragonSlayer.posX * 32, Resource.prop.tool_limit.dragonSlayer
								.posY * 32, 32 * X, 32 * Y);
							break;
						case Resource.prop.tool_limit.flying.up.ID:
							Mota.util.render(images.toolLimit, Resource.prop.tool_limit.flying.up.posX * 32, Resource.prop.tool_limit.flying
								.up.posY * 32, 32 * X, 32 * Y);
							break;
						case Resource.prop.tool_limit.flying.down.ID:
							Mota.util.render(images.toolLimit, Resource.prop.tool_limit.flying.down.posX * 32, Resource.prop.tool_limit.flying
								.down.posY * 32, 32 * X, 32 * Y);
							break;
						case Resource.prop.tool_limit.flying.center.ID:
							Mota.util.render(images.toolLimit, Resource.prop.tool_limit.flying.center.posX * 32, Resource.prop.tool_limit.flying
								.center.posY * 32, 32 * X, 32 * Y);
							break;
						case Resource.prop.tool_limit.holyWater.ID:
							Mota.util.render(images.toolLimit, Resource.prop.tool_limit.holyWater.posX * 32, Resource.prop.tool_limit.holyWater
								.posY * 32, 32 * X, 32 * Y);
							break;
							//以上为消耗装备道具
						case Resource.weapon.category[0].sword.ID:
							Mota.util.render(images.weapon, Resource.weapon.category[0].sword.posX * 32, Resource.weapon.category[0].sword
								.posY * 32, 32 * X, 32 * Y);
							break;
						case Resource.weapon.category[0].shield.ID:
							Mota.util.render(images.weapon, Resource.weapon.category[0].shield.posX * 32, Resource.weapon.category[0].shield
								.posY * 32, 32 * X, 32 * Y);
							break;
						case Resource.weapon.category[1].sword.ID:
							Mota.util.render(images.weapon, Resource.weapon.category[1].sword.posX * 32, Resource.weapon.category[1].sword
								.posY * 32, 32 * X, 32 * Y);
							break;
						case Resource.weapon.category[1].shield.ID:
							Mota.util.render(images.weapon, Resource.weapon.category[1].shield.posX * 32, Resource.weapon.category[1].shield
								.posY * 32, 32 * X, 32 * Y);
							break;
						case Resource.weapon.category[2].sword.ID:
							Mota.util.render(images.weapon, Resource.weapon.category[2].sword.posX * 32, Resource.weapon.category[2].sword
								.posY * 32, 32 * X, 32 * Y);
							break;
						case Resource.weapon.category[2].shield.ID:
							Mota.util.render(images.weapon, Resource.weapon.category[2].shield.posX * 32, Resource.weapon.category[2].shield
								.posY * 32, 32 * X, 32 * Y);
							break;
						case Resource.weapon.category[3].sword.ID:
							Mota.util.render(images.weapon, Resource.weapon.category[3].sword.posX * 32, Resource.weapon.category[3].sword
								.posY * 32, 32 * X, 32 * Y);
							break;
						case Resource.weapon.category[3].shield.ID:
							Mota.util.render(images.weapon, Resource.weapon.category[3].shield.posX * 32, Resource.weapon.category[3].shield
								.posY * 32, 32 * X, 32 * Y);
							break;
						case Resource.weapon.category[4].sword.ID:
							Mota.util.render(images.weapon, Resource.weapon.category[4].sword.posX * 32, Resource.weapon.category[4].sword
								.posY * 32, 32 * X, 32 * Y);
							break;
						case Resource.weapon.category[4].shield.ID:
							Mota.util.render(images.weapon, Resource.weapon.category[4].shield.posX * 32, Resource.weapon.category[4].shield
								.posY * 32, 32 * X, 32 * Y);
							break;
							//-----------------------装备道具渲染完毕----------------------
						default:
							break;
					}
				}
			}
			Mota.MonsterRenderingContainer = setInterval(() => {
				for (var Y = 0; Y < Mota.gameState.maps[floor].length; Y++) {
					for (var X = 0; X < Mota.gameState.maps[floor][Y].length; X++) {
						switch (Mota.gameState.maps[floor][Y][X]) {
							//X和Y是坐标
							//开始渲染怪物
							case Resource.figure.monster.SLaiTe.category[0].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.sLaiTe, flag, Resource.figure.monster.SLaiTe.category[0].pos * 32, 32 * X, 32 * Y);
								break;
							case Resource.figure.monster.SLaiTe.category[1].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.sLaiTe, flag, Resource.figure.monster.SLaiTe.category[1].pos * 32, 32 * X, 32 * Y);
								break;
							case Resource.figure.monster.SLaiTe.category[2].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.sLaiTe, flag, Resource.figure.monster.SLaiTe.category[2].pos * 32, 32 * X, 32 * Y);
								break;
							case Resource.figure.monster.SLaiTe.category[3].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.sLaiTe, flag, Resource.figure.monster.SLaiTe.category[3].pos * 32, 32 * X, 32 * Y);
								break;
								//以上是史莱姆
							case Resource.figure.monster.Ghost.category[0].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.ghost, flag, Resource.figure.monster.Ghost.category[0].pos * 32, 32 * X, 32 * Y);
								break;
							case Resource.figure.monster.Ghost.category[1].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.ghost, flag, Resource.figure.monster.Ghost.category[1].pos * 32, 32 * X, 32 * Y);
								break;
							case Resource.figure.monster.Ghost.category[2].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.ghost, flag, Resource.figure.monster.Ghost.category[2].pos * 32, 32 * X, 32 * Y);
								break;
							case Resource.figure.monster.Ghost.category[3].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.ghost, flag, Resource.figure.monster.Ghost.category[3].pos * 32, 32 * X, 32 * Y);
								break;
								//以上是骷髅
							case Resource.figure.monster.Bat.category[0].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.bat, flag, Resource.figure.monster.Bat.category[0].pos * 32, 32 * X, 32 * Y);
								break;
							case Resource.figure.monster.Bat.category[1].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.bat, flag, Resource.figure.monster.Bat.category[1].pos * 32, 32 * X, 32 * Y);
								break;
							case Resource.figure.monster.Bat.category[2].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.bat, flag, Resource.figure.monster.Bat.category[2].pos * 32, 32 * X, 32 * Y);
								break;
							case Resource.figure.monster.Bat.category[3].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.vampire, flag, Resource.figure.monster.Bat.category[3].pos * 32, 32 * X, 32 * Y);
								break;
								//以上是蝙蝠
							case Resource.figure.monster.Magician.category[0].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.magician, flag, Resource.figure.monster.Magician.category[0].pos * 32, 32 * X, 32 *
									Y);
								break;
							case Resource.figure.monster.Magician.category[1].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.magician, flag, Resource.figure.monster.Magician.category[1].pos * 32, 32 * X, 32 *
									Y);
								break;
							case Resource.figure.monster.Magician.category[2].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.magician, flag, Resource.figure.monster.Magician.category[2].pos * 32, 32 * X, 32 *
									Y);
								break;
							case Resource.figure.monster.Magician.category[3].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.magician, flag, Resource.figure.monster.Magician.category[3].pos * 32, 32 * X, 32 *
									Y);
								break;
								//以上是法师
							case Resource.figure.monster.SwordMan.category[0].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.swordMan, flag, Resource.figure.monster.SwordMan.category[0].pos * 32, 32 * X, 32 *
									Y);
								break;
								//以上是双手剑士
							case Resource.figure.monster.Guard.category[0].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.guard, flag, Resource.figure.monster.Guard.category[0].pos * 32, 32 * X, 32 * Y);
								break;
							case Resource.figure.monster.Guard.category[1].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.guard, flag, Resource.figure.monster.Guard.category[1].pos * 32, 32 * X, 32 * Y);
								break;
							case Resource.figure.monster.Guard.category[2].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.guard, flag, Resource.figure.monster.Guard.category[2].pos * 32, 32 * X, 32 * Y);
								break;
								//以上为卫兵
							case Resource.figure.monster.Orcish.category[0].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.orcish, flag, Resource.figure.monster.Orcish.category[0].pos * 32, 32 * X, 32 * Y);
								break;
							case Resource.figure.monster.Orcish.category[1].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.orcish, flag, Resource.figure.monster.Orcish.category[1].pos * 32, 32 * X, 32 * Y);
								break;
								//以上为兽人
							case Resource.figure.monster.Knight.category[0].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.knight, flag, Resource.figure.monster.Knight.category[0].pos * 32, 32 * X, 32 * Y);
								break;
							case Resource.figure.monster.Knight.category[1].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.knight, flag, Resource.figure.monster.Knight.category[1].pos * 32, 32 * X, 32 * Y);
								break;
								//以上为骑士
							case Resource.figure.monster.Malphite.category[0].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.malphite, flag, Resource.figure.monster.Malphite.category[0].pos * 32, 32 * X, 32 *
									Y);
								break;
								//以上为石头人
							case Resource.figure.monster.Specter.category[0].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.specter, flag, Resource.figure.monster.Specter.category[0].pos * 32, 32 * X, 32 * Y);
								break;
								//以上为幽灵
							case Resource.figure.monster.Exorcist.category[0].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.exorcist, flag, Resource.figure.monster.Exorcist.category[0].pos * 32, 32 * X, 32 *
									Y);
								break;
								//以上为大法师
							case Resource.figure.monster.Warrior.category[0].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.warrior, flag, Resource.figure.monster.Warrior.category[0].pos * 32, 32 * X, 32 * Y);
								break;
								//以上为战士
							case Resource.figure.monster.MagicGuard.category[0].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.magicGuard, flag, Resource.figure.monster.MagicGuard.category[0].pos * 32, 32 * X,
									32 * Y);
								break;
								//以上为魔法警卫
							case Resource.figure.monster.BlackKnight.category[0].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.blackKnight, flag, Resource.figure.monster.BlackKnight.category[0].pos * 32, 32 * X,
									32 * Y);
								break;
								//以上为黑暗骑士
							case Resource.figure.monster.BOSS.category[0].ID:
								Mota.util.clearBoos(X, Y);
								Mota.util.renderBoss(images.bigBoss, flag * 3, Resource.figure.monster.BOSS.category[0].pos * 96, 32 * X,
									32 * Y);
								break;
							case Resource.figure.monster.BOSS.category[1].ID:
								Mota.util.clearBoos(X, Y);
								Mota.util.renderBoss(images.bigBoss, flag * 3, Resource.figure.monster.BOSS.category[1].pos * 96, 32 * X,
									32 * Y);
								break;
								//以上为大型boss
							case Resource.figure.monster.Devil.category[0].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.devil, flag, Resource.figure.monster.Devil.category[0].pos * 32, 32 * X, 32 * Y);
								break;
							case Resource.figure.monster.Devil.category[1].ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.devil, flag, Resource.figure.monster.Devil.category[0].pos * 32, 32 * X, 32 * Y);
								break;
								//以上为真假魔王
								//开始渲染npc和商店
							case Resource.figure.princess.ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.princess, flag, Resource.figure.princess.direction.bottom.posY * 32, 32 * X, 32 * Y);
								break;
								//公主
							case Resource.figure.helper.seer.ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.helper, flag, Resource.figure.helper.seer.pos * 32, 32 * X, 32 * Y);
								break;
								//老人
							case Resource.figure.helper.trader.ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.helper, flag, Resource.figure.helper.trader.pos * 32, 32 * X, 32 * Y);
								break;
								//商人
							case Resource.figure.helper.thief.ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.helper, flag, Resource.figure.helper.thief.pos * 32, 32 * X, 32 * Y);
								break;
								//小偷
							case Resource.figure.helper.elf.ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.helper, flag, Resource.figure.helper.elf.pos * 32, 32 * X, 32 * Y);
								break;
								//并不存在的精灵
							case Resource.prop.store.base.ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.store, flag, Resource.prop.store.base.posY * 32, 32 * X, 32 * Y);
								break;
								//商店的动态部分
							case Resource.adorn.scene.magma.ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.scene, flag, Resource.adorn.scene.magma.posY * 32, 32 * X, 32 * Y);
								break;
							case Resource.adorn.scene.star.ID:
								Mota.util.clear(X, Y);
								Mota.util.render(images.scene, flag, Resource.adorn.scene.star.posY * 32, 32 * X, 32 * Y);
								break;
								//以上为星星岩浆
							default:
								break;
						}
					}
				}
				if (flag == 96) {
					flag = 0;
				}
				flag = flag + 32;
				//会动的怪物
			}, 130)
			//渲染静态的场景和道具	
		},

		clearMap: function() {
			gameBody.clearRect(0, 0, 352, 352);
		},

		renderKey: function(img, sx, sy, x, y) {
			//普通的渲染
			var bs = Mota.config.blockSize;
			key.drawImage(img, sx, sy, bs, bs, x, y, bs, bs);
		},
		renderKeyText: function() {
			//调用以更新钥匙数量
			key.font = "18px bold 雅黑";
			//渲染的字体
			key.fillStyle = "#ffffff";
			//渲染的颜色
			key.textAlign = "right";
			// 设置水平对齐方式
			key.textBaseline = "middle";
			// 设置垂直对齐方式
			key.fillText(Mota.gameState.actor.bag.yellowKey + " 把", 124, 19);
			key.fillText(Mota.gameState.actor.bag.blueKey + " 把", 124, 51);
			key.fillText(Mota.gameState.actor.bag.redKey + " 把", 124, 83);
		},
		renderActorState: function() {
			//调用以更新角色状态
			actorState.font = "18px bold 雅黑";
			//渲染的字体
			actorState.fillStyle = "#ffffff";
			//渲染的颜色
			actorState.textAlign = "right";
			// 设置水平对齐方式
			actorState.textBaseline = "middle";
			// 设置垂直对齐方式
			actorState.fillText("第 " + Mota.gameState.currentFloor.code + " 层	", 126, 19);

			actorState.textAlign = "left";
			actorState.fillText("生命  " + Mota.gameState.actor.HP, 32, 51);
			actorState.fillText("攻击  " + Mota.gameState.actor.ATK, 32, 83);
			actorState.fillText("防御  " + Mota.gameState.actor.DEF, 32, 115);
			actorState.fillText("金币  " + Mota.gameState.actor.gold, 32, 147);
		},

		clearActorState: function() {
			//清除角色状态贴图
			actorState.clearRect(70, 0, 100, 160);
		},

		clearKey: function() {
			//清除图片以形成视觉上的动销
			key.clearRect(50, 0, 50, 100);
		},

		renderWeaponText: function(text, x, y) {
			//调用以更新武器文字状态
			weapon.font = "18px bold 雅黑";
			//渲染的字体
			weapon.fillStyle = "#ffffff";
			//渲染的颜色
			weapon.textAlign = "left";
			// 设置水平对齐方式
			weapon.textBaseline = "middle";
			// 设置垂直对齐方式	
			weapon.fillText(text, x, y)
		},

		renderWeaponimg: function(img, sx, sy, x, y) {
			weapon.drawImage(img, sx, sy, 32, 32, x, y, 32, 32);
		},

		renderWeapon: function() {
			if (Mota.gameState.actor.bag.TrueSacredSword > 0) {
				Mota.util.renderWeaponimg(images.weapon, Resource.weapon.category[4].sword.posX * 32, Resource.weapon.category[4]
					.sword.posY * 32, 25, 16);
				Mota.util.renderWeaponText("神之剑", 74, 32);
			} else if (Mota.gameState.actor.bag.sacredSword > 0) {
				Mota.util.renderWeaponimg(images.weapon, Resource.weapon.category[3].sword.posX * 32, Resource.weapon.category[3]
					.sword.posY * 32, 25, 16);
				Mota.util.renderWeaponText("圣光长剑", 74, 32);
			} else if (Mota.gameState.actor.bag.knightSword > 0) {
				Mota.util.renderWeaponimg(images.weapon, Resource.weapon.category[2].sword.posX * 32, Resource.weapon.category[2]
					.sword.posY * 32, 25, 16);
				Mota.util.renderWeaponText("骑士长剑", 74, 32);
			} else if (Mota.gameState.actor.bag.silverSword > 0) {
				Mota.util.renderWeaponimg(images.weapon, Resource.weapon.category[1].sword.posX * 32, Resource.weapon.category[1]
					.sword.posY * 32, 25, 16);
				Mota.util.renderWeaponText("银质长剑", 74, 32);
			} else if (Mota.gameState.actor.bag.ironSword > 0) {
				Mota.util.renderWeaponimg(images.weapon, Resource.weapon.category[0].sword.posX * 32, Resource.weapon.category[0]
					.sword.posY * 32, 25, 16);
				Mota.util.renderWeaponText("铁质长剑", 74, 32);
			} else {
				Mota.util.renderWeaponText("无武器", 74, 32);
			}

			if (Mota.gameState.actor.bag.TrueSacredShield > 0) {
				Mota.util.renderWeaponimg(images.weapon, Resource.weapon.category[4].shield.posX * 32, Resource.weapon.category[4]
					.shield.posY * 32, 25, 49);
				Mota.util.renderWeaponText("阿瓦隆", 74, 64);
			} else if (Mota.gameState.actor.bag.sacredShield > 0) {
				Mota.util.renderWeaponimg(images.weapon, Resource.weapon.category[3].shield.posX * 32, Resource.weapon.category[3]
					.shield.posY * 32, 25, 49);
				Mota.util.renderWeaponText("圣光盾牌", 74, 64);
			} else if (Mota.gameState.actor.bag.knightShield > 0) {
				Mota.util.renderWeaponimg(images.weapon, Resource.weapon.category[2].shield.posX * 32, Resource.weapon.category[2]
					.shield.posY * 32, 25, 49);
				Mota.util.renderWeaponText("骑士盾牌", 74, 64);
			} else if (Mota.gameState.actor.bag.silverShield > 0) {
				Mota.util.renderWeaponimg(images.weapon, Resource.weapon.category[1].shield.posX * 32, Resource.weapon.category[1]
					.shield.posY * 32, 25, 49);
				Mota.util.renderWeaponText("银质盾牌", 74, 64);
			} else if (Mota.gameState.actor.bag.ironShield > 0) {
				Mota.util.renderWeaponimg(images.weapon, Resource.weapon.category[0].shield.posX * 32, Resource.weapon.category[0]
					.shield.posY * 32, 25, 49);
				Mota.util.renderWeaponText("铁质盾牌", 74, 64);
			} else {
				Mota.util.renderWeaponText("无防具", 74, 64);
			}

		},

		clearWeapon: function() {
			weapon.clearRect(0, 0, 200, 200);
		},

		renderPropText: function(text, x, y) {
			//调用以更新武器文字状态
			prop.font = "18px bold 雅黑";
			//渲染的字体
			prop.fillStyle = "#ffffff";
			//渲染的颜色
			prop.textAlign = "left";
			// 设置水平对齐方式
			prop.textBaseline = "middle";
			// 设置垂直对齐方式	
			prop.fillText(text, x, y)
		},

		renderPropImg: function(img, sx, sy, x, y) {
			prop.drawImage(img, sx, sy, 32, 32, x, y, 32, 32);
		},

		renderProp: function() {
			//调用更新背包信息
			Mota.util.renderPropText("永久道具", 0, 19);
			Mota.util.renderPropText("限次道具", 0, 83);
			Mota.util.renderPropText("自动道具", 0, 179);
			//永久道具
			if (Mota.gameState.actor.bag.manual != 0) {
				Mota.util.renderPropImg(images.toolAlways, Resource.prop.tool_always.manual.posX * 32, Resource.prop.tool_always.manual
					.posY * 32, 6, 32);
			}
			if (Mota.gameState.actor.bag.notepad != 0) {
				Mota.util.renderPropImg(images.toolAlways, Resource.prop.tool_always.notepad.posX * 32, Resource.prop.tool_always
					.notepad.posY * 32, 42, 32);
			}
			if (Mota.gameState.actor.bag.flyingWand != 0) {
				Mota.util.renderPropImg(images.toolAlways, Resource.prop.tool_always.flyingWand.posX * 32, Resource.prop.tool_always
					.flyingWand.posY * 32, 78, 32);
			}
			if (Mota.gameState.actor.bag.snowCrystal != 0) {
				Mota.util.renderPropImg(images.toolLimit, Resource.prop.tool_limit.snowCrystal.posX * 32, Resource.prop.tool_limit
					.snowCrystal.posY * 32, 114, 32);
			}
			//限次道具
			if (Mota.gameState.actor.bag.pickax != 0) {
				Mota.util.renderPropImg(images.toolLimit, Resource.prop.tool_limit.pickax.posX * 32, Resource.prop.tool_limit.pickax
					.posY * 32, 6, 96);
			}
			if (Mota.gameState.actor.bag.holyWater != 0) {
				Mota.util.renderPropImg(images.toolLimit, Resource.prop.tool_limit.holyWater.posX * 32, Resource.prop.tool_limit.holyWater
					.posY * 32, 42, 96);
			}
			if (Mota.gameState.actor.bag.superMaigcMattok != 0) {
				Mota.util.renderPropImg(images.toolLimit, Resource.prop.tool_limit.superMaigcMattok.posX * 32, Resource.prop.tool_limit
					.superMaigcMattok.posY * 32, 78, 96);
			}
			if (Mota.gameState.actor.bag.bomb != 0) {
				Mota.util.renderPropImg(images.toolLimit, Resource.prop.tool_limit.bomb.posX * 32, Resource.prop.tool_limit.bomb.posY *
					32, 114, 96);
			}
			if (Mota.gameState.actor.bag.magicKey != 0) {
				Mota.util.renderPropImg(images.key, Resource.prop.key.magic.posX * 32, Resource.prop.key.magic.posY * 32, 6, 130);
			}
			if (Mota.gameState.actor.bag.flyingUp != 0) {
				Mota.util.renderPropImg(images.toolLimit, Resource.prop.tool_limit.flying.up.posX * 32, Resource.prop.tool_limit.flying
					.up.posY * 32, 42, 130);
			}
			if (Mota.gameState.actor.bag.flyingDown != 0) {
				Mota.util.renderPropImg(images.toolLimit, Resource.prop.tool_limit.flying.down.posX * 32, Resource.prop.tool_limit
					.flying.down.posY * 32, 78, 130);
			}
			if (Mota.gameState.actor.bag.flyingCenter != 0) {
				Mota.util.renderPropImg(images.toolLimit, Resource.prop.tool_limit.flying.center.posX * 32, Resource.prop.tool_limit
					.flying.center.posY * 32, 114, 130);
			}
			//自动道具
			if (Mota.gameState.actor.bag.dragonSlayer != 0) {
				Mota.util.renderPropImg(images.toolLimit, Resource.prop.tool_limit.dragonSlayer.posX * 32, Resource.prop.tool_limit
					.dragonSlayer.posY * 32, 6, 194);
			}
			if (Mota.gameState.actor.bag.cross != 0) {
				Mota.util.renderPropImg(images.toolAlways, Resource.prop.tool_always.cross.posX * 32, Resource.prop.tool_always.cross
					.posY * 32, 42, 194);
			}
			if (Mota.gameState.actor.bag.luckyCoins != 0) {
				Mota.util.renderPropImg(images.toolAlways, Resource.prop.tool_always.luckyCoins.posX * 32, Resource.prop.tool_always
					.luckyCoins.posY * 32, 78, 194);
			}
		},

		clearProp: function() {
			prop.clearRect(0, 0, 500, 500);
		},

		renderMessageText: function(text, x, y, size) {
			message.font = size + "px bold 雅黑";
			//渲染的字体
			message.fillStyle = "#ffffff";
			//渲染的颜色
			message.textAlign = "left";
			// 设置水平对齐方式
			message.textBaseline = "middle";
			// 设置垂直对齐方式	
			message.fillText(text, x, y);
		},

		claerMessage: function() {
			message.clearRect(0, 0, 500, 500);
		},

		renderShop: function() {
			//商店可以增加获取攻击力防御力..生命值
			Mota.util.claerMessage();
			//清除
			let f = Math.floor(((Mota.gameState.currentFloor.code * 1) + 9) / 10);
			// 商店售价规律：
			// 新的售价=旧的价格+（20 *已购次数）
			Mota.util.renderMessageText("获取以下提升需要消耗你" + Mota.gameState.actor.oldPrice + "金币", 20, 20, 16);
			Mota.util.renderMessageText("按下数字 1 键: 血量 + " + f * 200, 40, 57, 14);
			Mota.util.renderMessageText("按下数字 2 键: 攻击力 + " + f * 2, 40, 84, 14);
			Mota.util.renderMessageText("按下数字 3 键: 防御力 + " + f * 4, 40, 111, 14);
			Mota.util.renderMessageText("按下回车键继续游戏", 150, 150, 12);
			//渲染文字
			Mota.messageIsActive = true;
			msg.style.display = "block";
			//显示信息框
		},



		renderOldMan: function() {
			//渲染老人说的话
			Mota.util.claerMessage();
			Mota.util.renderMessageText("智者:", 12, 10, 14);
			Mota.util.autoline(message,"    "+Resource.notepad[Mota.gameState.currentFloor.name].seer.message,10,30,25,250,22);
			Mota.util.renderMessageText("按下回车键继续游戏", 150, 150, 12);
			Mota.messageOldMan = true;
			msg.style.display = "block";
		},
		
		renderThief:function(){
			Mota.util.claerMessage();
			Mota.util.renderMessageText("小偷:", 12, 10, 14);
			Mota.util.autoline(message,"    "+Resource.notepad[Mota.gameState.currentFloor.name].thief.message,10,30,25,250,22);
			Mota.util.renderMessageText("按下回车键继续游戏", 150, 150, 12);
			Mota.messageOldMan = true;
			msg.style.display = "block";
		},
		
		renderMonstertext: function(text1,text2){
			//渲染怪物说的话
			Mota.util.claerMessage();
			Mota.util.renderMessageText(text1, 12, 10, 14);
			Mota.util.renderMessageText(text2, 20, 30, 14);
			Mota.util.renderMessageText("按下回车键继续游戏", 150, 150, 12);
			Mota.messageMonster = true;
			msg.style.display = "block";
		},
		
		renderTrader: function() {
			//渲染商人交易框
			Mota.util.claerMessage();
			Mota.util.renderMessageText("商人:", 12, 10, 14);
			Mota.util.autoline(message,"    "+Resource.notepad[Mota.gameState.currentFloor.name].trader.message,10,30,25,250,22);
			Mota.util.renderMessageText("Y键购买", 100, 150, 12);
			Mota.util.renderMessageText("按下回车键继续游戏", 150, 150, 12);
			Mota.messageTrader = true;
			msg.style.display = "block";
		},
			
		save: function(){
			//存档
			let saveString = JSON.stringify(Mota.gameState);
			window.localStorage.setItem("save",saveString);
		},
		
		readSave: function(){
			clearInterval(Mota.MonsterRenderingContainer);
			Mota.util.clearMap();
			Mota.gameState = JSON.parse(window.localStorage.getItem("save"));
			
			// Mota.util.clear(Mota.gameState.actor.Y,Mota.gameState.actor.X);
			// //删除人物
			// Mota.gameState.maps[Mota.gameState.currentFloor.name][Mota.gameState.actor.X][Mota.gameState.actor.Y] = 0;
			
			Mota.util.clearKey();
			//更新key画布上的钥匙数量renderActorState
			Mota.util.renderKeyText();
			//-----------------------
			Mota.util.clearActorState();
			//更新画布上角色状态贴图
			Mota.util.renderActorState();
			//-----------------------
			Mota.util.clearProp();
			//更新画布上背包贴图
			Mota.util.renderProp();
			//-----------------------
			Mota.util.clearWeapon();
			//更新画布上装备信息贴图
			Mota.util.renderWeapon();

			Mota.util.renderMap(Mota.gameState.currentFloor.name);
			//重绘地图
			Mota.util.render(images.actor, 0, Resource.figure.actor.direction.bottom.posY * 32, (Mota.gameState.actor.Y * 32),  (Mota.gameState.actor.X * 32));
		},
		
		reGame:function(){
			//重玩
			location.reload();
		},
		
		
		showNpdText: function(){
			npd.font = "20px bold 雅黑";
			//渲染的字体
			npd.fillStyle = "#ffffff";
			//渲染的颜色
			npd.textAlign = "left";
			// 设置水平对齐方式
			npd.textBaseline = "middle";
			// 设置垂直对齐方式	
			npd.fillText("第" + Mota.pageNumber + "层", 20, 20);
			
			npd.font = "16px bold 雅黑";
			npd.fillText("(4)键上一页 (5)键下一页 回车继续游戏", 50, 320);
			if(Resource.notepad["tier" + Mota.pageNumber] && Resource.notepad["tier" + Mota.pageNumber].seer){
				Mota.util.autoline(npd,"    "+Resource.notepad["tier" + Mota.pageNumber].seer.message,10,100,25,320,22);
			}else{
				Mota.util.autoline(npd,"没有记录",10,100,25,320,22);
			}
			
		},
		
		randerNpd: function(){
			npd.clearRect(0, 0, 500, 500);
			Mota.util.showNpdText();
			Mota.isShowNpd = true;
			npdbox.style.display = "block";
		},
		
		closeNpd: function(){
			Mota.isShowNpd = false;
			npdbox.style.display = "none";
		},
		
		lastPage: function(){
			if(Mota.pageNumber != 1){
				Mota.pageNumber--
			}
			npd.clearRect(0, 0, 500, 500);
			Mota.util.showNpdText();
		},
		
		nextPage: function(){
			npd.clearRect(0, 0, 500, 500);
			Mota.util.showNpdText();
			if(Mota.pageNumber != 50){
				Mota.pageNumber++
			}
		},
		renderManual: function(){
			npd.clearRect(0, 0, 500, 500);
			let arr1 = [];
			for(let i = 0;i < Mota.gameState.maps[Mota.gameState.currentFloor.name].length; i++){
				for(let j = 0;j < Mota.gameState.maps[Mota.gameState.currentFloor.name][i].length; j++){
					if(Mota.gameState.maps[Mota.gameState.currentFloor.name][i][j] >= 50 && Mota.gameState.maps[Mota.gameState.currentFloor.name][i][j] <= 83){
						arr1.push(Mota.gameState.maps[Mota.gameState.currentFloor.name][i][j]);
					}
				}
			}
			let arr2 = Mota.util.unique(arr1);
			//数组去重
			for(let i = 0; i < arr2.length; i++){
				let t = "";
				if(actor.computer(actor.MotaCode.monster[arr2[i]]) == "禁止攻击"){
					t = "你无法攻击它!";
				}else{
					t = "你将会受到"+ actor.computer(actor.MotaCode.monster[arr2[i]]) +"点伤害";
				}
				Mota.util.renderManualText(t, 20, (i+1)*40);
			}
			for(let j = 0; j < arr2.length; j++){
				let name = actor.MotaCode.monster[arr2[j]].name;
				let hp = actor.MotaCode.monster[arr2[j]].HP;
				let atk = actor.MotaCode.monster[arr2[j]].ATK;
				let edf = actor.MotaCode.monster[arr2[j]].DEF;
				let jinbi = actor.MotaCode.monster[arr2[j]].gold;
				Mota.util.renderManualText(`[${name}] 生命:${hp} 攻击力:${atk} 防御力:${edf} 金币:${jinbi}`,20,(j+1)*40+15);
			}
			Mota.isShowManual = true;
			npdbox.style.display = "block";
			Mota.util.renderManualText("回车继续游戏", 260, 320);
		},
		
		closeManual: function(){
			Mota.isShowManual = false;
			npdbox.style.display = "none";
		},
		
		renderManualText: function(text, x, y) {
			npd.font = "12px bold 雅黑";
			//渲染的字体
			npd.fillStyle = "#ffffff";
			//渲染的颜色
			npd.textAlign = "left";
			// 设置水平对齐方式
			npd.textBaseline = "middle";
			// 设置垂直对齐方式	
			npd.fillText(text, x, y);
		},
	}
}
var gameBody = document.getElementById("board").getContext("2d");

images.bigBoss.onload = function() {
	Mota.util.renderMap(Mota.gameState.currentFloor.name);
	//传一个当前楼层名称,就会渲染出当前楼层


	Mota.util.render(images.actor, 0, Resource.figure.actor.direction.bottom.posY * 32, 5 * 32, 10 * 32);
	//主角登场!
	Mota.gameState.maps[Mota.gameState.currentFloor.name][10][5] = 110;
	//将角色添加到地图里去
	Mota.gameState.actor.X = 10;
	Mota.gameState.actor.Y = 5;
	//纪录角色的坐标

	//console.log(Mota.gameState.maps[Mota.gameState.currentFloor.name])
	//console.log(Mota.gameState.actor.X,Mota.gameState.actor.Y )
}

var key = document.getElementById("key").getContext("2d");
images.key.onload = function() {
	Mota.util.renderKey(images.key, Resource.prop.key.yellow.posX * 32, Resource.prop.key.yellow.posY * 32, 32 * 0, 32 *
		0);
	Mota.util.renderKey(images.key, Resource.prop.key.blue.posX * 32, Resource.prop.key.blue.posY * 32, 32 * 0, 32 * 1);
	Mota.util.renderKey(images.key, Resource.prop.key.red.posX * 32, Resource.prop.key.red.posY * 32, 32 * 0, 32 * 2);
	Mota.util.renderKeyText();
}

var actorState = document.getElementById("actor").getContext("2d");
//渲染生命金币攻击力防御力
Mota.util.renderActorState();


var weapon = document.getElementById("weapon").getContext("2d");
//渲染装备
images.weapon.onload = Mota.util.renderWeapon;

var prop = document.getElementById("prop").getContext("2d");
//渲染道具
images.toolLimit.onload = Mota.util.renderProp;

var msg = document.getElementsByClassName("mt-msg")[0];
//获取信息框
var message = document.getElementById("message").getContext("2d");

var npdbox = document.getElementsByClassName("npd")[0];
var npd = document.getElementById("man").getContext("2d");


addEventListener('keydown', (event) => {
	//注册键盘事件
	//console.log(event.keyCode)
	if (Mota.config.keys[event.keyCode]) {
		keyPress(event.keyCode);
	}
})

function keyPress(keyCode) {
	if (Mota.messageIsActive == true) {
		//信息框激活时不触发其他键盘事件只可以触发关闭
		switch (keyCode) {
			case 13:
				actor.closeMessage();
				break;
			case 49:
				actor.addHP();
				break;
			case 50:
				actor.addATK();
				break;
			case 51:
				actor.addDEF();
				break;
			default:
				break;
		}
	} else if (Mota.messageOldMan == true) {
		switch (keyCode) {
			case 13:
				actor.closeMessageOldMan();
				break;
			default:
				break;
		}
	} else if(Mota.messageMonster == true) {
		switch (keyCode) {
			case 13:
				actor.closeMessageMonster();
				break;
			default:
				break;
		}
	} else if(Mota.isInCombat == true){
		console.log("正在战斗")
	} else if(Mota.messageTrader == true){
		switch (keyCode) {
			case 13:
				actor.closeMessageTrader();
				break;
			case 89:
				actor.buyAndClose();
				break;
			default:
				break;
		}
	} else if(Mota.isShowNpd == true){
		switch (keyCode) {
			case 13:
				Mota.util.closeNpd();
				break;
			case 52:
				Mota.util.lastPage();
				break;
			case 53:
				Mota.util.nextPage();
			default:
				break;
		}
	} else if(Mota.isShowManual == true){
		switch (keyCode) {
			case 13:
				Mota.util.closeManual();
				break;
			default:
				break;
		}
	} else {
		//未激活时生效
		switch (keyCode) {
			case 37:
				actor.left();
				break;
			case 38:
				actor.top();
				break;
			case 39:
				actor.right();
				break;
			case 40:
				actor.bottom();
				break;
				//人物的上下左右移动
			case 83:
				//保存进度
				Mota.util.save();
				break;
			case 76:
				//读取进度
				Mota.util.readSave();
				break;
			case 82:
				//重新开始
				Mota.util.reGame();
				break;
			case 70:
				//冰冻魔法
				actor.ice();
				break;
			case 86:
				//圣水
				actor.holyWater();
				break;
			case 88:
				//地震卷轴
				actor.superMaigcMattok();
				break;
			case 75:
				//魔法钥匙
				actor.magic();
				break;
			case 90:
				//稿
				actor.pickax();
				break;
			case 67:
				//炸弹
				actor.bomb();
				break;
			case 33:
				//飞行魔杖上
				actor.flyingWandUp();
				break
			case 34:
				//飞行魔杖下
				actor.flyingWandDown();
				break
			case 66:
				//一次性飞行器上
				actor.flyingUp();
				break;
			case 78:
				//一次性飞行器下
				actor.flyingDown();
				break;
			case 71:
				//对话信息
				if(Mota.gameState.actor.bag.notepad >= 1){
					Mota.util.randerNpd();
				}
				break;
			case 72:
				//怪物手册
				if(Mota.gameState.actor.bag.manual >= 1){
					Mota.util.renderManual();
				}
			default:
				break;
		}
	}
}


// 71: 'G', //记事本
// 72: 'H', //怪物手册
// 52: '4', //记事本上一页
// 100: '4', //记事本上一页
// 53: '5', //记事本下一页
// 101: '5', //记事本下一页

// 66: 'B', //向上飞行器
// 78: 'N', //向下飞行器
// 33: 'flying-up', //飞行魔杖 上
// 34: 'flying-down', //飞行魔杖 下
// 90: 'Z', //镐
// 67: 'C', //炸弹
// 75: "K", //魔法钥匙
// 88: 'X', //地震卷轴
// 86: 'V', //圣水
// 70: 'F', //冰冻魔法
// 82: 'R' //重新开始
// 13: 'enter', //弹窗关闭
// 38: 'top', //人物移动上
// 39: 'right', //人物移动右
// 40: 'down', //人物移动下
// 37: 'left', //人物移动左
// 89: 'Y', //弹窗关闭并购买
// 99: '3', //商店购买防御力
// 83: 'S', //游戏存档
// 76: 'L', //游戏独挡
// 49: '1', //商店购买血液
// 97: '1', //商店购买血液
// 50: '2', //商店购买攻击力
// 98: '2', //商店购买攻击力
// 51: '3', //商店购买防御力