# Study Localization - Technical implementation

## Scope: Introduce the ability to include bilingual study metadata (English and French) in the PCGL data model.

### Translatable Study fields:
- study_description (required)
- program_name
- keywords
- participant_criteria
- funding_sources (required)

### Languages required:
- English
- French

**NOTE:** A description of the AI-based French/English translation process and its review by the data submitter will be documented separately, as it falls outside the scope of this technical implementation. 

## Solution

### Overview
- Data model updated to include new StudyTranslation entity which will contain the translatable Study fields in the alternate language.
- As done currently, PCGL Admin submits the Study entity (in either English or French).
- New requirement: PCGL Admin would also be required to submit the StudyTranslation  entity in the corresponding language by indicating either “eng_ca” or “fr_ca” in the “language_id” field.


### Benefits

- Standards-aligned modeling: Encodes language as an attribute rather than embedding it in a field name, ensuring interoperability with other multilingual data models. For example, this alignment supports bidirectional mappability making it easier to both export PCGL study metadata into external FHIR-compliant systems and ingest standardized multilingual study metadata back into the data model without requiring additional transformation logic.
- Language partitioning: Translated elements cleanly separated from the core Study entity.
- Scalable design: Designed to support additional languages without requiring schema changes. If the PCGL data model is adopted by other initiatives in the future which operate in a multilingual context, new languages can be accommodated without modifying the data model by simply adding additional StudyTranslation elements to the study. .
- Lower migration effort: Minimizes schema modifications and reduces downstream impact of migrating data.

