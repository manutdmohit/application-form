'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';
import { jobPreferenceSchema } from '../schemas/validationSchemas'; // Make sure to create this schema
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Select } from '@/components/ui/select'; // Assuming you have a Select component
import type { JobPreference as JobPreferenceType } from '@/types'; // Import as a type

const JobPreferenceForm = () => {
  const form = useForm<JobPreferenceType>({
    resolver: zodResolver(jobPreferenceSchema), // Define the schema for job preference
    defaultValues: {
      jobPreference: 'events', // Set default value
    },
  });

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <div className="space-y-4 mb-4">
          <h2 className="text-lg font-bold">Job Preference</h2>

          <FormField
            name="jobPreference"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Job Type:</FormLabel>
                <FormControl>
                  <Select>
                    <option value="">Select a job type</option>
                    <option value="schools">Schools and Colleges</option>
                    <option value="events">Events</option>
                    <option value="homeTutor">Home Tutor</option>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </Form>
    </FormProvider>
  );
};

export default JobPreferenceForm;
