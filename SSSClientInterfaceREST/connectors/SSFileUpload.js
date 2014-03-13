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
function SSFileUpload(){
  
	this.op            = "fileUpload";
	this.lastChunkSent = false;
	
  this.handle = function(resultHandler, errorHandler, user, key, file, collUri){
    
		this.resultHandler         = resultHandler;
		this.errorHandler          = errorHandler;
    this.collUri               = collUri;
    this.fileName              = file.name;
    
    var par         = {};
    var xhr         = new XMLHttpRequest();
    var formData    = new FormData();
    
    par[sSVarU.op]              = this.op;
    par[sSVarU.user]            = user;
    par[sSVarU.mimeType]        = file.type;
    par[sSVarU.fileName]        = file.name;
    par[sSVarU.key]             = key;
    
    formData.append(sSVarU.file,     file);
    formData.append(sSVarU.jsonRequ, JSON.stringify(par));
    
    xhr.onload = (function(thisRef){ return function(){
        
        if(
            this.readyState    !== 4   ||
            this.status        !== 200){
          return;
        }
        
        new SSGlobals().onMessage(thisRef.myResultHandler, thisRef.errorHandler, jSGlobals.parseJson(this.response), thisRef.op);
      };})(this);
    
    xhr.open (sSGlobals.httpMethPOST, sSGlobals.hostREST + this.op + jSGlobals.slash, true);
    xhr.send (formData);
	};
  
  this.myResultHandler = (function(thisRef){ return function(result){
      thisRef.resultHandler(thisRef.collUri, result.uri, thisRef.fileName);
    };})(this);
};