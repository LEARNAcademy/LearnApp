2019-01-13T10:48:59+08:00

# Github login

[Firbase docs](https://firebase.google.com/docs/auth/web/github-auth)

ReactNative lives inbetween web javascript development, and native Swift/Objective-C development.  Its still a little unclear to me which side of the fence we fall on in regards to Firebase's documentation.  The Phone sign in was closer to web development, with a bit of native platform integration necessary like custom url callbacks.  For OAuth, I'm going to try the web approach first.

## Attempting the web example from Firebase docs:
```bash
git diff src/LearnScreens/LoginScreen/LoginScreen.js
```
```result
: diff --git a/src/LearnScreens/LoginScreen/LoginScreen.js b/src/LearnScreens/LoginScreen/LoginScreen.js
: index 386b813..d76a58f 100644
: --- a/src/LearnScreens/LoginScreen/LoginScreen.js
: +++ b/src/LearnScreens/LoginScreen/LoginScreen.js
: @@ -13,6 +13,7 @@ import {
:    Button,
:    Icon,
:  } from 'react-native-elements'
: +import firebase from 'react-native-firebase'
:  import { connectData } from 'AppRedux';
:  import { apiConfig } from 'AppConfig';
:  import { pushAuthenticated } from 'LearnNavigation';
: @@ -45,6 +46,32 @@ class LoginScreen extends PureComponent {
:
:    }
:
: +  launchGithubLogin = () => {
: +    var provider = new firebase.auth.GithubAuthProvider();
: +    provider.setCustomParameters({
: +      'allow_signup': 'false'
: +    })
: +    firebase.auth().getRedirectResult().then(function(result) {
: +      if (result.credential) {
: +        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
: +        var token = result.credential.accessToken;
: +        // ...
: +      }
: +      // The signed-in user info.
: +      var user = result.user;
: +      console.log("USER!!!!!", user)
: +    }).catch(function(error) {
: +      // Handle Errors here.
: +      var errorCode = error.code;
: +      var errorMessage = error.message;
: +      // The email of the user's account used.
: +      var email = error.email;
: +      // The firebase.auth.AuthCredential type that was used.
: +      var credential = error.credential;
: +      // ...
: +    });
: +  }
: +
:    render() {
:      return (
:        <View style={styles.flex}>
: @@ -59,6 +86,7 @@ class LoginScreen extends PureComponent {
:            title="SMS Login"
:          />
:          <Button
: +          onPress={this.launchGithubLogin}
:            icon={{
:              name: 'github-square',
:              type: 'font-awesome',
```

Yields:

```javascript
`new GithubAuthProvider()` is not supported on the native Firebase SDKs.
....
```

Darn, so the web approach isn't going to work.

[Github's Oauth docs](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/)

Using [react-native-app-auth](https://github.com/FormidableLabs/react-native-app-auth) .  Its what we use on other projects, and provides a nice generic Oauth platform to build on.


```bash
git status
```
```result
: On branch master
: Changes not staged for commit:
:   (use "git add <file>..." to update what will be committed)
:   (use "git checkout -- <file>..." to discard changes in working directory)
:
: 	modified:   src/LearnScreens/LoginScreen/LoginScreen.js
:
: no changes added to commit (use "git add" and/or "git commit -a")
```

```bash
git checkout .
git checkout -b github-oauth
```
```result
! Switched to a new branch 'github-oauth'
```

```bash
git status
```
```result
: On branch github-oauth
: nothing to commit, working tree clean
```

```bash
yarn add react-native-app-auth
```
```result
: yarn add v1.12.3
: [1/4] Resolving packages...
: [2/4] Fetching packages...
: [3/4] Linking dependencies...
! warning " > react-native-elements@0.19.1" has incorrect peer dependency "react-native-vector-icons@^4.2.0".
! warning "babel-preset-react-native > @babel/plugin-proposal-class-properties@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
! warning "babel-preset-react-native > @babel/plugin-transform-spread@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
: [4/4] Building fresh packages...
: success Saved lockfile.
: success Saved 1 new dependency.
: Done in 5.96s.
: info Direct dependencies
: └─ react-native-app-auth@4.0.0
: info All dependencies
: └─ react-native-app-auth@4.0.0
```

Link
Add AppAuth pod

AppDeleget .h and .m changes:

```bash
git status
```
```result
: On branch github-oauth
: Changes not staged for commit:
:   (use "git add <file>..." to update what will be committed)
:   (use "git checkout -- <file>..." to discard changes in working directory)
:
: 	modified:   android/app/build.gradle
: 	modified:   android/app/src/main/java/com/learnacademy/mobile/MainApplication.java
: 	modified:   android/settings.gradle
: 	modified:   ios/Podfile
: 	modified:   ios/Podfile.lock
: 	modified:   ios/ReactNativeStarterKit.xcodeproj/project.pbxproj
: 	modified:   ios/ReactNativeStarterKit/AppDelegate.h
: 	modified:   ios/ReactNativeStarterKit/AppDelegate.m
: 	modified:   package.json
: 	modified:   src/LearnScreens/LoginScreen/LoginScreen.js
: 	modified:   yarn.lock
:
: no changes added to commit (use "git add" and/or "git commit -a")
```

```bash
git diff ios/ReactNativeStarterKit/
```
```result
: diff --git a/ios/ReactNativeStarterKit/AppDelegate.h b/ios/ReactNativeStarterKit/AppDelegate.h
: index a9654d5..9f4a584 100644
: --- a/ios/ReactNativeStarterKit/AppDelegate.h
: +++ b/ios/ReactNativeStarterKit/AppDelegate.h
: @@ -8,9 +8,11 @@
:   */
:
:  #import <UIKit/UIKit.h>
: +#import "RNAppAuthAuthorizationFlowManager.h"
:
: -@interface AppDelegate : UIResponder <UIApplicationDelegate>
: +@interface AppDelegate : UIResponder <UIApplicationDelegate, RNAppAuthAuthorizationFlowManager>
:
:  @property (nonatomic, strong) UIWindow *window;
: +@property(nonatomic, weak)id<RNAppAuthAuthorizationFlowManagerDelegate>authorizationFlowManagerDelegate;
:
:  @end
: diff --git a/ios/ReactNativeStarterKit/AppDelegate.m b/ios/ReactNativeStarterKit/AppDelegate.m
: index 7ac2d1d..fc12843 100644
: --- a/ios/ReactNativeStarterKit/AppDelegate.m
: +++ b/ios/ReactNativeStarterKit/AppDelegate.m
: @@ -25,4 +25,8 @@ - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(
:    return YES;
:  }
:
: +- (BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<NSString *, id> *)options {
: + return [self.authorizationFlowManagerDelegate resumeExternalUserAgentFlowWithURL:url];
: +}
: +
:  @end
```

### Add URL scheme to IOS:

```bash
git diff ios/ReactNativeStarterKit/Info.plist
```
```result
: diff --git a/ios/ReactNativeStarterKit/Info.plist b/ios/ReactNativeStarterKit/Info.plist
: index a9769e8..4b3b047 100644
: --- a/ios/ReactNativeStarterKit/Info.plist
: +++ b/ios/ReactNativeStarterKit/Info.plist
: @@ -30,6 +30,14 @@
:  				<string>com.googleusercontent.apps.506740435698-cm74g8u5c5iacjvi2s1mt7jm55gignma</string>
:  			</array>
:  		</dict>
: +		<dict>
: +			<key>CFBundleTypeRole</key>
: +			<string>Editor</string>
: +			<key>CFBundleURLSchemes</key>
: +			<array>
: +				<string>org.learnacademy.mobile</string>
: +			</array>
: +		</dict>;
:  	</array>
:  	<key>CFBundleVersion</key>
:  	<string>1</string>
```

Also update Github App config


So, got all the way to having Github hooked up and ran into an inconsistancy in Github's OAuth 2 implimentation.  They return XML instead of JSON by default, and the AppAuth-IOS guys who distribute the IOS library aren't willing to work around it, and add the header requesting JSON, so we're left with hacks to get OAuth working with Github.

There was a rejected patch for a recent (2.6.1) version of ApAuth-IOS that fixes the issue.  Had to fall back a few versions of react-native-app-auth as well to get everything working but it seems to be stable.


Initial pass at Github login successful.  Going to push up the boilerplate configuration required, then refactor the implimentation

```bash
git status
```
```result
: On branch github-oauth
: Changes not staged for commit:
:   (use "git add <file>..." to update what will be committed)
:   (use "git checkout -- <file>..." to discard changes in working directory)
:
: 	modified:   android/app/build.gradle
: 	modified:   android/app/src/main/java/com/learnacademy/mobile/MainApplication.java
: 	modified:   android/settings.gradle
: 	modified:   ios/Podfile
: 	modified:   ios/Podfile.lock
: 	modified:   ios/ReactNativeStarterKit.xcodeproj/project.pbxproj
: 	modified:   ios/ReactNativeStarterKit/AppDelegate.h
: 	modified:   ios/ReactNativeStarterKit/AppDelegate.m
: 	modified:   ios/ReactNativeStarterKit/Info.plist
: 	modified:   package.json
: 	modified:   src/LearnScreens/LoginScreen/LoginScreen.js
: 	modified:   yarn.lock
:
: no changes added to commit (use "git add" and/or "git commit -a")
```

```bash
git add android
git add ios
git add package.json
git add yarn.lock
git status
```
```result
: On branch github-oauth
: Changes to be committed:
:   (use "git reset HEAD <file>..." to unstage)
:
: 	modified:   android/app/build.gradle
: 	modified:   android/app/src/main/java/com/learnacademy/mobile/MainApplication.java
: 	modified:   android/settings.gradle
: 	modified:   ios/Podfile
: 	modified:   ios/Podfile.lock
: 	modified:   ios/ReactNativeStarterKit.xcodeproj/project.pbxproj
: 	modified:   ios/ReactNativeStarterKit/AppDelegate.h
: 	modified:   ios/ReactNativeStarterKit/AppDelegate.m
: 	modified:   ios/ReactNativeStarterKit/Info.plist
: 	modified:   package.json
: 	modified:   yarn.lock
:
: Changes not staged for commit:
:   (use "git add <file>..." to update what will be committed)
:   (use "git checkout -- <file>..." to discard changes in working directory)
:
: 	modified:   src/LearnScreens/LoginScreen/LoginScreen.js
:
```

```bash
git commit -m "boilerplate setup for github login support.  Had to fall back a few versions of react-native-app-auth"
git push origin github-oauth
```
```result
: [github-oauth 4c078e4] boilerplate setup for github login support.  Had to fall back a few versions of react-native-app-auth
! remote:
! To github.com:LEARNAcademy/LearnApp.git
!  * [new branch]      github-oauth -> github-oauth
! remote: Create a pull request for 'github-oauth' on GitHub by visiting:
! remote:      https://github.com/LEARNAcademy/LearnApp/pull/new/github-oauth
! remote:
:  11 files changed, 89 insertions(+), 4 deletions(-)
```

[PR](https://github.com/LEARNAcademy/LearnApp/pull/12)

```bash
git status
```
```result
: On branch github-oauth
: Changes not staged for commit:
:   (use "git add <file>..." to update what will be committed)
:   (use "git checkout -- <file>..." to discard changes in working directory)
:
: 	modified:   src/LearnScreens/LoginScreen/LoginScreen.js
:
: no changes added to commit (use "git add" and/or "git commit -a")
```

Current implimentation is in the LoginScreen component :(

```bash
git diff
```
```result
: diff --git a/src/LearnScreens/LoginScreen/LoginScreen.js b/src/LearnScreens/LoginScreen/LoginScreen.js
: index 386b813..415dcc3 100644
: --- a/src/LearnScreens/LoginScreen/LoginScreen.js
: +++ b/src/LearnScreens/LoginScreen/LoginScreen.js
: @@ -13,11 +13,15 @@ import {
:    Button,
:    Icon,
:  } from 'react-native-elements'
: +
: +import { authorize } from 'react-native-app-auth';
:  import { connectData } from 'AppRedux';
:  import { apiConfig } from 'AppConfig';
:  import { pushAuthenticated } from 'LearnNavigation';
:  import { PHONE_AUTH_SCREEN } from '../../LearnNavigation/Screens'
:
: +import firebase from 'react-native-firebase'
: +
:  const styles = StyleSheet.create({
:    flex: {
:      flex: 1,
: @@ -45,6 +49,29 @@ class LoginScreen extends PureComponent {
:
:    }
:
: +  launchGithubLogin = async () => {
: +    const config = {
: +      issuer: 'https://github.com',
: +      serviceConfiguration:{
: +        authorizationEndpoint: 'https://github.com/login/oauth/authorize',
: +        tokenEndpoint: 'https://github.com/login/oauth/access_token',
: +
: +      },
: +      redirectUrl: 'org.learnacademy.mobile://callback',
: +      clientId: '96e4c5c864d665c2c90c',
: +      clientSecret: 'ad385e6b1ee551750465a2c71d3bffb143e7b737',
: +      scopes: ['user:read'],
: +    };
: +
: +    console.log("Seding the request to the ether")
: +    const result = await authorize(config);
: +    console.log("RESULT!!!", result)
: +    const { accessToken } = result
: +    const credential = firebase.auth.GithubAuthProvider.credential(accessToken);
: +    const firebaseResult = await firebase.auth().signInWithCredential(credential)
: +    console.log("FB RESULT", firebaseResult)
: +  }
: +
:    render() {
:      return (
:        <View style={styles.flex}>
: @@ -59,6 +86,7 @@ class LoginScreen extends PureComponent {
:            title="SMS Login"
:          />
:          <Button
: +          onPress={this.launchGithubLogin}
:            icon={{
:              name: 'github-square',
:              type: 'font-awesome',
```

Let's separate this so that Github is in a component, and firebase is in the saga

```bash
git status
```
```result
: On branch github-oauth
: Changes not staged for commit:
:   (use "git add <file>..." to update what will be committed)
:   (use "git checkout -- <file>..." to discard changes in working directory)
:
: 	modified:   src/LearnScreens/LoginScreen/LoginScreen.js
: 	modified:   src/redux/modules/auth/actions.js
: 	modified:   src/redux/modules/auth/reducer.js
: 	modified:   src/redux/modules/auth/saga.js
:
: Untracked files:
:   (use "git add <file>..." to include in what will be committed)
:
: 	src/components/GithubOauth.js
:
: no changes added to commit (use "git add" and/or "git commit -a")
```

```bash
git commit -am 'adds github login support, github portion in its own component, and firebase component login (which should be generic across all providers) to the auth saga'
git push origin github-oauth
```
```result
: [github-oauth 3f99f57] adds github login support, github portion in its own component, and firebase component login (which should be generic across all providers) to the auth saga
! To github.com:LEARNAcademy/LearnApp.git
!    4c078e4..3f99f57  github-oauth -> github-oauth
:  4 files changed, 45 insertions(+), 13 deletions(-)
```

```bash
git status
```
```result
: On branch github-oauth
: Untracked files:
:   (use "git add <file>..." to include in what will be committed)
:
: 	src/components/GithubOauth.js
:
: nothing added to commit but untracked files present (use "git add" to track)
```

```bash
git add .
git commit -m 'the github oauth component.  note: need to refactor out the config'
git push origin github-oauth
```
```result
: [github-oauth 189f19a] the github oauth component.  note: need to refactor out the config
! To github.com:LEARNAcademy/LearnApp.git
!    3f99f57..189f19a  github-oauth -> github-oauth
:  1 file changed, 51 insertions(+)
:  create mode 100644 src/components/GithubOauth.js
```

[PR](https://github.com/LEARNAcademy/LearnApp/pull/13)
```bash
git checkout master
git pull origin master
git branch -d github-oauth
```
```result
! Switched to branch 'master'
! From github.com:LEARNAcademy/LearnApp
!    cc6a7ec..70a8de1  master     -> origin/master
: Updating cc6a7ec..70a8de1
:  android/app/build.gradle                           |  1 +
:  .../com/learnacademy/mobile/MainApplication.java   |  2 +
:  android/settings.gradle                            |  2 +
:  ios/Podfile                                        |  1 +
:  ios/Podfile.lock                                   | 14 +++++-
:  .../project.pbxproj                                | 44 ++++++++++++++++++-
:  ios/ReactNativeStarterKit/AppDelegate.h            |  2 +
:  ios/ReactNativeStarterKit/AppDelegate.m            | 11 +++++
:  ios/ReactNativeStarterKit/Info.plist               | 10 ++++-
:  package.json                                       |  1 +
:  src/LearnScreens/LoginScreen/LoginScreen.js        | 24 +++++-----
:  src/components/GithubOauth.js                      | 51 ++++++++++++++++++++++
:  src/redux/modules/auth/actions.js                  |  8 +++-
:  src/redux/modules/auth/reducer.js                  |  8 ++++
:  src/redux/modules/auth/saga.js                     | 18 +++++++-
:  yarn.lock                                          |  5 +++
:  16 files changed, 185 insertions(+), 17 deletions(-)
:  create mode 100644 src/components/GithubOauth.js
: Deleted branch github-oauth (was 189f19a).
: Fast-forward
!  * branch            master     -> FETCH_HEAD
```

```bash
git branch
```
```result
: * master
:   renames-org-doc
:   vertical-center-component
```

```bash
git branch -d vertical-center-component
git branch -d renames-org-doc
```
```result
: Deleted branch vertical-center-component (was 4190290).
: Deleted branch renames-org-doc (was 85e63f1).
```

```bash
git branch
```
```result
: * master
```
