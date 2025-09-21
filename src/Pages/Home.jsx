import React from 'react';
import Banner from './Banner';
import MySkill from './MySkill';
import ServiceCount from './ServiceCount';
import ContactMe from './ContactMe';
import ProgrammigSkill from './ProgrammigSkill';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MySkill></MySkill>
            <ProgrammigSkill></ProgrammigSkill>
            <ServiceCount></ServiceCount>
        </div>
    );
};

export default Home;