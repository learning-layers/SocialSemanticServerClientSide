/**
 * Copyright 2013 Graz University of Technology - KTI (Knowledge Technologies Institute)
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
var sSVarU = new SSVarU();
    
function SSVarU(){
  
  this.tag                                            = "tag";
  this.comments                                       = "comments";
  this.extendToParents                                = "extendToParents";
  this.keywordsToSearchFor                            = "keywordsToSearchFor";
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
};
