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
        request.setRequestHeader("Authorization", "Bearer " + thisRef.authToken);
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
      "user/" + encodeURIComponent(forUser),
      par);
};