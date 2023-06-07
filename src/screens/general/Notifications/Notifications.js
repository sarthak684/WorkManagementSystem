import React, { useCallback, useEffect, useState } from "react";
import { View, Text, FlatList, Image, SectionList } from "react-native";
import styles from "./styles";
import FastImage from "react-native-fast-image";
import { getAllNotifications, getNotifications } from "../../../FirebaseAction/Notifications";
import { useFocusEffect } from "@react-navigation/native";
import { grey } from "../../../assets/colors";
import { RFValue } from "react-native-responsive-fontsize";

let NotificationSectionData = []

const today = new Date();
const todayDateString = today.toLocaleDateString('zh-CN', { day: '2-digit', month: '2-digit', year: 'numeric' }).split('/').join('-');


const Notification = () =>
{
    const [notificationData, setNotificationData] = useState([]);

    console.log('Inside Notifications -------- Componnent ========== ');

    const renderNotifications = ({item, index}) =>
    {
        console.log('Item.userPhoto======', item.userPhoto);
        return(
            <View style={styles.renderNotificationsView} >
                {/* <View> */}
                    <View style={styles.UserPhoto} >
                        <Image source={{uri: item.userPhoto}} style={{height:'100%', width:'100%' }} />
                    </View>
                    <View style={styles.titlebodyView} >
                        <Text style={styles.title} >{item.title}</Text>
                        <Text style={styles.body} >{item.body}</Text>
                    </View>
                {/* </View>   */}
            </View>
        )
    }

    function objectToArray(obj) {
        const result = [];
        // console.log('Arraaayyyy result =====', result );
        Object.values(obj).forEach(function(subObj) {
          result.push(subObj);
        });
        console.log('Arraaayyyy result =====', result );
        return result;
    }

    useEffect(()=>{

        console.log('Inside useEffect ------- ');

        const fetchNotifications = async () =>
        {
            const Notifications = await getAllNotifications(); 
            console.log('-------------------------NotificationStack-----------------------------Notifications:',Notifications);
  
  
            
            let NotificationSectionData_keys = Object.keys(Notifications);
            let NotificationSectionData_values = Object.values(Notifications);
            
            console.log('NotificationSectionData_keys=========', NotificationSectionData_keys);
            console.log('NotificationSectionData_values=========', NotificationSectionData_values);

            let array_NotificationSectionData_values = NotificationSectionData_values.map(NotificationSectionData_value => Object.values(NotificationSectionData_value) )
            console.log('array_NotificationSectionData_values=========', array_NotificationSectionData_values);
  
            for(let i=0;i<NotificationSectionData_keys.length;i++)
            {
                if(i==(NotificationSectionData_keys.length)-1 )
                    NotificationSectionData.push({ title: 'Today', data: array_NotificationSectionData_values[i] })
                else if (i==(NotificationSectionData_keys.length)-2 )
                    NotificationSectionData.push({ title: 'Yesterday', data: array_NotificationSectionData_values[i] })
                else
                    NotificationSectionData.push({ title: NotificationSectionData_keys[i] , data: array_NotificationSectionData_values[i] })
            }
           
            console.log('NotificationSectionData----------',NotificationSectionData);

            NotificationSectionData.reverse();
        //   const FirebaseTaskArray = objectToArray(Notifications);
        //   // console.log('------------------------------------------------------FirebaseTaskArray:',FirebaseTaskArray);
        //   global.notifications = FirebaseTaskArray;
        //   console.log('=====global.notifications Notifications : ',global.notifications);
          setNotificationData(NotificationSectionData);
    
        }
        fetchNotifications();
        
        // setNotificationData(global.notifications);

    },[])


    // useFocusEffect(
    //     React.useCallback(() => {
    //       fetchData().then(data => setData(data));
    //     }, [])
    //   );
/* Break */

      const fetchData = useCallback(() => {
        
        const fetchNotifications = async () =>
        {
            const Notifications = await getAllNotifications(); 
            console.log('-------------------------NotificationStack-----------------------------Notifications:',Notifications);
  
  
            
            let NotificationSectionData_keys = Object.keys(Notifications);
            let NotificationSectionData_values = Object.values(Notifications);
            
            console.log('NotificationSectionData_keys=========', NotificationSectionData_keys);
            console.log('NotificationSectionData_values=========', NotificationSectionData_values);

            let array_NotificationSectionData_values = NotificationSectionData_values.map(NotificationSectionData_value => Object.values(NotificationSectionData_value) )
            console.log('array_NotificationSectionData_values=========', array_NotificationSectionData_values);
            NotificationSectionData.length = 0;


            for(let i=0;i<NotificationSectionData_keys.length;i++)
            {
                if(i==(NotificationSectionData_keys.length)-1 )
                    NotificationSectionData.push({ title: 'Today', data: array_NotificationSectionData_values[i] })
                else if (i==(NotificationSectionData_keys.length)-2 )
                    NotificationSectionData.push({ title: 'Yesterday', data: array_NotificationSectionData_values[i] })
                else
                    NotificationSectionData.push({ title: NotificationSectionData_keys[i] , data: array_NotificationSectionData_values[i] })
            }
           

            console.log('NotificationSectionData----------',NotificationSectionData);

            NotificationSectionData.reverse();
        //   const FirebaseTaskArray = objectToArray(Notifications);
        //   // console.log('------------------------------------------------------FirebaseTaskArray:',FirebaseTaskArray);
        //   global.notifications = FirebaseTaskArray;
        //   console.log('=====global.notifications Notifications : ',global.notifications);
          setNotificationData(NotificationSectionData);
    
        }
        fetchNotifications();
       
        
      }, []);

      useFocusEffect(fetchData);


    return(
        <View style={styles.containor} >
            <View style={styles.HeaderNotificationView} >
                <Text style={styles.HeaderTextHomePage} >Notifications</Text>
            </View>
            
            <View style={styles.NotificationFlatListView} >
                <SectionList 
                    // data={[{id:0,name:'John Doe'}, {id:1,name:'Richard Roe'}]}
                    sections={ notificationData }
                    renderItem={({index, item})=>renderNotifications({index, item})}
                    renderSectionHeader={({section: {title}}) => (
                        <View style={{marginLeft:'5%', marginVertical:'1%' }} >
                            <Text style={{color: grey, fontSize: RFValue(16)}} >{title}</Text>
                        </View>
                      )}

                    keyExtractor={(item, index) => item + index}
                    extraData={ notificationData }
                />
            </View>
        </View>
    )
}
export default Notification;