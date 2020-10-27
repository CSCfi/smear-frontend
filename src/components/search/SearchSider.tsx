import React from 'react'
import { Layout, Tooltip } from 'antd'

import { VARIABLES_TOOLTIP_TEXT } from '../../constants'

import TreeMenu from './TreeMenu'

const { Sider } = Layout

interface SearchSiderProps {
  treeData: any,
  setTableVariables: any
}

const SearchSider: React.FC<SearchSiderProps> = ({
  treeData,
  setTableVariables
}) => {
  return (
    <Sider style={{ backgroundColor: 'white' }} breakpoint='md' collapsedWidth={0} width={340}>
      <Tooltip placement="rightBottom" title={VARIABLES_TOOLTIP_TEXT}>
        <span><b>Variables:</b></span>
      </Tooltip>
      <TreeMenu treeData={treeData} setTableVariables={setTableVariables} />
    </Sider>
  )
}

export default SearchSider
