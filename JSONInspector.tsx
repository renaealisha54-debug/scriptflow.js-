import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const JSONInspector = ({ data, label = "Root" }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isObject = typeof data === 'object' && data !== null;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => isObject && setIsExpanded(!isExpanded)}>
        <Text style={styles.labelText}>
          {isObject ? (isExpanded ? '▼ ' : '▶ ') : '• '}
          <Text style={styles.key}>{label}: </Text>
          {!isObject && <Text style={styles.value}>{String(data)}</Text>}
        </Text>
      </TouchableOpacity>

      {isExpanded && isObject && (
        <View style={styles.children}>
          {Object.entries(data).map(([key, value]) => (
            <JSONInspector key={key} label={key} data={value} />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginLeft: 10, marginVertical: 2 },
  labelText: { fontFamily: 'monospace', fontSize: 13, color: '#aaa' },
  key: { color: '#00ff00' },
  value: { color: '#ce9178' },
  children: { borderLeftWidth: 1, borderLeftColor: '#444', marginLeft: 5 },
});

export default JSONInspector;
