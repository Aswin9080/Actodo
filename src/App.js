import './App.css';
import Header from './components/header'
import Carditem from './components/card'
import Dailyactivity from './components/activity'
import { useLocation } from 'react-router-dom';
function App() {
  var data=useLocation()
  console.log(data.state.usename)
  
  return (
    <div>
      <div className='bg-black p-10'>
        <div className='bg-white text-black p-5 border rounded'>
          <Header use={data.state.usename}></Header>

          <div className='flex gap-5 justify-between flex-grow mt-5 flex-wrap'>
            <Carditem background={'red'} content={'23%'} activity={'Chennai'}></Carditem>
            <Carditem background={'yellow'} content={'43%'} activity={'Madurai'}></Carditem>
            <Carditem background={'orange'} content={'10%'} activity={'Kerla'}></Carditem>
          </div>

          <Dailyactivity></Dailyactivity>
        </div>
      </div>
    </div>
  );
}

export default App;
