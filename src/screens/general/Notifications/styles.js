import { RFValue } from "react-native-responsive-fontsize";

const { StyleSheet } = require("react-native");
const { containor, black, grey, white } = require("../../../assets/colors");

const styles = StyleSheet.create({
    containor:
    {
        flex:1,
        backgroundColor: containor,
    },
    HeaderNotificationView:
    {
        
    },
    HeaderTextHomePage:
    {
        alignSelf:'center',
        fontSize:18,
        fontWeight:'bold',
        marginTop:'12%',
        color: black,
    },
    NotificationFlatListView:
    {
        width:'100%',
        alignSelf:'center',
        // height:'52%',
        flex:1,
        marginTop:'7%',
        // paddingLeft:'3%',
        // backgroundColor: white,
        // paddingTop:'5%'
    },
    renderNotificationsView:
    {
        marginBottom:'0.5%',
        flexDirection:'row',
        // padding:5,
        // height:60,

        // borderWidth:0.1,
        // borderBottomWidth:0,
        // borderTopWidth:0.1,
        // elevation: 1,
        paddingVertical:'2%',
        paddingHorizontal:'2%',
        backgroundColor: containor,
        // borderRadius: 12,
        paddingLeft:'5%',
    },
    UserPhoto:
    {
        // height:50, 
        width:45, 
        // height:'100%',
        height:45,
        borderRadius : 30,
        overflow: 'hidden',
        // borderWidth:1

    },
    titlebodyView:
    {
        // borderWidth:1,
        width:'85%',
        paddingLeft:'3%',
    },
    title:
    {
        fontSize: RFValue(15),
        color: black,
    },
    body:
    {
        fontSize: RFValue(12),
        color: grey,
    },
})
export default styles;