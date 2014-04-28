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
var jSCss = new JSCss();

function JSCss(){
  
  this.propVisibility                                                = "visibility";
	this.propTitle                                                     = "title";
  this.propLeft                                                      = "left";
	this.propBackground                                                = "background";
	this.propFontStyle                                                 = "font-style";
	this.propFontWeight                                                = "font-weight";
	this.propFontSize                                                  = "font-size";
	this.propDisplay                                                   = "display";
  
  this.valueNone                                                     = "none";
  this.valueNormal                                                   = "normal";
  this.valueBold                                                     = "bold";
  this.valueItalic                                                   = "italic";
  this.valueInlineBlock                                              = "inline-block";
  this.valueInherit                                                  = "inherit";
  this.valueHidden                                                   = "hidden";
  this.valueVisible                                                  = "visible";
  
  this.getFontStyle          = function(element)        { return this.getCss(element, this.propFontStyle);                    };
	this.getVisibility         = function(element)        { return this.getCss(element, this.propVisibility);                   };

	this.setLeft               = function(element, value) { this.addCss(element, this.propLeft,        value);                  };
	this.setDisplayNone        = function(element)        { this.addCss(element, this.propDisplay,     this.valueNone);         };
	this.setFontStyleNormal    = function(element)        { this.addCss(element, this.propFontStyle,   this.valueNormal);       };
	this.setFontWeightBold     = function(element)        { this.addCss(element, this.propFontWeight,  this.valueBold);         };
	this.setFontWeightNormal   = function(element)        { this.addCss(element, this.propFontWeight,  this.valueNormal);       };
	this.setFontSize           = function(element, value) { this.addCss(element, this.propFontSize,    value);                  };
  this.setFontStyleItalic    = function(element)        { this.addCss(element, this.propFontStyle,   this.valueItalic);       };
  this.setDisplayInlineBlock = function(element)        { this.addCss(element, this.propDisplay,     this.valueInlineBlock);  };
 	this.setDisplayInherit     = function(element)        { this.addCss(element, this.propDisplay,     this.valueInherit);      };
	this.setVisibilityHidden   = function(element)        { this.addCss(element, this.propVisibility,  this.valueHidden);       };
	this.setVisibilityVisible  = function(element)        { this.addCss(element, this.propVisibility,  this.valueVisible);      };
	this.setBackground         = function(element, value) { this.addCss(element, this.propBackground,  value);                  };
  
  this.isNotVisible = function(element)                  { return !this.isVisible(element);                          };
  this.isVisible    = function(element)                  { return this.getVisibility(element) === this.valueVisible; };
  this.addCss       = function(element, property, value) { $(element).css(property, value);                          };
	this.getCss       = function(element, property)        { return $(element).css(property);                          };
};

