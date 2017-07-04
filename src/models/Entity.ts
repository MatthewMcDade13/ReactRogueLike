import { Weapon } from './Weapon';
import { GameObjectType } from './Enums';
import { IGameObject } from './IGameObject';
import { RandomRange } from './RandomRange';
import { Coordinate } from './Coordinate';

//TODO: Clean up xPos and yPos and replace with Coordinate Object

export class Entity implements IGameObject
{
    isAlive: boolean;
    pos: Coordinate;
    health: number;
    weapon: Weapon;
    type: GameObjectType.Player | GameObjectType.Enemy;

    constructor(x: number = 0, y: number = 0, 
                health = 100, weapon = new Weapon("Stick", new RandomRange(1 , 3)),
                type: GameObjectType.Player | GameObjectType.Enemy, modifier: number = 1)
    {
        this.pos = new Coordinate(x, y);
        this.health = health * modifier;
        this.weapon = weapon;
        this.type = type;
        this.isAlive = true;
    }

    attack(target: Entity)
    {
        if (target === this)
        {
            throw new Error("Cannot attack self!");
        }


        target.takeDamage(this.weapon.attackRange.random());
    }

    private takeDamage(damage: number)
    {
        this.health = this.health - damage;
        if (this.health <= 0)
        {
            this.isAlive = false;
        }
    }
}