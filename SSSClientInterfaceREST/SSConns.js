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

var SSAuthCheckCred = function(resultHandler, errorHandler, userLabel, password){
  
  var par               = {};
  par[sSVarU.op]        = "authCheckCred";
  par[sSVarU.user]      = "mailto:dummyUser";
  par[sSVarU.key]       = "someKey";
  par[sSVarU.userLabel] = userLabel;
  par[sSVarU.pass]      = password;
  
  new SSJSONPOSTRequest("authCheckCred", par, resultHandler, errorHandler).send();
};

var SSCollsEntityIsInGet = function(resultHandler, errorHandler, user, key, entityUri){
  
  var par                = {};
  par[sSVarU.op]         = "collsEntityIsInGet";
  par[sSVarU.user]       = user;
  par[sSVarU.entityUri]  = entityUri;
  par[sSVarU.key]        = key;
  
  new SSJSONPOSTRequest("collsEntityIsInGet", par, resultHandler, errorHandler).send();
};

var SSCollCumulatedTagsGet = function(resultHandler, errorHandler, user, key, collUri){
  
  var par                = {};
  par[sSVarU.op]         = "collCumulatedTagsGet";
  par[sSVarU.user]       = user;
  par[sSVarU.collUri]    = collUri;
  par[sSVarU.key]        = key;
  
  new SSJSONPOSTRequest("collCumulatedTagsGet", par, resultHandler, errorHandler).send();
};

var SSCollParentGet = function(resultHandler, errorHandler, user, key, coll){
  
  var par                = {};
  par[sSVarU.op]         = "collParentGet";
  par[sSVarU.user]       = user;
  par[sSVarU.coll]       = coll;
  par[sSVarU.key]        = key;
  
  new SSJSONPOSTRequest("collParentGet", par, resultHandler, errorHandler).send();
};

var SSCollRootGet = function(resultHandler, errorHandler, user, key){
  
  var par                = {};
  par[sSVarU.op]         = "collRootGet";
  par[sSVarU.user]       = user;
  par[sSVarU.key]        = key;
  
  new SSJSONPOSTRequest("collRootGet", par, resultHandler, errorHandler).send();
};

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

var SSCollEntryChangePos = function(resultHandler, errorHandler, user, key, coll, order){
  
  var par                      = {};
  par[sSVarU.op]               = "collEntryChangePos";
  par[sSVarU.user]             = user;
  par[sSVarU.coll]             = coll;
  par[sSVarU.order]            = jSGlobals.commaSeparateStringArray(order);
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("collEntryChangePos", par, resultHandler, errorHandler).send();
};

var SSCollEntryDelete = function(resultHandler, errorHandler, user, key, coll, collEntry){
  
  var par                      = {};
  par[sSVarU.op]               = "collEntryDelete";
  par[sSVarU.user]             = user;
  par[sSVarU.coll]             = coll;
  par[sSVarU.collEntry]        = collEntry;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("collEntryDelete", par, resultHandler, errorHandler).send();
};

var SSCollEntriesDelete = function(resultHandler, errorHandler, user, key, coll, collEntries){
  
  var par                      = {};
  par[sSVarU.op]               = "collEntriesDelete";
  par[sSVarU.user]             = user;
  par[sSVarU.coll]             = coll;
  par[sSVarU.collEntries]      = jSGlobals.commaSeparateStringArray(collEntries);
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("collEntriesDelete", par, resultHandler, errorHandler).send();
};

var SSCollWithEntries = function(resultHandler, errorHandler, user, key, coll){
  
  var par                      = {};
  par[sSVarU.op]               = "collWithEntries";
  par[sSVarU.user]             = user;
  par[sSVarU.coll]             = coll;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("collWithEntries", par, resultHandler, errorHandler).send();
};

var SSCollsWithEntries = function(resultHandler, errorHandler, user, key){
  
  var par                      = {};
  par[sSVarU.op]               = "collsWithEntries";
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("collsWithEntries", par, resultHandler, errorHandler).send();
};

var SSCollHierarchyGet = function(resultHandler, errorHandler, user, key, collUri){
  
  var par                      = {};
  par[sSVarU.op]               = "collHierarchyGet";
  par[sSVarU.user]             = user;
  par[sSVarU.collUri]          = collUri;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("collHierarchyGet", par, resultHandler, errorHandler).send();
};

var SSCollsCouldSubscribeGet = function(resultHandler, errorHandler, user, key){
  
  var par                      = {};
  par[sSVarU.op]               = "collsCouldSubscribeGet";
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("collsCouldSubscribeGet", par, resultHandler, errorHandler).send();
};

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

var SSDiscWithEntriesGet = function(resultHandler, errorHandler, user, key, disc){
  
  var par                     = {};
  par[sSVarU.op]              = "discWithEntriesGet";
  par[sSVarU.user]            = user;
  par[sSVarU.disc]            = disc;
  par[sSVarU.maxDiscEntries]  = 10;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("discWithEntriesGet", par, resultHandler, errorHandler).send();
};

var SSDiscsAllGet = function(resultHandler, errorHandler, user, key){
  
  var par                     = {};
  par[sSVarU.op]              = "discsAllGet";
  par[sSVarU.user]            = user;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("discsAllGet", par, resultHandler, errorHandler).send();
};

var SSEntityEntityUsersGet = function(resultHandler, errorHandler, user, key, entityUri){
  
  var par                      = {};
  par[sSVarU.op]               = "entityEntityUsersGet";
  par[sSVarU.user]             = user;
  par[sSVarU.entityUri]        = entityUri;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("entityEntityUsersGet", par, resultHandler, errorHandler).send();
};

var SSEntityUserCirclesGet = function(resultHandler, errorHandler, user, key){
  
  var par                      = {};
  par[sSVarU.op]               = "entityUserCirclesGet";
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("entityUserCirclesGet", par, resultHandler, errorHandler).send();
};

var SSEntityEntitiesToCircleAdd = function(resultHandler, errorHandler, user, key, circleUri, entityUris){
  
  var par                      = {};
  par[sSVarU.op]               = "entityEntitiesToCircleAdd";
  par[sSVarU.user]             = user;
  par[sSVarU.circleUri]        = circleUri;
  par[sSVarU.entityUris]       = jSGlobals.commaSeparateStringArray(entityUris);
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("entityEntitiesToCircleAdd", par, resultHandler, errorHandler).send();
};

var SSEntityUsersToCircleAdd = function(resultHandler, errorHandler, user, key, circleUri, userUris){
  
  var par                      = {};
  par[sSVarU.op]               = "entityUsersToCircleAdd";
  par[sSVarU.user]             = user;
  par[sSVarU.circleUri]        = circleUri;
  par[sSVarU.userUris]         = jSGlobals.commaSeparateStringArray(userUris);
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("entityUsersToCircleAdd", par, resultHandler, errorHandler).send();
};

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

var SSEntityPublicSet = function(resultHandler, errorHandler, user, key, entityUri){
  
  var par                      = {};
  par[sSVarU.op]               = "entityPublicSet";
  par[sSVarU.user]             = user;
  par[sSVarU.entityUri]        = entityUri;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("entityPublicSet", par, resultHandler, errorHandler).send();
};

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

var SSEntityGet = function(resultHandler, errorHandler, user, key, entityUri){
  
  var par                     = {};
  par[sSVarU.op]              = "entityGet";
  par[sSVarU.user]            = user;
  par[sSVarU.entityUri]       = entityUri;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("entityGet", par, resultHandler, errorHandler).send();
};

var SSEntityLabelSet = function(resultHandler, errorHandler, user, key, entityUri, label){
  
  var par                     = {};
  par[sSVarU.op]              = "entityLabelSet";
  par[sSVarU.user]            = user;
  par[sSVarU.entityUri]       = entityUri;
  par[sSVarU.label]           = label;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("entityLabelSet", par, resultHandler, errorHandler).send();
};

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

var SSFileExtGet = function(resultHandler, errorHandler, user, key, fileUri){
  
  var par                     = {};
  par[sSVarU.op]              = "fileExtGet";
  par[sSVarU.user]            = user;
  par[sSVarU.fileUri]         = fileUri;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("fileExtGet", par, resultHandler, errorHandler).send();
};

var SSFileCanWrite = function(resultHandler, errorHandler, user, key, uri){
  
  var par                     = {};
  par[sSVarU.op]              = "fileCanWrite";
  par[sSVarU.user]            = user;
  par[sSVarU.uri]             = uri;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("fileCanWrite", par, resultHandler, errorHandler).send();
};

var SSFileSetReaderOrWriter = function(resultHandler, errorHandler, user, key, uri, write){
  
  var par                     = {};
  par[sSVarU.op]              = "fileSetReaderOrWriter";
  par[sSVarU.user]            = user;
  par[sSVarU.uri]             = uri;
  par[sSVarU.write]           = write;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("fileSetReaderOrWriter", par, resultHandler, errorHandler).send();
};

var SSFileUserFileWrites = function(resultHandler, errorHandler, user, key){
  
  var par                     = {};
  par[sSVarU.op]              = "fileUserFileWrites";
  par[sSVarU.user]            = user;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("fileUserFileWrites", par, resultHandler, errorHandler).send();
};

var SSFileWritingMinutesLeft = function(resultHandler, errorHandler, user, key, uri, fileName, minutesLeftLastTime){
  
  var par                     = {};
  par[sSVarU.op]              = "fileWritingMinutesLeft";
  par[sSVarU.user]            = user;
  par[sSVarU.uri]             = uri;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("fileWritingMinutesLeft", par, resultHandler, errorHandler).send();
};

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

var SSLearnEpVersionCurrentSet = function(resultHandler, errorHandler, user, key, learnEpVersionUri){
  
  var par                       = {};
  par[sSVarU.op]                = "learnEpVersionCurrentSet";
  par[sSVarU.user]              = user;
  par[sSVarU.learnEpVersionUri] = learnEpVersionUri;
  par[sSVarU.key]               = key;
  
  new SSJSONPOSTRequest("learnEpVersionCurrentSet", par, resultHandler, errorHandler).send();
};

var SSLearnEpVersionCurrentGet = function(resultHandler, errorHandler, user, key){
  
  var par                       = {};
  par[sSVarU.op]                = "learnEpVersionCurrentGet";
  par[sSVarU.user]              = user;
  par[sSVarU.key]               = key;
  
  new SSJSONPOSTRequest("learnEpVersionCurrentGet", par, resultHandler, errorHandler).send();
};

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

var SSLearnEpVersionGetTimelineState = function(resultHandler, errorHandler, user, key, learnEpVersionUri){
  
  var par                       = {};
  par[sSVarU.op]                = "learnEpVersionGetTimelineState";
  par[sSVarU.user]              = user;
  par[sSVarU.learnEpVersionUri] = learnEpVersionUri;
  par[sSVarU.key]               = key;
  
  new SSJSONPOSTRequest("learnEpVersionGetTimelineState", par, resultHandler, errorHandler).send();
};

var SSLearnEpVersionRemoveCircle = function(resultHandler, errorHandler, user, key, learnEpCircleUri){
  
  var par                      = {};
  par[sSVarU.op]               = "learnEpVersionRemoveCircle";
  par[sSVarU.user]             = user;
  par[sSVarU.learnEpCircleUri] = learnEpCircleUri;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("learnEpVersionRemoveCircle", par, resultHandler, errorHandler).send();
};

var SSLearnEpVersionRemoveEntity = function(resultHandler, errorHandler, user, key, learnEpEntityUri){
  
  var par                      = {};
  par[sSVarU.op]               = "learnEpVersionRemoveEntity";
  par[sSVarU.user]             = user;
  par[sSVarU.learnEpEntityUri] = learnEpEntityUri;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("learnEpVersionRemoveEntity", par, resultHandler, errorHandler).send();
};

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

var SSLearnEpCreate = function(resultHandler, errorHandler, user, key, label, space){
  
  var par                      = {};
  par[sSVarU.op]               = "learnEpCreate";
  par[sSVarU.user]             = user;
  par[sSVarU.label]            = label;
  par[sSVarU.space]            = space;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("learnEpCreate", par, resultHandler, errorHandler).send();
};

var SSLearnEpVersionCreate = function(resultHandler, errorHandler, user, key, learnEpUri){
  
  var par                      = {};
  par[sSVarU.op]               = "learnEpVersionCreate";
  par[sSVarU.user]             = user;
  par[sSVarU.learnEpUri]       = learnEpUri;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("learnEpVersionCreate", par, resultHandler, errorHandler).send();
};

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

var SSLearnEpVersionGet = function(resultHandler, errorHandler, user, key, learnEpVersionUri){
  
  var par                       = {};
  par[sSVarU.op]                = "learnEpVersionGet";
  par[sSVarU.user]              = user;
  par[sSVarU.learnEpVersionUri] = learnEpVersionUri;
  par[sSVarU.key]               = key;
  
  new SSJSONPOSTRequest("learnEpVersionGet", par, resultHandler, errorHandler).send();
};

var SSLearnEpVersionsGet = function(resultHandler, errorHandler, user, key, learnEpUri){
  
  var par                       = {};
  par[sSVarU.op]                = "learnEpVersionsGet";
  par[sSVarU.user]              = user;
  par[sSVarU.learnEpUri]        = learnEpUri;
  par[sSVarU.key]               = key;
  
  new SSJSONPOSTRequest("learnEpVersionsGet", par, resultHandler, errorHandler).send();
};

var SSLearnEpsGet = function(resultHandler, errorHandler, user, key){
  
  var par                       = {};
  par[sSVarU.op]                = "learnEpsGet";
  par[sSVarU.user]              = user;
  par[sSVarU.key]               = key;
  
  new SSJSONPOSTRequest("learnEpsGet", par, resultHandler, errorHandler).send();
};

var SSLocationAdd = function(resultHandler, errorHandler, user, key, entityUri, location){
  
  var par                     = {};
  par[sSVarU.op]              = "locationAdd";
  par[sSVarU.user]            = user;
  par[sSVarU.entityUri]       = entityUri;
  par[sSVarU.location]        = location;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("locationAdd", par, resultHandler, errorHandler).send();
};

var SSLocationsGet = function(resultHandler, errorHandler, user, key, entityUri){
  
  var par                     = {};
  par[sSVarU.op]              = "locationsGet";
  par[sSVarU.user]            = user;
  par[sSVarU.entityUri]       = entityUri;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("locationsGet", par, resultHandler, errorHandler).send();
};

var SSResourceDetailsGet = function(resultHandler, errorHandler, user, key, resource){
  
  var par                     = {};
  par[sSVarU.op]              = "modelUEResourceDetails";
  par[sSVarU.user]            = user;
  par[sSVarU.resource]        = resource;
  par[sSVarU.key]             = key;
  
	new SSJSONPOSTRequest("modelUEResourceDetails", par, resultHandler, errorHandler).send();
};

var SSRatingOverallGet = function(resultHandler, errorHandler, user, key, resource){
  
  var par                     = {};
  par[sSVarU.op]              = "ratingOverallGet";
  par[sSVarU.user]            = user;
  par[sSVarU.resource]        = resource;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("ratingOverallGet", par, resultHandler, errorHandler).send();
};

var SSRatingSet = function(resultHandler, errorHandler, user, key, resource, value){
  
  var par                     = {};
  par[sSVarU.op]              = "ratingSet";
  par[sSVarU.user]            = user;
  par[sSVarU.resource]        = resource;
  par[sSVarU.value]           = value;
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("ratingSet", par, resultHandler, errorHandler).send();
};

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

var SSSearchWithMIs = function(resultHandler, errorHandler, user, key, searchOp, mIs){
  
  var par                     = {};
  par[sSVarU.op]              = "searchMIs";
  par[sSVarU.user]            = user;
  par[sSVarU.searchOp]        = searchOp;
  par[sSVarU.mIs]             = jSGlobals.commaSeparateStringArray(mIs);
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("searchMIs", par, resultHandler, errorHandler).send();
};

var SSSearchWithSolr = function(resultHandler, errorHandler, user, key, searchOp, keywords){
  
  var par                     = {};
  par[sSVarU.op]              = "searchSolr";
  par[sSVarU.user]            = user;
  par[sSVarU.searchOp]        = searchOp;
  par[sSVarU.keywords]        = jSGlobals.commaSeparateStringArray(keywords);
  par[sSVarU.key]             = key;
  
  new SSJSONPOSTRequest("searchSolr", par, resultHandler, errorHandler).send();
};

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

var SSSearchWithTagsWithinEntity = function(resultHandler, errorHandler, user, key, entityUri, tagLabels){
  
  var par                      = {};
  par[sSVarU.op]               = "searchTagsWithinEntity";
  par[sSVarU.user]             = user;
  par[sSVarU.entityUri]        = entityUri;
  par[sSVarU.tagLabels]        = jSGlobals.commaSeparateStringArray(tagLabels);
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("searchTagsWithinEntity", par, resultHandler, errorHandler).send();
};

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

var SSUserAll = function(resultHandler, errorHandler, user, key){
  
  var par                      = {};
  par[sSVarU.op]               = "userAll";
  par[sSVarU.user]             = user;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("userAll", par, resultHandler, errorHandler).send();
};

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

var SSUserEventGet = function(resultHandler, errorHandler, user, key, ueUri){
  
  var par                      = {};
  par[sSVarU.op]               = "uEGet";
  par[sSVarU.user]             = user;
  par[sSVarU.ueUri]            = ueUri;
  par[sSVarU.key]              = key;
  
  new SSJSONPOSTRequest("uEGet", par, resultHandler, errorHandler).send();
};