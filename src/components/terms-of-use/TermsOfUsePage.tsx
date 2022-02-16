import React, { useEffect } from 'react'
import { Layout } from 'antd'

import { recordMetricsEvent } from '../../service/metrics'

const TermsOfUsePage: React.FC = () => {
  useEffect(() => {
    document.title = "SmartSMEAR - Terms Of Use"
    recordMetricsEvent("TERMS-OF-USE")
  }, [])

  return (
    <Layout className="AppPage">
      <Layout.Content className="AppContainer">
        <p>
          The data are licensed under{' '}
          <a href='http://creativecommons.org/licenses/by/4.0/'>
            Creative Commons 4.0 Attribution (CC BY)
          </a>{' '}
          license. For scientific purposes, data users are expected to follow the
          principles of fair use. Offer of co-authorship must be made through
          personal contact with the data providers whenever the data are
          essential to the work, or an important result or conclusion depends on
          these data. In all cases, an acknowledgement must be made to the data
          providers when these data are used within a publication.
        </p>
        <p>
          Citable datasets with persistent identifiers (URN, DOI) are
          periodically produced from final quality-checked data. Those data are
          accessible via the Finnish metadata catalogue{' '}
          <a href='https://etsin.fairdata.fi/datasets/SmartSMEAR'>Etsin</a>.
        </p>
        <p>
          All data is provided "as is" and any data is subject to update or
          revision. The responsibility of proper data interpretation is solely on
          the data user. Users are encouraged to contact the {' '}
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
  )
}

export default TermsOfUsePage
