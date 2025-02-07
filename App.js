import { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Modal, TextInput, Alert } from "react-native";

export default function App() {
  const windowWidth = Dimensions.get('window').width;
  const [modalVisiblity, setModalVisiblity] = useState(false);
  const[inputNumber, setInputNumber] = useState('');
  const[triesLeft, setTriesLeft] = useState(5);
  const[editable, setEditAble] = useState(true);

  const random = Math.floor(Math.random() * 100);
  const handleCheck = () => {
    triesLeft > 0 ? setTriesLeft(triesLeft - 1): Alert.alert('Your tries are completed');
    if (triesLeft == 0)  setEditAble(false)
    inputNumber == random ? (Alert.alert('You guessed it right') , setTriesLeft(5)) : Alert.alert(`Number was: ${random}`);
    setInputNumber('')
  }
  const handleTryAgain = () => {
    setTriesLeft(5);
    setInputNumber('');
    setEditAble(true);
  }
  return (
    <SafeAreaView>
      <Text style = {{textAlign:'center', fontSize:20, marginTop:'40%'}}>Guess a Number between 1 - 99 </Text>
      <TouchableOpacity style = {[styles.startView, {marginTop: windowWidth * 0.1 }]}
        onPress={() => setModalVisiblity(true)}
      >
        <Text style = {{color:'#fff', fontSize:30,}}>Start</Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisiblity}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisiblity(false)}
      >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisiblity(!modalVisiblity)}>
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableOpacity>
              <View>
                <Text style = {{textAlign:'center', marginTop:20, fontSize:20}}>You have {triesLeft} guesses left!</Text>
                <TextInput 
                  placeholder="Try your guess" 
                  style = {{marginTop:40, borderBottomWidth:1}} 
                  keyboardType="numeric"
                  value={inputNumber}
                  onChangeText={setInputNumber}
                  editable={editable}
                />
                <View style = {{flexDirection:'row', justifyContent:'space-around', marginTop:40}}>
                  <TouchableOpacity style = {{backgroundColor:'#00bfff', padding:20, borderRadius:20, width:'30%'}} onPress={handleCheck}>
                    <Text style = {{textAlign:'center', color:'#fff', fontSize:15}}>Check</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style = {{backgroundColor:'#ff6347', padding:20, borderRadius:20, width:'30%'}} onPress={handleTryAgain}>
                    <Text style = {{textAlign:'center', color:'#fff', fontSize:15}}>Try Again</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
      </Modal>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  startView:{
    justifyContent:'center', 
    alignItems:'center', 
    backgroundColor:'#00bfff',
    width:'50%',
    height:'20%',
    marginHorizontal:'25%',
    borderRadius:50,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding:20,
    height: '75%',
    width: '100%',
  },
  textStyle: {
    marginBottom: 15,
    color: '#00bfff',
    textAlign:'right'
  },
})