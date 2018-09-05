import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
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

class MyResumes extends Component {
  constructor(props) {
    super(props);
    
    const { classes } = props;
    this.classes = classes;

    this.state = { resumes: [] };
  }

  componentDidMount() {
    const appElement = document.getElementById('app');
    const apiEndpoint = appElement.getAttribute('data-api-endpoint');
    
    fetch(`${apiEndpoint}/resumes/mine`)
      .then(res => res.json())
      .then(data => {
        this.setState({ resumes: data.slice(0, 4) });
      }); 
  }
  
  render() {

    return (
    <div>
      <h4>
        My Resume(s)
      </h4>
      <Grid container justify="center" spacing={40}>
        {this.state.resumes.map(resume => (
          <Grid item key={resume.uuid} sm={6} md={4} lg={3}>
            <ResumeCard data={resume}></ResumeCard>
          </Grid>
        ))}
      </Grid>
      <div className={this.classes.footer}>
          <Button variant="contained" size="large" color="secondary" className={this.classes.button}>
            New resume
            <NoteAdd className={this.classes.rightIcon} />
          </Button>
        </div>
    </div>
  )}
}

export default withStyles(styles)(MyResumes);