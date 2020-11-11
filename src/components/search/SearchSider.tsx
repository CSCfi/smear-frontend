import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Layout, Tooltip } from 'antd'

import { VARIABLES_TOOLTIP_TEXT } from '../../constants'
import searchSlice from '../../store/search'
import { treeDataSelector } from '../../store/treedata'

import TreeMenu from './TreeMenu'

const { Sider } = Layout

const { setTablevariables } = searchSlice.actions

const SearchSider = () => {
  const dispatch = useDispatch()
  const treeData = useSelector(treeDataSelector)

  const setTableVariables = (tablevariables: any) => dispatch(setTablevariables(tablevariables))

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
