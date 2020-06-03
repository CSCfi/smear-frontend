export type TreeNode = {
  key: string
  title: string
  isVariable: boolean
  children?: TreeNode[]
}

export type DataPoint = {
  [key: string]: number | string
}

export type TimeSeries = {
  columns: string[]
  data: DataPoint[]
}
