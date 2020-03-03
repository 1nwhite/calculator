const evaluate = string => {
    const arr = string.split(" ");
    let convertedString = '';

    if (arr.length < 3) {
        convertedString = arr.join(' ');
        return convertedString;
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '%') {
                if (arr[i - 2] === '+' || arr[i - 2] === '-') {
                    arr.splice(i - 1, 3, arr[i - 1] / 100 * arr[i - 3]);
                } else {
                    arr.splice(i - 1, 3, arr[i - 1] / 100);
                }
            }
        }

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '/' || arr[i] === '*') {
                switch (arr[i]) {
                    case '/':
                        arr.splice(i - 1, 3, arr[i - 1] / arr[i + 1]);
                        break;
                    case '*':
                        arr.splice(i - 1, 3, arr[i - 1] * arr[i + 1]);
                        break;
                }
                convertedString = arr.join(' ');

                return evaluate(convertedString);
            }
        }

        if (arr.length >= 3) {
            const [leftOperand, operator, rightOperand] = arr;

            switch (operator) {
                case '+':
                    arr.splice(0, 3, Number(leftOperand) + Number(rightOperand));
                    break;
                case '-':
                    arr.splice(0, 3, Number(leftOperand) - Number(rightOperand));
                    break;
            }

            convertedString = arr.join(' ');
            return evaluate(convertedString)

        } else {
            convertedString = arr.join(' ');
            return convertedString;
        }
    };
};

export default evaluate;
