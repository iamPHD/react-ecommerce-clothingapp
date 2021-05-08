import React from "react";
import './form-input.styles.scss';

// Here  {...otherProps} will be kind of key value pairs for <input> tag, so ideally it should contain standard tags for input tag.

const FormInput = ({handleChange, label, ...otherProps})=>(
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps}/>
        {
            label?

            (<label className={`${otherProps.value.length ? 'shrink':''} form-input-label`}>
                {label}
            </label>)
            :null
        }
    </div>
)


export default FormInput;