import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Table } from 'antd'

import { downloadSelector } from '../../store/download'
import { variablesSelector } from '../../store/variables'

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
  const variables = useSelector(variablesSelector)

  const columns = [
    {
      title: 'Variable',
      dataIndex: 'title'
    },
    {
      title: 'Description',
      dataIndex: 'description'
    },
    {
      title: 'Source',
      dataIndex: 'source'
    },
    {
      title: 'Availability %',
      dataIndex: 'availability'
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

  const tableData = selectedVariables.map(variable => {
    const variableData = variables
      .find(v => `${v.tableName}.${v.name}` === variable.key)
    if (variableData) {
      return {
        key: variable.key,
        title: variable.title,
        description: variableData.description,
        source: variableData.source,
        availability: variableData.coverage,
      }
    } else {
      return {
        key: variable.key,
        title: variable.title,
        description: '',
        source: '',
        availability: '',
      }
    }
  }).filter(variableData => {
    if (filter === '' || filterConditions.length === 0) {
      return true
    } else if (filterConditions.includes('Variable')) {
      return variableData.title.toLowerCase().includes(filter.toLowerCase())
    } else if (filterConditions.includes('Description')) {
      return variableData.description.toLowerCase().includes(filter.toLowerCase())
    } else if (filterConditions.includes('Source')) {
      return variableData.source.toLowerCase().includes(filter.toLowerCase())
    }

    return false
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
