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
 * retrieve the authentication key and user's uri for credentials
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {String} label name of the user, e.g. 'hugo'
 * @param {String} password the user’s password
 * @return {SSAuthCheckCredRet} <br>
 * {String} key user's authentication token <br>
 * {URI} uri user's identifier in the system
 */
var SSAuthCheckCred = function(resultHandler, errorHandler, label, password){
  
  var par               = {};
  par[sSVarU.op]        = "authCheckCred";
  par[sSVarU.user]      = "mailto:dummyUser";
  par[sSVarU.key]       = "someKey";
  par[sSVarU.label]     = label;
  par[sSVarU.password]  = password;
  
  new SSJSONPOSTRequest("authCheckCred", par, resultHandler, errorHandler).send();
};

/**
 * retrieve activities from within a certain time frame
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {String Array} types of activities to be queried (optional)
 * @param {URI Array} users users which have been involved in activities (optional)
 * @param {URI Array} entities entities which have been involved in activities as targets (e.g. the target for a discussion) (optional)
 * @param {Long} startTime time frame start (optional)
 * @param {Long} endTime time frame end (optional)
 * @return {SSActivitiesUserGetRet} <br>
 * {SSActivity Array} activities activities for given query
 */
var SSActivitiesGet = function(resultHandler, errorHandler, user, key, types, users, entities, startTime, endTime){
  
  var par               = {};
  par[sSVarU.op]        = "activitiesGet";
  par[sSVarU.user]      = user;
  par[sSVarU.key]       = key;
  
  if(!jSGlobals.isEmpty(types)){           par[sSVarU.types]               = jSGlobals.commaSeparateStringArray(types);}
  if(!jSGlobals.isEmpty(users)){           par[sSVarU.users]               = jSGlobals.commaSeparateStringArray(users);}
  if(!jSGlobals.isEmpty(entities)){        par[sSVarU.entities]            = jSGlobals.commaSeparateStringArray(entities);}
  if(!jSGlobals.isEmpty(startTime)){       par[sSVarU.startTime]           = startTime;}
  if(!jSGlobals.isEmpty(endTime)){         par[sSVarU.endTime]             = endTime;}
  
  new SSJSONPOSTRequest("activitiesGet", par, resultHandler, errorHandler).send();
};

/**
 * retrieve all the user's collections given entity is in
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} entity entity searched for in user's collections
 * @return {SSCollsUserEntityIsInGetRet} <br>
 * {SSColl Array} colls user's collections the entity is in
 */
var SSCollsEntityIsInGet = function(resultHandler, errorHandler, user, key, entity){
  
  var par                = {};
  par[sSVarU.op]         = "collsEntityIsInGet";
  par[sSVarU.user]       = user;
  par[sSVarU.entity]     = entity;
  par[sSVarU.key]        = key;
  
  new SSJSONPOSTRequest("collsEntityIsInGet", par, resultHandler, errorHandler).send();
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
  par[sSVarU.op]         = "collCumulatedTagsGet";
  par[sSVarU.user]       = user;
  par[sSVarU.coll]       = coll;
  par[sSVarU.key]        = key;
  
  new SSJSONPOSTRequest("collCumulatedTagsGet", par, resultHandler, errorHandler).send();
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
  par[sSVarU.op]         = "collParentGet";
  par[sSVarU.user]       = user;
  par[sSVarU.coll]       = coll;
  par[sSVarU.key]        = key;
  
  new SSJSONPOSTRequest("collParentGet", par, resultHandler, errorHandler).send();
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
  par[sSVarU.op]         = "collRootGet";
  par[sSVarU.user]       = user;
  par[sSVarU.key]        = key;
  
  new SSJSONPOSTRequest("collRootGet", par, resultHandler, errorHandler).send();
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
  par[sSVarU.op]               = "collEntryAdd";
  par[sSVarU.user]             = user;
  par[sSVarU.coll]             = coll;
  par[sSVarU.label]            = label;
  par[sSVarU.key]              = key;
  
  if(!jSGlobals.isEmpty(addNewColl)){ par[sSVarU.addNewColl]       = addNewColl;}
  if(!jSGlobals.isEmpty(entry)){      par[sSVarU.entry]        = entry;}
  
  new SSJSONPOSTRequest("collEntryAdd", par, resultHandler, errorHandler).send();
};

/**
 * add existing collections or entities to a collection
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key 
 * @param {URI} coll collection to a sub-entity
 * @param {URI Array} entries entities to add
 * @param {String Array} labels collection item labels
 * @return {SSCollUserEntriesAddRet} <br>
 * {Boolean} worked whether adding worked
 */
var SSCollEntriesAdd = function(resultHandler, errorHandler, user, key, coll, entries, labels){
  
  var par                       = {};
  par[sSVarU.op]               = "collEntriesAdd";
  par[sSVarU.user]             = user;
  par[sSVarU.coll]             = coll;
  par[sSVarU.entries]          = jSGlobals.commaSeparateStringArray(entries);
  par[sSVarU.labels]           = jSGlobals.commaSeparateStringArray(labels);
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("collEntriesAdd", par, resultHandler, errorHandler).send();
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
  par[sSVarU.op]               = "collEntryChangePos";
  par[sSVarU.user]             = user;
  par[sSVarU.coll]             = coll;
  par[sSVarU.order]            = jSGlobals.commaSeparateStringArray(order);
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("collEntryChangePos", par, resultHandler, errorHandler).send();
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
  par[sSVarU.op]               = "collEntryDelete";
  par[sSVarU.user]             = user;
  par[sSVarU.coll]             = coll;
  par[sSVarU.entry]            = entry;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("collEntryDelete", par, resultHandler, errorHandler).send();
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
  par[sSVarU.op]               = "collEntriesDelete";
  par[sSVarU.user]             = user;
  par[sSVarU.coll]             = coll;
  par[sSVarU.entries]          = jSGlobals.commaSeparateStringArray(entries);
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("collEntriesDelete", par, resultHandler, errorHandler).send();
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
  par[sSVarU.op]               = "collWithEntries";
  par[sSVarU.user]             = user;
  par[sSVarU.coll]             = coll;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("collWithEntries", par, resultHandler, errorHandler).send();
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
  par[sSVarU.op]               = "collsWithEntries";
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("collsWithEntries", par, resultHandler, errorHandler).send();
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
  par[sSVarU.op]               = "collHierarchyGet";
  par[sSVarU.user]             = user;
  par[sSVarU.coll]             = coll;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("collHierarchyGet", par, resultHandler, errorHandler).send();
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
  par[sSVarU.op]               = "collsCouldSubscribeGet";
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("collsCouldSubscribeGet", par, resultHandler, errorHandler).send();
};

/**
 * add a textual comment/answer/opinion to a discussion [for given entity] or create a new discussion
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} disc discussion to add an entry for (optional in case of a new discussion)
 * @param {URI} entity entity to start a discussion for (optional)
 * @param {String} entry text for the comment/answer/opinion (optional in case of a new discussion)
 * @param {Boolean} addNewDisc whether a new disc should be created (optional)
 * @param {String} type discussion type: disc, qa or chat (optional in case of an existing discussion)
 * @param {String} label discussion name (optional in case of an existing discussion)
 * @param {String} description describes the discussion in more detail (optional, except in case of a new discussion of type qa)
 * @param {URI Array} users provides users to share this discussion with upon creation of a new discussion (optional, but works only for a new discussion)
 * @param {URI Array} entities provides entities to be attached either to corresponding discussion if new discussion to be added or to respective entry in the other case (optional)
 * @return {SSDiscUserEntryAddRet} <br>
 * {SSUri} disc discussion 
 * {SSUri} discEntry discussion entry
 */
var SSDiscEntryAdd = function(
  resultHandler,
errorHandler,
user, 
key, 
disc, 
entity, 
entry, 
addNewDisc,
type,
label, 
description,
users,
entities){
  
  var par                = {};
  par[sSVarU.op]         = "discEntryAdd";
  par[sSVarU.user]       = user;
  par[sSVarU.key]        = key;
  
  if(!jSGlobals.isEmpty(disc)){         par[sSVarU.disc]        = disc;}
  if(!jSGlobals.isEmpty(entity)){       par[sSVarU.entity]      = entity;}
  if(!jSGlobals.isEmpty(entry)){        par[sSVarU.entry]       = entry;}
  if(!jSGlobals.isEmpty(addNewDisc)){   par[sSVarU.addNewDisc]  = addNewDisc;}
  if(!jSGlobals.isEmpty(type)){         par[sSVarU.type]        = type;}
  if(!jSGlobals.isEmpty(label)){        par[sSVarU.label]       = label;}
  if(!jSGlobals.isEmpty(description)){  par[sSVarU.description] = description;}
  if(!jSGlobals.isEmpty(users)){        par[sSVarU.users]       = jSGlobals.commaSeparateStringArray(users);}
  if(!jSGlobals.isEmpty(entities)){     par[sSVarU.entities]    = jSGlobals.commaSeparateStringArray(entities);}
  
  new SSJSONPOSTRequest("discEntryAdd", par, resultHandler, errorHandler).send();
};

/**
 * retrieve the discussion with its entries
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} disc discussion to retrieve
 * @return {SSDiscUserWithEntriesRet} <br>
 * {SSDisc} disc discussion with its entries
 */
var SSDiscWithEntriesGet = function(resultHandler, errorHandler, user, key, disc){
  
  var par                     = {};
  par[sSVarU.op]              = "discWithEntriesGet";
  par[sSVarU.user]            = user;
  par[sSVarU.disc]            = disc;
  par[sSVarU.maxEntries]      = 10;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("discWithEntriesGet", par, resultHandler, errorHandler).send();
};

/**
 * retrieve all discussions given user is allowed to see
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @return {SSDiscsAllGetRet} <br>
 * {SSDisc Array} discs discussions without entries for given user
 */
var SSDiscsAllGet = function(resultHandler, errorHandler, user, key){
  
  var par                     = {};
  par[sSVarU.op]              = "discsAllGet";
  par[sSVarU.user]            = user;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("discsAllGet", par, resultHandler, errorHandler).send();
};

/**
 * remove a discussion from given user
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} disc the disc to remove
 * @return {SSDiscUserRemoveRet} <br>
 * {SSUri} disc removed discussion
 */
var SSDiscRemove = function(resultHandler, errorHandler, user, key, disc){
  
  var par                     = {};
  par[sSVarU.op]              = "discRemove";
  par[sSVarU.user]            = user;
  par[sSVarU.disc]            = disc;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("discRemove", par, resultHandler, errorHandler).send();
};

/**
 * retrieve discussions for a certain entity
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} entity entity to retrieve discussions for
 * @return {SSDiscUserDiscURIsForTargetGetRet} <br>
 * {SSUri Array} discUris discussion given entity is target of
 */
var SSDiscURIsForTargetGet = function(resultHandler, errorHandler, user, key, entity){
  
  var par                     = {};
  par[sSVarU.op]              = "discURIsForTargetGet";
  par[sSVarU.user]            = user;
  par[sSVarU.entity]          = entity;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("discURIsForTargetGet", par, resultHandler, errorHandler).send();
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
  par[sSVarU.op]               = "entityEntityUsersGet";
  par[sSVarU.user]             = user;
  par[sSVarU.entity]           = entity;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("entityEntityUsersGet", par, resultHandler, errorHandler).send();
};

/**
 * retrieve a certain circle 
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} circle the circle to retrieve
 * @return {SSEntityUserCircleGetRet} <br>
 * {SSEntityCircle} circle requested
 */
var SSEntityCircleGet = function(resultHandler, errorHandler, user, key, circle){
  
  var par                      = {};
  par[sSVarU.op]               = "entityCircleGet";
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  par[sSVarU.circle]           = circle;
  
  new SSJSONPOSTRequest("entityCircleGet", par, resultHandler, errorHandler).send();
};

/**
 * retrieve circles the user is in
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @return {SSEntityUserCirclesGetRet} <br>
 * {SSEntityCircle Array} circles all user-generated circles the user is in
 */
var SSEntityUserCirclesGet = function(resultHandler, errorHandler, user, key){
  
  var par                      = {};
  par[sSVarU.op]               = "entityUserCirclesGet";
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("entityUserCirclesGet", par, resultHandler, errorHandler).send();
};

/**
 * add given entities to a user-generated circle
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} circle circle to add entities to
 * @param {URI Array} entities entities to add
 * @return {SSEntityUserEntitiesToCircleAddRet} <br> 
 * {SSUri} circle circle of entities added
 */
var SSEntityEntitiesToCircleAdd = function(resultHandler, errorHandler, user, key, circle, entities){
  
  var par                      = {};
  par[sSVarU.op]               = "entityEntitiesToCircleAdd";
  par[sSVarU.user]             = user;
  par[sSVarU.circle]           = circle;
  par[sSVarU.entities]         = jSGlobals.commaSeparateStringArray(entities);
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("entityEntitiesToCircleAdd", par, resultHandler, errorHandler).send();
};

/**
 * add given users to a user-generated circle
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} circle circle to add users to
 * @param {Array} users users to add
 * @return {SSEntityUserUsersToCircleAddRet} <br>
 * {SSUri} circle circle of users added
 */
var SSEntityUsersToCircleAdd = function(resultHandler, errorHandler, user, key, circle, users){
  
  var par                      = {};
  par[sSVarU.op]               = "entityUsersToCircleAdd";
  par[sSVarU.user]             = user;
  par[sSVarU.circle]           = circle;
  par[sSVarU.users]            = jSGlobals.commaSeparateStringArray(users);
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("entityUsersToCircleAdd", par, resultHandler, errorHandler).send();
};

/**
 * create a circle and add users and entities to
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {String} label circle name
 * @param {Array} entities entities to add
 * @param {Array} users users to add
 * @param {String} description textual annotation
 * @return {SSEntityUserCircleCreateRet} <br>
 * {SSUri} circle circle created
 */
var SSEntityCircleCreate = function(resultHandler, errorHandler, user, key, label, entities, users, description){
  
  var par                      = {};
  par[sSVarU.op]               = "entityCircleCreate";
  par[sSVarU.user]             = user;
  par[sSVarU.type]             = sSGlobals.circleTypeGroup;
  par[sSVarU.label]            = label;
  par[sSVarU.key]              = key;
  
  if(!jSGlobals.isEmpty(entities)){    par[sSVarU.entities]      = jSGlobals.commaSeparateStringArray(entities);}
  if(!jSGlobals.isEmpty(users)){       par[sSVarU.users]         = jSGlobals.commaSeparateStringArray(users);}
  if(!jSGlobals.isEmpty(description)){ par[sSVarU.description]   = description;}
  
  new SSJSONPOSTRequest("entityCircleCreate", par, resultHandler, errorHandler).send();
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
  par[sSVarU.op]               = "entityCopy";
  par[sSVarU.user]             = user;
  par[sSVarU.users]            = jSGlobals.commaSeparateStringArray(users);
  par[sSVarU.entity]           = entity;
  par[sSVarU.key]              = key;
  
  if(!jSGlobals.isEmpty(entitiesToExclude)){ par[sSVarU.entitiesToExclude]   = jSGlobals.commaSeparateStringArray(entitiesToExclude);}
  if(!jSGlobals.isEmpty(comment)){           par[sSVarU.comment]             = comment;}
  
  new SSJSONPOSTRequest("entityCopy", par, resultHandler, errorHandler).send();
};

/**
 * set an entity public (make it accessible for everyone)
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} entity entity to make public
 * @return {SSEntityUserPublicSetRet} <br>
 * {SSUri} entity entity made public
 */
var SSEntityPublicSet = function(resultHandler, errorHandler, user, key, entity){
  
  var par                      = {};
  par[sSVarU.op]               = "entityPublicSet";
  par[sSVarU.user]             = user;
  par[sSVarU.entity]           = entity;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("entityPublicSet", par, resultHandler, errorHandler).send();
};

/**
 * share an entity directly with given users
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} entity entity to be shared
 * @param {Array} users user to share the entity with
 * @param {String} comment textual comment for sharing
 * @return {SSEntityUserShareRet} <br>
 * {SSUri} circle system-generated circle representing the share
 */
var SSEntityShare = function(resultHandler, errorHandler, user, key, entity, users, comment){
  
  var par                      = {};
  par[sSVarU.op]               = "entityShare";
  par[sSVarU.user]             = user;
  par[sSVarU.entity]           = entity;
  par[sSVarU.users]            = jSGlobals.commaSeparateStringArray(users);
  par[sSVarU.key]              = key;
  
  if(!jSGlobals.isEmpty(comment)){ par[sSVarU.comment]       = comment;}
  
  new SSJSONPOSTRequest("entityShare", par, resultHandler, errorHandler).send();
};

/**
 * remove certain attached attributes from an entity
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} entity entity to be removed 
 * @param {Boolean} removeUserTags whether the user's tags should be removed from the entity
 * @param {Boolean} removeUserRatings whether the user's ratings should be removed from the entity
 * @param {Boolean} removeFromUserColls whether the entity should be removed from all the user's collections
 * @param {Boolean} removeUserLocations whether locations added by the user should be removed from the entity
 * @return {SSEntityUserDirectlyAdjoinedEntitiesRemoveRet} <br>
 * {SSUri} entity entity for which attributes have been removed
 */
var SSEntityDirectlyAdjoinedEntitiesRemove = function(
  resultHandler, 
errorHandler, 
user, 
key, 
entity, 
removeUserTags, 
removeUserRatings, 
removeFromUserColls, 
removeUserLocations){
  
  var par                         = {};
  par[sSVarU.op]                  = "entityDirectlyAdjoinedEntitiesRemove";
  par[sSVarU.user]                = user;
  par[sSVarU.entity]              = entity;
  par[sSVarU.removeUserTags]      = removeUserTags;
  par[sSVarU.removeUserRatings]   = removeUserRatings;
  par[sSVarU.removeFromUserColls] = removeFromUserColls;
  par[sSVarU.removeUserLocations] = removeUserLocations;
  par[sSVarU.key]                 = key;
  
  new SSJSONPOSTRequest("entityDirectlyAdjoinedEntitiesRemove", par, resultHandler, errorHandler).send();
};

/**
 * retrieve general attributes for given entity
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key 
 * @param {URI} entity entity to retrieve information for
 * @return {SSEntityUserGetRet} <br>
 * {SSEntity} entity entity requested 
 */
var SSEntityGet = function(resultHandler, errorHandler, user, key, entity){
  
  var par                     = {};
  par[sSVarU.op]              = "entityGet";
  par[sSVarU.user]            = user;
  par[sSVarU.entity]          = entity;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("entityGet", par, resultHandler, errorHandler).send();
};

/**
 * updates given properties for an entity
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} entity entity to update
 * @param {String} label entity's updated name
 * @param {String} description entity's updated description
 * @return {SSEntityUpdateRet} <br>
 * {SSUri} entity entity updated
 */
var SSEntityUpdate = function(resultHandler, errorHandler, user, key, entity, label, description){
  
  var par                     = {};
  par[sSVarU.op]              = "entityUpdate";
  par[sSVarU.user]            = user;
  par[sSVarU.entity]          = entity;
  par[sSVarU.key]             = key;
  
  if(!jSGlobals.isEmpty(label)){          par[sSVarU.label]             = label;}
  if(!jSGlobals.isEmpty(description)){    par[sSVarU.description]       = description;}
  
  new SSJSONPOSTRequest("entityUpdate", par, resultHandler, errorHandler).send();
};

/**
 * retrieve more detailed information for given entity
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} entity entity to get details for
 * @param {Boolean} getTags whether tags for the entity should be delivered
 * @param {Boolean} getOverallRating whether the overall rating for the entity should be delivered
 * @param {Boolean} getDiscs whether the uris of discussions about the entity should be returned
 * @param {Boolean} getUEs whether user events for given user and entity should be included
 * @param {Boolean} getThumb whether a thumbnail for files should be included
 * @param {Boolean} getFlags whether flags for this user and entity should be included
 * @return {SSEntityDescGetRet} <br>
 * {SSEntityDescA} desc entity details with respect to the type of the entity and chosen request parameters
 */
var SSEntityDescGet = function(
  resultHandler, 
errorHandler, 
user, 
key, 
entity, 
getTags,
getOverallRating, 
getDiscs, 
getUEs, 
getThumb, 
getFlags){
  
  var par                         = {};
  par[sSVarU.op]                  = "entityDescGet";
  par[sSVarU.user]                = user;
  par[sSVarU.entity]              = entity;
  par[sSVarU.key]                 = key;
  
  if(!jSGlobals.isEmpty(getTags)){          par[sSVarU.getTags]             = getTags;}
  if(!jSGlobals.isEmpty(getOverallRating)){ par[sSVarU.getOverallRating]    = getOverallRating;}
  if(!jSGlobals.isEmpty(getDiscs)){         par[sSVarU.getDiscs]            = getDiscs;}
  if(!jSGlobals.isEmpty(getUEs)){           par[sSVarU.getUEs]              = getUEs;}
  if(!jSGlobals.isEmpty(getThumb)){         par[sSVarU.getThumb]            = getThumb;}
  if(!jSGlobals.isEmpty(getFlags)){         par[sSVarU.getFlags]            = getFlags;}
  
  new SSJSONPOSTRequest("entityDescGet", par, resultHandler, errorHandler).send();
};

/**
 * retrieve a file's extension
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} file file to retrieve the extension for
 * @return {SSFileExtGetRet} <br>
 * {String} fileExt extension for the file
 */
var SSFileExtGet = function(resultHandler, errorHandler, user, key, file){
  
  var par                     = {};
  par[sSVarU.op]              = "fileExtGet";
  par[sSVarU.user]            = user;
  par[sSVarU.file]            = file;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("fileExtGet", par, resultHandler, errorHandler).send();
};

/**
 * query whether given file can be downloaded with write access
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} file file to be downloaded with write access
 * @return {SSFileCanWriteRet} <br>
 * {String} fileUriOrId file in question
 * {Boolean} canWrite whether file can be downloaded in write mode
 */
var SSFileCanWrite = function(resultHandler, errorHandler, user, key, file){
  
  var par                     = {};
  par[sSVarU.op]              = "fileCanWrite";
  par[sSVarU.user]            = user;
  par[sSVarU.file]            = file;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("fileCanWrite", par, resultHandler, errorHandler).send();
};

/**
 * set user being writer or reaader for given file
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} file file to set whether user is writer or reader
 * @param {Boolean} write whether user shall be writer
 * @return {SSFileSetReaderOrWriterRet} <br>
 * {String} fileUriOrId file for which user has been set to writer or reader
 * {Boolean} worked whether request worked
 */
var SSFileSetReaderOrWriter = function(resultHandler, errorHandler, user, key, file, write){
  
  var par                     = {};
  par[sSVarU.op]              = "fileSetReaderOrWriter";
  par[sSVarU.user]            = user;
  par[sSVarU.file]            = file;
  par[sSVarU.write]           = write;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("fileSetReaderOrWriter", par, resultHandler, errorHandler).send();
};

/**
 * retrieve files user currently could replace when uploading respective file again as he is writer
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @return {SSFileGetEditingFilesRet} <br>
 * {String Array} files files user is able to replace currently
 * {String Array} labels file labels
 */
var SSFileUserFileWrites = function(resultHandler, errorHandler, user, key){
  
  var par                     = {};
  par[sSVarU.op]              = "fileUserFileWrites";
  par[sSVarU.user]            = user;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("fileUserFileWrites", par, resultHandler, errorHandler).send();
};

/**
 * retrieve number of minutes left user is allowed to replace / re-upload a file
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} file file to be re-uploaded
 * @return {SSFileWritingMinutesLeftRet} <br> 
 * {SSUri} file file for which remaining minutes retrieved
 * {Integer} writingMinutesLeft minutes left to re-upload file downloaded with write permission
 */
var SSFileWritingMinutesLeft = function(resultHandler, errorHandler, user, key, file){
  
  var par                     = {};
  par[sSVarU.op]              = "fileWritingMinutesLeft";
  par[sSVarU.user]            = user;
  par[sSVarU.file]            = file;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("fileWritingMinutesLeft", par, resultHandler, errorHandler).send();
};

/**
 * retrieve the JSON-LD description for a datatype from within SSS
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} uri path from which the JSON-LD description can be retrieved
 * @return {JSONLD} jsonLD JSON-LD description for given datatype
 */
var SSJsonLD = function(resultHandler, errorHandler, uri){
  
  this.resultHandler         = resultHandler;
  this.errorHandler          = errorHandler;
  
  var xhr = new XMLHttpRequest();
  
  xhr.onload = (function(thisRef){ return function(){
      
      if(
        this.readyState    !== 4   ||
        this.status        !== 200){
        return;
      }
      
      new SSGlobals().onMessage(thisRef.resultHandler, thisRef.errorHandler, jSGlobals.parseJson(this.response), "jsonLD");
    };})(this);
  
  xhr.open (sSGlobals.httpMethGET, uri, true);
  xhr.send ();
};

/**
 * download a file
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} file file to be downloaded
 * @return {Blob} binary file
 */
var SSFileDownload = function(resultHandler, errorHandler, user, key, file){
  
  this.resultHandler          = resultHandler;
  
  var par                     = {};
  var xhr                     = new XMLHttpRequest(); 
  
  xhr.responseType            = sSGlobals.mimeTypeBlob;
  par[sSVarU.op]              = "fileDownload";
  par[sSVarU.user]            = user;
  par[sSVarU.file]            = file;
  par[sSVarU.key]             = key;
  
  xhr.onload = (function(thisRef){ return function(){
      
      if(
        this.readyState    !== 4   ||
        this.status        !== 200 ||
        this.response.type !== sSGlobals.mimeTypeApplicationOctetStream){
        
        thisRef.errorHandler(this.response);
        return;
      }
      
      thisRef.resultHandler(this.response);
    };})(this);
  
  xhr.open             (sSGlobals.httpMethPOST, sSGlobals.hostREST + "fileDownload" + jSGlobals.slash, true);
  xhr.setRequestHeader (sSGlobals.contentType, sSGlobals.mimeTypeApplicationJson);
  xhr.send             (JSON.stringify(par));
};

/**
 * upload a file
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {File} fileHandle HTML file handle
 * @return {SSFileUploadRet} <br>
 * {SSUri} file identifier for the uploaded file
 */
var SSFileUpload = function(resultHandler, errorHandler, user, key, fileHandle){
  
  this.resultHandler         = resultHandler;
  this.errorHandler          = errorHandler;
  this.label                 = fileHandle.name;
  
  var par                    = {};
  var xhr                    = new XMLHttpRequest();
  var formData               = new FormData();
  
  par[sSVarU.op]              = "fileUpload";
  par[sSVarU.user]            = user;
  par[sSVarU.mimeType]        = fileHandle.type;
  par[sSVarU.label]           = fileHandle.name;
  par[sSVarU.key]             = key;
  
  formData.append(sSVarU.fileHandle, fileHandle);
  formData.append(sSVarU.jsonRequ, JSON.stringify(par));
  
  this.myResultHandler = (function(thisRef){ return function(result){
      thisRef.resultHandler(result.file, thisRef.label);
    };})(this);
  
  xhr.onload = (function(thisRef){ return function(){
      
      if(
        this.readyState    !== 4   ||
        this.status        !== 200){
        return;
      }
      
      new SSGlobals().onMessage(thisRef.myResultHandler, thisRef.errorHandler, jSGlobals.parseJson(this.response), "fileUpload");
    };})(this);
  
  xhr.open (sSGlobals.httpMethPOST, sSGlobals.hostREST + "fileUpload" + jSGlobals.slash, true);
  xhr.send (formData);
};

/**
 * replace a file with a newer version
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} file file to be replaced
 * @param {File} fileHandle HTML file handle
 * @return {SSFileReplaceRet} <br>
 * {SSUri} file replaced file identifier
 */
var SSFileReplace = function(resultHandler, errorHandler, user, key, file, fileHandle){
  
  this.resultHandler         = resultHandler;
  this.errorHandler          = errorHandler;
  
  var par                    = {};
  var xhr                    = new XMLHttpRequest();
  var formData               = new FormData();
  
  par[sSVarU.op]              = "fileReplace";
  par[sSVarU.user]            = user;
  par[sSVarU.file]            = file;
  par[sSVarU.key]             = key;
  
  formData.append(sSVarU.fileHandle, fileHandle);
  formData.append(sSVarU.jsonRequ, JSON.stringify(par));
  
  this.myResultHandler = (function(thisRef){ return function(result){
      thisRef.resultHandler(result.file);
    };})(this);
  
  xhr.onload = (function(thisRef){ return function(){
      
      if(
        this.readyState    !== 4   ||
        this.status        !== 200){
        return;
      }
      
      new SSGlobals().onMessage(thisRef.myResultHandler, thisRef.errorHandler, jSGlobals.parseJson(this.response), "fileReplace");
    };})(this);
  
  xhr.open (sSGlobals.httpMethPOST, sSGlobals.hostREST + "fileReplace" + jSGlobals.slash, true);
  xhr.send (formData);
};

/**
 * set the current version of a learning episode for a user
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} learnEpVersion learning episode version to set for the user
 * @return {SSLearnEpVersionCurrentSetRet} <br>
 * {SSUri} learnEpVersion current learning episode version
 */
var SSLearnEpVersionCurrentSet = function(resultHandler, errorHandler, user, key, learnEpVersion){
  
  var par                       = {};
  par[sSVarU.op]                = "learnEpVersionCurrentSet";
  par[sSVarU.user]              = user;
  par[sSVarU.learnEpVersion]    = learnEpVersion;
  par[sSVarU.key]               = key;
  
  new SSJSONPOSTRequest("learnEpVersionCurrentSet", par, resultHandler, errorHandler).send();
};

/**
 * retrieve the current learning episode version
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @return {SSLearnEpVersionCurrentGetRet} <br>
 * {SSLearnEpVersion} learnEpVersion current learning episode version
 */
var SSLearnEpVersionCurrentGet = function(resultHandler, errorHandler, user, key){
  
  var par                       = {};
  par[sSVarU.op]                = "learnEpVersionCurrentGet";
  par[sSVarU.user]              = user;
  par[sSVarU.key]               = key;
  
  new SSJSONPOSTRequest("learnEpVersionCurrentGet", par, resultHandler, errorHandler).send();
};

/**
 * set the start and end time for a learning episode version
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} learnEpVersion learning episode version to set timeline state for
 * @param {Long} startTime start time of the current timeline
 * @param {Long} endTime end time of the current timeline
 * @return {SSLearnEpVersionSetTimelineStateRet} <br>
 * {SSUri} learnEpTimelineStateUri learning episode version timeline state
 */
var SSLearnEpVersionSetTimelineState = function(resultHandler, errorHandler, user, key, learnEpVersion, startTime, endTime){
  
  var par                       = {};
  par[sSVarU.op]                = "learnEpVersionSetTimelineState";
  par[sSVarU.user]              = user;
  par[sSVarU.learnEpVersion]    = learnEpVersion;
  par[sSVarU.startTime]         = startTime;
  par[sSVarU.endTime]           = endTime;
  par[sSVarU.key]               = key;
  
  new SSJSONPOSTRequest("learnEpVersionSetTimelineState", par, resultHandler, errorHandler).send();
};

/**
 * retrieve the timeline state for given learning episode version
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} learnEpVersion learning episode version to retrieve the timeline state for
 * @return {SSLearnEpVersionGetTimelineStateRet} <br>
 * {SSLearnEpTimelineState} learnEpTimelineState timeline state for given learning episode version
 */
var SSLearnEpVersionGetTimelineState = function(resultHandler, errorHandler, user, key, learnEpVersion){
  
  var par                       = {};
  par[sSVarU.op]                = "learnEpVersionGetTimelineState";
  par[sSVarU.user]              = user;
  par[sSVarU.learnEpVersion]    = learnEpVersion;
  par[sSVarU.key]               = key;
  
  new SSJSONPOSTRequest("learnEpVersionGetTimelineState", par, resultHandler, errorHandler).send();
};

/**
 * remove a learning episode visual circle (from all learning episodes)
 * @description currently a learning episode circle gets not handled as an entity as such, but exists for learning episodes only
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} learnEpCircle learning episode circle identifier
 * @return {SSLearnEpVersionRemoveCircleRet} <br>
 * {Boolean} worked whether deletion was successful
 */
var SSLearnEpVersionRemoveCircle = function(resultHandler, errorHandler, user, key, learnEpCircle){
  
  var par                      = {};
  par[sSVarU.op]               = "learnEpVersionRemoveCircle";
  par[sSVarU.user]             = user;
  par[sSVarU.learnEpCircle]    = learnEpCircle;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("learnEpVersionRemoveCircle", par, resultHandler, errorHandler).send();
};

/**
 * remove a learning episode entity (from all learning episodes)
 * @description currently a learning episode entity represents a general entity wrapped for learning episodes, hence deletion only affects learning episodes
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} learnEpEntity learning episode entity identifier
 * @return {SSLearnEpVersionRemoveEntityRet} <br>
 * {Boolean} whether deletion was successful
 */
var SSLearnEpVersionRemoveEntity = function(resultHandler, errorHandler, user, key, learnEpEntity){
  
  var par                      = {};
  par[sSVarU.op]               = "learnEpVersionRemoveEntity";
  par[sSVarU.user]             = user;
  par[sSVarU.learnEpEntity]    = learnEpEntity;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("learnEpVersionRemoveEntity", par, resultHandler, errorHandler).send();
};

/**
 * update given attributes of a learning episode circle
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} learnEpCircle learning episode circle to be updated
 * @param {String} label learning episode circle name
 * @param {Integer} xLabel x coordinate for the circle name
 * @param {Integer} yLabel y coordinate for the circle name
 * @param {Integer} xR 
 * @param {Integer} yR 
 * @param {Integer} xC 
 * @param {Integer} yC 
 * @return {SSLearnEpVersionUpdateCircleRet} <br>
 * {Boolean} worked whether update was successful
 */
var SSLearnEpVersionUpdateCircle = function(
  resultHandler, 
errorHandler, 
user, 
key, 
learnEpCircle, 
label, 
xLabel, 
yLabel, 
xR, 
yR, 
xC, 
yC){
  
  var par                      = {};
  par[sSVarU.op]               = "learnEpVersionUpdateCircle";
  par[sSVarU.user]             = user;
  par[sSVarU.learnEpCircle]    = learnEpCircle;
  par[sSVarU.key]              = key;
  
  if(!jSGlobals.isEmpty(label)){     par[sSVarU.label]       = label;}
  if(!jSGlobals.isEmpty(xLabel)){    par[sSVarU.xLabel]      = xLabel;}
  if(!jSGlobals.isEmpty(yLabel)){    par[sSVarU.yLabel]      = yLabel;}
  if(!jSGlobals.isEmpty(xR)){        par[sSVarU.xR]          = xR;}
  if(!jSGlobals.isEmpty(yR)){        par[sSVarU.yR]          = yR;}
  if(!jSGlobals.isEmpty(xC)){        par[sSVarU.xC]          = xC;}
  if(!jSGlobals.isEmpty(yC)){        par[sSVarU.yC]          = yC;}
  if(!jSGlobals.isEmpty(yC)){        par[sSVarU.yC]          = yC;}
  
  new SSJSONPOSTRequest("learnEpVersionUpdateCircle", par, resultHandler, errorHandler).send();
};

/**
 * update given attributes of a learning episode entity
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} learnEpEntity learning episode entity identifier
 * @param {URI} entity identifier for the entity wrapped in this learning episode entity
 * @param {Integer} x x coordinate for this entity
 * @param {Integer} y y coordinate for this entity
 * @return {SSLearnEpVersionUpdateEntityRet} <br>
 * {Boolean} worked whether update was successful
 */
var SSLearnEpVersionUpdateEntity = function(
  resultHandler,
errorHandler, 
user,
key, 
learnEpEntity, 
entity, 
x, 
y){
  
  var par                      = {};
  par[sSVarU.op]               = "learnEpVersionUpdateEntity";
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  if(!jSGlobals.isEmpty(learnEpEntity)){   par[sSVarU.learnEpEntity] = learnEpEntity;}
  if(!jSGlobals.isEmpty(entity)){          par[sSVarU.entity]        = entity;}
  if(!jSGlobals.isEmpty(x)){               par[sSVarU.x]             = x;}
  if(!jSGlobals.isEmpty(y)){               par[sSVarU.y]             = y;}
  
  new SSJSONPOSTRequest("learnEpVersionUpdateEntity", par, resultHandler, errorHandler).send();
};

/**
 * create a learning episode
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {String} label episode label
 * @param {String} description episode description
 * @return {SSLearnEpCreateRet} <br>
 * {SSUri} learnEp learning episode created
 */
var SSLearnEpCreate = function(resultHandler, errorHandler, user, key, label, description){
  
  var par                      = {};
  par[sSVarU.op]               = "learnEpCreate";
  par[sSVarU.user]             = user;
  par[sSVarU.label]            = label;
  par[sSVarU.key]              = key;
  
  if(!jSGlobals.isEmpty(description)){  par[sSVarU.description]    = description;}
  
  new SSJSONPOSTRequest("learnEpCreate", par, resultHandler, errorHandler).send();
};

/**
 * create a version for giving learning episode
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} learnEp learning episode to create a new version for
 * @return {SSLearnEpVersionCreateRet} <br>
 * {SSUri} learnEpVersion learning episode version created
 */
var SSLearnEpVersionCreate = function(resultHandler, errorHandler, user, key, learnEp){
  
  var par                      = {};
  par[sSVarU.op]               = "learnEpVersionCreate";
  par[sSVarU.user]             = user;
  par[sSVarU.learnEp]          = learnEp;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("learnEpVersionCreate", par, resultHandler, errorHandler).send();
};

/**
 * add a new circle to given learning episode version 
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key 
 * @param {URI} learnEpVersion learning episode version to add a circle for
 * @param {String} label learning episode circle name
 * @param {Integer} xLabel x coordinate for the circle name
 * @param {Integer} yLabel y coordinate for the circle name
 * @param {Integer} xR 
 * @param {Integer} yR 
 * @param {Integer} xC 
 * @param {Integer} yC 
 * @return {SSLearnEpVersionAddCircleRet} <br>
 * {SSUri} learnEpCircle learning episode version circle added
 */
var SSLearnEpVersionAddCircle = function(
  resultHandler, 
errorHandler, 
user, 
key, 
learnEpVersion, 
label, 
xLabel, 
yLabel, 
xR, 
yR, 
xC, 
yC){
  
  var par                       = {};
  par[sSVarU.op]                = "learnEpVersionAddCircle";
  par[sSVarU.user]              = user;
  par[sSVarU.learnEpVersion]    = learnEpVersion;
  par[sSVarU.label]             = label;
  par[sSVarU.xLabel]            = xLabel;
  par[sSVarU.yLabel]            = yLabel;
  par[sSVarU.xR]                = xR;
  par[sSVarU.yR]                = yR;
  par[sSVarU.xC]                = xC;
  par[sSVarU.yC]                = yC;
  par[sSVarU.key]               = key;
  
  new SSJSONPOSTRequest("learnEpVersionAddCircle", par, resultHandler, errorHandler).send();
};

/**
 * add a new entity to a learning episode version
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} learnEpVersion learning episode version to a add an entity to
 * @param {URI} entity identifier for the entity wrapped in this learning episode entity
 * @param {Integer} x x coordinate for this entity
 * @param {Integer} y y coordinate for this entity
 * @return {SSLearnEpVersionAddEntityRet} <br>
 * {SSUri} learnEpEntiyUri learning episode version entity added
 */
var SSLearnEpVersionAddEntity = function(
  resultHandler, 
errorHandler, 
user, 
key, 
learnEpVersion, 
entity, 
x, 
y){
  
  var par                       = {};
  par[sSVarU.op]                = "learnEpVersionAddEntity";
  par[sSVarU.user]              = user;
  par[sSVarU.learnEpVersion]    = learnEpVersion;
  par[sSVarU.entity]            = entity;
  par[sSVarU.x]                 = x;
  par[sSVarU.y]                 = y;
  par[sSVarU.key]               = key;
  
  new SSJSONPOSTRequest("learnEpVersionAddEntity", par, resultHandler, errorHandler).send();
};

/**
 * retrieve given learning episode versio
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} learnEpVersion learning episode version to retrieve
 * @return {SSLearnEpVersionGetRet} <br>
 * {SSLearnEpVersion} learnEpVersion learning episode version in question
 */
var SSLearnEpVersionGet = function(resultHandler, errorHandler, user, key, learnEpVersion){
  
  var par                       = {};
  par[sSVarU.op]                = "learnEpVersionGet";
  par[sSVarU.user]              = user;
  par[sSVarU.learnEpVersion]    = learnEpVersion;
  par[sSVarU.key]               = key;
  
  new SSJSONPOSTRequest("learnEpVersionGet", par, resultHandler, errorHandler).send();
};

/**
 * retrieve all versions for given learning episode
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} learnEp learning episode to retrieve versions for
 * @return {SSLearnEpVersionsGetRet} <br>
 * {SSLearnEpVersion Array} learnEpVersions learning episode's versions
 */
var SSLearnEpVersionsGet = function(resultHandler, errorHandler, user, key, learnEp){
  
  var par                       = {};
  par[sSVarU.op]                = "learnEpVersionsGet";
  par[sSVarU.user]              = user;
  par[sSVarU.learnEp]           = learnEp;
  par[sSVarU.key]               = key;
  
  new SSJSONPOSTRequest("learnEpVersionsGet", par, resultHandler, errorHandler).send();
};

/**
 * retrieve all learning episodes for given user
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @return {SSLearnEpsGetRet} <br>
 * {SSLearnEp Array} learnEps learning episodes for user
 */
var SSLearnEpsGet = function(resultHandler, errorHandler, user, key){
  
  var par                       = {};
  par[sSVarU.op]                = "learnEpsGet";
  par[sSVarU.user]              = user;
  par[sSVarU.key]               = key;
  
  new SSJSONPOSTRequest("learnEpsGet", par, resultHandler, errorHandler).send();
};

/**
 * add a textual location for a given entity
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} entity entity to add the location for
 * @param {String} location textual representation of a location to add
 * @return {SSLocationAddRet} <br>
 * {SSUri} uri entity for which a location was added
 */
var SSLocationAdd = function(resultHandler, errorHandler, user, key, entity, location){
  
  var par                     = {};
  par[sSVarU.op]              = "locationAdd";
  par[sSVarU.user]            = user;
  par[sSVarU.entity]          = entity;
  par[sSVarU.location]        = location;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("locationAdd", par, resultHandler, errorHandler).send();
};

/**
 * retrieve locations for given entity
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} entity entity to get its locations for
 * @return {SSLocationsGetRet} <br>
 * {String Array} locations entity's locations
 */
var SSLocationsGet = function(resultHandler, errorHandler, user, key, entity){
  
  var par                     = {};
  par[sSVarU.op]              = "locationsGet";
  par[sSVarU.user]            = user;
  par[sSVarU.entity]          = entity;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("locationsGet", par, resultHandler, errorHandler).send();
};

/**
 * retrieve automatically usage-based modeled details for given entity
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} entity entity to retrieve usage based details for
 * @return {SSModelUEResourceDetailsRet} <br>
 * {SSUri} uri entity identifier
 * {SSUri} recentArtifact most recent entity the entity in question dealt with
 * {String} recentTopic most recent topic (i.e. tag) the entity dealt with
 * {SSUri Array} relatedPersons usage-based related users for this entity
 * {SSUri Array} editors usage-based editors for this entity                                  
 * {SSUri Array} contributedResources usage-based entities this entity contributed to
 * {SSModelUETopicScore Array} topicScores calculated level of use/interaction (i.e. 1,2,3) for topics the entity dealt with/was attached with
 * {String Array} maturingIndicators usage-based intermediate indicators for maturity indicator calculation
 */
var SSResourceDetailsGet = function(resultHandler, errorHandler, user, key, entity){
  
  var par                     = {};
  par[sSVarU.op]              = "modelUEResourceDetails";
  par[sSVarU.user]            = user;
  par[sSVarU.entity]          = entity;
  par[sSVarU.key]             = key;
  
	new SSJSONPOSTRequest("modelUEResourceDetails", par, resultHandler, errorHandler).send();
};

/**
 * retrieve the overall rating (by all users) for given entity
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} entity entity to retrieve the overall rating for
 * @return {SSRatingOverallGetRet} <br>
 * {SSRatingOverall} ratingOverall entity's overall rating and total rating frequency
 */
var SSRatingOverallGet = function(resultHandler, errorHandler, user, key, entity){
  
  var par                     = {};
  par[sSVarU.op]              = "ratingOverallGet";
  par[sSVarU.user]            = user;
  par[sSVarU.entity]          = entity;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("ratingOverallGet", par, resultHandler, errorHandler).send();
};

/**
 * set the user's rating for given entity
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} entity entity to set the user’s rating for
  *@param {Integer} value rating value (i.e. 1,2,3,4,5)
 * @return {SSRatingUserSetRet} <br>
 * {Boolean} worked whether setting rating worked
 */
var SSRatingSet = function(resultHandler, errorHandler, user, key, entity, value){
  
  var par                     = {};
  par[sSVarU.op]              = "ratingSet";
  par[sSVarU.user]            = user;
  par[sSVarU.entity]          = entity;
  par[sSVarU.value]           = value;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("ratingSet", par, resultHandler, errorHandler).send();
};

/**
 * retrieve tag recommendations based on user, entity, tag, time and category combinations
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} forUser user to be considered to retrieve recommendations for
 * @param {URI} entity resource to be considered to retrieve recommendations for
 * @param {URI Array} categories additional information to be taken into account
 * @param {Integer} maxTags number of tags to be returned
 * @return {SSRecommTagsRet} <br>
 * {SSTagLikelihood Array} tags recommended tags with likelihood
 */
var SSRecommTags = function(resultHandler, errorHandler, user, key, forUser, entity, categories, maxTags){
  
  var par                     = {};
  par[sSVarU.op]              = "recommTags";
  par[sSVarU.user]            = user;
  par[sSVarU.key]             = key;
  
  if(!jSGlobals.isEmpty(forUser)){       par[sSVarU.forUser]         = forUser;}
  if(!jSGlobals.isEmpty(entity)){        par[sSVarU.entity]          = entity;}
  if(!jSGlobals.isEmpty(categories)){    par[sSVarU.categories]      = jSGlobals.commaSeparateStringArray(categories);}
  if(!jSGlobals.isEmpty(maxTags)){       par[sSVarU.maxTags]         = maxTags;}
  
  new SSJSONPOSTRequest("recommTags", par, resultHandler, errorHandler).send();
};

/**
 * search for entities
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {String Array} keywordsToSearchFor general keywords to be searched for; get interpreted as, e.g. tags, words if respective flags set (e.g. includeTags)
 * @param {Boolean} includeTextualContent whether the text content (if available) of entities should be scanned
 * @param {String Array} wordsToSearchFor keywords to be used in textual content search
 * @param {Boolean} includeTags whether tags of entities should be looked to find entities
 * @param {String Array} tagsToSearchFor tags to be searched for
 * @param {Boolean} includeMIs whether maturing indicators should be included in search
 * @param {String Array} misToSearchFor maturing indicators of entities to be matched
 * @param {Boolean} includeLabel whether labels of entities should be scanned
 * @param {String Array} labelsToSearchFor certain labels to be search for
 * @param {Boolean} includeDescription whether descriptions of entities should be scanned
 * @param {String Array} descriptionsToSearchFor certain descriptions to be searched for
 * @param {String Array} typesToSearchOnlyFor list of entity types to be considered for search exclusively 
 * @param {Boolean} includeOnlySubEntities whether only sub-entities (e.g. collection entries) of entitiesToSearchWithin should be considered
 * @param {URI Array} entitiesToSearchWithin entities for whom only sub entities get search for
 * @param {Boolean} includeRecommendedResults whether possibly recommended entities should be included in search results
 * @param {Boolean} provideEntries whether entries (if available) of search results (e.g. the entries of a found collection) should be returned as well
 * @return {SSSearchRet} <br>
 * {SSEntity Array} entities found entities with additional information
 */
var SSSearch = function(
  resultHandler, 
errorHandler, 
user, 
key, 
keywordsToSearchFor,
includeTextualContent,
wordsToSearchFor,
includeTags,
tagsToSearchFor,
includeMIs,
misToSearchFor,
includeLabel,
labelsToSearchFor,
includeDescription,
descriptionsToSearchFor,
typesToSearchOnlyFor,
includeOnlySubEntities,
entitiesToSearchWithin,
extendToParents,
includeRecommendedResults,
provideEntries){
  
  var par                                 = {};
  par[sSVarU.op]                          = "search";
  par[sSVarU.user]                        = user;
  par[sSVarU.key]                         = key;
  
  if(!jSGlobals.isEmpty(keywordsToSearchFor)){         par[sSVarU.keywordsToSearchFor]          = jSGlobals.commaSeparateStringArray(keywordsToSearchFor);}
  if(!jSGlobals.isEmpty(includeTextualContent)){       par[sSVarU.includeTextualContent]        = includeTextualContent;}
  if(!jSGlobals.isEmpty(wordsToSearchFor)){            par[sSVarU.wordsToSearchFor]             = jSGlobals.commaSeparateStringArray(wordsToSearchFor);}
  if(!jSGlobals.isEmpty(includeTags)){                 par[sSVarU.includeTags]                  = includeTags;}
  if(!jSGlobals.isEmpty(tagsToSearchFor)){             par[sSVarU.tagsToSearchFor]              = jSGlobals.commaSeparateStringArray(tagsToSearchFor);}
  if(!jSGlobals.isEmpty(includeMIs)){                  par[sSVarU.includeMIs]                   = includeMIs;}
  if(!jSGlobals.isEmpty(misToSearchFor)){              par[sSVarU.misToSearchFor]               = jSGlobals.commaSeparateStringArray(misToSearchFor);}
  if(!jSGlobals.isEmpty(includeLabel)){                par[sSVarU.includeLabel]                 = includeLabel;}
  if(!jSGlobals.isEmpty(labelsToSearchFor)){           par[sSVarU.labelsToSearchFor]            = jSGlobals.commaSeparateStringArray(labelsToSearchFor);}
  if(!jSGlobals.isEmpty(includeDescription)){          par[sSVarU.includeDescription]           = includeDescription;}
  if(!jSGlobals.isEmpty(descriptionsToSearchFor)){     par[sSVarU.descriptionsToSearchFor]      = jSGlobals.commaSeparateStringArray(descriptionsToSearchFor);}
  if(!jSGlobals.isEmpty(typesToSearchOnlyFor)){        par[sSVarU.typesToSearchOnlyFor]         = jSGlobals.commaSeparateStringArray(typesToSearchOnlyFor);}
  if(!jSGlobals.isEmpty(includeOnlySubEntities)){      par[sSVarU.includeOnlySubEntities]       = includeOnlySubEntities;}
  if(!jSGlobals.isEmpty(entitiesToSearchWithin)){      par[sSVarU.entitiesToSearchWithin]       = jSGlobals.commaSeparateStringArray(entitiesToSearchWithin);}
  if(!jSGlobals.isEmpty(extendToParents)){             par[sSVarU.extendToParents]              = extendToParents;}
  if(!jSGlobals.isEmpty(includeRecommendedResults)){   par[sSVarU.includeRecommendedResults]    = includeRecommendedResults;}
  if(!jSGlobals.isEmpty(provideEntries)){              par[sSVarU.provideEntries]               = provideEntries;}
  
  new SSJSONPOSTRequest("search", par, resultHandler, errorHandler).send();
};

/**
 * add a tag in given space for an entity
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} entity entity’ to add tag for
 * @param {String} label label of the tag to add
 * @param {String} space access restriction for the tag (i.e. private,public)
 * @return {SSTagAddRet} <br>
 * {Boolean} worked whether adding the tag worked
 */
var SSTagAdd = function(resultHandler, errorHandler, user, key, entity, label, space){
  
  var par                       = {};
  par[sSVarU.op]               = "tagAdd";
  par[sSVarU.user]             = user;
  par[sSVarU.entity]           = entity;
  par[sSVarU.label]            = label;
  par[sSVarU.space]            = space;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("tagAdd", par, resultHandler, errorHandler).send();
};

/**
 * retrieve tag frequencies
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} forUser user to retrieve tags for (optional)
 * @param {URI Array} entities entities to retrieve tags for (optional)
 * @param {String} labels tag labels to consider for retrieving tags (optional)
 * @param {String} space access restriction for to be retrieved tags (i.e. privateSpace, sharedSpace) (optional)
 * @param {Long} startTime timestamp to retrieve tags from a certain point in time(optional)
 * @return {SSTagUserFrequsGetRet} <br> 
 * {SSTagFrequ Array} tagFrequs tags with frequencies
 */
var SSTagFrequsGet = function(resultHandler, errorHandler, user, key, forUser, entities, labels, space, startTime){
  
  var par                      = {};
  par[sSVarU.op]               = "tagFrequsGet";
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  if(!jSGlobals.isEmpty(forUser)){     par[sSVarU.forUser]        = forUser;}
  if(!jSGlobals.isEmpty(entities)){    par[sSVarU.entities]       = jSGlobals.commaSeparateStringArray(entities);}
  if(!jSGlobals.isEmpty(labels)){      par[sSVarU.labels]         = jSGlobals.commaSeparateStringArray(labels);}
  if(!jSGlobals.isEmpty(space)){       par[sSVarU.space]          = space;}
  if(!jSGlobals.isEmpty(startTime)){   par[sSVarU.startTime]      = startTime;}
  
  new SSJSONPOSTRequest("tagFrequsGet", par, resultHandler, errorHandler).send();
};

/**
 * retrieve tag assignments
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} forUser user to retrieve tag assignments for (optional)
 * @param {URI Array} entities entities to retrieve tag assignments for (optional)
 * @param {String} labels tag labels to consider for retrieving tag assignments (optional)
 * @param {String} space access restriction for to be retrieved tag assignments (i.e. privateSpace, sharedSpace) (optional)
 * @param {Long} startTime timestamp to retrieve tag assignments from a certain point in time (optional)
 * @return {SSTagsUserGetRet} <br> 
 * {SSTag Array} tag assignments
 */
var SSTagsGet = function(resultHandler, errorHandler, user, key, forUser, entities, labels, space, startTime){
  
  var par                      = {};
  par[sSVarU.op]               = "tagsGet";
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  if(!jSGlobals.isEmpty(forUser)){     par[sSVarU.forUser]        = forUser;}
  if(!jSGlobals.isEmpty(entities)){    par[sSVarU.entities]       = jSGlobals.commaSeparateStringArray(entities);}
  if(!jSGlobals.isEmpty(labels)){      par[sSVarU.labels]         = jSGlobals.commaSeparateStringArray(labels);}
  if(!jSGlobals.isEmpty(space)){       par[sSVarU.space]          = space;}
  if(!jSGlobals.isEmpty(startTime)){   par[sSVarU.startTime]      = startTime;}
  
  new SSJSONPOSTRequest("tagsGet", par, resultHandler, errorHandler).send();
};

/**
 * retrieve entities for tags (currently startTime is not used to retrieve entities)
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} forUser user to retrieve entities via tags for (optional)
 * @param {String} labels tag labels to consider for retrieving entities via tags (optional)
 * @param {String} space access restriction for tags to be considered (i.e. privateSpace, sharedSpace) (optional)
 * @param {Long} startTime timestamp to retrieve tags (optional)
 * @return {SSTagUserEntitiesForTagsGet} <br> 
 * {SSUri Array} entities entities having given tags attached
 */
var SSTagEntitiesForTagsGet = function(resultHandler, errorHandler, user, key, forUser, labels, space, startTime){
  
  var par                      = {};
  par[sSVarU.op]               = "tagEntitiesForTagsGet";
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  if(!jSGlobals.isEmpty(forUser)){     par[sSVarU.forUser]        = forUser;}
  if(!jSGlobals.isEmpty(labels)){      par[sSVarU.labels]         = jSGlobals.commaSeparateStringArray(labels);}
  if(!jSGlobals.isEmpty(space)){       par[sSVarU.space]          = space;}
  if(!jSGlobals.isEmpty(startTime)){   par[sSVarU.startTime]      = startTime;}
  
  new SSJSONPOSTRequest("tagEntitiesForTagsGet", par, resultHandler, errorHandler).send();
};

/**
 * remove tag, user, entity, space combinations
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} entity entity to consider removing tag assignments from
 * @param {String} label label of the tag to consider when removing tag-assignments
 * @param {String} space access restriction (i.e. private,public) for tag-assignments to be removed
 * @return {SSTagsUserRemoveRet} <br>
 * {Boolean} worked whether removing desired tag-assignments worked
 */
var SSTagsRemove = function(resultHandler, errorHandler, user, key, entity, label, space){
  
  var par                      = {};
  par[sSVarU.op]               = "tagsRemove";
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  if(!jSGlobals.isEmpty(entity)){    par[sSVarU.entity]       = entity;}
  if(!jSGlobals.isEmpty(label)){     par[sSVarU.label]        = label;}
  if(!jSGlobals.isEmpty(space)){     par[sSVarU.space]            = space;}
  
  new SSJSONPOSTRequest("tagsRemove", par, resultHandler, errorHandler).send();
};

/**
 * retrieve all users
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @return {SSUserAllRet} <br>
 * {SSUser Array} users all users from within SSS
 */
var SSUserAll = function(resultHandler, errorHandler, user, key){
  
  var par                      = {};
  par[sSVarU.op]               = "userAll";
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("userAll", par, resultHandler, errorHandler).send();
};

/**
 * add a usage-based trace, i.e. user event, for entity, user combination
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {String} type type of the event
 * @param {URI} entity entity with which some interaction shall be traced
 * @param {String} content possible additional textual information of the trace
 * @return {SSUEAddRet} <br>
 * {Boolean} worked whether adding the user event worked
 */
var SSUserEventAdd = function(resultHandler, errorHandler, user, key, type, entity, content){
  
  var par                      = {};
  par[sSVarU.op]               = "uEAdd";
  par[sSVarU.user]             = user;
  par[sSVarU.type]             = type;
  par[sSVarU.key]              = key;
  
  if(!jSGlobals.isEmpty(entity)){   par[sSVarU.entity]         = entity;}
  if(!jSGlobals.isEmpty(content)){  par[sSVarU.content]        = content;}
  
  new SSJSONPOSTRequest("uEAdd", par, resultHandler, errorHandler).send();
};

/**
 * retrieve user events for user, entity, time combination
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} forUser user to retrieve user events for
 * @param {URI} entity entity to retrieve user events for
 * @param {Long} startTime start timestamp for retrieving user events for
 * @param {Long} endTime end timestamp for retrieving user events for
 * @param {String} type user event type to retrieve
 * @return {SSUEsGetRet} <br>
 * {SSUE Array} uEs user events found
 */
var SSUserEventsGet = function(resultHandler, errorHandler, user, key, forUser, entity, startTime, endTime, type){
  
  var par                      = {};
  par[sSVarU.op]               = "uEsGet";
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  if(!jSGlobals.isEmpty(forUser)){   par[sSVarU.forUser]          = forUser;}
  if(!jSGlobals.isEmpty(entity)){    par[sSVarU.entity]           = entity;}
  if(!jSGlobals.isEmpty(startTime)){ par[sSVarU.startTime]        = startTime;}
  if(!jSGlobals.isEmpty(endTime)){   par[sSVarU.endTime]          = endTime;}
  if(!jSGlobals.isEmpty(type)){      par[sSVarU.type]             = type;}
  
  new SSJSONPOSTRequest("uEsGet", par, resultHandler, errorHandler).send();
};

/**
 * retrieve given user event
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} uE user event to retrieve
 * @return {SSUEGetRet} <br>
 * {SSUE} uE user event in question
 */
var SSUserEventGet = function(resultHandler, errorHandler, user, key, uE){
  
  var par                      = {};
  par[sSVarU.op]               = "uEGet";
  par[sSVarU.user]             = user;
  par[sSVarU.uE]               = uE;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("uEGet", par, resultHandler, errorHandler).send();
};

/**
 * retrieve the number of certain user events
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} forUser to count user events for
 * @param {URI} entity to count user events for
 * @param {Long} startTime begin for user event inclusion
 * @param {Long} endTime end for user event inclusiion
 * @param {String} type user event type to retrieve
 * @return {SSUECountGetRet} <br>
 * {Integer} count number of user events for given restrictions
 */
var SSUECountGet = function(resultHandler, errorHandler, user, key, forUser, entity, startTime, endTime, type){
  
  var par                      = {};
  par[sSVarU.op]               = "uECountGet";
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  if(!jSGlobals.isEmpty(forUser)){   par[sSVarU.forUser]          = forUser;}
  if(!jSGlobals.isEmpty(entity)){    par[sSVarU.entity]           = entity;}
  if(!jSGlobals.isEmpty(startTime)){ par[sSVarU.startTime]        = startTime;}
  if(!jSGlobals.isEmpty(endTime)){   par[sSVarU.endTime]          = endTime;}
  if(!jSGlobals.isEmpty(type)){      par[sSVarU.type]             = type;}
  
  new SSJSONPOSTRequest("uECountGet", par, resultHandler, errorHandler).send();
};

/**
 * get predefined categories
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @return {SSCategoriesPredefinedGetRet} <br>
 * {String Array} categories predefined categories
 */
var SSCategoriesPredefinedGet = function(resultHandler, errorHandler, user, key){
  
  var par                      = {};
  par[sSVarU.op]               = "categoriesPredefinedGet";
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("categoriesPredefinedGet", par, resultHandler, errorHandler).send();
};

/**
 * import data from evernote for certain user
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @return {SSDataImportEvernoteRet} <br>
 * {Boolean} worked whether import worked
 */
var SSDataImportEvernote = function(resultHandler, errorHandler, user, key){
  
  var par                      = {};
  par[sSVarU.op]               = "dataImportEvernote";
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("dataImportEvernote", par, resultHandler, errorHandler).send();
};

/**
 * retrieve flags set
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI Array} entities
 * @param {String Array} types
 * @param {Long} startTime
 * @param {Long} endTime
 * @return {SSFlagsUserGetRet} <br>
 * {SSFlag Array} flags
 */
var SSFlagsGet = function(resultHandler, errorHandler, user, key, entities, types, startTime, endTime){
  
  var par                      = {};
  par[sSVarU.op]               = "flagsGet";
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  if(!jSGlobals.isEmpty(entities)){      par[sSVarU.entities]         = jSGlobals.commaSeparateStringArray(entities);}
  if(!jSGlobals.isEmpty(types)){         par[sSVarU.types]            = jSGlobals.commaSeparateStringArray(types);}
  if(!jSGlobals.isEmpty(startTime)){     par[sSVarU.startTime]        = startTime;}
  if(!jSGlobals.isEmpty(endTime)){       par[sSVarU.endTime]          = endTime;}
  
  new SSJSONPOSTRequest("flagsGet", par, resultHandler, errorHandler).send();
};

/**
 * set flags
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI Array} entities
 * @param {String Array} types
 * @param {Long} endTime
 * @param {Integer} value
 * @return {SSFlagsUserSetRet} <br>
 * {Boolean} worked
 */
var SSFlagsSet = function(resultHandler, errorHandler, user, key, entities, types, endTime, value){
  
  var par                      = {};
  par[sSVarU.op]               = "flagsSet";
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  if(!jSGlobals.isEmpty(entities)){      par[sSVarU.entities]         = jSGlobals.commaSeparateStringArray(entities);}
  if(!jSGlobals.isEmpty(types)){         par[sSVarU.types]            = jSGlobals.commaSeparateStringArray(types);}
  if(!jSGlobals.isEmpty(endTime)){       par[sSVarU.endTime]          = endTime;}
  if(!jSGlobals.isEmpty(value)){         par[sSVarU.value]            = value;}
  
  new SSJSONPOSTRequest("flagsSet", par, resultHandler, errorHandler).send();
};

/**
 * retrieve the version of the sss instance
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @return {SSSystemVersionGetRet} <br>
 * {String} version name of the current sss version
 */
var SSSystemVersionGet = function(resultHandler, errorHandler, user, key){
  
  var par                      = {};
  par[sSVarU.op]               = "systemVersionGet";
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("systemVersionGet", par, resultHandler, errorHandler).send();
};