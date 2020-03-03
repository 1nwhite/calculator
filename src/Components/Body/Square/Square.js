import React from 'react';

export function Square(props) {

    return (
        <button
            className={props.name}
            onClick={props.onClick}
            style={props.style}
        >
            {props.value}
        </button>
    )
}