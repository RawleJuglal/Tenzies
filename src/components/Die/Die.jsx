import React from 'react'
import './Die.css'

export default function Die(props){
    return (
        <div className='--die-face'>
            <span className='--die-num'>{props.number}</span>
        </div>
    )
}
