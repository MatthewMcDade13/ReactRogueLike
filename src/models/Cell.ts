import { IGameObject } from './IGameObject';
import { GameObjectType } from './Enums';
import { CellType } from './Enums';


export class Cell
{
    //The object that sits on top of the current instance of cell
    //Is set to null if cell does not contain any objects on it
    object: IGameObject;
    cellType: CellType;

    constructor(object: IGameObject = null, cellType: CellType = CellType.Wall)
    {
        this.object = object;
        this.cellType = cellType;
    }

    resetToDefaultValues()
    {
        this.object = null;
        this.cellType = CellType.Wall;
    }
}