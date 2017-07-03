import { IGameObject } from './IGameObject';
import { GameObjectType } from './Enums';

export class Potion implements IGameObject
{
    readonly type: GameObjectType;
    healAmount: number;

    constructor(healAmount: number)
    {
        this.type = GameObjectType.Potion;
        this.healAmount = healAmount;
    }
}