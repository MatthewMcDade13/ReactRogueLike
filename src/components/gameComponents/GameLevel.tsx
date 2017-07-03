import * as React from 'react';
import { Entity } from '../../models/Entity';
import { RandomRange } from '../../models/RandomRange';
import { GameObjectType } from '../../models/Enums';
import { IGameObject } from '../../models/IGameObject';
import { Weapon } from '../../models/Weapon';
import { Potion } from '../../models/Potion';
import { Grid } from '../../models/Grid';
import { Cell } from '../../models/Cell';
import { Coordinate } from '../../models/Coordinate';
import { CellType } from '../../models/Enums';
import { BoardRow } from './BoardRow';
import { Tile } from './Tile';

export interface IGameLevelState
{
    grid: Grid
    levelNumber: number;
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
        let position: Coordinate = null;

        position = this.getRandomLocation(initGrid);

        props.spawnPlayer(position.x, position.y);        

        initGrid.cells[position.y][position.x].object = props.player;

        let exitTile: CellType;
        position = this.getRandomLocation(initGrid);

        initGrid.cells[position.y][position.x].cellType = CellType.Exit;
        this.spawnEnemies(new RandomRange(3, 5), new RandomRange(0.1, 0.3), initGrid);

        /**End Here**/
        

        this.state = {
            grid: initGrid,
            levelNumber: 0
        };
    }

    componentDidMount(): void
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

    componentDidUpdate(prevProps, prevState): void
    {
        //If we updated the level, create a new one
        if (this.state.levelNumber !== prevState.levelNumber)
        {
            this.createNewLevel();
        }
    }

    getRandomLocation(grid: Grid): Coordinate
    {
        let randX: number = -1;
        let randY: number = -1;
        do
        {
            randX = RandomRange.getRangeExclusive(0, grid.cells[0].length);
            randY = RandomRange.getRangeExclusive(0, grid.cells.length);
        }
        while(grid.cells[randY][randX].cellType === CellType.Wall ||
              grid.cells[randY][randX].cellType === CellType.Exit)

        return new Coordinate(randX, randY);
    }

    spawnEnemies(enemyRange: RandomRange, modifierRange: RandomRange, firstGrid?: Grid): void
    {
        let grid: Grid = firstGrid? firstGrid : this.state.grid;
        const level = firstGrid? 0 : this.state.levelNumber;
         
        let enemies: number = enemyRange.random();

        let enemy: Entity = null;
        let position: Coordinate = null;
        let attackRange: RandomRange = null;

        if (level === 0) attackRange = new RandomRange(5, 10);
        else if (level === 1) attackRange = new RandomRange(15, 20)
        else if (level === 2) attackRange = new RandomRange(11, 14);
        else if (level === 3) attackRange = new RandomRange(15, 25);
        else if (level === 4) attackRange = new RandomRange(25, 35);

        for (let i = 0; i < enemies; i++)
        {
            position = this.getRandomLocation(grid)
            
            enemy = new Entity(position.x, position.y, 100, new Weapon("Claw", attackRange), GameObjectType.Enemy, modifierRange.randomFloat());
            grid.cells[position.y][position.x].object = enemy;
        }
    }

    spawnItems(potionHealthRange: RandomRange): void
    {
        //TODO: Finish this func
        const level: number = this.state.levelNumber;
        let weapon: Weapon = null;

        if (level === 0) weapon = new Weapon("Sword", new RandomRange(3, 25))
        else if (level === 1) weapon = new Weapon("Axe", new RandomRange(10, 35))
        else if (level === 2) weapon = new Weapon("Mace", new RandomRange(25, 40))
        else if (level === 3) weapon = new Weapon("Claymore", new RandomRange(40, 48))
        else if (level === 4) weapon = new Weapon("Katana", new RandomRange(55, 78))
    }

    //Checks if next cell exists (is not an index out of range) and tries to move it it
    //If there are no collisions with walls or enemies, player is moved in the direction they pressed
    movePlayer = (direction: number) => {
        let player: Entity = this.props.player;
        let grid: Grid = this.state.grid;
           
        //move left
        if (direction === 37 || direction === 65)
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
        //move up
        else if (direction === 38 || direction === 87)
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
        //move right
        else if (direction === 39 || direction === 68)
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
        //move down
        else if (direction === 40 || direction === 83)
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

        this.setState({
            grid: grid
        });
    }
    

    componentWillUnmount(): void
    {

    }

    detectCollision = (yNextPos: number, xNextPos: number) => {
        let board = this.state.grid;

        //check if we are going outside the bounds of the grid,
        //if so just return
         if (yNextPos > board.cells.length - 1 || yNextPos < 0 ||
             xNextPos > board.cells[0].length - 1 ||  xNextPos < 0)
        {
            return true;
        }
        
        //Make sure the next object in the next cell contains something
        if (board.cells[yNextPos][xNextPos].object !== null)
        {
            //Collision with an Enemy
            if (board.cells[yNextPos][xNextPos].object.type === GameObjectType.Enemy)
            {;
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
        }
        //Check if we are colliding with an exit
        else if (board.cells[yNextPos][xNextPos].cellType === CellType.Exit)
        {
            //start new level
            this.setState({
                    levelNumber: this.state.levelNumber + 1
                });
        }
        //Otherwise, check if it is a wall
        else if (board.cells[yNextPos][xNextPos].cellType === CellType.Wall)
        {
            return true;
        }

        return false;
    }

    createNewLevel = () => {
        let grid: Grid = this.state.grid;
        let level: number = this.state.levelNumber;

        grid.createLevel();

        //Populate the level
        switch (level)
        {
            case 1:
            this.spawnEnemies(new RandomRange(3, 5), new RandomRange(0.1, 0.3));

            break;            
            case 2:

            this.spawnEnemies(new RandomRange(5, 10), new RandomRange(0.3, 0.42));
            break;
            case 3:

            this.spawnEnemies(new RandomRange(11, 15), new RandomRange(0.42, 0.55));
            break;
            case 4:

            this.spawnEnemies(new RandomRange(15, 16), new RandomRange(0.55, 0.75));
            break;
        }        

        this.setState({
            grid: grid
        });
    }

    render(): JSX.Element
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