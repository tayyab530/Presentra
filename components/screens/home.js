import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const upcomingPresentations = [
    { title: 'Presentation 1', date: 'May 23, 2023', time: '10:00 AM' },
    { title: 'Presentation 2', date: 'May 25, 2023', time: '2:30 PM' },
    { title: 'Presentation 3', date: 'May 27, 2023', time: '11:00 AM' },
  ];

  const currentPresentation = { title: 'Presentation 4', presenter: 'John Doe' };

  return (
    <View style={styles.container}>
      <View style={styles.upcomingPresentations}>
        <Text style={styles.sectionTitle}>Upcoming Presentations</Text>
        {upcomingPresentations.map(presentation => (
          <View style={styles.presentationCard} key={presentation.title}>
            <Text style={styles.presentationTitle}>{presentation.title}</Text>
            <Text style={styles.presentationDateTime}>
              {presentation.date} at {presentation.time}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.currentPresentation}>
        <Text style={styles.sectionTitle}>Current Presentation</Text>
        <View style={styles.presentationCard}>
          <Text style={styles.presentationTitle}>{currentPresentation.title}</Text>
          <Text style={styles.presentationPresenter}>Presented by: {currentPresentation.presenter}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  upcomingPresentations: {
    marginBottom: 20,
  },
  presentationCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  presentationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  presentationDateTime: {
    fontSize: 14,
    color: '#888',
  },
  currentPresentation: {
    marginBottom: 20,
  },
  presentationPresenter: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
});

export default HomeScreen;
