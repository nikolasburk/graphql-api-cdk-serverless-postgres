#!/usr/bin/env node
'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
require('source-map-support/register')
const cdk = require('@aws-cdk/core')
const appsync_cdk_rds_stack_1 = require('../lib/appsync-cdk-rds-stack')
const app = new cdk.App()
new appsync_cdk_rds_stack_1.AppsyncCdkRdsStack(app, 'AppsyncCdkRdsStack', {
  env: {
    region: app.node.tryGetContext('region'),
    account: app.node.tryGetContext('accountID'),
  },
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwc3luYy1jZGstcmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwc3luYy1jZGstcmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUFvQztBQUNwQyxxQ0FBb0M7QUFDcEMsd0VBQWlFO0FBRWpFLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFBO0FBQ3pCLElBQUksMENBQWtCLENBQUMsR0FBRyxFQUFFLG9CQUFvQixFQUFFO0lBQ2hELEdBQUcsRUFBRTtRQUNILE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDeEMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztLQUM3QztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJ1xuaW1wb3J0ICogYXMgY2RrIGZyb20gJ0Bhd3MtY2RrL2NvcmUnXG5pbXBvcnQgeyBBcHBzeW5jQ2RrUmRzU3RhY2sgfSBmcm9tICcuLi9saWIvYXBwc3luYy1jZGstcmRzLXN0YWNrJ1xuXG5jb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpXG5uZXcgQXBwc3luY0Nka1Jkc1N0YWNrKGFwcCwgJ0FwcHN5bmNDZGtSZHNTdGFjaycsIHtcbiAgZW52OiB7XG4gICAgcmVnaW9uOiBhcHAubm9kZS50cnlHZXRDb250ZXh0KCdyZWdpb24nKSxcbiAgICBhY2NvdW50OiBhcHAubm9kZS50cnlHZXRDb250ZXh0KCdhY2NvdW50SUQnKSxcbiAgfSxcbn0pXG4iXX0=