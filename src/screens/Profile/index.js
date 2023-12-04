import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import styles from './profileStyle';
import appTheme from '../../constants/colors';
import { AuthContext } from '../../context';
import { TabScreenHeader } from '../../components';
import { navigateToNestedRoute } from '../../navigators/RootNavigation';
import { getScreenParent } from '../../utils/NavigationHelper';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../../firebaseConfig';

export function Profile({ navigation, route }) {
  const { state, dispatch } = useContext(AuthContext);
  const { user } = state;
  const [username, setUsername] = useState('');

  const handleBackButton = () => {
    navigation?.goBack();
  };

  const handleNavigation = (screen, params) => {
    navigateToNestedRoute(getScreenParent(screen), screen, params);
  };

  useEffect(() => {
    if (route.params && route.params.username) {
      setUsername(route.params.username);
    }
  }, [route.params]);




return (
  <SafeAreaView style={styles.container}>
    <TabScreenHeader
      leftComponent={() => (
        <View style={styles.leftHeaderWrapper}>
          <TouchableOpacity
            onPress={() => handleBackButton('Members')}
            style={styles.backButton}>
            <Ionicons name="arrow-back-outline" size={25} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>
      )}
    />
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View style={styles.profileDetailsSection}>
          <View style={styles.profileInfoSection}>
            <View style={styles.statisticsContainer}>
              <Text style={styles.statisticsText}>1</Text>
              <Text style={styles.statisticsTitle}>Completed Tasks</Text>
            </View>
            <Image
              style={styles.profilePhoto}
              source={{
                uri: user?.photo,
              }}
            />
            <View style={styles.statisticsContainer}>
              <Text style={styles.statisticsText}>1</Text>
              <Text style={styles.statisticsTitle}>Ongoing Tasks</Text>
            </View>
          </View>
          <View style={styles.profileCenterSection}>
            <Text style={styles.nameText}>
              {username ? username : 'Username not found'}
            </Text>

            <Text style={styles.designationText}>{user?.designation}</Text>
            <TouchableOpacity style={styles.editProfileWrapper}>
              <Text style={styles.editProfileText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.exploreSection}>
          <Text style={styles.exploreHeader}>Explore</Text>
          <View style={styles.exploreContent}>
            <TouchableOpacity style={styles.singleExplore}>
              <Ionicons name="people" size={22} color={appTheme.COLOR1} />
              <Text style={styles.exploreText}>Members</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.singleExplore}>
              <SimpleLineIcons
                name="settings"
                size={22}
                color={appTheme.COLOR1}
              />
              <Text style={styles.exploreText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.singleExplore,
                { marginRight: 'auto', marginLeft: '5' },
              ]}
              onPress={() => handleNavigation('Onboarding')}>
              <MaterialCommunityIcons
                name="logout"
                size={22}
                color={appTheme.COLOR1}
              />
              <Text style={styles.exploreText}>Log out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
);
}
