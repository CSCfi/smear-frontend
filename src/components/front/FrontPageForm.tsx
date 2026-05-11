import React from 'react'
import { useSelector } from 'react-redux'
import { message, Button, Form } from 'antd'
import dayjs, { Dayjs } from 'dayjs'

import { ISO_8601_DATE_TIME } from '../../constants'
import { fetchingSelector } from '../../store/search'
import type { DownloadOptions } from '../../types'

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

  const handleRangePickerChange = (values: [Dayjs, Dayjs] | null) => {
    if (!values) return;
    const [from, to] = values;

    if (to.diff(from, 'days') > 15) {
      message.info('Please select a date interval no longer than 15 days')
      const currentOptionsFrom = dayjs(options.from, ISO_8601_DATE_TIME);

      if (from.isSame(currentOptionsFrom, 'day')) {
        setOptions({
          ...options,
          from: to.subtract(15, 'days').format(ISO_8601_DATE_TIME),
          to: to.endOf('day').format(ISO_8601_DATE_TIME)
        });
      } else {
        setOptions({
          ...options,
          from: from.format(ISO_8601_DATE_TIME),
          to: from.add(15, 'days').endOf('day').format(ISO_8601_DATE_TIME)
        });
      }
    } else if (to.isAfter(dayjs().endOf('day'))) {
      message.info('Please do not select a date interval that is in the future');
    } else {
      setOptions({
        ...options,
        from: from.format(ISO_8601_DATE_TIME),
        to: to.endOf('day').format(ISO_8601_DATE_TIME)
      })
    }
  }

  const { from, to } = options
  return (
    <Form className="AppForm" layout="vertical">
      <DateRangePicker
        selectedDateRange={[dayjs(from, ISO_8601_DATE_TIME), dayjs(to, ISO_8601_DATE_TIME)]}
        onSelectDateRange={handleRangePickerChange}
      />
      <Item>
        <Button className="AppButton" type="primary" onClick={handlePlot} disabled={fetching}>
          Plot
        </Button>
      </Item>
    </Form>
  )
}

export default FrontPageForm
