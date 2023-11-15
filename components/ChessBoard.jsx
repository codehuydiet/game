// Chessboard.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Square from './Square';

const Chessboard = ({ board, onSquarePress }) => {
  return (
    <View style={styles.board}>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((square, colIndex) => (
            <Square
              key={colIndex}
              piece={square.piece}
              onPress={() => onSquarePress(rowIndex, colIndex)}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'column',
    backgroundColor: '#d18b47', // Màu nền cho bàn cờ
    padding: 5,
  },
  row: {
    flexDirection: 'row',
  },
});

export default Chessboard;
