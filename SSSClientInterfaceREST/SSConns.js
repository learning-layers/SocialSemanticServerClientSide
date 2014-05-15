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
 * retrieve the key and the uri of the user for the userLabel if given credentials match
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {string} userLabel name of the user, e.g. hugo
 * @param {string} password the user’s password
 * @return {SSAuthCheckCredRet} the user’s session key and its uri
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
 * retreive the user's collections the entity is in
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} entityUri uri to retrieve the user's collections for
 * @return {SSCollsUserEntityIsInGetRet} user's collections the entity is contained in
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} collUri uri for the collection to retrieve all cumulated tags for
 * @return {SSCollUserCummulatedTagsGetRet} all tags (and their frequencies) for sub collections and respective entities
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
 * retreive the parent collectin for given user collection URI
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key 
 * @param {URI} coll uri to retreive partent coll for
 * @return {SSCollUserParentGetRet} parent coll with entries
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
 * retrieve the user's root collection for given user URI
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @return {SSCollUserRootGetRet} root coll for the user
 */
var SSCollRootGet = function(resultHandler, errorHandler, user, key){
  
  var par                = {};
  par[sSVarU.op]         = "collRootGet";
  par[sSVarU.user]       = user;
  par[sSVarU.key]        = key;
  
  new SSJSONPOSTRequest("collRootGet", par, resultHandler, errorHandler).send();
};

/**
 * add a (new) collection or any other entity to the user's collection
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} coll collection’s uri
 * @param {URI} collEntry the new collection item’s uri, e.g. http://www.google.com, http://space.app/coll/1234567, http://space.app/user/hugo
 * @param {string} collEntryLabel label for the collection item to add, e.g. google, testCollection, hugoFromPortugal
 * @param {boolean} addNewColl whether a new collection should be created and added as entry
 * @return {SSCollUserEntryAddRet} uri of the collection entry
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
 * add a (new) collection or any other entity to the user's collection
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key 
 * @param {URI} coll collection’s uri
 * @param {array} entries the new collection item uris, e.g. http://www.google.com, http://space.app/coll/1234567, http://space.app/user/hugo
 * @param {array} entryLabels labels for the collection items to add, e.g. google, testCollection, hugoFromPortugal
 * @return {SSCollUserEntriesAddRet} boolean whether adding worked
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} coll collection’s uri
 * @param {array} order  containing collection entries and their positions in the form of [collEntryUri1,pos1,collEntryUri2,pos2,…]
 * @return {SSCollUserEntryChangePosRet} boolean whether changing positions worked
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
 * delete an entry from a user's collection
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} coll collection’s uri
 * @param {URI} collEntry collection entry uri to delete from collection
 * @return {SSCollUserEntryDeleteRet} boolean whether deleting the collection entry worked
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {URI} user the user's uri 
 * @param {URI} coll uri for the collection containing the entries 
 * @param {array} coll entry uris to delete
 * @return {} description
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
 * retrieve the user's collection with entries for given collection uri
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} coll: collection’s uri
 * @return {SSCollUserWithEntriesRet} collection with entries requested
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @return {SSCollsUserWithEntriesRet} collections of the user with entries
 */
var SSCollsWithEntries = function(resultHandler, errorHandler, user, key){
  
  var par                      = {};
  par[sSVarU.op]               = "collsWithEntries";
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("collsWithEntries", par, resultHandler, errorHandler).send();
};

/**
 * retrieve the order of parent collection uris for a given user's collection uri
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} collUri the collection's uri to retrieve it's hierarchy for
 * @return {SSCollUserHierarchyGetRet} parent collection uris for given collection ordered by the hierarchy parent collections
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @return {SSCollsUserCouldSubscribeGetRet} a list of public collections without entries from within SSS
 */
var SSCollsCouldSubscribeGet = function(resultHandler, errorHandler, user, key){
  
  var par                      = {};
  par[sSVarU.op]               = "collsCouldSubscribeGet";
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("collsCouldSubscribeGet", par, resultHandler, errorHandler).send();
};

/**
 * add a textual entry / comment to a discussion for given uri or create a new one for given user
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} disc discussion uri to add a comment for
 * @param {URI} target uri of the entity to start a discussion for
 * @param {string} content text of the discussion comment
 * @return {SSDiscUserEntryAddRet} uris for the discussion and its entry
 */
var SSDiscEntryAdd = function(resultHandler, errorHandler, user, key, disc, target, content, addNewDisc){
  
  var par                = {};
  par[sSVarU.op]         = "discEntryAdd";
  par[sSVarU.user]       = user;
  par[sSVarU.key]        = key;
  
  if(!jSGlobals.isEmpty(disc)){       par[sSVarU.disc]       = disc;}
  if(!jSGlobals.isEmpty(target)){     par[sSVarU.target]     = target;}
  if(!jSGlobals.isEmpty(content)){    par[sSVarU.content]    = content;}
  if(!jSGlobals.isEmpty(addNewDisc)){ par[sSVarU.addNewDisc] = addNewDisc;}
  
  new SSJSONPOSTRequest("discEntryAdd", par, resultHandler, errorHandler).send();
};

/**
 * retrieve the discussion for given uri with its entries / comments for given user
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} disc discussion’s uri
 * @return {SSDiscUserWithEntriesRet} discussion with its entries
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
 * retrive all discussion uris from within the system the user is allowed to see
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @return {SSDiscsUserAllGetRet} list of discussions from within SSS without entries
 */
var SSDiscsAllGet = function(resultHandler, errorHandler, user, key){
  
  var par                     = {};
  par[sSVarU.op]              = "discsAllGet";
  par[sSVarU.user]            = user;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("discsAllGet", par, resultHandler, errorHandler).send();
};

/**
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @return {} description
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
 * retrieve the circles the user is in
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @return {SSEntityUserCirclesGetRet} all user-generated circles the user is in
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} circleUri uri for the circle to add entities to
 * @param {array} entityUris entity uris to add
 * @return {SSEntityUserEntitiesToCircleAddRet} the circle uri
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} circleUri uri for the circle to add entities to
 * @param {array} userUris user uris to add
 * @return {SSEntityUserUsersToCircleAddRet} the circle uri
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {string} label the name of the circle
 * @param {array} entityUris entity uris to add to
 * @param {array} userUris user uris to add
 * @return {SSEntityUserCircleCreateRet} the circle uri
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} entityUri the uri of the entity to make public
 * @return {SSEntityUserPublicSetRet} entity uri
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} entityUri the uri of the entity to be shared
 * @param {array} userUris user uris
 * @param {string} comment textual comment for sharing
 * @return {SSEntityUserShareRet} the entity uri
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
 * remove certain "attributes" from an entity which have been assigned by the user
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} entityUri entity’s uri to remove certain user attached entities
 * @param {boolean} removeUserTags whether the user's tags should be removed
 * @param {boolean} removeUserRatings whether the user's ratings should be removed
 * @param {boolean} removeFromUserColls whether the entity should be removed from all the user's collections
 * @param {boolean} removeUserLocations whether locations added by the user should be removed
 * @return {SSEntityUserDirectlyAdjoinedEntitiesRemoveRet} the URI of the entity
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key 
 * @return {} description
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
 * set the name of an entity within the system
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} entityUri entity’s uri to set the name for
 * @param {string} label name for the entity
 * @return {SSEntityLabelSetRet} boolean whether setting the lable for the entity worked
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
 * retrieve more detailed information for a given entity uri
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} entityUri entity’s uri to get details for
 * @param {boolean} getTags whether tags for the entity should be delivered
 * @param {boolean} getOverallRating whether the overall rating for the entity should be delivered
 * @param {boolean} getDiscUris whether the uris of discussions targeting the entity should be returned
 * @return {SSEntityDescGetRet} details for an entity, i.e. label, uri, creationTime and type of the entity beside information chosen to be returned by parameters
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @return {} description
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
 * retrieve whether the user can download a file with write access
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} uri file’s uri
 * @return {SSFileCanWriteRet} whether downloading a file with write acces will work
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
 * register the current user as writer or readed for given file uri
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} uri file’s uri
 * @param {boolean} write whether set the user as writer
 * @return {SSFileSetReaderOrWriterRet} whether setting the user as writer for the file worked
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
 * retrieve file uris the user currently has right to replace after uploading again (because he downloaded given files in write mode)
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @return {SSFileGetEditingFilesRet} file uris and names the user is currently able to replace because he has write permission on
 */
var SSFileUserFileWrites = function(resultHandler, errorHandler, user, key){
  
  var par                     = {};
  par[sSVarU.op]              = "fileUserFileWrites";
  par[sSVarU.user]            = user;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("fileUserFileWrites", par, resultHandler, errorHandler).send();
};

/**
 * retrieve the number of minutes the user is allowed to replace / re-upload a file
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} uri file’s uri
 * @param {string} fileName name of the file to return by the resultHandler
 * @param {integer} minutesLeftLastTime minutes the user had left the last time to be returned by the resultHandler as well
 * @return {SSFileWritingMinutesLeftRet} number of minutes left to re-upload/replace file downloaded with write permission
 */
var SSFileWritingMinutesLeft = function(resultHandler, errorHandler, user, key, uri, fileName, minutesLeftLastTime){
  
  var par                     = {};
  par[sSVarU.op]              = "fileWritingMinutesLeft";
  par[sSVarU.user]            = user;
  par[sSVarU.uri]             = uri;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("fileWritingMinutesLeft", par, resultHandler, errorHandler).send();
};

/**
 * retrieve the JSON-LD description of an entity (uri) returned by the SSS
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URi} uri entity's uri to retrieve the description for
 * @return {JSONLD} the JSON-LD description for given entity
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
 * download a file from the SSS
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} fileUri file’s uri
 * @return {Blob} the binary file
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
 * upload a file to the SSS
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {File} file handle for the file from HTML file api
 * @param {URI} collUri uri of the collection where the file should be added to
 * @return {URI} uri of the uploaded file
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
 * replace a file on SSS with a newer version of it
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} uri file’s uri
 * @param {File} file handle for the file retrieved from HTML file api
 * @return {SSFileReplaceRet} the uri of replaced file
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
  
  formData.append(sSVarU.file,     this.file);
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @return {} description
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @return {} description
 */
var SSLearnEpVersionCurrentGet = function(resultHandler, errorHandler, user, key){
  
  var par                       = {};
  par[sSVarU.op]                = "learnEpVersionCurrentGet";
  par[sSVarU.user]              = user;
  par[sSVarU.key]               = key;
  
  new SSJSONPOSTRequest("learnEpVersionCurrentGet", par, resultHandler, errorHandler).send();
};

/**
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @return {} description
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @return {} description
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @return {} description
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @return {} description
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @return {} description
 */
var SSLearnEpVersionUpdateCircle = function(resultHandler, errorHandler, user, key, learnEpCircleUri, label, xLabel, yLabel, xR, yR, xC, yC){
  
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @return {} description
 */
var SSLearnEpVersionUpdateEntity = function(resultHandler, errorHandler, user, key, learnEpEntityUri, entityUri, x, y){
  
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @return {} description
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @return {} description
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key 
 * @return {} description
 */
var SSLearnEpVersionAddCircle = function(resultHandler, errorHandler, user, key, learnEpVersionUri, label, xLabel, yLabel, xR, yR, xC, yC){
  
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @return {} description
 */
var SSLearnEpVersionAddEntity = function(resultHandler, errorHandler, user, key, learnEpVersionUri, entityUri, x, y){
  
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @return {} description
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @return {} description
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @return {} description
 */
var SSLearnEpsGet = function(resultHandler, errorHandler, user, key){
  
  var par                       = {};
  par[sSVarU.op]                = "learnEpsGet";
  par[sSVarU.user]              = user;
  par[sSVarU.key]               = key;
  
  new SSJSONPOSTRequest("learnEpsGet", par, resultHandler, errorHandler).send();
};

/**
 * add a location for a given entity as text (e.g. freestyle location format currently)
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} entityUri entity’s uri to add the location for
 * @param {string} location location of the entity as text
 * @return {SSLocationAddRet} entity's uri
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
 * retrieve locations for an entity given
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} entityUri entity’s uri to get its locations for
 * @return {SSLocationsGetRet} the current locations of an entity
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
 * retrieve automatically modeled details for given entity's uri
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} resource entity’s uri to retrieve usage based details for
 * @return {SSModelUEResourceDetailsRet} related users, author, maturing indicators, editors, recent entities worked with, recent tags worked with, entities contributed to and tags scores if available respectively
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} resource entity’s uri to retrieve the overall rating for
 * @return {SSRatingOverallGetRet} value of the overall rating for the entity and the total rating frequency
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
 * set the user's rating for given resource
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} resource entity’s uri to set the user’s rating for
  *@param {integer} value rating value (1,2,3,4 or 5)
 * @return {SSRatingUserSetRet} boolean whether setting the rating worked
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} forUserUri uri of the user to retrieve recommendations for
 * @param {URI} entityUri entity’s uri to get the recommendations for
 * @param {integer} maxTags number of tags to be returned
 * @return {SSScaffRecommTagsRet} string list of tags recommended
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} forUserUri uri of the user to retrieve recommendations for
 * @param {URI} entityUri entity’s uri to get the recommendations for
 * @param {integer} maxTags number of tags to be returned
 * @return {SSScaffRecommTagsRet} string list of tags recommended
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} forUserUri uri of the user to retrieve recommendations for
 * @param {URI} entityUri entity’s uri to get the recommendations for
 * @param {arrray} categories categories the recommendation should take into account
 * @param {integer} maxTags number of tags to be returned
 * @return {SSScaffRecommTagsRet} string list of tags recommended
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} forUserUri uri of the user to retrieve recommendations for
 * @param {URI} entityUri entity’s uri to get the recommendations for
 * @param {array} categories categories the recommendation should take into account
 * @param {integer} maxTags number of tags to be returned
 * @return {SSScaffRecommTagsRet} string list of tags recommended
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
 * retrieve entities having given maturing indicators attached
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {string} searchOp either “and” or “or” to combine search results found by SSS
 * @param {array} mIs: strings containing maturing indicators
 * @return {SSSearchMIsRet} found entities with label, type and space (private or shared)
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
 * retrieve entities found for content-based keywords given
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {string} searchOp either “and” or “or” to combine search results found by SSS
 * @param {array} keywords strings containing keywords
 * @return {SSSearchSolrRet} found entities with label, type, and space (private or shared)
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
 * retrieve entities for given tags
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {string} searchOp either “and” or “or” to combine search results found by SSS
 * @param {array} tags strings containing list of tags
 * @param {integer} maxResultsPerTag max results per tag found to be returned
 * @return {SSSearchTagsRet} found entities with label, type and space (private or shared)
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @return {} description
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} resource entity’s uri to add tag for
 * @param {string} tagString label of the tag to add
 * @param {string} space access restriction for the tag (private or public)
 * @return {SSTagAddRet} boolean whether adding the tag worked
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
 * retrieve tag assignments for the user, tag and space combination
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} resource entity’s uri to retrieve tags for
 * @param {string} tagString tag’s label
 * @param {string} space: access restriction for the tag (private or public) combinations to retrieve
 * @return {SSTagUserFrequsGetRet} tag assignments with frequency for the user, resource, tag and space combination
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
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @return {} description
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
 * retrieves the list of users in the system
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @return {SSUserAllRet} users in the system
 */
var SSUserAll = function(resultHandler, errorHandler, user, key){
  
  var par                      = {};
  par[sSVarU.op]               = "userAll";
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("userAll", par, resultHandler, errorHandler).send();
};

/**
 * add a trace (user event) for a given entity and user combination
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {string} eventType the event’s type
 * @param {URI} resource the entity’s uri
 * @param {string} content possible content for the user event
 * @return {SSUEAddRet} boolean whether adding the user event worked
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
 * retrieve user events for given user and resource combination in given time frame
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} forUser user’s uri to retrieve user events for (can be left null if all users wanted)
 * @param {URI} resource entity’s uri to retrieve user events for (can be left null if for all entities)
 * @param {long} startTime start timestamp for retrieving user events for
 * @param {long} endTime end timestamp for retrieving user events for (can be left null if wanted up till time of the call)
 * @return {SSUEsGetRet} a list of user events found
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
 * retrieve a certain user event for given uri
 * @param {function} resultHandler
 * @param {function} errorHandler
 * @param {URI} user the user's uri
 * @param {string} key auth key
 * @param {URI} ueUri the uri for the user event
 * @return {SSUEGetRet} the user event for given uri
 */
var SSUserEventGet = function(resultHandler, errorHandler, user, key, ueUri){
  
  var par                      = {};
  par[sSVarU.op]               = "uEGet";
  par[sSVarU.user]             = user;
  par[sSVarU.ueUri]            = ueUri;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("uEGet", par, resultHandler, errorHandler).send();
};