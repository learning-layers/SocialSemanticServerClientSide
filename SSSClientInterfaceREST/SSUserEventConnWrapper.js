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
function SSUserEventAddWrapper(){
	
	this.selectedFromOthers = function(resource, user, userKey){
		new SSUserEventAdd(this.servHandlUserEventAdd, this.servErrorHandlUserEventAdd, user, userKey, sSUserEvent.ueSelectedFromOthers, resource, resource);
	};
	
	this.viewEntity = function(resource, user, userKey){
		
		new SSUserEventAdd(this.servHandlUserEventAdd, this.servErrorHandlUserEventAdd, user, userKey, sSUserEvent.ueViewEntity, resource, resource);
		
		this.selectedFromOthers(resource, user, userKey);
	};
  
	this.useTag = function(content, user, userKey){
		new SSUserEventAdd(this.servHandlUserEventAdd, this.servErrorHandlUserEventAdd, user, userKey, sSUserEvent.ueUseTag, jSGlobals.empty, content);
	};
	
	this.renamePrivateCollection = function(resource, user, userKey){
		new SSUserEventAdd(this.servHandlUserEventAdd, this.servErrorHandlUserEventAdd, user, userKey, sSUserEvent.ueRenamePrivateCollection, resource, resource);
	};
	
	this.renameSharedCollection = function(resource, user, userKey){
		new SSUserEventAdd(this.servHandlUserEventAdd, this.servErrorHandlUserEventAdd, user, userKey, sSUserEvent.ueRenameSharedCollection, resource, resource);
	};
	
	this.renamePrivateCollectionItem = function(resource, user, userKey){
		new SSUserEventAdd(this.servHandlUserEventAdd, this.servErrorHandlUserEventAdd, user, userKey, sSUserEvent.ueRenamePrivateCollectionItem, resource, resource);
	};
	
	this.renameSharedCollectionItem = function(resource, user, userKey){
		new SSUserEventAdd(this.servHandlUserEventAdd, this.servErrorHandlUserEventAdd, user, userKey, sSUserEvent.ueRenameSharedCollectionItem, resource, resource);
	};
	
	this.structurePrivateCollection = function(resource, user, userKey){
		new SSUserEventAdd(this.servHandlUserEventAdd, this.servErrorHandlUserEventAdd, user, userKey, sSUserEvent.ueStructurePrivateCollection, resource, resource);
	};
	
	this.structureSharedCollection = function(resource, user, userKey){
		new SSUserEventAdd(this.servHandlUserEventAdd, this.servErrorHandlUserEventAdd, user, userKey, sSUserEvent.ueStructureSharedCollection, resource, resource);
	};
  
	this.renameSharedCollectionItemByRenameSharedCollection = function(resource, user, userKey){
		new SSUserEventAdd(this.servHandlUserEventAdd, this.servErrorHandlUserEventAdd, user, userKey, sSUserEvent.ueRenameSharedCollectionItemByRenameSharedCollection, resource, resource);
	};
	
	this.subscribeCollectionItemBySubscribeCollection = function(resource, user, userKey){
		new SSUserEventAdd(this.servHandlUserEventAdd, this.servErrorHandlUserEventAdd, user, userKey, sSUserEvent.ueSubscribeCollectionItemBySubscribeCollection, resource, resource);
	};
	
	this.unSubscribeCollectionItemByUnSubscribeCollection = function(resource, user, userKey){
		new SSUserEventAdd(this.servHandlUserEventAdd, this.servErrorHandlUserEventAdd, user, userKey, sSUserEvent.ueUnSubscribeCollectionItemByUnSubscribeCollection, resource, resource);
	};
	
	this.addDiscussionTargetCommentByAddDiscussionComment = function(resource, user, userKey){
		new SSUserEventAdd(this.servHandlUserEventAdd, this.servErrorHandlUserEventAdd, user, userKey, sSUserEvent.ueAddDiscussionTargetCommentByAddDiscussionComment, resource, resource);
	};
	
	this.renameDiscussionTargetByRenameDiscussion = function(resource, user, userKey){
		new SSUserEventAdd(this.servHandlUserEventAdd, this.servErrorHandlUserEventAdd, user, userKey, sSUserEvent.ueRenameDiscussionTargetByRenameDiscussion, resource, resource);
	};
	
	this.shareCollectionItemByShareCollection = function(resource, user, userKey){
		new SSUserEventAdd(this.servHandlUserEventAdd, this.servErrorHandlUserEventAdd, user, userKey, sSUserEvent.ueShareCollectionItemByShareCollection, resource, resource);
	};
  
	this.structurePrivateCollectionItemByStructurePrivateCollection = function(resource, user, userKey){
		new SSUserEventAdd(this.servHandlUserEventAdd, this.servErrorHandlUserEventAdd, user, userKey, sSUserEvent.ueStructurePrivateCollectionItemByStructurePrivateCollection, resource, resource);
	};
	
	this.structureSharedCollectionItemByStructureSharedCollection = function(resource, user, userKey){
		new SSUserEventAdd(this.servHandlUserEventAdd, this.servErrorHandlUserEventAdd, user, userKey, sSUserEvent.ueStructureSharedCollectionItemByStructureSharedCollection, resource, resource);
	};
	
	this.changeCollectionByRenameSharedCollectionItem = function(resource, user, userKey){
		new SSUserEventAdd(this.servHandlUserEventAdd, this.servErrorHandlUserEventAdd, user, userKey, sSUserEvent.ueChangeCollectionByRenameSharedCollectionItem, resource, resource);
	};
	
	this.changeCollectionByRenamePrivateCollectionItem = function(resource, user, userKey){
		new SSUserEventAdd(this.servHandlUserEventAdd, this.servErrorHandlUserEventAdd, user, userKey, sSUserEvent.ueChangeCollectionByRenamePrivateCollectionItem, resource, resource);
	};
  
  this.servHandlUserEventAdd      = (function(thisRef){ return function(result)  {};})(this);
  this.servErrorHandlUserEventAdd = (function(thisRef){ return function(errorMsg){};})(this);
};			