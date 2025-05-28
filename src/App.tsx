import { MarketData } from './Component/MarketData.tsx';
import Sidebar from './Component/Sidebar.tsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <Sidebar/>
    
    <Routes>
   <Route path="/marketdata" element={<MarketData/>}/>
   </Routes>
  
   </BrowserRouter>

  );
}

export default App;
