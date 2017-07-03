import * as React from 'react';
import { Cell } from '../../models/Cell';
import { CellType } from '../../models/Enums';
import { GameObjectType } from '../../models/Enums';

export interface ITileProps
{
    cell: Cell
}


export function Tile(props: ITileProps)
{
    if (props.cell.object)
    {
        //Render Player
        if (props.cell.object.type === GameObjectType.Player)
        {
            return (<td className="player"/>);
        }
        //Render Enemy
        else if (props.cell.object.type === GameObjectType.Enemy)
        {
            return (<td className="enemy"/>);
        }
        //Render Potion
        else if (props.cell.object.type === GameObjectType.Potion)
        {
            return (<td className="potion"/>);
        }
        //Render Weapon
        else if (props.cell.object.type === GameObjectType.Weapon)
        {
            return (<td className="weapon"/>);
        }
        //Render Exit
        else if (props.cell.object.type === GameObjectType.ExitDoor)
        {
            return (<td className="exit-door"/>);
        }
    }
    //Render Wall
    else if (props.cell.cellType === CellType.Wall)
    {
        return (<td className="wall"/>);
    }

    //Render blank cell
    return(
        <td />
    );
}