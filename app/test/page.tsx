'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

import { zodResolver } from '@hookform/resolvers/zod';
import { PersonStandingIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  teachingSkills: z
    .object({
      classroomManagement: z.boolean().optional(),
      curriculumDevelopment: z.boolean().optional(),
      lessonPlanning: z.boolean().optional(),
      assessmentTechniques: z.boolean().optional(),
    })
    .refine(
      (skills) =>
        skills.classroomManagement ||
        skills.curriculumDevelopment ||
        skills.lessonPlanning ||
        skills.assessmentTechniques,
      {
        message: 'At least one teaching skill must be selected.',
        path: ['teachingSkills'],
      }
    ),
  otherTeachingSkills: z.string().optional(),
});

export default function ApplicationForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teachingSkills: {
        classroomManagement: false,
        curriculumDevelopment: false,
        lessonPlanning: false,
        assessmentTechniques: false,
      },
      otherTeachingSkills: '',
    },
  });

  console.log(form.getValues());

  const onSubmitForm = (data: z.infer<typeof formSchema>) => {
    console.log('Form data:', data);
  };

  const teachingSkillsError = (form.formState.errors as any)?.teachingSkills
    ?.teachingSkills?.message;

  // Handler to clear teaching skills error on checkbox change
  const handleCheckboxChange = (fieldOnChange: any) => (value: boolean) => {
    fieldOnChange(value);
    form.clearErrors('teachingSkills'); // Clears the error when any checkbox changes
  };

  return (
    <div className="flex flex-col my-5 gap-4 min-h-screen items-center justify-center">
      <PersonStandingIcon size={50} />
      <Card className="w-full max-w-5xl">
        <CardHeader>
          <CardTitle>Application Form</CardTitle>
          <CardDescription>
            Fill out the form to apply for a job
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              className="flex flex-col gap-4"
              onSubmit={form.handleSubmit(onSubmitForm)}
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Teaching Skills Section */}
                <div>
                  <h3 className="text-lg font-semibold">Teaching Skills:</h3>

                  {/* Individual Checkboxes */}
                  <FormField
                    control={form.control}
                    name="teachingSkills.classroomManagement"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={handleCheckboxChange(
                              field.onChange
                            )}
                          />
                        </FormControl>
                        <FormLabel>Classroom Management</FormLabel>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="teachingSkills.curriculumDevelopment"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={handleCheckboxChange(
                              field.onChange
                            )}
                          />
                        </FormControl>
                        <FormLabel>Curriculum Development</FormLabel>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="teachingSkills.lessonPlanning"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={handleCheckboxChange(
                              field.onChange
                            )}
                          />
                        </FormControl>
                        <FormLabel>Lesson Planning</FormLabel>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="teachingSkills.assessmentTechniques"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={handleCheckboxChange(
                              field.onChange
                            )}
                          />
                        </FormControl>
                        <FormLabel>Assessment Techniques</FormLabel>
                      </FormItem>
                    )}
                  />

                  {/* Other Skills Text Box */}
                  <FormField
                    control={form.control}
                    name="otherTeachingSkills"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>If any other, please mention:</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Other skills"
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Display error message if there is a validation error */}
                  {teachingSkillsError && (
                    <span className="text-destructive">
                      {teachingSkillsError}
                    </span>
                  )}
                </div>
              </div>
              <Button type="submit" className="mt-4 max-w-sm">
                Submit Form
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="justify-between">
          <small>Don't have an account?</small>
          <Button asChild variant="outline" size="sm">
            <Link href="/sign-up">Sign up</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
