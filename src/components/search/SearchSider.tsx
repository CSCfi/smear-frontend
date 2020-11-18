import React from 'react'
import { Layout, Tooltip } from 'antd'

import { VARIABLES_TOOLTIP_TEXT } from '../../constants'

import TreeMenu from './TreeMenu'

const { Sider } = Layout

const SearchSider = () => {
  return (
    <Sider style={{ backgroundColor: 'white' }} breakpoint='md' collapsedWidth={0} width={340}>
      <Tooltip placement="rightBottom" title={VARIABLES_TOOLTIP_TEXT}>
        <span><b>Variables:</b></span>
      </Tooltip>
      <TreeMenu />
    </Sider>
  )
}

export default SearchSider
