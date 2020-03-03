import React from 'react';
import './App.sass';
import { Header } from './Components/Header/Header';
import Body from './Components/Body/Body';
import evaluate from './Helpers/evaluate';
import filterOperators from './Helpers/filterOperators';


class App extends React.Component {
  state = {
    screenValue: '0',
    operator: '',
    mathString: ''
  }

  addOperatorToMathString = (state) => {
    return { mathString: `${state.mathString} ${state.operator} ` }
  }

  getValue = (value) => {
    const { screenValue, operator, mathString } = this.state;

    if (!isNaN(value)) {
      this.setState({
        screenValue: screenValue > 0 && !operator || screenValue < 0 && !operator
          ? screenValue + String(value)
          : String(value),
        operator: '',
        mathString: screenValue > 0 || screenValue < 0
          ? mathString + String(value)
          : String(value),
      });
    } else {
      switch (value) {
        case '=':
          this.setState({
            screenValue: mathString ? evaluate(mathString) : screenValue,
            mathString: mathString ? evaluate(mathString) : screenValue,
          });
          break;
        case 'AC':
          this.setState({
            screenValue: '0',
            operator: '',
            mathString: '',
          });
          break;
        case '.':
          this.setState({
            screenValue: screenValue + String(value),
            mathString: mathString + String(value),
          });
          break;
        case '+/-':
          const firstPart = mathString.slice(0, mathString.length - 2);
          const lastPart = mathString[mathString.length - 1];
          const updatedLastPart = Number(lastPart) > 0 ? -lastPart : Math.abs(lastPart);
          const updatedMathString = Number(mathString) > 0 ? -mathString : Math.abs(mathString);

          this.setState({
            screenValue: Number(screenValue) > 0 ? -screenValue : Math.abs(screenValue),
            mathString: firstPart ? `${firstPart} ${updatedLastPart}` : `${updatedMathString}`
          });
          break;
        default:
          this.setState({
            operator: value,
            mathString: operator && operator === value
              ? mathString
              : `${filterOperators(mathString)} ${value} `
          });
          break;
      };
    };
  }


  render() {
    return (
      <div className="App">
        <Header
          screenValue={this.state.screenValue}
        />

        <Body
          getValue={this.getValue}
        />
      </div>
    );
  }
}
export default App;
