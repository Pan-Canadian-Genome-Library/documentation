
# Enrollment Flows

In COManage, "Enrollment Flows" are used to invite users and (optionally) automate the process of adding users to groups during enrollment.

## Creating enrollment flows 

>[!IMPORTANT]
1. Do not delete the template enrollmnent flows `Invite a collaborator`, `Link another account` and `Self Signup With Approval`. These are the flows that ship with COManager and are guaranteed to work.  
2. Always create enrollment flows by copying a known working flow and making modifications, rather than creating flows from scratch. The template flows are a good choice. 

Reference: See the [COManage documentation for enrollment flows](https://spaces.at.internet2.edu/display/COmanage/Registry+Enrollment+Flow+Configuration). 

To create an Enrollment Flow:

1. Log in to the COManage admin interface.
2. Navigate to "Configuration" in the left-hand menu and then click on "Enrollment Flows".
3. Choose a working enrollment flow and click  "Duplicate". The three default flows (see above note) are all "known good", if you aren't sure. 
4. Fill in the required fields:
    - Name: A descriptive name for the flow (e.g., "Add to PCGL:dev:infra:admin" or "Invite PCGL Data Submitter").
    - Petitioner Enrollment Authorization: to define what groups can initiate this enrollment flow. To limit to a specific group:
        - set to "CO Group Member"
        - select the group from the "Group" pulldown 
    - Email Confirmation Mode: leave as default "Review"
5. Select "Edit Enrollment Attributes" at the top of the screen and then "Add Enrollment Attribute" to add whatever attributes you want to use for user identification. The defaults are Name, Email, Affiliation. Don't remove these. Recommended:
    - Name (default settings, keep these):
        - Label: Name
        - Attribute:
            - Attribute class: `Organizational Identity`
            - Attribute name: `Name`
            - Attribute type: `Official`
            - A name must consist of at least those fields: `Given Name`
            - Check the "Copy this attribute to the CO Person record " box
        - Required: `Required`
    - Email (default settings, keep these):
        - Label: Email
        - Attribute:
            - Attribute class: `Organizational Identity`
            - Attribute name: `Email`
            - Attribute type: `Official`
            - Check the "Copy this attribute to the CO Person record " box
        - Required: `Required`
    - COU (optional)
        - Label: COU
        - Attribute:
            - Attribute class: `CO Person Role`
            - Attribute name: `COU`
        - Required: `Required`
        - Default Values: `<the name of the COU>`
        - DON'T check the "Modifiable" box
        - DO check the "Hidden" box
    - Group (optional, use if you want to automatically add a user to a group during enrollment)
        - Label: Group
        - Attribute:
            - Attribute class: `CO Person`
            - Attribute name: `Group Member`
        - Required: `Required`
        - Default Values: <the name of the group>
        - DON'T check the "Modifiable" box
        - DO check the "Hidden" box
6. Back on the main page for the enrollment flow, make sure to "Attach Org Identity Sources" otherwise the group membership will not show up in your ID Token claims. This should be there if you started from a template, but if not, click on "Add Enrollment Source" and select:
    - Organizational Identity Source: `CILogon OIDC Claims`
    - Org Identity Mode: `Identify`

> [!IMPORTANT]
Do not skip point 6, or the group membership will not show up in your ID Token claims and users won't get the expected permissions when authenticating with the OIDC client.

## Testing enrollment flows

The PCGL dev and staging environments use the `test` deployment of COManage and the production environments use the `prod` deployment. Therefore, testing enrollment flows should proceed as follows:

* create or edit the enrollment flow on [test COManage](https://registry-test.alliancecan.ca/registry/) and test it on dev systems
* if working as expected, test the same enrollment flow on staging systems
* if working as expected, copy the enrollment flow to [prod COManage](https://registry.alliancecan.ca/registry/)
    * there is no means to automatically copy an enrollment flow from one COManage instance to another (yet - coming in next version!). We recommend you have the test and prod windows open side-by-side to verify that the flows are the same. 

## Restoring default enrollment flows

If you have accidentally edited one of the default enrollment flows (`Invite a collaborator`, `Link another account` and `Self Signup With Approval`), you can restore them using the "Add / Restore Default Templates" option in the Enrollment flow configuration. This will not affect other flows. 