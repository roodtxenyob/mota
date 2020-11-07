/**
 * ATK--攻击值
 * DEF--防御值
 */
const Resource = {
    figure: {
        actor: {
            ID: 110,
            skin_1_src: "./img/figure/Actor01-Braver01.png",
            skin_0_src: "./img/figure/Actor01-Braver05.png",
            name: "玩家",
            HP: 1000,
            ATK: 10,
            DEF: 10,
            gold: 0,
            direction: {left: {posY: 1}, right: {posY: 2}, top: {posY: 3}, bottom: {posY: 0}}
        },
        princess: {
            ID: 115,
            src: "./img/figure/NPC01-GongZhu.png",
            name: "公主",
            pos: 0,
            message: [
                "在救我之前，你需要先杀死大法师！！！",
                "战胜大魔王，才可以救我出去的，我已经帮你打开通往50层暗道了！！！"
            ],
            direction: {left: {posY: 1}, right: {posY: 2}, top: {posY: 3}, bottom: {posY: 0}}
        },
        helper: {
            src: "./img/figure/NPC01-01.png",
            seer: {ID: 111, name: "老人", pos: 0},
            trader: {ID: 112, name: "商人", pos: 1},
            thief: {ID: 113, name: "小偷", pos: 2},
            elf: {ID: 114, name: "精灵", pos: 3}
        },
        monster: {
            SLaiTe: {
                src: "./img/figure/Monster01-01.png",
                category: [
                    {ID: 50, name: "绿史莱姆", HP: 35, ATK: 18, DEF: 1, gold: 1, pos: 0},
                    {ID: 51, name: "红色史莱姆", HP: 45, ATK: 20, DEF: 2, gold: 2, pos: 1},
                    {ID: 52, name: "大史莱特", HP: 130, ATK: 60, DEF: 3, gold: 8, pos: 2},
                    {ID: 53, name: "史莱特王", HP: 360, ATK: 310, DEF: 20, gold: 40, pos: 3}
                ]
            },
            Ghost: {
                src: "./img/figure/Monster02-01.png",
                category: [
                    {ID: 54, name: "骷髅人", HP: 50, ATK: 42, DEF: 6, gold: 6, pos: 0},
                    {ID: 55, name: "骷髅士兵", HP: 55, ATK: 52, DEF: 12, gold: 8, pos: 1},
                    {ID: 56, name: "骷髅队长", HP: 100, ATK: 65, DEF: 15, gold: 30, pos: 2},
                    {ID: 57, name: "鬼战士", HP: 220, ATK: 180, DEF: 30, gold: 35, pos: 3}
                ]
            },
            Bat: {
                src: "./img/figure/Monster03-01.png",
				vampireSrc: "./img/figure/Actor02-Monster14.png",
                category: [
                    {ID: 58, name: "小蝙蝠", HP: 35, ATK: 38, DEF: 3, gold: 3, pos: 0},
                    {ID: 59, name: "大蝙蝠", HP: 60, ATK: 100, DEF: 8, gold: 12, pos: 1},
                    {ID: 60, name: "吸血蝙蝠", HP: 200, ATK: 390, DEF: 90, gold: 50, pos: 2},
                    {ID: 61, name: "吸血鬼", HP: 444, ATK: 199, DEF: 66, gold: 144, pos: 0}
                ]
            },
            SwordMan: {
                src: "./img/figure/Monster04-01.png",
                category: [
                    {ID: 62, name: "双手剑士", HP: 100, ATK: 680, DEF: 50, gold: 55, pos: 0}
                ]
            },
            Guard: {
                src: "./img/figure/Monster05-01.png",
                category: [
                    {ID: 63, name: "初级卫兵", HP: 50, ATK: 48, DEF: 22, gold: 12, pos: 0},
                    {ID: 64, name: "中级卫兵", HP: 100, ATK: 180, DEF: 110, gold: 50, pos: 1},
                    {ID: 65, name: "高级卫兵", HP: 180, ATK: 460, DEF: 360, gold: 200, pos: 2}
                ]
            },
            Magician: {
                src: "./img/figure/Monster06-01.png",
                category: [
                    {ID: 66, name: "初级法师", HP: 60, ATK: 32, DEF: 8, gold: 5, pos: 0},
                    {ID: 67, name: "高级法师", HP: 100, ATK: 95, DEF: 30, gold: 22, pos: 1},
                    {ID: 68, name: "初级巫师", HP: 220, ATK: 370, DEF: 110, gold: 80, pos: 2},
                    {ID: 69, name: "高级巫师", HP: 200, ATK: 380, DEF: 130, gold: 90, pos: 3}
                ]
            },
            Orcish: {
                src: "./img/figure/Monster09-01.png",
                category: [
                    {ID: 70, name: "兽人", HP: 260, ATK: 85, DEF: 5, gold: 18, pos: 0},
                    {ID: 71, name: "兽人武士", HP: 320, ATK: 120, DEF: 15, gold: 30, pos: 1}
                ]
            },
            Malphite: {
                src: "./img/figure/Monster10-01.png",
                category: [
                    {ID: 72, name: "石头人", HP: 20, ATK: 100, DEF: 68, gold: 28, pos: 0}
                ]
            },
            Specter: {
                src: "./img/figure/Monster11-01.png",
                category: [
                    {ID: 73, name: "幽灵", HP: 320, ATK: 140, DEF: 20, gold: 30, pos: 0}
                ]
            },
            Exorcist: {
                src: "./img/figure/Monster06-05.png",
                category: [
                    {ID: 74, name: "大法师", HP: 4500, ATK: 560, DEF: 310, gold: 1000, pos: 0}
                ]
            },
            Knight: {
                src: "./img/figure/Monster07-01.png",
                category: [
                    {ID: 75, name: "骑士队长", HP: 120, ATK: 150, DEF: 50, gold: 100, pos: 0},
                    {ID: 76, name: "骑士", HP: 160, ATK: 230, DEF: 105, gold: 65, pos: 1}
                ]
            },
            Warrior: {
                src: "./img/figure/Monster07-04.png",
                category: [
                    {ID: 77, name: "战士", HP: 200, ATK: 200, DEF: 65, gold: 45, pos: 0}
                ]
            },
            MagicGuard: {
                src: "./img/figure/Monster08-01.png",
                range: {ID: 117, name: "魔法域"},
                category: [
                    {ID: 78, name: "魔法警卫", HP: 230, ATK: 450, DEF: 100, gold: 100, pos: 0}
                ]
            },
            BlackKnight: {
                src: "./img/figure/Monster07-08.png",
                category: [
                    {ID: 79, name: "黑暗骑士", HP: 180, ATK: 430, DEF: 210, gold: 120, pos: 0}
                ]
            },
            Devil: {
                src: "./img/figure/Monster08-02.png",
                category: [
                    {
                        ID: 80,
                        name: "假魔王",
                        HP: 8000,
                        ATK: 5000,
                        DEF: 1000,
                        gold: 5000,
                        pos: 0,
                        message: "啊！我怎么被封印了，只剩下一成功力了！！！"
                    },
                    {ID: 81, name: "真魔王", HP: 5000, ATK: 1580, DEF: 190, gold: 500, pos: 1, message: "恭喜通关！！！"}
                ]
            },
            BOSS: {
                src: "./img/figure/Monster12-03.png",
                src_big: "./img/figure/Monster12-01.png",
                category: [
                    {ID: 82, name: "魔龙", HP: 1500, ATK: 600, DEF: 250, gold: 800, pos: 0},
                    {ID: 83, name: "大乌贼", HP: 1200, ATK: 180, DEF: 20, gold: 100, pos: 1}
                ]
            }
        }
    },
    adorn: {
        floor: {
            src: "./img/other/Event01-Floor01.png",
            base: {ID: 0, name: "地板", pos: 0},
            wall: {ID: 122, name: "假墙", pos: 3},
            empty: {ID: 123, name: "假地板", pos: 0},
            trap: {ID: 124, name: "机关", pos: 0},
            ladder: {ID: 118, name: "天梯"},
            attack: {ID: 119, name: "攻击BOSS", pos: 0}
        },
        wall: {
            src: "./img/other/Event01-Wall01.png",
            base: {ID: 1, name: "墙", pos: 1},
            ironDoor: {ID: 6, name: "铁门", pos: 3}
        },
        door: {
            src: "./img/other/Event01-Door01.png",
            yellow: {ID: 2, name: "黄门", pos: 0},
            blue: {ID: 3, name: "蓝门", pos: 1},
            red: {ID: 4, name: "红门", pos: 2},
            flower: {ID: 5, name: "花门", pos: 3}
        },
        scene: {
            src: "./img/other/Event01-Lava01.png",
            magma: {ID: 120, name: "岩浆", posX: 0, posY: 0},
            star: {ID: 121, name: "星星", posX: 0, posY: 3}
        },
        stairs: {
            src: "./img/other/Event01-Stairs01.png",
            down: {ID: 7, name: "楼梯下", pos: 0},
            up: {ID: 8, name: "楼梯上", pos: 1}
        }
    },
    prop: {
        key: {
            src: "./img/prop/prop01-01.png",
            yellow: {ID: 9, name: "黄钥匙", posX: 0, posY: 0},
            blue: {ID: 10, name: "蓝钥匙", posX: 1, posY: 0},
            red: {ID: 11, name: "红钥匙", posX: 2, posY: 0},
            magic: {ID: 12, name: "魔法钥匙", posX: 0, posY: 1}
        },
        potion: {
            src: "./img/prop/prop01-02.png",
            red: {ID: 13, name: "红药水", pos: 0},
            blue: {ID: 14, name: "蓝药水", pos: 1}
        },
        gem: {
            src: "./img/prop/prop01-Gem01.png",
            red: {ID: 15, name: "红宝石", pos: 0},
            blue: {ID: 16, name: "蓝宝石", pos: 1}
        },
        store: {
            name: "商店", src: "./img/other/Event01-Store01.png",
            fragments: [
                {ID: 125, posX: 0, posY: 0},
                {ID: 126, posX: 1, posY: 0},
                {ID: 127, posX: 2, posY: 0}
            ],
            base: {ID: 126, posX: 0, posY: 3}
        },
        tool_always: {
            src: "./img/prop/prop01-05.png",
            manual: {ID: 18, name: "怪物手册", posX: 0, posY: 0},
            notepad: {ID: 19, name: "记事本", posX: 1, posY: 0},
            luckyCoins: {ID: 20, name: "幸运金币", posX: 3, posY: 0},
            cross: {ID: 21, name: "十字架", posX: 1, posY: 2},
            flyingWand: {ID: 22, name: "飞行魔杖", posX: 2, posY: 3},
            effects: {ID: 100, name: "攻击特效", posX: 2, posY: 2}
        },
        tool_limit: {
            src: "./img/prop/prop01-06.png",
            pickax: {ID: 41, name: "镐", posX: 0, posY: 0},
            superMaigcMattok: {ID: 42, name: "地震卷轴", posX: 3, posY: 0},
            snowCrystal: {ID: 43, name: "冰冻魔法", posX: 2, posY: 0},
            bomb: {ID: 44, name: "炸弹", posX: 0, posY: 2},
            dragonSlayer: {ID: 45, name: "屠龙匕", posX: 2, posY: 2},
            flying: {
                up: {ID: 46, name: "向上飞行器", posX: 2, posY: 1},
                down: {ID: 47, name: "向下飞行器", posX: 1, posY: 1},
                center: {ID: 48, name: "中心飞行器", posX: 0, posY: 1, num: 3}
            },
            holyWater: {ID: 49, name: "圣水", posX: 3, posY: 2}
        },
        tier1_10: {
            store: {ATK: 2, DEF: 4},
            potion: {
                red: {HP: 50},
                blue: {HP: 200}
            },
            gem: {
                red: {ATK: 1},
                blue: {DEF: 1}
            }
        },
        tier11_20: {
            store: {ATK: 4, DEF: 8},
            potion: {
                red: {HP: 100},
                blue: {HP: 400}
            },
            gem: {
                red: {ATK: 2},
                blue: {DEF: 2}
            }
        },
        tier31_40: {
            store: {ATK: 6, DEF: 12},
            potion: {
                red: {HP: 200},
                blue: {HP: 800}
            },
            gem: {
                red: {ATK: 4},
                blue: {DEF: 4}
            }
        },
        tier41_50: {
            store: {HP: 500, ATK: 10, DEF: 20},
            potion: {
                red: {HP: 250},
                blue: {HP: 1000}
            },
            gem: {
                red: {ATK: 5},
                blue: {DEF: 5}
            }
        }
    },
    weapon: {
        src: "./img/weapon/weapon01-08.png",
        category: [
            {
                sword: {ID: 31, name: "铁剑", ATK: 10, posX: 0, posY: 0},
                shield: {ID: 32, name: "铁盾", DEF: 10, posX: 0, posY: 2}
            },
            {
                sword: {ID: 33, name: "银剑", ATK: 20, posX: 1, posY: 0},
                shield: {ID: 34, name: "银盾", DEF: 20, posX: 1, posY: 2}
            },
            {
                sword: {ID: 35, name: "骑士剑", ATK: 40, posX: 2, posY: 0},
                shield: {ID: 36, name: "骑士盾", DEF: 40, posX: 2, posY: 2}
            },
            {
                sword: {ID: 37, name: "圣剑", ATK: 80, posX: 3, posY: 0},
                shield: {ID: 38, name: "圣盾", DEF: 80, posX: 3, posY: 2}
            },
            {
                sword: {ID: 39, name: "神圣剑", ATK: 100, posX: 0, posY: 1},
                shield: {ID: 40, name: "神圣盾", DEF: 100, posX: 0, posY: 3}
            }
        ]
    },
    notepad: {
        tier1: {
            seer: {message: "欢迎来到魔塔世界! 你的剑和盾被警卫拿走了，你必须先找到武器。我知道铁剑在5楼，铁盾在9楼，你最好先取到它们。                                                      ", type: 0}
        },
        tier2: {
            seer: {
                message: "谢谢你救了我，为感谢你的帮助，我送给你1000金币                                                      ",
                prop: {gold: 1000, isBuying: 3},
                type: 0
            },
            trader: {
                message: "谢谢你救了我，为感谢你的帮助，我将帮你把防御力和攻击力各提升10%，当然了这不需要金币.                                                     ",
                prop: {  ATK: 0.1, DEF: 0.1, isBuying: 3,  gold: 50},
                type: 0
            },
            thief: {
                message: "谢谢你救了我，我可以帮你在魔龙前打开一条暗道，我现在就去35楼                                                      ",
                prop: {tier: 35, location: [3, 9], ID: 122, isBuying: 3},
                type: 0
            }
        },
        tier3: {
            seer: {
                message: "我给你怪物手册, 你可以用快捷键<H>去使用它。它能预测出当前楼层各类怪物对你的伤害                                                      ",
                prop: {"manual": 18},
                type: 0
            }
        },
        tier4: {
            seer: {message: "有些门不能用钥匙打开，只有当你打败它的守卫后才会自动打开。                                                                        ", type: 0}
        },
        tier6: {
            seer: {message: "魔塔一共50层，每10层为一个区域。如果不打败此区域的头目就不能到更高的地方                                                                        。", type: 0},
            trader: {
                message: "我有1把蓝钥匙，你出50个金币就卖给你。",
                prop: {num: 1, ID: 10, gold: 50, isBuying: 1, name:"blueKey" , x:3, y:7},
                type: 1
            }
        },
        tier7: {
            seer: {message: "在商店里你最好选择提升防御，只有在攻击力低于敌人的防御力时才提升攻击力                                                                        。", type: 0},
            trader: {
                message: "我有5把黄钥匙，你出50个金币就卖给你。",
                prop: {num: 5, ID: 9, gold: 50, isBuying: 1, name:"yellowKey", x:0, y:4},
                type: 1
            }
        },
        tier9: {
            seer: {message: "你是否注意到5,9,14,16,18墙有的与众不同?                                                                        ", type: 0}
        },
        tier11: {
            seer: {message: "我探访得知银盾在11楼，银剑在17楼，这个消息不知道对你是否有用?                                                                        ", type: 0}
        },
        tier12: {
            seer: {message: "如果你持有十字架，面对兽人和吸血鬼时你的攻击力加倍。在没有十字架的情况下你不可能打败吸血鬼。十字架被藏在高于15楼的墙内。                                                      ", type: 0},
            trader: {
                message: "我有1把红钥匙，你出800个金币就卖给你。",
                prop: {num: 1, ID: 11, gold: 800, isBuying: 1, name:"redKey", x:0, y:0},
                type: 1
            }
        },
        tier15: {
            thief: {message: "这大章鱼挡住了我前进的道路，现在暗道终于完工了，你现在最好也躲开它。                                                                        ", type: 0},
            trader: {
                message: "我有1把蓝钥匙你出200个金币就卖给你                                                                        ",
                prop: {num: 1, ID: 10, gold: 200, isBuying: 1, name:"blueKey", x:10, y:10},
                type: 1
            }
        },
        tier16: {
            seer: {message: "我听说在塔内有2把隐藏的红钥匙                                                                        ", type: 0}
        },
        tier18: {
            seer: {message: "在这个区域不多次提升攻击力，就不能打败石头人。切记前人教训！                                                                        ", type: 0}
        },
        tier21: {
            seer: {message: "大法师住在25楼，他是魔塔的主人。以你现在的状态去攻击他简直就是自杀。你应当在取得更高级别的道具后再去打败他。                                                      ", type: 0}
        },
        tier23: {
            seer: {message: "我没有什么可说的，但有一个确切的消息藏在这个楼层里。                                                                        ", type: 0}
        },
        tier24: {
            seer: {message: "魔塔有50层高，但似乎你不能直接到50楼。                                                                        ", type: 0}
        },
        tier27: {
            seer: {message: "如果你到27楼时状态为：生命1500，攻击80，防御98，拥有1蓝钥匙，5黄钥匙。那么祝贺你，你前期是比较成功的。                                                      ", type: 0}
        },
        tier28: {
            trader: {
                message: "我按100个金币1把的价格回收黄钥匙，你愿意出售吗？                                                      ",
                prop: {num: -1, ID: 9, gold: -100, isBuying: 0, name:"yellowKey", x:3, y:8},
                type: 1
            }
        },
        tier29: {
            thief: {message: "我刚完成暗道。每次你都及时赶到，你真行！                                                                        ", type: 0},
            trader: {
                message: "我按200个金币1把的价格回收蓝钥匙，你愿意出售吗？                                                                        ",
                prop: {num: -1, ID: 10, gold: -200, isBuying: 0, name:"blueKey", x:10, y:10},
                type: 1
            }
        },
        tier30: {
            trader: {
                message: "我按500个金币1把的价格回收红钥匙，你愿意出售吗？                                                                        ",
                prop: {num: -1, ID: 11, gold: -500, isBuying: 0, name:"redKey", x:5, y:10},
                type: 1
            }
        },
        tier31: {
            seer: {message: "双手剑士的攻击力太高了，你最好到能对他一击必杀时再与他战斗。                                                                        ", type: 0},
            trader: {
                message: "我有5把黄钥匙，你出1000个金币就卖给你。                                                                        ",
                prop: {num: 4, ID: 9, oNum: 1, oID: 10, gold: 1000, isBuying: 1 ,name:"yellowKey", x:10, y:0},
                type: 1
            }
        },
        tier33: {
            seer: {message: "别匆忙，放慢速度。                                                                        ", type: 0}
        },
        tier35: {
            thief: {message: "暗道已挖好，你可用它绕过魔龙。                                                                        ", type: 0}
        },
        tier36: {
            seer: {message: "如果你能用好4种移动宝物，你不用与强敌作战就能上楼。                                                                        ", type: 0}
        },
        tier37: {
            seer: {message: "你需要用地震卷轴取出37楼仓库内的所有宝物。                                                                        ", type: 0}
        },
        tier38: {
            seer: {message: "存放圣剑的房间的门坏了，你必须用镐破墙而入。                                                                        ", type: 0},
            trader: {
                message: "我有3把黄钥匙，你出200个金币就卖给你。                                                      ",
                prop: {num: 3, ID: 9, gold: 200, isBuying: 1, name:"yellowKey", x:1, y:5},
                type: 1
            }
        },
        tier39: {
            seer: {message: "谜题：“在3点，拥有传送功能的密宝就会出现。”                                                                        ", type: 0},
            trader: {
                message: "我有3把蓝钥匙，你出2000个金币就卖给你。                                                      ",
                prop: {num: 3, ID: 10, gold: 2000, isBuying: 1 ,name:"blueKey", x:1, y:8},
                type: 1
            }
        },
        tier41: {
            seer: {message: "塔内有个幸运金币。拥有它在打败敌人后能获得2倍的金钱。                                                                        ", type: 0}
        },
        tier42: {
            seer: {message: "巫师会用魔法攻击路过的人，在2个魔法警卫间通过会使你的生命减少一半。                                                                        ", type: 0}
        },
        tier45: {
            seer: {message: "44楼被藏在异空间，你只能用密宝才能到达。                                                                        ", type: 0},
            trader: {
                message: "给我1000个金币，我就提升你生命2000点。                                                                        ",
                prop: {num: 2000, gold: 1000, isBuying: 2},
                type: 1
            }
        },
        tier46: {
            seer: {message: "41楼事实上是左右对称的。                                                                        ", type: 0}
        },
        tier47: {
            seer: {message: "如果要打败魔龙你需要圣剑、圣盾、屠龙匕或更高等级的装备。                                                                        ", type: 0},
            trader: {
                message: "如果给我4000金币，我就把地震卷抽买给你。                                                                       ",
                prop: {num: 1, ID: 42, gold: 4000, isBuying: 1, name:"superMaigcMattok", x:1, y:4},
                type: 1
            }
        },
        tier48: {
            seer: {message: "象骰子上5的形状是一种封印魔法，你最好记住它在你与49楼假魔王战斗时有用。                                                                        ", type: 0}
        }
    }
};


