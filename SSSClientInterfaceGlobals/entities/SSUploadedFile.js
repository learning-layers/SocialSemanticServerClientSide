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
var sSUploadedFile = new SSUploadedFile();

function SSUploadedFile(){
  
  this.namespaceUploadedFile = "/file/"; //"at.tug.kc.socialServer" + jSGlobals.slash + "file" + jSGlobals.slash;
  this.typeUploadedFile      = "uploadedFile";
  
  this.isNotUploadedFile = function(uri){
    return !this.isUploadedFile(uri);
  };
  
  this.isUploadedFile = function(uri){
    return jSGlobals.contains(uri, this.namespaceUploadedFile);
  };
};

//  this.getFileType = function(uri){
//		
//    if(jSGlobals.isEmpty(uri)){
//      return null;
//    }
//    
//		var lastDotIndex = jSGlobals.lastIndexOf(uri, jSGlobals.dot);
//		
//		if(lastDotIndex === -1){
//      return null;
//    }
//		
//    return jSGlobals.substring(uri, lastDotIndex + 1, jSGlobals.length(uri));
//	};