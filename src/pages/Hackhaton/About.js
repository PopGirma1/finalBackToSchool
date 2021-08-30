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
import Button from '@material-ui/core/Button';
import FacebookIcon from "@material-ui/icons/Facebook";
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";


const useStyles = makeStyles((theme) => ({
    root: {
        width:'auto',
        overflowY: 'scroll',
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

    titile:{
        color:'red'
    },
    btn:{
        marginTop:'60px'
    }
}));

export default function Apply() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader className={classes.titile}
                        title="1.1	About "
                        subheader="Event summery:!                                                             "
            />
            <CardContent>
                <Typography paragraph>
                    HACKHATON COMPETITION:
                </Typography>

                <Typography paragraph>
                    Noosphere Affairs P.L.C in collaboration with International
                    Intellectual School and EtherNet is organizing
                    a Hackathon competition in Addis Ababa, Ethiopia.
                    The event will consist of two days engaging up to
                    100 young developers in a Hackathon, with winners receiving opportunities of lifetime.
                </Typography>
                <Typography variant="h4" color="textSecondary" >Goal:</Typography>
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
                    <Typography paragraph>
                        <Typography variant="h5">Rewards:</Typography>
                        The goal of the competition is to inspire Ethiopian youth to apply technological experience,
                        coding and software development,
                        and work with them to uncover solutions that are practical & technological to challenges in their community.
                    </Typography>
                    <Typography paragraph> Register:</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
