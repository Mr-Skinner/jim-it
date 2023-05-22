import Image from "next/image";
import upArrow from "src/assets/arrow-up.svg";
import downArrow from "src/assets/arrow-down.svg";

interface OneLineStatProps {
  title: string;
  data: string;
  upDown: string;
}

export default function StatOneLiner({
  title,
  data,
  upDown,
}: OneLineStatProps) {
  return (
    <div className="flex w-full justify-between bg-white px-2 py-1 text-emerald-400">
      <h2 className="font-normal">{title} - </h2>
      {upDown == "up" ? (
        <span className="flex">
          <Image src={upArrow.src} alt="up arrow" width={20} height={20} />
          <p className="font-semibold">{data}</p>
        </span>
      ) : upDown == "down" ? (
        <span className="flex">
          <Image src={downArrow.src} alt="down arrow" width={20} height={20} />
          {data}
        </span>
      ) : (
        <span>{data}</span>
      )}
    </div>
  );
}
