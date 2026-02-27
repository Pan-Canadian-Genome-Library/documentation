PCGL uses CILogon / COManage to manage users for all portals and services, including the Research Portal, DACO Portal, submission APIs, and infrastructure. We do not manage participants in COManage - the Participant Portal uses separate infrastructure.

>[!Note]
In this documentation, we use 'COManage' to refer to CILogon + COManage - they are separate software products on the back end, but from our perspective, it is all one UI and they are deployed together.

We are using COManage deployments that are part of the Digital Research Alliance of Canada subscription - we do not maintain these instances ourselves. We have both a test deployment (used for PCGL dev and staging infrastructure) and a prod instance (used for PCGL production infrastructre). The deployments are identical with respect to deployment settings, but do not share the same database (users, groups, user-managed config, etc).

PCGL is only one of the Collaborative Organizations (COs)in these COManage deployments. You may see `co:4` at the end of various URLs - we are org #4.

* PCGL COManage test instance https://registry-test.alliancecan.ca
* PCGL COManage prod instance https://registry.alliancecan.ca/registry/

External links
* CILogon website https://www.cilogon.org/
* COManage website https://incommon.org/trusted-access/comanage/
* COManage wiki https://spaces.at.internet2.edu/display/COmanage/Home
