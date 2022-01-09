#!/usr/bin/env node

const importLocal = require('import-local')
if(importLocal(__filename)){
    console.log('使用本地依赖')
}else{
    require('./lib/index')
}