import { RandomRange } from './RandomRange'; 
import { Direction } from './Enums';
import { CellType } from './Enums';
import { Grid } from './Grid';
import { Room } from './Room';
import { Coordinate } from './Coordinate';

//TODO: Clean up pos.x and pos.y and replace with Coordinate Object

export class Hallway
{
    length: number

    pos: Coordinate;

    endPos: Coordinate;

    direction: Direction;

    constructor(lengthRange: RandomRange, xPos: number, yPos: number, direction: Direction)
    {
        let hallwayLength: number = lengthRange.random();
        this.length = hallwayLength;

        this.pos = new Coordinate(xPos, yPos);

        //default values, will be set later when hallway is drawn
        this.endPos = new Coordinate(0, 0);

        this.direction = direction;
    }

    draw(grid: Grid, room: Room)
    {
        let xCoord = -1;
        let yCoord = -1;

        //change direction if hallway is going to go outside the bounds of the grid
        if (this.checkBoundaryCollision(room, this.direction, grid))
        {
            this.direction = (this.direction + 2) % 4;
        }
        

        switch (this.direction)
        {
            case Direction.North:

                //Find the offset of the hallway
                 this.pos.x = this.offSetCoord(this.pos.x, room.width);

                //draw the hallway
                yCoord = this.pos.y;
                for(let i = 0; i < this.length; i++)
                {
                    grid.cells[yCoord][this.pos.x].cellType = CellType.Ground;
                    yCoord--;
                }

                //set end position for new room to be made
                this.endPos.x = this.pos.x;
                this.endPos.y = yCoord;

                break;
            case Direction.East:

                this.pos.x += room.width;
                this.pos.y = this.offSetCoord(this.pos.y, room.height);

                xCoord = this.pos.x;
                for (let i = 0; i < this.length; i++)
                {
                    grid.cells[this.pos.y][xCoord].cellType = CellType.Ground;
                    xCoord++;
                }

                this.endPos.x = xCoord;
                this.endPos.y = this.pos.y

                break;
            case Direction.West:

                this.pos.y = this.offSetCoord(this.pos.y, room.height);

                xCoord = this.pos.x;
                for(let i = 0; i < this.length; i++)
                {
                    grid.cells[this.pos.y][xCoord].cellType = CellType.Ground;
                    xCoord--;                    
                }

                this.endPos.x = xCoord;
                this.endPos.y = this.pos.y;

                break;
            case Direction.South:

                this.pos.x = this.offSetCoord(this.pos.x, room.width);
                this.pos.y += room.height;

                yCoord = this.pos.y;
                for (let i = 0; i < this.length; i++)
                {
                    grid.cells[yCoord][this.pos.x].cellType = CellType.Ground;
                    yCoord++;
                }

                this.endPos.x = this.pos.x;
                this.endPos.y = yCoord;

                break; 
        }
    }

    checkBoundaryCollision(room: Room, direction: Direction, grid: Grid): boolean
    {
        console.log("Direction: ", direction);
        console.log("Hallway: ", this);

        switch(direction)
        {
            case Direction.North:

                if ((this.pos.y - this.length) < 0)
                    return true;                 
                    

                break;
            case Direction.East:

                //we must account for the room width here as well
                if (((this.pos.x + room.width) + this.length) > grid.cells.length - 1)
                    return true;
                    

                break;
            case Direction.West:

                if ((this.pos.x - this.length)< 0)
                    return true;
                    

                break;
            case Direction.South:

                if (((this.pos.y + room.height) + this.length) > grid.cells.length - 1)
                    return true;
                   
                break;
        }

        return false;
    }

    offSetCoord(coord: number, maxOffset: number): number
    {
        return RandomRange.getRangeExclusive(coord, coord + maxOffset);
    }
}