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
var jSDomEvent = new JSDomEvent();

function JSDomEvent(){
  
  this.propDrop            = "drop";
	this.propDragenter       = "dragenter";
	this.propDragover        = "dragover";
  
  this.disableContextMenu = function(){
  
    document.oncontextmenu = function(){
      return false;
    };
  };
  
  this.stopEvent = function(event){
		event.stopPropagation();
		event.preventDefault();
	};
  
  this.isNotEnter = function(event){
    return !this.isEnter(event);
  };
  
	this.isEnter = function(event){
    
		if(
      event.which == 10 || 
      event.which == 13) {
			return true;
		}else{
			return false;		
		}
	};
  
	this.getCaller      = function(event)                       { return event.target || event.srcElement; };
  this.setClick       = function(element, clickHandler)       { $(element).click(clickHandler);          };
	this.setKeyPress    = function(element, keyPressHandler)    { $(element).keypress(keyPressHandler);    };
	this.setDoubleClick = function(element, doubleClickHandler) { $(element).dblclick(doubleClickHandler); }; ////$(element).attr(this.propDoubleClick,doubleClickHandler);
  
	this.setRightClick  = function(element, rightClickHandler)  {
    
		$(element).mousedown(function(event){ 
      
      if(event.button == 2 ) { 
        rightClickHandler(event); 
      }
    });};
  
  this.removeDrop     = function(element, dropHandler)          { $(element).unbind(this.propDrop, dropHandler); };
};


//isRightMouseClick = 
//function(
//event){

//if (event.which === 3) {
//return true;
//}

//return false;
//},

//$(element).bind("contextmenu", function(e) {
//e.preventDefault();
//});

//$(element).attr(this.propClick,clickHandler);