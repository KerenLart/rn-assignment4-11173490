import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PopularJobCards = ({ logo, job, company, salary, location }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <View style={styles.textContainer}>
        <Text style={styles.job}>{job}</Text>
        <Text style={styles.company}>{company}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.salary}>{salary}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 10,
    justifyContent: 'space-between',
    elevation: 1, // for Android shad
  
    height:74 // for iOS shadow
  },
  logo: {
    width: 42,
    height: 41,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  job: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  company: {
    fontSize: 14,
    color: '#888',
  },
  detailsContainer: {
    alignItems: 'flex-end',
  },
  salary: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  location: {
    fontSize: 14,
    color: '#888',
  },
});

export default PopularJobCards;
