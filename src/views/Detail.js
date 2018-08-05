import React, { Component } from 'react';
import ProjectProfile from '../components/Card/ProjectProfile';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { getById } from '../services/Project'

class Detail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      project: [],
      tabIndex: 0
    }
    this.handleTab = this.handleTab.bind(this);
  }
  componentWillMount() {
    const project = getById(this.props.match.params.id);
    this.setState({ project });
  }
  handleTab(event, tabIndex) {
    this.setState({ tabIndex });
  }
  render() {
    const { tabIndex, project } = this.state;
    return (
      <div>
        <ProjectProfile project={project} />
        <Paper>
          <Tabs
            value={tabIndex}
            onChange={this.handleTab}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="iOS" />
            <Tab label="Android" />
          </Tabs>
        </Paper>

        {tabIndex === 0 && <h1>For iOS</h1>}
        {tabIndex === 1 && <h1>For Android</h1>}
      </div>
    )
  }
}

export default Detail
