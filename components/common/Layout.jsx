import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { _theme } from '../../constants/theme'

export default function Layout({children}) {
  return (
    <SafeAreaView style={{
        flex:1,
        backgroundColor:_theme.white
    }}>
      {children}
    </SafeAreaView>
  )
}