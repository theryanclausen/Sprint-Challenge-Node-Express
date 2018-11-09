import React, {Component} from 'react'
import axios from 'axios'
import Form from './Form'
import styled from 'styled-components'

const StyledSide = styled.div `
    position:fixed;
    width:300px;
    height: 100vh;
    background: gold;
    color: blue;


`


class Sidebar extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            description: ''
        }
    }

    changeHandler = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
      };
    
      submitHandler = e => {
        e.preventDefault();
        axios.post('https://fsw14-backend-sprint-1.herokuapp.com/projects',{...this.state}).then(()=>{
            this.props.toggleNeed()
        this.setState({
          name: "",
          description: ""
        } )}).catch(err => console.log(err));
        
      };


      render() {
        return (
            <StyledSide>
          <Form
            
            state={this.state}
            submitHandler={this.submitHandler}
            changeHandler={this.changeHandler}
          /></StyledSide>
        );
      }
    }

export default Sidebar