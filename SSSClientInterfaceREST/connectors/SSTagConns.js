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

function SSTagAdd(){
  
	this.op = "tagAdd";
  
  this.handle = function(resultHandler, errorHandler, user, key, resource, tagString, space){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]               = this.op;
    par[sSVarU.user]             = user;
    par[sSVarU.resource]         = resource;
    par[sSVarU.tagString]        = tagString;
    par[sSVarU.space]            = space;
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

function SSTagUserFrequsGet(){
  
	this.op = "tagUserFrequsGet";
  
  this.handle = function(resultHandler, errorHandler, user, key, resource, tagString, space){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
		
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]               = this.op;
    par[sSVarU.user]             = user;
    par[sSVarU.key]              = key;
    
    if(!jSGlobals.isEmpty(resource)){  par[sSVarU.resource]         = resource;}
    if(!jSGlobals.isEmpty(tagString)){ par[sSVarU.tagString]        = tagString;}
    if(!jSGlobals.isEmpty(space)){     par[sSVarU.space]            = space;}
    
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

function SSTagsUserRemove(){
  
	this.op = "tagsUserRemove";
  
  this.handle = function(resultHandler, errorHandler, user, key, resource, tagString, space){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]               = this.op;
    par[sSVarU.user]             = user;
    par[sSVarU.key]              = key;
    
    if(!jSGlobals.isEmpty(resource)){  par[sSVarU.resource]         = resource;}
    if(!jSGlobals.isEmpty(tagString)){ par[sSVarU.tagString]        = tagString;}
    if(!jSGlobals.isEmpty(space)){     par[sSVarU.space]            = space;}
    
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