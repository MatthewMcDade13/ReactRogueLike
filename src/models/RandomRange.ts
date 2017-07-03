

export class RandomRange
{
    min: number;
    max: number;

    constructor(min: number, max: number)
    {
        this.min = min;
        this.max = max;
    }

    random(): number
    {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    }

    static getRangeInclusive(min: number, max: number)
    {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    static getRangeExclusive(min: number, max: number)
    {
        return Math.floor(Math.random() * (max - min) + min);
    }
}