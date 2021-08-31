import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
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
        backgroundColor: red[500],
    },
}));

export default function AboutCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                title="Webinars/Workshops/Conferences"
            />
            <CardContent>
                <Typography  component="p">
                    The core values in attending workshops, onsite & virtual, are the following,
                    informative, inspiring, educational, & entertaining.
                    In accord, we bring home latest happenings, global AI practices,
                    and the most rewarding approach’s that may contribute for the advancement of quality education in Ethiopia,
                    through integrate tools of technology for making education all inclusive.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Event Pedigree.</Typography>
                    <Typography paragraph>
                        <ul>
                            <li>The future of Education.</li>
                            <li>Is 45 Minute/class still relevant today?</li>
                            <li>What AI should be doing today?</li>
                            <li>Be ware of Podcasting!</li>
                            <li>How to take the most out of online education platforms?</li>
                            <li>Effects of Stereotypes, Positive & Negative, on Students Academic performance.</li>
                            <li>Mind-Set VS Culture of Honor in Ethiopia.</li>
                            <li>3D Printing Application in Education.</li>
                            <li>How to create Dopamine mindset?</li>
                            <li>Japan, South Korea, & Finland Secret Formula of quality Education.</li>
                            <li>Introduction to Nano Technology in Ethiopia</li>
                            <li>The Art of Self Care & Personal Safety for students</li>
                            <li>E-books relevance in todays schooling</li>

                        </ul>
                    </Typography>
                    <Typography paragraph>
                        Would you like to be a speaker in either of the sessions?
                        Arrange a personal meeting hear or Register.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
