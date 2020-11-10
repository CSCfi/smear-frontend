import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Table } from 'antd'

import { downloadSelector } from '../../store/download'

interface DownloadTableProps {
  onDownload: (variableKey: any) => void,
  onDownloadSelected: (variableKeys: any[]) => void 
}

const DownloadTable: React.FC<DownloadTableProps> = ({
  onDownload,
  onDownloadSelected
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const { filter, filterConditions, selectedVariables } = useSelector(downloadSelector)

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

  const tableData = selectedVariables.filter(variable => {
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
    <div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={tableData}
      />
      {tableData.length > 0 && (
        <Button
          disabled={selectedRowKeys.length === 0}
          onClick={() => onDownloadSelected(selectedRowKeys)}
          style={{ float: 'right', marginRight: 8 }}
        >
          Download Selected
        </Button>
      )}
    </div>
  )
}

export default DownloadTable
