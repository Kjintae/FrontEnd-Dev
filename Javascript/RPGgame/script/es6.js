"use strict";
const logMessage = (msg, color) => {
    if (!color) { color = 'black'; }
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.style.color = color;
    document.getElementById('log').appendChild(div);
};


let gameover = false;
let battle = false;
class Character {
    constructor(name, hp, att) {
        this.name = name;
        this.hp = hp;
        this.att = att;
        //def 추가하기
    }
    attacked(damage) {
        this.hp -= damage;
        logMessage(this.name + '의 체력이 ' + this.hp + '가 되었습니다');
        if (this.hp <= 0) {
            battle = false;
        }
    }
    attack(target) {
        logMessage(this.name + '이 ' + target.name + '을 공격합니다');
        target.attacked(this.att);
    }
};

class Hero extends Character {
    constructor(name, hp, att, lev, xp){
        super(name, hp, att); // Character 의 파라미터 애들
        this.lev = lev || 1;
        this.xp = xp || 0;
    }
    attacked(damage) {
        this.hp -= damage;
        logMessage(this.name + '님의 체력이 ' + this.hp + '남았습니다');
        if (this.hp <= 0) {
            logMessage('죽었습니다. 레벨' + this.lev + '에서 모험이 끝납니다. F5를 눌러 다시 시작하세요', 'red');
            battle = false;
            gameover = true;
        }
    }
    attack(target) {
        logMessage(this.name + '님이 ' + target.name + '을 공격합니다');
        target.attacked(this.att);
        if (target.hp <= 0) {
            this.gainXp(target);
        }
    }
    gainXp(target) {
        logMessage('전투에서 승리하여 ' + target.xp + '의 경험치를 얻습니다', 'blue');
        this.xp += target.xp;
        if (this.xp > 100 + 10 * this.lev) {
            this.lev++;
            logMessage('레벨업! ' + this.lev + ' 레벨이 되었습니다', 'blue');
            this.hp = 100 + this.lev * 10;
            this.xp -= 10 * this.lev + 100;
        }
    }
};

class Monster extends Character {
    constructor(name, hp, att, lev, xp) {
        super(name, hp, att);
        this.lev = lev || 1;
        this.xp = xp || 10;
    }
};

const makeMonster = () => {
    const monsterArray = [
        ['rabbit', 25, 3, 1, 35],
        ['skeleton', 50, 6, 2, 50],
        ['soldier', 80, 4, 3, 75],
        ['king', 120, 9, 4, 110],
        ['devil', 500, 25, 6, 250]
    ];

    const monster = monsterArray[Math.floor(Math.random() * 5)];
    return new Monster(...monster);
};

let hero = new Hero(prompt('이름을 입력'), 100, 10);
logMessage(hero.name + '님이 모험을 시작합니다. 어느 정도까지 성장할 수 있을까요?');
while (!gameover) {
  var monster = makeMonster();
  logMessage(monster.name + '을 마주쳤습니다. 전투가 시작됩니다', 'green');
  battle = true;   while(battle) {
    hero.attack(monster);
    if (monster.hp > 0) {
      monster.attack(hero);
    }
  }
}