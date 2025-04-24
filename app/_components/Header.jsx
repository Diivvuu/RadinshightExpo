import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  UIManager,
  findNodeHandle,
  Dimensions,
  Platform,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { BackButton, UserProfileIcon2 } from './Icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width: SCREEN_W } = Dimensions.get('window');
const CARD_W = 140;

const Header = ({ title, onBackPress }) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const ref = useRef(null);

  /* ─────────────────────────────────────────────── */
  const openMenu = () => {
    UIManager.measureInWindow(findNodeHandle(ref.current), (x, y, w, h) => {
      // y already includes the iOS notch offset; subtract status bar on Android
      // const bar = Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0;
      // const top = y + h + 6 - bar;
      const top = y + h + 6 - insets.top;

      /* right-align card with avatar, but keep 8 px margin from screen edge */
      const left = Math.min(x, SCREEN_W - CARD_W - 8);

      setCoords({ top, left });
      setShow(true);
    });
  };

  const handleLogout = async () => {
    setShow(false);
    await AsyncStorage.clear();
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
  };

  /* ─────────────────────────────────────────────── */
  return (
    <>
      {/* top bar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBackPress} style={{ padding: 10 }}>
          <BackButton />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{title}</Text>

        <TouchableOpacity
          ref={ref}
          style={styles.profileIcon}
          onPress={() => (show ? setShow(false) : openMenu())}
          activeOpacity={0.8}
        >
          <UserProfileIcon2 />
        </TouchableOpacity>
      </View>

      {/* backdrop */}
      {show && (
        <Pressable
          style={[StyleSheet.absoluteFill, { zIndex: 10000 }]}
          onPress={() => setShow(false)}
        />
      )}

      {/* dropdown */}
      {show && (
        <View style={[styles.card, coords]}>
          <Pressable
            style={({ pressed }) => [
              styles.row,
              pressed && { backgroundColor: '#F3F4F6' },
            ]}
            android_ripple={{ color: '#E5E7EB' }}
            onPress={handleLogout}
          >
            <Ionicons
              name="log-out-outline"
              size={18}
              color="#DC2626"
              style={{ marginRight: 8 }}
            />
            <Text style={styles.rowText}>Logout</Text>
          </Pressable>
        </View>
      )}
    </>
  );
};

/* ── styles ─────────────────────────────────────── */
const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileIcon: {
    padding: 7,
    backgroundColor: '#333',
    borderRadius: 25,
  },

  card: {
    position: 'absolute',
    width: CARD_W, // = 140
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 4, // keeps inner pressable comfy
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    zIndex: 10001,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  rowText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#DC2626',
  },
});

export default Header;
