/**
 * Code contributed to the Learning Layers project
 * http://www.learning-layers.eu
 * Development is partly funded by the FP7 Programme of the European Commission under
 * Grant Agreement FP7-ICT-318209.
 * Copyright (c) 2015, Graz University of Technology - KTI (Knowledge Technologies Institute).
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

var sssGlobals = new SSSGobals();

function SSSGobals(){
  this.sssAPI = "http://localhost:8080/sss.adapter.rest.v2/";
  this.sssAPIResourceEntity = "entities/entities/";
  this.sssAPIResourceCircle = "circles/circles/";
  this.sssAPIResourceAuth = "auth/auth/";
  this.sssAPIResourceDisc = "discs/discs/";
  this.sssAPIResourceLike = "likes/likes/";
  this.sssAPIResourceTag = "tags/tags/";
  this.sssAPIResourceSearch = "search/search/";
  this.sssAPIResourceFriend = "friends/friends/";
  this.sssAPIResourceUser = "users/users/";
  this.sssAPIResourceRating = "ratings/ratings/";
  this.sssAPIResourceFile = "files/files/";
  this.sssAPIResourceActivity = "activities/activities/";
  this.sssAPIResourceColl     = "colls/colls/";
  this.sssAPIResourceCategory     = "categories/categories/";
  this.sssAPIResourceImage     = "images/images/";
  this.sssAPIResourceRecomm     = "recomm/recomm/";
  this.sssAPIResourceEval     = "eval/eval/";
  this.httpMethodPUT = "PUT";
  this.httpMethodGET = "GET";
  this.httpMethodPOST = "POST";
  this.httpMethodDELETE = "DELETE";
}

var SSSJSONRequest = function(
  resultHandler,
errorHandler,
apiURI,
method,
authToken){
  
  this.resultHandler = resultHandler;
  this.errorHandler = errorHandler;
  this.apiURI = apiURI;
  this.method = method;
  this.authToken = authToken;
};
SSSJSONRequest.prototype = {
  
  send : function(resource, path, bodyPar) {
    
    var thisRef = this;
    jQuery.ajax({
      'url' :         encodeURI(thisRef.apiURI + resource + path),
      'type':         thisRef.method,
      'data' :        ((!sssFcts.isEmpty(bodyPar)) ? JSON.stringify(bodyPar) : ""),
      'contentType' : "application/json",
      'async' :       true,
      dataType:       "application/json",
      'crossDomain':  true,
      'beforeSend': function (request){
        if (!sssFcts.isEmpty(thisRef.authToken)){
          request.setRequestHeader("Authorization", "Bearer " + thisRef.authToken);
        }
      },
      'complete' : function(jqXHR, textStatus) {
        
        if (jqXHR.readyState !== 4){
          console.error("could not connect to SSS REST API");
          thisRef.errorHandler(jqXHR.responseText);
          return;
        }
        
        //        thisRef.response   = jqXHR.responseText;
        //        thisRef.status     = jqXHR.status;
        //        thisRef.readyState = jqXHR.readyState;
        //        thisRef.onload();
        
        thisRef.resultHandler(jQuery.parseJSON(jqXHR.responseText));
      }
    });
  }
};
var sssNames = new SSSNames();
function SSSNames(){
  
  this.appendUserNameToLabel = "appendUserNameToLabel";
  this.target     = "target";
  this.targets     = "targets";
  this.targetEntity = "targetEntity";
  this.includeOriginUser            = "includeOriginUser";
  this.tagSpace                     = "tagSpace";
  this.ignoreAccessRights           = "ignoreAccessRights";
  this.removeCircleSpecificMetadata = "removeCircleSpecificMetadata";
  this.includeMetaSpecificToEntityAndItsEntities = "includeMetaSpecificToEntityAndItsEntities";
  this.includeUsers = "includeUsers";
  this.includeEntities = "includeEntities";
  this.forUsers    = "forUsers";
  this.realm = "realm";
  this.includeAuthors = "includeAuthors";
  this.authorsToSearchFor = "authorsToSearchFor";
  this.entityTypesToIncludeOnly = "entityTypesToIncludeOnly";
  this.toolContext = "toolContext";
  this.includeOnlyLastActivities = "includeOnlyLastActivities";
  this.setFriends = "setFriends";
  this.useUsersEntities = "useUsersEntities";
  this.globalSearchOp = "globalSearchOp";
  this.localSearchOp = "localSearchOp";
  this.includeOwn = "includeOwn";
  this.minRating = "minRating";
  this.maxRating = "maxRating";
  this.includeComments = "includeComments";
  this.setComments = "setComments";
  this.setCircleTypes = "setCircleTypes";
  this.link = "link";
  this.longitude = "longitude";
  this.latitude = "latitude";
  this.accuracy = "accuracy";
  this.forEntity = "forEntity";
  this.timePoint = "timePoint";
  this.genre = "genre";
  this.uuid = "uuid";
  this.stack = "stack";
  this.app = "app";
  this.getCircles = "getCircles";
  this.friends = "friends";
  this.friend = "friend";
  this.descriptionShort = "descriptionShort";
  this.descriptionFunctional = "descriptionFunctional";
  this.descriptionTechnical = "descriptionTechnical";
  this.descriptionInstall = "descriptionInstall";
  this.downloads = "downloads";
  this.downloadIOS = "downloadIOS";
  this.downloadAndroid = "downloadAndroid";
  this.fork = "fork";
  this.screenShots = "screenShots";
  this.video = "video";
  this.videos = "videos";
  this.message = "message";
  this.messages = "messages";
  this.includeRead = "includeRead";
  this.read = "read";
  this.pageNumber = "pageNumber";
  this.pagesID = "pagesID";
  this.pageNumbers = "pageNumbers";
  this.typesToRecommOnly = "typesToRecommOnly";
  this.maxResources = "maxResources";
  this.creationTime = "creationTime";
  this.circles = "circles";
  this.tag = "tag";
  this.comments = "comments";
  this.setLikes = "setLikes";
  this.setEntries = "setEntries";
  this.setPublic = "setPublic";
  this.extendToParents = "extendToParents";
  this.wordsToSearchFor = "wordsToSearchFor";
  this.tagsToSearchFor = "tagsToSearchFor";
  this.misToSearchFor = "misToSearchFor";
  this.labelsToSearchFor = "labelsToSearchFor";
  this.descriptionsToSearchFor = "descriptionsToSearchFor";
  this.typesToSearchOnlyFor = "typesToSearchOnlyFor";
  this.includeOnlySubEntities = "includeOnlySubEntities";
  this.entitiesToSearchWithin = "entitiesToSearchWithin";
  this.includeRecommendedResults = "includeRecommendedResults";
  this.provideEntries = "provideEntries";
  this.getThumb = "getThumb";
  this.getFlags = "getFlags";
  this.getUEs = "getUEs";
  this.entitiesToExclude = "entitiesToExclude";
  this.onlySubEntities = "onlySubEntities";
  this.includeTags = "includeTags";
  this.includeTextualContent = "includeTextualContent";
  this.includeLabel = "includeLabel";
  this.includeDescription = "includeDescription";
  this.includeMIs = "includeMIs";
  this.description = "description";
  this.types = "types";
  this.comment = "comment";
  this.circleTypes = "circleTypes";
  this.fileHandle = "fileHandle";
  this.entry = "entry";
  this.labels = "labels";
  this.circle = "circle";
  this.entities = "entities";
  this.entityLabels = "entityLabels";
  this.users = "users";
  this.categories = "categories";
  this.removeUserTags = "removeUserTags";
  this.removeUserRatings = "removeUserRatings";
  this.removeFromUserColls = "removeFromUserColls";
  this.removeUserLocations = "removeUserLocations";
  this.getTags = "getTags";
  this.getOverallRating = "getOverallRating";
  this.getDiscs = "getDiscs";
  this.addNewDisc = "addNewDisc";
  this.addNewColl = "addNewColl";
  this.uE = "uE";
  this.learnEpVersion = "learnEpVersion";
  this.learnEp = "learnEp";
  this.entity = "entity";
  this.learnEpEntity = "learnEpEntity";
  this.learnEpCircle = "learnEpCircle";
  this.forUser = "forUser";
  this.file = "file";
  this.jsonRequ = "jsonRequ";
  this.id = "id";
  this.tags = "tags";
  this.maxResultsPerTag = "maxResultsPerTag";
  this.keywords = "keywords";
  this.mIs = "mIs";
  this.searchOp = "searchOp";
  this.value = "value";
  this.mimeType = "mimeType";
  this.write = "write";
  this.colls = "colls";
  this.order = "order";
  this.password = "password";
  this.user = "user";
  this.op = "op";
  this.label = "label";
  this.location = "location";
  this.space = "space";
  this.startTime = "startTime";
  this.endTime = "endTime";
  this.maxTags = "maxTags";
  this.disc = "disc";
  this.content = "content";
  this.maxEntries = "maxEntries";
  this.coll = "coll";
  this.entries = "entries";
  this.key = "key";
  this.type = "type";
  this.xLabel = "xLabel";
  this.yLabel = "yLabel";
  this.xR = "xR";
  this.yR = "yR";
  this.xC = "xC";
  this.yC = "yC";
  this.x = "x";
  this.y = "y";
  this.errorClassNames = "errorClassNames";
  this.errorClassesWhereThrown = "errorClassesWhereThrown";
  this.errorMethodsWhereThrown = "errorMethodsWhereThrown";
  this.errorLinesWhereThrown = "errorLinesWhereThrown";
  this.errorThreadsWhereThrown = "errorThreadsWhereThrown";
  this.setTags = "setTags";
  this.setOverallRating = "setOverallRating";
  this.setDiscs = "setDiscs";
  this.setUEs = "setUEs";
  this.setThumb = "setThumb"; 
  this.setFlags = "setFlags";
  this.setCircles = "setCircles";
}

var sssFcts = new SSSFcts();
function SSSFcts(){
  
  this.empty = "";
  this.isEmpty = function(obj){
    return obj === null || obj === undefined || obj === this.empty;
  };
}

var SSEntityUpdate = function(
  resultHandler,
errorHandler,
key,
entity,
label,
description, 
read){
  
  if (sssFcts.isEmpty(entity)){
    console.error("entity required");
    return;
  }
  
  var par = {};
  if (!sssFcts.isEmpty(label)){          par[sssNames.label]       = label; }
  if (!sssFcts.isEmpty(description)){    par[sssNames.description] = description; }
  if (!sssFcts.isEmpty(read)){           par[sssNames.read]        = read; }
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodPUT,
  key).send(
    sssGlobals.sssAPIResourceEntity,
  encodeURIComponent(entity),
  par);
};

var SSCirclesGet = function(
  resultHandler,
errorHandler,
key){
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodGET,
  key).send(
    sssGlobals.sssAPIResourceCircle,
  "",
  null);
};

var SSCircleGetFiltered = function(
  resultHandler,
errorHandler,
key,
circle,
entityTypesToIncludeOnly, 
setTags, 
tagSpace){
  
  if (sssFcts.isEmpty(circle)){
    console.error("circle required");
    return;
  }
  
  var par = {};
  
  if (!sssFcts.isEmpty(entityTypesToIncludeOnly)){ par[sssNames.entityTypesToIncludeOnly] = entityTypesToIncludeOnly; }
  if (!sssFcts.isEmpty(setTags)){                  par[sssNames.setTags]                  = setTags; }
  if (!sssFcts.isEmpty(tagSpace)){                 par[sssNames.tagSpace]                 = tagSpace; }
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodPOST,
  key).send(
    sssGlobals.sssAPIResourceCircle,
  "filtered/" + encodeURIComponent(circle),
  par);
};

var SSCircleEntitiesAdd = function(
  resultHandler,
errorHandler,
key,
circle,
entities,
tags, 
categories){
  
  if (sssFcts.isEmpty(circle)){
    console.error("circle required");
    return;
  }
  
  if (sssFcts.isEmpty(entities)){
    console.error("entities required");
    return;
  }
  
  var par = {};
  
  if (!sssFcts.isEmpty(tags)){          par[sssNames.tags]       = tags; }
  if (!sssFcts.isEmpty(categories)){    par[sssNames.categories] = categories; }
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodPOST,
  key).send(
    sssGlobals.sssAPIResourceCircle,
  encodeURIComponent(circle) + "/entities/" + encodeURIComponent(entities.toString()),
  par);
};
var SSCircleUsersAdd = function(
  resultHandler,
errorHandler,
key,
circle,
users){
  
  if (sssFcts.isEmpty(circle)){
    console.error("circle required");
    return;
  }
  
  if (sssFcts.isEmpty(users)){
    console.error("users required");
    return;
  }
  
  var par = {};
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodPOST,
  key).send(
    sssGlobals.sssAPIResourceCircle,
  encodeURIComponent(circle) + "/users/" + encodeURIComponent(users.toString()),
  par);
};
var SSCircleCreate = function(
  resultHandler,
errorHandler,
key,
label,
entities,
users,
description){
  
  if (sssFcts.isEmpty(label)){
    console.error("label required");
    return;
  }
  
  var par = {};
  par[sssNames.label] = label;
  if (!sssFcts.isEmpty(description)){    par[sssNames.description] = description; }
  if (!sssFcts.isEmpty(entities)){       par[sssNames.entities] = entities; }
  if (!sssFcts.isEmpty(users)){          par[sssNames.users] = users; }
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodPOST,
  key).send(
    sssGlobals.sssAPIResourceCircle,
  "",
  par);
};

var SSCircleEntitiesRemove = function(
  resultHandler,
errorHandler,
key,
circle,
entities,
removeCircleSpecificMetadata){
  
  if (sssFcts.isEmpty(circle)){
    console.error("circle required");
    return;
  }
  
  if (sssFcts.isEmpty(entities)){
    console.error("entities required");
    return;
  }
  
  var par = {};
  
  if (!sssFcts.isEmpty(removeCircleSpecificMetadata)){         par[sssNames.removeCircleSpecificMetadata] = removeCircleSpecificMetadata; }
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodDELETE,
  key).send(
    sssGlobals.sssAPIResourceCircle,
  encodeURIComponent(circle) + "/entities/" + encodeURIComponent(entities.toString()),
  par);
};

var SSCircleUsersRemove = function(
  resultHandler,
errorHandler,
key,
circle,
users){
  
  if (sssFcts.isEmpty(circle)){
    console.error("circle required");
    return;
  }
  
  if (sssFcts.isEmpty(users)){
    console.error("users required");
    return;
  }
  
  var par = {};
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodDELETE,
  key).send(
    sssGlobals.sssAPIResourceCircle,
  encodeURIComponent(circle) + "/users/" + encodeURIComponent(users.toString()),
  par);
};

var SSCircleRemove = function(
  resultHandler,
errorHandler,
key,
circle){
  
  if (sssFcts.isEmpty(circle)){
    console.error("circle required");
    return;
  }
  
  var par = {};
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodDELETE,
  key).send(
    sssGlobals.sssAPIResourceCircle,
  encodeURIComponent(circle),
  par);
};

var SSAuthCheckCredPOST = function(
  resultHandler,
errorHandler,
label,
password){
  
  if (sssFcts.isEmpty(label)){
    console.error("label / username required");
    return;
  }
  
  if (sssFcts.isEmpty(label)){
    console.error("password required");
    return;
  }
  
  var par = {};
  par[sssNames.label] = label;
  par[sssNames.password] = password;
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodPOST,
  "").send(
    sssGlobals.sssAPIResourceAuth,
  "",
  par);
};
  
var SSDiscsGet = function(
  resultHandler,
errorHandler,
key,
forUser){
  
  var par = {};
    
  if (!sssFcts.isEmpty(forUser)){        par[sssNames.forUser] =        forUser; }
  
  par[sssNames.setCircleTypes] = true;
  par[sssNames.setLikes]       = true;
  par[sssNames.setEntries]     = true;
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodPOST,
  key).send(
    sssGlobals.sssAPIResourceDisc,
  "filtered",
  par);
};

var SSDiscEntryAdd = function(
  resultHandler,
errorHandler,
key,
disc,
targets,
entry,
addNewDisc,
type,
label,
description,
users,
entities,
entityLabels,
circles){
  
  var par = {};
  
  if (!sssFcts.isEmpty(disc)){         par[sssNames.disc] = disc; }
  if (!sssFcts.isEmpty(targets)){      par[sssNames.targets] = targets; }
  if (!sssFcts.isEmpty(entry)){        par[sssNames.entry] = entry; }
  if (!sssFcts.isEmpty(addNewDisc)){   par[sssNames.addNewDisc] = addNewDisc; }
  if (!sssFcts.isEmpty(type)){         par[sssNames.type] = type; }
  if (!sssFcts.isEmpty(label)){        par[sssNames.label] = label; }
  if (!sssFcts.isEmpty(description)){  par[sssNames.description] = description; }
  if (!sssFcts.isEmpty(users)){        par[sssNames.users] = users; }
  if (!sssFcts.isEmpty(entities)){     par[sssNames.entities] = entities; }
  if (!sssFcts.isEmpty(entityLabels)){ par[sssNames.entityLabels] = entityLabels; }
  if (!sssFcts.isEmpty(circles)){      par[sssNames.circles] = circles; }
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodPOST,
  key).send(
    sssGlobals.sssAPIResourceDisc,
  "",
  par);
};

var SSDiscGetFiltered = function(
  resultHandler,
errorHandler,
key,
disc,
setComments){
  
  if (sssFcts.isEmpty(disc)){
    console.error("disc required");
    return;
  }
  
  var par = {};
  
  if (!sssFcts.isEmpty(setComments)){    par[sssNames.setComments]    = setComments; }
  
  par[sssNames.setCircleTypes] = true;
  par[sssNames.setLikes]       = true;
  par[sssNames.setEntries]     = true;
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodPOST,
  key).send(
    sssGlobals.sssAPIResourceDisc,
  "filtered/" + encodeURIComponent(disc),
  par);
};

var SSLikeUpdate = function(
  resultHandler,
errorHandler,
key,
entity,
value){
  
  
  if (sssFcts.isEmpty(entity)){
    console.error("entity required");
    return;
  }
  
  if (sssFcts.isEmpty(value)){
    console.error("value required");
    return;
  }
  
  var par = {};
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodPUT,
  key).send(
    sssGlobals.sssAPIResourceLike,
  "entities/" + encodeURIComponent(entity) + "/value/" + encodeURIComponent(value),
  par);
};

var SSTagAdd = function(
  resultHandler,
errorHandler,
key,
entity,
label,
space,
circle,
creationTime){
  
  if(sssFcts.isEmpty(entity)){
    console.error("entity required");
    return;
  }
  
  if(sssFcts.isEmpty(label)){
    console.error("label required");
    return;
  }
  
  if(sssFcts.isEmpty(space)){
    space = "sharedSpace";
  }
  
  var par = {};
  
  par[sssNames.label]  = label;
  par[sssNames.entity] = entity;
  par[sssNames.space]  = space;
  
  if(!sssFcts.isEmpty(creationTime)){ par[sssNames.creationTime] = creationTime; }
  if(!sssFcts.isEmpty(circle)){       par[sssNames.circle]       = circle; }
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodPOST,
  key).send(
    sssGlobals.sssAPIResourceTag,
  "",
  par);
};

var SSTagsGetFiltered = function(
  resultHandler,
errorHandler,
key,
forUser,
entities,
labels,
space,
circles,
startTime){
  
  var par = {};
  if (!sssFcts.isEmpty(forUser)){     par[sssNames.forUser]   = forUser; }
  if (!sssFcts.isEmpty(entities)){    par[sssNames.entities]  = entities; }
  if (!sssFcts.isEmpty(labels)){      par[sssNames.labels]    = labels; }
  if (!sssFcts.isEmpty(space)){       par[sssNames.space]     = space; }
  if (!sssFcts.isEmpty(circles)){     par[sssNames.space]     = circles; }
  if (!sssFcts.isEmpty(startTime)){   par[sssNames.startTime] = startTime; }
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodPOST,
  key).send(
    sssGlobals.sssAPIResourceTag,
  "filtered",
  par);
};

var SSTagFrequsGetFiltered = function(
  resultHandler,
errorHandler,
key,
forUser,
entities,
labels,
space,
circles,
startTime,
useUsersEntities){
  
  var par = {};
  
  if (!sssFcts.isEmpty(forUser)){            par[sssNames.forUser] = forUser; }
  if (!sssFcts.isEmpty(entities)){           par[sssNames.entities] = entities; }
  if (!sssFcts.isEmpty(labels)){             par[sssNames.labels] = labels; }
  if (!sssFcts.isEmpty(space)){              par[sssNames.space] = space; }
  if (!sssFcts.isEmpty(circles)){            par[sssNames.circles] = circles; }
  if (!sssFcts.isEmpty(startTime)){          par[sssNames.startTime] = startTime; }
  if (!sssFcts.isEmpty(useUsersEntities)){   par[sssNames.useUsersEntities] = useUsersEntities; }
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodPOST,
  key).send(
    sssGlobals.sssAPIResourceTag,
  "filtered/frequs",
  par);
};

var SSEntitiesForTagsGetFiltered = function(
  resultHandler,
errorHandler,
key,
forUser,
labels,
space,
startTime){
  
  var par = {};
  if (!sssFcts.isEmpty(forUser)){     par[sssNames.forUser] = forUser; }
  if (!sssFcts.isEmpty(labels)){      par[sssNames.labels] = labels; }
  if (!sssFcts.isEmpty(space)){       par[sssNames.space] = space; }
  if (!sssFcts.isEmpty(startTime)){   par[sssNames.startTime] = startTime; }
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodPOST,
  key).send(
    sssGlobals.sssAPIResourceTag,
  "filtered/entities",
  par);
};

var SSTagsRemove = function(
  resultHandler,
errorHandler,
key,
entity,
label,
space,
circle){
  
  if (sssFcts.isEmpty(entity)){
    console.error("entity required");
    return;
  }
  
  var par = {};
  
  if (!sssFcts.isEmpty(label)){      par[sssNames.label] = label; }
  if (!sssFcts.isEmpty(space)){      par[sssNames.space] = space; }
  if (!sssFcts.isEmpty(circle)){     par[sssNames.circle] = circle; }
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodDELETE,
  key).send(
    sssGlobals.sssAPIResourceTag,
  "entities/" + encodeURIComponent(entity),
  par);
};

var SSSearch = function(
  resultHandler,
errorHandler,
key,
wordsToSearchFor,
tagsToSearchFor,
authorsToSearchFor,
labelsToSearchFor,
descriptionsToSearchFor,
typesToSearchOnlyFor,
includeOnlySubEntities,
entitiesToSearchWithin,
extendToParents,
includeRecommendedResults,
provideEntries,
pagesID,
pageNumber,
minRating,
maxRating,
localSearchOp,
globalSearchOp){
  
  var par = {};
  if (!sssFcts.isEmpty(wordsToSearchFor)){            par[sssNames.wordsToSearchFor] = wordsToSearchFor; }
  if (!sssFcts.isEmpty(tagsToSearchFor)){             par[sssNames.tagsToSearchFor] = tagsToSearchFor; }
  if (!sssFcts.isEmpty(authorsToSearchFor)){          par[sssNames.authorsToSearchFor] = authorsToSearchFor; }
  if (!sssFcts.isEmpty(labelsToSearchFor)){           par[sssNames.labelsToSearchFor] = labelsToSearchFor; }
  if (!sssFcts.isEmpty(descriptionsToSearchFor)){     par[sssNames.descriptionsToSearchFor] = descriptionsToSearchFor; }
  if (!sssFcts.isEmpty(typesToSearchOnlyFor)){        par[sssNames.typesToSearchOnlyFor] = typesToSearchOnlyFor; }
  if (!sssFcts.isEmpty(includeOnlySubEntities)){      par[sssNames.includeOnlySubEntities] = includeOnlySubEntities; }
  if (!sssFcts.isEmpty(entitiesToSearchWithin)){      par[sssNames.entitiesToSearchWithin] = entitiesToSearchWithin; }
  if (!sssFcts.isEmpty(extendToParents)){             par[sssNames.extendToParents] = extendToParents; }
  if (!sssFcts.isEmpty(includeRecommendedResults)){   par[sssNames.includeRecommendedResults] = includeRecommendedResults; }
  if (!sssFcts.isEmpty(provideEntries)){              par[sssNames.provideEntries] = provideEntries; }
  if (!sssFcts.isEmpty(pagesID)){                     par[sssNames.pagesID] = pagesID; }
  if (!sssFcts.isEmpty(pageNumber)){                  par[sssNames.pageNumber] = pageNumber; }
  if (!sssFcts.isEmpty(minRating)){                   par[sssNames.minRating] = minRating; }
  if (!sssFcts.isEmpty(maxRating)){                   par[sssNames.maxRating] = maxRating; }
  if (!sssFcts.isEmpty(localSearchOp)){               par[sssNames.localSearchOp] = localSearchOp; }
  if (!sssFcts.isEmpty(globalSearchOp)){              par[sssNames.globalSearchOp] = globalSearchOp; }
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodPOST,
  key).send(
    sssGlobals.sssAPIResourceSearch,
  "filtered",
  par);
};

var SSFriendAdd = function(
  resultHandler,
errorHandler,
key,
friend){
  
  if (sssFcts.isEmpty(friend)){
    console.error("friend required");
    return;
  }
  
  var par = {};
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodPOST,
  key).send(
    sssGlobals.sssAPIResourceFriend,
  encodeURIComponent(friend),
  par);
};

var SSFriendsGet = function(
  resultHandler,
errorHandler,
key){
  
  var par = {};
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodGET,
  key).send(
    sssGlobals.sssAPIResourceFriend,
  "",
  par);
};

var SSUsersGet = function(
  resultHandler,
errorHandler,
key){
  
  var par = {};
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodGET,
  key).send(
    sssGlobals.sssAPIResourceUser,
  "",
  par);
};

var SSRatingSet = function(
  resultHandler,
errorHandler,
key,
entity,
value){
  
  if (sssFcts.isEmpty(entity)){
    console.error("entity required");
    return;
  }
  
  if (sssFcts.isEmpty(value)){
    console.error("value required");
    return;
  }
  
  var par = {};
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodPOST,
  key).send(
    sssGlobals.sssAPIResourceRating,
  "entities/" + encodeURIComponent(entity) + "/value/" + encodeURIComponent(value),
  par);
};

var SSFileUpload = function(
  resultHandler,
errorHandler,
key,
fileHandle, 
circle){
  
  if (sssFcts.isEmpty(fileHandle)){
    console.error("fileHandle required");
    return;
  }
  
  var xhr = new XMLHttpRequest();
  var formData = new FormData();
  this.resultHandler = resultHandler;
  this.errorHandler = errorHandler;
  this.fileName = fileHandle.name;
  
  formData.append(sssNames.file,     fileHandle);
  formData.append(sssNames.label,    this.fileName);
  
  if(!sssFcts.isEmpty(circle)){
    formData.append(sssNames.circle, circle);
  }
  
  formData.append(sssNames.mimeType, fileHandle.type);
  
  xhr.onload = (function(thisRef){ return function(){
      
      if (this.readyState !== 4){
        thisRef.errorHandler(this.responseText);
        return;
      }
      
      thisRef.resultHandler(jQuery.parseJSON(this.responseText), thisRef.fileName);
    }; })(this);
  path = encodeURI(sssGlobals.sssAPI + sssGlobals.sssAPIResourceFile + "upload");
  xhr.open(sSGlobals.httpMethPOST, path, true);
  if (!sssFcts.isEmpty(key)){
    xhr.setRequestHeader("Authorization", "Bearer " + key);
  }
  
  xhr.send (formData);
};

var SSFileDownload = function(
  resultHandler,
errorHandler,
key,
file){
  
  if (sssFcts.isEmpty(file)){
    console.error("file required");
    return;
  }
  
  var par = {};
  var xhr = new XMLHttpRequest();
  var path;
  this.resultHandler = resultHandler;
  this.errorHandler = errorHandler;
  xhr.responseType = "blob";
  xhr.onload = (function(thisRef){ return function(){
      
      if (
        this.readyState !== 4 ||
        this.status !== 200){
        
        thisRef.errorHandler(this.response);
        return;
      }
      
      thisRef.resultHandler(this.response);
    }; })(this);
  path = encodeURI(sssGlobals.sssAPI + sssGlobals.sssAPIResourceFile + encodeURIComponent(file) + "/download");
  xhr.open(sSGlobals.httpMethGET, path, true);
  if (!sssFcts.isEmpty(key)){
    xhr.setRequestHeader("Authorization", "Bearer " + key);
  }
  
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send (((!sssFcts.isEmpty(par)) ? JSON.stringify(par) : ""));
};

var SSFileDownloadGET = function(
  key,
file){
  
  if (sssFcts.isEmpty(file)){
    console.error("file required");
    return;
  }
  
  window.open(sssGlobals.sssAPI + sssGlobals.sssAPIResourceFile + "/download?key=" + key + "&file=" + file, "_blank");
};

var SSActivityAdd = function(
  resultHandler,
errorHandler,
key,
type,
users,
entities,
comments){
  
  if (sssFcts.isEmpty(type)){
    console.error("type required");
    return;
  }
  
  var par = {};
  
  par[sssNames.type] = type;
  
  if (!jSGlobals.isEmpty(users)){          par[sssNames.users] = users; }
  if (!jSGlobals.isEmpty(entities)){       par[sssNames.entities] = entities; }
  if (!jSGlobals.isEmpty(comments)){       par[sssNames.comments] = comments; }
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodPOST,
  key).send(
    sssGlobals.sssAPIResourceActivity,
  "",
  par);
};

var SSActivitiesGetFiltered = function(
  resultHandler,
errorHandler,
key,
types,
users,
entities,
circles,
startTime,
endTime,
includeOnlyLastActivities){
  
  var par = {};
  if (!jSGlobals.isEmpty(types)){                      par[sssNames.types] = types; }
  if (!jSGlobals.isEmpty(users)){                      par[sssNames.users] = users; }
  if (!jSGlobals.isEmpty(entities)){                   par[sssNames.entities] = entities; }
  if (!jSGlobals.isEmpty(circles)){                    par[sssNames.circles] = circles; }
  if (!jSGlobals.isEmpty(startTime)){                  par[sssNames.startTime] = startTime; }
  if (!jSGlobals.isEmpty(endTime)){                    par[sssNames.endTime] = endTime; }
  if (!jSGlobals.isEmpty(includeOnlyLastActivities)){  par[sssNames.includeOnlyLastActivities] = includeOnlyLastActivities; }
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodPOST,
  key).send(
    sssGlobals.sssAPIResourceActivity,
  "filtered",
  par);
};

var SSEntitiesGetFiltered = function(
  resultHandler, 
errorHandler, 
key, 
entities,
circle,
setTags,
tagSpace,
setOverallRating, 
setDiscs, 
setUEs, 
setThumb, 
setFlags,
setCircles){
  
  if(sssFcts.isEmpty(entities)){
    console.error("entities required");
    return;
  }
  
  var par                     = {};
  
  if(!jSGlobals.isEmpty(circle)){           par[sssNames.circle]              = circle;}
  if(!jSGlobals.isEmpty(setTags)){          par[sssNames.setTags]             = setTags;}
  if(!jSGlobals.isEmpty(tagSpace)){         par[sssNames.tagSpace]            = tagSpace;}
  if(!jSGlobals.isEmpty(setOverallRating)){ par[sssNames.setOverallRating]    = setOverallRating;}
  if(!jSGlobals.isEmpty(setDiscs)){         par[sssNames.setDiscs]            = setDiscs;}
  if(!jSGlobals.isEmpty(setUEs)){           par[sssNames.setUEs]              = setUEs;}
  if(!jSGlobals.isEmpty(setThumb)){         par[sssNames.setThumb]            = setThumb;}
  if(!jSGlobals.isEmpty(setFlags)){         par[sssNames.setFlags]            = setFlags;}
  if(!jSGlobals.isEmpty(setCircles)){       par[sssNames.setCircles]          = setCircles;}
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodPOST,
  key).send(
    sssGlobals.sssAPIResourceEntity,
  "filtered/" + encodeURIComponent(entities.toString()),
  par);
};

var SSEntityUsersGet = function(
  resultHandler, 
errorHandler, 
key, 
entity){
  
  if(sssFcts.isEmpty(entity)){
    console.error("entity required");
    return;
  }
  
  var par                      = {};
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodGET,
  key).send(
    sssGlobals.sssAPIResourceEntity,
  encodeURIComponent(entity) + "/users",
  par);
};

var SSEntityShare = function(
  resultHandler, 
errorHandler, 
key, 
entity, 
users, 
comment, 
circles, 
setPublic){
  
  if(sssFcts.isEmpty(entity)){
    console.error("entity required");
    return;
  }
  
  var par                      = {};
  
  if(!jSGlobals.isEmpty(users)){     par[sssNames.users]         = users;}
  if(!jSGlobals.isEmpty(circles)){   par[sssNames.circles]       = circles;}
  if(!jSGlobals.isEmpty(comment)){   par[sssNames.comment]       = comment;}
  if(!jSGlobals.isEmpty(setPublic)){ par[sssNames.setPublic]     = setPublic;}
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodPUT,
  key).send(
    sssGlobals.sssAPIResourceEntity,
  encodeURIComponent(entity) + "/share",
  par);
};

var SSCommentsAdd = function(
  resultHandler,
errorHandler,
key,
entity,
comments){
  
  if (sssFcts.isEmpty(entity)){
    console.error("entity required");
    return;
  }
  
  if (sssFcts.isEmpty(comments)){
    console.error("comments required");
    return;
  }
  
  var par = {};
  if (!sssFcts.isEmpty(comments)){    par[sssNames.comments] = comments; }
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodPOST,
  key).send(
    sssGlobals.sssAPIResourceEntity,
  encodeURIComponent(entity) + "/comments",
  par);
};

var SSCollsEntityIsInGet = function(
  resultHandler, 
errorHandler, 
key, 
entity){
  
  if (sssFcts.isEmpty(entity)){
    console.error("entity required");
    return;
  }
  
  var par                = {};
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodGET,
  key).send(
    sssGlobals.sssAPIResourceColl,
  "entries/" + encodeURIComponent(entity) + "/colls",
  par);
};

var SSCollCumulatedTagsGet = function(
  resultHandler, 
errorHandler, 
key, 
coll){
  
  if (sssFcts.isEmpty(coll)){
    console.error("coll required");
    return;
  }
  
  var par                = {};
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodGET,
  key).send(
    sssGlobals.sssAPIResourceColl,
  encodeURIComponent(coll) + "/tags/cumulated",
  par);
};

var SSCollRootGet = function(
  resultHandler, 
errorHandler, 
key){
  
  var par                = {};
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodGET,
  key).send(
    sssGlobals.sssAPIResourceColl,
  "root",
  par);
};

var SSCollEntryAdd = function(
  resultHandler, 
errorHandler, 
key, 
coll, 
entry, 
label, 
addNewColl){
  
  if(sssFcts.isEmpty(coll)){
    console.error("coll required");
    return;
  }
  
  var par                      = {};
  
  if(!jSGlobals.isEmpty(label)){      par[sSVarU.label]            = label;}
  if(!jSGlobals.isEmpty(addNewColl)){ par[sSVarU.addNewColl]       = addNewColl;}
  if(!jSGlobals.isEmpty(entry)){      par[sSVarU.entry]            = entry;}
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodPOST,
  key).send(
    sssGlobals.sssAPIResourceColl,
  encodeURIComponent(coll),
  par);
};

var SSCollEntriesAdd = function(
  resultHandler, 
errorHandler, 
key, 
coll, 
entries, 
labels){
  
  if(sssFcts.isEmpty(coll)){
    console.error("coll required");
    return;
  }
  
  if(sssFcts.isEmpty(entries)){
    console.error("entries required");
    return;
  }
  
  if(sssFcts.isEmpty(labels)){
    console.error("labels required");
    return;
  }
  
  var par                       = {};
  par[sSVarU.entries]          = entries;
  par[sSVarU.labels]           = labels;
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodPOST,
  key).send(
    sssGlobals.sssAPIResourceColl,
  encodeURIComponent(coll) + "/entries",
  par);
};

var SSCollEntriesDelete = function(
  resultHandler, 
errorHandler, 
key, 
coll, 
entries){
  
  if(sssFcts.isEmpty(coll)){
    console.error("coll required");
    return;
  }
  
  if(sssFcts.isEmpty(entries)){
    console.error("entries required");
    return;
  }
  
  var par                      = {};
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodDELETE,
  key).send(
    sssGlobals.sssAPIResourceColl,
  encodeURIComponent(coll) + "/entries/" + encodeURIComponent(entries.toString()),
  par);
};

var SSCollWithEntries = function(
  resultHandler, 
errorHandler, 
key, 
coll){
  
  if(sssFcts.isEmpty(coll)){
    console.error("coll required");
    return;
  }
  
  var par                      = {};
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodGET,
  key).send(
    sssGlobals.sssAPIResourceColl,
  encodeURIComponent(coll),
  par);
};

var SSCollHierarchyGet = function(
  resultHandler, 
errorHandler, 
key, 
coll){
  
  if(sssFcts.isEmpty(coll)){
    console.error("coll required");
    return;
  }
  
  var par                      = {};
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodGET,
  key).send(
    sssGlobals.sssAPIResourceColl,
  encodeURIComponent(coll) + "/hierarchy",
  par);
};

var SSCategoriesPredefinedGet = function(
  resultHandler, 
errorHandler, 
key){
  
  var par                      = {};
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodGET,
  key).send(
    sssGlobals.sssAPIResourceCategory,
  "predefined",
  par);
};

var SSCategoryAdd = function(
  resultHandler,
errorHandler,
key,
entity,
label,
space,
circle, 
creationTime){
  
  if(sssFcts.isEmpty(entity)){
    console.error("entity required");
    return;
  }
  
  if(sssFcts.isEmpty(label)){
    console.error("label required");
    return;
  }
  
  if(sssFcts.isEmpty(space)){
    space = "sharedSpace";
  }
  
  var par = {};
  
  par[sssNames.label]  = label;
  par[sssNames.entity] = entity;
  par[sssNames.space]  = space;
  
  if(!sssFcts.isEmpty(creationTime)){ par[sssNames.creationTime] = creationTime; }
  if(!sssFcts.isEmpty(circle)){       par[sssNames.circle]       = circle; }
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodPOST,
  key).send(
    sssGlobals.sssAPIResourceCategory,
  "",
  par);
};

var SSCategoryFrequsGetFiltered = function(
  resultHandler,
errorHandler,
key,
forUser,
entities,
labels,
space,
circles,
startTime){
  
  var par = {};
  
  if (!sssFcts.isEmpty(forUser)){            par[sssNames.forUser] = forUser; }
  if (!sssFcts.isEmpty(entities)){           par[sssNames.entities] = entities; }
  if (!sssFcts.isEmpty(labels)){             par[sssNames.labels] = labels; }
  if (!sssFcts.isEmpty(space)){              par[sssNames.space] = space; }
  if (!sssFcts.isEmpty(circles)){            par[sssNames.circles] = circles; }
  if (!sssFcts.isEmpty(startTime)){          par[sssNames.startTime] = startTime; }
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodPOST,
  key).send(
    sssGlobals.sssAPIResourceCategory,
  "filtered/frequs",
  par);
};

var SSRecommTagsFiltered = function(
  resultHandler,
errorHandler,
key,
realm,
forUser,
entity,
categories,
maxTags,
includeOwn,
ignoreAccessRights){
  
  var par = {};
  
  if (!sssFcts.isEmpty(realm)){                par[sssNames.realm]               = realm; }
  if (!sssFcts.isEmpty(forUser)){              par[sssNames.forUser]             = forUser; }
  if (!sssFcts.isEmpty(entity)){               par[sssNames.entity]              = entity; }
  if (!sssFcts.isEmpty(categories)){           par[sssNames.categories]          = categories; }
  if (!sssFcts.isEmpty(maxTags)){              par[sssNames.maxTags]             = maxTags; }
  if (!sssFcts.isEmpty(includeOwn)){           par[sssNames.includeOwn]          = includeOwn; }
  if (!sssFcts.isEmpty(ignoreAccessRights)){   par[sssNames.ignoreAccessRights]  = ignoreAccessRights; }
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodPOST,
  key).send(
    sssGlobals.sssAPIResourceRecomm,
  "filtered/tags",
  par);
};

var SSEvalLog = function(
  resultHandler,
errorHandler,
key,
toolContext, 
forUser,
type,
entity,
content,
entities,
users){
  
  if(sssFcts.isEmpty(type)){
    console.error("type required");
    return;
  }
  
  var par = {};
  
  if (!sssFcts.isEmpty(toolContext)){ par[sssNames.toolContext]  = toolContext; }
  if (!sssFcts.isEmpty(forUser)){     par[sssNames.forUser]      = forUser; }
  if (!sssFcts.isEmpty(type)){        par[sssNames.type]         = type; }
  if (!sssFcts.isEmpty(entity)){      par[sssNames.entity]       = entity; }
  if (!sssFcts.isEmpty(content)){     par[sssNames.content]      = content; }
  if (!sssFcts.isEmpty(entities)){    par[sssNames.entities]     = entities; }
  if (!sssFcts.isEmpty(users)){       par[sssNames.users]        = users; }
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodPOST,
  key).send(
    sssGlobals.sssAPIResourceEval,
  "log",
  par);
};

var SSEntityCopy = function(
  resultHandler,
errorHandler,
key,
entity,
targetEntity,
forUsers, 
label, 
includeUsers, 
includeEntities, 
includeMetaSpecificToEntityAndItsEntities,
includeOriginUser,
entitiesToExclude,
comment, 
appendUserNameToLabel){
  
  if(sssFcts.isEmpty(entity)){
    console.error("entity required");
    return;
  }
  
  var par = {};
  
  if (!sssFcts.isEmpty(targetEntity)){          par[sssNames.targetEntity]          = targetEntity; }
  if (!sssFcts.isEmpty(forUsers)){              par[sssNames.forUsers]              = forUsers; }
  if (!sssFcts.isEmpty(label)){                 par[sssNames.label]                 = label; }
  if (!sssFcts.isEmpty(includeUsers)){          par[sssNames.includeUsers]          = includeUsers; }
  if (!sssFcts.isEmpty(includeEntities)){       par[sssNames.includeEntities]       = includeEntities; }
  if (!sssFcts.isEmpty(includeMetaSpecificToEntityAndItsEntities)){ par[sssNames.includeMetaSpecificToEntityAndItsEntities] = includeMetaSpecificToEntityAndItsEntities; }
  if (!sssFcts.isEmpty(includeOriginUser)){     par[sssNames.includeOriginUser]     = includeOriginUser; }
  if (!sssFcts.isEmpty(entitiesToExclude)){     par[sssNames.entitiesToExclude]     = entitiesToExclude; }
  if (!sssFcts.isEmpty(comment)){               par[sssNames.comment]               = comment; }
  if (!sssFcts.isEmpty(appendUserNameToLabel)){ par[sssNames.appendUserNameToLabel] = appendUserNameToLabel; }
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodPUT,
  key).send(
    sssGlobals.sssAPIResourceEntity,
  encodeURIComponent(entity) + "/copy",
  par);
};

var SSImageProfilePictureSet = function(
  resultHandler,
errorHandler,
entity,
key,
file){
  
  if(sssFcts.isEmpty(entity)){
    console.error("entity required");
    return;
  }
  
  if(sssFcts.isEmpty(file)){
    console.error("file required");
    return;
  }
  
  var par = {};
  
  new SSSJSONRequest(
    resultHandler,
  errorHandler,
  sssGlobals.sssAPI,
  sssGlobals.httpMethodPUT,
  key).send(
    sssGlobals.sssAPIResourceImage,
  "profile/picture/entity/" + encodeURIComponent(entity) + "/file/" + encodeURIComponent(file),
  par);
};