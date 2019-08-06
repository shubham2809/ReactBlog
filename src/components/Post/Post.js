import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import usePostStyles from './Post.style';

export default function MediaCard({ clicked, title, date, category, content }) {
    const classes = usePostStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea onClick={clicked}>
                <CardContent className={classes.content}>
                    <Typography
                        className={classes.content}
                        gutterBottom
                        variant="h4"
                        color="secondary"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        className={classes.pos}
                        color="textSecondary"
                    >
                        {date}
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        className={classes.pos}
                        color="textSecondary"
                    >
                        {'#'}
                        {category}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {content.substring(0, 20) + '...'}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
