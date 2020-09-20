'use strict';

var apiClient = require('./api/topClient.js').TopClient;
var dingtalkClient = require('./api/dingtalkClient.js').DingTalkClient;
var tmcClient = require('./tmc/tmcClient.js').TmcClient;

var client =  new apiClient({
    'appkey':'31207492',
    'appsecret':'9adf57acce1435207f0e3e5f1d0c609e',
    'url':'http://gw.api.taobao.com/router/rest'
})



module.exports = {
    ApiClient: apiClient,
    TmcClient: tmcClient,
    DingTalkClient: dingtalkClient,
    client: client
};