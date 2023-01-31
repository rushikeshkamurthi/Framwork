import React from 'react'
import { Text } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { translate } from './library/src/multilanguage'
import { getTheme }  from '././library/src/theme/index'
const UIApp = () => {
    // this value should come from store.
    const themeName =  'lightTheme';
   // const themeName =  useSelector(getThemeName);
  return (
    <PaperProvider theme={getTheme(themeName)}>
    <Text>{translate('hi')}'</Text>
    </PaperProvider>
  )
}

export default UIApp