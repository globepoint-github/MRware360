/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 서비스별 브랜드 컬러
        nursing: {
          DEFAULT: '#FF535D',
          hover: '#FF6B75',
          light: '#FFE5E7',
        },
        physio: {
          DEFAULT: '#1BC768',
          hover: '#1BB768',
          light: '#E6F9F0',
        },
        carehub: {
          DEFAULT: '#39D0FF',
          hover: '#39BFE7',
          light: '#E6F7FF',
        },
        // 주요 컬러
        primary: {
          DEFAULT: '#5D5DF9',
          hover: '#5D5DF0',
          light: '#E4E4F8',
          dark: '#4A4AE8',
        },
        secondary: {
          DEFAULT: '#1BC768',
          hover: '#1BB768',
        },
        accent: {
          DEFAULT: '#EF694C',
          hover: '#EB6040',
        },
        purple: {
          DEFAULT: '#d764ff',
          hover: '#e28cff',
        },
        cyan: {
          DEFAULT: '#20cbba',
          hover: '#39bfe7',
        },
        // 중성 컬러
        gray: {
          50: '#F8F8FF',
          100: '#F2F0F4',
          200: '#E4E4F8',
          300: '#EFEFEF',
          400: '#D9D9D9',
          500: '#999999',
          600: '#7C7C7C',
          700: '#2F2F2F',
          800: '#252525',
          900: '#1A1A1A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans KR', 'system-ui', 'sans-serif'],
        korean: ['Noto Sans KR', 'sans-serif'],
      },
      fontSize: {
        'display': ['63px', { lineHeight: '1.2', fontWeight: '800' }],
        'h1': ['34.2px', { lineHeight: '44.46px', fontWeight: '600' }],
        'h2': ['32px', { lineHeight: '46.34px', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '34.75px', fontWeight: '500' }],
        'body-lg': ['22px', { lineHeight: '36.86px', fontWeight: '500' }],
        'body': ['20px', { lineHeight: '30px', fontWeight: '400' }],
        'body-sm': ['18px', { lineHeight: '28.96px', fontWeight: '400' }],
        'caption': ['16px', { lineHeight: '23.17px', fontWeight: '400' }],
      },
      spacing: {
        'section': '160px',
        'section-sm': '80px',
      },
      borderRadius: {
        'card': '20px',
        'button': '100px',
        'badge': '100px',
      },
      boxShadow: {
        'card': '0 10px 15px rgba(28, 28, 28, 0.1)',
        'card-hover': '0 15px 25px rgba(28, 28, 28, 0.15)',
        'elevated': '0 4px 24px rgba(233, 233, 233, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
