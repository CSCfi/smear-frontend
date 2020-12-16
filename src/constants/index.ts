export const API_URL = `${process.env.REACT_APP_API_URL}`
export const PATH_AGGREGATION = '/aggregation'
export const PATH_QUALITY = '/quality'
export const PATH_STRUCTURE = '/structure'
export const PATH_TIME_SERIES = '/search/timeseries'
export const PATH_VARIABLE = API_URL + '/search/variable'
export const PATH_VARIABLE_CSV = '/search/variable/csv'
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

export const STATIONS = [
  {
    name: 'erottaja',
    text: 'Erottaja; east=24.9454; north=60.1652; elevation=23',
    coordinates: [24.9454, 60.1652],
    iconSrc: 'marker-black.png'
  },
  {
    name: 'hyytiala',
    text: 'Hyytiälä; east=24.294795; north=61.847463; elevation=179',
    coordinates: [24.294795, 61.847463],
    iconSrc: 'marker-black.png'
  },
  {
    name: 'kuivajarvi',
    text: 'Kuivajärvi; east=24.282; north=61.846; elevation=?',
    coordinates: [24.282, 61.846],
    iconSrc: 'marker-black.png'
  },
  {
    name: 'kumpula',
    text: 'Kumpula; east=24.961227; north=60.202887; elevation=45',
    coordinates: [24.961227, 60.202887],
    iconSrc: 'marker-black.png'
  },
  {
    name: 'pallas',
    text: 'Pallas; east=24.11233; north=67.96715; elevation=566',
    coordinates: [24.11233, 67.96715],
    iconSrc: 'marker-black.png'
  },
  {
    name: 'puijo',
    text: 'Puijo; east=27.65; north=62.9; elevation=306',
    coordinates: [27.65, 62.9],
    iconSrc: 'marker-black.png'
  },
  {
    name: 'siikaneva1',
    text: 'Siikaneva 1; east=24.192794; north=61.832702; elevation=162',
    coordinates: [24.192794, 61.832702],
    iconSrc: 'marker-black.png'
  },
  {
    name: 'siikaneva2',
    text: 'Siikaneva 2; east=24.169752; north=61.837286; elevation=162',
    coordinates: [24.169752, 61.837286],
    iconSrc: 'marker-black.png'
  },
  {
    name: 'torni',
    text: 'Torni; east=24.9387; north=60.1678; elevation=15',
    coordinates: [24.9387, 60.1678],
    iconSrc: 'marker-black.png'
  },
  {
    name: 'varrio',
    text: 'Värriö; east=29.610137; north=67.755044; elevation=390"',
    coordinates: [29.610137, 67.755044],
    iconSrc: 'marker-black.png'
  }
]
export const STATION_NAMES_TO_TITLES = [
  {
    name: 'Erottaja',
    title: 'SMEAR III Helsinki Erottaja Fire Station'
  },
  {
    name: 'Haltiala',
    title: 'SMEAR Agri Helsinki Haltiala'
  },
  {
    name: 'Hyytiälä',
    title: 'SMEAR II Hyytiälä forest'
  },
  {
    name: 'Kuivajärvi',
    title: 'SMEAR II Lake Kuivajärvi'
  },
  {
    name: 'Kumpula',
    title: 'SMEAR III Helsinki Kumpula'
  },
  {
    name: 'Nuorttiaapa',
    title: 'SMEAR I Nuorttiaapa wetland'
  },
  {
    name: 'Puijo',
    title: 'SMEAR IV Puijo tower'
  },
  {
    name: 'Siikaneva 1',
    title: 'SMEAR II Siikaneva 1 wetland'
  },
  {
    name: 'Siikaneva 2',
    title: 'SMEAR II Siikaneva 2 wetland'
  },
  {
    name: 'Torni',
    title: 'SMEAR III Helsinki Hotel Torni'
  },
  {
    name: 'Viikki',
    title: 'SMEAR Agri Helsinki Viikki'
  },
  {
    name: 'Värriö',
    title: 'SMEAR I Värriö forest'
  }
]

export const VARIABLES_TOOLTIP_TEXT = "You may choose stations and variables "
  + "on the left. Clicking a triangle next to station name opens a list of "
  + "variables divided into different categories. Some variables are measured "
  + "with several instruments, (2) after name indicates secondary "
  + "measurement. You may select multiple variables."
