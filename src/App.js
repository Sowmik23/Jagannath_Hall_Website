import React from 'react';
import logo from './logo.svg';
import './App.css';


import { makeStyles } from '@material-ui/core/styles';
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
//import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';




import{Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import Main from './components/Main';


const useStyles = makeStyles(theme => ({
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
      backgroundColor: theme.palette.background.paper,
      marginTop: theme.spacing(8),
      padding: theme.spacing(6, 0),
  },
}));


function Copyright() {
  return (
      <Typography variant="body2" color="textSecondary" align="center">
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


function App() {
  const classes = useStyles();


  return (
    <div className="demo-big-content">
      <Toolbar className={classes.toolbar}>
          <Button size="small">Contact: +8801518390944</Button>
          <Typography
              component="h2"
              variant="h5"
              //color="inherit"
              //color= "red"
              align="center"
              noWrap
              className={classes.toolbarTitle}
          >
              Jagannath Hall <br/> University of Dhaka
          </Typography>
          <IconButton>
              <SearchIcon />
          </IconButton>
          <Button variant="outlined" size="small">Sign in</Button>
          {/* <MDBBtn variant="outlined" size="small">Sign in</MDBBtn> */}

      </Toolbar>
       <Layout>
          {/* <Header className = "header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">My Portfolio (Sowmik Sarker)</Link> } scroll> */}
         <Header>
           <Navigation>
             <Link to="/">Home</Link>
             <Link to="/provost">Provost</Link>
             <Link to="/house_tutor">House Tutor</Link>
             <Link to="/stuffs">Stuffs</Link>
             <Link to="/notice_board">Notice Board</Link>
             <Link to="/students_information">Students Information</Link>
             <Link to="/student_union">Student Union</Link>
             <Link to="/organizations">Organizations</Link>
             <Link to="/achievements">Achievements</Link>
             <Link to="/about">About</Link>
           </Navigation>
         </Header>

      

         <Content>
           <div className="page-content" />

           <Main/>

         </Content>



         {/* Footer */}
         {/* <footer className={classes.footer}>
                <Container maxWidth="lg">
                    <Typography variant="h6" align="center" gutterBottom>
                        Best Viewed in Google Chrome Browser
                    </Typography>
                    <Copyright />
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Department of Computer Science & Engineering, University of Dhaka, Dhaka, Bangladesh.
                    </Typography>
                   
                </Container>
         </footer> */}
        {/* End footer */}
       </Layout>
    </div>
  );
}

export default App;