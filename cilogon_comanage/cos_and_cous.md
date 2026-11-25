# COs and COUs

COs (Collaborative Organizations) and COUs (Collaborative Organization Units) are the means of organizing people and permissions within a single COManage instance. 

## CO (Collaborative Organization)

A CO is the top level of organization with a single COManage instance. PCGL is a Collaborative Organizations (CO) within the DRAC COmanage instance. You may see co:4 at the end of various URLs - we are org #4. We do not have any visibility / permissions on the other COs within the DRAC instance. 

## COUs (Collaborative Organizational Units)

A COU allows you to group people and permissions within a CO. We have COUs for data submission (`HELP`) and for the data access portal (`DACO`). We duplicate these COUs for the staging infrastructure (`HELP-staging` and `DACO-staging`).

Creating a COU automatically creates four groups. For example, for a COU named `DACO` we get:

* CO:COU:DACO:admins
* CO:COU:DACO:approvers
* CO:COU:DACO:members:active
* CO:COU:DACO:members:all

## Nested COUs (Data Access Committees)

Each Data Access Committee (DAC) for PCGL has its own permissions, independent from other DACs. We model this using COUs nested under the DACO COU. So for a DAC with id = PCGLDAC0001 we create a COU called `PCGLDAC0001` with `CO:COU:DACO` as the parent. This creates the following groups:

* CO:COU:PCGLDAC0001:admins
* CO:COU:PCGLDAC0001:approvers
* CO:COU:PCGLDAC0001:members:active
* CO:COU:PCGLDAC0001:members:all

Note the parent COU is not part of the group name. This stems from the requirement that all COU names are unique within a CO, not just within a COU. It also means that there isn't an easy way to see the parent COU from the group names (meaning there is no easy way to tell if the above groups are part of staging or prod). 

## References

https://github.internet2.edu/pages/lpaglione/COmg-Instructor/lessons/co320/02-cous/ 
https://comanage-docs.readthedocs.io/en/stable/using/structure/cous.html