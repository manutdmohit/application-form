// 'use client';

// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm, FormProvider } from 'react-hook-form';
// import { personalInfoSchema } from '../schemas/validationSchemas';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import type { PersonalInfo as PersonalInfoType } from '@/types'; // Import as a type

// const PersonalInfoForm = () => {
//   const form = useForm<PersonalInfoType>({
//     resolver: zodResolver(personalInfoSchema),
//     defaultValues: {
//       fullName: '',
//       address: '',
//       phoneNumber: '',
//       email: '',
//     },
//   });

//   const onSubmit = (data: PersonalInfoType) => {
//     console.log('Form Data:', data);
//   };

//   return (
//     <FormProvider {...form}>
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mb-4">
//           <h2 className="text-lg font-bold">Personal Information</h2>

//           <FormField
//             name="fullName"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Full Name:</FormLabel>
//                 <FormControl>
//                   <Input
//                     placeholder="Full Name"
//                     {...field}
//                     className="border p-2 w-full"
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             name="address"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Address:</FormLabel>
//                 <FormControl>
//                   <Input
//                     placeholder="Address"
//                     {...field}
//                     className="border p-2 w-full"
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             name="phoneNumber"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Phone Number:</FormLabel>
//                 <FormControl>
//                   <Input
//                     placeholder="Phone Number"
//                     {...field}
//                     className="border p-2 w-full"
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             name="email"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Email Address:</FormLabel>
//                 <FormControl>
//                   <Input
//                     placeholder="Email"
//                     type="email"
//                     {...field}
//                     className="border p-2 w-full"
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <Button type="submit">Submit</Button>
//         </form>
//       </Form>
//     </FormProvider>
//   );
// };

// export default PersonalInfoForm;
