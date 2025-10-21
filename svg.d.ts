declare module '*.svg' {
  import React from 'react'
  import { SvgProps } from 'react-native-svg'
  
  // Para React Native
  const content: React.FC<SvgProps>
  export default content
  
  // Para Web (Storybook)
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
}

