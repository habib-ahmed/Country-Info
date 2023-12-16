import Image from "next/image";
import { CountryProp } from "@/components/CountryCard";

export default function CountryImage(country: CountryProp) {
  return (
    <div
      className="md:mb-8 mb-2  overflow-hidden
        w-[320px] h-[240px] md:w-[640px] md:h-[480px]
        drop-shadow-md  shadow-md "
    >
      <Image
        height={480}
        width={640}
        className=" w-[100%] h-[100%] object-cover "
        src={country.flags.svg}
        alt="Picture of the Country"
      />
    </div>
  );
}
