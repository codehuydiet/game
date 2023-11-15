// Piece.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Piece = ({ piece, color }) => {
  const pieceImages = {
    'p': require('../assets/bp.png'),
    'r': require('../assets/br.png'),
    'n': require('../assets/bn.png'),
    'b': require('../assets/bb.png'),
    'q': require('../assets/bq.png'),
    'k': require('../assets/bk.png'),
    'P': require('../assets/wp.png'),
    'R': require('../assets/wr.png'),
    'N': require('../assets/wn.png'),
    'B': require('../assets/wb.png'),
    'Q': require('../assets/wq.png'),
    'K': require('../assets/wk.png'),
  };

  return (
    <View style={styles.piece}>
      <Image source={pieceImages[piece]} style={styles.pieceImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  piece: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pieceImage: {
    width: '100%',
    height: '100%',
  },
});

export default Piece;
