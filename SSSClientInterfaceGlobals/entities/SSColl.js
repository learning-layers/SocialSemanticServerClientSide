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
var sSColl = new SSColl();

function SSColl(){

  this.rootColl      = null;

  this.nameSpaceColl = "/collection/";
  this.typeColl      = "collection";
	
  this.iconCollShared                                                = "styles/images/used/mySharedCollection.png";
	this.iconCollPrivate                                               = "styles/images/used/collection.png";
	this.iconCollSubscribed                                            = "styles/images/used/sharedCollection.png";
	
  this.isTypeColl = function(type){
    return jSGlobals.equals(type, this.typeColl);
  };
  
  this.getCollIcon = function(circleTypes){
    
    for(var counter = 0; counter < jSGlobals.arrayLength(circleTypes); counter++){
      
      if(jSGlobals.equals(circleTypes[counter], "pub")){
				return this.iconCollSubscribed;
			}
    }
    
    for(var counter = 0; counter < jSGlobals.arrayLength(circleTypes); counter++){
      
      if(jSGlobals.equals(circleTypes[counter], "group")){
				return this.iconCollShared;
			}
    }

    return this.iconCollPrivate;
	};
  
  this.getCollSpace = function(circleTypes){
    
    for(var counter = 0; counter < jSGlobals.arrayLength(circleTypes); counter++){
      
      if(jSGlobals.equals(circleTypes[counter], "pub")){
				return sSGlobals.spaceFollow;
			}
    }
    
    for(var counter = 0; counter < jSGlobals.arrayLength(circleTypes); counter++){
      
      if(jSGlobals.equals(circleTypes[counter], "group")){
				return sSGlobals.spaceShared;
			}
    }

    return sSGlobals.spacePrivate;
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
		
		return jSGlobals.equals(coll.id, this.rootColl.id);
	};

	this.getRootCollUri = function(){
		
		if(jSGlobals.isEmpty(this.rootColl)){
			return null;
		}
		
		return this.rootColl.id;
	};
	
	this.getColl = function(colls, coll){

		if(
				jSGlobals.isEmpty(colls) ||
				jSGlobals.isEmpty(coll)){
			return null;
		}
		
		for(var counter = 0; counter < jSGlobals.arrayLength(colls); counter++){

			if(colls[counter].id === coll){
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

			collUris.push(colls[counter].id);
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

			if(coll.entries[counter].id === entryUri){
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
					
					if(jSGlobals.getLastArrayItem(resultColls).id !== colls[innerCounter].id){
						jSGlobals.addArrayItem (resultColls, colls[innerCounter]);
						break;
					}
				}
			}
		}
		
		return resultColls;
	};
};