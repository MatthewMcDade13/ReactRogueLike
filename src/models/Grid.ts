import { Cell } from './Cell';
import { CellType } from './Enums';
import { Direction } from './Enums';
import { Entity } from './Entity';
import { Weapon } from './Weapon';
import { Potion } from './Potion';
import { Room } from './Room';
import { Hallway } from './Hallway';
import { RandomRange } from './RandomRange'; 

//TODO: Perhaps have this object take care of generating enemies, weapons, potion, and level layout?
export class Grid
{
    cells: Array<Array<Cell>>;
    private rooms: Array<Room>;

    private roomSize: RandomRange;
    private hallwaySize: RandomRange;

    private numberOfRooms: RandomRange;

    constructor(width: number, height: number)
    {
        let newBoard: Array<Array<Cell>> = [];

        for (let r = 0; r < height; r++)
        {
            let row: Array<Cell> = [];

            for (let c = 0; c < width; c++)
            {
                row.push(new Cell());
            }

            newBoard.push(row);
        }

        this.cells =  newBoard;

        this.roomSize = new RandomRange(4, 9);
        this.hallwaySize = new RandomRange(3, 5);
        this.numberOfRooms = new RandomRange(30, 40);
    }

    private resetGrid()
    {
        for(let r = 0; r < this.cells.length; r++)
        {
            for (let c = 0; c < this.cells[r].length; c++)
            {
                this.cells[r][c].resetToDefaultValues();
            }
        }        
    }

    createLevel()
    {
        this.resetGrid();
        this.drawGrid()
    }

    private drawGrid()
    {
        let numberOfRooms: number = this.numberOfRooms.random();

        let randRow: number = -1;
        let randCol: number = -1;
        let room: Room = null;
        let nextRoom: Room = null;
        let hallway: Hallway = null;
        let randDir: Direction = RandomRange.getRangeInclusive(0, 3);

        //Pick a random spot on the grid for the first room
        do
        {
            randRow = Math.floor(Math.random() * this.cells.length);
            randCol = Math.floor(Math.random() * this.cells[0].length);
            room = new Room(this.roomSize, this.roomSize, randCol, randRow);
        } 
        while((room.xPos + room.width) > this.cells[0].length - 1 ||
            (room.yPos + room.height) > this.cells.length - 1)

        //create rooms
        for (let i = 0; i < numberOfRooms; i++)
        {
            //get a random direction for the hallawy
            randDir = RandomRange.getRangeInclusive(0, 3);

            room.draw(this);

            hallway = new Hallway(this.hallwaySize, room.xPos, room.yPos, randDir);

            hallway.draw(this, room);            
            
            room = new Room(this.roomSize, this.roomSize, hallway.endX, hallway.endY);

            //Make sure that if we are headed north or west we offset the room
            //starting position by its width/height so that it doesnt overlap
            //the newly drawn hallway that leads to it
            if (hallway.direction === Direction.North)
                room.yPos -= (room.height - 1);
                
            else if (hallway.direction === Direction.West)
                room.xPos -= (room.width - 1);

            //ensure room start does not go out of bounds of the grid,
            //if so just set to zero
            room.xPos < 0 ? room.xPos = 0 : null;
            room.yPos < 0 ? room.yPos = 0 : null;
                
        }

        //draw last room so that we dont end with a hallway
         room.draw(this);
    }
}