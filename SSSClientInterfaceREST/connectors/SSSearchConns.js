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
function SSSearchWithMIs(){
  
	this.op = "searchMIs";
  
  this.handle = function(resultHandler, errorHandler, user, key, searchOp, mIs){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]              = this.op;
    par[sSVarU.user]            = user;
    par[sSVarU.searchOp]        = searchOp;
    par[sSVarU.mIs]             = jSGlobals.commaSeparateStringArray(mIs);
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

function SSSearchWithSolr(){
  
	this.op = "searchSolr";
  
  this.handle = function(resultHandler, errorHandler, user, key, searchOp, keywords){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]              = this.op;
    par[sSVarU.user]            = user;
    par[sSVarU.searchOp]        = searchOp;
    par[sSVarU.keywords]        = jSGlobals.commaSeparateStringArray(keywords);
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

function SSSearchWithTags(){
  
	this.op = "searchTags";
  
  this.handle = function(resultHandler, errorHandler, user, key, searchOp, tags, maxResultsPerTag){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
		
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]               = this.op;
    par[sSVarU.user]             = user;
    par[sSVarU.searchOp]         = searchOp;
    par[sSVarU.tags]             = jSGlobals.commaSeparateStringArray(tags);
    par[sSVarU.maxResultsPerTag] = maxResultsPerTag;
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

//      var publicResults  = new Array();
//				var privateResults = new Array();
//
//				if(
//						new SSGlobals().isException (result) &&
//						jSDom.isNotNull  (thisRef.errorHandler)){
//					
//					thisRef.errorHandler(result.object); 
//				}
//
//				for(var counter = 0; counter < result.object.length; counter++){
//
//					if(result.object[counter].foundInSharedSpace){
//						publicResults.push(result.object[counter]);
//					}else{
//						privateResults.push(result.object[counter]);
//					}
//				}
//
//				thisRef.resultHandler(privateResults, publicResults);