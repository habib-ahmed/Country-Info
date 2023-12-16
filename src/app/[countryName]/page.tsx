"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchCountryByName } from "../action";
import { CountryProp } from "@/components/CountryCard";
import BackButton from "./BackButton";
import CountryImage from "./CountryImage";
import SkeletonLoading from "./SkeletonLoading";
import RightSideData from "./RightSideData";
import LeftSideData from "./LeftSideData";

export default function CountryDetailPage({
  params,
}: {
  params: { countryName: string };
}) {
  const { isPending, data } = useQuery<CountryProp[]>({
    queryKey: ["countries"],
    queryFn: () => fetchCountryByName(params.countryName),
  });
  const country: any = Array.isArray(data) && data.length > 0 ? data[0] : null;
  // console.log("data", data);

  if (isPending) return <SkeletonLoading />;
  if (!country) return <div className="text-3xl text-center">Country not found</div>;

  return (
    <div>
      <BackButton />
      <section
        className="mt-8 flex flex-col items-center lg:flex-row
      gap-4 lg:gap-20 overflow-hidden"
      >
        <CountryImage {...country} />
        <div>
          <h1 className="font-bold text-3xl">{country?.name.common}</h1>
          <section className="mt-5 text-xl xl:flex">
            {/* left side */}
            <LeftSideData {...country} />
            {/* right side */}
            <RightSideData {...country} />
          </section>
        </div>
      </section>
    </div>
  );
}
