import React, { useEffect } from 'react'
import { Layout } from 'antd'

import { recordMetricsEvent } from '../../service/metrics'

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = "SmartSMEAR - Contact"
    recordMetricsEvent("CONTACT")
  }, [])

  return (
      <Layout className="AppPage">
        <Layout.Content className="AppContainer">
        <h1>Site support</h1>
          <p>
            For questions and issues regarding the functionality of the site, please contact{' '}
            <a href='mailto:servicedesk@csc.fi'>servicedesk@csc.fi</a>
          </p>
          <h1>Data support</h1>
          <p>
            For questions regarding the data, users are encouraged to contact the{' '}
            <a href='https://wiki.helsinki.fi/display/SMEAR/Data+contact+persons'
               target='_blank'
               rel='noopener noreferrer'>
              original data contributors
            </a> or <a href='mailto:atm-data@helsinki.fi'>atm-data@helsinki.fi</a>
            {' '} for questions or clarifications. More detailed information on the
            measurements is provided at{' '}
            <a href='https://wiki.helsinki.fi/display/SMEAR/The+SMEAR+Wikispace'
               target='_blank'
               rel='noopener noreferrer'>
              SMEAR wikispace
            </a>.
          </p>
        </Layout.Content>
      </Layout>
  )
}

export default ContactPage
