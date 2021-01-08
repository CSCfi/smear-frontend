import React from 'react'
import { useSelector } from 'react-redux'
import { message, Button, Form } from 'antd'
import moment, { Moment } from 'moment'

import { fetchingSelector } from '../../store/search'
import { DownloadOptions } from '../../types'

import { DateRangePicker } from '../forms'

const { Item } = Form

interface FrontPageFormProps {
  options: DownloadOptions,
  setOptions: (options: DownloadOptions) => void,
  handlePlot: () => void,
}

const FrontPageForm: React.FC<FrontPageFormProps> = ({
  options,
  setOptions,
  handlePlot
}) => {
  const fetching = useSelector(fetchingSelector)

  const handleRangePickerChange = ([from, to]:Moment[]) => {
    if (to.diff(from, 'days') > 15) {
      message.info('Please select a date interval no longer than 15 days')
      if (from === options.from) {
        setOptions({ ...options, from: moment(to).subtract(15, 'days'), to: to.endOf('day') })
      } else {
        setOptions({ ...options, from, to: moment(from).add(15, 'days').endOf('day') })
      }
    } else if (to.isAfter(moment().endOf('day'))) {
      message.info('Please do not select a date interval that is in the future')
    } else {
      setOptions({ ...options, from, to: to.endOf('day') })
    }
  }

  const { from, to } = options
  return (
    <Form className= 'smear-form' layout="inline">
      <Item
        name="time-interval"
      >
        <DateRangePicker
          selectedDateRange={[from, to]}
          onSelectDateRange={handleRangePickerChange}
        />
      </Item>
      <Item>
        <Button
            type="primary"
            onClick={handlePlot}
            disabled={fetching}
        >
          Plot
        </Button>
      </Item>
    </Form>
  )
}

export default FrontPageForm
