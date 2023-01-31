import React from 'react'
import { Text } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { getTheme } from './library/theme'
const UIApp = () => {
    // this value should come from store.
    const themeName =  'lightTheme';
   // const themeName =  useSelector(getThemeName);
  return (
    <PaperProvider theme={getTheme(themeName)}>
    <Text>UI APP Rushikesh </Text>
    </PaperProvider>
  )
}

export default UIApp