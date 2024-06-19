import { View, Text, StyleSheet, ScrollView, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import JobCard from '../components/jobcards';
import PopularJobCards from '../components/popularjobcards';

export default function HomeScreen({ route }) {
  const { name, email } = route.params;

  const featuredJobs = [
    {
      id: 1,
      job: "Software Engineer",
      company: "Facebook",
      location: "Accra, Ghana",
      date: "1d ago",
      salary: "$120,000",
      logo: require("../assets/facebook.png"),
      backgroundColor: "#5386E4",
    },
    {
      id: 2,
      job: "Product Manager",
      company: "Apple",
      location: "Tema, Accra",
    
      salary: "$130,000",
      logo: require("../assets/Vector.png"),
      backgroundColor: "#04284A",
    },
    {
      id: 3,
      job: "Data Scientist",
      company: "Facebook",
      location: "Seattle, WA",
      salary: "$110,000",
      logo: require("../assets/Vector-3.png"),
      backgroundColor: "#5386E4",
    },
    {
      id: 4,
      job: "Software Engineer",
      company: "Apple",
      location: "Accra, Ghana",
      salary: "$120,000",
      logo: require("../assets/Vector.png"),
      backgroundColor: "#04284A",
    },
    {
      id: 5,
      job: "Product Manager",
      company: "Apple",
      location: "Tema, Accra",
      salary: "$130,000",
      logo: require("../assets/Vector.png"),
      backgroundColor: "#5386E4",
    },
    {
      id: 6,
      job: "Data Scientist",
      company: "Google",
      location: "Seattle, WA",
      salary: "$110,000",
      logo: require("../assets/flat-color-icons_google.png"),
      backgroundColor: "#04284A",
    },
    {
      id: 7,
      job: "Software Engineer",
      company: "Google",
      location: "Accra, Ghana",
      salary: "$120,000",
      logo: require("../assets/flat-color-icons_google.png"),
      backgroundColor: "#5386E4",
    },
    {
      id: 8,
      job: "Product Manager",
      company: "Google",
      location: "Tema, Accra",
      salary: "$130,000",
      logo: require("../assets/flat-color-icons_google.png"),
      backgroundColor: "#04284A",
    },
    {
      id: 9,
      job: "Data Scientist",
      company: "Facebook",
      location: "Seattle, WA",
      salary: "$110,000",
      logo: require("../assets/Vector.png"),
      backgroundColor: "#5386E4",
    },
    {
      id: 10,
      job: "Software Engineer",
      company: "Facebook",
      location: "Accra, Ghana",
      salary: "$120,000",
      logo: require("../assets/Vector.png"),
      backgroundColor: "#04284A",
    },
    {
      id: 11,
      job: "Product Manager",
      company: "Facebook",
      location: "Tema, Accra",
      salary: "$130,000",
      logo: require("../assets/Vector.png"),
      backgroundColor: "#04284A",
    },
  ];

  const popularJobs = [
    {
      id: 1,
      job: "Jr Executive",
      company: "Burger King",
      location: "Los Angels, Us",
      salary: "$96,000/y",
      logo: require("../assets/burger-king.png"),
    },
    {
      id: 2,
      job: "Product Manager",
      company: "Beats",
      location: "Florida, US",
      
      salary: "$84,000/y",
      logo: require("../assets/beats.png"),
      
    },
    {
      id: 3,
      job: "Product Manager",
      company: "Facebook",
      location: "Seattle, WA",
      
      salary: "$110,000/y",
      logo: require("../assets/Vector-3.png"),
      
    },
    {
      id: 4,
      job: "Software Engineer",
      company: "Burger King",
      location: "Florida, US",
      
      salary: "$120,000/y",
      logo: require("../assets/burger-king.png"),
      
    },
    {
      id: 5,
      job: "Product Manager",
      company: "Beats",
      location: "New York , US",
      
      salary: "$130,000/y",
      logo: require("../assets/beats.png"),
      
    },
    {
      id: 6,
      job: "Data Scientist",
      company: "Google",
      location: "Seattle, WA",
      
      salary: "$110,000/y",
      logo: require("../assets/flat-color-icons_google.png"),
      
    },
    {
      id: 7,
      job: "Software Engineer",
      company: "Google",
      location: "Accra, Ghana",
      
      salary: "$120,000/y",
      logo: require("../assets/flat-color-icons_google.png"),
      
    },
    {
      id: 8,
      job: "Product Manager",
      company: "Facebook",
      location: "Florida, US",
      
      salary: "$130,000/y",
      logo: require("../assets/flat-color-icons_google.png"),
      
    },
    {
      id: 9,
      job: "Data Scientist",
      company: "Burger King",
      location: "Seattle, WA",
      
      salary: "$110,000/y",
      logo: require("../assets/burger-king.png"),
      
    },
    {
      id: 10,
      job: "Software Engineer",
      company: "Beats",
      location: "Accra, Ghana",
      
      salary: "$120,000/y",
      logo: require("../assets/beats.png"),
      
    },
    {
      id: 11,
      job: "Product Manager",
      company: "Burger King",
      location: "Accra, Ghana",
      
      salary: "$130,000/y",
      logo: require("../assets/burger-king.png"),
      
    },
  ];

  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.profileText}>
              <Text style={styles.names}>{name} </Text>
              <Text style={styles.email}>{email}</Text>
            </View>
            <View>
              <Image source={require('../assets/profile.png')} style={styles.profilePic} />
            </View>
          </View>
          <View style={styles.search}>
            <View style={styles.searchbar}>
              <AntDesign name="search1" size={20} style={styles.searchicon} />
              <TextInput placeholder='Search a job or position' placeholderTextColor={'#95969D'} style={styles.searchInput} />
            </View>
            <TouchableOpacity style={styles.filter}>
              <Image source={require("../assets/filter.png")} />
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.jobcont}>
            <Text style={styles.jobtext}>Featured job</Text> 
            <Text style={{color:'#95969D', fontSize:14}}>See all</Text>
            </View>
            
            <FlatList
              data={featuredJobs}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <JobCard
                    job={item.job}
                    company={item.company}
                    location={item.location}
                    salary={item.salary}
                    logo={item.logo}
                    backgroundColor={item.backgroundColor}
                  />
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
          </View>
         
            <View style={styles.jobcont}>
              <Text style={styles.jobtext}>Popular job</Text>
            <Text style={{color:'#95969D', fontSize:14}}> See all </Text>
          </View>
          
            
          <View>
            
            <FlatList
              data={popularJobs}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <PopularJobCards
                    job={item.job}
                    company={item.company}
                    salary={item.salary}
                    location={item.location}
                    logo={item.logo}
                  />
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  profilePic: {
    width: 54,
    height: 54,
    borderRadius: 100,
    aspectRatio: 1,
  },
  profileText: {
    flex: 1,
  },
  names: {
    fontWeight: '700',
    fontSize: 24,
  },
  email: {
    fontWeight: '400',
    fontSize: 20,
    color: '#95969D',
  },
  search: {
    flexDirection: 'row',
    marginTop: 30,
    height: 48,
  },
  searchbar: {
    backgroundColor: '#F2F2F3',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    flex: 1,
    height: 48,
    alignItems: 'center',
  },
  searchicon: {
    opacity: 0.6,
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    color: '#95969D',
  },
  filter: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F3',
    borderRadius: 10,
    marginLeft: 10,
  },

  jobtext: {
    fontSize: 24,
    fontWeight: '700',
    
  },

  jobcont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 50,
  },
});
