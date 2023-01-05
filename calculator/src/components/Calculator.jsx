import React, { useState } from 'react';
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import { Hidden } from '@mui/material';


export default function Calculator() {

    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState();
    const [operator, setOperator] = useState();
    const [oldNum2, setOldNum2] = useState();

    function inputNum(e) {
        if (num === 0) {
            setNum(e.target.value);
        } else {
            setNum(num + e.target.value);
        }
    }

    function clear(e) {
        setNum(0);
        setOldNum('');
        setOldNum2('');
        setOperator('');

    }

    function porcetagem() {
        setNum(num / 100);
    }

    function changeSign() {
        if (num > 0) {
            setNum(-num)
        } else {
            setNum(Math.abs(num));
        }
    }

    function operatorHandler(e) {
        setOperator(e.target.value);
        setOldNum(num);
        setNum(0);
    }

    function calculate() {
        if (operator === '/') {
            setOldNum2(num)
            setNum(parseFloat(oldNum) / parseFloat(num));
        }
        else if (operator === '*') {
            setOldNum2(num)
            setNum(parseFloat(oldNum) * parseFloat(num));
        }
        else if (operator === '+') {
            setOldNum2(num)
            setNum(parseFloat(oldNum) + parseFloat(num));
        }
        else if (operator === '-') {
            setOldNum2(num)
            setNum(parseFloat(oldNum) - parseFloat(num));
        }

    }

    return (
        <div>
            <Box m={5} />
            <Container maxWidth="xs">
                <div className="wrapper">
                    <h3 className='viewOperation'>{oldNum}</h3>
                    <h3 className='viewOperation'>{operator}</h3>
                    <h3 className='viewOperation'>{oldNum2}</h3>
                    <h1 className="result">{num}</h1>
                    <button onClick={clear}>AC</button>
                    <button onClick={changeSign}>+/-</button>
                    <button onClick={porcetagem}>%</button>
                    <button className="orange" onClick={operatorHandler} value={"/"}>/</button>
                    <button className="gray" onClick={inputNum} value={7}>7</button>
                    <button className="gray" onClick={inputNum} value={8}>8</button>
                    <button className="gray" onClick={inputNum} value={9}>9</button>
                    <button className="orange" onClick={operatorHandler} value={"*"}>*</button>
                    <button className="gray" onClick={inputNum} value={4}>4</button>
                    <button className="gray" onClick={inputNum} value={5}>5</button>
                    <button className="gray" onClick={inputNum} value={6}>6</button>
                    <button className="orange" onClick={operatorHandler} value={"-"}>-</button>
                    <button className="gray" onClick={inputNum} value={1}>1</button>
                    <button className="gray" onClick={inputNum} value={2}>2</button>
                    <button className="gray" onClick={inputNum} value={3}>3</button>
                    <button className="orange" onClick={operatorHandler} value={"+"}>+</button>
                    <button className="gray" onClick={inputNum} value={0}>0</button>
                    <button className="gray" style={{ visibility: "hidden" }}>0</button>
                    <button className="gray" onClick={inputNum} value={"."}>.</button>
                    <button className="orange" onClick={calculate}>=</button>
                </div>
            </Container>

        </div>
    )
}
