import React from 'react';
import Important from 'components/LeftNav/Important';
import Today from 'components/LeftNav/Today';
import LifeContainer from 'components/LeftNav/LifeContainer/LifeContainer';
import './style.css';

const LeftNav = ({userTasks}) => {
	// console.log(userTasks);
	return (
    <div className="LeftNav">
        <div className="allTasks">
	        <p className="allTasks_text"><a href="">Все&nbsp;задачи</a></p>
	    </div>
        <Important/>
        <Today/>
        <LifeContainer userTasks={userTasks}/>
    </div>
)};

export default LeftNav;