import React, { useState } from 'react';
// Importing icons from lucide-react
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Sidebar() {



  return (
    <div classname="tks">
     <header>

    
      <div >
        <span>My Dashboard</span>
      </div>
<div >
    <aside>
      {/* Navigation Links */}
   <nav>
    <li> <a href="/Dashboard">Dashboard</a></li>
     <li> <Link to="/marketdata">MarketData</Link></li>
     <li> <a href="/algo">Algo</a></li>
     <li> <a href="/Backtest">Backtest</a></li>
       <li> <a href="/profile">Profile</a></li>
   </nav>
    </aside>
    </div>

      {/* Optional: Sidebar Footer (e.g., user info, settings) */}
      <div >
        <p>© 2025 My Company</p>
      </div>
       </header>
    </div>
  );
}
export  default Sidebar;
