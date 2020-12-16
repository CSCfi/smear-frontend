import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from 'antd'

const About = () =>
  <>
    <h1>About SmartSMEAR</h1>
    <div>
      SmartSMEAR is a data visualization and download tool for the database of
      continuous atmospheric, flux, soil, tree physiological and water quality
      measurements at <a href='https://www.atm.helsinki.fi/SMEAR/'>SMEAR</a>
      {' '}research stations of the University of Helsinki and the University
      of Eastern Finland. Data with basic metadata can be visualized and
      downloaded using Search and Download pages. Application programming
      interface (API) provides access to additional variables and more complete
      metadata than the graphical user interface (UI).
    </div>
  </>

export default About
