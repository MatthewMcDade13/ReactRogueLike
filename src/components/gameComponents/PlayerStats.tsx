import * as React from 'react';
import { Entity } from '../../models/Entity';

export interface IPlayerStatsProps
{
    player: Entity;
}

export function PlayerStats(props: IPlayerStatsProps)
{
    return(
        <ul className="stats">
            <li>Health: {props.player.health}</li>
            <li>Weapon: {props.player.weapon.name}</li>
            <li>Attack Range: {props.player.weapon.attackRange.min} - {props.player.weapon.attackRange.max}</li>
            <li>Level: #</li>
            <li>Next Level: # XP</li>
            <li>Dungeon Level: #</li>
        </ul>
    );
}