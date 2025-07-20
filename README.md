# React Native Push Call App

## 📱 Description
This app is built using React Native and Firebase to simulate WhatsApp-like call notifications using FCM.

## 🔧 Setup Instructions

### 1. Clone or Upload the Code
Upload all files to your GitHub repo or clone using:

```bash
git clone https://github.com/your-username/react-native-push-call-app.git
```

### 2. Firebase Setup
- Go to [Firebase Console](https://console.firebase.google.com/)
- Create a project and enable **Cloud Messaging**
- Download `google-services.json` and place it in `android/app/`
- Copy your server key for backend script use

### 3. Install Dependencies
Run this in the project root:

```bash
npm install
```

### 4. Run on Android
```bash
npx react-native run-android
```

### 5. Send Notification (Backend)
Navigate to `backend/` folder and run:

```bash
node sendNotification.js YOUR_DEVICE_FCM_TOKEN
```

Make sure you added your `serviceAccountKey.json` file for Firebase Admin.

## ✅ Features
- Firebase Push Notifications
- Kotlin Native Module for Background Notifications
- Deep Linking Ready
- Backend Simulation to Trigger Call-like Push
