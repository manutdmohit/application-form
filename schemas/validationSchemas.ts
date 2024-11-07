// validationSchemas.ts
import { z } from 'zod';

export const personalInfoSchema = z.object({
  fullName: z.string().min(1, 'Full Name is required'),
  address: z.string().min(1, 'Address is required'),
  phoneNumber: z
    .string()
    .min(10, 'Phone Number must be at least 10 characters'),
  email: z.string().email('Invalid email address'),
});

export const jobPreferenceSchema = z.object({
  jobPreference: z.enum(['schools', 'events', 'homeTutor']),
});

export const educationSchema = z.object({
  degree: z.string().min(1, 'Degree is required'),
  institution: z.string().min(1, 'Institution is required'),
  graduationYear: z.string().min(1, 'Year of Graduation is required'),
  certificationName: z.string().optional(),
  certifyingOrganization: z.string().optional(),
  certificationYear: z.string().optional(),
});

export const experienceSchema = z.object({
  teachingExperience: z.object({
    organization: z.string().min(1, 'Organization is required'),
    position: z.string().min(1, 'Position is required'),
    dates: z.string().min(1, 'Dates of Employment are required'),
    responsibilities: z.string().optional(),
    achievements: z.string().optional(),
  }),
  culturalExperience: z.string().optional(),
});

export const skillsAbilitiesSchema = z.object({
  teachingSkills: z.object({
    classroomManagement: z.boolean().optional(),
    curriculumDevelopment: z.boolean().optional(),
    lessonPlanning: z.boolean().optional(),
    assessmentTechniques: z.boolean().optional(),
  }),
  culturalKnowledge: z.object({
    specificCultures: z.boolean().optional(),
    culturalValues: z.boolean().optional(),
    languages: z.boolean().optional(),
  }),
  interpersonalSkills: z.object({
    communication: z.boolean().optional(),
    empathy: z.boolean().optional(),
    patience: z.boolean().optional(),
    culturalSensitivity: z.boolean().optional(),
  }),
});

export const statementOfPurposeSchema = z.object({
  statement: z.string().min(1, 'Statement of Purpose is required'),
});

export const referencesSchema = z.object({
  references: z
    .array(
      z.object({
        name: z.string().min(1, 'Name is required'),
        position: z.string().min(1, 'Position is required'),
        organization: z.string().min(1, 'Organization is required'),
        contact: z.string().min(1, 'Contact Information is required'),
      })
    )
    .min(2, 'At least two references are required'),
});
