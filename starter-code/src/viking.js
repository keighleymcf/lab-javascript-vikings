// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0)
      return this.name + " has received " + damage + " points of damage";
    else return this.name + " has died in act of combat";
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0)
      return "A Saxon has received " + damage + " points of damage";
    else return "A Saxon has died in combat";
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    let target = this.saxonArmy[
      Math.round(Math.random() * this.saxonArmy.length)
    ];
    console.log(target);
    target.receiveDamage(viking.strength);
    if (target.health <= 0) {
      this.saxonArmy.splice(indexOf.target);
    }
  }
  saxonAttack() {}
  showStatus() {
    if (!saxonArray.length) return "Vikings have won the war of the century!";
    else if (!vikingArray.length)
      return "Saxons have fought for their lives and survive another day...";
    else if (vikingArray.length && saxonArray.length)
      return "Vikings and Saxons are still in the thick of battle.";
  }
}
