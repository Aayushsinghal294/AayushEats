import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Loader2, LocateIcon, Mail, MapPin, MapPinHouse, Plus } from "lucide-react"
import { FormEvent, useRef, useState } from "react"
import { Input } from "./input";
import { Label } from "@radix-ui/react-menubar";
import { Button } from "./button";

type profileDataState = {
    fullname:string;
    email:string;
    phone:string;
    address:string;
    city:string;
    country:string;

}

const Profile = () => {
    const [profileData,setProfileData]=useState({
        fullname:"",
        email:"",
        address:"",
        city:"",
        country:"",
        profilePicture:"",
    })
    const imageRef = useRef<HTMLInputElement|null>(null);
const [selectedProfilePicture, setSelectedProfilePicture] = useState<string>("");
const loading=false;

    const fileChangeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const file = e.target.files?.[0];
        if (file){
            const reader = new FileReader();
            reader.onloadend = ()=>{
              const result = reader.result as string;
              setSelectedProfilePicture(result);
              setProfileData((prevData)=>({
                ...prevData,
                profilePicture:result
              }))
            };
            reader.readAsDataURL(file);
        }
    }

    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target;
        setProfileData({...profileData,[name]:value})
    }

const updateProfileHandler = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    

}
  return (
    <form onSubmit={updateProfileHandler} className="max-w-7xl mx-auto my-5">
      <div className="flex items-center justify-between ">
    <div className="flex items-center gap-2">
<Avatar className="relative md:w-28 md:h-28 w-20 h-20">
    <AvatarImage src={selectedProfilePicture}/>
    <div className="mx-7 my-7 md:mx-11 md:my-11">
    <AvatarFallback>CN</AvatarFallback>
    </div>
<input ref={imageRef} className="hidden" type="file" accept="image/*" onChange={fileChangeHandler} />
<div onClick={()=> imageRef.current?.click()} className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-full cursor-pointer">
 <Plus className="text-white w-8 h-8"/>
</div>
 </Avatar>
 <Input
 type="text"
 name="fullname"
 value={profileData.fullname}
 onChange={changeHandler}
 className="font-bold text-2xl outline-none border-none focus-visible:ring-transparent"
 />
    </div>
      </div>
      <div className="grid md:grid-cols-4 md:gap-2 gap-3 my-10">
<div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
   <Mail className="text-gray-500"/>
   <div className="w-full">
<Label>Email</Label>
<input 
className="w-full text-gray-400 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
name="email"
value={profileData.email}
onChange={changeHandler}
/>
   </div>
</div>
<div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
   <LocateIcon className="text-gray-500"/>
   <div className="w-full">
<Label>Address</Label>
<input 
className="w-full text-gray-400 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
name="address"
value={profileData.address}
onChange={changeHandler}
/>
   </div>
</div>
<div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
   <MapPin className="text-gray-500"/>
   <div className="w-full">
<Label>City</Label>
<input 
className="w-full text-gray-400 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
name="city"
value={profileData.city}
onChange={changeHandler}
/>
   </div>
</div>
<div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
   <MapPinHouse className="text-gray-500"/>
   <div className="w-full">
<Label>Country</Label>
<input 
className="w-full text-gray-400 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
name="country"
value={profileData.country}
onChange={changeHandler}
/>
   </div>
</div>
      </div>
      <div className="text-center">
{
loading?(
<Button disabled className="bg-orange hover:bg-hoverorange"><Loader2 className="mr-2 w-4 h-4 animate-spin"/>Please Wait</Button>
):(
<Button className="bg-orange hover:bg-hoverorange">Update</Button>
)
}
      </div>
    </form>
  )
}

export default Profile
