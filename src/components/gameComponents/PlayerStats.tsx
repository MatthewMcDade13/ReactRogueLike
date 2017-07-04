import * as React from 'react';
import { Entity } from '../../models/Entity';

export interface IPlayerStatsProps
{
    player: Entity;
    level: number
}

export function PlayerStats(props: IPlayerStatsProps)
{
    return(
        <ul className="stats">
            <li>Health: {props.player.health}</li>
            <li>Weapon: {props.player.weapon.name}</li>
            <li>Attack Range: {props.player.weapon.attackRange.min} - {props.player.weapon.attackRange.max}</li>
            <li>Level: {props.player.level.level}</li>
            <li>Next Level: {props.player.level.getXP()} / {props.player.level.getXPToLevel()} XP</li>
            <li>Dungeon Level: {props.level}</li>
        </ul>
    );
}