import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from 'antd'

import OpenStreetMap from '../OpenStreetMap'

const FrontPageSider = () =>
  <Layout.Sider breakpoint='xl' collapsedWidth={0} width={300}>
    <OpenStreetMap />
    <div>
      SmartSMEAR is data visualization and download tool for the database of
      continuous atmospheric, flux, soil, tree physiological and water
      quality measurements at SMEAR research stations of the University of
      Helsinki. Air mass back-trajectories are also provided for studying the
      connection between air mass movements and atmospheric observations at
      the stationary measurement sites. Detailed information on the
      measurements is provided at{' '}
      <a href='https://wiki.helsinki.fi/display/SMEAR/The+SMEAR+Wikispace'>
      SMEAR wikispace</a> and the Download page.
      Users are encouraged to contact the{' '}
      <a href='https://wiki.helsinki.fi/display/SMEAR/Data+contact+persons'>
      original data contributors</a> or{' '}
      <a href='mailto:atm-data@helsinki.fi'>atm-data@helsinki.fi</a> for
      questions or clarifications.
    </div>
    <div>
      Terms of use for the data and its usage can be found from the{' '}
      <Link to="/terms-of-use">terms of use page</Link>.
    </div>
  </Layout.Sider>

export default FrontPageSider
