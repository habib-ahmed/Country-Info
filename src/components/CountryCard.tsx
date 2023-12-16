import Image from "next/image";
import Link from "next/link";
import LabelSpan from "./ui/LabelSpan";
import ValueSpan from "./ui/ValueSpan";
import Skeleton from "./ui/Skeleton";

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}
export interface NativeName {
  [key: string]: {
    official: string;
    common: string;
  };
}

interface Currency {
  name: string;
  symbol: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}
export interface Flags {
  png: string;
  svg: string;
}

interface CoatOfArms {
  png: string;
  svg: string;
}

export interface CountryProp {
  name: Name;
  tld: string[]; // Property for top-level domain
  topLevelDomain: string[];
  population: number;
  currencies: {
    [key: string]: Currency;
  };
  languages: {
    [key: string]: string;
  };
  region: string;
  subregion: string;
  maps: Maps;
  capital?: string[];
  flags: Flags; // Property for country flag image
  coatOfArms: CoatOfArms; // Property for country coat of arms image
}

export default function CountryCard(props: CountryProp) {
  return (
    <Link
      href={`/${props?.name?.common}`}
      className="rounded overflow-hidden shadow-xl group border-[1px] dark:border-slate-600 max-w-[280px]"
    >
      <CountryImage src={props?.flags?.svg} />
      <div className="pt-5 pl-5 pb-8">
        <h2 className="text-2xl font-bold mb-4">{props?.name?.common}</h2>
        <CountryInfo {...props} />
      </div>
    </Link>
  );
}

function CountryImage({ src }: { src: string }) {
  return (
    <div className="h-[168px] overflow-hidden group-hover:scale-110 duration-300">
      <Image
        height={168}
        width={288}
        src={src}
        alt="Country-img"
        className="h-[168px] object-cover"
      />
    </div>
  );
}

function CountryInfo({
  population,
  region,
  capital,
}: {
  population: number;
  region: string;
  capital?: string[];
}) {
  return (
    <div className="flex flex-col gap-1 text-xl px-1">
      <div>
        <LabelSpan>Population:</LabelSpan>
        <ValueSpan>{new Intl.NumberFormat().format(population)} </ValueSpan>
      </div>
      <div>
        <LabelSpan>Region:</LabelSpan>
        <ValueSpan>{region}</ValueSpan>
      </div>
      <div>
        <LabelSpan>Capital:</LabelSpan>
        <ValueSpan>
          {Array.isArray(capital) && capital.length > 0
            ? capital.map((d) => d).join(", ")
            : "No Capital"}
        </ValueSpan>
      </div>
    </div>
  );
}

// For Loading (like shadow of card):
export function CountryCardSkeleton() {
  return (
    <div className="rounded overflow-hidden shadow-xl group border-[1px] dark:border-slate-600 w-[240px]">
      <Skeleton className="h-[150px] w-[240px]" />
      <div className="pl-2 py-5">
        <Skeleton className="h-6 mb-4 w-[220px]" />
        <section className="flex flex-col gap-1 text-xl px-1">
          <div>
            <Skeleton className=" mb-4 w-16 " />
            <Skeleton className=" mb-4 w-24 " />
          </div>
          <div>
            <Skeleton className=" mb-4 w-16 " />
            <Skeleton className=" mb-4 w-24 " />
          </div>
        </section>
      </div>
    </div>
  );
}
