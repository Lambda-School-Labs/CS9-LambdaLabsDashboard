"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var arrayFilter=exports.arrayFilter=function(a,b){for(var c,d=[],e=a.length-1;0<=e;e--)c=a[e],b(c,e)&&d.unshift(c);return d},arrayMap=exports.arrayMap=function(a,b){for(var c,d=[],e=a.length;0<=e;e--)c=a[e],d.unshift(b(c,e));return d};