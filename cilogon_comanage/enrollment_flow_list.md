# List of maintained enrollment flows

## Original template flows

COManage ships with the template enrollmnent flows `Invite a collaborator`, `Link another account` and `Self Signup With Approval`. These flows are guaranteed to work and should not be modified (make a copy, then modify). See [enrollment_flows.md](enrollment_flows) for details on creating new flows.

## Development / staging flows

**Official test flows, PCGL_**

The workflows that start with `PCGL` are the ones that have been tested in dev/staging and then duplicated on prod. Do not modify these unless you intend to also make the change on prod. 


## Production flows

These are the flows currently being used in production. Each one should match (both name and contents) a flow on dev/staging. Change on dev first, then test, then make same changes on prod. 

**PCGL Invite Data Submitter**

Used by PCGL:data-admin to invite new data submitters to PCGL. Adds enrolled users to the PCGL:data-submitters group. Note that this does not give them broad data read / write privileges - those need to be assigned on a study-by-study basis in authz. Uses the "PCGL Data Submitter - Email Verification" message template, which is in both French and English. 

