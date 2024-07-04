import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Perfil</Text>
        <TouchableOpacity>
          <Feather name="settings" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://i0.statig.com.br/bancodeimagens/2f/ym/i8/2fymi85z5vo5pcl5rsnsr3xgi.jpg' }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Isaque Abraão</Text>
        <Text style={styles.profileJob}>Programador Full Stack</Text>
        <View style={styles.followContainer}>
          <Text style={styles.followers}>1000 Seguidores</Text>
          <Text style={styles.following}>Seguindo 500</Text>
        </View>
      </View>
      
      <View style={styles.contactContainer}>
        <View style={styles.contactItem}>
          <Feather name="mail" size={20} color="#888" />
          <Text style={styles.contactText}>isaque@gmail.com</Text>
        </View>
        <View style={styles.contactItem}>
          <Feather name="phone" size={20} color="#888" />
          <Text style={styles.contactText}>1234567891</Text>
        </View>
        <View style={styles.contactItem}>
          <FontAwesome name="twitter" size={20} color="#888" />
          <Text style={styles.contactText}>@Isaque012</Text>
        </View>
        <View style={styles.contactItem}>
          <Feather name="link" size={20} color="#888" />
          <Text style={styles.contactText}>www.behance.net/Isaque012</Text>
        </View>
        <View style={styles.contactItem}>
          <FontAwesome name="facebook" size={20} color="#888" />
          <Text style={styles.contactText}>www.facebook.com/Isaque012</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
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
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileContainer: {
    backgroundColor: '#6D4AFF',
    padding: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  profileJob: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  followContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  followers: {
    color: '#fff',
    fontSize: 16,
  },
  following: {
    color: '#fff',
    fontSize: 16,
  },
  contactContainer: {
    padding: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
});
