import React from 'react'
import './Die.css'

export default function Die(props){
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return (
        <div style={styles} className='--die-face' onClick={(event)=>{props.holdDie(event, props.id)}}>
            <span className='--die-num'>{props.number}</span>
        </div>
    )
}
