# Mobile wallet app Mock screen

This is the Mock screen app for Mobile wallet app

## pre-install

1. install jdk8
    - set `JAVA_HOME` environment variable
1. (optional) install latest gradle
    - otherwise just use `$ ./gradlew`

## install

`$ git clone git@github.com:`
`git clone ssh://gerrit.cp.bridge2solutions.net:29418/rapid-redeem/mobile_wallet_app`

## build & run

* `$ gradle clean build runAll`
    - server side will finish building first
    - give npm/webpack a little time to finish up
* using browser, navigate to`localhost:3000`

## Issues
   - Somes times we have to manually kill node in task manager