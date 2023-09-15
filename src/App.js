
// App.js (Main Component)
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import TravelPlanForm from './TravelPlanForm';
import SearchResults from './SearchResults';
import TravelList from './TravelList';
import './App.css';
import Layout from './Layout';
import DateTimePicker from './dateAndTime';



function App() {

return (
    <div className="App">
    <BrowserRouter>
    <Routes>

        <Route path="/" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path="travelform" element= {<TravelPlanForm  />} />
          <Route path="search" element={<SearchResults/>} />
          <Route path="dateTimePicker" element={<DateTimePicker/>} />
          <Route path="travellist" element={<TravelList/>} />
        </Route>
    </Routes>
    </BrowserRouter>
    </div>
    );
  
};

export default App;








