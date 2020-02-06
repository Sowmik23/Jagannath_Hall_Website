import React, { Component } from 'react';
import stuff from './Stuff.css'
import { Container } from '@material-ui/core';



class Tutors extends Component {
    state = { }
   
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
         October_Smriti_Bhaban: [
              { id: 1, name: 'Wasif', dept: 'Computer Science', time: '7:00PM-12:00 AM', contact: 'teache@gmail.com', profile: 'link' },
              { id: 2, name: 'Janina', dept: 'Computer Science', time: '7:00PM-12:00 AM', contact: 'teache@gmail.com', profile: 'link' },
              { id: 3, name: 'Saad',  dept: 'Computer Science', time: '7:00PM-12:00 AM', contact: 'teache@gmail.com', profile: 'link' },
              { id: 4, name: 'Asad',  dept: 'Computer Science', time: '7:00PM-12:00 AM', contact: 'teache@gmail.com', profile: 'link' }
           ],
         Santosh_Chandra_Bhaban: [
            { id: 1, name: 'Wasif', dept: 'Computer Science', time: '7:00PM-12:00 AM', contact: 'teache@gmail.com', profile: 'link' },
            { id: 2, name: 'Janina', dept: 'Computer Science', time: '7:00PM-12:00 AM', contact: 'teache@gmail.com', profile: 'link' },
            { id: 3, name: 'Saad',  dept: 'Computer Science', time: '7:00PM-12:00 AM', contact: 'teache@gmail.com', profile: 'link' },
            { id: 4, name: 'Asad',  dept: 'Computer Science', time: '7:00PM-12:00 AM', contact: 'teache@gmail.com', profile: 'link' }
         ],
         North_Building: [
            { id: 1, name: 'Wasif', dept: 'Computer Science', time: '7:00PM-12:00 AM', contact: 'teache@gmail.com', profile: 'link' },
            { id: 2, name: 'Janina', dept: 'Computer Science', time: '7:00PM-12:00 AM', contact: 'teache@gmail.com', profile: 'link' },
            { id: 3, name: 'Saad',  dept: 'Computer Science', time: '7:00PM-12:00 AM', contact: 'teache@gmail.com', profile: 'link' },
            { id: 4, name: 'Asad',  dept: 'Computer Science', time: '7:00PM-12:00 AM', contact: 'teache@gmail.com', profile: 'link' }
         ],
         South_Building: [
            { id: 1, name: 'Wasif', dept: 'Computer Science', time: '7:00PM-12:00 AM', contact: 'teache@gmail.com', profile: 'link' },
            { id: 2, name: 'Janina', dept: 'Computer Science', time: '7:00PM-12:00 AM', contact: 'teache@gmail.com', profile: 'link' },
            { id: 3, name: 'Saad',  dept: 'Computer Science', time: '7:00PM-12:00 AM', contact: 'teache@gmail.com', profile: 'link' },
            { id: 4, name: 'Asad',  dept: 'Computer Science', time: '7:00PM-12:00 AM', contact: 'teache@gmail.com', profile: 'link' }
         ],
         Rabindra_Bhaban: [
            { id: 1, name: 'Wasif', dept: 'Computer Science', time: '7:00PM-12:00 AM', contact: 'teache@gmail.com', profile: 'link' },
            { id: 2, name: 'Janina', dept: 'Computer Science', time: '7:00PM-12:00 AM', contact: 'teache@gmail.com', profile: 'link' },
            { id: 3, name: 'Saad',  dept: 'Computer Science', time: '7:00PM-12:00 AM', contact: 'teache@gmail.com', profile: 'link' },
            { id: 4, name: 'Asad',  dept: 'Computer Science', time: '7:00PM-12:00 AM', contact: 'teache@gmail.com', profile: 'link' }
         ]
        }
     }


     SelectTable(){
         if(this.props.type==='October_Smriti_Bhaban'){
            // renderTableData() {
               return this.state.October_Smriti_Bhaban.map((electrician, index) => {
                  const { id, name, dept, time, contact, profile } = electrician //destructuring
                  return (
                     <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{dept}</td>
                        <td>{time}</td>
                        <td>{contact}</td>
                        <td>{profile}</td>
                     </tr>
                  )
               })
            // }
         }
         else if(this.props.type==='Santosh_Chandra_Bhaban'){
            // renderTableData() {
               return this.state.Santosh_Chandra_Bhaban.map((gardener, index) => {
                  const { id, name, dept, time, contact, profile } = gardener //destructuring
                  return (
                     <tr key={id}>
                         <td>{id}</td>
                        <td>{name}</td>
                        <td>{dept}</td>
                        <td>{time}</td>
                        <td>{contact}</td>
                        <td>{profile}</td>
                     </tr>
                  )
               })
            // }
         }
         else if(this.props.type==='North_Building'){
            // renderTableData() {
               return this.state.North_Building.map((cleaner, index) => {
                  const { id, name, dept, time, contact, profile } = cleaner //destructuring
                  return (
                     <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{dept}</td>
                        <td>{time}</td>
                        <td>{contact}</td>
                        <td>{profile}</td>
                     </tr>
                  )
               })
            // }
         }
         else if(this.props.type==='South_Building'){
            // renderTableData() {
               return this.state.South_Building.map((health_carer, index) => {
                  const { id, name, dept, time, contact, profile  } = health_carer //destructuring
                  return (
                     <tr key={id}>
                         <td>{id}</td>
                        <td>{name}</td>
                        <td>{dept}</td>
                        <td>{time}</td>
                        <td>{contact}</td>
                        <td>{profile}</td>
                     </tr>
                  )
               })
            // }
         }
         else if(this.props.type==='Rabindra_Bhaban'){
            // renderTableData() {
               return this.state.Rabindra_Bhaban.map((carpenter, index) => {
                  const { id, name, dept, time, contact, profile  } = carpenter //destructuring
                  return (
                     <tr key={id}>
                         <td>{id}</td>
                        <td>{name}</td>
                        <td>{dept}</td>
                        <td>{time}</td>
                        <td>{contact}</td>
                        <td>{profile}</td>
                     </tr>
                  )
               })
            // }
         }
         else{
            console.log("error 22222 "+this.props.type)
         }
     }
     

   SelectTableHeader(){
      if(this.props.type==='October_Smriti_Bhaban'){
         // renderTableHeader() {
            console.log(this.props)
             let header = Object.keys(this.state.October_Smriti_Bhaban[0])
             return header.map((key, index) => {
                return <th key={index}>{key.toUpperCase()}</th>
             })
         //  }
      }
      else if(this.props.type==='Santosh_Chandra_Bhaban'){
         // renderTableHeader() {
            console.log(this.props)
             let header = Object.keys(this.state.Santosh_Chandra_Bhaban[0])
             return header.map((key, index) => {
                return <th key={index}>{key.toUpperCase()}</th>
             })
         //  }
      }
      else if(this.props.type==='North_Building'){
         // renderTableHeader() {
            console.log(this.props)
             let header = Object.keys(this.state.North_Building[0])
             return header.map((key, index) => {
                return <th key={index}>{key.toUpperCase()}</th>
             })
         //  }
      }
      else if(this.props.type==='South_Building'){
         // renderTableHeader() {
            console.log(this.props)
             let header = Object.keys(this.state.South_Building[0])
             return header.map((key, index) => {
                return <th key={index}>{key.toUpperCase()}</th>
             })
         //  }
      }
      else if(this.props.type==='Rabindra_Bhaban'){
         // renderTableHeader() {
            console.log(this.props)
             let header = Object.keys(this.state.Rabindra_Bhaban[0])
             return header.map((key, index) => {
                return <th key={index}>{key.toUpperCase()}</th>
             })
         //  }
      }
      else {
         console.log("error 11111 "+this.props.type)
      }
   }


  render() { 
     const {type} = this.props;
   //   console.log(type)
      return (
          <Container maxWidth="80%">
            <div>
               <h4>{"#"+this.props.type}</h4>
               <table id='stuffs'>
                     <tbody>
                        {/* <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()} */}
                        <tr>{this.SelectTableHeader()}</tr>
                        {this.SelectTable()}
                     </tbody>
               </table>
            </div>
           </Container>
      )
  }
}
 
export default Tutors;
