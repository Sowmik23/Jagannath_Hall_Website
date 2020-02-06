import React, { Component } from 'react'

import {Grid, Cell } from 'react-mdl'

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container, Link, Button } from '@material-ui/core';

import Footer from './Footer';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  function createData(image, name, period, department, profile) {
    return { image, name, period, department, profile };
  }
  
  const rows = [
    createData(<img
        src="https://avatars3.githubusercontent.com/u/36860940?s=460&v=4"
        alt="avatar"
        style={{height: '70px'}}
    />, 'Ashim Sarker', "2015-2019", "Pharmacy", "www.google.com"),
    createData(<img
        src="https://avatars3.githubusercontent.com/u/36860940?s=460&v=4"
        alt="avatar"
        style={{height: '70px'}}
    />, 'Ice cream sandwich', "2011-2015", "Sanskrit", "www.google.com"),
    createData(<img
        src="https://avatars3.githubusercontent.com/u/36860940?s=460&v=4"
        alt="avatar"
        style={{height: '70px'}}
    />, 'Eclair Effdfd',"2007-2011", "Marketing","www.google.com"),
    createData(<img
        src="https://avatars3.githubusercontent.com/u/36860940?s=460&v=4"
        alt="avatar"
        style={{height: '70px'}}
    />, 'Cupcake Gefdfd', "2003-2007", "Physics","www.google.com"),
    createData(<img
        src="https://avatars3.githubusercontent.com/u/36860940?s=460&v=4"
        alt="avatar"
        style={{height: '70px'}}
    />, 'Gingerbread Rewffds', "1998-2003", "Bangla", "www.google.com"),
  ];



// class Provost extends Component {
export default function Provost () {
    const classes = useStyles();
    // render() {
        return (
            <div>
                <Grid>
                    {/* Left Side */}
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://avatars3.githubusercontent.com/u/36860940?s=460&v=4"
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                            <p>Period: [2019-Present]</p>
                        </div>

                        {/* <h2 style={{paddingTop: '2em'}}>Sowmik Sarker</h2>
                        <h4 style={{color: 'grey'}}>Web Developer</h4> */}
                        {/* <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/> */}
                     
                        {/* <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/> */}
                    </Cell>


                    {/* Right Side */}
                    <Cell className="resume-right-col" col={8}>
                        <h4>Dr. Mihir Lal Saha</h4>
                        <h5>Ex. Chairman</h5>
                        <h5>Department of Pharmacy</h5>

                        <Button><Link>[Profile]</Link></Button>
                        
                         {/* <Education 
                            startYear={2017}
                            endYear={2021}
                            schoolName="University of Dhaka"
                            schoolDescription="React is a JavaScript library for building user interfaces. 
                            It is maintained by Facebook and a community of individual 
                            developers and companies. Undergraduate(B.Sc)"
                        /> */}

                        {/* <hr style={{borderTop: '3px solid #e22947'}}/> */}

                        {/* <h2>Experience</h2> */}

                        {/* <Experience
                            startYear={2021}
                            endYear={2023}
                            jobName="My First Job Name"
                            jobDescription="React is a JavaScript library for building user interfaces. 
                            It is maintained by Facebook and a community of individual 
                            developers and companies."
                        />  */}

                       
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        {/* <h2>Skills</h2> */}
                         {/* <Skills
                            skill="Android"
                            progress="100"
                        /> */}
                    </Cell>
                    
                </Grid>
               

                <Container maxWidth="80%">
                    <h5 textAlign='center'>Alumni Provosts in Jagannath Hall</h5>
                    <TableContainer component={Paper} >
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell align="center"><b>Name</b></TableCell>
                                <TableCell align="right"><b>Period</b></TableCell>
                                <TableCell align="right"><b>Department</b></TableCell>
                                <TableCell align="right"><b>Profile</b></TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map(row => (
                                <TableRow key={row.name}>
                                <TableCell align="left">
                                    {row.image}   {row.name}
                                </TableCell>
                                <TableCell align="right">{row.period}</TableCell>
                                <TableCell align="right">{row.department}</TableCell>
                                <TableCell align="right"><Button><Link>[Profile]</Link></Button></TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>


                {/* <div>
                <Container maxWidth="80%">
                    <h5 textAlign='center'>Alumni Provosts in Jagannath Hall</h5>
                     
                </Container>
                    
                </div> */}

                <br/>
                <br/>

                <Footer/>
                
            </div>
        )
    }
// }

// export default Provost



