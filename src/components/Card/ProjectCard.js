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
    )
  }
}

export default ProjectCard
