importScripts('https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.7/firebase-messaging.js');


// Initialize the Firebase app in the service worker by passing in your app's Firebase config object.
var firebaseConfig = {
    apiKey: "AIzaSyAGfC28n3KiS1AtouBA7PKjJjfpyPo-_uQ",
    authDomain: "quasartok.firebaseapp.com",
    projectId: "quasartok",
    storageBucket: "quasartok.appspot.com",
    messagingSenderId: "1094599363431",
    appId: "1:1094599363431:web:42c5fb3e670026d3e8fdc2",
    measurementId: "G-N9NSLHMY48"
};
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();
/*
messaging.onMessage(function(payload)
{
    console.log("i might be notifica")
}
);*/
//If the app in background, then we will show the notification 
messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);
    var  title =payload.data.title;
    var options ={
        body: payload.data.message,
        icon: 'favicon.ico',
        // data:{
        //     time: new Date(Date.now()).toString(),
        //     click_action: payload.notification.click_action
        // }
    };
    
    return self.registration.showNotification(title, options);     
});
