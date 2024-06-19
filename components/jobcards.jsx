import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const JobCard = ({ job, company, salary, backgroundColor, logo, location }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.job}>{job}</Text>
          <Text style={styles.company}>{company}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.salary}>{salary}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 20,
    marginHorizontal: 5,
    borderRadius: 20,
    width: 280,
    height: 186,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoContainer: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  logo: {
    width: 30,
    height: 30,
  },
  textContainer: {
    flexDirection: "column",
  },
  job: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  company: {
    fontSize: 14,
    color: "#fff",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  salary: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  location: {
    fontSize: 14,
    color: "#fff",
  },
});

export default JobCard;
