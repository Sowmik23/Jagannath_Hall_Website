import React, { Component } from 'react'

import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'
import Footer from './Footer'


class About extends Component {
    render() {
        return (
            <div>
                <h4><center>About Jagannath Hall</center></h4>
                <hr style={{borderTop: '3px solid #e22947', marginLeft: '5em', marginRight: '5em'}}/>

                <Card shadow={10} style={{ height: '100%', width: '90%',  margin: 'auto' }}>
                       

                        {/* 1st details */}
                        <CardTitle style={{
                            color: 'black', height: '100px', 
                            // background:
                            //     'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAA7VBMVEU0irn///////3//v8zi7ni397///wfZIMyjb7//v4ce6o0irszi7j//vz8//9chpwxjbcqhLIyiL6lsru4wMZGeJlLepIWaY0ohbkSapUshLs0ir0vjr05iLlvjqONoK5+laNfhJ48c5DAxsevuLvN0tQdcJjy9fQgZo8nc5aXqre4w8Unc6DP1tk/bYsphbA/dY/Gx8+jrbx9nKuco6QYea7e2NUXfqjq6enb1tyvtcB+kqdfg6Eyfac6c5lohJWVoqd+lJtfeZFTeIoYfp3c5eZuj50xcodMep41fJ5CZ3wVWnUVXIFcd4RYhJQbHt/2AAAJ3ElEQVR4nO2aC3faOBaALVt1hSUbPwiPCEKAYCCBOF2mG7Zdms7O0Gl3u/3/P2fvtYHyEEnTIZOcPfc7zSm2bFm6uroPSZZFEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEATx/4K0uFKKwy/OFZcSbzz4ErwBj9/3HLek1FJyC59SP1TpMyFVyGNt1b1xo9EYR3W8FarWQ6/FlhBSqdBcJ/ZZayu7TWu1dB7p2ApBIOrYbT8SKlRaZ6OzpD8buP6sn3TSCEbuweZ+6XTK5S/mkZWgJLo+ukv6C6xzkrwf1WPxYrVAKaG96huHIbYNf2yQ1DIuH3hPtvGF6sFKo5tkkNcZBFAlcyp/ROLojT8CHP9pcV2BNjq27Zds27XhFwvO06bk98rB67sBmzW0YS6AFjXHlzbDqnyQgQ0/XMYuRk0sfEi4fzEK2xP9lo8XyMAuQXMDuwR/rDe6bzooYaU+vHQRtcLdPuWzvrtghWK5rl0qoYjhYnEj9f7zz4xuWTr6hOqfq2yOwwLmgBAW3Vg1D77JZZk5Pjtr7utBKLWqDmzXyUWQ1+niBVTqfLP0SzOLOgzVHTQOWwqTYNGr9CY+Tgc/cNhkFB70DVJFF8z2g2Fz39SHcfhH3uW8+4terzcpFM1x7Vn3pYkAuiKu/cD1YdjZbDryoii6HU0XzA5cmOzJ6cEG69Cbgfb0vbC1b+ybjYWLg87AuHbTKIu89GwC5hbkyibpzlRAqwOogz4DS60nnD8q/r2f62qJJePVd3RaQSWGufHZ7PuxYboLFs9um9oms4+smAK9brRsvhy3GdqPgL1X8ebDYfy5jZRFy9hPdZcXf/jZHj5MqM9YkNuA9u3KcYFj9ypwB5Sjf3tI/spqMxjWG1OZ/BA4JbQEV2m8EqIS9fPC9w5GmzKQLfktF9e7SBm/Va/gW+zz07nVZrooRiy5XTdXqzBuLGywD4F7cuhFPu9DyxapqSyqoBq4bDKOrfVkCuXbXt4bdq43Hw5FBwRjswQCNUNdMrsChXRZ9enMSPyNBeC42Gwk1hNSSRnGUxtnAzPqOiLSIPDBM+6XcCt1odEQYlyrDbVXXHRzRWC9aKvS0zJDy5G0YmMykYFKui47eboQs34FgwAh0dTatjqiZuf+8k3EzXkDP4Omsc7+0IlQ50rv7gtoPgHdgiB0vHlTxeVCEU/NcUOEMrDZydMZxTEY98CxB7Wd+3o8cV3f92epMk5TCcMT+INac09FpfJQ50FJqjvBhYwuQLX8gF1v3n12GchrFrhg2irRbkioagWZZTZV6Qxs6VVk8Gg8HeT2fzHeNWNiXBs2asPaln48vwymODAOmClcPdgs0VqKZlMIbjJU0NETnEG/xnsFkosPRbgJUfROmVZN3eRiW9qbMtgQ6LrLKxk8tms/hpaqnqCVCh75Ba6VvARzYY+kQQ3AUuS0DYUbgMwFokU5tzyJ1cyvBY9hNMK4KBUCZACqyqp6ed2M9RETDkjxl86XDR9ldZUWHpg39IymHHCKEiixs3vXS6RV+zp8DXx9/d9CBl/hJzB8DUmVDKPXS/5zZWMk/+/h8nrU0kcMGkEGufli9qDxOM8jxSh36ZncMxbSii4LGVTvXzGZX7EVDtvEbgjJ5fD7DR8SD3d9VcmOahm48jBQDtzB+FEykFKcY3RZFtZeXAMySAoZdO+P7DIY33yBxfeL/93VdaOlQl1bSwBXH1wMRpZmJhOGDOXn4YUM2Gw3j3kAiZFgMGiYiniWFKFQV9wb2tV7zIzfADssagdK2UXd7Kh+Es6LucAGxpD3IIqnmDNeGYJEqDS7LGRQvV8GUS83Az8hg2PmkGgTr4r2Dh8VjXOrilNhai7k+TKj84BNRBlssRbIXysDruoXWG3APhhzZMzbjfetS5i7rnHCS87Pi8aaRbQm+uXVklmhi6vLv6MMZG22ui7WZdeXvxxVBtjiKTpfm73f644KVcw5B+u0n9bz23+A3CaeyTSpWHULub7Ldu0lD5sgd7G0o5FX8LaadzJ5e/u2uFE8vCz1biuQUTnsenUdHT1g7BSxcrLrcCSvlssdYM4NJmjkQLKZGCsMparlvs5d3O7KQHzulP/Z6ZTnxSeKmxtxojEkzQoZrKO448fMwyDPGwej3eaOCg2djdV+VKbeMxtSImNrQHcgfkIZsOtd5coqxSzpblX2SBkcH3COoAeQBO90SA/zpJ71PL2f1WcV13FnDWOTwR7UP+ZG0f7brnJ5rwIfQquZOXeuP5cMrPMiBJuk36NwCdG6NYUIFeKSy13d44prSAxtVqkfNPtdnGAlSMjj75uWWil9gzmGE7zZks2z542WbgyKJfDzSK3XE+VpmC5ABn5pf71QKsXLuFb46aDrk6BcDk6Gq99P15sJist8KjgOa289/fwyaInlErDf+b6O3lJZG4NXn73ydl8Aww6BYGAHI3kwL9Rl5pSY77J2tt6AkVz/K58iQWnbpz6/DJRsFP6XuXer/krhQTqQbxAZFgi4Gr9iuOKsD24YYQhu53HSxzRe1Rn9li9c2rs+6Edl8ITbtUrf2fk2E8zwm9t6XJeZ171iAWiBAyHAXrMkLo2CQl9yddBNKX3tug5uXbJJeVyHx+reKGF2yXbBBX3Y3ryScmUTzas19cKZnBze9fuzaMXnoNq4KYx7QMnHdjuZwBiCsgeue7IfG0BaO8W5XhWH949bVniG7sbBaTa7aLfbl32X+TZI1mGfwphvV/ilinS1MuqVusmL50+3tg4+oOldYJiE+6LLyN0NcI/UYXemkeERaIk7Sw37jOtHVBz9CtWAF/BXaYANeoVr5B8hctquVimBu2mQhxvti47jWAv98ImQnwa/K8Z5pgcaDkMPuTr6NTAHwd3eQivCwYAEbhKpw0tlSoQqOvOLtZGSDbmFg0ca8Lrtabmdm+CUkvmWojbvtUHUznHP40/29AG0dzdANXDdkhPgvrtTstmrqrGPIRr9gJ3dX6OyRNadoABAqvB8gJXbbHA253g+6zGNe9r91hXgunXanuUK65YK5Z1Nx+Yv6+wdRNfugwsOMpaj80VRZ95/cL/JyNIv9UQSqLyQ6dnFojgw4C7eddLIMg9XPL/o9/vJvsPYQYVCWmk1mSwPdsx60zQTwnpxpw8KcKqFSstsXut2yp2ToRfBvdDsrsPTbD6/jcIfOLwI+ZOMvMYHyEBPammWn+x5qWqA4BEiifaaF4cu8Wylsb1Kczx0+QMVLg9fibw2Ll7YISSCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIIjn43/FnbJCJuv5LgAAAABJRU5ErkJggg==) center / cover'
                        }
                        }>Welcome to Jagannath Hall official website</CardTitle>
                        
                        <hr style={{borderTop: '2px solid #019031'}}/>
                        <CardText style={{color: '#1287A5'}}>
                        Code of C++ project using Borland Graphics Interface (BGI) in 1st year
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="data:image/jpeg;base64,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"
                                alt="avatar"
                                style={{height: '400px',width: '70%'}}
                            />
                            <p>Hall main gate</p>
                        </div>
                         2nd semeter. I made this project after learning c language in 1st year 2nd semester.
                         This was a simple game. You can Learn details in video demo.
                        </CardText>
                        

                        {/* 2nd details */}
                        <CardTitle style={{
                            color: 'black', height: '100px', 
                        }
                        }>History of Jagannath Hall</CardTitle>
                        <hr style={{borderTop: '2px solid #E74292'}}/>
                        <CardText style={{color: '#2B2B52'}}>
                        Code of C++ project using Borland Graphics Interface (BGI) in 1st year
                         2nd semeter. I made this project after learning c language in 1st year 2nd semester.
                         <div style={{textAlign: 'center'}}>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSciKAZZT4819Rkk64yfuJahco5x7b10A4d_ZLYbyD3do6yqzcQ"
                                alt="avatar"
                                style={{height: '400px',width: '70%'}}
                            />
                            <p>Swami Bibekanondo</p>
                        </div>
                         This was a simple game. You can Learn details in video demo.
                        </CardText>


                         {/* 2nd details */}
                         <CardTitle style={{
                            color: 'black', height: '100px', 
                        }
                        }>Buildings of Jagannath Hall</CardTitle>
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
                        }>Memorable 15 October in Jagannath Hall</CardTitle>
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
                        }>25 March, 1971 night at Jagannath Hall</CardTitle>
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
                        }>Central field of Jagannath Hall</CardTitle>
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
                        }>Study environment at Jagannath Hall</CardTitle>
                        <hr style={{borderTop: '2px solid #192A56'}}/>
                        <CardText style={{color: '#1287A5'}}>
                        Code of C++ project using Borland Graphics Interface (BGI) in 1st year
                         2nd semeter. I made this project after learning c language in 1st year 2nd semester.
                         This was a simple game. You can Learn details in video demo.
                        </CardText>

                         {/* 2nd details */}
                         <CardTitle style={{
                            color: 'black', height: '100px', 
                        }
                        }>Food source (Canteen and Mess) in Jagannath Hall</CardTitle>
                        <hr style={{borderTop: '2px solid #192A56'}}/>
                        <CardText style={{color: '#2B2B52'}}>
                        Code of C++ project using Borland Graphics Interface (BGI) in 1st year
                         2nd semeter. I made this project after learning c language in 1st year 2nd semester.
                         <div style={{textAlign: 'center'}}>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQg7mRAZVDlyizt1PCYDS6-ojypJlZMvvckFdxujcI7iP8mmo_q"
                                alt="avatar"
                                style={{height: '400px',width: '70%'}}
                            />
                            <p>Biggest Saraswati Puja</p>
                        </div>
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

export default About
