import React from 'react'
import { Button, Form } from 'antd'
import { Moment } from 'moment'

import { DateRangePicker } from '../forms'
import { formStyle } from '../forms/styles'

import { DownloadOptions } from '../../types'

const { Item } = Form

interface FrontPageFormProps {
  options: DownloadOptions,
  setOptions: (options: DownloadOptions) => void,
  handlePlot: () => void,
}

const FrontPageForm: React.FC<FrontPageFormProps> = ({options, setOptions, handlePlot}) => {
  const handleRangePickerChange = ([from, to]:Moment[]) => setOptions({ ...options, from, to })
  return (
    <Form style={formStyle} layout="inline">
      <Item name="time-interval">
        <DateRangePicker
          selectedDateRange={[options.from, options.to]}
          onSelectDateRange={handleRangePickerChange}
        />
      </Item>
      <Item>
        <Button
            type="primary"
            onClick={handlePlot}
        >
          Plot
        </Button>
      </Item>
    </Form>
  )
}

export default FrontPageForm
