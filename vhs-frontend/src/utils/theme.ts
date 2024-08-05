import {
   extendTheme,
   type ThemeConfig,
   type StyleFunctionProps,
} from '@chakra-ui/react'
import { type Styles } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
   useSystemColorMode: true,
   initialColorMode: 'system',
   cssVarPrefix: 'vhs',
}

const colors = {
   primaryDefault: {
      default: '#C2E0FC',
      _dark: '#013667',
   },
   primaryVariant: {
      default: '#7DC0FF',
      _dark: '#0073E0',
   },
   secondaryDefault: {
      default: '#A6B8C8',
      _dark: '#2D4962',
   },
   surfaceS0: {
      default: '#FFFFFF',
      _dark: '#A3C4E3',
   },
   surfaceS1: {
      default: '#CBDEEF',
      _dark: '#5286B4',
   },
   surfaceS2: {
      default: '#EAF0FF',
      _dark: '#195D9C',
   },
   onSurfaceNLV1: {
      default: '#000000',
      _dark: '#FFFFFF',
   },
   onSurfaceNLV2: {
      default: '#837D7D',
      _dark: '#EAEAEA',
   },
   special1: {
      default: '#74BCFF',
      _dark: '#74BCFF',
   },
   special2: {
      default: '#FF0000',
      _dark: '#FF0000',
   },
   special3: {
      default: '#0FB600',
      _dark: '#0FB600',
   },
   special4: {
      default: '#FFFFFF',
      _dark: '#FFFFFF',
   },
}

const semanticTokens = {
   colors: {
      primaryDefault: {
         default: '#C2E0FC',
         _dark: '#013667',
      },
      primaryVariant: {
         default: '#7DC0FF',
         _dark: '#0073E0',
      },
      secondaryDefault: {
         default: '#A6B8C8',
         _dark: '#2D4962',
      },
      surfaceS0: {
         default: '#FFFFFF',
         _dark: '#A3C4E3',
      },
      surfaceS1: {
         default: '#CBDEEF',
         _dark: '#5286B4',
      },
      surfaceS2: {
         default: '#EAF0FF',
         _dark: '#195D9C',
      },
      onSurfaceNLV1: {
         default: '#000000',
         _dark: '#FFFFFF',
      },
      onSurfaceNLV2: {
         default: '#837D7D',
         _dark: '#EAEAEA',
      },
      special1: {
         default: '#74BCFF',
         _dark: '#74BCFF',
      },
      special2: {
         default: '#FF0000',
         _dark: '#FF0000',
      },
      special3: {
         default: '#0FB600',
         _dark: '#0FB600',
      },
      special4: {
         default: '#FFFFFF',
         _dark: '#FFFFFF',
      },
   },
}

const fonts = {
   main: 'Roboto, sans-serif',
}

const components = {
   Link: {
      baseStyle: {
         textDecor: 'none',
         color: 'inherit',
         _hover: {
            textDecor: 'none',
         },
      },
   },
}

const styles: Styles = {
   global: (props: StyleFunctionProps) => ({
      '*': {
         boxSizing: 'border-box',
         padding: 0,
         margin: 0,
      },
      body: {
         maxWidth: '100vw',
         minH: '100vh',
         backgroundColor:
            props.colorMode === 'dark'
               ? colors.surfaceS2._dark
               : colors.surfaceS2.default,
         fontFamily: 'Roboto, sans-serif',
         fontWeight: 400,
         display: 'flex',
         flexDir: 'column',
      },
      main: {
         flex: 1,
      },
      html: {
         maxWidth: '100vw',
         overflowX: 'hidden',
         fontFamily: 'Roboto, sans-serif',
         fontWeight: 400,
      },
      a: {
         textDecor: 'none',
         color: 'inherit',
         _hover: {
            textDecor: 'none',
         },
      },
   }),
}

export const theme = extendTheme({
   semanticTokens,
   styles,
   config,
   fonts,
   components,
})
