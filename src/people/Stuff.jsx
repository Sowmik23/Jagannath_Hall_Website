import React, { Component } from 'react';
import stuff from './Stuff.css'
import { Container } from '@material-ui/core';
import { Table } from 'react-mdl';
import {Statistics} from '../people/Statistics'
import StuffTable from './StuffTable'
import Footer from '../components/Footer';


class Stuff extends Component {
  
    render() { 
        return (
            <Container maxWidth="80%">
            <div>
                <h4 id='title'>Stuff's list in Jagannath Hall</h4>

                <StuffTable
                  type="electricians"
                />
                 <StuffTable
                  type="gardeners"
                />
                 <StuffTable
                  type="cleaners"
                />
                 <StuffTable
                  type="health_carers"
                />
                <StuffTable
                  type="carpenters"
                />
                 <StuffTable
                  type="athletic_bearers"
                />
              <h6>***For emergency case student's are requested to inform in hall gate. #জরুরী ক্ষেত্রে শিক্ষার্থীদের হল গেটে জানাতে অনুরোধ করা হচ্ছে। </h6>
                <br/>
                <br/>

                <Footer/>

            </div>
            </Container>
        )
    }
}
 
export default Stuff;
