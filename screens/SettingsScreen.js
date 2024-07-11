import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const settings = [
  { id: '1', icon: 'user', text: 'Conta', screen: 'Profile' },
  { id: '2', icon: 'bell', text: 'Notificações' },
  { id: '3', icon: 'eye', text: 'Aparência' },
  { id: '4', icon: 'lock', text: 'Privacidade e Segurança' },
  { id: '5', icon: 'headphones', text: 'Ajuda e Suporte' },
  { id: '6', icon: 'info', text: 'Sobre' },
];

export default function SettingsScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.settingItem}
      onPress={() => {
        if (item.screen) {
          navigation.navigate(item.screen);
        }
      }}
    >
      <Icon name={item.icon} size={20} color="#000" />
      <Text style={styles.settingText}>{item.text}</Text>
      <Icon name="chevron-right" size={20} color="#000" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Configuração</Text>
      </View>

      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput 
          style={styles.searchInput}
          placeholder="Pesquise uma configuração"
          placeholderTextColor="#888"
        />
      </View>

      <FlatList
        data={settings}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContainer}
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    margin: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  flatListContainer: {
    paddingHorizontal: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  settingText: {
    flex: 1,
    marginLeft: 20,
    fontSize: 16,
  },
});
