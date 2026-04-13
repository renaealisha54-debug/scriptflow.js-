import React from 'react';
import { Animated, StyleSheet, Text, View, ScrollView } from 'react-native';
import { usePersistentResponder } from '../hooks/usePersistentResponder';

const FloatingTerminal = ({ logs }) => {
  // Use the unique key for Scriptflow terminal position
  const { pan, panHandlers } = usePersistentResponder('@scriptflow_terminal_pos');

  return (
    <Animated.View
      style={[
        styles.terminal,
        { transform: [{ translateX: pan.x }, { translateY: pan.y }] }
      ]}
      {...panHandlers}
    >
      <View style={styles.dragHandle}>
        <View style={styles.indicator} />
        <Text style={styles.title}>TERMINAL LOGS</Text>
      </View>
      <ScrollView style={styles.logContainer}>
        {logs.length === 0 ? (
          <Text style={styles.emptyText}>Waiting for execution...</Text>
        ) : (
          logs.map((log, index) => (
            <Text key={index} style={styles.logLine}>
              <Text style={styles.prompt}>$ </Text>{log}
            </Text>
          ))
        )}
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  terminal: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 250,
    backgroundColor: 'rgba(18, 18, 18, 0.95)',
    borderTopWidth: 1,
    borderColor: '#333',
    elevation: 10,
  },
  dragHandle: {
    height: 30,
    backgroundColor: '#252525',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  indicator: {
    width: 40,
    height: 4,
    backgroundColor: '#555',
    borderRadius: 2,
    marginRight: 10,
  },
  title: { color: '#888', fontSize: 10, fontWeight: 'bold' },
  logContainer: { padding: 10 },
  logLine: { color: '#00FF00', fontFamily: 'monospace', fontSize: 12, marginBottom: 5 },
  prompt: { color: '#00AA00' },
  emptyText: { color: '#444', fontStyle: 'italic', textAlign: 'center', marginTop: 20 },
});

export default FloatingTerminal;
