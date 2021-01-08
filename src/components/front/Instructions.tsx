import React from 'react'

const Instructions = () =>
  <>
    <h1 id='instructions'>Instructions</h1>
    <div>
      <p>
        The temporal resolution of the data is usually 1 min or 30 min. Many
        aerosol data, gas profiles, soil temperature and moisture, and some
        other variables are recorded with different time intervals, some of
        them at irregular intervals. The time stamps in the data are in local
        standard time (UTC+2) and indicate the beginning of the measurement or
        aggregation interval.
      </p>
      <p>
        The UI allows temporal aggregation at 30 min or 60 min intervals, API
        at any interval between 1 min and 60 min. Arithmetic mean is suitable
        aggregation method for most variables. Some variables (e.g.
        precipitation and runoff/drainage) are cumulative and must be summed to
        obtain correct aggregated values. Aggregation of wind direction must be
        done by vector mean (CIRCULAR). Selecting Interval = NONE or
        Aggregation = NONE yields the original data in the database.
      </p>
      <p>
        Most variables have processing level flags that indicate whether the
        data are automatically processed preliminary version or if they were
        checked by human expert and can be considered as final. Please note
        that the checking is not an absolute proof of high quality. Some
        variables have additional quality flags that describe the accuracy or
        representativeness of each observation.
      </p>
      <p>
        Data availability is calculated based on the time resolution of the
        corresponding data table. If the recording interval of a variable is
        longer, its availability may appear low even if the time series is
        continuous. Availability of quality-checked data is not calculated for
        variables without processing level information. In that case select
        processing level = Any when downloading data.
      </p>
    </div>
    <h1 id='known_issues'>Known Issues</h1>
    <div>
      <p>
        The aggregation does not produce data with evenly spaced timestamps
        when applied to intermittent measurements or data with irregular time
        intervals, for instance, tree gas exchange.
      </p>
      <p>
        Median and Circular aggregation result in data with timestamps offset
        by one row, time is ahead of data values by one interval and the last
        row of data is missing.
      </p>
    </div>
  </>

export default Instructions
