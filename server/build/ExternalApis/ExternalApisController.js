'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _regenerator=require('babel-runtime/regenerator'),_regenerator2=_interopRequireDefault(_regenerator),_asyncToGenerator2=require('babel-runtime/helpers/asyncToGenerator'),_asyncToGenerator3=_interopRequireDefault(_asyncToGenerator2),_BatchRequests=require('./BatchRequests'),_BatchRequests2=_interopRequireDefault(_BatchRequests);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}exports.default=function(){var a=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function a(b,c){var d,e,f,g,h,i,j,k;return _regenerator2.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=b.body.repository,a.next=3,(0,_BatchRequests2.default)(d);case 3:e=a.sent,f=e.project,g=e.team,h=e.trello,i=e.totalCards,j=e.inProgress,k=e.completeness,e?c.status(200).json({project:f,team:g,trello:h,totalCards:i,inProgress:j,completeness:k}):c.send(!1);case 6:case'end':return a.stop();}},a,void 0)}));return function(){return a.apply(this,arguments)}}();