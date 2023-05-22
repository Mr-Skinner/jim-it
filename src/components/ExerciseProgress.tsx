import { StaticImageData } from "next/image";
import Image from "next/image";

interface ExerciseProgressProps {
    icon: StaticImageData,
    name: string,
    initialWeight: number,
    currentWeight: number
}

export default function ExerciseProgress({icon, name,initialWeight,currentWeight}:ExerciseProgressProps) {
  return (
    <div className="flex w-full justify-between text-white py-1 my-1 border-b-[1px] border-b-emerald-400 rounded-sm">
      <div className="flex gap-2">
      <Image src={icon} alt="" className="w-[2.5rem]"/>
      <span className="font-normal my-auto capitalize">{name}</span>
      </div>
      
      <div className="flex gap-4 justify-end">
      <span className="font-semibold my-auto">{initialWeight}</span>
      <span className="font-semibold my-auto">{currentWeight}</span>
      </div>
      
    </div>
  );
}
