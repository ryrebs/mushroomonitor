### mushroomonitor 
  
  - monitor mushroom status and control monitorting devices from your mobile app.

### Tech

  - Firebase
  - React Native Expo

Generating apk.

Prerequities:

- Java
- Android SDK
- Node
- Source Code

0. In the terminal, change directory to project root DIR.

1. Install dependencies: `npm install`

2. Generate prebuild source: `npm run expo prebuild`

3. Change dir to `android` directory generated from the previous command.

4. Run `./gradlew assembleRelease`

5. APK should be generated under: `android/app/build/outputs/apk/release`
