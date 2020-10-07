import React from 'react'
import { Select } from 'antd'

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
  const categorySelectStyle = {
    minWidth: '200px'
  }

  const value = selectedCategory !== undefined ? selectedCategory.key : ""
  const categories = station !== undefined ? station.children : []

  return (
    <>
    <div><b>Select variable category</b></div>
    <Select
      style={categorySelectStyle}
      value={value}
      onChange={onSelectCategory}
    >
      {categories.map((category: any) =>
      <Option key={category.key} value={category.key}>{category.title}</Option>)}
    </Select>
    </>
  )
}

export default CategorySelect
