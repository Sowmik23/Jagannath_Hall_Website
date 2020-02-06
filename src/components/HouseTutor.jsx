import React, { Component } from 'react'


import { Container } from '@material-ui/core';
import { Table } from 'react-mdl';
import {Statistics} from '../people/Statistics'
import StuffTable from '../people/StuffTable'

import Tutors from '../people/Tutors';
import Footer from './Footer';


class HouseTutor extends Component {


    render() {
        return (
            <Container maxWidth="80%">
            <div>
                <h4 id='title'>House Tutor's list in different building's in Jagannath Hall</h4>

                <Tutors
                    type="October_Smriti_Bhaban"
                />
                <Tutors
                    type="Santosh_Chandra_Bhaban"
                />
                <Tutors
                    type="North_Building"
                />
                <Tutors
                    type="South_Building"
                />
                <Tutors
                    type="Rabindra_Bhaban"
                />

                <br/>
                <br/>

                <Footer/>

            </div>
            </Container>
        )
    }
}

export default HouseTutor
