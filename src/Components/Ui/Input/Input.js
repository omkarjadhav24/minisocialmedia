import React from 'react';

import classes from '../Input/Input.module.css';
import 'font-awesome/css/font-awesome.min.css';

const input = ( props ) => {
    let user=null;
    let passKey=null
    let name=null
    if(props.icon=='user')
    {
        user=<i class="fa fa-envelope" aria-hidden="true"></i>
    }
    else if(props.icon=='pass')
    {
        passKey=<i class="fa fa-key" aria-hidden="true"></i>
    }
    else if(props.icon=='name')
    {
        name=<i class="fa fa-user" aria-hidden="true"></i>
    }
    // if(props.title)
    // {
    //     alert(props.key)
    //     passKey=<i class="fa fa-key" aria-hidden="true"></i>
    // }

    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }
   
    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement =<input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }
    

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            <div><span>{user}{passKey}{name}</span>{inputElement}</div>
        </div>
    );

};

export default input;