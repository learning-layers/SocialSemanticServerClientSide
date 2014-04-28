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
function SSFileDownload(){
  
  this.op             = "fileDownload";
  this.fileSize       = - 1;
  this.fileWriter     = null;
  this.fileEntry      = null;
  this.interval       = 0;
  this.isInitialized  = false;
  
  this.handle = function(resultHandler, errorHandler, user, key, fileUri){
    
    this.resultHandler       = resultHandler;
    this.errorHandler        = errorHandler;
    this.user                = user;
    this.key                 = key;
    this.uri                 = fileUri;
    this.fileSize            = 0;
    
    this.resultHandlerCreateFileWriter();
    
//    this.fileSystem.root.getFile(this.fileID, {'create': true}, this.resultHandlerCreateFile, this.errorHandlerCreateFile);
	};
  
//  this.resultHandlerCreateFile = (function(thisRef){ return function(fileEntry1){
//      
//      thisRef.fileEntry = fileEntry1;
//      
//      thisRef.fileEntry.createWriter(thisRef.resultHandlerCreateFileWriter, thisRef.errorHandlerCreateFileWriter);
//    };})(this);
//  
//  this.errorHandlerRequestFileSystem = (function(thisRef){ return function(error){
//      console.log(error);
//    };})(this);
//  
//  this.errorHandlerCreateFile = (function(thisRef){ return function(error){
//      console.log(error);
//    };})(this);
//  
//  this.errorHandlerCreateFileWriter = (function(thisRef){ return function(error){
//      console.log(error);
//    };})(this);
  
  this.resultHandlerCreateFileWriter = (function(thisRef){ return function(/*fileWriter1*/){
      
//      thisRef.fileWriter   = fileWriter1;
      
      var par              = {};
      var xhr              = new XMLHttpRequest(); 
      
      xhr.responseType = sSGlobals.mimeTypeBlob;
      
      par[sSVarU.op]              = thisRef.op;
      par[sSVarU.user]            = thisRef.user;
      par[sSVarU.uri]             = thisRef.uri;
      par[sSVarU.key]             = thisRef.key;
      
      var stringi = JSON.stringify(par);
      
      xhr.onload = function(){
        
        if(
            this.readyState    !== 4   ||
            this.status        !== 200 ||
            this.response.type !== sSGlobals.mimeTypeApplicationOctetStream){
          return;
        }
        
//        thisRef.fileWriter.write(this.response);
                
//        if(!thisRef.readAndReturnFile){
/*thisRef.fileEntry.toURL()*/
          thisRef.resultHandler(this.response);
//          return;
//        }
        
//        thisRef.readFileAndReturn();
      };
      
      xhr.open(sSGlobals.httpMethPOST, sSGlobals.hostREST + thisRef.op + jSGlobals.slash, true);
      xhr.setRequestHeader(sSGlobals.contentType, sSGlobals.mimeTypeApplicationJson);
      xhr.send (stringi);
    };})(this);
  
//  this.readFileAndReturn = function(){ 
//    this.fileSystem.root.getFile(this.fileID, {}, this.resultHandlerGetFileForRead, this.errorHandlerGetFileForRead);
//  };
  
//  this.resultHandlerGetFileForRead = (function(thisRef){ return function(readFileEntry){
//      
//      readFileEntry.file(function(file) {
//        
//        var reader = new FileReader();
//        
//        reader.onloadend = function(e){
//          thisRef.resultHandler(thisRef.fileEntry.toURL(), thisRef.fileID, thisRef.fileName, thisRef.mimeType, this.result);
//        };
//        
//        reader.readAsDataURL(file);  
//        
//      }, thisRef.errorHandlerReadFile);
//      
//    };})(this);
//  
//  this.errorHandlerGetFileForRead = (function(thisRef){ return function(error){
//      console.log(error);
//    };})(this);
//  
//  this.errorHandlerReadFile = (function(thisRef){ return function(error){
//      console.log(error);
//    };})(this);
};

function SSFileThumbGet(){
  
  this.op = "fileThumbGet";
  
  this.handle = function(resultHandler, errorHandler, user, key, uri){
    
    this.resultHandler         = resultHandler;
    this.errorHandler          = errorHandler;
    this.fileID                = jSGlobals.removeTrailingSlash(uri);
    
    if(jSGlobals.lastIndexOf(this.fileID, jSGlobals.slash) === -1){
      return;
    }
    
    this.fileID = jSGlobals.substring(this.fileID, jSGlobals.lastIndexOf(this.fileID, jSGlobals.slash) + 1, jSGlobals.length(this.fileID));
    
    var xhr = new XMLHttpRequest();
    
    xhr.onload = (function(thisRef){ return function(){
        
        if(
            this.readyState    !== 4   ||
            this.status        !== 200){
          
          thisRef.errorHandler(this.response);
          return;
        }
        console.log(this.response);
        thisRef.resultHandler(this.response);
      };})(this);
    
    xhr.open (sSGlobals.httpMethGET, sSGlobals.hostREST + this.op + jSGlobals.slash + this.fileID, true);
    xhr.send ();
	};
};

// xhr.overrideMimeType("text/plain; charset=x-user-defined");  
// base64 de-/encoding btoa(); atob();
// window.location = "rest/SSAdapterRest/fileDownload/";
// 
// 
// var oReq = new XMLHttpRequest();
//oReq.open("GET", "/myfile.png", true);
//oReq.responseType = "arraybuffer";
//oReq.onload = function (oEvent) {
//  var arrayBuffer = oReq.response; // Note: not oReq.responseText
//  if (arrayBuffer) {
//    var byteArray = new Uint8Array(arrayBuffer);
//    for (var i = 0; i < byteArray.byteLength; i++) {
//      // do something with each byte in the array
//    }
//  }
//};

//FileWriter Properties
//readyState: One of the three states the reader can be in INIT, WRITING or DONE.
//fileName: The name of the file to be written. (DOMString)
//length: The length of the file to be written. (long)
//position: The current position of the file pointer. (long)
//error: An object containing errors. (FileError)
//onwritestart: Called when the write starts. . (Function)
//onprogress: Called while writing the file, reports progress (progess.loaded/progress.total). (Function) -NOT SUPPORTED
//onwrite: Called when the request has completed successfully. (Function)
//onabort: Called when the write has been aborted. For instance, by invoking the abort() method. (Function)
//onerror: Called when the write has failed. (Function)
//onwriteend: Called when the request has completed (either in success or failure). (Function)
//Methods
//
//abort: Aborts writing file.
//seek: Moves the file pointer to the byte specified.
//truncate: Shortens the file to the length specified.
//write: Writes data to the file.



//new SSFileDownload().handle(thisRef.servHandlFileDownload, thisRef.servErrorHandlFileDownload, kBGlobals.user, kBGlobals.userKey, uri, kBGlobals.growingID, "testThumb.png", true);

  //  this.servHandlFileDownload = (function(thisRef){ return function(fileEntryURI, fileID, fileName, file){
//      
////      	<canvas id="myCanvas" width="200" height="100"
////style="border:1px solid #000000;">
////</canvas>
//
////      var myCanvas = document.getElementById('myCanvas');
////      var ctx      = myCanvas.getContext('2d');
////      
////      var img = new Image;
////      img.onload = function(){
////        ctx.drawImage(img,0,0);
////      };
////      
////      img.src = file;
//      
//		};})(this);
// 
//  this.servErrorHandlFileDownload = (function(thisRef){ return function(errorMsg){
//     
//    };})(this);