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
function SSScaffRecommTagsBasedOnUserEntityTag(){
  
	this.op = "scaffRecommTagsBasedOnUserEntityTag";
  
  this.handle = function(resultHandler, errorHandler, user, key, forUserUri, entityUri, maxTags){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]              = this.op;
    par[sSVarU.user]            = user;
    par[sSVarU.key]             = key;
    
    if(!jSGlobals.isEmpty(forUserUri)){    par[sSVarU.forUserUri]      = forUserUri;}
    if(!jSGlobals.isEmpty(entityUri)){     par[sSVarU.entityUri]       = entityUri;}
    if(!jSGlobals.isEmpty(maxTags)){       par[sSVarU.maxTags]         = maxTags;}
    
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

function SSScaffRecommTagsBasedOnUserEntityTagTime(){
  
	this.op = "scaffRecommTagsBasedOnUserEntityTagTime";
  
  this.handle = function(resultHandler, errorHandler, user, key, forUserUri, entityUri, maxTags){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]              = this.op;
    par[sSVarU.user]            = user;
    par[sSVarU.key]             = key;
    
    if(!jSGlobals.isEmpty(forUserUri)){    par[sSVarU.forUserUri]      = forUserUri;}
    if(!jSGlobals.isEmpty(entityUri)){     par[sSVarU.entityUri]       = entityUri;}
    if(!jSGlobals.isEmpty(maxTags)){       par[sSVarU.maxTags]         = maxTags;}
    
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

function SSScaffRecommTagsBasedOnUserEntityTagCategory(){
  
	this.op = "scaffRecommTagsBasedOnUserEntityTagCategory";
  
  this.handle = function(resultHandler, errorHandler, user, key, forUserUri, entityUri, categories, maxTags){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]              = this.op;
    par[sSVarU.user]            = user;
    par[sSVarU.key]             = key;
    
    if(!jSGlobals.isEmpty(forUserUri)){    par[sSVarU.forUserUri]      = forUserUri;}
    if(!jSGlobals.isEmpty(entityUri)){     par[sSVarU.entityUri]       = entityUri;}
    if(!jSGlobals.isEmpty(categories)){    par[sSVarU.categories]      = jSGlobals.commaSeparateStringArray(categories);}
    if(!jSGlobals.isEmpty(maxTags)){       par[sSVarU.maxTags]         = maxTags;}
    
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

function SSScaffRecommTagsBasedOnUserEntityTagCategoryTime(){
  
	this.op = "scaffRecommTagsBasedOnUserEntityTagCategoryTime";
  
  this.handle = function(resultHandler, errorHandler, user, key, forUserUri, entityUri, categories, maxTags){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]              = this.op;
    par[sSVarU.user]            = user;
    par[sSVarU.key]             = key;
    
    if(!jSGlobals.isEmpty(forUserUri)){    par[sSVarU.forUserUri]      = forUserUri;}
    if(!jSGlobals.isEmpty(entityUri)){     par[sSVarU.entityUri]       = entityUri;}
    if(!jSGlobals.isEmpty(categories)){    par[sSVarU.categories]      = jSGlobals.commaSeparateStringArray(categories);}
    if(!jSGlobals.isEmpty(maxTags)){       par[sSVarU.maxTags]         = maxTags;}
    
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