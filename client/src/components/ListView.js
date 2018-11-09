import React, { Component } from "react";
import axios from "axios";

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }
  componentDidMount() {
    if (this.props.needData) {
      this.fetchData();
      this.props.toggleNeed();
    }
  }

  fetchData = () => {
    axios
      .get("https://fsw14-backend-sprint-1.herokuapp.com/projects")
      .then(({ data }) => this.setState({ projects: data }));
  };

  render() {
    if (!this.state.projects.length) {
      return <h4>fetching</h4>;
    }
    return (
      <div>
        {this.state.projects.map(project => (
          <div key={project.id}>
            <h3>{project.name}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default ListView;
