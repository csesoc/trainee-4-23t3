import { useState } from 'react'
import { atom, useRecoilState } from 'recoil';

import DailyList from './components/dailies/DailyList';
import ExtraTaskList from './components/extraTasks/ExtraTaskList';
import History from './components/history/History';
import ProgressBar from './components/progressBar/ProgressBar';
import Timer from './components/timer/Timer';
import Youtube from './components/youtube/Youtube';

import './App.css'

function App() {

  return (
    <>
      <div id='grid-container'> 
             
        <div id='grid-top'>
          <div id='grid-top-left'>
            <DailyList/>
            <Timer/>
            <Youtube/>
          </div>

          <div id='grid-top-right'>
            <History/>
            <ExtraTaskList/>
          </div>
          
        </div>

        <div id='grid-bottom'>
          <ProgressBar/>
        </div>

      </div>
    </>
  )
}

export default App
