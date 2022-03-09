import React from 'react';
import AdminAccountManagerNavbar from '../AdminAccountManagerNavbar';
import HistoryTable from './AdminAccountManagerHistoryTable';

const AdminAccountManagerHistory = () => {
  return (
    <>
      <AdminAccountManagerNavbar />
      <h1 className='text-center my-5'>History</h1>
      <HistoryTable />
    </>
  );
};

export default AdminAccountManagerHistory;