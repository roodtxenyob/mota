var actor = {
	isMove : false,
	MotaCode : {
		prop : {
			"9"  : "yellowKey",//--- 黄钥匙
			"10" : "blueKey",//--- 蓝钥匙
			"11" : "redKey",//--- 红钥匙
			"12" : "magicKey",//--- 魔法钥匙
			"13" : "redPotion",//--- 红药水
			"14" : "bluePotion",//--- 蓝药水
			"15" : "redGem",//--- 红宝石
			"16" : "blueGem",//--- 蓝宝石
			
			"18" : "manual",//--- 怪物手册
			"19" : "notepad",//--- 记事本
			"20" : "luckyCoins",//--- 幸运金币
			"21" : "cross",//--- 十字架
			"22" : "flyingWand",//--- 飞行魔杖
			
			"31" : "ironSword",//--- 铁剑
			"32" : "ironShield",//--- 铁盾
			"33" : "silverSword",//--- 银剑
			"34" : "silverShield",//--- 银盾
			"35" : "knightSword",//--- 骑士剑
			"36" : "knightShield",//--- 骑士盾
			"37" : "sacredSword",//--- 圣剑
			"38" : "sacredShield",//--- 圣盾
			"39" : "TrueSacredSword",//--- 神圣剑
			"40" : "TrueSacredShield",//--- 神圣盾
			
			"41" : "pickax",//--- 镐
			"42" : "superMaigcMattok",//--- 地震卷轴
			"43" : "snowCrystal",//--- 冰冻魔法
			"44" : "bomb",//--- 炸弹
			"45" : "dragonSlayer",//--- 屠龙匕
			"46" : "flyingUp",//--- 向上飞行器
			"47" : "flyingDown",//--- 向下飞行器
			"48" : "flyingCenter",//--- 中心飞行器
			"49" : "holyWater",//--- 圣水
		},
		
		monster:{
			//怪物
			"50" : { name: "绿史莱姆", HP: 35, ATK: 18, DEF: 1, gold: 1},
			"51" : { name: "红色史莱姆", HP: 45, ATK: 20, DEF: 2, gold: 2},
			"52" : { name: "红色史莱姆", HP: 45, ATK: 20, DEF: 2, gold: 2},
			"53" : { name: "红色史莱姆", HP: 45, ATK: 20, DEF: 2, gold: 2},
			"54" : { name: "骷髅人", HP: 50, ATK: 42, DEF: 6, gold: 6},
			"55" : { name: "骷髅士兵", HP: 55, ATK: 52, DEF: 12, gold: 8},
			"56" : { name: "骷髅队长", HP: 100, ATK: 65, DEF: 15, gold: 30},
			"57" : { name: "鬼战士", HP: 220, ATK: 180, DEF: 30, gold: 35},
			"58" : { name: "小蝙蝠", HP: 35, ATK: 38, DEF: 3, gold: 3},
			"59" : { name: "大蝙蝠", HP: 60, ATK: 100, DEF: 8, gold: 12},
			"60" : { name: "吸血蝙蝠", HP: 200, ATK: 390, DEF: 90, gold: 50},
			"61" : { name: "吸血鬼", HP: 444, ATK: 199, DEF: 66, gold: 144},
			"62" : { name: "双手剑士", HP: 100, ATK: 680, DEF: 50, gold: 55},
			"63" : { name: "初级卫兵", HP: 50, ATK: 48, DEF: 22, gold: 12},
			"64" : { name: "中级卫兵", HP: 100, ATK: 180, DEF: 110, gold: 50},
			"65" : { name: "高级卫兵", HP: 180, ATK: 460, DEF: 360, gold: 200},
			"66" : { name: "初级法师", HP: 60, ATK: 32, DEF: 8, gold: 5},
			"67" : { name: "高级法师", HP: 100, ATK: 95, DEF: 30, gold: 22},
			"68" : { name: "初级巫师", HP: 220, ATK: 370, DEF: 110, gold: 80},
			"69" : { name: "高级巫师", HP: 200, ATK: 380, DEF: 130, gold: 90},
			"70" : { name: "兽人", HP: 260, ATK: 85, DEF: 5, gold: 18},
			"71" : { name: "兽人武士", HP: 320, ATK: 120, DEF: 15, gold: 30},
			"72" : { name: "石头人", HP: 20, ATK: 100, DEF: 68, gold: 28},
			"73" : { name: "幽灵", HP: 320, ATK: 140, DEF: 20, gold: 30},
			"74" : { name: "大法师", HP: 4500, ATK: 560, DEF: 310, gold: 1000},
			"75" : { name: "骑士队长", HP: 120, ATK: 150, DEF: 50, gold: 100},
			"76" : { name: "骑士", HP: 160, ATK: 230, DEF: 105, gold: 65},
			"77" : { name: "战士", HP: 200, ATK: 200, DEF: 65, gold: 45},
			"78" : { name: "魔法警卫", HP: 230, ATK: 450, DEF: 100, gold: 100},
			"79" : { name: "黑暗骑士", HP: 180, ATK: 430, DEF: 210, gold: 120},
			"80" : { name: "假魔王",HP: 8000,ATK: 5000,DEF: 1000,gold: 5000},
			"81" : { name: "真魔王", HP: 5000, ATK: 1580, DEF: 190, gold: 500},
			"82" : { name: "魔龙", HP: 1500, ATK: 600, DEF: 250, gold: 800},
			"83" : { name: "大乌贼", HP: 1200, ATK: 180, DEF: 20, gold: 100},
		},
	},
	
	dropPopo:function(){
		let f = Mota.gameState.currentFloor.name;
		//清除怪物
		clearInterval(Mota.MonsterRenderingContainer);
		//更新地图数组
		for (let i = 0; i < Mota.gameState.maps[f].length; i++) {
			for (let j = 0; j < Mota.gameState.maps[f][i].length; j++) {
				if(GLOBAL_MAPS[f+"_pass"][i][j] != 999){
					Mota.gameState.maps[f][i][j] = GLOBAL_MAPS[f+"_pass"][i][j];
				}
			}
		}
		Mota.util.clearMap();
		//重新渲染
		Mota.util.renderMap(Mota.gameState.currentFloor.name);
	},
	downFloor:function(){
		let targetCount = 1;
		if(Mota.gameState.currentFloor.code == 45){
			targetCount = 2;
		}
		//下楼
		Mota.util.clear(Mota.gameState.actor.Y,Mota.gameState.actor.X);
		Mota.gameState.maps[Mota.gameState.currentFloor.name][Mota.gameState.actor.X][Mota.gameState.actor.Y] = 0;
		//删除人物
		clearInterval(Mota.MonsterRenderingContainer);
		//清除怪物渲染定时器
		Mota.util.clearMap();
		//清除所有
		Mota.gameState.currentFloor.name = "tier" + (Mota.gameState.currentFloor.code*1 - targetCount);
		//更改楼层状态
		Mota.gameState.currentFloor.code = Mota.gameState.currentFloor.code*1 - targetCount;
		Mota.util.renderMap(Mota.gameState.currentFloor.name);
		//重新渲染楼层
		let currentFloorX = 0;
		let currentFloorY = 0;
		//找到楼梯坐标
		for(let i = 0;i < Mota.gameState.maps[Mota.gameState.currentFloor.name].length; i++){
			for(let j = 0;j < Mota.gameState.maps[Mota.gameState.currentFloor.name][i].length; j++){
				if(Mota.gameState.maps[Mota.gameState.currentFloor.name][i][j] == 8){
					currentFloorX = i;
					currentFloorY = j;
				}
			}
		}
		//根据楼梯坐标重新渲染人物位置,避免穿墙的bug
		if(Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX == 0 ? currentFloorX : currentFloorX - 1][currentFloorY] == 0){
			Mota.util.render(images.actor, 0, Resource.figure.actor.direction.bottom.posY * 32, currentFloorY * 32, (currentFloorX - 1) * 32);
			Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX - 1][currentFloorY] = 110;
			Mota.gameState.actor.X = currentFloorX - 1;
			Mota.gameState.actor.Y = currentFloorY;
			
		}else if(Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX == 10 ? currentFloorX : currentFloorX + 1][currentFloorY] == 0){
			Mota.util.render(images.actor, 0, Resource.figure.actor.direction.bottom.posY * 32, currentFloorY * 32, (currentFloorX + 1) * 32);
			Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX + 1][currentFloorY] = 110;
			Mota.gameState.actor.X = currentFloorX + 1;
			Mota.gameState.actor.Y = currentFloorY;
		}else if(Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX][currentFloorY == 0 ? currentFloorY : currentFloorY - 1] == 0){
			Mota.util.render(images.actor, 0, Resource.figure.actor.direction.bottom.posY * 32, (currentFloorY - 1) * 32, currentFloorX * 32);
			Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX][currentFloorY - 1] = 110;
			Mota.gameState.actor.X = currentFloorX;
			Mota.gameState.actor.Y = currentFloorY - 1;
		}else if(Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX][currentFloorY == 10 ? currentFloorY : currentFloorY + 1] == 0){
			Mota.util.render(images.actor, 0, Resource.figure.actor.direction.bottom.posY * 32, (currentFloorY + 1) * 32, currentFloorX * 32);
			Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX][currentFloorY + 1] = 110;
			Mota.gameState.actor.X = currentFloorX;
			Mota.gameState.actor.Y = currentFloorY + 1;
		}	
		//重新渲染人物
	},
	
	upFloor:function(){
		let targetCount = 1;
		if(Mota.gameState.currentFloor.code == 43){
			targetCount = 2;
		}
		Mota.util.clear(Mota.gameState.actor.Y,Mota.gameState.actor.X);
		Mota.gameState.maps[Mota.gameState.currentFloor.name][Mota.gameState.actor.X][Mota.gameState.actor.Y] = 0;
		//删除人物
		clearInterval(Mota.MonsterRenderingContainer);
		//清除怪物渲染定时器
		Mota.util.clearMap();
		//清除所有
		Mota.gameState.currentFloor.name = "tier" + (Mota.gameState.currentFloor.code*1 + targetCount);
		//更改楼层状态
		Mota.gameState.currentFloor.code = Mota.gameState.currentFloor.code*1 + targetCount;
		Mota.util.renderMap(Mota.gameState.currentFloor.name);
		//重新渲染楼层
		let currentFloorX = 0;
		let currentFloorY = 0;
		//找到楼梯坐标
		for(let i = 0;i < Mota.gameState.maps[Mota.gameState.currentFloor.name].length; i++){
			for(let j = 0;j < Mota.gameState.maps[Mota.gameState.currentFloor.name][i].length; j++){
				if(Mota.gameState.maps[Mota.gameState.currentFloor.name][i][j] == 7){
					currentFloorX = i;
					currentFloorY = j;
				}
			}
		}
		//根据楼梯坐标重新渲染人物位置,避免穿墙的bug
		if(Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX == 0 ? currentFloorX : currentFloorX - 1][currentFloorY] == 0){
			Mota.util.render(images.actor, 0, Resource.figure.actor.direction.bottom.posY * 32, currentFloorY * 32, (currentFloorX - 1) * 32);
			Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX - 1][currentFloorY] = 110;
			Mota.gameState.actor.X = currentFloorX - 1;
			Mota.gameState.actor.Y = currentFloorY;	
		}else if(Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX == 10 ? currentFloorX : currentFloorX + 1][currentFloorY] == 0){
			Mota.util.render(images.actor, 0, Resource.figure.actor.direction.bottom.posY * 32, currentFloorY * 32, (currentFloorX + 1) * 32);
			Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX + 1][currentFloorY] = 110;
			Mota.gameState.actor.X = currentFloorX + 1;
			Mota.gameState.actor.Y = currentFloorY;
		}else if(Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX][currentFloorY == 0 ? currentFloorY : currentFloorY - 1] == 0){
			Mota.util.render(images.actor, 0, Resource.figure.actor.direction.bottom.posY * 32, (currentFloorY - 1) * 32, currentFloorX * 32);
			Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX][currentFloorY - 1] = 110;
			Mota.gameState.actor.X = currentFloorX;
			Mota.gameState.actor.Y = currentFloorY - 1;
		}else if(Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX][currentFloorY == 10 ? currentFloorY : currentFloorY + 1] == 0){
			Mota.util.render(images.actor, 0, Resource.figure.actor.direction.bottom.posY * 32, (currentFloorY + 1) * 32, currentFloorX * 32);
			Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX][currentFloorY + 1] = 110;
			Mota.gameState.actor.X = currentFloorX;
			Mota.gameState.actor.Y = currentFloorY + 1;
		}	
		//重新渲染人物
	},
	
	computer:function(monsterInfo){
		//计算伤害
		let c = 0;
		let cause = Mota.gameState.actor.ATK - monsterInfo.DEF;		//角色对怪物造成的伤害(一次攻击)
		let suffer = monsterInfo.ATK - Mota.gameState.actor.DEF;	//怪物对角色造成的伤害(一次攻击)
		if(cause <= 0){
			return "禁止攻击"
		}else{
			let monsterHP = monsterInfo.HP;
			let actorHP = Mota.gameState.actor.HP;
			while (monsterHP >= 0){
				c++
				monsterHP -= cause;
				if(monsterHP <= 0){
					return Mota.gameState.actor.HP - actorHP;	//受到的伤害
				}
				actorHP -= suffer;
				if(actorHP <= 0){
					return "禁止攻击"
				}
			}
			return {"damage":Mota.gameState.actor.HP - actorHP,"c":c};			//受到的伤害
		}	
		
	},
	
	BattleAnimation:function(x,y){
		let count = 10;
		Mota.util.clear(Mota.gameState.actor.Y,Mota.gameState.actor.X);
		Mota.isInCombat = true;
		//清除角色
		let Animation = setInterval(() => {
			count --;
			if(count == 0){
				clearInterval(Animation);
				Mota.util.clear(Mota.gameState.actor.Y,Mota.gameState.actor.X);
				Mota.isInCombat = false;
			}
			if(count % 2 == 0){
				Mota.util.render(images.actort, 0, Resource.figure.actor.direction.bottom.posY * 32, y*32, x*32);
			}else{
				Mota.util.render(images.toolAlways,Resource.prop.tool_always.effects.posX * 32, Resource.prop.tool_always.effects.posY * 32,y*32,x*32);				
			}
		},70);
	},
	
	Battle:function(ATKTarget,newX,newY,oldX,oldY){
		//角色的战斗方法
		
		let com = actor.computer(actor.MotaCode.monster[ATKTarget]);
		if(typeof com == "number"){
			
			isMove = true;
			actor.BattleAnimation(newX,newY);
			setTimeout(() => {
				Mota.gameState.actor.HP -= com;
				//更新血量和金币,有幸运金币则金币数量乘以tow
				Mota.gameState.actor.gold += Mota.gameState.actor.bag.luckyCoins == 0 ? 
				actor.MotaCode.monster[ATKTarget].gold : actor.MotaCode.monster[ATKTarget].gold * 2;
			},650);
		}	
	},
	
	Turn:function(direction){
		//角色转向方法
		Mota.util.clear(Mota.gameState.actor.Y,Mota.gameState.actor.X);
		//清除旧贴图
		Mota.util.render(images.actor, 0, Resource.figure.actor.direction[direction].posY * 32, Mota.gameState.actor.Y * 32, Mota.gameState.actor.X * 32);
		Mota.gameState.actor.direction = direction;
	},
	
	beforeMove:function(newX,newY,oldX,oldY){
		//根据新坐标的不同目标作出判断做什么
		let target = Mota.gameState.maps[Mota.gameState.currentFloor.name][newX][newY];
		if (target == 0 | target == 122 | target == 6) {
			//地板和假墙
			isMove = true;
			//可以移动
			return
		}
		if (target >= 2 && target <= 4) {
			//开门
			if (target == 2 && Mota.gameState.actor.bag.yellowKey != 0){
				//黄
				Mota.gameState.actor.bag.yellowKey-=1;
				//更新背包
				Mota.gameState.maps[Mota.gameState.currentFloor.name][oldX][oldY] = 0;
				//更新地图
				isMove = true;
			}
			if (target == 3 && Mota.gameState.actor.bag.blueKey != 0){
				//蓝
				Mota.gameState.actor.bag.blueKey-=1;
				//更新背包
				Mota.gameState.maps[Mota.gameState.currentFloor.name][oldX][oldY] = 0;
				//更新地图
				isMove = true;
			}
			if (target == 4 && Mota.gameState.actor.bag.redKey != 0){
				//红
				Mota.gameState.actor.bag.redKey -= 1;
				//更新背包
				Mota.gameState.maps[Mota.gameState.currentFloor.name][oldX][oldY] = 0;
				//更新地图
				isMove = true;
			}else{
				console.log("不能开");//以后也要注释
			}
		}
		//开门结束
		if (target >= 9 && target <= 49) {
			//捡东西
			if(target == 13){
				//红药瓶
				//1-10层+50 11-20层+100 31-40层+200 41-50层+250 楼层数+9/10 = 加血的倍数 
				Mota.gameState.actor.HP += 50 * Math.floor(((Mota.gameState.currentFloor.code*1) + 9) /10);
			}else if(target == 14){
				//蓝药瓶
				//1-10层+200 11-20层+400 31-40层+800 41-50层+1000 楼层数+9/10 = 加血的倍数 
				Mota.gameState.actor.HP += 200 * Math.floor(((Mota.gameState.currentFloor.code*1) + 9) /10);
			}else if(target == 15){
				//宝石
				Mota.gameState.actor.ATK += 2 * Math.floor(((Mota.gameState.currentFloor.code*1) + 9) /10);
			}else if(target == 16){
				//宝石
				Mota.gameState.actor.DEF += 2 * Math.floor(((Mota.gameState.currentFloor.code*1) + 9) /10);
			}
			
			Mota.gameState.maps[Mota.gameState.currentFloor.name][newX][newY] = 0;
			Mota.gameState.actor.bag[actor.MotaCode.prop[target]] += 1;
			isMove = true;
		}
		//捡东西结束
		if (target >= 50 && target <= 83){
			if(target == 56){
				actor.Battle(Mota.gameState.maps[Mota.gameState.currentFloor.name][newX][newY],newX,newY,oldX,oldY);
				setTimeout(() => {
					Mota.util.renderMonstertext("骷髅队长:","不要得意,后面还有更强的敌人...呃.");
					actor.dropPopo();
					//掉落物品
				}, 650);
			}else if(target == 61){
				if(Mota.gameState.actor.bag.cross >= 1){
					Resource.figure.monster.Bat.category[3].ATK = 1;
					Resource.figure.monster.Bat.category[3].DEF = 1;
				}
				actor.Battle(Mota.gameState.maps[Mota.gameState.currentFloor.name][newX][newY],newX,newY,oldX,oldY);
				setTimeout(() => {
					Mota.util.renderMonstertext("吸血鬼:","不可能...呃.");
					actor.dropPopo();
				}, 650);
			}else if(target == 75){
				actor.Battle(Mota.gameState.maps[Mota.gameState.currentFloor.name][newX][newY],newX,newY,oldX,oldY);
				setTimeout(() => {
					Mota.util.renderMonstertext("骑士队长:","爷爷,饶命.爷爷,饶命.(逃走了...)");
					actor.dropPopo();
				}, 650);
			}else if(target == 80){
				actor.Battle(Mota.gameState.maps[Mota.gameState.currentFloor.name][newX][newY],newX,newY,oldX,oldY);
				setTimeout(() => {
					Mota.util.renderMonstertext("魔王:","这是怎么回事...呃.");
					actor.dropPopo();
				}, 650);
			}else if(target == 81){
				actor.Battle(Mota.gameState.maps[Mota.gameState.currentFloor.name][newX][newY],newX,newY,oldX,oldY);
				setTimeout(() => {
					Mota.util.renderMonstertext("真魔王:","恭喜通关!");
					actor.dropPopo();
				}, 650);
			}
			
			//Mota.util.clear(Mota.gameState.actor.Y,Mota.gameState.actor.X);
			//可能是魔王bug来源
			//这个bug有点难
			actor.Battle(Mota.gameState.maps[Mota.gameState.currentFloor.name][newX][newY],newX,newY,oldX,oldY);
		}
		//战斗结束
		if (target == 7){
			//下楼
			actor.downFloor();
		}
		if (target == 8){
			//上楼
			actor.upFloor();			
		}
		
		if (target == 125 | target == 126 | target == 127){
			Mota.util.renderShop();
			//商店
		}
		
		if (target == 111) {
			//老人
			Mota.util.renderOldMan();
			setTimeout(() => {
				Mota.gameState.maps[Mota.gameState.currentFloor.name][newX][newY] = 0;
				Mota.util.clear(newY,newX);
				if(Mota.gameState.currentFloor.code == 3){
					Mota.gameState.actor.bag.manual +=1;
					Mota.util.clearProp();
					//更新画布上背包贴图
					Mota.util.renderProp();
				}
				if(Mota.gameState.currentFloor.code == 2){
					Mota.gameState.actor.gold += 1000;
					Mota.util.clearActorState();
					//更新画布上角色状态贴图
					Mota.util.renderActorState();
				}
			},1000);
		}
		if(target == 124){
			//陷阱
			let f = Mota.gameState.currentFloor.name;
			//清除怪物
			clearInterval(Mota.MonsterRenderingContainer);
			//更新地图数组
			for (let i = 0; i < Mota.gameState.maps[f].length; i++) {
				for (let j = 0; j < Mota.gameState.maps[f][i].length; j++) {
					if(GLOBAL_MAPS[f+"_trap"][i][j] != 999){
						Mota.gameState.maps[f][i][j] = GLOBAL_MAPS[f+"_trap"][i][j];
					}
				}
			}
			Mota.util.clearMap();
			//重新渲染
			Mota.util.renderMap(Mota.gameState.currentFloor.name);
			isMove = true;
			//陷阱触发的事件
			if(Mota.gameState.currentFloor.code == 10){
				Mota.util.renderMonstertext("骷髅队长:","你已经被包围了!");
			}
			if(Mota.gameState.currentFloor.code == 20){
				Mota.util.renderMonstertext("吸血鬼:","我对你来说是异常强大的!");
			}
			if(Mota.gameState.currentFloor.code == 40){
				Mota.util.renderMonstertext("骑士队长:","兄弟们!上!");
			}
			if(Mota.gameState.currentFloor.code == 49){
				Mota.util.renderMonstertext("魔王:","哼!居然能走到这里,你还是第一个.");
			}
			
		}
		if(target == 5){
			//这是特殊的魔法门,需要击败守卫才能打开
			let isopen = true;
			for(let i = -1; i <= 1; i++){
				for(let j = -1; j<= 1; j++){
					if(Mota.gameState.maps[Mota.gameState.currentFloor.name][newX + i][newY + j] >= 50
						&& Mota.gameState.maps[Mota.gameState.currentFloor.name][newX + i][newY + j] <= 83){
							isopen = false;
					}
				}
			}
			if(isopen){
				isMove = true;
			}
		}
		
		if(target == 113){
			//小偷
			Mota.util.renderThief();
			Mota.gameState.maps[Mota.gameState.currentFloor.name][newX][newY] = 0;
			Mota.util.clear(newY,newX);
		}
		
		if(target == 112){
			//商人
			Mota.util.renderTrader();
		}
		
		if(target == 117){
			if(Mota.gameState.actor.HP == 1){
				
			}else if(Mota.gameState.actor.bag.TrueSacredShield < 1){
				Mota.gameState.actor.HP = Math.ceil(Mota.gameState.actor.HP / 2);
				isMove = true;
			}else{
				isMove = true;
			}
		}
		
		if(target == 119){
			if (Mota.gameState.currentFloor.name == "tier35"){
				let t = {ID: 82, name: "魔龙", HP: 1500, ATK: 600, DEF: 250, gold: 800, pos: 0}
				if(Mota.gameState.actor.bag.dragonSlayer >= 1){
					t.ATK = 60;
					t.ATK = 25;
				}
				let com = actor.computer(t);
				if(typeof com == "number"){
					isMove = true;
					actor.BattleAnimation(newX,newY);
					setTimeout(() => {
						Mota.gameState.maps.tier35[4][4] = 0;
						Mota.util.clear(4,4);
						for (let i = 0; i < Mota.gameState.maps.tier35.length; i++) {
							for (let j = 0; j < Mota.gameState.maps.tier35[i].length; j++) {
								console.log()
								if(Mota.gameState.maps.tier35[i][j] == 119){
									Mota.gameState.maps.tier35[i][j] = 0;
									Mota.util.clear(j,i);
								}
							}
						}
						Mota.gameState.actor.HP -= com;
						//更新血量和金币,有幸运金币则金币数量乘以tow
						Mota.gameState.actor.gold += Mota.gameState.actor.bag.luckyCoins == 0 ? 
						800 : 800 * 2;
					},650);
				}	
			}
			if (Mota.gameState.currentFloor.name == "tier15") {
				let t = {ID: 83, name: "大乌贼", HP: 1200, ATK: 180, DEF: 20, gold: 100, pos: 1}
				let com = actor.computer(t);
				if(typeof com == "number"){
					isMove = true;
					actor.BattleAnimation(newX,newY);
					setTimeout(() => {
						Mota.gameState.maps.tier15[4][4] = 0;
						Mota.util.clear(4,4);
						for (let i = 0; i < Mota.gameState.maps.tier15.length; i++) {
							for (let j = 0; j < Mota.gameState.maps.tier15[i].length; j++) {
								console.log()
								if(Mota.gameState.maps.tier15[i][j] == 119){
									Mota.gameState.maps.tier15[i][j] = 0;
									Mota.util.clear(j,i);
								}
							}
						}
						Mota.gameState.actor.HP -= com;
						//更新血量和金币,有幸运金币则金币数量乘以tow
						Mota.gameState.actor.gold += Mota.gameState.actor.bag.luckyCoins == 0 ? 
						100 : 100 * 2;
					},650);
				}
			}
		}
		if(target == 200){
			//传送50层
			Mota.util.clear(Mota.gameState.actor.Y,Mota.gameState.actor.X);
			Mota.gameState.maps[Mota.gameState.currentFloor.name][Mota.gameState.actor.X][Mota.gameState.actor.Y] = 0;
			//删除人物
			clearInterval(Mota.MonsterRenderingContainer);
			//清除怪物渲染定时器
			Mota.util.clearMap();
			//清除所有
			Mota.gameState.currentFloor.name = "tier50";
			Mota.gameState.currentFloor.code = 50;
			//更改楼层状态
			Mota.util.renderMap(Mota.gameState.currentFloor.name);
			//重新渲染楼层
			Mota.util.render(images.actor, 0, Resource.figure.actor.direction.bottom.posY * 32, 5 * 32, 6 * 32);
			//主角登场!
			Mota.gameState.maps[Mota.gameState.currentFloor.name][6][5] = 110;
			//将角色添加到地图里去
			Mota.gameState.actor.X = 6;
			Mota.gameState.actor.Y = 5;
			//重新渲染人物
			Mota.util.clearProp();
			//更新画布上背包贴图
			Mota.util.renderProp();
		}
		// console.log("目标坐标",newX,newY);
		// console.log("当前楼层",Mota.gameState.maps[Mota.gameState.currentFloor.name]);
	},
	
	move:function(newX,newY,oldX,oldY){
		if (isMove) {
			//清除原来位置的贴图
			Mota.util.clear(oldY,oldX);
			//然后新坐标上从新渲染
			Mota.util.clear(newY,newX);
			Mota.util.render(images.actor, 0, Resource.figure.actor.direction[Mota.gameState.actor.direction].posY * 32, newY * 32, newX * 32);
			//将更新地图信息
			Mota.gameState.maps[Mota.gameState.currentFloor.name][newX][newY] = 110;
			Mota.gameState.maps[Mota.gameState.currentFloor.name][oldX][oldY] = 0;
			//将新坐标保存到角色状态里
			Mota.gameState.actor.X = newX;
			Mota.gameState.actor.Y = newY;
			
		}
		isMove = false;
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
		
	},
	
	left:function(){
		actor.Turn("left");
		//转向
		if(Mota.gameState.actor.Y != 0){
			actor.beforeMove(Mota.gameState.actor.X ,Mota.gameState.actor.Y - 1,Mota.gameState.actor.X,Mota.gameState.actor.Y);
			actor.move(Mota.gameState.actor.X ,Mota.gameState.actor.Y - 1,Mota.gameState.actor.X,Mota.gameState.actor.Y);
			//移动
		}else{
			//console.log('已经是边界了不能向左了')
			//将来要删掉
		}	
		//console.log('左');
	},
	
	top:function(){
		actor.Turn("top");
		//转向
		if(Mota.gameState.actor.X != 0){
			actor.beforeMove(Mota.gameState.actor.X - 1,Mota.gameState.actor.Y ,Mota.gameState.actor.X,Mota.gameState.actor.Y);
			actor.move(Mota.gameState.actor.X - 1,Mota.gameState.actor.Y ,Mota.gameState.actor.X,Mota.gameState.actor.Y);
			//移动
		}else{
			//console.log('已经到顶了不能再上了');
			//将来要删掉
		}
		//console.log('上');
	},
	right:function(){
		actor.Turn("right");
		//转向
		if(Mota.gameState.actor.Y != 10){
			actor.beforeMove(Mota.gameState.actor.X ,Mota.gameState.actor.Y + 1,Mota.gameState.actor.X,Mota.gameState.actor.Y);
			actor.move(Mota.gameState.actor.X ,Mota.gameState.actor.Y + 1,Mota.gameState.actor.X,Mota.gameState.actor.Y);
			//移动
		}else{
			//console.log('已经是边界了不能向右了')
			//将来要删掉
		}	
		//console.log('右');
	},
	bottom:function(){
		actor.Turn("bottom");
		//转向
		if(Mota.gameState.actor.X != 10){
			actor.beforeMove(Mota.gameState.actor.X + 1,Mota.gameState.actor.Y,Mota.gameState.actor.X,Mota.gameState.actor.Y);
			actor.move(Mota.gameState.actor.X + 1,Mota.gameState.actor.Y,Mota.gameState.actor.X,Mota.gameState.actor.Y);
			//移动
		}else{
			//console.log('已经到底了不能再下了');
			//将来要删掉
		}
		//console.log("下");
	},
	closeMessage:function(){
		msg.style.display = "none";
		//隐藏信息框
		Mota.messageIsActive = false;
		//更改标记变量
	},
	closeMessageOldMan:function(){
		msg.style.display = "none";
		//隐藏信息框
		Mota.messageOldMan = false;
		//更改标记变量
	},
	closeMessageMonster:function(){
		msg.style.display = "none";
		//隐藏信息框
		Mota.messageMonster = false;
		//更改标记变量
	},
	
	closeMessageTrader:function(){
		//单纯的关闭
		msg.style.display = "none";
		//隐藏信息框
		Mota.messageTrader = false;
		//更改标记变量
	},
	
	buyAndClose:function(){
		//购买并关闭
		let cf = Mota.gameState.currentFloor.name;
		//当前楼层
		
		let js = Mota.gameState.actor;
		//角色实例
		
		let sr = Resource.notepad[cf].trader.prop;
		 //商人出售的商品信息
		 
		if(js.gold > sr.gold){
			js.bag[sr.name] += sr.num;
			//角色背包里的物品增加相应的数量
			js.gold -= sr.gold;
			//扣除相应的金币
			if(sr.isBuying == 1){
				Mota.gameState.maps[Mota.gameState.currentFloor.name][sr.x][sr.y] = 0;
				Mota.util.clear(sr.y,sr.x);
			}//判断是否为常驻商人,若为不是常驻商人则删除他
			
			Mota.util.clearActorState();
			//更新画布上角色状态贴图
			Mota.util.renderActorState();
			
			Mota.util.clearProp();
			//更新画布上背包贴图
			Mota.util.renderProp();
			
			Mota.util.clearKey();
			//更新key画布上的钥匙数量renderActorState
			Mota.util.renderKeyText();
			
		}else{
			console.log("金币不足");
		}
		
		msg.style.display = "none";
		//隐藏信息框
		Mota.messageTrader = false;
	},
	
	addHP:function(){
		if (Mota.gameState.actor.oldPrice <= Mota.gameState.actor.gold) {
			Mota.gameState.actor.oldPrice = Mota.gameState.actor.oldPrice + (20 * Mota.gameState.actor.C);
			Mota.gameState.actor.C ++;
			// 商店售价规律：
			// 新的售价=旧的价格+（20 *已购次数）
			Mota.gameState.actor.HP += 200 * Math.floor(((Mota.gameState.currentFloor.code*1) + 9) /10);
			Mota.gameState.actor.gold -= Mota.gameState.actor.oldPrice;
			Mota.util.clearActorState();
			//更新画布上角色状态贴图
			Mota.util.renderActorState();
			//重新渲染商店
			Mota.util.renderShop();
			Mota.util.clearActorState();
			//更新画布上角色状态贴图
			Mota.util.renderActorState();
		}
	},
	addATK:function(){
		if (Mota.gameState.actor.oldPrice <= Mota.gameState.actor.gold) {
			Mota.gameState.actor.oldPrice = Mota.gameState.actor.oldPrice + (20 * Mota.gameState.actor.C);
			Mota.gameState.actor.C ++;
			// 商店售价规律：
			// 新的售价=旧的价格+（20 *已购次数）
			Mota.gameState.actor.ATK += 2 * Math.floor(((Mota.gameState.currentFloor.code*1) + 9) /10);
			Mota.gameState.actor.gold -= Mota.gameState.actor.oldPrice;
			Mota.util.clearActorState();
			//更新画布上角色状态贴图
			Mota.util.renderActorState();
			//重新渲染商店
			Mota.util.renderShop();
			Mota.util.clearActorState();
			//更新画布上角色状态贴图
			Mota.util.renderActorState();
		}
	},
	addDEF:function(){
		if (Mota.gameState.actor.oldPrice <= Mota.gameState.actor.gold) {
			Mota.gameState.actor.oldPrice = Mota.gameState.actor.oldPrice + (20 * Mota.gameState.actor.C);
			Mota.gameState.actor.C ++;
			// 商店售价规律：
			// 新的售价=旧的价格+（20 *已购次数）
			Mota.gameState.actor.DEF += 4 * Math.floor(((Mota.gameState.currentFloor.code*1) + 9) /10);
			Mota.gameState.actor.gold -= Mota.gameState.actor.oldPrice;
			Mota.util.clearActorState();
			//更新画布上角色状态贴图
			Mota.util.renderActorState();
			//重新渲染商店
			Mota.util.renderShop();
			Mota.util.clearActorState();
			//更新画布上角色状态贴图
			Mota.util.renderActorState();
		}
	},
	
	ice: function(){
		//冰冻魔法
		console.log("11")
		if(Mota.gameState.actor.bag.snowCrystal >= 1){
			console.log("12")
			for(let i = 0;i < Mota.gameState.maps[Mota.gameState.currentFloor.name].length; i++){
				for(let j = 0;j < Mota.gameState.maps[Mota.gameState.currentFloor.name][i].length; j++){
					if(Mota.gameState.maps[Mota.gameState.currentFloor.name][i][j] == 120){
						Mota.gameState.maps[Mota.gameState.currentFloor.name][i][j] = 0;
						Mota.util.clear(j,i);
					}
				}
			}
		}
	},
	
	holyWater: function(){
		//圣水
		if(Mota.gameState.actor.bag.holyWater > 0){
			Mota.gameState.actor.HP = Mota.gameState.actor.HP + Mota.gameState.actor.ATK + Mota.gameState.actor.DEF;
			Mota.gameState.actor.bag.holyWater--;
			Mota.util.clearActorState();
			//更新画布上角色状态贴图
			Mota.util.renderActorState();
			Mota.util.clearProp();
			//更新画布上背包贴图
			Mota.util.renderProp();
		}
	},
	
	superMaigcMattok: function(){
		//地震卷轴
		if(Mota.gameState.actor.bag.superMaigcMattok > 0){
			for(let i = 0;i < Mota.gameState.maps[Mota.gameState.currentFloor.name].length; i++){
				for(let j = 0;j < Mota.gameState.maps[Mota.gameState.currentFloor.name][i].length; j++){
					if(Mota.gameState.maps[Mota.gameState.currentFloor.name][i][j] == 1){
						Mota.gameState.maps[Mota.gameState.currentFloor.name][i][j] = 0;
						Mota.util.clear(j,i);
					}
				}
			}
			Mota.gameState.actor.bag.superMaigcMattok--;
			Mota.util.clearProp();
			//更新画布上背包贴图
			Mota.util.renderProp();
		}
	},
	
	magic: function(){
		//魔法钥匙
		if(Mota.gameState.actor.bag.magicKey > 0){
			for(let i = 0;i < Mota.gameState.maps[Mota.gameState.currentFloor.name].length; i++){
				for(let j = 0;j < Mota.gameState.maps[Mota.gameState.currentFloor.name][i].length; j++){
					if(Mota.gameState.maps[Mota.gameState.currentFloor.name][i][j] == 2){
						Mota.gameState.maps[Mota.gameState.currentFloor.name][i][j] = 0;
						Mota.util.clear(j,i);
					}
				}
			}
			Mota.gameState.actor.bag.magicKey--;
			Mota.util.clearProp();
			//更新画布上背包贴图
			Mota.util.renderProp();
		}
	},
	
	pickax: function(){
		//稿
		if(Mota.gameState.actor.bag.pickax > 0){
			for(let i = -1; i <= 1; i++){
				for(let j = -1; j<= 1; j++){
					if(Mota.gameState.maps[Mota.gameState.currentFloor.name][Mota.gameState.actor.X + j][Mota.gameState.actor.Y + i]){
						if(Mota.gameState.maps[Mota.gameState.currentFloor.name][Mota.gameState.actor.X + j][Mota.gameState.actor.Y + i] == 1){
							//避免数组越界
							Mota.gameState.maps[Mota.gameState.currentFloor.name][Mota.gameState.actor.X + j][Mota.gameState.actor.Y + i] = 0;
							Mota.util.clear(Mota.gameState.actor.Y + i,Mota.gameState.actor.X + j);
						}	
					}
				}
			}
			//可能有bug
			Mota.gameState.actor.bag.pickax--;
			Mota.util.clearProp();
			//更新画布上背包贴图
			Mota.util.renderProp();
		}
	},
	
	bomb:function(){
		//	炸弹
		if(Mota.gameState.actor.bag.bomb > 0){
			for(let i = -1; i <= 1; i++){
				for(let j = -1; j<= 1; j++){
					if(Mota.gameState.maps[Mota.gameState.currentFloor.name][Mota.gameState.actor.X + j][Mota.gameState.actor.Y + i]){
						if(Mota.gameState.maps[Mota.gameState.currentFloor.name][Mota.gameState.actor.X + j][Mota.gameState.actor.Y + i] > 50 &&
						Mota.gameState.maps[Mota.gameState.currentFloor.name][Mota.gameState.actor.X + j][Mota.gameState.actor.Y + i] <79
						){
							//避免数组越界
							Mota.gameState.maps[Mota.gameState.currentFloor.name][Mota.gameState.actor.X + j][Mota.gameState.actor.Y + i] = 0;
							Mota.util.clear(Mota.gameState.actor.Y + i,Mota.gameState.actor.X + j);
						}	
					}
				}
			}
			//可能有bug,疑似数组越界
			Mota.gameState.actor.bag.bomb--;
			Mota.util.clearProp();
			//更新画布上背包贴图
			Mota.util.renderProp();
		}
	},
	
	flyingWandUp:function(){
		if(Mota.gameState.actor.bag.flyingWand > 1){
			console.log(Mota.gameState.maps["tier" + (Mota.gameState.currentFloor.code*1 +1)])
			if(Mota.gameState.maps["tier" + (Mota.gameState.currentFloor.code*1 +1)]){
				actor.upFloor();
			}
		}
		
	},
	
	flyingWandDown:function(){
		if(Mota.gameState.actor.bag.flyingWand > 1){
			console.log(Mota.gameState.maps["tier" + (Mota.gameState.currentFloor.code*1 -1)])
			if(Mota.gameState.maps["tier" + (Mota.gameState.currentFloor.code*1 -1)]){
				actor.downFloor();
			}
		}
		
	},
	
	flyingUp:function(){
		if(Mota.gameState.actor.bag.flyingUp > 0){
			Mota.util.clear(Mota.gameState.actor.Y,Mota.gameState.actor.X);
			Mota.gameState.maps[Mota.gameState.currentFloor.name][Mota.gameState.actor.X][Mota.gameState.actor.Y] = 0;
			//删除人物
			clearInterval(Mota.MonsterRenderingContainer);
			//清除怪物渲染定时器
			Mota.util.clearMap();
			//清除所有
			Mota.gameState.currentFloor.name = "tier" + (Mota.gameState.currentFloor.code*1 + 1);
			//更改楼层状态
			Mota.gameState.currentFloor.code = Mota.gameState.currentFloor.code*1 + 1;
			Mota.util.renderMap(Mota.gameState.currentFloor.name);
			//重新渲染楼层
			let currentFloorX = 0;
			let currentFloorY = 0;
			//找到楼梯坐标
			for(let i = 0;i < Mota.gameState.maps[Mota.gameState.currentFloor.name].length; i++){
				for(let j = 0;j < Mota.gameState.maps[Mota.gameState.currentFloor.name][i].length; j++){
					if(Mota.gameState.maps[Mota.gameState.currentFloor.name][i][j] == 7){
						currentFloorX = i;
						currentFloorY = j;
					}
				}
			}
			//根据楼梯坐标重新渲染人物位置,避免穿墙的bug
			if(Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX == 0 ? currentFloorX : currentFloorX - 1][currentFloorY] == 0){
				Mota.util.render(images.actor, 0, Resource.figure.actor.direction.bottom.posY * 32, currentFloorY * 32, (currentFloorX - 1) * 32);
				Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX - 1][currentFloorY] = 110;
				Mota.gameState.actor.X = currentFloorX - 1;
				Mota.gameState.actor.Y = currentFloorY;	
			}else if(Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX == 10 ? currentFloorX : currentFloorX + 1][currentFloorY] == 0){
				Mota.util.render(images.actor, 0, Resource.figure.actor.direction.bottom.posY * 32, currentFloorY * 32, (currentFloorX + 1) * 32);
				Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX + 1][currentFloorY] = 110;
				Mota.gameState.actor.X = currentFloorX + 1;
				Mota.gameState.actor.Y = currentFloorY;
			}else if(Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX][currentFloorY == 0 ? currentFloorY : currentFloorY - 1] == 0){
				Mota.util.render(images.actor, 0, Resource.figure.actor.direction.bottom.posY * 32, (currentFloorY - 1) * 32, currentFloorX * 32);
				Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX][currentFloorY - 1] = 110;
				Mota.gameState.actor.X = currentFloorX;
				Mota.gameState.actor.Y = currentFloorY - 1;
			}else if(Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX][currentFloorY == 10 ? currentFloorY : currentFloorY + 1] == 0){
				Mota.util.render(images.actor, 0, Resource.figure.actor.direction.bottom.posY * 32, (currentFloorY + 1) * 32, currentFloorX * 32);
				Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX][currentFloorY + 1] = 110;
				Mota.gameState.actor.X = currentFloorX;
				Mota.gameState.actor.Y = currentFloorY + 1;
			}	
			Mota.gameState.actor.bag.flyingUp --;
			//重新渲染人物
			Mota.util.clearProp();
			//更新画布上背包贴图
			Mota.util.renderProp();
		}
		
	},
	
	flyingDown:function(){
		if(Mota.gameState.actor.bag.flyingDown > 0){
			Mota.util.clear(Mota.gameState.actor.Y,Mota.gameState.actor.X);
			Mota.gameState.maps[Mota.gameState.currentFloor.name][Mota.gameState.actor.X][Mota.gameState.actor.Y] = 0;
			//删除人物
			clearInterval(Mota.MonsterRenderingContainer);
			//清除怪物渲染定时器
			Mota.util.clearMap();
			//清除所有
			Mota.gameState.currentFloor.name = "tier" + (Mota.gameState.currentFloor.code*1 - 1);
			//更改楼层状态
			Mota.gameState.currentFloor.code = Mota.gameState.currentFloor.code*1 - 1;
			Mota.util.renderMap(Mota.gameState.currentFloor.name);
			//重新渲染楼层
			let currentFloorX = 0;
			let currentFloorY = 0;
			//找到楼梯坐标
			for(let i = 0;i < Mota.gameState.maps[Mota.gameState.currentFloor.name].length; i++){
				for(let j = 0;j < Mota.gameState.maps[Mota.gameState.currentFloor.name][i].length; j++){
					if(Mota.gameState.maps[Mota.gameState.currentFloor.name][i][j] == 8){
						currentFloorX = i;
						currentFloorY = j;
					}
				}
			}
			//根据楼梯坐标重新渲染人物位置,避免穿墙的bug
			if(Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX == 0 ? currentFloorX : currentFloorX - 1][currentFloorY] == 0){
				Mota.util.render(images.actor, 0, Resource.figure.actor.direction.bottom.posY * 32, currentFloorY * 32, (currentFloorX - 1) * 32);
				Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX - 1][currentFloorY] = 110;
				Mota.gameState.actor.X = currentFloorX - 1;
				Mota.gameState.actor.Y = currentFloorY;
				
			}else if(Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX == 10 ? currentFloorX : currentFloorX + 1][currentFloorY] == 0){
				Mota.util.render(images.actor, 0, Resource.figure.actor.direction.bottom.posY * 32, currentFloorY * 32, (currentFloorX + 1) * 32);
				Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX + 1][currentFloorY] = 110;
				Mota.gameState.actor.X = currentFloorX + 1;
				Mota.gameState.actor.Y = currentFloorY;
			}else if(Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX][currentFloorY == 0 ? currentFloorY : currentFloorY - 1] == 0){
				Mota.util.render(images.actor, 0, Resource.figure.actor.direction.bottom.posY * 32, (currentFloorY - 1) * 32, currentFloorX * 32);
				Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX][currentFloorY - 1] = 110;
				Mota.gameState.actor.X = currentFloorX;
				Mota.gameState.actor.Y = currentFloorY - 1;
			}else if(Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX][currentFloorY == 10 ? currentFloorY : currentFloorY + 1] == 0){
				Mota.util.render(images.actor, 0, Resource.figure.actor.direction.bottom.posY * 32, (currentFloorY + 1) * 32, currentFloorX * 32);
				Mota.gameState.maps[Mota.gameState.currentFloor.name][currentFloorX][currentFloorY + 1] = 110;
				Mota.gameState.actor.X = currentFloorX;
				Mota.gameState.actor.Y = currentFloorY + 1;
			}	
			//重新渲染人物
			Mota.gameState.actor.bag.flyingDown --;
			Mota.util.clearProp();
			//更新画布上背包贴图
			Mota.util.renderProp();
		}
	}		
}