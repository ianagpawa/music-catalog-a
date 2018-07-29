# Music Catalog with Angular
### By Ian Agpawa
##### A music catalog app built with an angular webpack project seed.


### Quick Start
Clone the repo: 
```
git clone https://github.com/ianagpawa/music-catalog-angular.git
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

#### Vagrant
Installation
```
$   sudo apt-get install vagrant
```


#### Necessary files
`Vagrantfile` and `vagrant_config.sh` files must be included in the `backend` folder:

##### Vagrantfile
```
# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.provision "shell", path: "pg_config.sh"
  config.vm.box = "hashicorp/precise32"
  # config.vm.box = "hashicorp/precise32"
  config.vm.network "forwarded_port", guest: 8000, host: 8000
  config.vm.network "forwarded_port", guest: 8080, host: 8080
  config.vm.network "forwarded_port", guest: 5000, host: 5000
end
```

##### vagrant_config.sh
```
apt-get -qqy update
apt-get -qqy install postgresql python-psycopg2
apt-get -qqy install python-flask python-sqlalchemy
apt-get -qqy install python-pip
pip install bleach
pip install oauth2client
pip install requests
pip install httplib2
pip install redis
pip install passlib
pip install itsdangerous
pip install flask-httpauth
su postgres -c 'createuser -dRS vagrant'
su vagrant -c 'createdb'
su vagrant -c 'createdb forum'
su vagrant -c 'psql forum -f /vagrant/forum/forum.sql'

vagrantTip="[35m[1mThe shared directory is located at /vagrant\nTo access your shared files: cd /vagrant(B[m"
echo -e $vagrantTip > /etc/motd

wget http://download.redis.io/redis-stable.tar.gz
tar xvzf redis-stable.tar.gz
cd redis-stable
make
make install
```

### Viewing the app locally

#### Angular
Navigate into the `frontend` folder and execute the following command:
```
$   npm start
```
Open your browser and nvagiate to `localhost:8080` to view the app.
#### Vagrant

### What's included
Within the project folder, you will find the following files:

```
music-catalog-angular/
  ├── backend/
  |     ├── vagrant_config.sh
  |     └── Vagrantfile
  └── frontend/
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
