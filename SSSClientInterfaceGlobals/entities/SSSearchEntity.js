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
var sSSearchEntity = new SSSearchEntity();
  
function SSSearchEntity(){
  
  this.getPrivateSearchResults = function(searchEntities){
    
    var result = new Array();
    
    for(var counter = 0; counter < jSGlobals.arrayLength(searchEntities); counter++){
      
      if(searchEntities[counter].space === sSGlobals.spacePrivate){
        result.push(searchEntities[counter]);
      }
    }
    
    return result;
  };
  
  this.getSharedSearchResults = function(searchEntities){
    
    var result = new Array();
    
    for(var counter = 0; counter < jSGlobals.arrayLength(searchEntities); counter++){
      
      if(searchEntities[counter].space === sSGlobals.spaceShared){
        result.push(searchEntities[counter]);
      }
    }
    
    return result;
  };
  
  this.getSearchResultByUri = function(searchResults, uri){
    
    for(var counter = 0; counter < jSGlobals.arrayLength(searchResults); counter++){
      
      if(uri === searchResults[counter].uri){
        return searchResults[counter];
      }
    }
    
    return null;
  };
  
  this.getSearchResultLabelByUri = function(searchResults, uri){
    
    var searchResult = this.getSearchResultByUri(searchResults, uri);
    
    if(jSGlobals.isNull(searchResult)){
      return null;
    }
    
    return searchResult.label;
  };
};