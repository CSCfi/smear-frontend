import React from 'react'
import { Radio } from 'antd'

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
  return (
    <>
    <div><b>Station</b></div>
    <Group onChange={onSelectStation} value={selectedStation}>
      {stations.map(station =>
      <Radio
        style={radioStyle}
        key={station.key}
        value={station}>
      {station.title}
      </Radio>)}
    </Group>
    </>
  )
}

export default StationRadio
