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
var jSDom = new JSDom();

function JSDom(){
  
  this.typeLi                                                        = "li";
	this.typeP                                                         = "p";
	this.typeImg                                                       = "img";
	this.typeLabel                                                     = "label";
	this.typeInput                                                     = "input";
	this.typeCheckBox                                                  = "checkbox";
	this.typeButton                                                    = "button";
	this.typeDiv                                                       = "div";
	this.typeA                                                         = "a";
  
	this.propSrc                                                       = "src";
	this.propId                                                        = "id";
	this.propValue                                                     = "value";
	this.propType                                                      = "type";
	this.propTypeText                                                  = "text";
	this.propTypeFile                                                  = "file";
	this.propTypePassword                                              = "password";
	this.propDisabled                                                  = "disabled";
  this.propChecked                                                   = "checked";
  
  this.empty                                                         = "";
  this.hash                                                          = "#";
  
  this.getElementFromJQuery = function(element){
		
		if(element[0]){
			return element[0];
		}else{
			return element;
		}
	};
  
  this.getChecked        = function(element, value)          { return this.getElementFromJQuery(element).checked;         };
  this.getId             = function(element)                 { return $(element).attr(this.propId);                       };
  this.getValue          = function(element)                 { return this.getElementFromJQuery(element).value;           };
  this.getDisabled       = function(element, value)          { return $(element).attr(this.propDisabled);                 };
  
  this.getImg            = function(element)                 { return $(this.typeImg,    element);                        };
	this.getA              = function(element)                 { return $(this.typeA,      element);                        };
	this.getButton         = function(element)                 { return $(this.typeButton, element);                        };
	this.getLabel          = function(element)                 { return $(this.typeLabel,  element);                        };
	this.getDiv            = function(element)                 { return $(this.typeDiv,    element);                        };
  
  this.getParent         = function(element)                 { return $(element).parent();	                              };
  this.getElementById    = function(id)                      { return $(this.hash + id);                                  };
	this.getSubElementById = function(element, id)             { return $(element).find(this.hash + id);                    };
	this.getChildren       = function(element)                 { return $(element).children();                              };
  
  this.getData           = function(element,property)        { return $(element).data(property);                          };
  
  this.addData           = function(element, property, data) { $(element).data(property, data);                           };
  
	this.setSrc            = function(element, value)          { $(element).attr(this.propSrc,value);                       };
	this.setId             = function(element, value)          { $(element).attr(this.propId,value);                        };
	this.setClass          = function(element, value)          { $(element).addClass(value);                                };
  this.setValue          = function(element, value)          { this.getElementFromJQuery(element).value = value;          };
  this.setTitle          = function(element, value)          { $(element).attr(this.propTitle,value);                     };
  this.setText           = function(element, text)           { $(element).text(text);                                     };
  this.setTypeText       = function(element)                 { $(element).attr(this.propType, this.propTypeText);         };
	this.setTypeFile       = function(element)                 { $(element).attr(this.propType, this.propTypeFile);         };
	this.setTypePassword   = function(element)                 { $(element).attr(this.propType, this.propTypePassword);     };
  this.append            = function(subject, object)         { $(subject).append(object);                                 };
	this.prepend           = function(subject, object)         { $(subject).prepend(object);                                };
  this.remove            = function(subject)                 { $(subject).remove();                                       };
  
  this.setChecked = function(element, value){
		
		element = this.getElementFromJQuery(element);
    
		if(value){
			element.checked = this.checked;
		}else{
			element.checked = this.empty;
		}
	};
  
  this.setDisabled = function(element, value){
		
		if(value){
			$(element).find('*').attr       (this.propDisabled, this.propDisabled);
		}else{
			$(element).find('*').removeAttr (this.propDisabled);
		}
	};
  
  this.setReadonly = function(element){ 
    
    if(jSGlobals.isNull(element)){
      return;
    }
    
    $(element).attr('readonly', 'readonly');
  };
  
  this.clearChilds = function(element){
    
		element = this.getElementFromJQuery(element);
		
		while(element.hasChildNodes()){
			element.removeChild(element.firstChild);
		}
	};
  
	this.clearTextInput = function(textInput){
		this.setValue(textInput, this.empty);
	};
  
  this.createUl = function(newId, newClass){
		
		var element = $("<ul></ul>");
		
		this.setId    (element, newId);
		this.setClass (element, newClass);
		
		return element;
	};
  
	this.createButton = function(newId, newClass){
		
		var element = $("<button></button>");
		
		this.setId    (element, newId);
		this.setClass (element, newClass);
		
		return element;
	};
  
  this.createButtonImg = function(newId, newClass, newSrc){
  
		var element = $("<button><img></img></button>");
		
		var image = this.getImg(element);
		
		this.setId    (element, newId);
		this.setClass (element, newClass);
		this.setSrc   (image,   newSrc);
		
		return element;
	};
	
	this.createDiv = function(newId, newClass){
		
		var element = $("<div></div>");
		
		this.setId    (element, newId);
		this.setClass (element, newClass);
		
		return element;
	};
	
	this.createImg = function(newId, newClass){
		
		var element = $("<img></img>");
		
		this.setId    (element, newId);
		this.setClass (element, newClass);
		
		return element;
	};
	
	this.createCanvas = function(newId, newClass){
		
		var element = $("<canvas></canvas>");
		
		this.setId    (element, newId);
		this.setClass (element, newClass);
		
		return element;
	};
	
	this.createH4 = function(newId, newClass){
		
		var element = $("<h4></h4>");
		
		this.setId    (element, newId);
		this.setClass (element, newClass);
		
		return element;
	};
	
	this.createInput = function(newId, newClass){
		
		var element = $("<input></input>");
		
		this.setId    (element, newId);
		this.setClass (element, newClass);
		
		return element;
	};
	
	this.createLabel = function(newId, newClass){
		
		var element = $("<label></label>");
		
		this.setId    (element, newId);
		this.setClass (element, newClass);
		
		return element;
	};
	
	this.createTextarea = function(newId, newClass){
		
		var element = $("<textarea></textarea>");
		
		this.setId    (element, newId);
		this.setClass (element, newClass);
		
		return element;
	};
	
	this.createCheckBox = function (newId, newClass, newValue){
		
		var element = $('<input type="checkbox">');
		
		this.setId    (element, newId);
		this.setClass (element, newClass);
		
		return element;
	};
};

//	this.createForm = function(newId, newClass){
//		
//		var element = $("<form></form>");
//		
//		this.setId    (element, newId);
//		this.setClass (element, newClass);
//		
//		return element;
//	};

  //	this.setInnerHtml = 
  //		function(
  //				element,
  //				value){
  //
  //		$(element).innerHtml = value;
  //	};
  
//  this.getSubElementForm = function(element)     { return element.$form;                     };