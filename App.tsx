import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  let decrease = () => {
    setCount(PrevCount => PrevCount - 1);
    setCount(PrevCount => PrevCount - 1);
  }

  return (
    <View style={styles.container}>
      <Text>You clicked {count} times</Text>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => setCount(count + 1)}
          title="Click me!"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={decrease}
          title="Nooo!"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => setCount(0)}
          title="Reset!"
        />
      </View>
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    margin: 10,
  },
});

export default App;
