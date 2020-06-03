export type TreeNode = {
  key: string
  title: string
  isVariable: boolean
  children?: TreeNode[]
}
