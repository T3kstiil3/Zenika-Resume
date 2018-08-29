import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        backgroundPosition: 'top center',
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
});

function ResumeCard(props) {

    const { classes } = props;

    return (
        <div>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image="/static/img/theme-light.png"
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="headline" component="h2">
                        Heading
                    </Typography>
                    <Typography>
                        This is a media card. You can use this section to describe the content.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary">
                        View
                    </Button>
                    <Button variant="contained" color="secondary">
                        Edit
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

ResumeCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResumeCard);