# Music Catalog with Angular
### By Ian Agpawa
##### A music catalog app built with an angular webpack project seed.


### Quick Start
Clone the repo: 
```git clone https://github.com/ianagpawa/music-catalog-angular.git
```

### Install Dependencies
#### Npm and Node
1.  `npm` and `node` must be installed on your system.  Using a terminal/console, execute the following commands to check your `npm` and `node` versions:
```
$   npm -v
$   node -v
```
2. Using the terminal, navigate to project folder and execute the following command to install dependencies:
```
$   npm install
```

#### `Oracle Virtualbox`
1. Add Virtualbox Repository Key
```
$   wget -q https://www.virtualbox.org/download/oracle_vbox_2016.asc -O- | sudo apt-key add -
$   wget -q https://www.virtualbox.org/download/oracle_vbox.asc -O- | sudo apt-key add -
```

2. Add Virtualbox Repo
```
$   sudo sh -c 'echo "deb http://download.virtualbox.org/virtualbox/debian $(lsb_release -sc) contrib" >> /etc/apt/sources.list.d/virtualbox.list'
```

3. Install

Remove - if necessary
```
$   sudo apt remove virtualbox virtualbox-5.1
```

Installation
```
$   sudo apt update
$   sudo apt-get -y install gcc make linux-headers-$(uname -r) dkms
$   sudo apt-get install virtualbox-5.2
```



### Viewing the app locally
Execute the following command while in the project folder:
```
$   npm start
```
Then point your browser to `http://0.0.0.0:8080/`.



### What's included
Within the project folder, you will find the following files:

```
music-catalog-angular/
    ├── config/
    |   ├── helpers.js
    |   ├── karma-test-shim.js
    |   ├── karma.config.js
    |   ├── webpack.common.js
    |   ├── webpack.dev.js
    |   ├── webpack.prod.js
    |   └── webpack.test.js
    ├── src/
    |   ├── root/
    |   |   ├── root.component.html
    |   |   ├── root.component.scss
    |   |   ├── root.component.spec.ts
    |   |   ├── root.component.ts
    |   |   └── root.module.ts
    |   ├── app.scss
    |   ├── app.ts
    |   ├── index.html
    |   ├── main.ts
    |   ├── polyfills.ts
    |   ├── tsconfig.json
    |   └── vendor.ts
    ├── .gitignore
    ├── .npmrc
    ├── karma.conf.js
    ├── package.json
    ├── README.md
    └── webpack.config.js
```

### Links
[Project Seed](https://github.com/ianagpawa/angular-webpack-seed)

## Creator

**Ian Agpawa**

[Github](https://github.com/ianagpawa)

agpawaji@gmail.com
