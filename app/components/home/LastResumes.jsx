import React, { Component } from 'react';
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

class LastResumes extends Component {
  constructor(props) {
    super(props);

    const { classes } = props;
    this.classes = classes;

    this.state = { resumes: [] };
  }

  componentDidMount() {
    const appElement = document.getElementById('app');
    const apiEndpoint = appElement.getAttribute('data-api-endpoint');
    
    fetch(`${apiEndpoint}/resumes`)
      .then(res => res.json())
      .then(data => {
        this.setState({ resumes: data.slice(0, 8) });
      }); 
  }
  
  render() {

    return (
    <div>
      <h4>
        Last edited Resumes
      </h4>
      <Grid container spacing={40}>
        {this.state.resumes.map(resume => (
          <Grid item key={resume.uuid} sm={6} md={4} lg={3}>
            <ResumeCard data={resume}></ResumeCard>
          </Grid>
        ))}
      </Grid>
      <div className={this.classes.footer}>
        <Button variant="contained" size="large" color="primary">
          View all
        </Button>
      </div>
    </div>
  )}
}

export default withStyles(styles)(LastResumes);