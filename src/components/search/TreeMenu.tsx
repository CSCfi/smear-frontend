import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Tree } from 'antd'
import 'antd/dist/antd.css'
import { Station, Category, Variable, menuItemsSelector } from '../../store/menuitems'

type TreeNode = {
  key: string
  title: string
  isVariable: boolean
  children?: TreeNode[]
}

const variablesToTreeData = (variables: Variable[]): TreeNode[] =>
  variables.map((variable) => {
    return {
      key: variable.tablevariable,
      title: variable.title,
      isVariable: true,
    }
  })

const categoriesToTreeData = (categories: Category[]): TreeNode[] =>
  categories.map((category) => {
    return {
      key: category.id,
      title: category.name,
      children: variablesToTreeData(category.variables),
      isVariable: false,
    }
  })

const stationsToTreeData = (stations: Station[]): TreeNode[] =>
  stations.map((station) => {
    return {
      key: String(station.id),
      title: station.name,
      children: categoriesToTreeData(station.categories),
      isVariable: false,
    }
  })

const TreeMenu = () => {
  const menuItems = useSelector(menuItemsSelector)
  const treeData = stationsToTreeData(menuItems)
  const [expandedKeys, setExpandedKeys] = useState([])
  const [checkedKeys, setCheckedKeys] = useState([])
  const [selectedKeys, setSelectedKeys] = useState([])
  const [autoExpandParent, setAutoExpandParent] = useState(true)

  const onExpand = (expandedKeys: any) => {
    console.log('onExpand', expandedKeys)
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    setExpandedKeys(expandedKeys)
    setAutoExpandParent(false)
  }

  const onCheck = (checkedKeys: any, info: any) => {
    const tablevariables = info.checkedNodes
      .filter((node: TreeNode) => node.isVariable)
      .map((node: TreeNode) => node.key)
    console.log('tablevariables', tablevariables)
    setCheckedKeys(checkedKeys)
  }

  const onSelect = (selectedKeys: any, info: any) => {
    console.log('onSelect', info)
    setSelectedKeys(selectedKeys)
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
      treeData={treeData}
    />
  )
}

export default TreeMenu
