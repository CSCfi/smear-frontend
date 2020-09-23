export const API_URL = `${process.env.REACT_APP_API_URL}`
export const PATH_AGGREGATION = '/aggregation'
export const PATH_QUALITY = '/quality'
export const PATH_STRUCTURE = '/structure'
export const PATH_TIME_SERIES = '/search/timeseries/chart'
export const ISO_8601_DATE_TIME = 'YYYY-MM-DDTHH:mm:ss.SSS'
export const FRONT_PAGE_CHARTS = [
  {
    name: "CO₂ flux",
    tableVariable: "HYY_EDDY233.F_c",
    series: [
      {
        caption: "Hyytiälä",
        color: "red",
        tableVariable: "HYY_EDDY233.F_c",
      }
    ],
  },
  {
    name: "CO₂",
    tableVariable: "HYY_META.CO2168",
    series: [
      {
        caption: "Hyytiälä 16m",
        color: "red",
        tableVariable: "HYY_META.CO2168",
      }
    ],
  },
  {
    name: "Evapotranspiration",
    tableVariable: "HYY_EDDY233.E",
    series: [
      {
        caption: "Hyytiälä",
        color: "red",
        tableVariable: "HYY_EDDY233.E",
      }
    ],
  },
  {
    name: "Aerosol size Distribution",
    tableVariable: null,
  },
  {
    name: "Total aerosol concentration",
    tableVariable: "HYY_DMPS.tconc",
  },
  {
    name: "Ozone",
    tableVariable: "HYY_META.O3168",
    series: [
      {
        caption: "Hyytiälä",
        color: "red",
        tableVariable: "HYY_META.O3168",
      },
      {
        caption: "Värriö",
        color: "blue",
        tableVariable: "VAR_META.O3_1",
      }
    ],
  },
  {
    name: "SO₂ 15-16m",
    tableVariable: "HYY_META.SO2168",
    series: [
      {
        caption: "Hyytiälä",
        color: "red",
        tableVariable: "HYY_META.SO2168",
      },
      {
        caption: "Kumpula",
        color: "black",
        tableVariable: "KUM_META.SO_2",
      },
      {
        caption: "Värriö",
        color: "blue",
        tableVariable: "VAR_META.SO2_1",
      }
    ],
  },
  {
    name: "NO 15-16m",
    tableVariable: "HYY_META.NO168",
    series: [
      {
        caption: "Hyytiälä",
        color: "red",
        tableVariable: "HYY_META.NO168",
      },
      {
        caption: "Värriö",
        color: "blue",
        tableVariable: "VAR_META.NO_1",
      }
    ],
  },
  {
    name: "NOx 15-16m",
    tableVariable: "HYY_META.NOx168",
    series: [
      {
        caption: "Hyytiälä",
        color: "red",
        tableVariable: "HYY_META.NOx168",
      },
      {
        caption: "Värriö",
        color: "blue",
        tableVariable: "VAR_META.NOX_1",
      }
    ],
  },
  {
    name: "Global shortwave radiation",
    tableVariable: "HYY_META.Glob",
    series: [
      {
        caption: "Hyytiälä",
        color: "red",
        tableVariable: "HYY_META.Glob",
      },
      {
        caption: "Kumpula",
        color: "black",
        tableVariable: "KUM_META.glob",
      },
      {
        caption: "Värriö",
        color: "blue",
        tableVariable: "VAR_META.GLOB",
      }
    ],
  },
  {
    name: "Temperature 15-16m",
    tableVariable: "HYY_META.T672",
    series: [
      {
        caption: "Hyytiälä",
        color: "red",
        tableVariable: "HYY_META.T672",
      },
      {
        caption: "Kumpula",
        color: "black",
        tableVariable: "KUM_META.Tower_T_16m",
      },
      {
        caption: "Värriö",
        color: "blue",
        tableVariable: "VAR_META.TDRY0",
      }
    ],
  },
  {
    name: "Air pressure",
    tableVariable: "HYY_META.Pamb0",
    series: [
      {
        caption: "Hyytiälä",
        color: "red",
        tableVariable: "HYY_META.Pamb0",
      },
      {
        caption: "Kumpula",
        color: "black",
        tableVariable: "KUM_META.p",
      },
      {
        caption: "Värriö",
        color: "blue",
        tableVariable: "VAR_META.p",
      }
    ],
  },
  {
    name: "Windspeed 15-16m",
    tableVariable: "HYY_META.WSU168",
    series: [
      {
        caption: "Hyytiälä",
        color: "red",
        tableVariable: "HYY_META.WSU168",
      },
      {
        caption: "Kumpula",
        color: "black",
        tableVariable: "KUM_META.ws",
      },
      {
        caption: "Värriö",
        color: "blue",
        tableVariable: "VAR_META.WS0",
      }
    ],
  },
  {
    name: "Wind rose",
    tableVariable: null,
  },
  {
    name: "Relative humidity",
    tableVariable: "HYY_META.RHIRGA168",
    series: [
      {
        caption: "Hyytiälä",
        color: "red",
        tableVariable: "HYY_META.RHIRGA168",
      },
      {
        caption: "Kumpula",
        color: "black",
        tableVariable: "KUM_META.rh",
      },
      {
        caption: "Värriö",
        color: "blue",
        tableVariable: "VAR_META.HUM_RH",
      }
    ],
  },
  {
    name: "Soil temperature",
    tableVariable: "HYY_META.tsoil_A",
    series: [
      {
        caption: "Hyytiälä",
        color: "red",
        tableVariable: "HYY_META.tsoil_A",
      },
      {
        caption: "Värriö",
        color: "blue",
        tableVariable: "VAR_META.ST",
      }
    ],
  },
]
