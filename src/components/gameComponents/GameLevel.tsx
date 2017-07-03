import * as React from 'react';
import { Entity } from '../../models/Entity';
import { RandomRange } from '../../models/RandomRange';
import { GameObjectType } from '../../models/Enums';
import { IGameObject } from '../../models/IGameObject';
import { Weapon } from '../../models/Weapon';
import { Potion } from '../../models/Potion';
import { Grid } from '../../models/Grid';
import { Cell } from '../../models/Cell';
import { CellType } from '../../models/Enums';
import { BoardRow } from './BoardRow';
import { Tile } from './Tile';

export interface IGameLevelState
{
    grid: Grid
}

export interface IGameLevelProps
{
    player: Entity;
    changePlayerDirection(direction: string);
    startBattle(enemy: Entity);
    healPlayer(potion: Potion);
    equipWeapon(weapon: Weapon);
    spawnPlayer(xPos: number, yPos: number);
}

export class GameLevel extends React.Component<IGameLevelProps, IGameLevelState>
{
    constructor(props: IGameLevelProps)
    {
        super(props);

        let gridHeight: number = 50;
        let gridWidth: number = 75;

        let initGrid: Grid = new Grid(gridWidth, gridHeight);
        initGrid.createLevel();

        
        /*********************************
        **For Tests Only, Clear out ASAP**
        **********************************/
        let playerTile: CellType;
        let randCol: number = -1;
        let randRow: number = -1;
        do
        {
             randCol = RandomRange.getRangeInclusive(0, gridWidth - 1);
             randRow = RandomRange.getRangeInclusive(0, gridHeight - 1);
             playerTile = initGrid.cells[randRow][randCol].cellType;
        }
        while (playerTile === CellType.Wall)

        props.spawnPlayer(randCol, randRow);
        console.log(randRow, randCol);

        initGrid.cells[randRow][randCol].object = props.player;

        /**End Here**/
        
        //Place the player on the board at its starting position
        // initGrid.cells[props.player.yPos][props.player.xPos].object = props.player;

        // initGrid.cells[0][4].object = new Entity(0, 4, 25, new Weapon("Claws", new RandomRange(8 ,11)), GameObjectType.Enemy);
        // initGrid.cells[2][5].object = new Potion(25);
        // initGrid.cells[4][2].object = new Weapon("NiggBeater", new RandomRange(6.9, 69));

        this.state = {
            grid: initGrid
        };
    }

    componentDidMount()
    {        
        document.addEventListener("keydown", (event) => {            
            if ((event.keyCode >= 37 && event.keyCode <= 40) || //arrow keys
                event.keyCode === 65 || event.keyCode === 87 || // a and w keys
                event.keyCode === 68 || event.keyCode === 83)   // d and s keys
            {
               this.movePlayer(event.keyCode);
            }            
        });
    }

    //Checks if next cell exists (is not an index out of range) and tries to move it it
    //If there are no collisions with walls or enemies, player is moved in the direction they pressed
    movePlayer = (direction: number) => {
        let player: Entity = this.props.player;
        let grid: Grid = this.state.grid;
           
        //move left
        if (direction === 37 || direction === 65)
        {
            try
            {
                if (!this.detectCollision(player.yPos, player.xPos - 1))
                {
                    grid.cells[player.yPos][player.xPos].object = null;
                    grid.cells[player.yPos][player.xPos - 1].object = player;
                    this.props.changePlayerDirection("left");
                }
                else
                {
                    return;
                }
            }
            catch (exception)
            {
                return;
            }         
        }
        //move up
        else if (direction === 38 || direction === 87)
        {
            try
            {
                if (!this.detectCollision(player.yPos - 1, player.xPos))
                {
                    grid.cells[player.yPos][player.xPos].object = null;
                    grid.cells[player.yPos - 1][player.xPos].object = player;
                    this.props.changePlayerDirection("up");
                }
                else
                {
                    return;
                }
            }
            catch (exception)
            {
                return;
            }
        }
        //move right
        else if (direction === 39 || direction === 68)
        {
            try
            {
                
                if (!this.detectCollision(player.yPos, player.xPos + 1))
                {
                    grid.cells[player.yPos][player.xPos].object = null;
                    grid.cells[player.yPos][player.xPos + 1].object = player;
                    this.props.changePlayerDirection("right");
                }
                else
                {
                    return;
                }
            }
            catch (exception)
            {
                return;
            }
        }
        //move down
        else if (direction === 40 || direction === 83)
        {
            try
            {
                if (!this.detectCollision(player.yPos + 1, player.xPos))
                {
                    grid.cells[player.yPos][player.xPos].object = null;
                    grid.cells[player.yPos + 1][player.xPos].object = player;
                    this.props.changePlayerDirection("down");
                }
                else
                {
                    return;
                }
            }
            catch (exception)
            {
                return;
            }
        }

        this.setState({
            grid: grid
        });
    }

    detectCollision = (yNextPos: number, xNextPos: number) => {
        let board = this.state.grid;
        
        //Make sure the next object in the next cell contains something
        if (board.cells[yNextPos][xNextPos].object !== null)
        {
            //Collision with an Enemy
            if (board.cells[yNextPos][xNextPos].object.type === GameObjectType.Enemy)
            {
                let enemy: Entity = board.cells[yNextPos][xNextPos].object as Entity;

                //Player and enemy battle when they collide!
                this.props.startBattle(enemy);

                //If enemy is dead after battle, set it to null and update the board
                if (!enemy.isAlive)
                {                 
                    enemy = null;

                    this.setState({
                        grid: board
                    });

                    return false;               
                }
                return true;
            }
            //Collision with a potion
            else if (board.cells[yNextPos][xNextPos].object.type === GameObjectType.Potion)
            {
                let potion: Potion = board.cells[yNextPos][xNextPos].object as Potion;
                this.props.healPlayer(potion);

                //Dispose of the potion after it is used

                potion = null;

                this.setState({
                    grid: board
                });

                return false;

            }
            //Collision with a weapon
            else if (board.cells[yNextPos][xNextPos].object.type === GameObjectType.Weapon)
            {
                let weapon: Weapon = board.cells[yNextPos][xNextPos].object as Weapon;

                this.props.equipWeapon(weapon);

                //Dispose of the weapon on the grid after it is picked up
                weapon = null;

                this.setState({
                    grid: board
                });
            }
            //Collision with an exit
            else if (board.cells[yNextPos][xNextPos].object.type === GameObjectType.ExitDoor)
            {
                //TODO: Load next level
            }
        }
        //Otherwise, check if it is a wall
        else if (board.cells[yNextPos][xNextPos].cellType === CellType.Wall)
        {
            return true;
        }

        return false;
    }

    createNewLevel = () => {
        
    }

    render()
    {
        let keyCounter: number = 0;
        return(
            <div className="grid-wrapper">
                <table className="grid">
                    <tbody>
                        {
                            this.state.grid.cells.map(row => <BoardRow>{row.map(cell => <Tile cell={cell} key={keyCounter++}></Tile>)}</BoardRow>)
                        }
                    </tbody>
                </table>
            </div>            
        );
    }
}