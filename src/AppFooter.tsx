import React from 'react'
import { Col, Layout, Row } from 'antd'

import './AppFooter.css'
import imgEOSC from './static/images/Supporting_EOSC.jpg'

const AppFooter = () =>
  <Layout.Footer className="fd-footer">
    <Row>
      <Col className="FairInfo" lg={8} md={24} xs={24}>
        <a href="https://www.fairdata.fi/en/fairdata-services/">
            <img className="Banner" src={imgEOSC} alt="Supporting EOSC" />
        </a>
        <span>Fairdata</span>
        <p>
          The Fairdata services are offered by the <strong>Ministry of Education and Culture</strong> and produced{' '}
          by <strong>CSC – IT Center for Science Ltd.</strong>
        </p>
      </Col>
      <Col lg={4} md={6} xs={12} >
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
      <Col lg={4} md={6} xs={12}>
        <span>Accessibility</span>
        <p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.fairdata.fi/en/accessibility"
          >Accessibility statement</a>
        </p>
      </Col>
      <Col lg={4} md={6} xs={12}>
        <span>Contact</span>
        <p>
          <a href="mailto:servicedesk@csc.fi">servicedesk@csc.fi</a>
        </p>
      </Col>
      <Col lg={4} md={6} xs={12}>
        <span>Follow</span>
        <a
                href="https://bsky.app/profile/fairdata.fi"
                rel="noreferrer noopener"
                target="_blank"
                title="Follow us on Bluesky"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 568 501"
                  width="20px"
                >
                  <path
                    fill="#1185FE"
                    d="M123.121 33.664C188.241 82.553 258.281 181.68 284 234.873c25.719-53.192 95.759-152.32
                    160.879-201.21C491.866-1.611 568-28.906 568 57.947c0 17.346-9.945 145.713-15.778 166.555-20.275
                    72.453-94.155 90.933-159.875 79.748C507.222 323.8 536.444 388.56 473.333 453.32c-119.86
                    122.992-172.272-30.859-185.702-70.281-2.462-7.227-3.614-10.608-3.631-7.733-.017-2.875-1.169.506-3.631
                    7.733-13.43 39.422-65.842 193.273-185.702 70.281-63.111-64.76-33.89-129.52 80.986-149.071-65.72
                    11.185-139.6-7.295-159.875-79.748C9.945 203.659 0 75.291 0 57.946 0-28.906 76.135-1.612 123.121 33.664Z"
                  />
                </svg>
                @fairdata.fi
              </a>
        <p>
          <a rel="noopener noreferrer" target="_blank" href="https://www.fairdata.fi/en/news/">What's new</a>
        </p>
      </Col>
    </Row>
  </Layout.Footer>

export default AppFooter
