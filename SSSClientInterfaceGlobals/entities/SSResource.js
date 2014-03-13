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
var sSResource = new SSResource();

function SSResource(){
  
  this.typeResourceDigital                                           = "digitalResource";
	this.typeResourcePerson                                            = "person";
  
  this.iconResource                                                  = "styles/images/used/Doc-20.png";
	this.iconResourceWeb                                               = "styles/images/used/start_browser16.png";
  this.iconPerson                                                    = "styles/images/used/people-20.png";
  
  this.getResourceIcon = function(type){
		
    if(jSGlobals.equals(type, this.typeResourcePerson)){
			return this.iconPerson;
		}
    
		if(jSGlobals.equals(type, sSUploadedFile.typeUploadedFile)){
			return this.iconResource;
		}
    
    if(jSGlobals.equals(type, this.typeResourceDigital)){
			return this.iconResourceWeb;
		}
    
    if(sSDisc.isTypeDisc(type)){
			return sSDisc.iconDisc;
		}

		if(sSColl.isTypeColl(type)){
			return sSColl.iconCollShared;
		}
	};
  
  this.isNotUriValid = function(uri){
		return !this.isUriValid(uri);
	};
  
	this.isUriValid = function(uri){

		if(
      jSGlobals.isEmpty(uri) ||
      jSGlobals.startsWith(uri, jSGlobals.uriStartAbout)){
			return false;
		}

		if(
      jSGlobals.startsWith(uri, jSGlobals.uriStartMailto) ||
      jSGlobals.startsWith(uri, jSGlobals.uriStartHttp)   ||
      jSGlobals.startsWith(uri, jSGlobals.uriStartHttps)  ||
      jSGlobals.startsWith(uri, jSGlobals.uriStartSvn)){
      return true;
    }
    
    return false;
	};
  
  this.getResourceTypeFromUri = function(uri){
		
		if(jSGlobals.isEmpty(uri)){
			return this.typeResourceDigital;
		}
    
    if(sSDisc.isDisc(uri)){
			return sSDisc.typeDisc;
		}
		
		if(sSColl.isColl(uri)){
			return sSColl.typeColl;
		}
    
    if(sSUploadedFile.isUploadedFile(uri)){
      return sSUploadedFile.typeUploadedFile;
    }
    
    if(sSUser.isUser(uri)){
      return sSGlobals.typeResourcePerson;
    }
		
		return this.typeResourceDigital;
	};
};

