const path = require("path");
const {log} = require('util');
const {getHeapCodeStatistics} = require('v8');

const dirUpload = path.join(__dirname,"upload","files");

log(dirUpload);
log(getHeapCodeStatistics());