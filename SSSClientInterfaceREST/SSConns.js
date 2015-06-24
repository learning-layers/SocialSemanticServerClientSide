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
 * add an activity
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {String} type type of the activity
 * @param {URI Array} users users which have been involved in the activity (optional)
 * @param {URI Array} entities entities which have been involved in the activity (optional)
 * @param {String Array} comments textual comments to this activity (optional)
 * @return {SSActivityUserAddRet} <br>
 * {SSURI} activity id of the activity stored
 */
var SSActivityAdd = function(
  resultHandler, 
errorHandler, 
user, 
key, 
type,
users,
entities,
comments){
  
  var par               = {};
  par[sSVarU.user]      = user;
  par[sSVarU.key]       = key;
  
  if(!jSGlobals.isEmpty(type)){           par[sSVarU.type]                 = type;}
  if(!jSGlobals.isEmpty(users)){          par[sSVarU.users]               = users;}
  if(!jSGlobals.isEmpty(entities)){       par[sSVarU.entities]            = entities;}
  if(!jSGlobals.isEmpty(comments)){       par[sSVarU.comments]             = comments;}
  
  new SSJSONPOSTRequest("activityAdd", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
};
/**
 * retrieve available activity types
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @return {SSActivityTypesGetRet} <br>
 * {SSActivityE Array} types of possible activities
 */
var SSActivityTypesGet = function(
  resultHandler, 
errorHandler, 
user, 
key){
  
  var par               = {};
  par[sSVarU.user]      = user;
  par[sSVarU.key]       = key;
  
  new SSJSONPOSTRequest("activityTypesGet", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
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
 * @param {URI Array} circles groups for which activities shall be retrieved (optional)
 * @param {Long} startTime time frame start (optional)
 * @param {Long} endTime time frame end (optional)
 * @param {Boolean} includeOnlyLastActivities whether only the last activity - for the combination of the activities' author, targeted entity and type - shall be retrieved
 * @return {SSActivitiesUserGetRet} <br>
 * {SSActivity Array} activities activities for given query
 */
var SSActivitiesGet = function(
  resultHandler, 
errorHandler, 
user, 
key, 
types, 
users, 
entities, 
circles,
startTime, 
endTime,
includeOnlyLastActivities){
  
  var par               = {};
  par[sSVarU.user]      = user;
  par[sSVarU.key]       = key;
  
  if(!jSGlobals.isEmpty(types)){                      par[sSVarU.types]                     = types;}
  if(!jSGlobals.isEmpty(users)){                      par[sSVarU.users]                     = users;}
  if(!jSGlobals.isEmpty(entities)){                   par[sSVarU.entities]                  = entities;}
  if(!jSGlobals.isEmpty(circles)){                    par[sSVarU.circles]                   = circles;}
  if(!jSGlobals.isEmpty(startTime)){                  par[sSVarU.startTime]                 = startTime;}
  if(!jSGlobals.isEmpty(endTime)){                    par[sSVarU.endTime]                   = endTime;}
  if(!jSGlobals.isEmpty(includeOnlyLastActivities)){  par[sSVarU.includeOnlyLastActivities] = includeOnlyLastActivities;}
  
  new SSJSONPOSTRequest("activitiesGet", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
};

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
  par[sSVarU.user]             = user;
  par[sSVarU.entity]           = entity;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("entityPublicSet", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
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
  par[sSVarU.user]                = user;
  par[sSVarU.entity]              = entity;
  par[sSVarU.removeUserTags]      = removeUserTags;
  par[sSVarU.removeUserRatings]   = removeUserRatings;
  par[sSVarU.removeFromUserColls] = removeFromUserColls;
  par[sSVarU.removeUserLocations] = removeUserLocations;
  par[sSVarU.key]                 = key;
  
  new SSJSONPOSTRequest("entityDirectlyAdjoinedEntitiesRemove", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
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
  par[sSVarU.user]            = user;
  par[sSVarU.entity]          = entity;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("entityGet", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
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
 * @param {Boolean} getCircles whether circles the entity is in shall be included
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
getFlags,
getCircles){
  
  var par                         = {};
  par[sSVarU.user]                = user;
  par[sSVarU.entity]              = entity;
  par[sSVarU.key]                 = key;
  
  if(!jSGlobals.isEmpty(getTags)){          par[sSVarU.getTags]             = getTags;}
  if(!jSGlobals.isEmpty(getOverallRating)){ par[sSVarU.getOverallRating]    = getOverallRating;}
  if(!jSGlobals.isEmpty(getDiscs)){         par[sSVarU.getDiscs]            = getDiscs;}
  if(!jSGlobals.isEmpty(getUEs)){           par[sSVarU.getUEs]              = getUEs;}
  if(!jSGlobals.isEmpty(getThumb)){         par[sSVarU.getThumb]            = getThumb;}
  if(!jSGlobals.isEmpty(getFlags)){         par[sSVarU.getFlags]            = getFlags;}
  if(!jSGlobals.isEmpty(getCircles)){       par[sSVarU.getCircles]          = getCircles;}
  
  new SSJSONPOSTRequest("entityDescGet", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
};

/**
 * retrieve more detailed information for given entities of a user
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI Array} entities entities to get details for (optional if types is set)
 * @param {String Array} types of entities (optional if entities is set)
 * @param {Boolean} getTags whether tags for entities should be delivered (optional)
 * @param {Boolean} getOverallRating whether overall ratings for entities should be delivered (optional)
 * @param {Boolean} getDiscs whether discussion uris for entities shall be included (optional)
 * @param {Boolean} getUEs whether user events for user's given/resulting entities shall be returned (optional)
 * @param {Boolean} getThumb whether a thumbnail for files should be included (optional)
 * @param {Boolean} getFlags whether flags for the user's entities should be included (optional)
 * @return {SSEntityDescsGetRet} <br>
 * {SSEntityDescA Array} descs entities' details
 */
var SSEntityDescsGet = function(
  resultHandler, 
errorHandler, 
user, 
key, 
entities,
types,
getTags,
getOverallRating, 
getDiscs, 
getUEs, 
getThumb, 
getFlags){
  
  var par                         = {};
  par[sSVarU.user]                = user;
  par[sSVarU.key]                 = key;
  
  if(!jSGlobals.isEmpty(entities)){         par[sSVarU.entities]            = entities;}
  if(!jSGlobals.isEmpty(types)){            par[sSVarU.types]               = types;}
  if(!jSGlobals.isEmpty(getTags)){          par[sSVarU.getTags]             = getTags;}
  if(!jSGlobals.isEmpty(getOverallRating)){ par[sSVarU.getOverallRating]    = getOverallRating;}
  if(!jSGlobals.isEmpty(getDiscs)){         par[sSVarU.getDiscs]            = getDiscs;}
  if(!jSGlobals.isEmpty(getUEs)){           par[sSVarU.getUEs]              = getUEs;}
  if(!jSGlobals.isEmpty(getThumb)){         par[sSVarU.getThumb]            = getThumb;}
  if(!jSGlobals.isEmpty(getFlags)){         par[sSVarU.getFlags]            = getFlags;}
  
  new SSJSONPOSTRequest("entityDescsGet", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
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
  par[sSVarU.user]              = user;
  par[sSVarU.learnEpVersion]    = learnEpVersion;
  par[sSVarU.key]               = key;
  
  new SSJSONPOSTRequest("learnEpVersionCurrentSet", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
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
  par[sSVarU.user]              = user;
  par[sSVarU.key]               = key;
  
  new SSJSONPOSTRequest("learnEpVersionCurrentGet", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
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
  par[sSVarU.user]              = user;
  par[sSVarU.learnEpVersion]    = learnEpVersion;
  par[sSVarU.startTime]         = startTime;
  par[sSVarU.endTime]           = endTime;
  par[sSVarU.key]               = key;
  
  new SSJSONPOSTRequest("learnEpVersionSetTimelineState", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
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
  par[sSVarU.user]              = user;
  par[sSVarU.learnEpVersion]    = learnEpVersion;
  par[sSVarU.key]               = key;
  
  new SSJSONPOSTRequest("learnEpVersionGetTimelineState", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
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
  par[sSVarU.user]             = user;
  par[sSVarU.learnEpCircle]    = learnEpCircle;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("learnEpVersionRemoveCircle", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
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
  par[sSVarU.user]             = user;
  par[sSVarU.learnEpEntity]    = learnEpEntity;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("learnEpVersionRemoveEntity", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
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
  
  new SSJSONPOSTRequest("learnEpVersionUpdateCircle", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
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
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  if(!jSGlobals.isEmpty(learnEpEntity)){   par[sSVarU.learnEpEntity] = learnEpEntity;}
  if(!jSGlobals.isEmpty(entity)){          par[sSVarU.entity]        = entity;}
  if(!jSGlobals.isEmpty(x)){               par[sSVarU.x]             = x;}
  if(!jSGlobals.isEmpty(y)){               par[sSVarU.y]             = y;}
  
  new SSJSONPOSTRequest("learnEpVersionUpdateEntity", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
};

/**
 * checks whether the current user holds the lock on given episode
 * @deprecated
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} learnEp episode to be checked
 * @return {SSLearnEpLockHoldRet} <br>
 * {SSUri} learnEp episode lock information was queried for <br>
 * {Boolean} lockedByUser whether episode is locked by current user <br>
 * {Boolean} locked whether episode is locked <br>
 * {Long} remainingTime time remaining for automatic release of lock
 */
var SSLearnEpLockHold = function(resultHandler, errorHandler, user, key, learnEp){
  
  var par                      = {};
  par[sSVarU.user]             = user;
  par[sSVarU.learnEp]          = learnEp;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("learnEpLockHold", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
};

/**
 * checks whether locks are set for episodes
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI Array} learnEps episodes to be checked (if left empty, user's episodes will be checked)
 * @return {SSLearnEpsLockHoldRet} <br>
 * {SSLearnEpLockHoldRet Array} learnEpLocks lock information for episodes
 */
var SSLearnEpsLockHold = function(resultHandler, errorHandler, user, key, learnEps){
  
  var par                      = {};
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  if(!jSGlobals.isEmpty(learnEps)){      par[sSVarU.learnEps]        = learnEps;}
  
  new SSJSONPOSTRequest("learnEpsLockHold", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
};

/**
 * locks an learning episode to be edited by given user only
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} forUser user to the be allowed to edit the episode
 * @param {URI} learnEp learning episode which shall be editable by user only
 * @return {SSLearnEpLockSetRet} <br>
 * {Boolean} worked whether setting the lock worked
 */
var SSLearnEpLockSet = function(resultHandler, errorHandler, user, key, forUser, learnEp){
  
  var par                      = {};
  par[sSVarU.user]             = user;
  par[sSVarU.forUser]          = forUser;
  par[sSVarU.learnEp]          = learnEp;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("learnEpLockSet", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
};

/**
 * unlocks an learning episode to be edited by given user only
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} forUser user holding the lock on the episode
 * @param {URI} learnEp learning episode which shall able to be locked by all users again
 * @return {SSLearnEpLockRemoveRet} <br>
 * {Boolean} worked whether releasing the lock worked
 */
var SSLearnEpLockRemove = function(resultHandler, errorHandler, user, key, forUser, learnEp){
  
  var par                      = {};
  par[sSVarU.user]             = user;
  par[sSVarU.forUser]          = forUser;
  par[sSVarU.learnEp]          = learnEp;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("learnEpLockRemove", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
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
  par[sSVarU.user]             = user;
  par[sSVarU.label]            = label;
  par[sSVarU.key]              = key;
  
  if(!jSGlobals.isEmpty(description)){  par[sSVarU.description]    = description;}
  
  new SSJSONPOSTRequest("learnEpCreate", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
};

/**
 * remove a learning episode from given user
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {String} learnEp episode to be removed
 * @return {SSLearnEpRemoveRet} <br>
 * {SSUri} learnEp learning episode removed
 */
var SSLearnEpRemove = function(resultHandler, errorHandler, user, key, learnEp){
  
  var par                      = {};
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  par[sSVarU.learnEp]          = learnEp;
  
  new SSJSONPOSTRequest("learnEpRemove", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
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
  par[sSVarU.user]             = user;
  par[sSVarU.learnEp]          = learnEp;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("learnEpVersionCreate", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
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
  
  new SSJSONPOSTRequest("learnEpVersionAddCircle", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
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
  par[sSVarU.user]              = user;
  par[sSVarU.learnEpVersion]    = learnEpVersion;
  par[sSVarU.entity]            = entity;
  par[sSVarU.x]                 = x;
  par[sSVarU.y]                 = y;
  par[sSVarU.key]               = key;
  
  new SSJSONPOSTRequest("learnEpVersionAddEntity", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
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
  par[sSVarU.user]              = user;
  par[sSVarU.learnEpVersion]    = learnEpVersion;
  par[sSVarU.key]               = key;
  
  new SSJSONPOSTRequest("learnEpVersionGet", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
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
  par[sSVarU.user]              = user;
  par[sSVarU.learnEp]           = learnEp;
  par[sSVarU.key]               = key;
  
  new SSJSONPOSTRequest("learnEpVersionsGet", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
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
  par[sSVarU.user]              = user;
  par[sSVarU.key]               = key;
  
  new SSJSONPOSTRequest("learnEpsGet", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
};

/**
 * add a new entity of type "entity"
 * @param {Function} resultHandler
 * @param {Function} errorHandler
 * @param {URI} user the user's uri
 * @param {String} key auth key
 * @param {URI} link the URI for the entity (optional; if used, set as ID)
 * @param {String} type either "palceholder" or "entity" currently
 * @param {String} label entity's title
 * @param {String} description entity's description
 * @param {Long} creationTime alleged time of creation
 * @return {SSEntityUserAddRet} <br>
 * {URI} entity uri of the new entity
 */
var SSEntityAdd = function(
  resultHandler, 
errorHandler, 
user, 
key, 
link, 
type,
label, 
description, 
creationTime){
  
  var par                      = {};
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  if(!jSGlobals.isEmpty(link)){              par[sSVarU.link]          = link;}
  if(!jSGlobals.isEmpty(type)){              par[sSVarU.type]          = type;}
  if(!jSGlobals.isEmpty(label)){             par[sSVarU.label]         = label;}
  if(!jSGlobals.isEmpty(description)){       par[sSVarU.description]   = description;}
  if(!jSGlobals.isEmpty(creationTime)){      par[sSVarU.creationTime]  = creationTime;}
  
  new SSJSONPOSTRequest("entityAdd", par, resultHandler, errorHandler, sSGlobals.hostREST).send();
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