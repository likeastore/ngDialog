#!/bin/bash
cd /srv/www

npm install
bower install --allow-root

node_modules/.bin/protractor protractor.conf.js
