const { ARTICLEWIDTH, FIGUREWIDTH } = require('./src/util/constants')

/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      neutral: {
        50: '#f1f1f2',
        100: '#e1e1e3',
        200: '#d6d6da',
        300: '#b1b1b9',
        400: '#93939f',
        500: '#787887',
        600: '#62626a',
        700: '#4b4b4e',
        800: '#383838',
        900: '#202020'
      },
      red: {
        50: '#f9f1f0',
        100: '#f1dddc',
        200: '#ecc3c0',
        300: '#e9928c',
        400: '#e37169',
        500: '#d8352a',
        600: '#b81f14',
        700: '#990a00',
        800: '#660700',
        900: '#3d0400'
      },
      indigo: {
        50: '#f1f2f8',
        100: '#e0e2f0',
        200: '#bcc0e1',
        300: '#8f9bd6',
        400: '#6d76c5',
        500: '#505aaf',
        600: '#29339b',
        700: '#202879',
        800: '#07125b',
        900: '#0b1132'
      },
      blue: {
        50: '#e0f1f5',
        100: '#d7eef4',
        200: '#aedeea',
        300: '#87cdde',
        400: '#5ebed4',
        500: '#33a8cc',
        600: '#148cb8',
        700: '#085d91',
        800: '#003562',
        900: '#002447'
      },
      green: {
        50: '#e7fef8',
        100: '#cefdef',
        200: '#a3f5db',
        300: '#8ce4c8',
        400: '#66ccaa',
        500: '#40bf95',
        600: '#29a37a',
        700: '#1f7a5c',
        800: '#0a5c41',
        900: '#052e20'
      },
      yellow: {
        50: '#fffae5',
        100: '#fff5cc',
        200: '#ffeda3',
        300: '#ffdb75',
        400: '#ffc338',
        500: '#feaa01',
        600: '#cc7a00',
        700: '#995c00',
        800: '#663d00',
        900: '#331f00'
      },
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      current: 'currentcolor'
    },
    fontFamily: {
      base: '"Montserrat", "Helvetica Neue", "Helvetica", sans-serif',
      body: '"Libre Baskerville", serif',
      mono: 'ui-monospace, "Courier New", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;'
    },
    extend: {
      spacing: {
        'article-width-half': `calc(${ARTICLEWIDTH.maxWidth / 2}px)`
      },
      margin: {
        'article-float-margin': `max(20px, calc((100% - ${ARTICLEWIDTH.maxWidth}px) / 2))`
      },
      height: {
        screen: ['100vh', '100lvh']
      },
      minHeight: {
        screen: ['100vh', '100lvh']
      },
      width: {
        'image-width-md': FIGUREWIDTH.widthCalc,
        'image-width': FIGUREWIDTH.base
      },
      typography: ({ theme }) => ({
        light: {
          css: {
            // Base styles
            position: 'relative',
            maxWidth: 'none',
            fontFamily: theme('fontFamily.body'),
            minHeight: '100vh',
            backgroundColor: theme('colors.neutral[50]'),
            textWrap: 'pretty',

            '& > *:not(.not-prose):not(hr):not(figure)': {
              marginInline: 'auto !important',
              width: ARTICLEWIDTH.widthCalc
            },

            // Figure and Figcaption styles
            figure: {
              width: FIGUREWIDTH.base,
              marginInline: 'auto',
              '@screen md': {
                width: FIGUREWIDTH.widthCalc
              }
            },
            'figure img': {
              width: '100%',
              height: 'auto',
              objectFit: 'cover'
            },
            figcaption: {
              opacity: 0.9,
              fontFamily: theme('fontFamily.base'),
              width: ARTICLEWIDTH.widthCalc,
              marginInline: 'auto',
              '@screen md': {
                marginInline: 0
              }
            },

            // Heading styles
            h2: {
              clear: 'both',
              fontFamily: theme('fontFamily.base')
            },

            // Links
            a: {
              '&:hover': {
                color: theme('colors.neutral[600]')
              }
            },
            '--tw-prose-body': theme('colors.neutral[900]'),
            '--tw-prose-headings': theme('colors.neutral[900]'),
            '--tw-prose-lead': theme('colors.neutral[900]'),
            '--tw-prose-links': theme('colors.neutral[900]'),
            '--tw-prose-bold': theme('colors.neutral[900]'),
            '--tw-prose-counters': theme('colors.neutral[600]'),
            '--tw-prose-bullets': theme('colors.neutral[400]'),
            '--tw-prose-hr': theme('colors.neutral[900]'),
            '--tw-prose-quotes': theme('colors.neutral[900]'),
            '--tw-prose-quote-borders': theme('colors.neutral[400]'),
            '--tw-prose-captions': theme('colors.neutral[700]'),
            '--tw-prose-code': theme('colors.neutral[900]'),
            '--tw-prose-pre-code': theme('colors.neutral[100]'),
            '--tw-prose-pre-bg': theme('colors.neutral[900]'),
            '--tw-prose-th-borders': theme('colors.neutral[300]'),
            '--tw-prose-td-borders': theme('colors.neutral[200]')
          }
        },
        dark: {
          css: {
            // Base styles
            position: 'relative',
            maxWidth: 'none',
            fontFamily: theme('fontFamily.body'),
            minHeight: '100vh',
            backgroundColor: theme('colors.neutral[800]'),
            textWrap: 'pretty',

            '& > *:not(.not-prose):not(hr):not(figure)': {
              marginInline: 'auto !important',
              width: ARTICLEWIDTH.widthCalc
            },

            // Figure and Figcaption styles
            figure: {
              width: FIGUREWIDTH.base,
              marginInline: 'auto',
              '@screen md': {
                width: FIGUREWIDTH.widthCalc
              }
            },
            'figure img': {
              width: '100%',
              height: 'auto',
              objectFit: 'cover'
            },
            figcaption: {
              opacity: 0.7,
              fontFamily: theme('fontFamily.base'),
              width: ARTICLEWIDTH.widthCalc,
              marginInline: 'auto',
              '@screen md': {
                // marginInline: 0
              }
            },

            // Links
            a: {
              '&:hover': {
                color: theme('colors.neutral[100]')
              }
            },

            // Heading styles
            h2: {
              clear: 'both',
              fontFamily: theme('fontFamily.base')
            },

            '--tw-prose-body': theme('colors.neutral[50]'),
            '--tw-prose-headings': theme('colors.neutral[50]'),
            '--tw-prose-lead': theme('colors.neutral[50]'),
            '--tw-prose-links': theme('colors.neutral[50]'),
            '--tw-prose-bold': theme('colors.neutral[50]'),
            '--tw-prose-counters': theme('colors.neutral[50]'),
            '--tw-prose-bullets': theme('colors.neutral[600]'),
            '--tw-prose-hr': theme('colors.neutral[50]'),
            '--tw-prose-quotes': theme('colors.neutral[100]'),
            '--tw-prose-quote-borders': theme('colors.neutral[300]'),
            '--tw-prose-captions': theme('colors.neutral[50]'),
            '--tw-prose-code': theme('colors.indigo[300]'),
            '--tw-prose-pre-code': theme('colors.neutral[300]'),
            '--tw-prose-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-th-borders': theme('colors.neutral[600]'),
            '--tw-prose-td-borders': theme('colors.neutral[700]')
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
