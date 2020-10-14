import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tree } from 'antd'
import 'antd/dist/antd.css'
import { TreeNode } from '../../types'

interface TreeMenuProps {
  treeData: any,
  setTableVariables: any
}

const TreeMenu: React.FC<TreeMenuProps> = ({
  treeData,
  setTableVariables
}) => {
  const dispatch = useDispatch()
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
    setTableVariables(tablevariables)
    setCheckedKeys(checkedKeys)
  }

  const onSelect = (selectedKeys: any, info: any) => {
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
