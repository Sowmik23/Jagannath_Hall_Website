import React, { Component } from 'react';

import {Link, Redirect} from 'react-router-dom'
import { Gallery, GalleryImage } from 'react-gesture-gallery'
import { makeStyles } from '@material-ui/core/styles';
import {Cell, ProgressBar} from 'react-mdl'


import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
// import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import Container from '@material-ui/core/Container';
import home from './Home.css'
import Statistics from '../people/Statistics'
import Footer from './Footer';


const images = [

    "https://images.unsplash.com/photo-1559666126-84f389727b9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1356&q=80",
    "https://assetsds.cdnedge.bluemix.net/sites/default/files/styles/big_2/public/feature/images/jagannath_hall.jpg?itok=Gfbaf-YU",
    "https://images.unsplash.com/photo-1553969420-fb915228af51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
    "https://images.unsplash.com/photo-1550596334-7bb40a71b6bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1550640964-4775934de4af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"

]

const useStyles = makeStyles(theme => ({
    mainFeaturedPost: {
            position: 'relative',
            backgroundColor: theme.palette.grey[800],
            color: theme.palette.common.white,
            marginBottom: theme.spacing(4),
            // backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        },
        overlay: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
           // backgroundColor: 'rgba(0,0,0,.3)',
        },
        mainFeaturedPostContent: {
            position: 'relative',
            padding: theme.spacing(3),
            [theme.breakpoints.up('md')]: {
                padding: theme.spacing(6),
                paddingRight: 0,
            },
        },
        mainGrid: {
            marginTop: theme.spacing(3),
        },
        card: {
            display: 'flex',
        },
        cardDetails: {
            flex: 1,
        },
        cardMedia: {
            width: 160,
           
        },
        markdown: {
            ...theme.typography.body2,
            padding: theme.spacing(3, 0),
        },
        sidebarAboutBox: {
            padding: theme.spacing(2),
            backgroundColor: theme.palette.grey[200],
        },
        sidebarSection: {
            marginTop: theme.spacing(3),
        },
        toolbar: {
            borderBottom: `1px solid ${theme.palette.divider}`,
        },
        toolbarTitle: {
            flex: 1,
            color: '#00254e',
            fontSize: '2em'
        },
        toolbarSecondary: {
            justifyContent: 'space-between',
            overflowX: 'auto',
            //background: '#C33764',
            background: '#00254e',
            color: 'white',
            fontSize: '5'
        },
        toolbarLink: {
            padding: theme.spacing(1),
            flexShrink: 0,
        },
      
        footer: {
            backgroundColor: 'grey',
            // backgroundColor: theme.palette.background.paper,
            marginTop: theme.spacing(1),
            padding: theme.spacing(1, 0),
        },
}));


const featuredPosts = [
    {
        title: 'Notice Board',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        title: 'Hall Life',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
];



  function Copyright() {
    return (
        <Typography variant="body2"  color='text-light' align="center">
            {'Copyright © Developed & maintained by '}
            <Link color="red" href="https://www.facebook.com/profile.php?id=100009508176925">
                Sowmik Sarker 
            </Link>{' and '}
            <Link color="red" href="https://www.facebook.com/papon.banik.773">
                Mridul Banik 
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
  }


const Home = () => {


    const classes = useStyles();

    const [index, setIndex] = React.useState(0)
    React.useEffect(() => {
        const timer = setInterval(() => {
            if (index === 4) {
                setIndex(0)
            }
            else {
                setIndex(prev => prev + 1)
            }
        }, 5000)
        return () => clearInterval(timer)
    }, [index])


    return ( 
        <div>
            <main>
                {/* Main featured post */}
                <Paper className={classes.mainFeaturedPost}>
                    <Grid container>
                        <Gallery
                            style={{
                                background: "white",
                                height: "70vh",
                                width: "150vw"
                            }}
                            index={index}
                            onRequestChange={i => {
                                setIndex(i);
                            }
                        }>

                            {images.map(image => (
                                <GalleryImage objectFit="contain" key={image} src={image} />
                            ))}
                        </Gallery>
                    </Grid>
    
             {/* End of image floationg */}

              
               

                <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                        <marquee>এই ওয়েবসাইটির নির্মাণ কাজ চলিতেছে । খুব শিগ্রই এডমিন ইহার পরিসমাপ্তি দেখিতে চায় । এই কারণে এডমিন এখন খুবই বাস্ত আছে । সুতরাং তাহাকে দিস্তাব না দিয়ে চুপচাপ বিদায় নেন । *** 
Construction of this website is in progress. Pretty soon the admin wants to see its end. Because of this, the admin is very busy now. So, without giving him a nod, Please went away quietly.</marquee>
                </Toolbar>

             {/* End of marquee text flow */}
             </Paper>


                {/* End main featured post */}
                {/* Sub featured posts */}
                <Grid container spacing={8}>
                    {featuredPosts.map(post => (
                        <Grid item key={post.title} xs={12} md={6}>
                            <CardActionArea component="a" href="#">
                                <Card className={classes.card}>
                                    <div className={classes.cardDetails}>
                                        <CardContent>
                                            <Typography component="h2" variant="h5">
                                                {post.title}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary">
                                                {post.date}
                                            </Typography>
                                            <Typography variant="subtitle1" paragraph>
                                                {post.description}
                                            </Typography>
                                            <Typography variant="subtitle1" color="primary">
                                                Continue reading...
                                            </Typography>
                                        </CardContent>
                                    </div>
                                    
                                </Card>
                            </CardActionArea>
                        </Grid>
                    ))}
                </Grid>

            {/* <Divider /> */}

            </main>

               
        <Footer/>
    
        </div>
    );
}
 
export default Home;








            