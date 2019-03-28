import React, { Component } from "react";
import { Headers } from "../common";
import {
  Container,
  Content,
  Button,
  Text,
  Thumbnail,
  ListItem,
  List, 
  Body,
  Left,
  Right
} from "native-base";
import Color from '../AsosColors';
import { View, StyleSheet, ScrollView, TouchableHighlight, Dimensions} from "react-native";
const {width,} = Dimensions.get('window');
export default class HomeScreen extends Component {
  static navigationOptions = {
    header: {
      visible: false
    }
  };

  constructor(props) {
    super(props);
    this.props.fetchCurrentUser();
    this.state = {
      selectedIndex: 0,
    };
  }

  render() {

    return (
      <Container style={{ backgroundColor: "white" }}>
        <Headers routes={this.props.navigation} />
          <View style={{ marginLeft:20}}>
            <Text style={{fontFamily:'Poppins_bold', mariginLeft: 10, marginTop:10, fontSize: 28 }}>Open Deliveries</Text>
            </View>
                <ScrollView >
                  <Content style={{  margin: 15}}>
                {products.map((item) => this.createListItem(item))}
                </Content>
                </ScrollView>
      </Container>
    );
  }

  createListItem(item){
    return(
        <TouchableHighlight style={{
            backgroundColor:'white',
            borderWidth: 0.5, 
            borderColor: 'rgba(0,0,0,0.1)',
            shadowColor:'black',
            shadowOffset:{ width: 0, height: 3 },
            shadowRadius:4,
            shadowOpacity:0.1,
            elevation: 3,
            marginVertical:10,
            }}
            activeOpacity={0.8} 
            underlayColor={Color.extraLightBackground}
            onPress={() => this.props.navigation.navigate('Kitchen')}>

          <List>
            <ListItem thumbnail>
              <Body>
                <Text>{item.title}</Text>
                <Text note numberOfLines={1}>Contact:{item.contactnumber}</Text>
                <Text note numberOfLines={1}>Pickup:{item.pickup}</Text>
                <Text note numberOfLines={1}>Deliver:{item.delivery}</Text>
                <Text>Payment:{item.payment}</Text>
                <Text>Total:{item.amount}</Text>
                <Text style={{fontWight:'bold'}}>Delivery by:{item.deliverydate}</Text>
              </Body>
              <Right>
                <Button onPress={() => this.props.navigation.navigate("OrdersPlaced")} transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </TouchableHighlight>
        
        
    )
  }

}


const products = [
  {id:0, 
    pickup:'Motor City', 
    delivery: 'JLT', 
    title:'Fatima Manan', 
    contactnumber:'+9715234212', 
    deliverydate:'27.12.18 9:00pm', 
    amount: 'AED350',
    payment:'Cash'},
    {id:1, 
      pickup:'Motor City', 
      delivery: 'JLT', 
      title:'Fatima Manan', 
      contactnumber:'+9715234212', 
      deliverydate:'27.12.18 9:00pm', 
      amount: 'AED350',
      payment:'Cash'},
      {id:2, 
        pickup:'Motor City', 
        delivery: 'JLT', 
        title:'Fatima Manan', 
        contactnumber:'+9715234212', 
        deliverydate:'27.12.18 9:00pm', 
        amount: 'AED350',
        payment:'Cash'},
        {id:3, 
          pickup:'Motor City', 
          delivery: 'JLT', 
          title:'Fatima Manan', 
          contactnumber:'+9715234212', 
          deliverydate:'27.12.18 9:00pm', 
          amount: 'AED350',
          payment:'Cash'},
          {id:4, 
            pickup:'Motor City', 
            delivery: 'JLT', 
            title:'Fatima Manan', 
            contactnumber:'+9715234212', 
            deliverydate:'27.12.18 9:00pm', 
            amount: 'AED350',
            payment:'Cash'},
  

];


