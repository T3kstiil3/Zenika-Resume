import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import NoteAdd from '@material-ui/icons/NoteAdd';

import ResumeCard from '../ResumeCard';

const styles = theme => ({
  footer: {
    textAlign: 'center',
    padding: '25px',
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

function MyResumes(props) {

  const { classes } = props;
  const cards = [1, 2, 3, 4];

  return (
    <div>
        <h4>My Resume(s)</h4>
        <Grid container spacing={40}>
          {cards.map(card => (
            <Grid item key={card} sm={6} md={4} lg={3}>
              <ResumeCard></ResumeCard>
            </Grid>
          ))}
        </Grid>
        <div className={classes.footer}>
          <Button variant="contained" size="large" color="secondary" className={classes.button}>
            New resume
            <NoteAdd className={classes.rightIcon} />
          </Button>
        </div>
    </div>
  )
}

MyResumes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyResumes);