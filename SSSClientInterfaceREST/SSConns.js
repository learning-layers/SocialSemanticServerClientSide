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
 * retrieve all the user's collections given entity is in
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} entity entity to be searched for in user's collections
 * @return {SSCollsUserEntityIsInGetRet} <br>
 * {SSColl Array} colls user's collections the entity is in
 */
var SSCollsEntityIsInGet = function(resultHandler, errorHandler, user, key, entity){
  
  var par                = {};
  par[sSVarU.user]       = user;
  par[sSVarU.entity]     = entity;
  par[sSVarU.key]        = key;
  
  new SSJSONPOSTRequest("collsEntityIsInGet", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
};

/**
 * retrieve the cumulated tags (and their frequencies) for all the sub collections and respective entities
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} coll collection to retrieve all cumulated tags for
 * @return {SSCollUserCumulatedTagsGetRet} <br>
 * {SSTagFrequ Array} tagFrequs all tags and their frequencies (label, space, frequ) for sub collections and entities
 */
var SSCollCumulatedTagsGet = function(resultHandler, errorHandler, user, key, coll){
  
  var par                = {};
  par[sSVarU.user]       = user;
  par[sSVarU.coll]       = coll;
  par[sSVarU.key]        = key;
  
  new SSJSONPOSTRequest("collCumulatedTagsGet", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
};

/**
 * retrieve the parent collection for given user's collection
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key 
 * @param {URI} coll collection to retrieve parent collection for
 * @return {SSCollUserParentGetRet} <br>
 * {SSColl} coll parent coll with entries
 */
var SSCollParentGet = function(resultHandler, errorHandler, user, key, coll){
  
  var par                = {};
  par[sSVarU.user]       = user;
  par[sSVarU.coll]       = coll;
  par[sSVarU.key]        = key;
  
  new SSJSONPOSTRequest("collParentGet", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
};

/**
 * retrieve the user's root collection
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @return {SSCollUserRootGetRet} <br>
 * {SSColl} coll the user's root collection with entries
 */
var SSCollRootGet = function(resultHandler, errorHandler, user, key){
  
  var par                = {};
  par[sSVarU.user]       = user;
  par[sSVarU.key]        = key;
  
  new SSJSONPOSTRequest("collRootGet", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
};

/**
 * add a (new) collection or any other entity to given user's collection
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} coll collection to add an entity to
 * @param {URI} entry either null for the creation of new sub-collection, an existing collection or an entity
 * @param {String} label title of the collection entry 
 * @param {Boolean} addNewColl whether a new collection should be created instead of adding an existing one
 * @return {SSCollUserEntryAddRet} <br>
 * {URI} uri collection entry's identifier
 */
var SSCollEntryAdd = function(resultHandler, errorHandler, user, key, coll, entry, label, addNewColl){
  
  var par                      = {};
  par[sSVarU.user]             = user;
  par[sSVarU.coll]             = coll;
  par[sSVarU.label]            = label;
  par[sSVarU.key]              = key;
  
  if(!jSGlobals.isEmpty(addNewColl)){ par[sSVarU.addNewColl]       = addNewColl;}
  if(!jSGlobals.isEmpty(entry)){      par[sSVarU.entry]            = entry;}
  
  new SSJSONPOSTRequest("collEntryAdd", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
};

/**
 * add existing collections or (new) entities to a collection
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key 
 * @param {URI} coll collection to add sub-entities to
 * @param {URI Array} entries entities to add
 * @param {String Array} labels collection item labels
 * @return {SSCollUserEntriesAddRet} <br>
 * {Boolean} worked whether adding worked
 */
var SSCollEntriesAdd = function(resultHandler, errorHandler, user, key, coll, entries, labels){
  
  var par                       = {};
  par[sSVarU.user]             = user;
  par[sSVarU.coll]             = coll;
  par[sSVarU.entries]          = entries;
  par[sSVarU.labels]           = labels;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("collEntriesAdd", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
};

/**
 * change the sequential order of entries in a user's collection
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} coll collection to change entry order
 * @param {Mixed Array} order collection entries {URI} and their positions {Integer} in the form of [collEntryUri1,pos1,collEntryUri2,pos2,…]
 * @return {SSCollUserEntryChangePosRet} <br>
 * {Boolean} worked whether changing positions worked
 */
var SSCollEntryChangePos = function(resultHandler, errorHandler, user, key, coll, order){
  
  var par                      = {};
  par[sSVarU.user]             = user;
  par[sSVarU.coll]             = coll;
  par[sSVarU.order]            = order;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("collEntryChangePos", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
};

/**
 * delete an item from a user's collection
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} coll collection to delete an item from
 * @param {URI} entry entity to remove
 * @return {SSCollUserEntryDeleteRet} <br>
 * {Boolean} worked whether deleting the collection entry worked
 */
var SSCollEntryDelete = function(resultHandler, errorHandler, user, key, coll, entry){
  
  var par                      = {};
  par[sSVarU.user]             = user;
  par[sSVarU.coll]             = coll;
  par[sSVarU.entry]            = entry;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("collEntryDelete", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
};

/**
 * delete one or more entries from a collection
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri 
 * @param {String} key auth key
 * @param {URI} coll collection to delete entries from 
 * @param {URI Array} entries items to delete
 * @return {SSCollUserEntriesDeleteRet} <br>
 * {Boolean} worked whether deleting the entries worked
 */
var SSCollEntriesDelete = function(resultHandler, errorHandler, user, key, coll, entries){
  
  var par                      = {};
  par[sSVarU.user]             = user;
  par[sSVarU.coll]             = coll;
  par[sSVarU.entries]          = entries;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("collEntriesDelete", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
};

/**
 * retrieve a user's collection with entries
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} coll collection to retrieve
 * @return {SSCollUserWithEntriesRet} <br>
 * {SSColl} coll collection with entries requested
 */
var SSCollWithEntries = function(resultHandler, errorHandler, user, key, coll){
  
  var par                      = {};
  par[sSVarU.user]             = user;
  par[sSVarU.coll]             = coll;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("collWithEntries", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
};

/**
 * retrieve the user's collections with entries
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @return {SSCollsUserWithEntriesRet} <br>
 * {SSColl Array} colls user's collections with entries
 */
var SSCollsWithEntries = function(resultHandler, errorHandler, user, key){
  
  var par                      = {};
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("collsWithEntries", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
};

/**
 * retrieve the parent collection order for a user's collection
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} coll collection to retrieve it's parent hierarchy for
 * @return {SSCollUserHierarchyGetRet} <br>
 * {SSColl Array} colls parent collections without entries ordered by hierarchy
 */
var SSCollHierarchyGet = function(resultHandler, errorHandler, user, key, coll){
  
  var par                      = {};
  par[sSVarU.user]             = user;
  par[sSVarU.coll]             = coll;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("collHierarchyGet", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
};

/**
 * retrieve a list of all public collections given user could subscribe to
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @return {SSCollsUserCouldSubscribeGetRet} <br> 
 * {SSColl Array} colls public collections without entries the user doesnt own currently
 */
var SSCollsCouldSubscribeGet = function(resultHandler, errorHandler, user, key){
  
  var par                      = {};
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("collsCouldSubscribeGet", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
};

/**
 * retrieve users who can access given entity
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} entity entity to retrieve users for
 * @return {SSEntityUserEntityUsersGetRet} <br>
 * {SSEntity Array} users users allowed to access the entity
 */
var SSEntityEntityUsersGet = function(resultHandler, errorHandler, user, key, entity){
  
  var par                      = {};
  par[sSVarU.user]             = user;
  par[sSVarU.entity]           = entity;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("entityEntityUsersGet", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
};

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
 * share an entity directly with given users
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} entity entity to be shared
 * @param {URI Array} users user to share the entity with
 * @param {String} comment textual comment for sharing
 * @param {URI Array} circles circles to share with
 * @return {SSEntityUserShareRet} <br>
 * {SSUri} entity entity shared
 */
var SSEntityShare = function(
  resultHandler, 
errorHandler, 
user, 
key, 
entity, 
users, 
comment, 
circles){
  
  var par                      = {};
  par[sSVarU.user]             = user;
  par[sSVarU.entity]           = entity;
  par[sSVarU.key]              = key;

  if(!jSGlobals.isEmpty(users)){   par[sSVarU.users]         = users;}
  if(!jSGlobals.isEmpty(circles)){ par[sSVarU.circles]       = circles;}
  if(!jSGlobals.isEmpty(comment)){ par[sSVarU.comment]       = comment;}
  
  new SSJSONPOSTRequest("circleEntityShare", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
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