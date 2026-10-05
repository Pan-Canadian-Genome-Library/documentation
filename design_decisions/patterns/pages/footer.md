# Footer Data

This is the key document for understanding the footer structure. Below, we will describe the links and URLs for the main section of the footer.

> [!IMPORTANT]
> This document must mirror to what we have defined in [the PCGL deployment repository](https://github.com/Pan-Canadian-Genome-Library/deployment#environment-urls) to avoid broken links and errors.


## Main section

### English (`en`) — Links

| key | Link or label | url | description |
| :--- | :--- | :--- | :--- |
| `pcglWebsite` | PCGL Website | https://genomelibrary.ca | about |
| `policies` | Policies & Guidelines | https://genomelibrary.ca | about |
| `privacy` | Privacy Policy | https://genomelibrary.ca | about |
| `termsConditions` | Terms & Conditions | https://genomelibrary.ca/about-us | about |
| `publicationPolicy` | Publication Policy | https://pan-canadian-genome-library.github.io/participant-public/resources | about |
| `helpGuides` | Help Guides | https://pan-canadian-genome-library.github.io/researcher/docs | resources |
| `dataSubmissionSystem` | Data Submission System | https://submission-ui.submission.gateway.dev.k8s.pcgl.dev-sd4h.ca | resources |
| `dacoPlatform` | Data Access Compliance Office | https://daco.submission.gateway.dev.k8s.pcgl.dev-sd4h.ca | resources |
| `researchPlatform` | Research Portal | https://pcgl.bento.sd4h.ca | resources |
| `TRE` | TRE (Trusted ResearchEnvironment) | https://genomelibrary.ca/tre | resources |
| `participantPortal` | Participant Portal | https://pcgl.uhndata.io/ | resources |
| `contact` | Contact Us | https://www.genomelibrary.ca/contact-us | connect |
| `subscribe` | Subscribe to our mailing list | https://genomelibrary.ca/subscribe | connect |
| `linkedin` | LinkedIn | https://www.linkedin.com/company/genome-library | connect |

### French (`fr`) — Links

| key | Link or label | url | description |
| :--- | :--- | :--- | :--- |
| `pcglWebsite` | Site web de la BGPC | https://genomelibrary.ca/fr | about |
| `policies` | Politiques et directives | https://genomelibrary.ca/fr | about |
| `privacy` | Politique de confidentialité | https://genomelibrary.ca/fr | about |
| `termsConditions` | Conditions d'utilisation | https://genomelibrary.ca/fr | about |
| `publicationPolicy` | Politique de publication | https://pan-canadian-genome-library.github.io/fr/participant-public/resources | about |
| `helpGuides` | Guides d'aide | https://pan-canadian-genome-library.github.io/fr/participant-public/docs | resources |
| `dataSubmissionSystem` | Système de soumission de données | https://submission-ui.submission.gateway.dev.k8s.pcgl.dev-sd4h.ca/fr | resources |
| `dacoPlatform` | Bureau de conformité d'accès aux données | https://daco.submission.gateway.dev.k8s.pcgl.dev-sd4h.ca/fr | resources |
| `researchPlatform` | Portail de recherche | https://pcgl.bento.sd4h.ca/fr | resources |
| `TRE` | Environnement de recherche de confiance | https://genomelibrary.ca/fr/tre | resources |
| `participantPortal` | Portail des participants | https://pcgl.uhndata.io/fr | resources |
| `contact` | Contactez-nous | https://genomelibrary.ca/fr/nous-joindre | connect |
| `subscribe` | S'abonner | https://genomelibrary.ca/fr/abonnez-vous | connect |
| `linkedin` | LinkedIn | https://fr.linkedin.com/company/genome-library | connect |

## Mandatory information Labels

This section contains metadata information and should not be changed. It will not be parameterized.

> [!NOTE]
> This section will include some pictures. 

```
"meta": {
        "funding_title": "Reconnaissance du financement",
        "logo_alt": "Logo de la Bibliothèque génomique pancanadienne",
        "cihr_logo_alt": "Logo des Instituts de recherche en santé du Canada",
        "cihr_support": "La BGPC est soutenu par les Instituts de recherche en santé du Canada (IRSC)."
      }
```

| key | Link or label |
| :--- | :--- |
| `meta.funding_title` | Acknowledgement of funding / Reconnaissance du financement |
| `meta.logo_alt` | Pan-Canadian Genome Library logo / Logo de la Bibliothèque génomique pancanadienne |
| `meta.cihr_logo_alt` | Canadian Institutes of Health Research logo / Logo des Instituts de recherche en santé du Canada |
| `meta.cihr_support` | PCGL is supported by the Canadian Institutes of Health Research (CIHR). / La BGPC est soutenu par les Instituts de recherche en santé du Canada (IRSC). |

