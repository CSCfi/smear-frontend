import React from 'react'
import { Form, Select } from 'antd'

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
    <Form.Item label="Select variable category" >
      <Select
        value={value}
        onChange={onSelectCategory}
      >
        {categories.map((category: any) =>
        <Option key={category.id} value={category.id}>{category.name}</Option>)}
      </Select>
    </Form.Item>
  )
}

export default CategorySelect
