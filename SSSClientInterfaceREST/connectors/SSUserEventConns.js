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
function SSUserEventAdd(){
  
	this.op = "uEAdd";
  
  this.handle = function(resultHandler, errorHandler, user, key, eventType, resource, content){
		
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    this.user                  = user; 
    this.key                   = key;
		this.eventType             = eventType;
		this.resource              = resource;
    this.content               = content;
		
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]               = this.op;
    par[sSVarU.user]             = this.user;
    par[sSVarU.eventType]        = this.eventType;
    par[sSVarU.key]              = this.key;
    
    if(!jSGlobals.isEmpty(resource)){ par[sSVarU.resource]         = this.resource;}
    if(!jSGlobals.isEmpty(content)){  par[sSVarU.content]          = this.content;}
    
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

function SSUserEventsGet(){
  
	this.op = "uEsGet";
  
  this.handle = function(resultHandler, errorHandler, user, key, forUser, resource, startTime, endTime){
		
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
		
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]               = this.op;
    par[sSVarU.user]             = user;
    par[sSVarU.key]              = key;
    
    if(!jSGlobals.isEmpty(forUser)){   par[sSVarU.forUser]          = forUser;}
    if(!jSGlobals.isEmpty(resource)){  par[sSVarU.resource]         = resource;}
    if(!jSGlobals.isEmpty(startTime)){ par[sSVarU.startTime]        = startTime;}
    if(!jSGlobals.isEmpty(endTime)){   par[sSVarU.endTime]          = endTime;}
    
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

function SSUserEventGet(){
  
	this.op = "uEGet";
  
  this.handle = function(resultHandler, errorHandler, user, key, ueUri){
		
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
		
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]               = this.op;
    par[sSVarU.user]             = user;
    par[sSVarU.ueUri]            = ueUri;
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