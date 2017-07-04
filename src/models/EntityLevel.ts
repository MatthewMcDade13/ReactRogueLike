
export class EntityLevel
{
    level: number;

    private currentXP: number;
    private XPIncrementAmount: number;    
    private XPToLevel: number;

    constructor(level: number = 1)
    {
        this.level = level;

        this.setLevelXP();
    }

    //can pass in a callback function for modifing data based on if level has gone up or not
    gainXP(callback?): Function
    {
        let didLevel: boolean = false;
        this.currentXP += this.XPIncrementAmount;

        if (this.currentXP >= this.XPToLevel)
        {
            this.level++;
            didLevel = true;
            this.setLevelXP();
        }

        return callback(didLevel);
    }

    private setLevelXP(): void
    {
        this.XPIncrementAmount = this.level * 5;
        this.XPToLevel = this.level * 20;
        this.currentXP = 0;
    }

    getXPToLevel(): number
    {
        return this.XPToLevel;
    }

    getXP(): number
    {
        return this.currentXP;
    }
}