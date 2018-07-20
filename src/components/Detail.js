import React, { Component } from 'react';
import { getById } from '../services/Project'

class Detail extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    const project = getById(this.props.match.params.id);
    this.setState({ project: project});
  }
  render() {
    const { id, name, description, image, author, link, category } = this.state.project;
    return (
      <div>
        <h1>{ name }</h1>
        <p>{ category }</p>
        <p>{ id }</p>
        <p>{ description }</p>
        <p>{ image }</p>
        <p>{ author }</p>
        <p>{ link }</p>
      </div>
    )
  }
}

export default Detail
