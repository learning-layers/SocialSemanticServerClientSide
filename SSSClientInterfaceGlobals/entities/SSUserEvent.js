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
var sSUserEvent = new SSUserEvent();

function SSUserEvent(){
  
  this.ueSelectedFromOthers                                                         = "selectedFromOthers";
	this.ueUseTag                                                                     = "useTag";
	this.ueViewEntity                                                                 = "viewEntity";
	this.ueRenamePrivateCollection                                                    = "renamePrivateCollection";
	this.ueRenameSharedCollection                                                     = "renameSharedCollection";
	this.ueRenamePrivateCollectionItem                                                = "renamePrivateCollectionItem";
	this.ueRenameSharedCollectionItem                                                 = "renameSharedCollectionItem";
	this.ueStructurePrivateCollection                                                 = "structurePrivateCollection";
	this.ueStructureSharedCollection                                                  = "structureSharedCollection"; 
	
	//user events caused by other user events
	this.ueChangeCollectionByRenamePrivateCollectionItem                              = "changeCollectionByRenamePrivateCollectionItem"; 
	this.ueChangeCollectionByRenameSharedCollectionItem                               = "changeCollectionByRenameSharedCollectionItem"; 
	this.ueStructureSharedCollectionItemByStructureSharedCollection                   = "structureSharedCollectionItemByStructureSharedCollection"; 
	this.ueStructurePrivateCollectionItemByStructurePrivateCollection                 = "structurePrivateCollectionItemByStructurePrivateCollection"; 
	this.ueShareCollectionItemByShareCollection                                       = "shareCollectionItemByShareCollection"; 
	this.ueRenameDiscussionTargetByRenameDiscussion                                   = "renameDiscussionTargetByRenameDiscussion"; 
	this.ueAddDiscussionTargetCommentByAddDiscussionComment                           = "addDiscussionTargetCommentByAddDiscussionComment";  
	this.ueUnSubscribeCollectionItemByUnSubscribeCollection                           = "unSubscribeCollectionItemByUnSubscribeCollection";
	this.ueSubscribeCollectionItemBySubscribeCollection                               = "subscribeCollectionItemBySubscribeCollection";
	this.ueRenameSharedCollectionItemByRenameSharedCollection                         = "renameSharedCollectionItemByRenameSharedCollection";
	
	//user events currently not available by knowBrainWeb
//	this.ueExportCollectionItem                                                       = "exportCollectionItem";
};

