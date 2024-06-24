import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
// import Dashboard from './scenes/dashboard';
// import Sidebar from './scenes/global/Sidebar';
// import Team from './scenes/team';
// import Invoices from './scenes/invoices';
// import Contacts from './scenes/contacts';
// import BarChart from './scenes/barChart';
// import Form from './scenes/form';
// import LineChart from './scenes/lineChart';
// import PieChart from './scenes/pieChart';
// import FAQ from './scenes/faq';
// import Geography from './scenes/geography';
// import { Calendar } from '.scenes/calendar';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <Sidebar />
          <main className='content'>
            <Topbar />
            {/* <Routes>
              <Route path='/dashboard' element={Dashboard} />
              <Route path='/team' element={Team} />
              <Route path='/contacts' element={Contacts} />
              <Route path='/Invoices' element={Invoices} />
              <Route path='/form' element={Form} />
              <Route path='/bar' element={BarChart} />
              <Route path='/line' element={LineChart} />
              <Route path='/pie' element={PieChart} />
              <Route path='/faq' element={FAQ} />
              <Route path='/geography' element={Geography} />
              <Route path='/calendar' element={Calendar} />
            </Routes> */}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
