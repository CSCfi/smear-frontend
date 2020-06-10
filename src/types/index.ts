export type TreeNode = {
  key: string
  title: string
  isLeaf: boolean
  checkable: boolean
  children?: TreeNode[]
}

export type TimeSeries = {
  [key: string]: number[]
}
