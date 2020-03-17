import React, { Component } from 'react'

import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'
import Footer from './Footer'
import {Link} from '@material-ui/core'
// import { ListView } from 'react-native'
// import ItemListView from '../people/ItemListView'



class StudentUnion extends Component {
    render() {
        return (
            <div>
                <h4><center>কেন্দ্রীয় ছাত্র সংসদ জগন্নাথ হল </center></h4>
                <hr style={{borderTop: '3px solid #e22947', marginLeft: '5em', marginRight: '5em'}}/>

                <Card shadow={10} style={{ height: '100%', width: '90%',  margin: 'auto' }}>
                       

                     {/* <ItemListView/> */}

                    {/* 2nd details */}
                    <CardTitle style={{
                    color: 'black', height: '100px', 
                    }
                    }>Hall student union 2019-1020</CardTitle>
                    <hr style={{borderTop: '2px solid #E74292'}}/>


                    <h5>1.President</h5>
                    <Grid >
                        {/* Left Side */}
                        <Cell style={{marginRight: '10em'}} >
                            <div style={{textAlign: 'center'}}>
                                <img
                                    src="https://avatars3.githubusercontent.com/u/36860940?s=460&v=4"
                                    alt="avatar"
                                    style={{height: '150px'}}
                                />
                                <p>President</p>
                            </div>
                        </Cell>
                    

                        {/* Right Side */}
                        <Cell className="resume-right-col">
                            <h5>Utpal Biswas</h5>
                            <h6>Department of Bangla</h6>
                            <Button><Link>[Profile]</Link></Button>

                            <hr style={{borderTop: '3px solid #e22947'}}/>
                        </Cell>
                    </Grid>
                    <hr style={{borderTop: '2px dotted #e22947'}}/>

                    <h5>2.Vice President</h5>
                    <Grid >
                        {/* Left Side */}
                        <Cell style={{marginRight: '10em'}} >
                            <div style={{textAlign: 'center'}}>
                                <img
                                    src="https://avatars3.githubusercontent.com/u/36860940?s=460&v=4"
                                    alt="avatar"
                                    style={{height: '150px'}}
                                />
                                <p>VP</p>
                            </div>
                        </Cell>
                    

                        {/* Right Side */}
                        <Cell className="resume-right-col">
                            <h5>Kajal Das</h5>
                            <h6>Department of Bangla</h6>
                            <Button><Link>[Profile]</Link></Button>

                            <hr style={{borderTop: '3px solid #e22947'}}/>
                        </Cell>
                    </Grid>


                    <hr style={{borderTop: '2px dotted #e22947'}}/>

                    <h5>3.Vice President</h5>
                    <Grid >
                        {/* Left Side */}
                        <Cell style={{marginRight: '10em'}} >
                            <div style={{textAlign: 'center'}}>
                                <img
                                    src="https://avatars3.githubusercontent.com/u/36860940?s=460&v=4"
                                    alt="avatar"
                                    style={{height: '150px'}}
                                />
                                <p>VP</p>
                            </div>
                        </Cell>
                    

                        {/* Right Side */}
                        <Cell className="resume-right-col">
                            <h5>Kajal Das</h5>
                            <h6>Department of Bangla</h6>
                            <Button><Link>[Profile]</Link></Button>

                            <hr style={{borderTop: '3px solid #e22947'}}/>
                        </Cell>
                    </Grid>












                    {/* <CardText style={{color: '#1287A5'}}>
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
                    </CardText>  */}


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

export default StudentUnion
