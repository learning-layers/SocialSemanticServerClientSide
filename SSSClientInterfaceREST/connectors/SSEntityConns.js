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

function SSEntityUserPublicSet(){
  
	this.op = "entityUserPublicSet";
  
  this.handle = function(resultHandler, errorHandler, user, key, entityUri){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]               = this.op;
    par[sSVarU.user]             = user;
    par[sSVarU.entityUri]        = entityUri;
    par[sSVarU.key]              = key;
    
    xhr.onload = (function(thisRef){ return function(){
        
        if(
            this.readyState    !== 4   ||
            this.status        !== 200){
          return;
        }
        
        new SSGlobals().onMessage(thisRef.resultHandler, thisRef.errorHandler, jSGlobals.parseJson(this.response), thisRef.op);
      };})(this);
    
    xhr.send (JSON.stringify(par), sSGlobals.httpMethPOST, sSGlobals.hostREST + this.op + jSGlobals.slash);
	};
};

function SSEntityUserDirectlyAdjoinedEntitiesRemove(){
  
	this.op = "entityUserDirectlyAdjoinedEntitiesRemove";
  
  this.handle = function(
    resultHandler, 
  errorHandler, 
  user, 
  key, 
  entityUri, 
  removeUserTags, 
  removeUserRatings, 
  removeFromUserColls, 
  removeUserLocations){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]                  = this.op;
    par[sSVarU.user]                = user;
    par[sSVarU.entityUri]           = entityUri;
    par[sSVarU.removeUserTags]      = removeUserTags;
    par[sSVarU.removeUserRatings]   = removeUserRatings;
    par[sSVarU.removeFromUserColls] = removeFromUserColls;
    par[sSVarU.removeUserLocations] = removeUserLocations;
    par[sSVarU.key]                 = key;
    
    xhr.onload = (function(thisRef){ return function(){
        
        if(
            this.readyState    !== 4   ||
            this.status        !== 200){
          return;
        }
        
        new SSGlobals().onMessage(thisRef.resultHandler, thisRef.errorHandler, jSGlobals.parseJson(this.response), thisRef.op);
      };})(this);
    
    xhr.send (JSON.stringify(par), sSGlobals.httpMethPOST, sSGlobals.hostREST + this.op + jSGlobals.slash);
	};
};

function SSEntityLabelGet(){
  
	this.op = "entityLabelGet";
  
  this.handle = function(resultHandler, errorHandler, user, key, entityUri){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]              = this.op;
    par[sSVarU.user]            = user;
    par[sSVarU.entityUri]       = entityUri;
    par[sSVarU.key]             = key;
    
    xhr.onload = (function(thisRef){ return function(){
        
        if(
            this.readyState    !== 4   ||
            this.status        !== 200){
          return;
        }
        
        new SSGlobals().onMessage(thisRef.resultHandler, thisRef.errorHandler, jSGlobals.parseJson(this.response), thisRef.op);
      };})(this);
    
    xhr.send (JSON.stringify(par), sSGlobals.httpMethPOST, sSGlobals.hostREST + this.op + jSGlobals.slash);
	};
};

function SSEntityLabelSet(){
  
	this.op = "entityLabelSet";
  
  this.handle = function(resultHandler, errorHandler, user, key, entityUri, label){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    
    par[sSVarU.op]              = this.op;
    par[sSVarU.user]            = user;
    par[sSVarU.entityUri]       = entityUri;
    par[sSVarU.label]           = label;
    par[sSVarU.key]             = key;
    
    xhr.onload = (function(thisRef){ return function(){
        
        if(
            this.readyState    !== 4   ||
            this.status        !== 200){
          return;
        }
        
        new SSGlobals().onMessage(thisRef.resultHandler, thisRef.errorHandler, jSGlobals.parseJson(this.response), thisRef.op);
      };})(this);
    
    xhr.send (JSON.stringify(par), sSGlobals.httpMethPOST, sSGlobals.hostREST + this.op + jSGlobals.slash);
	};
};

function SSEntityTypeGet(){
  
	this.op = "entityTypeGet";
  
  this.handle = function(resultHandler, errorHandler, user, key, entityUri){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]         = this.op;
    par[sSVarU.user]       = user;
    par[sSVarU.entityUri]  = entityUri;
    par[sSVarU.key]        = key;
    
    xhr.onload = (function(thisRef){ return function(){
        
        if(
            this.readyState    !== 4   ||
            this.status        !== 200){
          return;
        }
        
        new SSGlobals().onMessage(thisRef.resultHandler, thisRef.errorHandler, jSGlobals.parseJson(this.response), thisRef.op);
      };})(this);
    
    xhr.send (JSON.stringify(par), sSGlobals.httpMethPOST, sSGlobals.hostREST + this.op + jSGlobals.slash);
	};
};

function SSEntityDescGet(){
  
	this.op = "entityDescGet";
  
  this.handle = function(resultHandler, errorHandler, user, key, entityUri, getTags, getOverallRating, getDiscUris){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]                  = this.op;
    par[sSVarU.user]                = user;
    par[sSVarU.entityUri]           = entityUri;
    par[sSVarU.key]                 = key;
    
    if(!jSGlobals.isEmpty(getTags)){          par[sSVarU.getTags]             = getTags;}
    if(!jSGlobals.isEmpty(getOverallRating)){ par[sSVarU.getOverallRating]    = getOverallRating;}
    if(!jSGlobals.isEmpty(getDiscUris)){      par[sSVarU.getDiscUris]         = getDiscUris;}
    
    xhr.onload = (function(thisRef){ return function(){
        
        if(
            this.readyState    !== 4   ||
            this.status        !== 200){
          return;
        }
        
        new SSGlobals().onMessage(thisRef.resultHandler, thisRef.errorHandler, jSGlobals.parseJson(this.response), thisRef.op);
      };})(this);
    
    xhr.send (JSON.stringify(par), sSGlobals.httpMethPOST, sSGlobals.hostREST + this.op + jSGlobals.slash);
	};
};