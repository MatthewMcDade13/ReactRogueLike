import { IGameObject } from './IGameObject';
import { GameObjectType } from './Enums';
import { RandomRange } from './RandomRange';

export class Weapon implements IGameObject
{
    name: string;
    attackRange: RandomRange;

    readonly type: GameObjectType;

    constructor(name: string, attackRange: RandomRange)
    {
        this.name = name;
        this.attackRange = attackRange;
        this.type = GameObjectType.Weapon;
    }
}