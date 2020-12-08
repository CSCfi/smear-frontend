import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tooltip, Tree } from 'antd'
import 'antd/dist/antd.css'

import { STATION_NAMES_TO_TITLES } from '../../constants'
import { fetchVariableMetadata } from '../../service/variable'
import searchSlice from '../../store/search'
import { dataStructureSelector } from '../../store/treedata'
import { variablesSelector } from '../../store/variables'
import { TreeNode } from '../../types'

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

const TreeMenu = () => {
  const dispatch = useDispatch()
  const treeData = useSelector(dataStructureSelector)
  const variables = useSelector(variablesSelector)

  const [expandedKeys, setExpandedKeys] = useState([])
  const [checkedKeys, setCheckedKeys] = useState([])
  const [selectedKeys, setSelectedKeys] = useState([])
  const [autoExpandParent, setAutoExpandParent] = useState(true)

  const onExpand = (expandedKeys: any) => {
    setExpandedKeys(expandedKeys)
    setAutoExpandParent(false)
  }

  const onCheck = (checkedKeys: any, info: any) => {
    const tablevariables = info.checkedNodes
      .filter((node: TreeNode) => node.isLeaf)
      .map((node: TreeNode) => node.key)
    dispatch(setTablevariables(tablevariables))
    setCheckedKeys(checkedKeys)
  }

  const onSelect = (selectedKeys: any, info: any) => {
    setSelectedKeys(selectedKeys)
  }

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

  const getVariableData = (variable: any) => {
    return variables.find((v: any) => v.tableName + '.' + v.name === variable.tablevariable)
  }

  return (
    <Tree
      checkable
      onExpand={onExpand}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
      onCheck={onCheck}
      checkedKeys={checkedKeys}
      onSelect={onSelect}
      selectedKeys={selectedKeys}
      loadData={onLoadData}
    >
      {treeData.slice().sort(stationSort).map((station: any) => (
        <Tree.TreeNode
          key={station.id}
          checkable={false}
          title={getStationTitle(station.name)}
        >
          {station.categories.map((category: any) => (
            <Tree.TreeNode
              key={category.id}
              checkable={false}
              title={category.name}
            >
              {category.variables.slice().sort(variableSort).map((variable: any) => (
                  <Tree.TreeNode
                    key={variable.tablevariable}
                    checkable
                    isLeaf
                    title={
                      <Tooltip
                        title={<VariableTooltip variableData={getVariableData(variable)} />}
                        placement="bottomLeft"
                      >
                        <span>{variable.title}</span>
                      </Tooltip>
                    }
                  >
                  </Tree.TreeNode>
              ))}
            </Tree.TreeNode>
          ))}
        </Tree.TreeNode>
      ))}
    </Tree>
  )
}

export default TreeMenu
