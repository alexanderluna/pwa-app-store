import React, { Component } from 'react';
import { getAllProjects, getAllCategories, getByCategory } from '../services/Project';
import ProjectCard from './ProjectCard';
import CategoryList from './CategoryList';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      projects: [],
      categories: [],
      category: ""
    }
  }

  componentDidMount(category = this.props.match.params.category) {
    const projects = category ? getByCategory(category) : getAllProjects();
    const categories = getAllCategories();
    this.setState({ projects, categories, category });
  }

  render() {
    const { projects, categories, category } = this.state;
    return (
      <center>
        <CategoryList categories={categories}/>
        <Input
          style={{ maxWidth: '60vw'}}
          type="search"
          fullWidth={true}
          placeholder="Search..."
        />
        <Typography
          variant="headline">
          Projects for: {category || 'All'}
        </Typography>
        { projects.map((project, id) =>
          <ProjectCard key={id} project={project} />
        )}
      </center>
    )
  }
}

export default Home
