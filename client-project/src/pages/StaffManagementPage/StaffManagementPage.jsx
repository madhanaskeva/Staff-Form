import React from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined, ReloadOutlined, PlusOutlined } from '@ant-design/icons';
import StaffTable from '../../components/StaffTable/StaffTable';
import './StaffManagementPage.css';

const StaffManagementPage = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="title-section">
          <h1 className="page-title">STAFF MANAGEMENT</h1>
          <span className="subtitle">2 users found</span>
        </div>
        <div className="action-section">
          <Input 
            className="search-input"
            placeholder="Search by email or role..." 
            prefix={<SearchOutlined style={{ color: '#d9d9d9' }} />} 
          />
          <Button className="refresh-btn" icon={<ReloadOutlined />}>
            Refresh
          </Button>
          <Button type="primary" className="new-user-btn" icon={<PlusOutlined />}>
            New User
          </Button>
        </div>
      </div>
      <div className="page-content">
        <StaffTable />
      </div>
    </div>
  );
};

export default StaffManagementPage;
