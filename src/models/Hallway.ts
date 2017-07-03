import { RandomRange } from './RandomRange'; 
import { Direction } from './Enums';
import { CellType } from './Enums';
import { Grid } from './Grid';
import { Room } from './Room';

export class Hallway
{
    length: number

    xPos: number;
    yPos: number;

    endX: number;
    endY: number;

    direction: Direction;

    constructor(lengthRange: RandomRange, xPos: number, yPos: number, direction: Direction)
    {
        let hallwayLength: number = lengthRange.random();
        this.length = hallwayLength;

        this.xPos = xPos;
        this.yPos = yPos;

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
                 this.xPos = this.offSetCoord(this.xPos, room.width);

                //draw the hallway
                yCoord = this.yPos;
                for(let i = 0; i < this.length; i++)
                {
                    grid.cells[yCoord][this.xPos].cellType = CellType.Ground;
                    yCoord--;
                }

                //set end position for new room to be made
                this.endX = this.xPos;
                this.endY = yCoord;

                break;
            case Direction.East:

                this.xPos += room.width;
                this.yPos = this.offSetCoord(this.yPos, room.height);

                xCoord = this.xPos;
                for (let i = 0; i < this.length; i++)
                {
                    grid.cells[this.yPos][xCoord].cellType = CellType.Ground;
                    xCoord++;
                }

                this.endX = xCoord;
                this.endY = this.yPos

                break;
            case Direction.West:

                this.yPos = this.offSetCoord(this.yPos, room.height);

                xCoord = this.xPos;
                for(let i = 0; i < this.length; i++)
                {
                    grid.cells[this.yPos][xCoord].cellType = CellType.Ground;
                    xCoord--;                    
                }

                this.endX = xCoord;
                this.endY = this.yPos;

                break;
            case Direction.South:

                this.xPos = this.offSetCoord(this.xPos, room.width);
                this.yPos += room.height;

                yCoord = this.yPos;
                for (let i = 0; i < this.length; i++)
                {
                    grid.cells[yCoord][this.xPos].cellType = CellType.Ground;
                    yCoord++;
                }

                this.endX = this.xPos;
                this.endY = yCoord;

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

                if ((this.yPos - this.length) < 0)
                    return true;                 
                    

                break;
            case Direction.East:

                //we must account for the room width here as well
                if (((this.xPos + room.width) + this.length) > grid.cells.length - 1)
                    return true;
                    

                break;
            case Direction.West:

                if ((this.xPos - this.length)< 0)
                    return true;
                    

                break;
            case Direction.South:

                if (((this.yPos + room.height) + this.length) > grid.cells.length - 1)
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