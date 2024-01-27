import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import batLogo from '../../../assets/img/logo.png';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={batLogo} style={{ height: wp(45), width: hp(45) }} />
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Form')}>
          <Text style={styles.btn}>Ativar Bat Sinal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
