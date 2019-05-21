import * as React from 'react';
import { View, Text } from 'react-native';

interface HomeScreenProps {
}

export default class HomeScreen extends React.Component<HomeScreenProps, any> {
  constructor(props: HomeScreenProps) {
    super(props);
  }

  public render() {
    return (
      <View>
         <Text>HomeScreen</Text>
      </View>
    );
  }
}
