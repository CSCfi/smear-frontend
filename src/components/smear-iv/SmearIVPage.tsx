import React, { useEffect } from 'react'
import { Layout, List } from 'antd'

const SmearIVPage: React.FC = () => {
  useEffect(() => {
    document.title = "SmartSMEAR - SMEAR IV"
  }, [])

  return (
    <Layout>
      <Layout.Content>
        <h1>SMEAR IV Puijo</h1>
        <div>
          The Puijo measurement station in Kuopio joined the SMEAR network in
          2009 as the SMEAR IV station. At Puijo the idea is to study the
          interactions of aerosol particles and clouds, especially the activation
          of aerosol particles into cloud droplets. The instrumentation covers
          measurement of aerosol dynamics, cloud droplet properties, optical
          measurements, trace gases and meteorological parameters. The
          characteristic features at SMEAR IV are the elevated location in a
          semi-urban area and the site being frequently in cloud. The station is
          operated by the Atmospheric Measurements group at the Atmospheric
          Research Centre of Eastern Finland of Finnish Meteorological Institute
          (FMI) and the Aerosol Physics group at the Department of Applied
          Physics of the Kuopio campus of University of Eastern Finland (UEF).
        </div><br />
        <div>
          The measurement station is on the top of a Puijo Tower (62° 54' 34" N,
          27° 39' 19" E), which is a 75m high building on the Puijo hill
          (elevation 150m), approximately 2 km northwest of the city center of
          Kuopio. The measurements are carried out at the height of 306 m a.s.l.
          and 224 m above the surrounding lake level. More information about
          SMEAR IV Puijo station and measurements.
        </div><br />
        <div>
          Reference for SMEAR IV Puijo measurements: Leskinen, A., Portin, H.,
          Komppula, M., Miettinen, P., Arola, A., Lihavainen, H., Hatakka, J.,
          Laaksonen, A. & Lehtinen, K. E. J. 2009: Overview of the research
          activities and results at Puijo semi-urban measurement station. Boreal
          Env. Res. 14: 576–590.
        </div><br />
        <h2>Interstitial (int) and total (tot) inlets</h2>
        <div>
          Sample air for the instruments is drawn through two parallel sampling
          lines: interstitial (int) and total (tot) inlets:
        </div><br />
        <ul>
          <li>
            interstitial inlet (int) is equipped with an impactor with a 10-μm
            cut-off size followed by a cyclone with a 1.0-μm cut-off size (2.5
            μm before 20 November 2009)
          </li>
          <li>
            total air inlet (total) with heated sampling lines and snow-hood to
            dry the cloud droplets (cut-off size 40 μm when the wind speed is
            below 20 m/s)
          </li>
        </ul><br />
        <div>
          This two-inlet setup enables simultaneous interstitial and total air
          (interstitial + cloud drop residual) measurements when the tower is
          covered by clouds.
        </div><br />
        <h2>Data available from the SMEAR IV (tables):</h2>
        <div>
          PUI_cdp
        </div><br />
        <ul>
          <li>
            Cloud Droplet Probe (CDP) data
          </li>
        </ul><br />
        <div>
          PUI_dmps_int PUI_dmps_tot
        </div><br />
        <ul>
          <li>
            Particle sizer distributions measured with Differential Mobility
            Particle Sizer (DMPS)
          </li>
          <li>
            two different inlets: interstitial (_int) and total (_tot) inlet
          </li>
          <li>
            interstitial inlet remove cloud droplets (by impactor and cyclone)
            whereas total inlet contains both interstitial particles and cloud
            drop residuals
          </li>
        </ul><br />
        <div>
          PUI_dmps_sizeranges
        </div><br />
        <ul>
          <li>
            Particle diameters for DMPS diameter channels/bins (both int and tot)
          </li>
          <li>
            Size distributions have been measured using different diameters
            ranges at different periods:
            <ol>
              <li>
                from 10 to 500 nm, 30 channels, 2.6.2006 - 31.3.2007
              </li>
              <li>
                from 7 to 800 nm, 40 channels, 1.4.2007 - 31.1.2012
              </li>
              <li>
                from 3 to 800 nm, 40 channels, from 1.2.2012
              </li>
            </ol>
          </li>
          <li>
            “sizerange_id” in PUI_dmps_int/tot tables tells which size range
            should be used.
          </li>
        </ul><br />
        <div>
          PUI_maap_int PUI_maap_tot
        </div><br />
        <ul>
          <li>
            Multiangle Absorption Photometer (MAAP), a instrument that measures
            black carbon and aerosol light absorption properties).
          </li>
          <li>
            two different inlets: interstitial (_int) and total (_tot) inlet
          </li>
        </ul><br />
        <div>
          PUI_neph_int PUI_neph_tot
        </div><br />
        <ul>
          <li>
            nephelometer data, light-scattering coefficients of aerosol
          </li>
          <li>
            two different inlets: interstitial (_int) and total (_tot) inlet
          </li>
        </ul><br />
        <div>
          PUI_weather
        </div><br />
        <ul>
          <li>
            weather data (temperature, RH, wind speed and directions, etc.)
          </li>
        </ul><br />
      </Layout.Content>
    </Layout>
  )
}

export default SmearIVPage
