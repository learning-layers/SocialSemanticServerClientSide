SocialSemanticServerClientSide
==============================
* This project represents the client-side Javascript library which may be used for connecting to the [Social Semantic Server (SSS)](https://github.com/learning-layers/SocialSemanticServer).
* Make sure to have variables `hostRESTxxx` in `SocialSemanticServerClientSide/SSSClientInterfaceGlobals/globals/SSGlobals.js` set to `http://{yourHost}:{yourPort}/ss-adapter-rest/{API}/` where `API` is one of the following:
 * `SSAdapterRest` for all REST operations except for file handling
 * `SSAdapterRESTFil`e for REST operations dealing with files not using any multipart form parameters as input
 * `SSAdapterRESTFileDownload` for REST operations dealing with file downloading
 * `SSAdapterRESTFileUpload` for REST operations dealing with file uploading
 * `SSAdapterRESTFileReplace` for REST operations dealing with file replacing

Connectors as implemented in `SocialSemanticServerClientSide/SSSClientInterfaceREST/SSConns.js` can be instantiated as follows: 
* e.g. `new SSCollParentGet(resultHandler, errorHandler, user, key, coll)`
* every connector takes the parameters for the operation to be called and respective result and error handlers
* additionally, most of the operations provided by the SSS need a user URI and a key
 * the key and the user's URI can be received by connector `SSAuthCheckCred` taking the user's name / label and the user's password as parameter
* the user's URI is needed for most of other connectors together with the user's key

A more detailed description of use, parameters and return values can be found in `SSConns.js` directly.

#### Contact
* Dieter Theiler, Know-Center, Graz University of Technology, dtheiler@tugraz.at