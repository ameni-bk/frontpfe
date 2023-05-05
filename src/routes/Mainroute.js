import React, { useContext } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Sidebar } from '../components/index';
import { Dashboard, TicketDetails, Tickets, Agent, Client, Trashed, Self_tickets, Bills, Bhour, Contact, Addtickets, Addagent, Addclient, Profile, Contact1, Login } from '../containers';
import { MainContext } from '../hooks/context/MainContext';
import PrivateRoute from './PrivateRoute';


const Mainroute = () => {
  const { sidebarOpen } = useContext(MainContext);
  const location = useLocation();
  return (
    <div>
      {location.pathname === '/login' ? null : <Navbar />}

      <div className={`w-screen  flex flex-row ${location.pathname === '/login' ? '' : 'pt-14 '} `} >
        {location.pathname === '/login' ? null : <Sidebar />}


        <div className={`w-full  ${location.pathname === '/login' ? '' : `${sidebarOpen ? 'ml-56' : 'ml-20'}`}   `}>
          <Routes>
            <Route index element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } />
            <Route path='login' element={
              <Login />
            } />
            <Route path='profile' element={
              <PrivateRoute>
              <Profile />
              </PrivateRoute>
            } />
            <Route path='tickets' element={
              <PrivateRoute>
              <Tickets />
              </PrivateRoute>
            } />
            <Route path='TicketDetails' element={
              <PrivateRoute>
               <TicketDetails />
              </PrivateRoute>
              
            } />
            <Route path='ADDticket' element={
              <PrivateRoute>
                <Addtickets />
              </PrivateRoute>
              
            } />
            <Route path='self_tickets' element={
              <PrivateRoute>
               <Self_tickets /> 
              </PrivateRoute>
              
            } />
            <Route path='agent' element={
              <PrivateRoute data={["admin", "agent"]}>
              <Agent />
              </PrivateRoute>
            } />
            <Route path='ADDagent' element={
              <PrivateRoute>
               <Addagent />
              </PrivateRoute>
              
            } />
            <Route path='client' element={
              <PrivateRoute>
               <Client /> 
              </PrivateRoute>
              
            } />
            <Route path='ADDclient' element={
              <PrivateRoute>
                <Addclient />
              </PrivateRoute>
              
            } />
            <Route path='trashed' element={
              <PrivateRoute>
              <Trashed />
            </PrivateRoute>
              
            } />
            <Route path='bhour' element={
              <PrivateRoute>
               <Bhour />
            </PrivateRoute>
              
            } />
            <Route path='bills' element={
              <PrivateRoute>
              <Bills />
            </PrivateRoute>
              
            } />
            <Route path='contact' element={
              <Contact />
            } />
            <Route path='contact1' element={
              <PrivateRoute>
              <Contact1 />
            </PrivateRoute>
              
            } />
            <Route path='*' element={
              <h1>ERROR 404: Page Note Found</h1>
            } />
          </Routes>
        </div>
      </div>
    </div>
  )

}

export default Mainroute