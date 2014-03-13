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
function SSAuthCheckCred(){
  
	this.op = "authCheckCred";
  
  this.handle = function(resultHandler, errorHandler, userLabel, password){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]        = this.op;
    par[sSVarU.user]      = "mailto:dummyUser";
    par[sSVarU.key]       = "someKey";
    par[sSVarU.userLabel] = userLabel;
    par[sSVarU.pass]      = password;
    
    xhr.onload = (function(thisRef){ return function(){
        
        if(
          this.readyState    !== 4   ||
          this.status        !== 200){
          return;
        }
        
        new SSGlobals().onMessage(thisRef.resultHandler, thisRef.errorHandler, jSGlobals.parseJson(this.response), thisRef.op);
      };})(this);
    
    xhr.onerror = (function(thisRef){ return function(){
        console.log(this);
      };})(this);
    
    xhr.send (JSON.stringify(par), sSGlobals.httpMethPOST, sSGlobals.hostREST + this.op + jSGlobals.slash);
    
    //    xhr.open             (sSGlobals.httpMethPOST, sSGlobals.hostRESTSSL + this.op + jSGlobals.slash, true);
    //    xhr.setRequestHeader (sSGlobals.contentType,  sSGlobals.mimeTypeApplicationJson);
    //    xhr.send             (JSON.stringify(par));
	};
};