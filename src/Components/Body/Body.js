import React from 'react';
import { Square } from './Square/Square';

class Body extends React.Component {

    render() {
        return (
            <div className="body">
                <div className="body-row">
                    <Square
                        value='AC'
                        name={"body__button grey"}
                        onClick={() => this.props.getValue('AC')}
                    />
                    <Square
                        value='+/-'
                        name={"body__button grey"}
                        onClick={() => this.props.getValue('+/-')}
                    />
                    <Square
                        value='%'
                        name={"body__button grey"}
                        onClick={() => this.props.getValue('%')}
                    />
                    <Square
                        value='÷'
                        name={"body__button orange"}
                        onClick={() => this.props.getValue('/')}
                    />
                </div>
                <div className="body-row">
                    <Square
                        value='7'
                        name={"body__button"}
                        onClick={() => this.props.getValue(7)}
                    />
                    <Square
                        value='8'
                        name={"body__button"}
                        onClick={() => this.props.getValue(8)}
                    />
                    <Square
                        value='9'
                        name={"body__button"}
                        onClick={() => this.props.getValue(9)}
                    />
                    <Square
                        value='+'
                        style={{ transform: 'rotate(45deg)' }}
                        name={"body__button orange"}
                        onClick={() => this.props.getValue('*')}
                    />
                </div>
                <div className="body-row">
                    <Square
                        value='4'
                        name={"body__button"}
                        onClick={() => this.props.getValue(4)}
                    />
                    <Square
                        value='5'
                        name={"body__button"}
                        onClick={() => this.props.getValue(5)}
                    />
                    <Square
                        value='6'
                        name={"body__button"}
                        onClick={() => this.props.getValue(6)}
                    />
                    <Square
                        value='-'
                        name={"body__button orange"}
                        onClick={() => this.props.getValue('-')}
                    />
                </div>
                <div className="body-row">
                    <Square
                        value='1'
                        name={"body__button"}
                        onClick={() => this.props.getValue(1)}
                    />
                    <Square
                        value='2'
                        name={"body__button"}
                        onClick={() => this.props.getValue(2)}
                    />
                    <Square
                        value='3'
                        name={"body__button"}
                        onClick={() => this.props.getValue(3)}
                    />
                    <Square
                        value='+'
                        name={"body__button orange"}
                        onClick={() => this.props.getValue('+')}
                    />
                </div>
                <div className="body-row">
                    <Square
                        value='0'
                        name={"body__button zero"}
                        onClick={() => this.props.getValue(0)}
                    />
                    <Square
                        value='.'
                        name={"body__button"}
                        onClick={() => this.props.getValue('.')}
                    />
                    <Square
                        value='='
                        name={"body__button orange"}
                        onClick={() => this.props.getValue('=')}
                    />
                </div>
            </div>
        )
    }
}

export default Body