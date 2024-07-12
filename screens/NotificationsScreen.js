import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function NotificationsScreen({ navigation }) {
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const [photoLibraryEnabled, setPhotoLibraryEnabled] = useState(false);
  const [videoRecordingEnabled, setVideoRecordingEnabled] = useState(true);
  const [microphoneEnabled, setMicrophoneEnabled] = useState(true);
  const [enableToasts, setEnableToasts] = useState(true);

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Notificações</Text>
      </View> */}

      <View style={styles.settingsContainer}>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Localização</Text>
          <Switch
            value={locationEnabled}
            onValueChange={(value) => setLocationEnabled(value)}
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Câmera</Text>
          <Switch
            value={cameraEnabled}
            onValueChange={(value) => setCameraEnabled(value)}
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Biblioteca de fotos</Text>
          <Switch
            value={photoLibraryEnabled}
            onValueChange={(value) => setPhotoLibraryEnabled(value)}
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Resolução da foto</Text>
          <Text style={styles.settingDetail}>Padrão</Text>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Gravação de vídeo</Text>
          <Switch
            value={videoRecordingEnabled}
            onValueChange={(value) => setVideoRecordingEnabled(value)}
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Microfone</Text>
          <Switch
            value={microphoneEnabled}
            onValueChange={(value) => setMicrophoneEnabled(value)}
          />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Notificações no App</Text>
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Habilitar toasts</Text>
          <Switch
            value={enableToasts}
            onValueChange={(value) => setEnableToasts(value)}
          />
        </View>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Duração total</Text>
        </TouchableOpacity>
      </View>
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
  settingsContainer: {
    padding: 20,
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
    fontSize: 16,
  },
  settingDetail: {
    fontSize: 16,
    color: '#888',
  },
  sectionHeader: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
