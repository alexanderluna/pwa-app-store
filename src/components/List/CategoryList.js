import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class CategoryList extends Component {
  render() {
    const { categories } = this.props;
    return(
      <div>
        <Typography variant="subheading">Browse by Category</Typography>
        <div style={{display: 'inline-flex', maxWidth: '90vw', overflow: 'scroll'}}>
          { categories.map((category, id) =>
            <Button
              key={id}
              href={`/pwa-app-store/category/${category}`}
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
