import React from 'react'
import { Radio } from 'antd'

import { STATION_NAMES_TO_TITLES } from '../../constants'

const { Group } = Radio

interface StationRadioProps {
  stations: any[],
  selectedStation: any,
  onSelectStation(event: any): void
}

const StationRadio: React.FC<StationRadioProps> = ({
  stations,
  selectedStation,
  onSelectStation
}) => {
  const radioStyle = {
    display: 'block'
  }
  const getStationTitle = (stationName: string) => {
    const stationToTitle = STATION_NAMES_TO_TITLES
      .find(s => s.name === stationName)
    return stationToTitle ? stationToTitle.title : stationName
  }

  const stationSort = (s1: any, s2: any) =>
    getStationTitle(s1.name).localeCompare(getStationTitle(s2.name))

  return (
    <>
    <div><b>Station</b></div>
    <Group onChange={onSelectStation} value={selectedStation}>
      {stations.slice().sort(stationSort).map(station =>
      <Radio
        style={radioStyle}
        key={station.id}
        value={station}>
      {getStationTitle(station.name)}
      </Radio>)}
    </Group>
    </>
  )
}

export default StationRadio
