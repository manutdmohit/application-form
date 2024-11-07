'use client';

import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Define the validation schema using Zod
const jobApplicationSchema = z.object({
  fullName: z.string().min(1, 'Full Name is required'),
  address: z.string().min(1, 'Address is required'),
  phone: z.string().min(10, 'Phone number is required'),
  email: z.string().email('Invalid email format'),
  jobPreference: z.enum(['Schools', 'Events', 'Home Tutor']),
  education: z.object({
    degree: z.string().min(1, 'Degree is required'),
    institution: z.string().min(1, 'Institution is required'),
    yearOfGraduation: z.number().int().min(1900, 'Invalid year'),
  }),
  certifications: z.object({
    certificationName: z.string().optional(),
    certifyingOrganization: z.string().optional(),
    certificationYear: z.string().optional(),
  }),
  schoolOrganization: z.string().optional(),
  schoolPosition: z.string().optional(),
  schoolDates: z.string().optional(),
  responsibilities: z.object({
    achievements: z.string().optional(),
    culturalExperience: z.string().optional(),
  }),
  teachingSkills: z.enum([
    'classroomManagement',
    'curriculumDevelopment',
    'lessonPlanning',
    'assessmentTechniques',
  ]),
  culturalKnowledge: z.array(
    z.enum(['specificCultures', 'culturalValues', 'languages'])
  ),
  interpersonalSkills: z.array(
    z.enum(['communication', 'empathy', 'patience', 'culturalSensitivity'])
  ),
  statementOfPurpose: z.string().min(50, 'Please provide a brief statement'),
  references: z
    .array(
      z.object({
        name: z.string(),
        title: z.string().optional(),
        organization: z.string().optional(),
        contactInfo: z.string(),
      })
    )
    .optional(),
  profilePicture: z.string().optional(),
  identityProof: z.string(),
});

// Type inferred from the Zod schema
type JobApplicationFormData = z.infer<typeof jobApplicationSchema>;

function JobApplicationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<JobApplicationFormData>({
    resolver: zodResolver(jobApplicationSchema),
    defaultValues: {
      fullName: '',
      address: '',
      phone: '',
      email: '',
      jobPreference: 'Schools',
      education: { degree: '', institution: '', yearOfGraduation: 2023 },
      certifications: {
        certificationName: '',
        certifyingOrganization: '',
        certificationYear: '',
      },
      statementOfPurpose: '',
      references: [{ name: '', title: '', organization: '', contactInfo: '' }],
      profilePicture: '',
      identityProof: '',
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'references',
  });

  const onSubmit = (data: JobApplicationFormData) => {
    console.log('hi');

    console.log(data);
    alert('Submitted');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto my-5 p-6 bg-white shadow-md rounded-lg space-y-4"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Full Name:
        </label>
        <input
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          {...register('fullName')}
        />
        {errors.fullName && (
          <span className="text-red-500 text-xs">
            {errors.fullName.message}
          </span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Address:
        </label>
        <input
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          {...register('address')}
        />
        {errors.address && (
          <span className="text-red-500 text-xs">{errors.address.message}</span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Phone:
        </label>
        <input
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          {...register('phone')}
        />
        {errors.phone && (
          <span className="text-red-500 text-xs">{errors.phone.message}</span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email:
        </label>
        <input
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          {...register('email')}
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Job Preference:
        </label>
        <select
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          {...register('jobPreference')}
        >
          <option value="Schools">Schools</option>
          <option value="Events">Events</option>
          <option value="Home Tutor">Home Tutor</option>
        </select>
        {errors.jobPreference && (
          <span className="text-red-500 text-xs">
            {errors.jobPreference.message}
          </span>
        )}
      </div>

      {/* Additional sections following the same pattern */}

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          References
        </label>
        {fields.map((field, index) => (
          <div key={field.id} className="flex space-x-2 mb-2">
            <input
              className="w-1/4 px-2 py-1 border border-gray-300 rounded-md shadow-sm"
              {...register(`references.${index}.name`)}
              placeholder="Name"
            />
            <input
              className="w-1/4 px-2 py-1 border border-gray-300 rounded-md shadow-sm"
              {...register(`references.${index}.title`)}
              placeholder="Title"
            />
            <input
              className="w-1/4 px-2 py-1 border border-gray-300 rounded-md shadow-sm"
              {...register(`references.${index}.organization`)}
              placeholder="Organization"
            />
            <input
              className="w-1/4 px-2 py-1 border border-gray-300 rounded-md shadow-sm"
              {...register(`references.${index}.contactInfo`)}
              placeholder="Contact Info"
            />
            <button
              type="button"
              onClick={() => remove(index)}
              className="text-red-500 text-xs"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            append({ name: '', title: '', organization: '', contactInfo: '' })
          }
          className="text-blue-500 text-xs"
        >
          Add Reference
        </button>
      </div>

      <button
        type="submit"
        className="w-xl py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Submit
      </button>
    </form>
  );
}

export default JobApplicationForm;
