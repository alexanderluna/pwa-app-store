import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class CategoryList extends Component {
  render() {
    const { categories, handler } = this.props;
    return(
      <div className="categories">
        <Typography variant="subheading">Browse by Category</Typography>
        <div className="categoryList">
          { categories.map((category, id) =>
            <Button
              key={id}
              onClick={() => handler(category)}
              style={{ margin: '1rem 0.5rem' }}
              variant="outlined"
              color="primary"
              size="large" >
              { category }
            </Button>
          )}
        </div>
      </div>
    )
  }
}

export default CategoryList;
