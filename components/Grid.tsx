import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },

});

interface BaseProps {
  white: boolean;
}

interface RowProps extends BaseProps {
  row: number;
}

interface SquareProps extends RowProps {
  col: number;
}

const Square = ({ white, row, col }: SquareProps) => {
  return (
    <View
      style={{
        flex: 1,
        padding: 2,
        justifyContent: "space-evenly",
        opacity: 0.2
      }}
    >
    </View>
  );
};

const Row = ({ white, row }: RowProps) => {
  const offset = white ? 0 : 1;
  return (
    <View style={styles.container}>
      {new Array(9).fill(0).map((_, i) => (
        <Square row={row} col={i} key={i} white={(i + offset) % 2 === 1} />
      ))}
    </View>
  );
};

const Grid = () => {
  return (
    <View style={{ flex: 1 }}>
      {new Array(10).fill(0).map((_, i) => (
        <Row key={i} white={i % 2 === 0} row={i} />
      ))}
    </View>
  );
};

export default Grid;