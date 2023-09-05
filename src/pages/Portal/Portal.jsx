import React, { useState } from 'react';
import { Dashboard } from '../../components/Authenticated';
import ThemeContext from '../../context/ThemeContext';

const PortalPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Dashboard />
    </>
  );
};

export default PortalPage;