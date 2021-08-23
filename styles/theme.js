import { extendTheme } from "@chakra-ui/react"

const components = { 
  Button: { 
    baseStyle: { _focus: { boxShadow: 'none' } }
  },
  IconButton: { 
    baseStyle: { _focus: { boxShadow: 'none' } }
  },
  Switch: {
    baseStyle: {
      track: { _focus: { boxShadow: 'none' } }
    }
  },
} 

const theme = extendTheme({ components })

export default theme
