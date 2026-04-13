import React from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
import { usePersistentResponder } from '../hooks/usePersistentResponder';

const FloatingTerminal = () => {
  // Use our custom hook!
  const { pan, panHandlers } = usePersistentResponder('@terminal_position');

  return (
    <Animated.View
      style={[
        styles.terminal, 
        { transform: [{ translateX: pan.x }, { translateY: pan.y }] }
      ]}
      {...panHandlers}
    >
      <Text style={styles.text}>ScriptFlow Terminal</Text>
      {/* Log content here */}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  terminal: {
    width: '100%',
    height: 200,
    backgroundColor: '#121212',
    borderTopWidth: 1,
    borderColor: '#333',
    position: 'absolute',
    bottom: 0,
  },
  text: { color: '#00FF00', padding: 10, fontFamily: 'monospace' }
});
