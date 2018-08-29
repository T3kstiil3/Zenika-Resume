import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import ResumeCard from '../ResumeCard';

const styles = theme => ({
  footer: {
    textAlign: 'center',
    padding: '25px',
  }
});

function Home(props) {

  const { classes } = props;
  const cards = [1, 2, 3, 4];

  return (
    <div>
      <h4>
        Last edited Resumes
      </h4>
      <Grid container spacing={40}>
        {cards.map(card => (
          <Grid item key={card} sm={6} md={4} lg={3}>
            <ResumeCard></ResumeCard>
          </Grid>
        ))}
      </Grid>
      <div className={classes.footer}>
        <Button variant="contained" size="large" color="primary">
          View all
        </Button>
      </div>
    </div>
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);