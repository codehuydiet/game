// App.js
import React, { useState } from 'react';
import { View } from 'react-native';
import Chessboard from './components/ChessBoard';

const App = () => {
  const initialBoard = [
    // Dòng 1 (trên cùng)
    [
      { piece: 'r', color: 'black' }, // Xe đen
      { piece: 'n', color: 'black' }, // Ngựa đen
      { piece: 'b', color: 'black' }, // Tượng đen
      { piece: 'q', color: 'black' }, // Hậu đen
      { piece: 'k', color: 'black' }, // Vua đen
      { piece: 'b', color: 'black' }, // Tượng đen
      { piece: 'n', color: 'black' }, // Ngựa đen
      { piece: 'r', color: 'black' }, // Xe đen
    ],
    // Dòng 2
    [
      { piece: 'p', color: 'black' }, // Tốt đen
      { piece: 'p', color: 'black' }, // Tốt đen
      { piece: 'p', color: 'black' }, // Tốt đen
      { piece: 'p', color: 'black' }, // Tốt đen
      { piece: 'p', color: 'black' }, // Tốt đen
      { piece: 'p', color: 'black' }, // Tốt đen
      { piece: 'p', color: 'black' }, // Tốt đen
      { piece: 'p', color: 'black' }, // Tốt đen
    ],
    // Dòng 3
    Array(8).fill({}), // Dòng trắng không có quân cờ
    // Dòng 4
    Array(8).fill({}), // Dòng trắng không có quân cờ
    // Dòng 5
    Array(8).fill({}), // Dòng trắng không có quân cờ
    // Dòng 6
    Array(8).fill({}), // Dòng trắng không có quân cờ
    // Dòng 7
    [
      { piece: 'P', color: 'white' }, // Tốt trắng
      { piece: 'P', color: 'white' }, // Tốt trắng
      { piece: 'P', color: 'white' }, // Tốt trắng
      { piece: 'P', color: 'white' }, // Tốt trắng
      { piece: 'P', color: 'white' }, // Tốt trắng
      { piece: 'P', color: 'white' }, // Tốt trắng
      { piece: 'P', color: 'white' }, // Tốt trắng
      { piece: 'P', color: 'white' }, // Tốt trắng
    ],
    // Dòng 8 (dưới cùng)
    [
      { piece: 'R', color: 'white' }, // Xe trắng
      { piece: 'N', color: 'white' }, // Ngựa trắng
      { piece: 'B', color: 'white' }, // Tượng trắng
      { piece: 'Q', color: 'white' }, // Hậu trắng
      { piece: 'K', color: 'white' }, // Vua trắng
      { piece: 'B', color: 'white' }, // Tượng trắng
      { piece: 'N', color: 'white' }, // Ngựa trắng
      { piece: 'R', color: 'white' }, // Xe trắng
    ],
  ];
  
  const [board, setBoard] = useState(initialBoard);

  return (
    <View>
      <Chessboard board={board} />
    </View>
  );
};

export default App;
