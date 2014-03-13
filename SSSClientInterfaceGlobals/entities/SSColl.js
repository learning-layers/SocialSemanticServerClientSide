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
var sSColl = new SSColl();

function SSColl(){

  this.rootColl      = null;

  this.nameSpaceColl = "/coll/";
  this.typeColl      = "collection";
	
  this.iconCollShared                                                = "styles/images/used/mySharedCollection.png";
	this.iconCollPrivate                                               = "styles/images/used/collection.png";
	this.iconCollSubscribed                                            = "styles/images/used/sharedCollection.png";
	
  this.isTypeColl = function(type){
    return jSGlobals.equals(type, this.typeColl);
  };
  
  this.getCollIcon = function(space){

		if(sSGlobals.isSpaceShared(space))  { return this.iconCollShared;     }
		if(sSGlobals.isSpaceFollow(space))  { return this.iconCollSubscribed; }    
    if(sSGlobals.isSpacePrivate(space)) { return this.iconCollPrivate;    }

    return null;
	};
  
	this.clear = function(){
		this.rootColl = null;
	};
	
  this.isNotColl = function(uri){
    return !this.isColl(uri);
  };
  
  this.isColl = function(uri){
		return jSGlobals.contains(uri, this.nameSpaceColl);
	};
  
  this.setRootColl = function(collRoot){
		
    this.rootColl = collRoot;
	};
  
	this.isRootColl = function(coll){
		
		if(jSGlobals.isEmpty(coll)){
			return false;
		}
		
		return jSGlobals.equals(coll.uri, this.rootColl.uri);
	};

	this.getRootCollUri = function(){
		
		if(jSGlobals.isEmpty(this.rootColl)){
			return null;
		}
		
		return this.rootColl.uri;
	};
	
	this.getColl = function(colls, collUri){

		if(
				jSGlobals.isEmpty(colls) ||
				jSGlobals.isEmpty(collUri)){
			return null;
		}
		
		for(var counter = 0; counter < jSGlobals.arrayLength(colls); counter++){

			if(colls[counter].uri === collUri){
				return colls[counter];
			}
		}

		return null;
	};
	
	this.getCollUris = function(colls){

		var collUris = new Array();

		if(jSGlobals.isEmpty(colls)){
			return null;
		}

		for(var counter = 0; counter < jSGlobals.arrayLength(colls); counter++){

			collUris.push(colls[counter].uri);
		}

		return collUris;
	};
	
	this.getCollEntry = function(coll, entryUri){

		if(
				jSGlobals.isEmpty(coll) ||
				jSGlobals.isEmpty(entryUri)){
			return null;
		}
		
		for(var counter = 0; counter < jSGlobals.arrayLength(coll.entries); counter++){

			if(coll.entries[counter].uri === entryUri){
				return coll.entries[counter];
			}
		}

		return null;
	};
	
	this.sortCollsByLabel = function(colls){
		
		if(jSGlobals.isEmpty(colls)){
			return new Array();
		}
		
		var resultColls = new Array();
		var labels      = new Array();
		var counter     = -1;
    var collCount   = jSGlobals.arrayLength(colls);
		
		for(counter = 0; counter < collCount; counter++){
			jSGlobals.addArrayItem(labels, colls[counter].label);
		}
		
		labels = jSGlobals.sortStringArray(labels, jSGlobals.sortAsc);
		
		for(counter = 0; counter < jSGlobals.arrayLength(labels); counter++){
		
			for(var innerCounter = 0; innerCounter < collCount; innerCounter++){
				
				if(jSGlobals.equals(colls[innerCounter].label, labels[counter])){
					
					if(jSGlobals.arrayLength(resultColls) === 0){
						jSGlobals.addArrayItem(resultColls, colls[innerCounter]);
						break;
					}
					
					if(jSGlobals.getLastArrayItem(resultColls).uri !== colls[innerCounter].uri){
						jSGlobals.addArrayItem (resultColls, colls[innerCounter]);
						break;
					}
				}
			}
		}
		
		return resultColls;
	};
};