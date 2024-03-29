import React from 'react'
import { Layout, Tooltip } from 'antd'

import { VARIABLES_TOOLTIP_TEXT } from '../../constants'

import SearchTree from './SearchTree'

const { Sider } = Layout

const SearchSider = () => {
  return (
    <Sider className="AppSider" breakpoint='xl' defaultCollapsed={true} collapsedWidth={0} width={320}>
      <Tooltip placement="rightBottom" title={VARIABLES_TOOLTIP_TEXT}>
        <span><b>Variables:</b></span>
      </Tooltip>
      <SearchTree />
    </Sider>
  )
}

export default SearchSider
