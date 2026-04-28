# List of maintained enrollment flows

# Development / staging


## Official test flows, PCGL*

The workflows that start with `PCGL` are the ones that have been tested in dev/staging and then duplicated on prod. Do not modify these unless you intend to also make the change on prod. 

## Original template flows

The template enrollmnent flows `Invite a collaborator`, `Link another account` and `Self Signup With Approval`. These are the flows that ship with COManager and are guaranteed to work.

# Production

These are the flows currently being used in production. Each one should match (both name and contents) a flow on dev/staging. Change on dev first, then test, then make same changes on prod. 

## PCGL Invite Data Submitter

Used by PCGL:data-admin to invite new data submitters to PCGL. Adds enrolled users to the PCGL:data-submitters group. Note that this does not give them broad data read / write privileges - those need to be assigned on a study-by-study basis in authz. Uses the "PCGL Data Submitter - Email Verification" message template, which is in both French and English. 

## Original template flows

The template enrollmnent flows `Invite a collaborator`, `Link another account` and `Self Signup With Approval`. These are the flows that ship with COManager and are guaranteed to work.