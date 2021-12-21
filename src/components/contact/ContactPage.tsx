import React, { useEffect } from 'react'
import { Layout } from 'antd'

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = "SmartSMEAR - Contact"
  }, [])

  return (
    <>
      <meta name="fdwe-service" content="SMARTSMEAR" />
      <meta name="fdwe-scope" content="CONTACT" />
      <Layout>
        <Layout.Content>
        <h1>Site support</h1>
          <p>

            For questions and issues regarding the functionality of the site, please contact <a href='mailto:servicedesk@csc.fi'>servicedesk@csc.fi</a>
          </p>
          <h1>Data support</h1>
          <p>

            For questions regarding the data, users are encouraged to contact the {' '}
            <a href='https://wiki.helsinki.fi/display/SMEAR/Data+contact+persons'>
              original data contributors
            </a> or <a href='mailto:atm-data@helsinki.fi'>atm-data@helsinki.fi</a>
            {' '} for questions or clarifications. More detailed information on the
            measurements is provided at{' '}
            <a href='https://wiki.helsinki.fi/display/SMEAR/The+SMEAR+Wikispace'>
              SMEAR wikispace
            </a>.
          </p>
        </Layout.Content>
      </Layout>
    </>
  )
}

export default ContactPage
