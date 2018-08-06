import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class ProjectProfile extends Component {
  render() {
    const { name, description, image, author, category } = this.props.project;
    return(
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
    )
  }
}

export default ProjectProfile
