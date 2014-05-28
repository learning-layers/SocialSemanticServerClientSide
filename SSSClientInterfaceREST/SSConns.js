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
 * @param {String} userLabel name of the user, e.g. 'hugo'
 * @param {String} password the user’s password
 * @return {SSAuthCheckCredRet} <br>
 * {String} key user's authentication token <br>
 * {URI} uri user's identifier in the system
 */
var SSAuthCheckCred = function(resultHandler, errorHandler, userLabel, password){
  
  var par               = {};
  par[sSVarU.op]        = "authCheckCred";
  par[sSVarU.user]      = "mailto:dummyUser";
  par[sSVarU.key]       = "someKey";
  par[sSVarU.userLabel] = userLabel;
  par[sSVarU.pass]      = password;
  
  new SSJSONPOSTRequest("authCheckCred", par, resultHandler, errorHandler).send();
};

/**
 * retrieve all the user's collections given entity is in
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} entityUri entity searched for in user's collections
 * @return {SSCollsUserEntityIsInGetRet} <br>
 * {SSColl Array} colls user's collections the entity is in
 */
var SSCollsEntityIsInGet = function(resultHandler, errorHandler, user, key, entityUri){
  
  var par                = {};
  par[sSVarU.op]         = "collsEntityIsInGet";
  par[sSVarU.user]       = user;
  par[sSVarU.entityUri]  = entityUri;
  par[sSVarU.key]        = key;
  
  new SSJSONPOSTRequest("collsEntityIsInGet", par, resultHandler, errorHandler).send();
};

/**
 * retrieve the cumulated tags (and their frequencies) for all the sub collections and respective entities
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} collUri collection to retrieve all cumulated tags for
 * @return {SSCollUserCummulatedTagsGetRet} <br>
 * {SSTagFrequ Array} tagFrequs all tags and their frequencies (label, space, frequ) for sub collections and entities
 */
var SSCollCumulatedTagsGet = function(resultHandler, errorHandler, user, key, collUri){
  
  var par                = {};
  par[sSVarU.op]         = "collCumulatedTagsGet";
  par[sSVarU.user]       = user;
  par[sSVarU.collUri]    = collUri;
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
 * @param {URI} collEntry either null for the creation of new sub-collection, an existing collection or an entity
 * @param {String} collEntryLabel title of the collection entry 
 * @param {Boolean} addNewColl whether a new collection should be created instead of adding an existing one
 * @return {SSCollUserEntryAddRet} <br>
 * {URI} uri collection entry's identifier
 */
var SSCollEntryAdd = function(resultHandler, errorHandler, user, key, coll, collEntry, collEntryLabel, addNewColl){
  
  var par                      = {};
  par[sSVarU.op]               = "collEntryAdd";
  par[sSVarU.user]             = user;
  par[sSVarU.coll]             = coll;
  par[sSVarU.collEntryLabel]   = collEntryLabel;
  par[sSVarU.key]              = key;
  
  if(!jSGlobals.isEmpty(addNewColl)){ par[sSVarU.addNewColl]       = addNewColl;}
  if(!jSGlobals.isEmpty(collEntry)){  par[sSVarU.collEntry]        = collEntry;}
  
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
 * @param {String Array} entryLabels collection item labels
 * @return {SSCollUserEntriesAddRet} <br>
 * {Boolean} worked whether adding worked
 */
var SSCollEntriesAdd = function(resultHandler, errorHandler, user, key, coll, entries, entryLabels){
  
  var par                       = {};
  par[sSVarU.op]               = "collEntriesAdd";
  par[sSVarU.user]             = user;
  par[sSVarU.coll]             = coll;
  par[sSVarU.entries]          = jSGlobals.commaSeparateStringArray(entries);
  par[sSVarU.entryLabels]      = jSGlobals.commaSeparateStringArray(entryLabels);
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
 * @param {URI} collEntry entity to remove
 * @return {SSCollUserEntryDeleteRet} <br>
 * {Boolean} worked whether deleting the collection entry worked
 */
var SSCollEntryDelete = function(resultHandler, errorHandler, user, key, coll, collEntry){
  
  var par                      = {};
  par[sSVarU.op]               = "collEntryDelete";
  par[sSVarU.user]             = user;
  par[sSVarU.coll]             = coll;
  par[sSVarU.collEntry]        = collEntry;
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
 * @param {URI Array} collEntries items to delete
 * @return {SSCollUserEntriesDeleteRet} <br>
 * {Boolean} worked whether deleting the entries worked
 */
var SSCollEntriesDelete = function(resultHandler, errorHandler, user, key, coll, collEntries){
  
  var par                      = {};
  par[sSVarU.op]               = "collEntriesDelete";
  par[sSVarU.user]             = user;
  par[sSVarU.coll]             = coll;
  par[sSVarU.collEntries]      = jSGlobals.commaSeparateStringArray(collEntries);
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
 * @param {URI} collUri collection to retrieve it's parent hierarchy for
 * @return {SSCollUserHierarchyGetRet} <br>
 * {SSColl Array} colls parent collections without entries ordered by hierarchy
 */
var SSCollHierarchyGet = function(resultHandler, errorHandler, user, key, collUri){
  
  var par                      = {};
  par[sSVarU.op]               = "collHierarchyGet";
  par[sSVarU.user]             = user;
  par[sSVarU.collUri]          = collUri;
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
 * @param {URI} discUri discussion to add an entry for
 * @param {URI} targetUri entity to start a discussion for
 * @param {String} content text for the comment/answer/opinion
 * @param {Boolean} addNewDisc whether a new disc should be created
 * @param {String} discType discussion type: disc, qa or chat
 * @param {String} discLabel discussion name
 * @param {String} explanation describes the discussion in more detail
 * @return {SSDiscUserEntryAddRet} <br>
 * {SSUri} disc discussion 
 * {SSUri} discEntry discussion entry
 */
var SSDiscEntryAdd = function(
  resultHandler, 
errorHandler,
user, 
key, 
discUri, 
targetUri, 
content, 
addNewDisc,
discType,
discLabel,
explanation){
  
  var par                = {};
  par[sSVarU.op]         = "discEntryAdd";
  par[sSVarU.user]       = user;
  par[sSVarU.key]        = key;
  
  if(!jSGlobals.isEmpty(discUri)){      par[sSVarU.discUri]      = discUri;}
  if(!jSGlobals.isEmpty(targetUri)){    par[sSVarU.targetUri]    = targetUri;}
  if(!jSGlobals.isEmpty(content)){      par[sSVarU.content]      = content;}
  if(!jSGlobals.isEmpty(addNewDisc)){   par[sSVarU.addNewDisc]   = addNewDisc;}
  if(!jSGlobals.isEmpty(discType)){     par[sSVarU.discType]     = discType;}
  if(!jSGlobals.isEmpty(discLabel)){    par[sSVarU.discLabel]    = discLabel;}
  if(!jSGlobals.isEmpty(explanation)){  par[sSVarU.explanation]  = explanation;}
  
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
  par[sSVarU.maxDiscEntries]  = 10;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("discWithEntriesGet", par, resultHandler, errorHandler).send();
};

/**
 * retrieve all discussions given user is allowed to see
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @return {SSDiscsUserAllGetRet} <br>
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
 * @param {URI} discUri the disc to remove
 * @return {SSDiscUserRemoveRet} <br>
 * {SSUri} discUri removed discussion
 */
var SSDiscRemove = function(resultHandler, errorHandler, user, key, discUri){
  
  var par                     = {};
  par[sSVarU.op]              = "discRemove";
  par[sSVarU.user]            = user;
  par[sSVarU.discUri]         = discUri;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("discRemove", par, resultHandler, errorHandler).send();
};

/**
 * retrieve discussions for a certain entity
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} entityUri entity to retrieve discussions for
 * @return {SSDiscUserDiscURIsForTargetGetRet} <br>
 * {SSUri Array} discUris discussion given entity is target of
 */
var SSDiscURIsForTargetGet = function(resultHandler, errorHandler, user, key, entityUri){
  
  var par                     = {};
  par[sSVarU.op]              = "discURIsForTargetGet";
  par[sSVarU.user]            = user;
  par[sSVarU.entityUri]       = entityUri;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("discURIsForTargetGet", par, resultHandler, errorHandler).send();
};

/**
 * retrieve users who can access given entity
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} entityUri entity to retrieve users for
 * @return {SSEntityUserEntityUsersGetRet} <br>
 * {SSEntity Array} users users allowed to access the entity
 */
var SSEntityEntityUsersGet = function(resultHandler, errorHandler, user, key, entityUri){
  
  var par                      = {};
  par[sSVarU.op]               = "entityEntityUsersGet";
  par[sSVarU.user]             = user;
  par[sSVarU.entityUri]        = entityUri;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("entityEntityUsersGet", par, resultHandler, errorHandler).send();
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
 * @param {URI} circleUri circle to add entities to
 * @param {URI Array} entityUris entities to add
 * @return {SSEntityUserEntitiesToCircleAddRet} <br> 
 * {SSUri} circleUri circle of entities added
 */
var SSEntityEntitiesToCircleAdd = function(resultHandler, errorHandler, user, key, circleUri, entityUris){
  
  var par                      = {};
  par[sSVarU.op]               = "entityEntitiesToCircleAdd";
  par[sSVarU.user]             = user;
  par[sSVarU.circleUri]        = circleUri;
  par[sSVarU.entityUris]       = jSGlobals.commaSeparateStringArray(entityUris);
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("entityEntitiesToCircleAdd", par, resultHandler, errorHandler).send();
};

/**
 * add given users to a user-generated circle
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} circleUri circle to add users to
 * @param {Array} userUris users to add
 * @return {SSEntityUserUsersToCircleAddRet} <br>
 * {SSUri} circleUri circle of users added
 */
var SSEntityUsersToCircleAdd = function(resultHandler, errorHandler, user, key, circleUri, userUris){
  
  var par                      = {};
  par[sSVarU.op]               = "entityUsersToCircleAdd";
  par[sSVarU.user]             = user;
  par[sSVarU.circleUri]        = circleUri;
  par[sSVarU.userUris]         = jSGlobals.commaSeparateStringArray(userUris);
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
 * @param {Array} entityUris entities to add
 * @param {Array} userUris users to add
 * @return {SSEntityUserCircleCreateRet} <br>
 * {SSUri} circleUri circle created
 */
var SSEntityCircleCreate = function(resultHandler, errorHandler, user, key, label, entityUris, userUris){
  
  var par                      = {};
  par[sSVarU.op]               = "entityCircleCreate";
  par[sSVarU.user]             = user;
  par[sSVarU.circleType]       = sSGlobals.circleTypeGroup;
  par[sSVarU.label]            = label;
  par[sSVarU.key]              = key;
  
  if(!jSGlobals.isEmpty(entityUris)){    par[sSVarU.entityUris]      = jSGlobals.commaSeparateStringArray(entityUris);}
  if(!jSGlobals.isEmpty(userUris)){      par[sSVarU.userUris]        = jSGlobals.commaSeparateStringArray(userUris);}
  
  new SSJSONPOSTRequest("entityCircleCreate", par, resultHandler, errorHandler).send();
};

/**
 * set an entity public (make it accessible for everyone)
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} entityUri entity to make public
 * @return {SSEntityUserPublicSetRet} <br>
 * {SSUri} entityUri entity made public
 */
var SSEntityPublicSet = function(resultHandler, errorHandler, user, key, entityUri){
  
  var par                      = {};
  par[sSVarU.op]               = "entityPublicSet";
  par[sSVarU.user]             = user;
  par[sSVarU.entityUri]        = entityUri;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("entityPublicSet", par, resultHandler, errorHandler).send();
};

/**
 * share an entity directly with given users
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} entityUri entity to be shared
 * @param {Array} userUris user to share the entity with
 * @param {String} comment textual comment for sharing
 * @return {SSEntityUserShareRet} <br>
 * {SSUri} circleUri system-generated circle representing the share
 */
var SSEntityShare = function(resultHandler, errorHandler, user, key, entityUri, userUris, comment){
  
  var par                      = {};
  par[sSVarU.op]               = "entityShare";
  par[sSVarU.user]             = user;
  par[sSVarU.entityUri]        = entityUri;
  par[sSVarU.userUris]         = jSGlobals.commaSeparateStringArray(userUris);
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
 * @param {URI} entityUri entity to be removed 
 * @param {Boolean} removeUserTags whether the user's tags should be removed from the entity
 * @param {Boolean} removeUserRatings whether the user's ratings should be removed from the entity
 * @param {Boolean} removeFromUserColls whether the entity should be removed from all the user's collections
 * @param {Boolean} removeUserLocations whether locations added by the user should be removed from the entity
 * @return {SSEntityUserDirectlyAdjoinedEntitiesRemoveRet} <br>
 * {SSUri} entityUri entity for which attributes have been removed
 */
var SSEntityDirectlyAdjoinedEntitiesRemove = function(
  resultHandler, 
errorHandler, 
user, 
key, 
entityUri, 
removeUserTags, 
removeUserRatings, 
removeFromUserColls, 
removeUserLocations){
  
  var par                         = {};
  par[sSVarU.op]                  = "entityDirectlyAdjoinedEntitiesRemove";
  par[sSVarU.user]                = user;
  par[sSVarU.entityUri]           = entityUri;
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
 * @param {URI} entityUri entity to retrieve information for
 * @return {SSEntityUserGetRet} <br>
 * {SSEntity} entity entity requested 
 */
var SSEntityGet = function(resultHandler, errorHandler, user, key, entityUri){
  
  var par                     = {};
  par[sSVarU.op]              = "entityGet";
  par[sSVarU.user]            = user;
  par[sSVarU.entityUri]       = entityUri;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("entityGet", par, resultHandler, errorHandler).send();
};

/**
 * set the name for an entity
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} entityUri entity to set the name for
 * @param {String} label entity's new name
 * @return {SSEntityLabelSetRet} <br>
 * {SSUri} entityUri entity the label was set for
 */
var SSEntityLabelSet = function(resultHandler, errorHandler, user, key, entityUri, label){
  
  var par                     = {};
  par[sSVarU.op]              = "entityLabelSet";
  par[sSVarU.user]            = user;
  par[sSVarU.entityUri]       = entityUri;
  par[sSVarU.label]           = label;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("entityLabelSet", par, resultHandler, errorHandler).send();
};

/**
 * retrieve more detailed information for given entity
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} entityUri entity to get details for
 * @param {Boolean} getTags whether tags for the entity should be delivered
 * @param {Boolean} getOverallRating whether the overall rating for the entity should be delivered
 * @param {Boolean} getDiscUris whether the uris of discussions about the entity should be returned
 * @return {SSEntityDescGetRet} <br>
 * {SSEntityDescA} entityDesc entity details with respect to the type of the entity and chosen request parameters
 */
var SSEntityDescGet = function(resultHandler, errorHandler, user, key, entityUri, getTags, getOverallRating, getDiscUris){
  
  var par                         = {};
  par[sSVarU.op]                  = "entityDescGet";
  par[sSVarU.user]                = user;
  par[sSVarU.entityUri]           = entityUri;
  par[sSVarU.key]                 = key;
  
  if(!jSGlobals.isEmpty(getTags)){          par[sSVarU.getTags]             = getTags;}
  if(!jSGlobals.isEmpty(getOverallRating)){ par[sSVarU.getOverallRating]    = getOverallRating;}
  if(!jSGlobals.isEmpty(getDiscUris)){      par[sSVarU.getDiscUris]         = getDiscUris;}
  
  new SSJSONPOSTRequest("entityDescGet", par, resultHandler, errorHandler).send();
};

/**
 * retrieve a file's extension
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} fileUri file to retrieve the extension for
 * @return {SSFileExtGetRet} <br>
 * {String} fileExt extension for the file
 */
var SSFileExtGet = function(resultHandler, errorHandler, user, key, fileUri){
  
  var par                     = {};
  par[sSVarU.op]              = "fileExtGet";
  par[sSVarU.user]            = user;
  par[sSVarU.fileUri]         = fileUri;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("fileExtGet", par, resultHandler, errorHandler).send();
};

/**
 * query whether given file can be downloaded with write access
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} uri file to be downloaded with write access
 * @return {SSFileCanWriteRet} <br>
 * {String} fileUriOrId file in question
 * {Boolean} canWrite whether file can be downloaded in write mode
 */
var SSFileCanWrite = function(resultHandler, errorHandler, user, key, uri){
  
  var par                     = {};
  par[sSVarU.op]              = "fileCanWrite";
  par[sSVarU.user]            = user;
  par[sSVarU.uri]             = uri;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("fileCanWrite", par, resultHandler, errorHandler).send();
};

/**
 * set user being writer or reaader for given file
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} uri file to set whether user is writer or reader
 * @param {Boolean} write whether user shall be writer
 * @return {SSFileSetReaderOrWriterRet} <br>
 * {String} fileUriOrId file for which user has been set to writer or reader
 * {Boolean} worked whether request worked
 */
var SSFileSetReaderOrWriter = function(resultHandler, errorHandler, user, key, uri, write){
  
  var par                     = {};
  par[sSVarU.op]              = "fileSetReaderOrWriter";
  par[sSVarU.user]            = user;
  par[sSVarU.uri]             = uri;
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
 * {String Array} fileUris files user is able to replace currently
 * {String Array} fileNames file labels
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
 * @param {URI} uri file to be re-uploaded
 * @return {SSFileWritingMinutesLeftRet} <br> 
 * {SSUri} uri file for which remaining minutes retrieved
 * {Integer} writingMinutesLeft minutes left to re-upload file downloaded with write permission
 */
var SSFileWritingMinutesLeft = function(resultHandler, errorHandler, user, key, uri){
  
  var par                     = {};
  par[sSVarU.op]              = "fileWritingMinutesLeft";
  par[sSVarU.user]            = user;
  par[sSVarU.uri]             = uri;
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
 * @param {URI} fileUri file to be downloaded
 * @return {Blob} binary file
 */
var SSFileDownload = function(resultHandler, errorHandler, user, key, fileUri){
  
  this.resultHandler          = resultHandler;
  
  var par                     = {};
  var xhr                     = new XMLHttpRequest(); 
  
  xhr.responseType            = sSGlobals.mimeTypeBlob;
  par[sSVarU.op]              = "fileDownload";
  par[sSVarU.user]            = user;
  par[sSVarU.uri]             = fileUri;
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
 * @param {File} file HTML file handle
 * @param {URI} collUri collection for the file to added to
 * @return {SSFileUploadRet} <br>
 * {SSUri} uri identifier for the uploaded file
 */
var SSFileUpload = function(resultHandler, errorHandler, user, key, file, collUri){
  
  this.resultHandler         = resultHandler;
  this.errorHandler          = errorHandler;
  this.collUri               = collUri;
  this.fileName              = file.name;
  
  var par                    = {};
  var xhr                    = new XMLHttpRequest();
  var formData               = new FormData();
  
  par[sSVarU.op]              = "fileUpload";
  par[sSVarU.user]            = user;
  par[sSVarU.mimeType]        = file.type;
  par[sSVarU.fileName]        = file.name;
  par[sSVarU.key]             = key;
  
  formData.append(sSVarU.file,     file);
  formData.append(sSVarU.jsonRequ, JSON.stringify(par));
  
  this.myResultHandler = (function(thisRef){ return function(result){
      thisRef.resultHandler(thisRef.collUri, result.uri, thisRef.fileName);
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
 * @param {URI} uri file to be replaced
 * @param {File} file HTML file handle
 * @return {SSFileReplaceRet} <br>
 * {SSUri} uri replaced file identifier
 */
var SSFileReplace = function(resultHandler, errorHandler, user, key, uri, file){
  
  this.resultHandler         = resultHandler;
  this.errorHandler          = errorHandler;
  
  var par                    = {};
  var xhr                    = new XMLHttpRequest();
  var formData               = new FormData();
  
  par[sSVarU.op]              = "fileReplace";
  par[sSVarU.user]            = user;
  par[sSVarU.uri]             = uri;
  par[sSVarU.key]             = key;
  
  formData.append(sSVarU.file,     file);
  formData.append(sSVarU.jsonRequ, JSON.stringify(par));
  
  this.myResultHandler = (function(thisRef){ return function(result){
      thisRef.resultHandler(result.uri);
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
 * currently just dummy implementation
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} uri entity to retrieve thumbnail for
 * @return {} description
 */
var SSFileThumbGet = function(resultHandler, errorHandler, user, key, uri){
  
  var xhr                    = new XMLHttpRequest();
  
  this.resultHandler         = resultHandler;
  this.errorHandler          = errorHandler;
  this.fileID                = jSGlobals.removeTrailingSlash(uri);
  
  if(jSGlobals.lastIndexOf(this.fileID, jSGlobals.slash) === -1){
    return;
  }
  
  this.fileID = jSGlobals.substring(this.fileID, jSGlobals.lastIndexOf(this.fileID, jSGlobals.slash) + 1, jSGlobals.length(this.fileID));
  
  xhr.onload = (function(thisRef){ return function(){
      
      if(
        this.readyState    !== 4   ||
        this.status        !== 200){
        
        thisRef.errorHandler(this.response);
        return;
      }
      
      thisRef.resultHandler(this.response);
    };})(this);
  
  xhr.open (sSGlobals.httpMethGET, sSGlobals.hostREST + "fileThumbGet" + jSGlobals.slash + this.fileID, true);
  xhr.send ();
};

/**
 * set the current version of a learning episode for a user
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} learnEpVersionUri learning episode version to set for the user
 * @return {SSLearnEpVersionCurrentSetRet} <br>
 * {SSUri} learnEpVersionUri current learning episode version
 */
var SSLearnEpVersionCurrentSet = function(resultHandler, errorHandler, user, key, learnEpVersionUri){
  
  var par                       = {};
  par[sSVarU.op]                = "learnEpVersionCurrentSet";
  par[sSVarU.user]              = user;
  par[sSVarU.learnEpVersionUri] = learnEpVersionUri;
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
 * @param {URI} learnEpVersionUri learning episode version to set timeline state for
 * @param {Long} startTime start time of the current timeline
 * @param {Long} endTime end time of the current timeline
 * @return {SSLearnEpVersionSetTimelineStateRet} <br>
 * {SSUri} learnEpTimelineStateUri learning episode version timeline state
 */
var SSLearnEpVersionSetTimelineState = function(resultHandler, errorHandler, user, key, learnEpVersionUri, startTime, endTime){
  
  var par                       = {};
  par[sSVarU.op]                = "learnEpVersionSetTimelineState";
  par[sSVarU.user]              = user;
  par[sSVarU.learnEpVersionUri] = learnEpVersionUri;
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
 * @param {URI} learnEpVersionUri learning episode version to retrieve the timeline state for
 * @return {SSLearnEpVersionGetTimelineStateRet} <br>
 * {SSLearnEpTimelineState} learnEpTimelineState timeline state for given learning episode version
 */
var SSLearnEpVersionGetTimelineState = function(resultHandler, errorHandler, user, key, learnEpVersionUri){
  
  var par                       = {};
  par[sSVarU.op]                = "learnEpVersionGetTimelineState";
  par[sSVarU.user]              = user;
  par[sSVarU.learnEpVersionUri] = learnEpVersionUri;
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
 * @param {URI} learnEpCircleUri learning episode circle identifier
 * @return {SSLearnEpVersionRemoveCircleRet} <br>
 * {Boolean} worked whether deletion was successful
 */
var SSLearnEpVersionRemoveCircle = function(resultHandler, errorHandler, user, key, learnEpCircleUri){
  
  var par                      = {};
  par[sSVarU.op]               = "learnEpVersionRemoveCircle";
  par[sSVarU.user]             = user;
  par[sSVarU.learnEpCircleUri] = learnEpCircleUri;
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
 * @param {URI} learnEpEntityUri learning episode entity identifier
 * @return {SSLearnEpVersionRemoveEntityRet} <br>
 * {Boolean} whether deletion was successful
 */
var SSLearnEpVersionRemoveEntity = function(resultHandler, errorHandler, user, key, learnEpEntityUri){
  
  var par                      = {};
  par[sSVarU.op]               = "learnEpVersionRemoveEntity";
  par[sSVarU.user]             = user;
  par[sSVarU.learnEpEntityUri] = learnEpEntityUri;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("learnEpVersionRemoveEntity", par, resultHandler, errorHandler).send();
};

/**
 * update given attributes of a learning episode circle
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} learnEpCircleUri learning episode circle to be updated
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
learnEpCircleUri, 
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
  par[sSVarU.learnEpCircleUri] = learnEpCircleUri;
  par[sSVarU.label]            = label;
  par[sSVarU.xLabel]           = xLabel;
  par[sSVarU.yLabel]           = yLabel;
  par[sSVarU.xR]               = xR;
  par[sSVarU.yR]               = yR;
  par[sSVarU.xC]               = xC;
  par[sSVarU.yC]               = yC;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("learnEpVersionUpdateCircle", par, resultHandler, errorHandler).send();
};

/**
 * update given attributes of a learning episode entity
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} learnEpEntityUri learning episode entity identifier
 * @param {URI} entityUri identifier for the entity wrapped in this learning episode entity
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
learnEpEntityUri, 
entityUri, 
x, 
y){
  
  var par                      = {};
  par[sSVarU.op]               = "learnEpVersionUpdateEntity";
  par[sSVarU.user]             = user;
  par[sSVarU.learnEpEntityUri] = learnEpEntityUri;
  par[sSVarU.entityUri]        = entityUri;
  par[sSVarU.x]                = x;
  par[sSVarU.y]                = y;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("learnEpVersionUpdateEntity", par, resultHandler, errorHandler).send();
};

/**
 * create a learning episode
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {String} label episode label
 * @param {String} space realm in which the episode should be accessible, i.e. public or private
 * @return {SSLearnEpCreateRet} <br>
 * {SSUri} learnEpUri learning episode created
 */
var SSLearnEpCreate = function(resultHandler, errorHandler, user, key, label, space){
  
  var par                      = {};
  par[sSVarU.op]               = "learnEpCreate";
  par[sSVarU.user]             = user;
  par[sSVarU.label]            = label;
  par[sSVarU.space]            = space;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("learnEpCreate", par, resultHandler, errorHandler).send();
};

/**
 * create a version for giving learning episode
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} learnEpUri learning episode to create a new version for
 * @return {SSLearnEpVersionCreateRet} <br>
 * {SSUri} learnEpVersionUri learning episode version created
 */
var SSLearnEpVersionCreate = function(resultHandler, errorHandler, user, key, learnEpUri){
  
  var par                      = {};
  par[sSVarU.op]               = "learnEpVersionCreate";
  par[sSVarU.user]             = user;
  par[sSVarU.learnEpUri]       = learnEpUri;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("learnEpVersionCreate", par, resultHandler, errorHandler).send();
};

/**
 * add a new circle to given learning episode version 
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key 
 * @param {URI} learnEpVersionUri learning episode version to add a circle for
 * @param {String} label learning episode circle name
 * @param {Integer} xLabel x coordinate for the circle name
 * @param {Integer} yLabel y coordinate for the circle name
 * @param {Integer} xR 
 * @param {Integer} yR 
 * @param {Integer} xC 
 * @param {Integer} yC 
 * @return {SSLearnEpVersionAddCircleRet} <br>
 * {SSUri} learnEpCircleUri learning episode version circle added
 */
var SSLearnEpVersionAddCircle = function(
  resultHandler, 
errorHandler, 
user, 
key, 
learnEpVersionUri, 
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
  par[sSVarU.learnEpVersionUri] = learnEpVersionUri;
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
 * @param {URI} learnEpVersionUri learning episode version to a add an entity to
 * @param {URI} entityUri identifier for the entity wrapped in this learning episode entity
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
learnEpVersionUri, 
entityUri, 
x, 
y){
  
  var par                       = {};
  par[sSVarU.op]                = "learnEpVersionAddEntity";
  par[sSVarU.user]              = user;
  par[sSVarU.learnEpVersionUri] = learnEpVersionUri;
  par[sSVarU.entityUri]         = entityUri;
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
 * @param {URI} learnEpVersionUri learning episode version to retrieve
 * @return {SSLearnEpVersionGetRet} <br>
 * {SSLearnEpVersion} learnEpVersion learning episode version in question
 */
var SSLearnEpVersionGet = function(resultHandler, errorHandler, user, key, learnEpVersionUri){
  
  var par                       = {};
  par[sSVarU.op]                = "learnEpVersionGet";
  par[sSVarU.user]              = user;
  par[sSVarU.learnEpVersionUri] = learnEpVersionUri;
  par[sSVarU.key]               = key;
  
  new SSJSONPOSTRequest("learnEpVersionGet", par, resultHandler, errorHandler).send();
};

/**
 * retrieve all versions for given learning episode
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} learnEpUri learning episode to retrieve versions for
 * @return {SSLearnEpVersionsGetRet} <br>
 * {SSLearnEpVersion Array} learnEpVersions learning episode's versions
 */
var SSLearnEpVersionsGet = function(resultHandler, errorHandler, user, key, learnEpUri){
  
  var par                       = {};
  par[sSVarU.op]                = "learnEpVersionsGet";
  par[sSVarU.user]              = user;
  par[sSVarU.learnEpUri]        = learnEpUri;
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
 * @param {URI} entityUri entity to add the location for
 * @param {String} location textual representation of a location to add
 * @return {SSLocationAddRet} <br>
 * {SSUri} uri entity for which a location was added
 */
var SSLocationAdd = function(resultHandler, errorHandler, user, key, entityUri, location){
  
  var par                     = {};
  par[sSVarU.op]              = "locationAdd";
  par[sSVarU.user]            = user;
  par[sSVarU.entityUri]       = entityUri;
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
 * @param {URI} entityUri entity to get its locations for
 * @return {SSLocationsGetRet} <br>
 * {String Array} locations entity's locations
 */
var SSLocationsGet = function(resultHandler, errorHandler, user, key, entityUri){
  
  var par                     = {};
  par[sSVarU.op]              = "locationsGet";
  par[sSVarU.user]            = user;
  par[sSVarU.entityUri]       = entityUri;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("locationsGet", par, resultHandler, errorHandler).send();
};

/**
 * retrieve automatically usage-based modeled details for given entity
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} resource entity to retrieve usage based details for
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
var SSResourceDetailsGet = function(resultHandler, errorHandler, user, key, resource){
  
  var par                     = {};
  par[sSVarU.op]              = "modelUEResourceDetails";
  par[sSVarU.user]            = user;
  par[sSVarU.resource]        = resource;
  par[sSVarU.key]             = key;
  
	new SSJSONPOSTRequest("modelUEResourceDetails", par, resultHandler, errorHandler).send();
};

/**
 * retrieve the overall rating (by all users) for given entity
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} resource entity to retrieve the overall rating for
 * @return {SSRatingOverallGetRet} <br>
 * {SSRatingOverall} ratingOverall entity's overall rating and total rating frequency
 */
var SSRatingOverallGet = function(resultHandler, errorHandler, user, key, resource){
  
  var par                     = {};
  par[sSVarU.op]              = "ratingOverallGet";
  par[sSVarU.user]            = user;
  par[sSVarU.resource]        = resource;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("ratingOverallGet", par, resultHandler, errorHandler).send();
};

/**
 * set the user's rating for given entity
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} resource entity to set the user’s rating for
  *@param {Integer} value rating value (i.e. 1,2,3,4,5)
 * @return {SSRatingUserSetRet} <br>
 * {Boolean} worked whether setting rating worked
 */
var SSRatingSet = function(resultHandler, errorHandler, user, key, resource, value){
  
  var par                     = {};
  par[sSVarU.op]              = "ratingSet";
  par[sSVarU.user]            = user;
  par[sSVarU.resource]        = resource;
  par[sSVarU.value]           = value;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("ratingSet", par, resultHandler, errorHandler).send();
};

/**
 * retrieve tag recommendations based on user, entity and tag combinations
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} forUserUri user to retrieve recommendations for
 * @param {URI} entityUri entity to get the recommendations for
 * @param {Integer} maxTags number of tags to be returned
 * @return {SSScaffRecommTagsRet} <br>
 * {String Array} tags recommended tags
 */
var SSScaffRecommTagsBasedOnUserEntityTag = function(resultHandler, errorHandler, user, key, forUserUri, entityUri, maxTags){
  
  var par                     = {};
  par[sSVarU.op]              = "scaffRecommTagsBasedOnUserEntityTag";
  par[sSVarU.user]            = user;
  par[sSVarU.key]             = key;
  
  if(!jSGlobals.isEmpty(forUserUri)){    par[sSVarU.forUserUri]      = forUserUri;}
  if(!jSGlobals.isEmpty(entityUri)){     par[sSVarU.entityUri]       = entityUri;}
  if(!jSGlobals.isEmpty(maxTags)){       par[sSVarU.maxTags]         = maxTags;}
  
  new SSJSONPOSTRequest("scaffRecommTagsBasedOnUserEntityTag", par, resultHandler, errorHandler).send();
};

/**
 * retrieve tag recommendations based on user, entity, tag and time combination
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} forUserUri user to retrieve recommendations for
 * @param {URI} entityUri entity to get the recommendations for
 * @param {Integer} maxTags number of tags to be returned
 * @return {SSScaffRecommTagsRet} <br>
 * {String Array} tags recommended tags
 */
var SSScaffRecommTagsBasedOnUserEntityTagTime = function(resultHandler, errorHandler, user, key, forUserUri, entityUri, maxTags){
  
  var par                     = {};
  par[sSVarU.op]              = "scaffRecommTagsBasedOnUserEntityTagTime";
  par[sSVarU.user]            = user;
  par[sSVarU.key]             = key;
  
  if(!jSGlobals.isEmpty(forUserUri)){    par[sSVarU.forUserUri]      = forUserUri;}
  if(!jSGlobals.isEmpty(entityUri)){     par[sSVarU.entityUri]       = entityUri;}
  if(!jSGlobals.isEmpty(maxTags)){       par[sSVarU.maxTags]         = maxTags;}
  
  new SSJSONPOSTRequest("scaffRecommTagsBasedOnUserEntityTagTime", par, resultHandler, errorHandler).send();
};

/**
 * retrieve tag recommendations based on user, entity, tag and category combination
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} forUserUri user to retrieve recommendations for
 * @param {URI} entityUri entity to get the recommendations for
 * @param {String Array} categories additional structural property of entities where recommendations should be calculated upon
 * @param {Integer} maxTags number of tags to be returned
 * @return {SSScaffRecommTagsRet} <br>
 * {String Array} tags recommended tags
 */
var SSScaffRecommTagsBasedOnUserEntityTagCategory = function(resultHandler, errorHandler, user, key, forUserUri, entityUri, categories, maxTags){
  
  var par                     = {};
  par[sSVarU.op]              = "scaffRecommTagsBasedOnUserEntityTagCategory";
  par[sSVarU.user]            = user;
  par[sSVarU.key]             = key;
  
  if(!jSGlobals.isEmpty(forUserUri)){    par[sSVarU.forUserUri]      = forUserUri;}
  if(!jSGlobals.isEmpty(entityUri)){     par[sSVarU.entityUri]       = entityUri;}
  if(!jSGlobals.isEmpty(categories)){    par[sSVarU.categories]      = jSGlobals.commaSeparateStringArray(categories);}
  if(!jSGlobals.isEmpty(maxTags)){       par[sSVarU.maxTags]         = maxTags;}
  
  new SSJSONPOSTRequest("scaffRecommTagsBasedOnUserEntityTagCategory", par, resultHandler, errorHandler).send();
};

/**
 * retrieve tag recommendations based on user, entity, tag, category and time combination
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} forUserUri user to retrieve recommendations for
 * @param {URI} entityUri entity to get the recommendations for
 * @param {String Array} categories additional structural property of entities where recommendations should be calculated upon
 * @param {Integer} maxTags number of tags to be returned
 * @return {SSScaffRecommTagsRet} <br>
 * {String Array} tags recommended tags
 */
var SSScaffRecommTagsBasedOnUserEntityTagCategoryTime = function(resultHandler, errorHandler, user, key, forUserUri, entityUri, categories, maxTags){
  
  var par                     = {};
  par[sSVarU.op]              = "scaffRecommTagsBasedOnUserEntityTagCategoryTime";
  par[sSVarU.user]            = user;
  par[sSVarU.key]             = key;
  
  if(!jSGlobals.isEmpty(forUserUri)){    par[sSVarU.forUserUri]      = forUserUri;}
  if(!jSGlobals.isEmpty(entityUri)){     par[sSVarU.entityUri]       = entityUri;}
  if(!jSGlobals.isEmpty(categories)){    par[sSVarU.categories]      = jSGlobals.commaSeparateStringArray(categories);}
  if(!jSGlobals.isEmpty(maxTags)){       par[sSVarU.maxTags]         = maxTags;}
  
  new SSJSONPOSTRequest("scaffRecommTagsBasedOnUserEntityTagCategoryTime", par, resultHandler, errorHandler).send();
};

/**
 * search for entities having given maturing indicators attached
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {String} searchOp search result combination strateg (i.e. and,or)
 * @param {String Array} mIs strings representing maturing indicators to search for
 * @return {SSSearchMIsRet} <br>
 * {SSSearchResult Array} searchResults found entities with label, type and space (private or shared)
 */
var SSSearchWithMIs = function(resultHandler, errorHandler, user, key, searchOp, mIs){
  
  var par                     = {};
  par[sSVarU.op]              = "searchMIs";
  par[sSVarU.user]            = user;
  par[sSVarU.searchOp]        = searchOp;
  par[sSVarU.mIs]             = jSGlobals.commaSeparateStringArray(mIs);
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("searchMIs", par, resultHandler, errorHandler).send();
};

/**
 * search for entities containing content-based keywords given
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {String} searchOp search result combination strateg (i.e. and,or)
 * @param {String Array} keywords strings representing content-based keywords to search for
 * @return {SSSearchSolrRet} <br>
 * {SSSearchResult Array} searchResults found entities with label, type and space (private or shared)
 */
var SSSearchWithSolr = function(resultHandler, errorHandler, user, key, searchOp, keywords){
  
  var par                     = {};
  par[sSVarU.op]              = "searchSolr";
  par[sSVarU.user]            = user;
  par[sSVarU.searchOp]        = searchOp;
  par[sSVarU.keywords]        = jSGlobals.commaSeparateStringArray(keywords);
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("searchSolr", par, resultHandler, errorHandler).send();
};

/**
 * search for entities with given tags attached
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {String} key auth key
 * @param {String} searchOp search result combination strateg (i.e. and,or)
 * @param {String Array} tags strings representing tags to search for
 * @param {Integer} maxResultsPerTag max results per tag found to be returned
 * @return {SSSearchTagsRet} <br>
 * {SSSearchResult Array} searchResults found entities with label, type and space (private or shared)
 */
var SSSearchWithTags = function(resultHandler, errorHandler, user, key, searchOp, tags, maxResultsPerTag){
  
  var par                      = {};
  par[sSVarU.op]               = "searchTags";
  par[sSVarU.user]             = user;
  par[sSVarU.searchOp]         = searchOp;
  par[sSVarU.tags]             = jSGlobals.commaSeparateStringArray(tags);
  par[sSVarU.maxResultsPerTag] = maxResultsPerTag;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("searchTags", par, resultHandler, errorHandler).send();
};

/**
 * search for entities with given tags attached within given entity
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} entityUri entity to be searched within
 * @param {String Array} tagLabels strings representing tags to be searched for
 * @return {SSSearchTagsWithinEntityRet} <br>
 * {SSSearchResult Array} searchResults found entities with label, type and space (private or shared)
 */
var SSSearchWithTagsWithinEntity = function(resultHandler, errorHandler, user, key, entityUri, tagLabels){
  
  var par                      = {};
  par[sSVarU.op]               = "searchTagsWithinEntity";
  par[sSVarU.user]             = user;
  par[sSVarU.entityUri]        = entityUri;
  par[sSVarU.tagLabels]        = jSGlobals.commaSeparateStringArray(tagLabels);
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("searchTagsWithinEntity", par, resultHandler, errorHandler).send();
};

/**
 * add a tag in given space for an entity
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} resource entity’ to add tag for
 * @param {String} tagString label of the tag to add
 * @param {String} space access restriction for the tag (i.e. private,public)
 * @return {SSTagAddRet} <br>
 * {Boolean} worked whether adding the tag worked
 */
var SSTagAdd = function(resultHandler, errorHandler, user, key, resource, tagString, space){
  
  var par                       = {};
  par[sSVarU.op]               = "tagAdd";
  par[sSVarU.user]             = user;
  par[sSVarU.resource]         = resource;
  par[sSVarU.tagString]        = tagString;
  par[sSVarU.space]            = space;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("tagAdd", par, resultHandler, errorHandler).send();
};

/**
 * retrieve tag assignments user, tag and space combination
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} resource entity to retrieve tags for
 * @param {String} tagString tag label to consider for retrieving tag assignments
 * @param {String} space access restriction for the tag (i.e. private,public)
 * @return {SSTagUserFrequsGetRet} <br> 
 * {SSTagFrequ Array} tagFrequs tag assignments with frequency for user, entity, tag and space combination
 */
var SSTagFrequsGet = function(resultHandler, errorHandler, user, key, resource, tagString, space){
  
  var par                      = {};
  par[sSVarU.op]               = "tagFrequsGet";
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  if(!jSGlobals.isEmpty(resource)){  par[sSVarU.resource]         = resource;}
  if(!jSGlobals.isEmpty(tagString)){ par[sSVarU.tagString]        = tagString;}
  if(!jSGlobals.isEmpty(space)){     par[sSVarU.space]            = space;}
  
  new SSJSONPOSTRequest("tagFrequsGet", par, resultHandler, errorHandler).send();
};

/**
 * remove tag, user, entity, space combinations
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} resource entity to consider removing tag assignments from
 * @param {String} tagString label of the tag to consider when removing tag-assignments
 * @param {String} space access restriction (i.e. private,public) for tag-assignments to be removed
 * @return {SSTagsUserRemoveRet} <br>
 * {Boolean} worked whether removing desired tag-assignments worked
 */
var SSTagsRemove = function(resultHandler, errorHandler, user, key, resource, tagString, space){
  
  var par                      = {};
  par[sSVarU.op]               = "tagsRemove";
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  if(!jSGlobals.isEmpty(resource)){  par[sSVarU.resource]         = resource;}
  if(!jSGlobals.isEmpty(tagString)){ par[sSVarU.tagString]        = tagString;}
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
 * @param {String} eventType type of the event
 * @param {URI} resource entity with which some interaction shall be traced
 * @param {String} content possible additional textual information of the trace
 * @return {SSUEAddRet} <br>
 * {Boolean} worked whether adding the user event worked
 */
var SSUserEventAdd = function(resultHandler, errorHandler, user, key, eventType, resource, content){
  
  var par                      = {};
  par[sSVarU.op]               = "uEAdd";
  par[sSVarU.user]             = user;
  par[sSVarU.eventType]        = eventType;
  par[sSVarU.key]              = key;
  
  if(!jSGlobals.isEmpty(resource)){ par[sSVarU.resource]         = resource;}
  if(!jSGlobals.isEmpty(content)){  par[sSVarU.content]          = content;}
  
  new SSJSONPOSTRequest("uEAdd", par, resultHandler, errorHandler).send();
};

/**
 * retrieve user events for user, entity, time combination
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} forUser user to retrieve user events for
 * @param {URI} resource entity to retrieve user events for
 * @param {Long} startTime start timestamp for retrieving user events for
 * @param {Long} endTime end timestamp for retrieving user events for
 * @return {SSUEsGetRet} <br>
 * {SSUE Array} uEs user events found
 */
var SSUserEventsGet = function(resultHandler, errorHandler, user, key, forUser, resource, startTime, endTime){
  
  var par                      = {};
  par[sSVarU.op]               = "uEsGet";
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  if(!jSGlobals.isEmpty(forUser)){   par[sSVarU.forUser]          = forUser;}
  if(!jSGlobals.isEmpty(resource)){  par[sSVarU.resource]         = resource;}
  if(!jSGlobals.isEmpty(startTime)){ par[sSVarU.startTime]        = startTime;}
  if(!jSGlobals.isEmpty(endTime)){   par[sSVarU.endTime]          = endTime;}
  
  new SSJSONPOSTRequest("uEsGet", par, resultHandler, errorHandler).send();
};

/**
 * retrieve given user event
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} ueUri user event to retrieve
 * @return {SSUEGetRet} <br>
 * {SSUE} uE user event in question
 */
var SSUserEventGet = function(resultHandler, errorHandler, user, key, ueUri){
  
  var par                      = {};
  par[sSVarU.op]               = "uEGet";
  par[sSVarU.user]             = user;
  par[sSVarU.ueUri]            = ueUri;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("uEGet", par, resultHandler, errorHandler).send();
};
