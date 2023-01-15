
import { FC, useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity, Button, Alert, TextInput } from 'react-native';


const Brick: FC<{ brickNumber:number, onClick: (brickNUmber: number) => void; getCurrentPlayer: () => number;
   xView: (brickNUmber: number) => "none" | "flex"; oView: (brickNUmber: number) => "none" | "flex";
   isPressed: (brickNumber: number) => boolean}> = (props) => {
  const [player, setPlayer] = useState(0)
  const onClick = () => {
    setPlayer(props.getCurrentPlayer())
    props.onClick(props.brickNumber)
  }

  const xView = () => {
    if (player == 1) {
      return 'flex'
    } else return 'none'
  }

  const oView = () => {
    if (player == 2) {
      return 'flex'
    } else return 'none'
  }

  return (
    <View style={styles.brick}>
      <TouchableOpacity style={[styles.button, { backgroundColor: 'white'}]} onPress={onClick} disabled={props.isPressed(props.brickNumber)}>
        <Image source={require('./assets/x_icon.png')} style={[styles.image, { display: props.xView(props.brickNumber)}]} ></Image>
        <Image source={require('./assets/circle_icon.png')} style={[styles.image, { display: props.oView(props.brickNumber)}]}></Image>
      </TouchableOpacity>
    </View>
  )
}


const XmixDrix: FC = () => {
  // 0: not selected, 1: 'x', 2: 'o'
  const [turn, setTurn] = useState(1)
  const [arr, setArr] = useState(Array(9).fill(0))
  const [winner, setWinner] = useState(0)
  const [game, setGame] = useState(0)

  const getCurrentPlayer = () => {
    return turn
  }
  const onBrickClick = (brickNumber: number) => {
    console.log('onBrickClick')
    if (turn == 1) {
      arr[brickNumber] = 1
      checkWin()
      setTurn(2)
    } else {
      arr[brickNumber] = 2
      checkWin()
      setTurn(1)
    }
    setArr(arr) 
  }

  const xView = (brickNumber: number) => {
    if (arr[brickNumber] == 1) {
      return 'flex'
    } else return 'none'
  }

  const oView = (brickNumber: number) => {
    if (arr[brickNumber] == 2) {
      return 'flex'
    } else return 'none'
  }

  const isPressed = (brickNumber: number) => {
    if(arr[brickNumber] > 0) return true
    else return false
  }

  const checkWin = () => {
    
    if(arr[0] == arr[1] && arr[0] == arr[2] && arr[0]) {
      // win
      setWinner(turn)
      setGame(1)
      console.log("game over")
    }
    else if(arr[3] == arr[4] && arr[3] == arr[5] && arr[3]) {
      // win
      setWinner(turn)
      setGame(1)
      console.log("game over")
    }
    else if(arr[6] == arr[7] && arr[6] == arr[8] && arr[6]) {
      // win
      setWinner(turn)
      setGame(1)
      console.log("game over")
    }
    else if(arr[0] == arr[3] && arr[0] == arr[6] && arr[0]) {
      // win
      setWinner(turn)
      setGame(1)
      console.log("game over")
    }
    else if(arr[1] == arr[4] && arr[1] == arr[7] && arr[1]) {
      // win
      setWinner(turn)
      setGame(1)
      console.log("game over")
    }
    else if(arr[2] == arr[5] && arr[2] == arr[8] && arr[2]) {
      // win
      setWinner(turn)
      setGame(1)
      console.log("game over")
    }
    else if(arr[0] == arr[4] && arr[0] == arr[8] && arr[0]) {
      // win
      setWinner(turn)
      setGame(1)
      console.log("game over")
    }
    else if(arr[2] == arr[4] && arr[2] == arr[6] && arr[2]) {
      // win
      setWinner(turn)
      setGame(1)
      console.log("game over")
    }
  }

  const isWinner = () => {
    if(winner == 1 || winner == 2) {
      return 'flex'
    }
    else return 'none'
  }

  const newGame = () => {
    setTurn(1)
    setArr(Array(9).fill(0))
    setWinner(0)
    setGame(0)
  }

  const showTurnMessage = () => {
    if(game == 0) {
      return 'flex'
    }
    else return 'none'
  }
  console.log("My app is running")


  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Brick brickNumber={0} onClick={onBrickClick} getCurrentPlayer={getCurrentPlayer} xView={xView} oView={oView} isPressed={isPressed}></Brick>
        <Brick brickNumber={1} onClick={onBrickClick} getCurrentPlayer={getCurrentPlayer} xView={xView} oView={oView} isPressed={isPressed}></Brick>
        <Brick brickNumber={2} onClick={onBrickClick} getCurrentPlayer={getCurrentPlayer} xView={xView} oView={oView} isPressed={isPressed}></Brick>
      </View>
      <View style={styles.row}>
        <Brick brickNumber={3} onClick={onBrickClick} getCurrentPlayer={getCurrentPlayer} xView={xView} oView={oView} isPressed={isPressed}></Brick>
        <Brick brickNumber={4} onClick={onBrickClick} getCurrentPlayer={getCurrentPlayer} xView={xView} oView={oView} isPressed={isPressed}></Brick>
        <Brick brickNumber={5} onClick={onBrickClick} getCurrentPlayer={getCurrentPlayer} xView={xView} oView={oView} isPressed={isPressed}></Brick>
      </View>
      <View style={styles.row}>
        <Brick brickNumber={6} onClick={onBrickClick} getCurrentPlayer={getCurrentPlayer} xView={xView} oView={oView} isPressed={isPressed}></Brick>
        <Brick brickNumber={7} onClick={onBrickClick} getCurrentPlayer={getCurrentPlayer} xView={xView} oView={oView} isPressed={isPressed}></Brick>
        <Brick brickNumber={8} onClick={onBrickClick} getCurrentPlayer={getCurrentPlayer} xView={xView} oView={oView} isPressed={isPressed}></Brick>
      </View>
      <Text style={[styles.playMessage, { display: showTurnMessage()}, { backgroundColor: 'white'}]}>player {turn} turn to play</Text>
      <Text style={[styles.playMessage, { display: isWinner()}, { backgroundColor: 'lightblue'}]}>player {winner} is the winner</Text>
      <TouchableOpacity style={[styles.button, { backgroundColor: 'white'}]} onPress={newGame}>
        <Text style={[styles.playMessage]}>newGame</Text>
      </TouchableOpacity>
    </View >
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: 'grey',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'lightblue',
  },
  brick: {
    flex: 1,
    backgroundColor: 'white',
    margin: 5,
    aspectRatio: 1,
  },
  button: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    aspectRatio: 1,
    display: 'none',
  },
  lines: {
    flex: 1,
    position: "absolute",
  },
  playMessage: {
    fontSize: 25,
    margin: 25,
    color: 'darkblue',
    fontWeight: 'bold',
    paddingLeft: 65
  }
});

export default XmixDrix