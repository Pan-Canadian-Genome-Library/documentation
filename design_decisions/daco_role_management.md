# Proposal for managing DACO roles and permissions

The management of roles and permissions for DACO users affects several services - DACO Portal, Submission, and authz. There are two DACO-specific roles for each DAC - a Chair, and one or more Members. Only the DACO Chair is authorized to add / edit data access approvals made for a study. 

PCGL allows Studies to either use the PCGL Data Access Committee (DAC) or to assign a different DAC. The Study metadata
in the [PCGL data model](https://github.com/Pan-Canadian-Genome-Library/data-dictionary) includes the definition of the DAC
for the Study. An important
part of authorization decisions is knowing the association between a DAC and a Study because each DACO user 
is only authorized to perform actions for Studies that fall under their DAC. The dac_id is the important field for this proposal - there is a many-to-one relationship between Studies
and DACs in PCGL. 

This proposal covers only the permissions associated with the Chair role, not the DACO Member role (handled in DACO, does not involve access to PCGL data) and not the Researcher role (creating / editing a data access application). 

## Setup

* **COManage**: for each DAC, create two COManage groups for the Chair and Members (PCGL:DACO:Chair:dac_id, PCGL:DACO:Member:dac_id) 
and associated enrollment flows following the [enrollment flow documention](../cilogon_comanage/enrollment_flows.md).
* **Authz**: modify the Study object in authz to store the dac_id (this implies a change to the body of the API call used to 
register a Study). Note that dac_id is an optional property, as Studies can be registered without specifying a DAC. 
* **Submission**: when registering a Study in authz, include the `dac_id` in the POST body. If the DAC for a Study changes (including adding a previously absent `dac_id`), update 
the authz study registration accordingly.
* **Authz**: creates a specific API path for data access requests for a user (user in this case = the data access applicant): 
`/user/<id>/access_approval/<study_id>`
* **DACO Portal**: call the `user` endpoint to determine the COManage groups for the user, including if the user is a member or chair of a DAC, and use this information to determe what applications are viewable by the user.  

## Implementation

In order to approve a data access request, the DACO Portal calls the `/user/<id>/access_approval/<study_id>` endpoint with the Bearer token of the authenticated user. Authz will determine if the user (the DAC member) has the appropriate role for the study based on the `dac_id` in the study registration. 

If the Bearer token identifies a Chair for the DAC associated with the study, Authz will modify the `user` record to add the access approval for the study and return a 200 status code. 

If the Bearer token does not identify a Chair for the DAC associated with the study authz will not modify the `user` record and will return a 403 status code. For debugging purposes, the error message and / or logs should indicate whether Bearer token does not identify a DAC Chair, the `dac_id` does not match between the Chair and the study, or if the study has no `dac_id`.  

