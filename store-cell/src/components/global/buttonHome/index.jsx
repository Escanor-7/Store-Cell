import React from 'react';
import './ButtonHome.styles.css';

const ButtonHome = ({text, variant, icon}) => {

    return (
        <div>
            <button type="button" className={variant} >
                {text}
                <i className={icon}></i>
            </button>
        </div>
    )
}

export default ButtonHome;