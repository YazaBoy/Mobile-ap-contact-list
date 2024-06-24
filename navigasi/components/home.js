import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const contacts = [
  { id: '1', name: 'Tanaya Salsabila A.', phone: '+62 857-9502-4030', photo: require('../assets/naya.jpg') },
  { id: '2', name: 'Gerie Panca Sukma', phone: '987654321', photo: require('../assets/geri.jpg') },
  { id: '3', name: 'Delinda Mega Putri', phone: '123123123', photo: require('../assets/delin.jpg') },
  { id: '4', name: 'Saepul', phone: '321321321', photo: require('../assets/photo3.jpg') },
  { id: '5', name: 'Ghani', phone: '456456456', photo: require('../assets/gani.jpg') },
  { id: '6', name: 'Haidar', phone: '654654654', photo: require('../assets/photo6.jpg') },
  { id: '7', name: 'Ridho Fajar Pratama', phone: '789789789', photo: require('../assets/photo7.jpg') },
  { id: '8', name: 'Jerry', phone: '987987987', photo: require('../assets/jerry.jpg') },
];

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => navigation.navigate('Detail', { contact: item })}
          >
            <Image source={item.photo} style={styles.contactPhoto} />
            <Text style={styles.contactName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  contactPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  contactName: {
    fontSize: 18,
  },
});

export default Home;
