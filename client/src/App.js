import React, { Component } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import ListView from "./components/ListView";
import SideBar from "./components/Sidebar";

const AppContainer = styled.div`
  display: flex;
  align-items: flex-start;
  .main-view {
    margin-left: 435px;
    h1 {
      text-align: center;
      font-size: 64px;
    }
  }
`;
class App extends Component {
  constructor(){
    super()
    this.state = {
      needData : true
    }
  }

  toggleNeed = () => this.setState({needData: !this.state.needData})
  render() {
    return (
      <AppContainer>
        <Route path="/" render={props => <SideBar {...props} toggleNeed={this.toggleNeed} />} />

        <div className="main-view">
          <h1>Projects</h1>
          <Route exact path="/" render={props => <ListView {...props} needData={this.state.needData} toggleNeed={this.toggleNeed} />} />
        </div>
      </AppContainer>
    );
  }
}

export default App;
