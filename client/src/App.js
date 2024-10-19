import React, { useEffect, useState } from 'react';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { Sidebar, Topbar } from './scenes/global';
import { Dashboard, Team, Contacts, Invoices, Form, FAQ, Geography, Calendar } from './scenes';
import { Bar, Line, Pie } from './scenes/graphs';
import useFetchUser from './hooks/useFetchUsers';
import { mockDataTeam as data } from './data/mockData';

function App() {
  const [theme, colorMode] = useMode();
  const { userData, loading, error } = useFetchUser();
  const [updatedUserData, setUpdatedUserData] = useState([]);

  /**
   * Remove when working w/ actual data.
   * Add access property to random generated user
   */
  useEffect(() => {
    if (userData?.length > 0) {
      const updateUser = userData?.map((user, index) => {
        const { state, city, postcode, street } = user.location;
        const newItem = {
          id: user.id.value,
          access: data[index + 1]?.access === undefined ? 'user' : data[index + 1]?.access,
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          phone: user.phone,
          profile_img: user.picture.thumbnail,
          dob: user.dob.date,
          state,
          age: user.dob.age,
          address: `${street.number} ${street.name}`,
          city,
          zip_code: postcode,
        };
        return newItem;
      });

      setUpdatedUserData(updateUser);
    }
  }, [userData]);

  console.log(userData);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <Sidebar />
          <main className='content'>
            <Topbar />
            <Routes>
              <Route
                path='/'
                element={<Dashboard userData={updatedUserData} loading={loading} error={error} />}
              />
              <Route
                path='/team'
                element={<Team userData={updatedUserData} loading={loading} error={error} />}
              />
              <Route
                path='/contacts'
                element={<Contacts userData={updatedUserData} loading={loading} error={error} />}
              />
              <Route path='/invoices' element={<Invoices />} />
              <Route path='/form' element={<Form />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/line' element={<Line />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/geography' element={<Geography />} />
              <Route path='/calendar' element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
