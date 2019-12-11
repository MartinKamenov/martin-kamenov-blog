import React from 'react';
import { CardHeader, Card, makeStyles, CardContent, Typography } from '@material-ui/core';
import dateService, { dateFormatTypes } from '../../../../service/date.service';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: 'white'
    },
    header: {
        fontSize: 15,
        fontWeight: 'bold'
    }
}));
const CommentComponent = ({ comment }) => { 
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardHeader
                title={comment.username}
                subheader={dateService.formatDate(
                    dateService.getDateFromTime(comment.date), dateFormatTypes.Material
                )}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {comment.text}
                </Typography>
            </CardContent>
        </Card>
    );
};
 
export default CommentComponent;