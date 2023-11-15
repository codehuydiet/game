// Square.js
import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Piece from './Piece';

const Square = ({ piece, color, onPress }) => {
  const backgroundColor = color === 'light' ? '#f0d9b5' : '#b58863'; // Màu ô cờ

  return (
    <TouchableOpacity style={[styles.square, { backgroundColor }]} onPress={onPress}>
      <Piece piece={piece} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Square;
