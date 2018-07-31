import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
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
    const { name, description, image, author, link, category } = this.state.project;
    const { tabIndex } = this.state;
    return (
      <div>
        <Card className="detailCard">
          <CardMedia
            className="detailImage"
            image={image}
            title="lorem ipsum"
          />
          <Typography
            className="detailName"
            variant="title">
            {name}
          </Typography>
          <Typography
            className="detailAuthor"
            variant="subheading">
            by {author.substring(0,15)}
          </Typography>
          <Button
            className="detailInstall"
            variant="contained"
            color="primary"
            href="#">
            Install
          </Button>
          <Typography
            className="detailDescription"
            variant="body2">
            {description}
          </Typography>
          <div className="cardFooter">
            <Button size="small" color="secondary">{category}</Button>
          </div>
        </Card>

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
            <Tab label="Windows Mobile" />
          </Tabs>
        </Paper>

        {tabIndex === 0 && <h1>For iOS</h1>}
        {tabIndex === 1 && <h1>For Android</h1>}
        {tabIndex === 2 && <h1>For Windows Mobile</h1>}
      </div>
    )
  }
}

export default Detail
