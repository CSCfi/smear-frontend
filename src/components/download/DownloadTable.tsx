import React, { useState } from 'react'
import { Button, Table } from 'antd'

interface DownloadTableProps {
  variables: any[]
}

const columns = [
  {
    title: 'Variable',
    dataIndex: 'title'
  },
  {
    title: 'Description'
  },
  {
    title: 'Source'
  },
  {
    title: 'Availability %',
    render: () => <span>Not Calculated</span>
  },
  {
    title: 'Download',
    render: () => <Button>Download</Button>
  }
]

const DownloadTable: React.FC<DownloadTableProps> = ({ variables }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: any) => setSelectedRowKeys(keys)
  }
  return (
    <Table rowSelection={rowSelection} columns={columns} dataSource={variables} />
  )
}

export default DownloadTable
