import React from 'react';
import { Table, Button, Tag, Avatar, Space } from 'antd';
import {
  SafetyCertificateOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined
} from '@ant-design/icons';
import './StaffTable.css';

const StaffTable = () => {
  const columns = [
    {
      title: 'S.NO',
      dataIndex: 'sno',
      key: 'sno',
      width: '8%',
    },
    {
      title: 'USER',
      dataIndex: 'user',
      key: 'user',
      render: (text, record) => (
        <div className="user-column">
          <Avatar 
            style={{ backgroundColor: '#d1fae5', color: '#059669', marginRight: '12px', fontWeight: 600 }}
            size="large"
          >
            {record.avatarInitials}
          </Avatar>
          <div className="user-details">
            <span className="user-name">{record.name}</span>
            <span className="user-email">{record.email}</span>
          </div>
        </div>
      ),
    },
    {
      title: 'PASSWORD',
      dataIndex: 'password',
      key: 'password',
      align: 'center',
      render: () => (
        <div className="password-column">
          <span className="password-dots">••••••••</span>
          <EyeOutlined style={{ color: '#8c8c8c' }} />
        </div>
      )
    },
    {
      title: 'ROLE',
      dataIndex: 'role',
      key: 'role',
      align: 'center',
      className: 'role-col',
      render: (role) => (
        <Tag style={{ 
          borderRadius: '12px', 
          padding: '2px 14px', 
          fontWeight: 700,
          color: '#059669',
          backgroundColor: '#d1fae5',
          border: 'none'
        }}>
          {role}
        </Tag>
      )
    },
    {
      title: 'ACTIONS',
      key: 'actions',
      align: 'center',
      className: 'actions-col',
      render: () => (
        <Space size="middle" className="actions-space">
          <Button type="text" className="action-btn view-btn" icon={<SafetyCertificateOutlined />}>
            View
          </Button>
          <Button type="text" className="action-btn update-btn" icon={<EditOutlined />}>
            Update Access
          </Button>
          <Button type="text" className="action-btn edit-btn" icon={<EditOutlined />}>
            Edit
          </Button>
          <Button type="text" className="action-btn delete-btn" icon={<DeleteOutlined />}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      sno: '1',
      name: 'Saira Sardar',
      email: 'admin@cbglogisticsindia.com',
      avatarInitials: 'A',
      role: 'Staff',
    },
    {
      key: '2',
      sno: '2',
      name: 'Deepa',
      email: 'import@cbglogisticsindia.com',
      avatarInitials: 'I',
      role: 'Staff',
    },
  ];

  return (
    <div className="table-container">
      <Table 
        columns={columns} 
        dataSource={data} 
        pagination={{ 
          total: 2, 
          showTotal: (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
          defaultPageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: ['10', '20', '50']
        }}
        bordered={false}
        rowClassName="table-row"
      />
    </div>
  );
};

export default StaffTable;
