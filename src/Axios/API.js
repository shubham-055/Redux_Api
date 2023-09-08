import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import axios from 'axios';

const Api = ({country}) => {
  const [data, setData] = useState([]);
  const [hide, setHide] = useState(true);

  useEffect(() => {
    getAPI();
  }, []);

  const getAPI = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=259caf0819f44a4ebd130b9f5805122d`,
      )
      .then(res => setData(res.data.articles))
      .catch(err => console.error(err));
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => Linking.openURL(item.url)}>
      {item.urlToImage && (
        <Image source={{uri: item.urlToImage}} style={styles.itemImage} />
      )}
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Top Headlines</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => setHide(!hide)}>
        <Text style={styles.buttonText}>
          {hide ? 'Show News' : 'Hide News'}
        </Text>
      </TouchableOpacity>
      {hide ? (
        <Text>No News to Display</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginBottom: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 18,
    marginBottom: 20,
    marginHorizontal: 100,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  itemContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
  },
});

export default Api;
