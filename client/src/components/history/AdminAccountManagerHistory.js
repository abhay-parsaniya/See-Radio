import React from 'react';
import AdminAccountManagerNavbar from '../AdminAccountManagerNavbar';
import HistoryTable from './AdminAccountManagerHistoryTable';
import './AdminAccountManagerHistory.css';

const AdminAccountManagerHistory = () => {
  return (
    <>
      <AdminAccountManagerNavbar />
      <div className='history-admin'>
        <h1 className='text-center my-4 '>History</h1>
        <HistoryTable />
      </div>
    </>
  );
};

export default AdminAccountManagerHistory;