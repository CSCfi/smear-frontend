import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Table } from 'antd'

import { downloadSelector } from '../../store/download'

interface DownloadTableProps {
  variables: any[],
  onDownload: (variableKey: any) => void 
}

const DownloadTable: React.FC<DownloadTableProps> = ({
  variables,
  onDownload
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const { filter, filterConditions } = useSelector(downloadSelector)

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
      render: (record: any) => <Button onClick={() => onDownload(record)}>Download</Button>
    }
  ]

  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: any) => setSelectedRowKeys(keys)
  }

  const tableData = variables.filter(variable => {
    if (filter === '' || filterConditions.length === 0) {
      return true
    } else if (filterConditions.includes('Variable')) {
      return variable.title.toLowerCase().includes(filter.toLowerCase())
    }

    return false
  }).map(variable => {
    return {
      key: variable.key,
      title: variable.title,
    }
  })
  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={tableData}
    />
  )
}

export default DownloadTable
