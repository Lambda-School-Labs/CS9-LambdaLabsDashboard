import { combineReducers } from 'redux';
import Navigation from './Navigation';
import ExternalApis from './ExternalApis';
import Database from './Database';
import { trelloGithubReducer } from "./trelloGithub.js";
import { editProjectReducer } from "./editProjectReducer.js";
import { submitProjectReducer } from "./submitProjectReducer.js";

export default combineReducers({
  Navigation,
  ExternalApis,
  Database,
  trelloGithubReducer,
  editProjectReducer,
  submitProjectReducer
});
