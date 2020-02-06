import React, { Component } from 'react';
import stuff from './Stuff.css'
import { Container } from '@material-ui/core';



class StuffTable extends Component {
    state = { }
   
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
         electricians: [
              { id: 1, name: 'Wasif', age: 21, task: 'Electrician', time: '7:00PM-12:00 AM', contact: '0175457485' },
              { id: 2, name: 'Ali', age: 19, task: 'Electrician', time: '7:00PM-12:00 AM', contact: '0175457485' },
              { id: 3, name: 'Saad', age: 16, task: 'Electrician', time: '7:00PM-12:00 AM', contact: '0175457485' },
              { id: 4, name: 'Asad', age: 25, task: 'Electrician', time: '7:00PM-12:00 AM', contact: '0175457485' }
           ],
         gardeners: [
            { id: 1, name: 'Wasif', age: 21, task: 'gardeners', time: '7:00PM-12:00 AM', contact: '0175457485' },
            { id: 2, name: 'Ali', age: 19, task: 'gardeners', time: '7:00PM-12:00 AM', contact: '0175457485' },
            { id: 3, name: 'Saad', age: 16, task: 'Electrician', time: '7:00PM-12:00 AM', contact: '0175457485' },
            { id: 4, name: 'Asad', age: 25, task: 'Electrician', time: '7:00PM-12:00 AM', contact: '0175457485' }
         ],
         cleaners: [
            { id: 1, name: 'Wasif', age: 21, task: 'cleaners', time: '7:00PM-12:00 AM', contact: '0175457485' },
            { id: 2, name: 'Ali', age: 19, task: 'cleaners', time: '7:00PM-12:00 AM', contact: '0175457485' },
            { id: 3, name: 'Saad', age: 16, task: 'Electrician', time: '7:00PM-12:00 AM', contact: '0175457485' },
            { id: 4, name: 'Asad', age: 25, task: 'Electrician', time: '7:00PM-12:00 AM', contact: '0175457485' }
         ],
         health_carers: [
            { id: 1, name: 'Wasif', age: 21, task: 'health_carers', time: '7:00PM-12:00 AM', contact: '0175457485' },
            { id: 2, name: 'Ali', age: 19, task: 'health_carers', time: '7:00PM-12:00 AM', contact: '0175457485' },
            { id: 3, name: 'Saad', age: 16, task: 'Electrician', time: '7:00PM-12:00 AM', contact: '0175457485' },
            { id: 4, name: 'Asad', age: 25, task: 'Electrician', time: '7:00PM-12:00 AM', contact: '0175457485' }
         ],
         carpenters: [
            { id: 1, name: 'Wasif', age: 21, task: 'carpenters', time: '7:00PM-12:00 AM', contact: '0175457485' },
            { id: 2, name: 'Ali', age: 19, task: 'carpenters', time: '7:00PM-12:00 AM', contact: '0175457485' },
            { id: 3, name: 'Saad', age: 16, task: 'Electrician', time: '7:00PM-12:00 AM', contact: '0175457485' },
            { id: 4, name: 'Asad', age: 25, task: 'Electrician', time: '7:00PM-12:00 AM', contact: '0175457485' }
         ],
         athletic_bearers: [
            { id: 1, name: 'Wasif', age: 21, task: 'Elathletic_bearersectrician', time: '7:00PM-12:00 AM', contact: '0175457485' },
            { id: 2, name: 'Ali', age: 19, task: 'athletic_bearers', time: '7:00PM-12:00 AM', contact: '0175457485' },
            { id: 3, name: 'Saad', age: 16, task: 'Electrician', time: '7:00PM-12:00 AM', contact: '0175457485' },
            { id: 4, name: 'Asad', age: 25, task: 'Electrician', time: '7:00PM-12:00 AM', contact: '0175457485' }
         ]
        }
     }


     SelectTable(){
         if(this.props.type==='electricians'){
            // renderTableData() {
               return this.state.electricians.map((electrician, index) => {
                  const { id, name, age, task, time, contact } = electrician //destructuring
                  return (
                     <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{age}</td>
                        <td>{task}</td>
                        <td>{time}</td>
                        <td>{contact}</td>
                     </tr>
                  )
               })
            // }
         }
         else if(this.props.type==='gardeners'){
            // renderTableData() {
               return this.state.gardeners.map((gardener, index) => {
                  const { id, name, age, task, time, contact } = gardener //destructuring
                  return (
                     <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{age}</td>
                        <td>{task}</td>
                        <td>{time}</td>
                        <td>{contact}</td>
                     </tr>
                  )
               })
            // }
         }
         else if(this.props.type==='cleaners'){
            // renderTableData() {
               return this.state.cleaners.map((cleaner, index) => {
                  const { id, name, age, task, time, contact } = cleaner //destructuring
                  return (
                     <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{age}</td>
                        <td>{task}</td>
                        <td>{time}</td>
                        <td>{contact}</td>
                     </tr>
                  )
               })
            // }
         }
         else if(this.props.type==='health_carers'){
            // renderTableData() {
               return this.state.health_carers.map((health_carer, index) => {
                  const { id, name, age, task, time, contact } = health_carer //destructuring
                  return (
                     <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{age}</td>
                        <td>{task}</td>
                        <td>{time}</td>
                        <td>{contact}</td>
                     </tr>
                  )
               })
            // }
         }
         else if(this.props.type==='carpenters'){
            // renderTableData() {
               return this.state.carpenters.map((carpenter, index) => {
                  const { id, name, age, task, time, contact } = carpenter //destructuring
                  return (
                     <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{age}</td>
                        <td>{task}</td>
                        <td>{time}</td>
                        <td>{contact}</td>
                     </tr>
                  )
               })
            // }
         }
         else if(this.props.type==='athletic_bearers'){
            // renderTableData() {
               return this.state.athletic_bearers.map((athletic_bearer, index) => {
                  const { id, name, age, task, time, contact } = athletic_bearer //destructuring
                  return (
                     <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{age}</td>
                        <td>{task}</td>
                        <td>{time}</td>
                        <td>{contact}</td>
                     </tr>
                  )
               })
            // }
         }
         else{
            console.log("error 22222 "+this.props.type)
         }
     }
     

   //   renderTableData() {
   //    return this.state.electricians.map((electrician, index) => {
   //       const { id, name, age, task, time, contact } = electrician //destructuring
   //       return (
   //          <tr key={id}>
   //             <td>{id}</td>
   //             <td>{name}</td>
   //             <td>{age}</td>
   //             <td>{task}</td>
   //             <td>{time}</td>
   //             <td>{contact}</td>
   //          </tr>
   //       )
   //    })
   // }

   SelectTableHeader(){
      if(this.props.type==='electricians'){
         // renderTableHeader() {
            console.log(this.props)
             let header = Object.keys(this.state.electricians[0])
             return header.map((key, index) => {
                return <th key={index}>{key.toUpperCase()}</th>
             })
         //  }
      }
      else if(this.props.type==='gardeners'){
         // renderTableHeader() {
            console.log(this.props)
             let header = Object.keys(this.state.gardeners[0])
             return header.map((key, index) => {
                return <th key={index}>{key.toUpperCase()}</th>
             })
         //  }
      }
      else if(this.props.type==='cleaners'){
         // renderTableHeader() {
            console.log(this.props)
             let header = Object.keys(this.state.cleaners[0])
             return header.map((key, index) => {
                return <th key={index}>{key.toUpperCase()}</th>
             })
         //  }
      }
      else if(this.props.type==='health_carers'){
         // renderTableHeader() {
            console.log(this.props)
             let header = Object.keys(this.state.health_carers[0])
             return header.map((key, index) => {
                return <th key={index}>{key.toUpperCase()}</th>
             })
         //  }
      }
      else if(this.props.type==='carpenters'){
         // renderTableHeader() {
            console.log(this.props)
             let header = Object.keys(this.state.carpenters[0])
             return header.map((key, index) => {
                return <th key={index}>{key.toUpperCase()}</th>
             })
         //  }
      }
      else if(this.props.type==='athletic_bearers'){
         // renderTableHeader() {
            console.log(this.props)
             let header = Object.keys(this.state.athletic_bearers[0])
             return header.map((key, index) => {
                return <th key={index}>{key.toUpperCase()}</th>
             })
         //  }
      }
      else {
         console.log("error 11111 "+this.props.type)
      }
   }




//   renderTableHeader() {
//      console.log(this.props)
//       let header = Object.keys(this.state.electricians[0])
//       return header.map((key, index) => {
//          return <th key={index}>{key.toUpperCase()}</th>
//       })
//    }

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
 
export default StuffTable;
