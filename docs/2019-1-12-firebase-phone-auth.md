2019-01-12T12:11:21+08:00

Where are we at?

```bash
git log -n 2
```
```result
: commit bf6c2bfbbc0cdd0f6b1c24a189dfa793b522f0bf
:
: commit a4866db60301870f9bb9399772947a1e472f4538
: Author: winescout <matt@notch8.com>
: Date:   Fri Jan 11 02:42:39 2019 -0800
:
:     wip: adding choice page
: Author: winescout <matt@notch8.com>
: Date:   Fri Jan 11 02:57:41 2019 -0800
:
:     auth check and redirect after initialize
```

Adds stubbed phone login screen, and hooks up link from login screen

```bash
git status
```
```result
: On branch firebase-auth
: Changes not staged for commit:
:   (use "git add <file>..." to update what will be committed)
:   (use "git checkout -- <file>..." to discard changes in working directory)
:
: 	modified:   src/LearnNavigation/Screens.js
: 	modified:   src/LearnNavigation/Unauthenticated.js
: 	modified:   src/LearnNavigation/registerScreens.js
: 	modified:   src/LearnScreens/LoginScreen/LoginScreen.js
: 	modified:   src/LearnScreens/index.js
:
: Untracked files:
:   (use "git add <file>..." to include in what will be committed)
:
: 	src/LearnScreens/PhoneAuthScreen/
: 	src/styles/
:
: no changes added to commit (use "git add" and/or "git commit -a")
```

```bash
git commit -am 'adds PhoneAuthScreen and link from login'
```
```result
: [firebase-auth 2317b03] adds PhoneAuthScreen and link from login
:  5 files changed, 42 insertions(+), 24 deletions(-)
```

```bash
git status
```
```result
: On branch firebase-auth
: Changes not staged for commit:
:   (use "git add <file>..." to update what will be committed)
:   (use "git checkout -- <file>..." to discard changes in working directory)
:
: 	modified:   src/LearnScreens/LoginScreen/LoginScreen.js
:
: Untracked files:
:   (use "git add <file>..." to include in what will be committed)
:
: 	src/LearnScreens/PhoneAuthScreen/
: 	src/components/layout/
: 	src/styles/
:
: no changes added to commit (use "git add" and/or "git commit -a")
```

Pulling out layout section, and vertical component to its own branch so we can PR it.

```bash
git stash
git checkout master
git checkout -b vertical-center-component
git add src/components/layout
git commit -m 'adds a vertical source component'
git push origin vertical-center-component
```
```result
: Saved working directory and index state WIP on firebase-auth: 2317b03 adds PhoneAuthScreen and link from login
! Switched to branch 'master'
! Switched to a new branch 'vertical-center-component'
: [vertical-center-component 4190290] adds a vertical source component
! remote:
! To github.com:LEARNAcademy/LearnApp.git
!  * [new branch]      vertical-center-component -> vertical-center-component
! remote: Create a pull request for 'vertical-center-component' on GitHub by visiting:
! remote:      https://github.com/LEARNAcademy/LearnApp/pull/new/vertical-center-component
! remote:
:  1 file changed, 32 insertions(+)
:  create mode 100644 src/components/layout/VerticalCenter/index.js
```

[PR](https://github.com/LEARNAcademy/LearnApp/pull/5)

```bash
git pull origin master
git checkout firebase-auth
git merge master
git stash apply
```
```result
! From github.com:LEARNAcademy/LearnApp
!    669a590..69b6e5d  master     -> origin/master
! error: Your local changes to the following files would be overwritten by merge:
: Updating 4190290..69b6e5d
! error: Your local changes to the following files would be overwritten by checkout:
: Already up to date.
! error: addinfo_cache failed for path 'dev.org'
: Auto-merging src/LearnScreens/LoginScreen/LoginScreen.js
: CONFLICT (content): Merge conflict in src/LearnScreens/LoginScreen/LoginScreen.js
! 	dev.org
! Please commit your changes or stash them before you switch branches.
! Aborting
! 	dev.org
! Please commit your changes or stash them before you merge.
! Aborting
!  * branch            master     -> FETCH_HEAD
```

That didn't go as expected.
```bash
git status
```
```result
: On branch vertical-center-component
: Unmerged paths:
:   (use "git reset HEAD <file>..." to unstage)
:   (use "git add <file>..." to mark resolution)
:
: 	both modified:   src/LearnScreens/LoginScreen/LoginScreen.js
:
: Changes not staged for commit:
:   (use "git add <file>..." to update what will be committed)
:   (use "git checkout -- <file>..." to discard changes in working directory)
:
: 	modified:   dev.org
:
: Untracked files:
:   (use "git add <file>..." to include in what will be committed)
:
: 	2019-1-11.org
: 	src/LearnScreens/LoginScreen/.LoginScreen.js.swp
: 	src/LearnScreens/PhoneAuthScreen/
: 	src/styles/
:
: no changes added to commit (use "git add" and/or "git commit -a")
```

We couldn't checkout firebase-auth again,  cleaning up

```bash
git status
```
```result
: On branch firebase-auth
: Changes not staged for commit:
:   (use "git add <file>..." to update what will be committed)
:   (use "git checkout -- <file>..." to discard changes in working directory)
:
: 	modified:   .gitignore
:
: Untracked files:
:   (use "git add <file>..." to include in what will be committed)
:
: 	src/LearnScreens/PhoneAuthScreen/
: 	src/styles/
:
: no changes added to commit (use "git add" and/or "git commit -a")
```

All better

```bash
git add src/LearnScreens/PhoneAuthScreen
git commit -m 'stubbed phone auth screen'
```
```result
: [firebase-auth d9d77e6] stubbed phone auth screen
:  1 file changed, 30 insertions(+)
:  create mode 100644 src/LearnScreens/PhoneAuthScreen/PhoneAuthScreen.js
```

Let's PR the styles section

```bash
git checkout master
git checkout -b theme-support
git add .
git commit -m 'adds Theme to handle shared styles like colors'
git push origin theme-support
```
```result
! Switched to branch 'master'
: M	.gitignore
! Switched to a new branch 'theme-support'
: M	.gitignore
: [theme-support 3bbe5ad] adds Theme to handle shared styles like colors
! remote:
! To github.com:LEARNAcademy/LearnApp.git
!  * [new branch]      theme-support -> theme-support
! remote: Create a pull request for 'theme-support' on GitHub by visiting:
! remote:      https://github.com/LEARNAcademy/LearnApp/pull/new/theme-support
! remote:
:  2 files changed, 15 insertions(+)
:  create mode 100644 src/styles/Theme.js
```

[PR](https://github.com/LEARNAcademy/LearnApp/pull/6)

```bash
git status
```
```result
: On branch theme-support
: nothing to commit, working tree clean
```

```bash
git checkout master
git pull origin master
git branch -d theme-support
git checkout firebase-auth
git merge master
```
```result
! Switched to branch 'master'
! From github.com:LEARNAcademy/LearnApp
!    69b6e5d..da0c436  master     -> origin/master
: Updating 69b6e5d..da0c436
:  .gitignore          |  3 +++
: Deleted branch theme-support (was 3bbe5ad).
! Switched to branch 'firebase-auth'
: Merge made by the 'recursive' strategy.
:  .gitignore          |  3 +++
:  src/styles/Theme.js | 12 ++++++++++++
:  2 files changed, 15 insertions(+)
:  create mode 100644 src/styles/Theme.js
:  src/styles/Theme.js | 12 ++++++++++++
:  2 files changed, 15 insertions(+)
:  create mode 100644 src/styles/Theme.js
: Fast-forward
!  * branch            master     -> FETCH_HEAD
```

```bash
git status
```
```result
: On branch firebase-auth
: nothing to commit, working tree clean
```

Created a new auth module in redux

```bash
git status
```
```result
: On branch firebase-auth
: Changes not staged for commit:
:   (use "git add <file>..." to update what will be committed)
:   (use "git checkout -- <file>..." to discard changes in working directory)
:
: 	modified:   src/LearnScreens/PhoneAuthScreen/PhoneAuthScreen.js
: 	modified:   src/redux/modules/index.js
: 	modified:   src/redux/store/reducers.js
:
: Untracked files:
:   (use "git add <file>..." to include in what will be committed)
:
: 	src/redux/modules/auth/
:
: no changes added to commit (use "git add" and/or "git commit -a")
```

```bash
git add .
git commit -m 'Adds auth module in redux, wires up phone number updates in sign in'
```
```result
: [firebase-auth 85e1be6] Adds auth module in redux, wires up phone number updates in sign in
:  8 files changed, 145 insertions(+), 6 deletions(-)
:  create mode 100644 src/redux/modules/auth/actions.js
:  create mode 100644 src/redux/modules/auth/connectAuth.js
:  create mode 100644 src/redux/modules/auth/index.js
:  create mode 100644 src/redux/modules/auth/reducer.js
:  create mode 100644 src/redux/modules/auth/saga.js
```

Get the Redux Logger going

```bash
git status
```
```result
: On branch firebase-auth
: nothing to commit, working tree clean
```

```bash
git checkout master
git checkout -b redux-logger
```
```result
! Switched to branch 'master'
! Switched to a new branch 'redux-logger'
```

```bash
yarn add redux-logger
```
```result
: [1/4] Resolving packages...
: [2/4] Fetching packages...
: [3/4] Linking dependencies...
! warning " > react-native-elements@0.19.1" has incorrect peer dependency "react-native-vector-icons@^4.2.0".
: [4/4] Building fresh packages...
: success Saved 1 new dependency.
: info Direct dependencies
: └─ redux-logger@3.0.6
: info All dependencies
: └─ redux-logger@3.0.6
! warning "babel-preset-react-native > @babel/plugin-proposal-class-properties@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
! warning "babel-preset-react-native > @babel/plugin-proposal-object-rest-spread@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
! warning "babel-preset-react-native > @babel/plugin-proposal-optional-chaining@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
! warning "babel-preset-react-native > @babel/plugin-transform-arrow-functions@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
! warning "babel-preset-react-native > @babel/plugin-transform-block-scoping@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
! warning "babel-preset-react-native > @babel/plugin-transform-classes@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
! warning "babel-preset-react-native > @babel/plugin-transform-computed-properties@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
! warning "babel-preset-react-native > @babel/plugin-transform-destructuring@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
! warning "babel-preset-react-native > @babel/plugin-transform-exponentiation-operator@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
! warning "babel-preset-react-native > @babel/plugin-transform-flow-strip-types@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
! warning "babel-preset-react-native > @babel/plugin-transform-for-of@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
! warning "babel-preset-react-native > @babel/plugin-transform-function-name@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
! warning "babel-preset-react-native > @babel/plugin-transform-literals@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
! warning "babel-preset-react-native > @babel/plugin-transform-modules-commonjs@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
! warning "babel-preset-react-native > @babel/plugin-transform-object-assign@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
! warning "babel-preset-react-native > @babel/plugin-transform-parameters@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
! warning "babel-preset-react-native > @babel/plugin-transform-react-display-name@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
! warning "babel-preset-react-native > @babel/plugin-transform-react-jsx@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
! warning "babel-preset-react-native > @babel/plugin-transform-react-jsx-source@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
! warning "babel-preset-react-native > @babel/plugin-transform-regenerator@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
! warning "babel-preset-react-native > @babel/plugin-transform-shorthand-properties@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
! warning "babel-preset-react-native > @babel/plugin-transform-spread@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
! warning "babel-preset-react-native > @babel/plugin-transform-sticky-regex@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
! warning "babel-preset-react-native > @babel/plugin-transform-template-literals@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
! warning "babel-preset-react-native > @babel/plugin-transform-unicode-regex@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
! warning "babel-preset-react-native > @babel/plugin-proposal-class-properties > @babel/plugin-syntax-class-properties@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
! warning "babel-preset-react-native > @babel/plugin-proposal-object-rest-spread > @babel/plugin-syntax-object-rest-spread@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
! warning "babel-preset-react-native > @babel/plugin-proposal-optional-chaining > @babel/plugin-syntax-optional-chaining@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
! warning "babel-preset-react-native > @babel/plugin-transform-flow-strip-types > @babel/plugin-syntax-flow@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
! warning "babel-preset-react-native > @babel/plugin-transform-react-jsx > @babel/plugin-syntax-jsx@7.0.0-beta.47" has incorrect peer dependency "@babel/core@7.0.0-beta.47".
```

```bash
git status
```
```result
: On branch redux-logger
: Changes not staged for commit:
:   (use "git add <file>..." to update what will be committed)
:   (use "git checkout -- <file>..." to discard changes in working directory)
:
: 	modified:   src/redux/store/store.js
:
: no changes added to commit (use "git add" and/or "git commit -a")
```

```bash
git diff
```
```result
: diff --git a/src/redux/store/store.js b/src/redux/store/store.js
: index ddc45df..5e465e6 100644
: --- a/src/redux/store/store.js
: +++ b/src/redux/store/store.js
: @@ -5,7 +5,7 @@ import thunk from 'redux-thunk';
:  import { compact } from 'lodash';
:  import { persistStore } from 'redux-persist';
:  import createSagaMiddleware from 'redux-saga';
: -// import { createLogger } from 'redux-logger';
: +import { createLogger } from 'redux-logger';
:
:  // import { composeWithDevTools } from 'remote-redux-devtools';
:
: @@ -18,7 +18,7 @@ export default function initializeStore() {
:    const middlewares = compact([
:      thunk.withExtraArgument(),
:      sagaMiddleware,
: -    // __DEV__ ? createLogger() : null
: +    __DEV__ ? createLogger() : null
:    ]);
:
:    const debuggWrapper = data => data;
```

```bash
git add .
git commit -m 'enables redux-logger'
git push origin redux-logger
```
```result
: [redux-logger 77da4f1] enables redux-logger
! remote:
! To github.com:LEARNAcademy/LearnApp.git
!  * [new branch]      redux-logger -> redux-logger
! remote: Create a pull request for 'redux-logger' on GitHub by visiting:
! remote:      https://github.com/LEARNAcademy/LearnApp/pull/new/redux-logger
! remote:
:  1 file changed, 2 insertions(+), 2 deletions(-)
```

[PR](https://github.com/LEARNAcademy/LearnApp/pull/7)

```bash
git checkout master
git pull origin master
git branch -d redux-logger
git checkout firebase-auth
git merge master
```
```result
! Switched to branch 'master'
! From github.com:LEARNAcademy/LearnApp
!    da0c436..c9cadca  master     -> origin/master
: Updating da0c436..c9cadca
:  src/redux/store/store.js | 4 ++--
: Deleted branch redux-logger (was 77da4f1).
! Switched to branch 'firebase-auth'
: Merge made by the 'recursive' strategy.
:  src/redux/store/store.js | 4 ++--
:  1 file changed, 2 insertions(+), 2 deletions(-)
:  1 file changed, 2 insertions(+), 2 deletions(-)
: Fast-forward
!  * branch            master     -> FETCH_HEAD
```

```bash
git status
```
```result
: On branch firebase-auth
: nothing to commit, working tree clean
```

### Finish up phone submit

#### full circle on phone input

```bash
git status
```
```result
: On branch firebase-auth
: Changes not staged for commit:
:   (use "git add <file>..." to update what will be committed)
:   (use "git checkout -- <file>..." to discard changes in working directory)
:
: 	modified:   src/LearnScreens/PhoneAuthScreen/PhoneAuthScreen.js
: 	modified:   src/redux/modules/auth/connectAuth.js
:
: no changes added to commit (use "git add" and/or "git commit -a")
```

```bash
git commit -am 'wires in value for phone form control'
```
```result
: [firebase-auth 42ffe51] wires in value for phone form control
:  2 files changed, 7 insertions(+), 2 deletions(-)
```

#### submit to firebase via a saga

```bash
git status
```
```result
: On branch firebase-auth
: Changes not staged for commit:
:   (use "git add <file>..." to update what will be committed)
:   (use "git checkout -- <file>..." to discard changes in working directory)
:
: 	modified:   ios/ReactNativeStarterKit.xcodeproj/project.pbxproj
: 	modified:   ios/ReactNativeStarterKit/Info.plist
: 	modified:   src/LearnScreens/LoginScreen/LoginScreen.js
: 	modified:   src/LearnScreens/PhoneAuthScreen/PhoneAuthScreen.js
: 	modified:   src/redux/modules/auth/actions.js
: 	modified:   src/redux/modules/auth/reducer.js
: 	modified:   src/redux/modules/auth/saga.js
: 	modified:   src/redux/store/sagas.js
:
: no changes added to commit (use "git add" and/or "git commit -a")
```

Able to submit phone number and verification code, authenticating and recieving a user back

```bash
git commit -am 'successful phone auth'
```
```result
: [firebase-auth 312ae51] successful phone auth
:  8 files changed, 162 insertions(+), 54 deletions(-)
```

#### Handle auth redirect

```bash
git status
```
```result
: On branch firebase-auth
: Changes not staged for commit:
:   (use "git add <file>..." to update what will be committed)
:   (use "git checkout -- <file>..." to discard changes in working directory)
:
: 	modified:   src/LearnScreens/DashboardScreen/DashboardScreen.js
: 	modified:   src/LearnScreens/WelcomeScreen/WelcomeScreen.js
:
: no changes added to commit (use "git add" and/or "git commit -a")
```

Adds redirect when user logs in. and a button to log out (broken though)

```bash
git commit -am 'redirect to dashboard on login'
```
```result
: [firebase-auth 2652c5c] redirect to dashboard on login
:  2 files changed, 25 insertions(+), 16 deletions(-)
```

#### Handle logout
This is going to take a little refactoring.  We need a component to wrap the application that watches for user auth state changes, and mounts the appropriate navigation (authed, unauthed)

```bash
git status
```
```result
: On branch firebase-auth
: Changes not staged for commit:
:   (use "git add <file>..." to update what will be committed)
:   (use "git checkout -- <file>..." to discard changes in working directory)
:
: 	modified:   index.js
:
: no changes added to commit (use "git add" and/or "git commit -a")
```

```bash
git add .
git commit -am 'adds redirect back to unauthenticated on logout'
git push origin firebase-auth
```
```result
: [firebase-auth fcf8d72] adds redirect back to unauthenticated on logout
! To github.com:LEARNAcademy/LearnApp.git
!    bf6c2bf..fcf8d72  firebase-auth -> firebase-auth
:  1 file changed, 14 insertions(+), 2 deletions(-)
```

Let's PR this, and then follow up with a small PR that refactors where the signout function is called back into firebase.  This should be in a saga.

[PR](https://github.com/LEARNAcademy/LearnApp/pull/8)

```bash
git status
```
```result
: On branch firebase-auth
: Changes not staged for commit:
:   (use "git add <file>..." to update what will be committed)
:   (use "git checkout -- <file>..." to discard changes in working directory)
:
: 	modified:   src/LearnScreens/DashboardScreen/DashboardScreen.js
: 	modified:   src/redux/modules/auth/actions.js
: 	modified:   src/redux/modules/auth/reducer.js
: 	modified:   src/redux/modules/auth/saga.js
:
: no changes added to commit (use "git add" and/or "git commit -a")
```

```bash
git add .
git commit -m 'refactors signout to auth saga. This will allow us to add some animation.'
git push origin firebase-auth
```
```result
: [firebase-auth 78345aa] refactors signout to auth saga. This will allow us to add some animation.
! To github.com:LEARNAcademy/LearnApp.git
!    fcf8d72..78345aa  firebase-auth -> firebase-auth
:  4 files changed, 26 insertions(+), 2 deletions(-)
```

```bash
git checkout master
git pull origin master
git branch -d firebase-auth
```
```result
! Switched to branch 'master'
! From github.com:LEARNAcademy/LearnApp
!    c9cadca..83d3eb6  master     -> origin/master
: Updating c9cadca..83d3eb6
:  index.js                                           |  16 ++-
: Deleted branch firebase-auth (was 78345aa).
:  .../project.pbxproj                                |  22 ++++-
:  ios/ReactNativeStarterKit/Info.plist               |  13 ++-
:  src/LearnNavigation/Screens.js                     |   8 +-
:  src/LearnNavigation/Unauthenticated.js             |  11 ++-
:  src/LearnNavigation/registerScreens.js             |  15 ++-
:  .../DashboardScreen/DashboardScreen.js             |  12 ++-
:  src/LearnScreens/LoginScreen/LoginScreen.js        |  53 ++--------
:  .../PhoneAuthScreen/PhoneAuthScreen.js             | 109 +++++++++++++++++++++
:  src/LearnScreens/WelcomeScreen/WelcomeScreen.js    |  33 ++++---
:  src/LearnScreens/index.js                          |   7 +-
:  src/redux/modules/auth/actions.js                  |  27 +++++
:  src/redux/modules/auth/connectAuth.js              |  17 ++++
:  src/redux/modules/auth/index.js                    |   6 ++
:  src/redux/modules/auth/reducer.js                  |  79 +++++++++++++++
:  src/redux/modules/auth/saga.js                     |  70 +++++++++++++
:  src/redux/modules/index.js                         |   3 +-
:  src/redux/store/reducers.js                        |   4 +-
:  src/redux/store/sagas.js                           |   6 +-
:  19 files changed, 428 insertions(+), 83 deletions(-)
:  create mode 100644 src/LearnScreens/PhoneAuthScreen/PhoneAuthScreen.js
:  create mode 100644 src/redux/modules/auth/actions.js
:  create mode 100644 src/redux/modules/auth/connectAuth.js
:  create mode 100644 src/redux/modules/auth/index.js
:  create mode 100644 src/redux/modules/auth/reducer.js
:  create mode 100644 src/redux/modules/auth/saga.js
: Fast-forward
!  * branch            master     -> FETCH_HEAD
```

```bash
git status
```
```result
: On branch master
: nothing to commit, working tree clean
```

### Checking Auth on Android
Looks like we're good on an initial test.  On the Android platform, you can get the device's phone number, so we can populate the form with that, but I need a device with a phone number to work on it, so ....
