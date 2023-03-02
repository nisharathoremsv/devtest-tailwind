const { height } = require('@mui/system');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./index.html"
  ],
  theme: {
    extend: { 
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
    },
    fontSize: {
      '28': ['28px !important'],
      'btnFontSize': ['13px !important'],
      'btnFormFontSize': ['10px !important'],
      '26px': ['26px !important'],
      '12px': ['12px !important'],
      '13px': ['13px !important'],
      '16px': ['16px !important' ],
      '18px': ['18px !important'],
      '14px': ['14px !important'],
    },
    backgroundColor: {
      "headerBtnColor": '#232E3E !important',
      'saveBtn': '#0C611A !important',
      'leaveBtn': '#FF3A3A !important',
      'white': "white !important",
      '#CAD7F5': "#CAD7F5 !important",
      "#DBDBDB": "#DBDBDB !important",
    },
    colors:{
      'btnTextColor': 'white !important',
      '#C7C7C7': '#C7C7C7 !impportant',
      '#232E3E': '#232E3E !important',
      '#F8991F': '#F8991F !important',
      'black': 'black !important',
      '#0C611A': "#0C611A !important",
    },
    width: {
      'btnWidth': '152px !important',
      '107': '107px !important',
      '99px': '99px !important',
      '35px': '35px !important',
      '95px': '95 !important',
    },
    height: {
      '107': '107px !important',
      '30px': '30px !important',
      '35px': '35px !important',
    },
    borderRadius: {
      'none': '0px !important',
      '40px': "40px !important",
    },
    margin: {
      auto: "auto !important"
    }
    
  }
},
  plugins: [],
}
