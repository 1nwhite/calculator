import React from 'react';

export function Header(props) {

    return (
        <div className="header">
            <div className="header__number">
                <span>{props.screenValue}</span>
            </div>
        </div>
    )
} 