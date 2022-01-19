import React from 'react'
import { Col, Layout, Row } from 'antd'

import './AppFooter.css'

const AppFooter = () =>
  <Layout.Footer className="AppFooter">
    <Row>
      <Col md={24}>
        <span>Fairdata</span>
        <p>
          The Fairdata services are offered by the <strong>Ministry of Education and Culture</strong> and produced{' '}
          by <strong>CSC – IT Center for Science Ltd.</strong>
        </p>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={6}>
        <span>Information</span>
        <p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.fairdata.fi/en/terms-and-policies/"
          >Terms and Policies</a>
        </p>
        <p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.fairdata.fi/en/contracts-and-privacy/"
          >Contracts and Privacy</a>
        </p>
      </Col>
      <Col xs={12} md={6}>
        <span>Accessibility</span>
        <p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.fairdata.fi/en/accessibility"
          >Accessibility statement</a>
        </p>
      </Col>
      <Col xs={12} md={6}>
        <span>Contact</span>
        <p>
          <a href="mailto:servicedesk@csc.fi">servicedesk@csc.fi</a>
        </p>
      </Col>
      <Col xs={12} md={6}>
        <span>Follow</span>
        <p>
          <a
            href="https://twitter.com/Fairdata_fi"
            rel="noopener noreferrer"
            target="_blank"
          >Twitter</a>
        </p>
        <p>
          <a rel="noopener noreferrer" target="_blank" href="https://www.fairdata.fi/en/news/">What's new</a>
        </p>
      </Col>
    </Row>
  </Layout.Footer>

export default AppFooter
