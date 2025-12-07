/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // iOS 风格设计 tokens
      colors: {
        // iOS 系统颜色
        ios: {
          // 系统蓝色
          blue: {
            DEFAULT: '#007AFF',
            light: '#5AC8FA',
            dark: '#0A84FF'
          },
          // 系统绿色
          green: {
            DEFAULT: '#34C759',
            light: '#30D158',
            dark: '#32D74B'
          },
          // 系统红色
          red: {
            DEFAULT: '#FF3B30',
            light: '#FF453A',
            dark: '#FF453A'
          },
          // 系统橙色
          orange: {
            DEFAULT: '#FF9500',
            light: '#FF9F0A',
            dark: '#FF9F0A'
          },
          // 系统黄色
          yellow: {
            DEFAULT: '#FFCC00',
            light: '#FFD60A',
            dark: '#FFD60A'
          },
          // 系统紫色
          purple: {
            DEFAULT: '#AF52DE',
            light: '#BF5AF2',
            dark: '#BF5AF2'
          },
          // 系统灰色
          gray: {
            50: '#F2F2F7',
            100: '#E5E5EA',
            200: '#D1D1D6',
            300: '#C7C7CC',
            400: '#AEAEB2',
            500: '#8E8E93',
            600: '#636366',
            700: '#48484A',
            800: '#3A3A3C',
            900: '#2C2C2E',
            950: '#1C1C1E'
          }
        },
        // 语义化颜色
        primary: {
          DEFAULT: '#007AFF',
          light: '#5AC8FA',
          dark: '#0A84FF'
        },
        background: {
          DEFAULT: '#FFFFFF',
          secondary: '#F2F2F7',
          tertiary: '#FFFFFF'
        },
        text: {
          primary: '#000000',
          secondary: '#3C3C43',
          tertiary: '#8E8E93',
          inverse: '#FFFFFF'
        }
      },
      // iOS 风格圆角
      borderRadius: {
        'ios': '10px',
        'ios-lg': '14px',
        'ios-xl': '20px',
        'ios-2xl': '28px'
      },
      // iOS 风格字体
      fontFamily: {
        'ios': [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          'system-ui',
          'sans-serif'
        ]
      },
      // iOS 风格阴影
      boxShadow: {
        'ios': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'ios-lg': '0 4px 16px rgba(0, 0, 0, 0.15)',
        'ios-xl': '0 8px 24px rgba(0, 0, 0, 0.2)'
      },
      // iOS 风格间距
      spacing: {
        'ios-xs': '4px',
        'ios-sm': '8px',
        'ios-md': '16px',
        'ios-lg': '24px',
        'ios-xl': '32px'
      }
    },
  },
  plugins: [],
}
