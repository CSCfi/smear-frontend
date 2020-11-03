import React from 'react'
import { Layout } from 'antd'

const TermsOfUsePage: React.FC = () =>
  <Layout>
    <Layout.Content>
      <div>
        The data are licensed under{' '}
        <a href='http://creativecommons.org/licenses/by/4.0/'>
          Creative Commons 4.0 Attribution (CC BY)
        </a>{' '}
        license. For scientific purposes, data users are expected to follow the
        principles of fair use. Offer of co-authorship must be made through
        personal contact with the data providers whenever substantial use is
        made of the data. In all cases, an acknowledgement must be made to the
        data providers when these data are used within a publication.
      </div><br />
      <div>
        For the web interface cite: Junninen, H., Lauri, A., Keronen, P.,
        Aalto, P., Hiltunen, V., Hari, P., Kulmala, M. 2009. Smart-SMEAR:
        online data exploration and visualization tool for SMEAR stations.
        Boreal Environment Research 14, 447–457.
      </div><br />
      <div>
        All data is provided "as is" and any data is subject to update or
        revision. The responsibility of proper data interpretation is solely on
        the data user. Users are encouraged to contact the{' '}
        <a href='https://wiki.helsinki.fi/display/SMEAR/Data+contact+persons'>
          original data contributors
        </a> or{' '}
        <a href='mailto:atm-data@helsinki.fi'>atm-data@helsinki.fi</a>{' '}
        for questions or clarifications.
      </div>
    </Layout.Content>
  </Layout>

export default TermsOfUsePage
