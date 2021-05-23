# uglybox2

## Development setup
Configure Visual Studio Code for Vue with [these instructions](https://code.visualstudio.com/docs/nodejs/vuejs-tutorial)

Note you will need to run command line things from [the integrated terminal](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial#_integrated-terminal).
Use the yarn commands in the [Project setup]  section to setup and run the project.
You shouldn't need to restart the server but when you do save changes to a file you may get errors in the terminal window running the server. Fix the problems and save the file and the server should pick up the new changes.

To see the application running in your browser, navigate to http://localhost:8080.

To change the url to that of the camera, change `host_url` in [Camera.js](src/lib/Camera.js).

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

## Project packaging and installation on a Pi

### Compiles and minifies for production
To build the most recent Vue.js code into a server to be run on the pi:
```
yarn build
```

### Bundles the install files and creates uglybox.zip
```
yarn bundle
```

### Prepare the SD card
- Install RaspberryPi desktop image on the SD card. The [Raspberry Pi Imager](https://www.raspberrypi.org/software/) software works well for this.

- Copy uglybox.zip to the boot partition.

MacOS:
```
cp uglybox.zip /Volumes/boot
```

Windows:
```
???
```

- Set up [ssh](https://www.raspberrypi.org/documentation/remote-access/ssh/) (follow only step 3 to set up a headless Pi) and [wpa_supplicant](https://www.raspberrypi.org/documentation/configuration/wireless/headless.md) on the boot partition according to instructions.

- Install SD card into Pi and boot it. Once up ssh into the `pi` account on it and do the following:

```
cp /boot/uglybox.zip .
unzip uglybox.zip
cd uglybox
./install-pi
```

- The last command should cause the Pi to reboot and when it comes back up it should be running the uglybox menu in kiosk mode

## Temporary project setup

Until the install script has auto discovery of the camera's SSID for wireless mode, the camera itself will need to be accessible on the network and the Ugly Box server configured with it's address. This can be accomplished by creating a `.env.local` file in this project's root directory (this file should never be checked in to git and is ignored by default). In it, add the following line (with appropriate camera IP address):

```
VUE_APP_CAMERA_URL=http://192.168.1.7
```

Do this prior to `yarn build` in the above packaging and installation sequence.

## Other esoteric development stuff

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
