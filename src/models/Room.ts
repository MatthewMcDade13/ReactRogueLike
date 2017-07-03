import { RandomRange } from './RandomRange';
import { CellType } from './Enums';
import { Grid } from './Grid';

export class Room
{
    height: number;
    width: number;

    //x and y position of room is top left corner of room
    xPos: number;
    yPos: number;

    constructor(heightRange: RandomRange, widthRange: RandomRange, xPos: number, yPos: number)
    {
        let roomHeight: number = heightRange.random();
        let roomWidth: number = heightRange.random();

        this.height = roomHeight;
        this.width = roomWidth;

        this.xPos = xPos;
        this.yPos = yPos;
    }

    draw(grid: Grid)
    {
        let xOffset: number = this.xPos + this.width;
        let yOffset: number = this.yPos + this.height;
        let gridFirstDimension: number = grid.cells[0].length - 1;
        let gridSecondDimension: number = grid.cells.length - 1;
        
        //If room is going to go outside the bounds of the grid,
        //offset the start position by the how many cells it is overflowing so that
        //grid does not go out of bounds
        if (xOffset > gridFirstDimension)
        {
            let overflow = xOffset - (gridFirstDimension);
            this.xPos -= overflow;
        }
        
        if (yOffset > gridSecondDimension)
        {
            let overflow = yOffset - (gridSecondDimension);
            this.yPos -= overflow;
        }



        for (let j = 0; j < this.height; j++)
        {
            let yCoord: number = this.yPos + j;

            for (let z = 0; z < this.width; z++)
            {
                let xCoord: number = this.xPos + z;

                grid.cells[yCoord][xCoord].cellType = CellType.Ground;
            }
        }
    }
}