import { Moment } from 'moment'

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

export type DownloadOptions = {
  from: string,
  to: string,
  quality: string,
  aggregation: string,
  averaging: number,
}
