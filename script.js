
do{
    equationSign = prompt('What do you want to do with numbers? You should use +, -, /, *');
} while(equationSign !== '+' && equationSign !== '-' && equationSign !== '/' && equationSign !== '*');

do{
    operandNumber = parseInt(prompt('How many operands do you want to use? It should be a NUMBER more then 1 and less then 7.'));
}while(!(operandNumber >= 2 && operandNumber <= 6))

result = null;
numberOfOp = 1;
do{
    operand = parseFloat(prompt(`Enter your operand ${numberOfOp}`));
    if(!isNaN(operand)) {
        if(result === null){
            result = operand;
        }else{
            switch(equationSign) {
                case '+':
                    result += operand;
                    break;
                case '-':
                    result -= operand;
                    break;
                case '*':
                    result *= operand;
                    break;
                case '/':
                    result /= operand;
                    break;  
             }
        }numberOfOp++;
    }
}while(numberOfOp <= operandNumber);

alert(`This is your result ${result}`);