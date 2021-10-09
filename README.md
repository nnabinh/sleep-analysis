# React Native

This setup guide assumes that you are using MacOS and have Homebrew installed.

- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Android Setup](#-android-setup)
- [iOS Setup](#-ios-setup)
- [Environments](#-environments)
- [Troubleshooting](#-troubleshooting)

## ✅ Prerequisites

**Install NVM**

It is recommended to use `nvm` when you are working on different projects that use different Node versions.

```shell
brew install nvm
mkdir ~/.nvm
```

Add the following to `~/.zshrc` or your desired shell configuration file:

```shell
export NVM_DIR="$HOME/.nvm"
[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # this loads nvm
[ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # this loads nvm bash_completion
```

Apply the changes by running `source ~/.<shell_config_file>` or by just closing and opening the terminal.

NOTE: The following message might show:

```
zsh compinit: insecure directories, run compaudit for list
```

To fix this, run `compaudit | xargs chmod g-w`.

**Install Node 12**

```shell
nvm install 12 # installs the latest version of Node 12
nvm use 12 # switches the current terminal session to Node 12
```

**Install Yarn**

```shell
brew install yarn
```

**Install Watchman**

```
brew install watchman
```

## 🎉 Getting Started

Once you completed the prerequisites, you may now run:

```shell
yarn # at project root, installs the node dependencies
yarn start # at project root, starts Metro Bundler
```

## 🤖 Android Setup

You will need to install Java and Android Studio:

```shell
brew cask install adoptopenjdk8 android-studio
```

Open Android Studio, click "Open an Existing Project", and open this project's `android` folder. After that, let Gradle perform syncing (it may take a long time). Android Studio may ask to update Gradle to the latest version, but for the meantime please ignore it as updating can case issues with packages with duplicate names.

Add the Android SDK (installed along with Android Studio) to the PATH environment variable by adding the following lines to `~/.zshrc` or your desired shell configuration file then applying the changes:

```shell
export ANDROID_HOME=$HOME/Library/Android/sdk
export ANDROID_SDK=$ANDROID_HOME
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

You can now automatically launch the Android emulator and push code to it by running:

```shell
yarn android # at project root
```

NOTE: `Metro Bundler` must be running so you should do this a new terminal session.

To launch the emulator without running Android Studio:

```shell
emulator -list-avds # lists available devices
emulator -and <emulator_name> # starts specific device
```

## 📱 iOS Setup

You will need to install Xcode from the App Store or by downloading it from the Apple Developer website. If you have Homebrew installed, you most likely have Xcode installed as well.

Check Xcode's Preferences then confirm that Locations -> Command Line Tools is set with `XCode version (build)`.

**Install Ruby**

MacOS already comes with Ruby installed but it can cause compiling errors in the packages used in this project. You can use `rbenv` to install alternative versions of Ruby and similar to `nvm`, and it is useful when you are working on different projects that uses different Ruby versions:

```shell
brew install rbenv # installs ruby-build as well
```

Add `rbenv` to the PATH environment variable by adding the following lines to `~/.zshrc` or your desired shell configuration file then applying the changes:

```shell
export RUBY_CONFIGURE_OPTS="--with-openssl-dir=$(brew --prefix openssl@1.1)"
eval "$(rbenv init -)"
```

You can now do:

```shell
rbenv install 2.6.6 # installs Ruby 2.6.6
rbenv shell 2.6.6 # switches the current terminal session to use Ruby 2.6.6
rbenv global 2.6.6 # switches new terminal sessions to Ruby 2.6.6
ruby -v # displays the Ruby version currently in use
```

NOTE: If Ruby version does not update, you can just simply open a new terminal session.

**Install Bundler**

```shell
sudo gem install bundler
```

**Install CocoaPods**

```shell
sudo gem install cocoapods -v 1.10.1
```

**Install iOS Dependencies**

```shell
# install pods
bundle exec pod install
cd .. # go back at project root
```

NOTE: `Metro Bundler` must be running so you should do this on a new terminal session.

You can run the iOS simulator without running XCode by pinning the icon to the Dock. You can also choose which device to launch by right-clicking it and choosing Device.

## ⛑ Troubleshooting

If you encountered any issues when getting the Android build running, please first try:

```shell
yarn clean:android # at project root
```
