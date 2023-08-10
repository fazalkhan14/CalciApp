import React from 'react';
import './CalciControlls.css';
import Card from '../UI/Card';

const numericControlls = [7,8,9,4,5,6,1,2,3,'.',0,'DEL'];
const operatorControlls = ['÷','x','-','+',"="];

const CalciControlls = (props) => {
    
    const calciControllHandler = (event) => {
        props.onAddExpressionHandler(event.target.innerText);
    };

    return <Card className="calci-controlls">
        <div className='calci-controlls_num'>
            {numericControlls.map(num => 
                <button key={num} onClick={calciControllHandler}>
                    {num}
                </button>
            )}
        </div>
        <div className='calci-controlls_opr'>
            {operatorControlls.map(opr => 
                <button key={opr} onClick={calciControllHandler}>
                    {opr}
                </button>
            )}
        </div>
    </Card>
};

export default CalciControlls;