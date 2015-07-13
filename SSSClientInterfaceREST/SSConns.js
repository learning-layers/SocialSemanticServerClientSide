/**
 * Code contributed to the Learning Layers project
 * http://www.learning-layers.eu
 * Development is partly funded by the FP7 Programme of the European Commission under
 * Grant Agreement FP7-ICT-318209.
 * Copyright (c) 2014, Graz University of Technology - KTI (Knowledge Technologies Institute).
 * For a list of contributors see the AUTHORS file at the top-level directory of this distribution.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * copy an entity and hand it to a user
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} entity entity to copy
 * @param {URI Array} users to copy the entity for
 * @param {URI Array} entitiesToExclude if set contains sub entities to exclude from copying
 * @param {String} comment optional describing text
 * @return {SSEntityUserCopyRet} <br>
 * {Boolean} worked whether copying worked
 */
var SSEntityCopy = function(resultHandler, errorHandler, user, key, entity, users, entitiesToExclude, comment){
  
  var par                      = {};
  par[sSVarU.user]             = user;
  par[sSVarU.users]            = users;
  par[sSVarU.entity]           = entity;
  par[sSVarU.key]              = key;
  
  if(!jSGlobals.isEmpty(entitiesToExclude)){ par[sSVarU.entitiesToExclude]   = entitiesToExclude;}
  if(!jSGlobals.isEmpty(comment)){           par[sSVarU.comment]             = comment;}
  
  new SSJSONPOSTRequest("entityCopy", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
};

/**
 * log a certain event for evaluation purposes
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} type type of the log event
 * @param {String} toolContext context in tool where log was triggered
 * @param {String} forUser user to be logged
 * @param {String} entity entity to be logged
 * @param {Long} content content to be logged
 * @param {Long} entities entities to be logged
 * @param {Long} users users to be logged
 * @return {SSEvalLogRet} <br>
 * {Boolean} worked whether logging worked
 */
var SSEvalLog = function(
  resultHandler, 
errorHandler, 
user, 
key, 
type,
toolContext,
forUser, 
entity,
content, 
entities,
users){
  
  var par                      = {};
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  par[sSVarU.type]             = type;
  
  if(!jSGlobals.isEmpty(toolContext)){   par[sSVarU.toolContext]    = toolContext;}
  if(!jSGlobals.isEmpty(forUser)){       par[sSVarU.forUser]        = forUser;}
  if(!jSGlobals.isEmpty(entity)){        par[sSVarU.entity]         = entity;}
  if(!jSGlobals.isEmpty(content)){       par[sSVarU.content]        = content;}
  if(!jSGlobals.isEmpty(entities)){      par[sSVarU.entities]       = entities;}
  if(!jSGlobals.isEmpty(users)){         par[sSVarU.users]          = users;}
  
  new SSJSONPOSTRequest("evalLog", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
};