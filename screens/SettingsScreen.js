import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Settings</Text>
      </View>

      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput 
          style={styles.searchInput}
          placeholder="Search for a setting..."
          placeholderTextColor="#888"
        />
      </View>

      <ScrollView style={styles.scrollContainer}>
        <TouchableOpacity style={styles.settingItem}>
          <Icon name="user" size={20} color="#000" />
          <Text style={styles.settingText}>Conta</Text>
          <Icon name="chevron-right" size={20} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Icon name="bell" size={20} color="#000" />
          <Text style={styles.settingText}>Notificações</Text>
          <Icon name="chevron-right" size={20} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Icon name="eye" size={20} color="#000" />
          <Text style={styles.settingText}>Aparência</Text>
          <Icon name="chevron-right" size={20} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Icon name="lock" size={20} color="#000" />
          <Text style={styles.settingText}>Privacidade e Segurança</Text>
          <Icon name="chevron-right" size={20} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Icon name="headphones" size={20} color="#000" />
          <Text style={styles.settingText}>Ajuda e Suporte</Text>
          <Icon name="chevron-right" size={20} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Icon name="info" size={20} color="#000" />
          <Text style={styles.settingText}>Sobre</Text>
          <Icon name="chevron-right" size={20} color="#000" />
        </TouchableOpacity>
      </ScrollView>
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
  scrollContainer: {
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
