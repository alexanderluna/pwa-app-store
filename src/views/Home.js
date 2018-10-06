import React, { Component } from 'react';
import { getAllProjects, getAllCategories } from '../services/Project';
import ProjectCard from '../components/Card/ProjectCard';
import CategoryList from '../components/List/CategoryList';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      projects: [],
      categories: [],
      filter: ''
    }
    this.setFilter = this.setFilter.bind(this);
    this.byCategory = this.byCategory.bind(this);
  }

  componentDidMount() {
    const projects = getAllProjects();
    const categories = getAllCategories();
    this.setState({ projects, categories });
  }

  setFilter(filter) {
    this.setState({ filter })
  }

  byCategory(filter = this.state.filter) {
    return project => project.category.includes(filter)
  }

  render() {
    const { projects, categories, filter } = this.state;
    return (
      <center>
        <CategoryList categories={categories} handler={this.setFilter} />
        <Input
          style={{ maxWidth: '60vw' }}
          type="search"
          fullWidth={true}
          placeholder="Search..."
        />
        <Typography
          variant="headline">
          Projects for: {filter || 'All'}
        </Typography>
        {filter &&
          <Button
            style={{ display: 'block', margin: '1rem' }}
            onClick={() => this.setFilter('')}
            variant="contained"
            color="secondary">
            Dismiss filter
          </Button>
        }
        {projects.filter(this.byCategory()).map((project, id) =>
          <ProjectCard key={id} project={project} />
        )}
      </center>
    )
  }
}

export default Home
