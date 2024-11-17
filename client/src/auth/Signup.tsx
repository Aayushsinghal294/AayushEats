import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SignupInputState, userSignupSchema } from "@/schema/userSchema";
import { Contact2, Loader2, LockKeyhole, Mail, User } from "lucide-react";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

// type SignupInputState = {
//   fullname: string;
//   email: string;
//   password: string;
//   contact: string;
// }

const Signup = () => {

const loading = false;
const[input , setInput] = useState<SignupInputState>({
    fullname:"",
    email:"",
    password:"",
    contact:""

});
const [errors, setErrors] = useState<Partial<SignupInputState>>({})
const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setInput({...input, [name]: value});
}

const loginSubmitHandler = async (e:FormEvent) => {
   e.preventDefault();
   const result = userSignupSchema.safeParse(input);
   if(!result.success){
     const fieldErrors = result.error.formErrors.fieldErrors;
        setErrors(fieldErrors as Partial<SignupInputState>);
        return;
   }
   console.log(input);
}

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={loginSubmitHandler} className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4">
        <div className="mb-4">
          <h1 className="font-bold text-2xl text-center">AayushEats</h1>
        </div>
        <div className="mb-4">
        <div className="relative" >
          <Input type="text" placeholder="Full name" name="fullname" value={input.fullname} onChange={changeEventHandler} className="pl-10 focus-visible:ring-1" />
          <User className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none " />
          {errors && <span className="text-xs text-red-500">{errors.fullname}</span>}
        </div>
        </div>
        <div className="mb-4">
        <div className="relative" >
          <Input type="email" placeholder="Email" name="email" value={input.email} onChange={changeEventHandler} className="pl-10 focus-visible:ring-1" />
          <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none " />
          {errors && <span className="text-xs text-red-500">{errors.email}</span>}
        </div>
        </div>
        <div className="mb-4">
        <div className="relative" >
          <Input type="password" placeholder="Password" name="password" value={input.password} onChange={changeEventHandler} className="pl-10 focus-visible:ring-1" />
          <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none " />
          {errors && <span className="text-xs text-red-500">{errors.password}</span>}
        </div>
        </div>
        <div className="mb-4">
        <div className="relative" >
          <Input type="text" placeholder="Contact" name="contact" value={input.contact} onChange={changeEventHandler} className="pl-10 focus-visible:ring-1" />
          <Contact2 className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none " />
          {errors && <span className="text-xs text-red-500">{errors.contact}</span>}
        </div>
        </div>
        <div className="mb-10">
          {
            loading ?  <Button disabled className="w-full bg-orange hover:bg-hoverorange text-white font-bold py-2 px-4 rounded"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Please Wait</Button>: <Button type="submit" className="w-full bg-orange hover:bg-hoverorange text-white font-bold py-2 px-4 rounded">
            Signup
          </Button>
          }
        </div>
        <Separator/>
        <p className="mt-3 text-center" >
          Already have an account?{" "} 
          <Link to="/login" className="text-blue-500" >Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
