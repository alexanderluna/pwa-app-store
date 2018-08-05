import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class ProjectCard extends Component {
  render() {
    const { id, image, name, description, link } = this.props.project
    return(
      <Card style={{ margin: '1rem', maxWidth: 300, display: 'inline-block' }}>
        <CardMedia
          style={{height: 0, paddingTop: '56.25%'}}
          image={image}
          title="lorem ipsum"
        />
        <CardContent>
          <Typography align="left" gutterBottom variant="headline" component="h2">
            { name}
          </Typography>
          <Typography align="left" component="p">
            { description.substring(0, 80)}...
          </Typography>
        </CardContent>
        <CardActions>
          <Button href={link} fullWidth={true} size="small" color="primary">
            Download
          </Button>
          <Button href={`/pwa-app-store/detail/${id}`} fullWidth={true} size="small" color="default">
            Learn More
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default ProjectCard
