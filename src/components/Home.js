import React, { Component } from 'react';
import { getAllProjects, getAllCategories } from '../services/Project';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      projects: []
    }
  }

  componentWillMount() {
    const projects = getAllProjects()
    const categories = getAllCategories()
    this.setState({ projects: [...projects], categories: [...categories] })
  }

  render() {
    const { projects, categories } = this.state;
    return (
      <center>
        <Typography component="subheading">Browse by Category</Typography>
        <div style={{display: 'inline-flex', maxWidth: '90vw', overflow: 'scroll'}}>
          { categories.map((category, id) =>
            <Button style={{ margin: '1rem 0.5rem' }} variant="contained" color="secondary" size="large" >{ category }</Button>
          )}
        </div>
        { projects.map((project, id) =>
          <Card key={id} style={{ margin: '1rem', maxWidth: 300, display: 'inline-block' }}>
            <CardMedia
              style={{height: 0, paddingTop: '56.25%'}}
              image={project.image}
              title="lorem ipsum"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                { project.name}
              </Typography>
              <Typography component="p">
                { project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button href={ project.link } fullWidth={ true } size="small" color="primary">
                Download
              </Button>
              <Button href={`/detail/${project.id}`} fullWidth={ true } size="small" color="default">
                Learn More
              </Button>
            </CardActions>
          </Card>

          /* <Card key={id} style={{ margin: '0.5rem', maxWidth: 300, display: 'inline-flex' }}>
            <div style={{display: 'flex',flexDirection: 'column'}}>
              <CardContent style={{flex: '1 0 auto', padding: '0.5rem'}}>
                <Typography variant="headline">{ project.name }</Typography>
                <Typography variant="subheading" color="textSecondary">By { project.author}</Typography>
                <CardActions>
                  <Button variant="outlined" size="medium" fullWidth={true} color="primary">Download</Button>
                </CardActions>
              </CardContent>
            </div>
            <CardMedia
              style={{width: 145,height: 160}}
              image={ project.image}
              title="Live from space album cover"
            />
          </Card> */
        )}
      </center>
    )
  }
}

export default Home
