import React from 'react';
import { Square } from './Square/Square';
import { buttonValues } from '../../Helpers/buttonValues';

const Body = (props) => {

    const getValue = (value) => {
        return () => {
            props.getValue(value)
        }
    }

    return (
        <div className="body">
            {buttonValues.map(row => (
                row.map(item => (
                    < Square
                        key={item.value}
                        value={item.value}
                        name={item.name}
                        onClick={getValue(item.value)}
                    />
                ))
            ))}
        </div>
    )
}

export default Body