import { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Modal } from "react-native";

export default function App() {
  const windowWidth = Dimensions.get('window').width;
  const [modalVisiblity, setModalVisiblity] = useState(false)
  return (
    <SafeAreaView>
      <Text style = {{textAlign:'center', fontSize:20, marginTop:'20%'}}>Guess a Number between 1 - 9 </Text>
      <TouchableOpacity style = {[styles.startView, {marginTop: windowWidth * 0.4}]}
        onPress={() => setModalVisiblity(true)}
      >
        <Text style = {{color:'#fff', fontSize:20}}>Start</Text>
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
    padding:30,
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