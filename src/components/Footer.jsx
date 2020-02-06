import React, { Component } from 'react'

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


function Copyright() {
    return (
        <Typography variant="body2"  color='text-light' align="center">
            {'Copyright © Developed & maintained by '}
            <Link color="red" href="https://www.facebook.com/profile.php?id=100009508176925">
                Sowmik Sarker 
            </Link>{' and '}
            <Link color="red" href="https://www.facebook.com/papon.banik.773">
                Mridul Banik 
            </Link>{' 31th December, 2019 to 1st January, '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
  }



const Footer =() => {

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

    // render() {
        return (
            <div>
                <div class="wrapper">
                
                  <div class="item1">
                    <font color='#DFAF2B'>
                    <h4>Hall Campus Map</h4>
                    <div id="text-2" class="widget widget_text">
                        Click here for an <a href="https://goo.gl/maps/BhGkG" target="_blank">expanded view</a>.</div>
                    <div class="textwidget">
                        <div class="wpb_gmaps_widget wpb_content_element">
                            <div class="wpb_wrapper">
                                <div class="wpb_map_wraper">
                                    <iframe width="80%" height="300" frameborder="1" 
                                    scrolling="no" marginheight="0" marginwidth="0" 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913.1296828475806!2d90.3991466!3d23.728874599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ef3965e60b%3A0xf374307f9516475f!2sDept+of+Computer+Science+and+Engineering%2C+University+of+Dhaka%2C+Science+Complex%2C+Suhrawardi+Udyan+Rd%2C+Dhaka!5e0!3m2!1sen!2sbd!4v1430243938493&amp;t=m&amp;z=14&amp;output=embed"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    </font>
                  </div>
                    <div class="item2">
                     <font color='#DFAF2B'>
                        <h4>Student's Statistics</h4>
                        <div id="text-2" class="widget widget_text">
                            This hall only for non muslims student's.
                            <Statistics 
                                skill="B.Sc"
                                progress="85"
                            />
                            <Statistics 
                                skill="M.Sc"
                                progress="15"
                            />
                            <Statistics 
                                skill="Hindu"
                                progress="98"
                            />
                            <Statistics 
                                skill="Buddhists"
                                progress="1"
                            />
                            <Statistics 
                                skill="Chirstian"
                                progress="0.5"
                            />
                            <Statistics 
                                skill="Others"
                                progress="0.5"
                            />
                        </div>
                        </font>
                    </div>
                    <div class="item3">
                        <font color='#DFAF2B'>
                            <h4>Contact Information</h4>
                            Provost Office, October Smriti Bhaban <br/>
                            Jagannath Hall, University of Dhaka, Dhaka-1000. <br/>
                            Tel: +880 2 9670734 <br/>
                            PABX: +880 2 9661920-70, Ext. 7421 <br/>
                            Email: office@jnhall.du.ac.bd <br/> 
                        </font>
                    </div>
                </div>

                    

                        


                {/* Footer */}
                <hr style={{borderTop: '3px solid #e22947'}}/>
                <footer className={classes.footer}>
                        <Container maxWidth="lg">
                            <Typography variant="h6" align="center" gutterBottom>
                                Best Viewed in Google Chrome Browser
                            </Typography>
                            <Copyright />
                            <Typography variant="subtitle1" align="center" color="text-light" component="p">
                                Department of Computer Science & Engineering, University of Dhaka, Dhaka, Bangladesh.
                            </Typography>
                        
                        </Container>
                </footer>
                {/* End footer */}
            </div>
        )
    // }
}

export default Footer;
