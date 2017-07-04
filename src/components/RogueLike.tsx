import * as React from 'react';
import { GameLevel } from './gameComponents/GameLevel';
import { Entity } from '../models/Entity';
import { RandomRange } from '../models/RandomRange';
import { GameObjectType } from '../models/Enums';
import { Weapon } from '../models/Weapon';
import { Potion } from '../models/Potion';
import { PlayerStats } from './gameComponents/PlayerStats';

export interface IRogueLikeState
{
    player: Entity
}

export class RogueLike extends React.Component<undefined, IRogueLikeState>
{
    constructor(props)
    {
        super(props);

        let initPlayer: Entity = new Entity(0, 0, 100, new Weapon("Stick", new RandomRange(5 , 10)), GameObjectType.Player, 1);

        this.state = {
            player: initPlayer
        };
    }

    changePlayerPosition = (direction: string) => {

        let playerDir: string = direction.toLowerCase();
        let player: Entity = this.state.player;

        if (playerDir === "up")
        {
            player.pos.y--;
        }
        else if (playerDir === "left")
        {
            player.pos.x--;
        }
        else if (playerDir === "right")
        {
            player.pos.x++;
        }
        else if (playerDir === "down")
        {
            player.pos.y++;
        }
        else
        {
            throw "Player direction was not specified";
        }
    }

    startBattle = (enemy: Entity) => {
        if (enemy === this.state.player)
        {
            throw new Error("Player cannot be passed into startBattle method in RogueLike Component");
        }
        let player = this.state.player;

        player.attack(enemy);
        enemy.attack(player);

        if (!player.isAlive)
        {
            //TODO: Show Game Over Screeen
            console.log("GAME OVER");
        }

        this.setState({
            player: player
        })
    }

    healPlayer = (potion: Potion) => {
        let player = this.state.player;

        player.health = player.health + potion.healAmount;

        this.setState({
            player: player
        });
    }

    equipWeapon = (weapon: Weapon) => {
        let player = this.state.player;

        player.weapon = weapon;

        this.setState({
            player: player
        });
    }

    spawnPlayer = (xPos: number, yPos: number) =>
    {
        let player = this.state.player;

        player.pos.x = xPos;
        player.pos.y = yPos;

        this.setState({
            player: player
        });
    }

    render()
    {
        return(
            <div>
               <PlayerStats player={this.state.player}/>
               <GameLevel
               spawnPlayer={this.spawnPlayer}
               equipWeapon={this.equipWeapon}
               healPlayer={this.healPlayer}
               startBattle={this.startBattle} 
               changePlayerDirection={this.changePlayerPosition}
               player={this.state.player}/>
            </div>
        );
    }
}