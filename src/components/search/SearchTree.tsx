import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tooltip, Tree } from 'antd'
import 'antd/dist/antd.css'

import { STATION_NAMES_TO_TITLES } from '../../constants'
import { fetchVariableMetadata } from '../../service/variable'
import searchSlice from '../../store/search'
import { dataStructureSelector } from '../../store/treedata'
import { variablesSelector } from '../../store/variables'

const { setTablevariables } = searchSlice.actions

interface VariableTooltipProps {
  variableData: any|null
}

const VariableTooltip: React.FC<VariableTooltipProps> = ({ variableData }) => {
  if (!variableData) {
    return null
  }
  return (
    <table>
      <tbody>
        <tr>
          <td className="tooltip-data">TABLEVARIABLE</td>
          <td className="tooltip-data">{variableData.tableName}.{variableData.name}</td>
        </tr>
        <tr>
          <td className="tooltip-data">DESCRIPTION</td>
          <td className="tooltip-data">{variableData.description}</td>
        </tr>
        <tr>
          <td className="tooltip-data">UNIT</td>
          <td className="tooltip-data">{variableData.unit}</td>
        </tr>
        <tr>
          <td className="tooltip-data">SOURCE</td>
          <td className="tooltip-data">{variableData.source}</td>
        </tr>
        <tr>
          <td className="tooltip-data">PERIOD_START</td>
          <td className="tooltip-data">{variableData.periodStart || '-'}</td>
        </tr>
        <tr>
          <td className="tooltip-data">PERIOD_END</td>
          <td className="tooltip-data">{variableData.periodEnd || '-'}</td>
        </tr>
      </tbody>
    </table>
  )
}

const SearchTree = () => {
  const dispatch = useDispatch()
  const treeData = useSelector(dataStructureSelector)
  const variables = useSelector(variablesSelector)

  const onLoadData = (node: any) => new Promise<void>(resolve => {
    if (node.children === 0 || !node.children[0].isLeaf) {
      resolve()
      return
    }
    dispatch(fetchVariableMetadata(
      null,
      null,
      node.children.map((variableNode: any) => variableNode.key)
    ))
    resolve()
    return
  })

  const stationSort = (s1: any, s2: any) =>
    getStationTitle(s1.name).localeCompare(getStationTitle(s2.name))

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

  const getStationTitle = (stationName: string) => {
    const stationToTitle = STATION_NAMES_TO_TITLES
      .find(s => s.name === stationName)
    return stationToTitle ? stationToTitle.title : stationName
  }

  const getVariableData = (tablevariable: string) => {
    return variables.find((v: any) => v.tableName + '.' + v.name === tablevariable)
  }

  const renderNodeTitle = (nodeData) => {
    if (nodeData.isLeaf) {
      return (
        <Tooltip title={<VariableTooltip variableData={getVariableData(nodeData.key)} />} placement="bottomLeft">
          <span>{nodeData.title}</span>
        </Tooltip>
      )
    } else {
      return <span>{nodeData.title}</span>
    }
  }

  return (
    <Tree
      className="SearchTree"
      checkable
      onCheck={(checkedKeys: any, info: any) => dispatch(setTablevariables(checkedKeys))}
      loadData={onLoadData}
      titleRender={renderNodeTitle}
      treeData={treeData.slice().sort(stationSort).map(station => ({
        ...station,
        checkable: false,
        key: station.id,
        title: getStationTitle(station.name),
        children: station.categories.filter((category: any) => category.id !== 'Tree2').map(category => ({
          checkable: false,
          key: category.id,
          title: category.name,
          children: category.variables.slice().sort(variableSort).map(variable => ({
            isLeaf: true,
            key: variable.tablevariable,
            title: variable.title
          }))
        }))
      }))}
    />
  )
}

export default SearchTree
