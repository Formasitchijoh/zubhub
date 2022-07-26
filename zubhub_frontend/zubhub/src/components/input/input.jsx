import React from 'react'
import clsx from 'clsx'
import {  
    FormControl,  
    OutlinedInput,
    FormHelperText,
} from '@material-ui/core';
import { handleTextFieldChange, handleTextFieldBlur} from '../../views/create_activity/createActivityScripts';

function Input(props) {
    const {
      label,
      classes, 
    }=props
   // console.log( 'inside the input component',label)
  return (
    <div>
        <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            size="small"
            fullWidth
            margin="none"
            error={props.status && props.status[label]  && 
              props.errors[label]? true : false}
            >  
            <OutlinedInput
            className={classes.customInputStyle}
            id={label}
            name={label}
            type="text"
            onBlur={(e) => handleTextFieldBlur( label, props) }
            onChange= {(e) => handleTextFieldChange(label, e.target.value, props)}
            />
            <FormHelperText
            error
            className={classes.fieldHelperTextStyle}
            >
                    { (props.status && props.status[label]) || 
                    ( props.touched[label] && props.errors[label] ) &&
                    
                    (props.t(
                        `createActivity.inputs.${label}.errors.${props.errors[label]}`,
                    ))
                    }
            </FormHelperText> 
        </FormControl>
    </div>
  )
}

export default Input