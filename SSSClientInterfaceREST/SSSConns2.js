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
  this.sssAPI               = "http://localhost:8080/sss.adapter.rest.v2/";
  this.sssAPIResourceEntity = "entities/entities/";
  this.sssAPIResourceCircle = "circles/circles/";
  this.sssAPIResourceAuth   = "auth/auth/";
  this.sssAPIResourceDisc   = "discs/discs/";
  this.sssAPIResourceLike   = "likes/likes/";
  this.sssAPIResourceTag    = "tags/tags/";
  this.sssAPIResourceSearch = "search/search/";
  this.httpMethodPUT        = "PUT";
  this.httpMethodGET        = "GET";
  this.httpMethodPOST       = "POST";
  this.httpMethodDELETE     = "DELETE";
}

var SSSJSONRequest = function(
  resultHandler, 
errorHandler, 
apiURI, 
method, 
authToken){
  
  this.resultHandler     = resultHandler;
  this.errorHandler      = errorHandler;
  this.apiURI            = apiURI;
  this.method            = method;
  this.authToken         = authToken;
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
        if(!sssFcts.isEmpty(thisRef.authToken)){
          request.setRequestHeader("Authorization", "Bearer " + thisRef.authToken);
        }
      },
      'complete' : function(jqXHR, textStatus) {
        
        if(jqXHR.readyState    !== 4){
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
  
  this.entityTypesToIncludeOnly                       = "entityTypesToIncludeOnly";
  this.toolContext                                    = "toolContext";
  this.includeOnlyLastActivities                      = "includeOnlyLastActivities";
  this.setFriends                                     = "setFriends";
  this.useUsersEntities                               = "useUsersEntities";
  this.globalSearchOp                                 = "globalSearchOp";
  this.localSearchOp                                  = "localSearchOp";
  this.includeOwn                                     = "includeOwn";
  this.minRating                                      = "minRating";
  this.maxRating                                      = "maxRating";
  this.includeComments                                = "includeComments";
  this.setCircleTypes                                 = "setCircleTypes";
  this.link                                           = "link";
  this.longitude                                      = "longitude";
  this.latitude                                       = "latitude";
  this.accuracy                                       = "accuracy";
  this.forEntity                                      = "forEntity";
  this.timePoint                                      = "timePoint";
  this.genre                                          = "genre";
  this.uuid                                           = "uuid";
  this.stack                                          = "stack";
  this.app                                            = "app";
  this.getCircles                                     = "getCircles";
  this.friends                                        = "friends";
  this.friend                                         = "friend";
  this.descriptionShort                               = "descriptionShort";
  this.descriptionFunctional                          = "descriptionFunctional";
  this.descriptionTechnical                           = "descriptionTechnical";
  this.descriptionInstall                             = "descriptionInstall";
  this.downloads                                      = "downloads";      
  this.downloadIOS                                    = "downloadIOS";    
  this.downloadAndroid                                = "downloadAndroid"; 
  this.fork                                           = "fork";            
  this.screenShots                                    = "screenShots";     
  this.video                                          = "video";          
  this.videos                                         = "videos";          
  this.message                                        = "message";
  this.messages                                       = "messages";
  this.includeRead                                    = "includeRead";
  this.read                                           = "read";
  this.pageNumber                                     = "pageNumber";
  this.pagesID                                        = "pagesID";
  this.pageNumbers                                    = "pageNumbers";
  this.typesToRecommOnly                              = "typesToRecommOnly";
  this.maxResources                                   = "maxResources";
  this.creationTime                                   = "creationTime";
  this.circles                                        = "circles";
  this.tag                                            = "tag";
  this.comments                                       = "comments";
  this.extendToParents                                = "extendToParents";
  this.wordsToSearchFor                               = "wordsToSearchFor";
  this.tagsToSearchFor                                = "tagsToSearchFor";
  this.misToSearchFor                                 = "misToSearchFor";
  this.labelsToSearchFor                              = "labelsToSearchFor";
  this.descriptionsToSearchFor                        = "descriptionsToSearchFor";
  this.typesToSearchOnlyFor                           = "typesToSearchOnlyFor";
  this.includeOnlySubEntities                         = "includeOnlySubEntities";
  this.entitiesToSearchWithin                         = "entitiesToSearchWithin";
  this.includeRecommendedResults                      = "includeRecommendedResults";
  this.provideEntries                                 = "provideEntries";
  this.getThumb                                       = "getThumb";
  this.getFlags                                       = "getFlags";
  this.getUEs                                         = "getUEs";
  this.entitiesToExclude                              = "entitiesToExclude";
  this.onlySubEntities                                = "onlySubEntities";
  this.includeTags                                    = "includeTags"; 
  this.includeTextualContent                          = "includeTextualContent";
  this.includeLabel                                   = "includeLabel";
  this.includeDescription                             = "includeDescription";
  this.includeMIs                                     = "includeMIs";
  this.description                                    = "description";
  this.types                                          = "types";
  this.comment                                        = "comment";
  this.circleTypes                                    = "circleTypes";
  this.fileHandle                                     = "fileHandle";
  this.entry                                          = "entry";
  this.labels                                         = "labels";
  this.circle                                         = "circle";
  this.entities                                       = "entities";
  this.users                                          = "users";
  this.categories                                     = "categories";
  this.removeUserTags                                 = "removeUserTags";
  this.removeUserRatings                              = "removeUserRatings";
  this.removeFromUserColls                            = "removeFromUserColls";
  this.removeUserLocations                            = "removeUserLocations";
  this.getTags                                        = "getTags";
  this.getOverallRating                               = "getOverallRating";
  this.getDiscs                                       = "getDiscs";
  this.addNewDisc                                     = "addNewDisc";
  this.addNewColl                                     = "addNewColl";
  this.uE                                             = "uE";
  this.learnEpVersion                                 = "learnEpVersion";
  this.learnEp                                        = "learnEp";
  this.entity                                         = "entity";
  this.learnEpEntity                                  = "learnEpEntity";
  this.learnEpCircle                                  = "learnEpCircle";
  this.forUser                                        = "forUser";
  this.file                                           = "file";
  this.jsonRequ                                       = "jsonRequ";
  this.id                                             = "id";
  this.tags                                           = "tags";
  this.maxResultsPerTag                               = "maxResultsPerTag";
  this.keywords                                       = "keywords";
  this.mIs                                            = "mIs";
  this.searchOp                                       = "searchOp";
  this.value                                          = "value";
  this.mimeType                                       = "mimeType";
  this.write                                          = "write";
  this.colls                                          = "colls";
  this.order                                          = "order";
  this.password                                       = "password";
  this.user                                           = "user";
  this.op                                             = "op";
  this.label                                          = "label";
  this.location                                       = "location";
  this.space                                          = "space";
  this.startTime                                      = "startTime";
  this.endTime                                        = "endTime";
  this.maxTags                                        = "maxTags";
  this.disc                                           = "disc";
  this.content                                        = "content";
  this.maxEntries                                     = "maxEntries";
  this.coll                                           = "coll";
  this.entries                                        = "entries";
  this.key                                            = "key";
  this.type                                           = "type";
  this.xLabel                                         = "xLabel";
  this.yLabel                                         = "yLabel";
  this.xR                                             = "xR";
  this.yR                                             = "yR";
  this.xC                                             = "xC";
  this.yC                                             = "yC";
  this.x                                              = "x";
  this.y                                              = "y";
  this.errorClassNames                                = "errorClassNames";
  this.errorClassesWhereThrown                        = "errorClassesWhereThrown";
  this.errorMethodsWhereThrown                        = "errorMethodsWhereThrown";
  this.errorLinesWhereThrown                          = "errorLinesWhereThrown";
  this.errorThreadsWhereThrown                        = "errorThreadsWhereThrown";
}

var sssFcts = new SSSFcts();

function SSSFcts(){

  this.empty                                                  = "";

  this.isEmpty = function(obj){
    return obj === null || obj === undefined || obj === this.empty;
  };
}

var SSEntityLabelUpdate = function(
  resultHandler, 
errorHandler, 
key, 
entity, 
label){
  
  if(sssFcts.isEmpty(entity)){  
    console.error("entity requried");
    return;
  }
  
  if(sssFcts.isEmpty(label)){  
    console.error("label requried");
    return;
  }
  
  var par = {};
  
  par[sssNames.label] = label;
  
  new SSSJSONRequest(
    resultHandler,
    errorHandler,
    sssGlobals.sssAPI,
    sssGlobals.httpMethodPUT,
    key).send(
      sssGlobals.sssAPIResourceEntity,
      encodeURIComponent(entity) + "/label", 
      par);
};

var SSEntityDescriptionUpdate = function(
  resultHandler, 
errorHandler, 
key, 
entity, 
description){
  
  if(sssFcts.isEmpty(entity)){  
    console.error("entity requried");
    return;
  }
  
  if(sssFcts.isEmpty(description)){  
    console.error("description requried");
    return;
  }
  
  var par = {};
  
  par[sssNames.description] = description;
  
  new SSSJSONRequest(
    resultHandler,
    errorHandler,
    sssGlobals.sssAPI,
    sssGlobals.httpMethodPUT,
    key).send(
      sssGlobals.sssAPIResourceEntity,
      encodeURIComponent(entity) + "/description", 
      par);
};

var SSEntityCommentsAdd = function(
  resultHandler, 
errorHandler, 
key, 
entity, 
comments){
  
  if(sssFcts.isEmpty(entity)){  
    console.error("entity requried");
    return;
  }
  
  if(sssFcts.isEmpty(comments)){  
    console.error("comments requried");
    return;
  }
  
  var par = {};
  
  par[sssNames.comments] = comments;
  
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

var SSEntityUpdate = function(
  resultHandler, 
errorHandler, 
key, 
entity, 
label, 
description){
  
  if(sssFcts.isEmpty(entity)){  
    console.error("entity requried");
    return;
  }
  
  var par = {};
  
  if(!sssFcts.isEmpty(label)){          par[sssNames.label]             = label;}
  if(!sssFcts.isEmpty(description)){    par[sssNames.description]       = description;}
  
  new SSSJSONRequest(
    resultHandler,
    errorHandler,
    sssGlobals.sssAPI,
    sssGlobals.httpMethodPUT,
    key).send(
      sssGlobals.sssAPIResourceEntity,
      encodeURIComponent(entity) + "/update",
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

var SSCirclesForUserGet = function(
  resultHandler, 
errorHandler, 
key,
forUser){
  
  if(sssFcts.isEmpty(forUser)){  
    console.error("forUser requried");
    return;
  }
  
  var par = {};
  
  new SSSJSONRequest(
    resultHandler,
    errorHandler,
    sssGlobals.sssAPI,
    sssGlobals.httpMethodGET,
    key).send(
      sssGlobals.sssAPIResourceCircle,
      "users/" + encodeURIComponent(forUser),
      par);
};

var SSCircleGet = function(
  resultHandler, 
errorHandler, 
key, 
circle, 
entityTypesToIncludeOnly){
  
  if(sssFcts.isEmpty(circle)){  
    console.error("circle requried");
    return;
  }
  
  var par                      = {};
  
  if(!sssFcts.isEmpty(entityTypesToIncludeOnly)){ par[sssNames.entityTypesToIncludeOnly]   = entityTypesToIncludeOnly;}
  
  new SSSJSONRequest(
    resultHandler,
    errorHandler,
    sssGlobals.sssAPI,
    sssGlobals.httpMethodPOST,
    key).send(
      sssGlobals.sssAPIResourceCircle,
      encodeURIComponent(circle),
      par);
};

var SSCircleForUserGet = function(
  resultHandler, 
errorHandler, 
key, 
circle, 
forUser,
entityTypesToIncludeOnly){
  
  if(sssFcts.isEmpty(circle)){  
    console.error("circle requried");
    return;
  }
  
  if(sssFcts.isEmpty(forUser)){  
    console.error("forUser requried");
    return;
  }
  
  var par                      = {};
  
  if(!sssFcts.isEmpty(entityTypesToIncludeOnly)){ par[sssNames.entityTypesToIncludeOnly]   = entityTypesToIncludeOnly;}
  
  new SSSJSONRequest(
    resultHandler,
    errorHandler,
    sssGlobals.sssAPI,
    sssGlobals.httpMethodPOST,
    key).send(
      sssGlobals.sssAPIResourceCircle,
      encodeURIComponent(circle) + "/users/" + encodeURIComponent(forUser),
      par);
};

var SSCircleEntitiesAdd = function(
  resultHandler, 
errorHandler, 
key, 
circle, 
entities){
  
  if(sssFcts.isEmpty(circle)){  
    console.error("circle requried");
    return;
  }
  
  if(sssFcts.isEmpty(entities)){  
    console.error("entities requried");
    return;
  }
  
  var par                      = {};
  
  par[sssNames.entities] = entities;
  
  new SSSJSONRequest(
    resultHandler,
    errorHandler,
    sssGlobals.sssAPI,
    sssGlobals.httpMethodPOST,
    key).send(
      sssGlobals.sssAPIResourceCircle,
      encodeURIComponent(circle) + "/entities/",
      par);
};

var SSCircleUsersAdd = function(
  resultHandler, 
errorHandler,
key, 
circle, 
users){
  
  if(sssFcts.isEmpty(circle)){  
    console.error("circle requried");
    return;
  }
  
  if(sssFcts.isEmpty(users)){  
    console.error("users requried");
    return;
  }
  
  var par                      = {};
  
  par[sssNames.users] = users;
  
  new SSSJSONRequest(
    resultHandler,
    errorHandler,
    sssGlobals.sssAPI,
    sssGlobals.httpMethodPOST,
    key).send(
      sssGlobals.sssAPIResourceCircle,
      encodeURIComponent(circle) + "/users/",
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
  
  if(sssFcts.isEmpty(label)){  
    console.error("label requried");
    return;
  }
  
  var par                      = {};
  
  par[sssNames.label]       = label;
  
  if(!sssFcts.isEmpty(description)){    par[sssNames.description]      = description;}
  if(!sssFcts.isEmpty(entities)){       par[sssNames.entities]         = entities;}
  if(!sssFcts.isEmpty(users)){          par[sssNames.users]            = users;}
  
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
entities){
  
  if(sssFcts.isEmpty(circle)){  
    console.error("circle requried");
    return;
  }
  
  if(sssFcts.isEmpty(entities)){  
    console.error("entities requried");
    return;
  }
  
  var par                      = {};
  
  par[sssNames.entities]           = entities;
  
  new SSSJSONRequest(
    resultHandler,
    errorHandler,
    sssGlobals.sssAPI,
    sssGlobals.httpMethodDELETE,
    key).send(
      sssGlobals.sssAPIResourceCircle,
      encodeURIComponent(circle) + "/entities",
      par);
};

var SSAuthCheckCredPOST = function(
  resultHandler, 
errorHandler,
label, 
password){
  
  if(sssFcts.isEmpty(label)){  
    console.error("label / username requried");
    return;
  }
  
  if(sssFcts.isEmpty(label)){  
    console.error("password requried");
    return;
  }
  
  var par               = {};
  
  par[sssNames.label]          = label;
  par[sssNames.password]       = password;
  
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
key){
  
  var par                     = {};

  new SSSJSONRequest(
    resultHandler,
    errorHandler,
    sssGlobals.sssAPI,
    sssGlobals.httpMethodGET,
    key).send(
      sssGlobals.sssAPIResourceDisc,
      "",
      par);
};

var SSDiscEntryAdd = function(
  resultHandler,
errorHandler,
key, 
disc, 
entity, 
entry, 
addNewDisc,
type,
label, 
description,
users,
entities,
circles){
  
  var par                = {};
  
  if(!sssFcts.isEmpty(disc)){         par[sssNames.disc]        = disc;}
  if(!sssFcts.isEmpty(entity)){       par[sssNames.entity]      = entity;}
  if(!sssFcts.isEmpty(entry)){        par[sssNames.entry]       = entry;}
  if(!sssFcts.isEmpty(addNewDisc)){   par[sssNames.addNewDisc]  = addNewDisc;}
  if(!sssFcts.isEmpty(type)){         par[sssNames.type]        = type;}
  if(!sssFcts.isEmpty(label)){        par[sssNames.label]       = label;}
  if(!sssFcts.isEmpty(description)){  par[sssNames.description] = description;}
  if(!sssFcts.isEmpty(users)){        par[sssNames.users]       = users;}
  if(!sssFcts.isEmpty(entities)){     par[sssNames.entities]    = entities;}
  if(!sssFcts.isEmpty(circles)){      par[sssNames.circles]     = circles;}
  
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

var SSDiscGet = function(
  resultHandler, 
errorHandler, 
key, 
disc,
includeComments){
  
  if(sssFcts.isEmpty(disc)){  
    console.error("disc requried");
    return;
  }
  
  var par                     = {};
  
  if(!sssFcts.isEmpty(includeComments)){ par[sssNames.includeComments]   = includeComments;}
  
  new SSSJSONRequest(
    resultHandler,
    errorHandler,
    sssGlobals.sssAPI,
    sssGlobals.httpMethodPOST,
    key).send(
      sssGlobals.sssAPIResourceDisc,
      encodeURIComponent(disc),
      par);
};

var SSDiscURIsForTargetGet = function(
  resultHandler, 
errorHandler, 
key, 
entity){
  
  if(sssFcts.isEmpty(entity)){  
    console.error("entity requried");
    return;
  }
  
  var par                     = {};
  
  new SSSJSONRequest(
    resultHandler,
    errorHandler,
    sssGlobals.sssAPI,
    sssGlobals.httpMethodGET,
    key).send(
      sssGlobals.sssAPIResourceDisc,
      "entities/" + encodeURIComponent(entity),
      par);
};

var SSLikeUpdate = function(
  resultHandler, 
errorHandler, 
key, 
entity, 
value){
  
  
  if(sssFcts.isEmpty(entity)){  
    console.error("entity requried");
    return;
  }
  
  if(sssFcts.isEmpty(value)){  
    console.error("value requried");
    return;
  }
  
  var par                      = {};
  
  par[sssNames.value] = value;
  
  new SSSJSONRequest(
    resultHandler,
    errorHandler,
    sssGlobals.sssAPI,
    sssGlobals.httpMethodPUT,
    key).send(
      sssGlobals.sssAPIResourceLike,
      "entities/" + encodeURIComponent(entity),
      par);
};

var SSTagAdd = function(
  resultHandler, 
errorHandler, 
key,
entity, 
label, 
space, 
creationTime){
  
  if(sssFcts.isEmpty(entity)){  
    console.error("entity requried");
    return;
  }

  if(sssFcts.isEmpty(label)){  
    console.error("label requried");
    return;
  }
  
  if(sssFcts.isEmpty(space)){  
    console.error("space requried");
    return;
  }
  
  var par                       = {};
  
  par[sssNames.label]            = label;
  par[sssNames.space]            = space;
  
  if(!sssFcts.isEmpty(creationTime)){ par[sssNames.creationTime]   = creationTime;}
  
  new SSSJSONRequest(
    resultHandler,
    errorHandler,
    sssGlobals.sssAPI,
    sssGlobals.httpMethodPOST,
    key).send(
      sssGlobals.sssAPIResourceTag,
      "entities/" + encodeURIComponent(entity),
      par);
};

var SSTagsGetPOST = function(
  resultHandler, 
errorHandler, 
key, 
forUser, 
entities, 
labels, 
space, 
startTime){
  
  var par                      = {};
  
  if(!sssFcts.isEmpty(forUser)){     par[sssNames.forUser]        = forUser;}
  if(!sssFcts.isEmpty(entities)){    par[sssNames.entities]       = entities;}
  if(!sssFcts.isEmpty(labels)){      par[sssNames.labels]         = labels;}
  if(!sssFcts.isEmpty(space)){       par[sssNames.space]          = space;}
  if(!sssFcts.isEmpty(startTime)){   par[sssNames.startTime]      = startTime;}
  
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

var SSTagFrequsGetPOST = function(
  resultHandler, 
errorHandler, 
key, 
forUser, 
entities, 
labels, 
space, 
startTime,
useUsersEntities){
  
  var par                      = {};
  
  if(!sssFcts.isEmpty(forUser)){            par[sssNames.forUser]               = forUser;}
  if(!sssFcts.isEmpty(entities)){           par[sssNames.entities]              = entities;}
  if(!sssFcts.isEmpty(labels)){             par[sssNames.labels]                = labels;}
  if(!sssFcts.isEmpty(space)){              par[sssNames.space]                 = space;}
  if(!sssFcts.isEmpty(startTime)){          par[sssNames.startTime]             = startTime;}
  if(!sssFcts.isEmpty(useUsersEntities)){   par[sssNames.useUsersEntities]      = useUsersEntities;}
  
  new SSSJSONRequest(
    resultHandler,
    errorHandler,
    sssGlobals.sssAPI,
    sssGlobals.httpMethodPOST,
    key).send(
      sssGlobals.sssAPIResourceTag,
      "frequs",
      par);
};

var SSEntitiesForTagsGet = function(
  resultHandler, 
errorHandler, 
key,
forUser, 
labels, 
space, 
startTime){
  
  var par                      = {};
  
  if(!sssFcts.isEmpty(forUser)){     par[sssNames.forUser]        = forUser;}
  if(!sssFcts.isEmpty(labels)){      par[sssNames.labels]         = labels;}
  if(!sssFcts.isEmpty(space)){       par[sssNames.space]          = space;}
  if(!sssFcts.isEmpty(startTime)){   par[sssNames.startTime]      = startTime;}
  
  new SSSJSONRequest(
    resultHandler,
    errorHandler,
    sssGlobals.sssAPI,
    sssGlobals.httpMethodPOST,
    key).send(
      sssGlobals.sssAPIResourceTag,
      "entities/tags",
      par);
};

var SSTagsRemove = function(
  resultHandler, 
errorHandler, 
key,
entity, 
label, 
space){
  
  if(sssFcts.isEmpty(entity)){  
    console.error("entity requried");
    return;
  }
  
  var par                      = {};
  
  if(!sssFcts.isEmpty(label)){     par[sssNames.label]        = label;}
  if(!sssFcts.isEmpty(space)){     par[sssNames.space]        = space;}
  
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

var SSTagEdit = function(
  resultHandler, 
errorHandler, 
key, 
tag, 
entity, 
label){
  
  if(sssFcts.isEmpty(tag)){  
    console.error("tag requried");
    return;
  }
  
  if(sssFcts.isEmpty(entity)){  
    console.error("entity requried");
    return;
  }
  
  if(sssFcts.isEmpty(label)){  
    console.error("label requried");
    return;
  }
  
  var par                      = {};
  
  par[sssNames.entity]         = entity;
  par[sssNames.label]          = label;
  
  new SSSJSONRequest(
    resultHandler,
    errorHandler,
    sssGlobals.sssAPI,
    sssGlobals.httpMethodPUT,
    key).send(
      sssGlobals.sssAPIResourceTag,
      encodeURIComponent(tag) + "/entities/" + encodeURIComponent(entity),
      par);
};

var SSSearch = function(
  resultHandler, 
errorHandler, 
key, 
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
provideEntries, 
pagesID, 
pageNumber,
minRating,
maxRating,
localSearchOp,
globalSearchOp){
  
  var par                                 = {};
  
  if(!sssFcts.isEmpty(includeTextualContent)){       par[sssNames.includeTextualContent]        = includeTextualContent;}
  if(!sssFcts.isEmpty(wordsToSearchFor)){            par[sssNames.wordsToSearchFor]             = wordsToSearchFor;}
  if(!sssFcts.isEmpty(includeTags)){                 par[sssNames.includeTags]                  = includeTags;}
  if(!sssFcts.isEmpty(tagsToSearchFor)){             par[sssNames.tagsToSearchFor]              = tagsToSearchFor;}
  if(!sssFcts.isEmpty(includeMIs)){                  par[sssNames.includeMIs]                   = includeMIs;}
  if(!sssFcts.isEmpty(misToSearchFor)){              par[sssNames.misToSearchFor]               = misToSearchFor;}
  if(!sssFcts.isEmpty(includeLabel)){                par[sssNames.includeLabel]                 = includeLabel;}
  if(!sssFcts.isEmpty(labelsToSearchFor)){           par[sssNames.labelsToSearchFor]            = labelsToSearchFor;}
  if(!sssFcts.isEmpty(includeDescription)){          par[sssNames.includeDescription]           = includeDescription;}
  if(!sssFcts.isEmpty(descriptionsToSearchFor)){     par[sssNames.descriptionsToSearchFor]      = descriptionsToSearchFor;}
  if(!sssFcts.isEmpty(typesToSearchOnlyFor)){        par[sssNames.typesToSearchOnlyFor]         = typesToSearchOnlyFor;}
  if(!sssFcts.isEmpty(includeOnlySubEntities)){      par[sssNames.includeOnlySubEntities]       = includeOnlySubEntities;}
  if(!sssFcts.isEmpty(entitiesToSearchWithin)){      par[sssNames.entitiesToSearchWithin]       = entitiesToSearchWithin;}
  if(!sssFcts.isEmpty(extendToParents)){             par[sssNames.extendToParents]              = extendToParents;}
  if(!sssFcts.isEmpty(includeRecommendedResults)){   par[sssNames.includeRecommendedResults]    = includeRecommendedResults;}
  if(!sssFcts.isEmpty(provideEntries)){              par[sssNames.provideEntries]               = provideEntries;}
  if(!sssFcts.isEmpty(pagesID)){                     par[sssNames.pagesID]                      = pagesID;}
  if(!sssFcts.isEmpty(pageNumber)){                  par[sssNames.pageNumber]                   = pageNumber;}
  if(!sssFcts.isEmpty(minRating)){                   par[sssNames.minRating]                    = minRating;}
  if(!sssFcts.isEmpty(maxRating)){                   par[sssNames.maxRating]                    = maxRating;}
  if(!sssFcts.isEmpty(localSearchOp)){               par[sssNames.localSearchOp]                = localSearchOp;}
  if(!sssFcts.isEmpty(globalSearchOp)){              par[sssNames.globalSearchOp]               = globalSearchOp;}
  
  new SSSJSONRequest(
    resultHandler,
    errorHandler,
    sssGlobals.sssAPI,
    sssGlobals.httpMethodPOST,
    key).send(
      sssGlobals.sssAPIResourceSearch,
      "",
      par);
};