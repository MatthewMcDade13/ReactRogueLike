import * as React from 'react';

export interface IBoardRowProps
{
    children?: any
}

export function BoardRow(props: IBoardRowProps)
{
    return(
        <tr>
            {props.children}
        </tr>
    );
}