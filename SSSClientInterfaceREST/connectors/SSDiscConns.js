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
function SSDiscEntryAdd(){
  
	this.op = "discEntryAdd";
  
  this.handle = function(resultHandler, errorHandler, user, key, disc, target, content, addNewDisc){
    
		this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]         = this.op;
    par[sSVarU.user]       = user;
    par[sSVarU.key]        = key;
    
    if(!jSGlobals.isEmpty(disc)){       par[sSVarU.disc]       = disc;}
    if(!jSGlobals.isEmpty(target)){     par[sSVarU.target]     = target;}
    if(!jSGlobals.isEmpty(content)){    par[sSVarU.content]    = content;}
    if(!jSGlobals.isEmpty(addNewDisc)){ par[sSVarU.addNewDisc] = addNewDisc;}
    
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

function SSDiscWithEntriesGet(){
  
	this.op = "discWithEntriesGet";
  
  this.handle = function(resultHandler, errorHandler, user, key, disc){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]              = this.op;
    par[sSVarU.user]            = user;
    par[sSVarU.disc]            = disc;
    par[sSVarU.maxDiscEntries]  = 10;
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

function SSDiscsAllGet(){
  
	this.op = "discsAllGet";
  
  this.handle = function(resultHandler, errorHandler, user, key){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]              = this.op;
    par[sSVarU.user]            = user;
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