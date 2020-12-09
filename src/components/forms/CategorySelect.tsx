import React from 'react'
import { Select } from 'antd'

import { inputStyle } from './styles'

const { Option } = Select

interface CategorySelectProps {
  station: any,
  selectedCategory: any,
  onSelectCategory(event: any): void
}

const CategorySelect: React.FC<CategorySelectProps> = ({
  station,
  selectedCategory,
  onSelectCategory
}) => {
  const value = selectedCategory !== undefined ? selectedCategory.id : ""
  const categories = station !== undefined ? station.categories : []

  return (
    <>
    <div><b>Select variable category</b></div>
    <Select
      style={inputStyle}
      value={value}
      onChange={onSelectCategory}
    >
      {categories.map((category: any) =>
      <Option key={category.id} value={category.id}>{category.name}</Option>)}
    </Select>
    </>
  )
}

export default CategorySelect
