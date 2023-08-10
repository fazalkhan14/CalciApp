import React,{useState,useEffect} from 'react';
import './OutputScreen.css';

const OutputScreen = ({exp,res}) => {
    return <div className='output-screen'>
        <div className='output-screen_expression'>{exp}</div>
        <div className='output-screen_result'>{res}</div>
    </div>
};

export default OutputScreen;