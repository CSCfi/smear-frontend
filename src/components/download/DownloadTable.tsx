import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Table } from 'antd'

import { availabilitySelector } from '../../store/availability'
import { downloadSelector } from '../../store/download'
import { variablesSelector } from '../../store/variables'

import { FilterInput } from '../forms'

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
  const { fetching, availability } = useSelector(availabilitySelector)

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

  const getAvailability = (variableKey : string) => {
    const { data } = availability
    let result = '-'
    data.forEach(results => {
      if (variableKey in results) {
        if (variableKey === 'HYY_TREE.cuv_no') {
          result = '100.0'
        } else if (results[variableKey] !== null && results[variableKey] > 0) {
          result = (results[variableKey] / 100.0).toFixed(1)
        }
      }
    })
    return result
  }

  const variableSort = (v1: any, v2: any) => {
    if (v1.sortOrder !== null && v2.sortOrder !== null) {
      return v1.sortOrder - v2.sortOrder
    } else if (v1.sortOrder !== null) {
      return -1
    } else if (v2.sortOrder !== null) {
      return 1
    } else {
      return v1.variableID - v2.variableID
    }
  }

  const tableData = selectedVariables.slice().sort(variableSort).map(variable => {
    const variableData = variables
      .find(v => `${v.tableName}.${v.name}` === variable.tablevariable)
    if (variableData) {
      return {
        key: variable.tablevariable,
        title: variable.title,
        description: variableData.description,
        source: variableData.source,
        availability: fetching ? 'fetching...' : getAvailability(variable.tablevariable)
      }
    } else {
      return {
        key: variable.tablevariable,
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
      <FilterInput />
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
