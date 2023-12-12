import DailyList from './components/dailies/DailyList';
import ExtraTaskList from './components/extraTasks/ExtraTaskList';
import ProgressBar from './components/progressBar/ProgressBar';
import Timer from './components/timer/Timer';
import Youtube from './components/youtube/Youtube';
import Github from './components/github/Github';

import './App.css'

function App() {

  return (
    <>
      <div id='grid-container'>

        <div id='grid-top'>
          <div id='grid-top-left'>
            <div id='component-container'><DailyList/></div>
            <div id='component-container'><Timer/></div>
            <div id='component-container'><Youtube/></div>
          </div>

          <div id='grid-top-right'>
            <Github/>
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
