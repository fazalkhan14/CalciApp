import React,{ useState } from 'react';
import './Calci.css';
import Card from '../UI/Card';
import OutputScreen from './OutputScreen';
import CalciControlls from './CalciControlls';

let equation = '';
let sum;

const Calci = () => {

    const [expression,setExpression] = useState(equation);
    const [result,setResult] = useState(sum);

    const controllsEvent = (output) => {
        if(output === 'DEL'){
            equation = equation.slice(0,-1);
            sum = !isNaN(equation[equation.length-1]) ? eval(equation) : '';
            setExpression(equation);
            setResult(sum);
        }
        else if(output === '='){
            sum = !isNaN(equation[equation.length-1]) ? eval(equation) : '';
            setExpression(sum);
            equation = sum;
            setResult('');
        }
        else{
            equation += output === '÷' ? '/' : output === 'x' ? '*' : output;
            sum = !isNaN(equation[equation.length-1]) ? eval(equation) : '';
            setExpression(equation);
            setResult(sum);
        }
        console.log(equation);
        console.log(sum);
    }

    return <Card className='calci'>
        <OutputScreen exp={expression} res={result}/>
        <CalciControlls onAddExpressionHandler={controllsEvent}/>
    </Card>
};

export default Calci;