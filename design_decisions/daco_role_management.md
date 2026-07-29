# Proposal for managing DACO roles and permissions

PCGL allows Studies to either use the PCGL Data Access Committee (DAC) or to assign a different DAC. The Study metadata
in the [PCGL data model](https://github.com/Pan-Canadian-Genome-Library/data-dictionary) includes the definition of the DAC
for the Study. The dac_id is the important field for this proposal - there is a many-to-one relationship between Studies
and DACs in PCGL. 

The Data Access Compliance Office (DACO) portal for PCGL provides an interface for DACs to manage data access requests. 
There are two DACO-specific roles for each DAC - a Chair, and one or more Members. 

The management of roles and permissions for DACO users affects several services - DACO, Submission, and authz. An important
part of authorization decisions is knowing the association between a DAC and a Study because each DACO user 
is only authorized to perform actions for Studies that fall under their DAC. This document defines the setup steps and the 
implementation of DACO roles. 

## Setup

* **COManage**: for each DAC, create two COManage groups for the Chair and Members (PCGL:DACO:Chair:dac_id, PCGL:DACO:Member:dac_id) 
and associated enrollment flows following the [enrollment flow documention](../cilogon_comanage/enrollment_flows.md).
* **Authz**: modify the Study object in authz to store the dac_id (this implies a change to the body of the API call used to 
register a Study
* **Submission**: when registering a Study in authz, include the `dac_id` in the POST body. If the DAC for a Study changes, update 
the authz study registration accordingly.
* **Authz** : creates a specific API path for data access requests for a user (user in this case = the data access applicant): 
`/user/<id>/access_approval/<study_id>`

## Implementation

DACO can call the authz `/allowed` endpoint with the following body:

```
path: /user/<id>/access_approval/
study: study_id
action: POST
```

and authz will determine if the authenticated user (the DAC member) has the appropriate role for the study based on the `dac_id` in 
the study registration. 
Based on the response, DACO can activate / deactivate the UI element for approving the data access request and make the API
call on behalf of the user (which creates the Data Access Approval for the user for the study).
