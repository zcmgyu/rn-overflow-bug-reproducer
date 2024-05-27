/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TextStyle,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={$containerStyle}>
        <FlatList
          style={$flatListStyle}
          horizontal
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => (
            <View style={$itemStyle}>
              <Text style={$itemTextStyle}>{item.key}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const $containerStyle: ViewStyle = {
  padding: 20,
  backgroundColor: 'green',
};

const $itemStyle: ViewStyle = {
  padding: 20,
  backgroundColor: 'red',
  borderColor: 'red',
  marginRight: 10,
};

const $itemTextStyle: TextStyle = {
  fontSize: 18,
  fontWeight: '500',
  color: 'white',
};

const $flatListStyle: ViewStyle = {
  overflow: 'visible',
};

export default App;
