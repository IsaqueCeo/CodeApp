import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

const recommendations = [
  {
    id: '1',
    image: 'https://media.gettyimages.com/id/638921947/pt/foto/mexico-city-mexico.jpg?s=612x612&w=gi&k=20&c=UmYU2vMJPy3guRnEgobDIwZLT2vgChywsQxwyCOqk30=',
    top: 'Destino',
    name: 'Nome do lugar',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in cursus magna.',
    discount: '-30%'
  },
  {
    id: '2',
    image: 'https://blog.123milhas.com/wp-content/uploads/2022/09/estados-unidos-guia-de-turismo-cultura-gastronomia-e-mais-walt-disney-world-conexao123.jpg',
    top: 'Destino',
    name: 'Nome do lugar',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in cursus magna.',
    discount: '-25%'
  },
];

export default function HomeScreen() {
  const renderRecommendation = ({ item }) => (
    <View style={styles.recommendationCard}>
      <Image source={{ uri: item.image }} style={styles.recommendationImage} />
      <View style={styles.recommendationContent}>
        <Text style={styles.recommendationTop}>{item.top}</Text>
        <Text style={styles.recommendationName}>{item.name}</Text>
        <Text style={styles.recommendationDescription}>{item.description}</Text>
        <View style={styles.recommendationFooter}>
          <Text style={styles.recommendationDiscount}>{item.discount}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.searchTitle}>Pesquisa</Text>
        <TouchableOpacity>
          <Feather name="chevron-down" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.searchBar}>
        <Feather name="search" size={24} color="#6D4AFF" />
        <TextInput
          style={styles.searchInput}
          placeholder="Digite sua pesquisa"
          placeholderTextColor="#6D4AFF"
        />
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.icon}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/201/201426.png' }} style={styles.iconImage} />
          <Text style={styles.iconText}>Hospedagem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Image source={{ uri: 'https://cdn.icon-icons.com/icons2/38/PNG/512/bustransport_bus_4984.png' }} style={styles.iconImage} />
          <Text style={styles.iconText}>Transporte</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1085/1085493.png' }} style={styles.iconImage} />
          <Text style={styles.iconText}>Voos</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={recommendations}
        renderItem={renderRecommendation}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.recommendations}
        ListHeaderComponent={<Text style={styles.recommendationsTitle}>Recomendações</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#6D4AFF',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 10,
    margin: 20,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: '#6D4AFF',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  icon: {
    alignItems: 'center',
  },
  iconImage: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  iconText: {
    color: '#6D4AFF',
    fontWeight: 'bold',
  },
  recommendations: {
    paddingHorizontal: 20,
  },
  recommendationsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6D4AFF',
    marginBottom: 10,
  },
  recommendationCard: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  recommendationImage: {
    width: '100%',
    height: 150,
  },
  recommendationContent: {
    padding: 10,
  },
  recommendationTop: {
    color: '#6D4AFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  recommendationName: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  recommendationDescription: {
    color: '#666',
    fontSize: 14,
  },
  recommendationFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  recommendationDiscount: {
    color: '#6D4AFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
