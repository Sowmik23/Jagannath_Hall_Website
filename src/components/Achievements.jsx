import React, { Component } from 'react'

import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'
import Footer from './Footer'


class Achievements extends Component {
    render() {
        return (
            <div>
                <h4><center>Achievements</center></h4>
                <hr style={{borderTop: '3px solid #e22947', marginLeft: '5em', marginRight: '5em'}}/>

                <Card shadow={10} style={{ height: '100%', width: '90%',  margin: 'auto' }}>
                       

                        {/* 1st details */}
                        <CardTitle style={{
                            color: 'black', height: '100px', 
                            // background:
                            //     'url(data:image/png;base64,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) center / cover'
                        }
                        }>Inter Hall football match champion at 2015</CardTitle>
                        
                        <hr style={{borderTop: '2px solid #019031'}}/>
                        <CardText style={{color: '#1287A5'}}>
                        Code of C++ project using Borland Graphics Interface (BGI) in 1st year
                         2nd semeter. I made this project after learning c language in 1st year 2nd semester.
                         This was a simple game. You can Learn details in video demo.
                         <div style={{textAlign: 'center'}}>
                            <img
                                src="https://assetsds.cdnedge.bluemix.net/sites/default/files/styles/big_2/public/feature/images/physically_challegned.jpg?itok=0BRwoHPN"
                                alt="avatar"
                                style={{height: '400px',width: '70%'}}
                            />
                            <p>Champion team at 2018</p>
                        </div>
                        </CardText>
                        

                        {/* 2nd details */}
                        <CardTitle style={{
                            color: 'black', height: '100px', 
                        }
                        }>Inter Hall swiming champion at 2001</CardTitle>
                        <hr style={{borderTop: '2px solid #E74292'}}/>
                        <CardText style={{color: '#2B2B52'}}>
                        Code of C++ project using Borland Graphics Interface (BGI) in 1st year
                         2nd semeter. I made this project after learning c language in 1st year 2nd semester.
                         This was a simple game. You can Learn details in video demo.
                        </CardText>


                         {/* 2nd details */}
                         <CardTitle style={{
                            color: 'black', height: '100px', 
                        }
                        }>Inter Hall basket ball runner up at 2013</CardTitle>
                        <hr style={{borderTop: '2px solid #E74292'}}/>
                        <CardText style={{color: '#1287A5'}}>
                        Code of C++ project using Borland Graphics Interface (BGI) in 1st year
                         2nd semeter. I made this project after learning c language in 1st year 2nd semester.
                         This was a simple game. You can Learn details in video demo.
                        </CardText>


                         {/* 2nd details */}
                         <CardTitle style={{
                            color: 'black', height: '100px', 
                        }
                        }>Inter Asia boxing runner up at 2019</CardTitle>
                        <hr style={{borderTop: '2px solid #E74292'}}/>
                        <CardText style={{color: '#2B2B52'}}>
                        Code of C++ project using Borland Graphics Interface (BGI) in 1st year
                         2nd semeter. I made this project after learning c language in 1st year 2nd semester.
                         This was a simple game. You can Learn details in video demo.
                        </CardText>

                         {/* 2nd details */}
                         <CardTitle style={{
                            color: 'black', height: '100px', 
                        }
                        }>Debate first at 2020</CardTitle>
                        <hr style={{borderTop: '2px solid #E74292'}}/>
                        <CardText style={{color: '#1287A5'}}>
                        Code of C++ project using Borland Graphics Interface (BGI) in 1st year
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://assetsds.cdnedge.bluemix.net/sites/default/files/styles/big_2/public/feature/images/physically_challegned.jpg?itok=0BRwoHPN"
                                alt="avatar"
                                style={{height: '400px',width: '70%'}}
                            />
                            <p>Champion team at 2018</p>
                        </div>
                         2nd semeter. I made this project after learning c language in 1st year 2nd semester.
                         This was a simple game. You can Learn details in video demo.
                        </CardText>

                        


                        <CardActions border>
                            <hr style={{borderTop: '3px solid #FF3031'}}/>
                            <a  rel="noopener noreferrer" target="_blank"><Button colored>Follow     us     on                      </Button></a>
                            <a href="https://github.com/Sowmik23/C_Project-1-2" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
                            <a href="https://www.youtube.com/watch?v=y5mc-tfs0rw&t=16s" rel="noopener noreferrer" target="_blank"><Button colored>Youtube</Button></a>
                            <a href="https://www.youtube.com/watch?v=y5mc-tfs0rw&t=16s" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
                        </CardActions>
                        {/* <CardMenu style={{ color: '#2C3335' }}>
                            <IconButton name="share" />
                        </CardMenu> */}
                    </Card>
                    <h1></h1>
                    <Footer/>
            </div>
        )
    }
}

export default Achievements
