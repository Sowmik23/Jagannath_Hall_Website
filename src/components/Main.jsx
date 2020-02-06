import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Home from './Home';
import Provost from './Provost';
import HouseTutor from './HouseTutor';
import Stuffs from '../people/Stuff';
import NoticeBoard from './NoticeBoard';
import StudentInformation from './StudentInformation';
import StudentUnion from './StudentUnion';
import Organizations from './Organizations';
import Achievements from './Achievements';
import About from './About';



const Main = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/provost" component={Provost }/>
        <Route path="/house_tutor" component={HouseTutor}/>
        <Route path="/stuffs" component={Stuffs}/>
        <Route path="/notice_board" component={NoticeBoard }/>
        <Route path="/students_information" component={StudentInformation}/>
        <Route path="/student_union" component={StudentUnion}/>
        <Route path="/organizations" component={Organizations}/>
        <Route path="/achievements" component={Achievements}/>
        <Route path="/about" component={About}/>
    </Switch>
)

export default Main;
