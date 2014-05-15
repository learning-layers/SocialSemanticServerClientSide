SocialSemanticServerClientSide
==============================
This project represents the client-side Javascript library which may be used for connecting to the Social Semantic Server.

Make sure to have variable "hostREST" in SocialSemanticServerClientSide/SSSClientInterfaceGlobals/globals/SSGlobals.js set to "http://yourHost:yourPort/ss-adapter-rest/rest/SSAdapterRest/", i.e. the REST API of SSS.

Connectors as implemented in SocialSemanticServerClientSide/SSSClientInterfaceREST/SSConns.js can be instantiated as follows: new SSCollParentGet(resultHandler, errorHandler, user, key, coll). Every connector takes the parameters for the operation to be called and respective result and error handlers. Additionally, most of the operations provided by the SSS need a user URI and a key. The key and the user's URI can be received by connector "SSAuthCheckCred", which takes the user's name / label and the user's password as parameter. The user's URI is needed for most of other connectors together with the user's key.
