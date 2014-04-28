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
function SSCollsUserEntityIsInGet(){
  
	this.op = "collsUserEntityIsInGet";
  
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

function SSCollUserCumulatedTagsGet(){
  
	this.op = "collUserCumulatedTagsGet";
  
  this.handle = function(resultHandler, errorHandler, user, key, collUri){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]         = this.op;
    par[sSVarU.user]       = user;
    par[sSVarU.collUri]    = collUri;
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

function SSCollUserParentGet(){
  
	this.op = "collUserParentGet";
  
  this.handle = function(resultHandler, errorHandler, user, key, coll){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]         = this.op;
    par[sSVarU.user]       = user;
    par[sSVarU.coll]       = coll;
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

function SSCollUserRootGet(){
  
	this.op = "collUserRootGet";
  
  this.handle = function(resultHandler, errorHandler, user, key){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]         = this.op;
    par[sSVarU.user]       = user;
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

function SSCollUserEntryAdd(){
  
  this.op = "collUserEntryAdd";
  
  this.handle = function(resultHandler, errorHandler, user, key, coll, collEntry, collEntryLabel, addNewColl){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    this.user                  = user; 
    
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]               = this.op;
    par[sSVarU.user]             = this.user;
    par[sSVarU.coll]             = coll;
    par[sSVarU.collEntryLabel]   = collEntryLabel;
    par[sSVarU.key]              = key;
    
    if(!jSGlobals.isEmpty(addNewColl)){ par[sSVarU.addNewColl]       = addNewColl;}
    if(!jSGlobals.isEmpty(collEntry)){  par[sSVarU.collEntry]        = collEntry;}
    
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

function SSCollUserEntriesAdd(){
  
  this.op = "collUserEntriesAdd";
  
  this.handle = function(resultHandler, errorHandler, user, key, coll, entries, entryLabels){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]               = this.op;
    par[sSVarU.user]             = user;
    par[sSVarU.coll]             = coll;
    par[sSVarU.entries]          = jSGlobals.commaSeparateStringArray(entries);
    par[sSVarU.entryLabels]      = jSGlobals.commaSeparateStringArray(entryLabels);
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

function SSCollUserEntryChangePos(){
  
	this.op = "collUserEntryChangePos";
  
  this.handle = function(resultHandler, errorHandler, user, key, coll, order){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]               = this.op;
    par[sSVarU.user]             = user;
    par[sSVarU.coll]             = coll;
    par[sSVarU.order]            = jSGlobals.commaSeparateStringArray(order);
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

function SSCollUserEntryDelete(){
  
	this.op = "collUserEntryDelete";
  
  this.handle = function(resultHandler, errorHandler, user, key, coll, collEntry){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]               = this.op;
    par[sSVarU.user]             = user;
    par[sSVarU.coll]             = coll;
    par[sSVarU.collEntry]        = collEntry;
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

function SSCollUserEntriesDelete(){
  
	this.op = "collUserEntriesDelete";
  
  this.handle = function(resultHandler, errorHandler, user, key, coll, collEntries){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]               = this.op;
    par[sSVarU.user]             = user;
    par[sSVarU.coll]             = coll;
    par[sSVarU.collEntries]      = jSGlobals.commaSeparateStringArray(collEntries);
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

function SSCollUserWithEntries(){
  
	this.op = "collUserWithEntries";
  
  this.handle = function(resultHandler, errorHandler, user, key, coll){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    
    par[sSVarU.op]               = this.op;
    par[sSVarU.user]             = user;
    par[sSVarU.coll]             = coll;
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

function SSCollsUserWithEntries(){
  
	this.op = "collsUserWithEntries";
  
  this.handle = function(resultHandler, errorHandler, user, key){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    
    par[sSVarU.op]               = this.op;
    par[sSVarU.user]             = user;
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

function SSCollUserHierarchyGet(){
  
	this.op = "collUserHierarchyGet";
  
  this.handle = function(resultHandler, errorHandler, user, key, collUri){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]               = this.op;
    par[sSVarU.user]             = user;
    par[sSVarU.collUri]          = collUri;
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

function SSCollsUserCouldSubscribeGet(){
  
	this.op = "collsUserCouldSubscribeGet";
  
  this.handle = function(resultHandler, errorHandler, user, key){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    
    var par         = {};
    var xhr         = new SSJSONRequest();
    
    par[sSVarU.op]               = this.op;
    par[sSVarU.user]             = user;
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

///**
// * Follow given collections
// *
// * @class SSCollsSubscribe
// */
//function SSCollsSubscribe(){
//  
//	this.op = "collsSubscribe";
//  
//  /**
//   * Execute the SSS operation 
//   *
//   * @method handle
//   * @param {Function} resultHandler handle server's response
//   * @param {Function} errorHandler  handle an error response
//   * @param {String}   user          user's uri
//   * @param {String}   key           user's application key
//   * @param {String}   colls         collection uris to subscribe in the following form "collUri1,collUri2,..."
//   * @param {String}   parentColl    collection's mother collection uri
//   */ 
//  this.handle = function(resultHandler, errorHandler, user, key, colls, parentColl){
//		
//    this.resultHandler         = resultHandler;
//    this.errorHandler          = errorHandler;
//    this.user                  = user; 
//    this.key                   = key;
//		this.colls                 = colls;
//		this.parentColl            = parentColl;
//    
//    var par         = {};
//    var xhr         = new SSJSONRequest();
//    
//    
//    par[sSVarU.op]               = this.op;
//    par[sSVarU.user]             = this.user;
//    par[sSVarU.colls]            = this.colls;
//    par[sSVarU.parentColl]       = this.parentColl;
//    par[sSVarU.key]              = this.key;
//    
//xhr.onload = (function(thisRef){ return function(){
//        
//        if(
//            this.readyState    !== 4   ||
//            this.status        !== 200){
//          return;
//        }
//        
//        new SSGlobals().onMessage(thisRef.resultHandler, thisRef.errorHandler, jSGlobals.parseJson(this.response), thisRef.op);
//      };})(this);
//    
//    xhr.send (JSON.stringify(par), sSGlobals.httpMethPOST, sSGlobals.hostREST + this.op + jSGlobals.slash);
//	};
//};

///**
// * Unfollow given collections
// *
// * @class SSCollsUnSubscribe
// */
//function SSCollsUnSubscribe(){
//  
//	this.op = "collsUnSubscribe";
//  
//  /**
//   * Execute the SSS operation 
//   *
//   * @method handle
//   * @param {Function} resultHandler handle server's response
//   * @param {Function} errorHandler  handle an error response
//   * @param {String}   user          user's uri
//   * @param {String}   key           user's application key
//   * @param {String}   colls         collection uris to unsubscribe from in the following form "collUri1,collUri2,..."
//   * @param {String}   parentColl    collection's mother collection uri
//   */ 
//  this.handle = function(resultHandler, errorHandler, user, key, colls, parentColl){
//    
//    this.resultHandler         = resultHandler;
//    this.errorHandler          = errorHandler;
//    this.user                  = user; 
//    this.key                   = key;
//		this.colls                 = colls;
//		this.parentColl            = parentColl;
//    
//    var par         = {};
//    var xhr         = new SSJSONRequest();
//    
//    
//    par[sSVarU.op]               = this.op;
//    par[sSVarU.user]             = this.user;
//    par[sSVarU.colls]            = this.colls;
//    par[sSVarU.parentColl]       = this.parentColl;
//    par[sSVarU.key]              = this.key;
//    
//xhr.onload = (function(thisRef){ return function(){
//        
//        if(
//            this.readyState    !== 4   ||
//            this.status        !== 200){
//          return;
//        }
//        
//        new SSGlobals().onMessage(thisRef.resultHandler, thisRef.errorHandler, jSGlobals.parseJson(this.response), thisRef.op);
//      };})(this);
//    
//    xhr.send (JSON.stringify(par), sSGlobals.httpMethPOST, sSGlobals.hostREST + this.op + jSGlobals.slash);
//	};
//};

///**
// * Deletes a collection from SSS
// *
// * @class SSCollDelete
// */
//function SSCollDelete(){
//  
//	this.op  = "collDelete";
//  
//  /**
//   * Execute the SSS operation 
//   *
//   * @method handle
//   * @param {Function} resultHandler handle server's response
//   * @param {Function} errorHandler  handle an error response
//   * @param {String}   user          user's uri
//   * @param {String}   key           user's application key
//   * @param {String}   coll          collection's uri
//   * @param {String}   collSpace     access restriction for the collection (private or public)
//   * @param {String}   parentColl    mother collection for the collection to delete
//   */
//  this.handle = function(resultHandler, errorHandler, user, key, coll, collSpace, parentColl){
//    
//    this.resultHandler         = resultHandler;
//    this.errorHandler          = errorHandler;
//    this.user                  = user; 
//    this.key                   = key;
//		this.coll                  = coll;
//		this.space                 = collSpace;
//		this.parentColl            = parentColl;
//    
//    var par         = {};
//    var xhr         = new SSJSONRequest();
//    
//    
//    par[sSVarU.op]         = this.op;
//    par[sSVarU.user]       = this.user;
//    par[sSVarU.coll]       = this.coll;
//    par[sSVarU.space]      = this.space;
//    par[sSVarU.parentColl] = this.parentColl;
//    par[sSVarU.key]        = this.key;
//    
//xhr.onload = (function(thisRef){ return function(){
//        
//        if(
//            this.readyState    !== 4   ||
//            this.status        !== 200){
//          return;
//        }
//        
//        new SSGlobals().onMessage(thisRef.resultHandler, thisRef.errorHandler, jSGlobals.parseJson(this.response), thisRef.op);
//      };})(this);
//    
//    xhr.send (JSON.stringify(par), sSGlobals.httpMethPOST, sSGlobals.hostREST + this.op + jSGlobals.slash);
//	};
//};