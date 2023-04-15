import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar } from '../components/index';
import { Dashboard, TicketDetails, Tickets , Agent , Client , Trashed , Self_tickets , Bills , Bhour ,Contact, Addtickets ,Addagent,Addclient} from '../containers';
import { MainContext } from '../hooks/context/MainContext';



const Mainroute = () => {
  const { sidebarOpen } = useContext(MainContext);
  return (
    <div>
      <Navbar />
      <div className="w-screen pt-14  flex flex-row" >

        <Sidebar />
        <div className={`w-full ${sidebarOpen ? 'ml-56' : 'ml-20'} `}>
          <Routes>
            <Route index element={
              <Dashboard />
            } />
            <Route path='tickets' element={
              <Tickets />
            } />
            <Route path='TicketDetails' element={
              <TicketDetails />
            } />
            <Route path='ADDticket' element={
              <Addtickets />
            } />
            <Route path='self_tickets' element={
              <Self_tickets />
            } />
            <Route path='agent' element={
              <Agent />
            } />
            <Route path='ADDagent' element={
              <Addagent />
            } />
            <Route path='client' element={
              <Client />
            } />
            <Route path='ADDclient' element={
              <Addclient />
            } />
            <Route path='trashed' element={
              <Trashed />
            } />
            <Route path='bhour' element={
              <Bhour />
            } />
            <Route path='bills' element={
              <Bills />
            } />
            <Route path='contact' element={
              <Contact />
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