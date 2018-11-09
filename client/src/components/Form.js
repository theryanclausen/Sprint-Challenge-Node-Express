import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form `
    margin: 0 auto;
    box-sizing: border-box;
    width:188px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input{
        width:188px;
        margin: 15px 0;
        padding: 12px 10px;
        font-size: 12px;
        font-weight: bold;
    }
    textarea{
        width:170px;
        height: 340px;
        margin: 15px 0;
        padding: 20px;
        font-weight: bold;
    }
    button{
        cursor: pointer;
	width: 210px;
	height: 40px;
	border: 1px solid #97a6a7;
	color: #FBFAFB;
	background: #24b8bd;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
    margin: 17px 0;
    :hover{
        box-shadow: 2px 2px 10px black, -2px -2px 10px black;
    }
    }

`

const Form = props =>{
    return <StyledForm onSubmit={props.submitHandler}>

        <input name='name' type='text' placeholder='Project Title' value={props.state.name} onChange={props.changeHandler}></input>
        <textarea name='description' placeholder='Note Content' value={props.state.description} onChange={props.changeHandler}></textarea>
        <button type='submit'>Save</button>
    </StyledForm>
}


export default Form