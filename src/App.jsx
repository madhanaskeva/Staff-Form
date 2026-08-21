import React from 'react';
import Header from './components/Header/Header';
import StaffManagementPage from './pages/StaffManagementPage/StaffManagementPage';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <StaffManagementPage />
    </div>
  );
}

export default App;
