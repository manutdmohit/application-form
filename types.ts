// types.ts
import { z } from 'zod';
import {
  personalInfoSchema,
  jobPreferenceSchema,
  educationSchema,
  experienceSchema,
  skillsAbilitiesSchema,
  statementOfPurposeSchema,
  referencesSchema,
} from './schemas/validationSchemas';

export type PersonalInfo = z.infer<typeof personalInfoSchema>;
export type JobPreference = z.infer<typeof jobPreferenceSchema>;
export type Education = z.infer<typeof educationSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type SkillsAbilities = z.infer<typeof skillsAbilitiesSchema>;
export type StatementOfPurpose = z.infer<typeof statementOfPurposeSchema>;
export type References = z.infer<typeof referencesSchema>;

export type FormData = {
  personalInfo: PersonalInfo;
  jobPreference: JobPreference;
  education: Education;
  experience: Experience;
  skillsAbilities: SkillsAbilities;
  statementOfPurpose: StatementOfPurpose;
  references: References;
};
