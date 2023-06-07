import firestore from '@react-native-firebase/firestore';

export const addNotifications = async (id, data) => {

    console.log('Inside addNotifications--------');

    console.log("data",data);
    try {
        return new Promise((resolve, reject) => {
            firestore()
                .collection("Notifications")
                .doc(id)
                .set(data)
                .then((ref) => {
                    console.log(ref)
                    //alert('Add record successfully!');
                    resolve(true)
                })
                .catch((error) => {
                    console.log("error",error);
                    const errorString = JSON.stringify(error);
                    const parseerror = JSON.parse(errorString);
                    alert(parseerror.message) // alert error message 
                    resolve(false)
                });
        })
    } catch (error) {
        return null
    }
}

export const updateTasks = async (id, data) => {
    try {
        return new Promise((resolve, reject) => {
            firestore()
                .collection("Tasks")
                .doc(id)
                .update(data)
                .then((ref) => {
                    console.log(ref)
                    //alert('Edit record successfully!');
                    resolve(true)
                })
                .catch((error) => {
                    const errorString = JSON.stringify(error);
                    const parseerror = JSON.parse(errorString);
                    alert(parseerror.message) // alert error message 
                    resolve(false)
                });
        })
    } catch (error) {
        return null
    }
}

export const getNotifications = async (id) => {
    try {
        return new Promise((resolve, reject) => {
            firestore()
                .collection('Notifications')
                .doc(id)
                .get()
                .then(doc => {
                    if (doc.exists) {
                        const data = doc.data();
                        resolve(data);
                    } else {
                        resolve(null);
                    }
                })
                .catch(error => {
                    console.error('Error retrieving notifications:', error);
                    alert('Error retrieving notifications: ' + error.message);
                    reject(error);
                });
        });
    } catch (error) {
        console.error('Error retrieving notifications:', error);
        alert('Error retrieving notifications: ' + error.message);
        return null;
    }
};

// export const getAllNotifications = async (id) => {
//     try {
//         return new Promise((resolve, reject) => {
//             firestore()
//                 .collection('Notifications')
//                 .get()
//                 .then(data => {
//                     let projectsData = [];
//                     console.log('-----data notifications=========', data);
//                     data.forEach((doc) => {
//                         let appObj = {...doc.data() }
//                         console.log('-----appObj notifications=========', appObj);
//                         projectsData.push(appObj);
//                     });
//                     resolve(projectsData)
//                     // this.setState({ isLoading: !this.state.isLoading, dataHolder: [...projectsData] })
//                 })
//                 .catch(error => {
//                     console.error('Error retrieving notifications:', error);
//                     alert('Error retrieving notifications: ' + error.message);
//                     reject(error);
//                 });
//         });
//     } catch (error) {
//         console.error('Error retrieving notifications:', error);
//         alert('Error retrieving notifications: ' + error.message);
//         return null;
//     }
// };

export const getAllNotifications = async (id) => {
    try {
        return new Promise((resolve, reject) => {
            firestore()
                .collection('Notifications')
                .get()
                .then(data => {
                    let notifications = {};
                    console.log('-----data notifications=========', data);
                    data.forEach((doc) => {
                        let notification = doc.data();
                        console.log('-----notification data=========', notification);
                        notifications[doc.id] = notification;
                    });
                    console.log('-----notifications=========', notifications);
                    resolve(notifications);
                })
                .catch(error => {
                    console.error('Error retrieving notifications:', error);
                    alert('Error retrieving notifications: ' + error.message);
                    reject(error);
                });
        });
    } catch (error) {
        console.error('Error retrieving notifications:', error);
        alert('Error retrieving notifications: ' + error.message);
        return null;
    }
};






export const deleteTasks = async (Id) => {
    console.log("deleted id",Id);
    const ID = parseInt(Id);
    try {
        return new Promise(async (resolve, reject) => {
            firestore()
                .collection('Tasks')
                .doc(Id)
                .delete()
                .then(() => {
                    resolve(true)
                });
        })
    } catch (error) {
        return null
    }
}