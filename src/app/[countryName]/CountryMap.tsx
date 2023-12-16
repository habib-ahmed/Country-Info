import { Maps } from "@/components/CountryCard";
import LabelSpan from "@/components/ui/LabelSpan";
import ValueSpan from "@/components/ui/ValueSpan";
import Link from "next/link";

export default function CountryMap({ maps }: { maps: Maps }) {
  return (
    <div className="">
      <LabelSpan>Maps :</LabelSpan>

      <ValueSpan className="flex gap-3 ">
        <Link
          target="_blank"
          className="underline text-blue-400 font-semibold"
          href={maps.googleMaps}
        >
          Google Map
        </Link>
        <Link
          target="_blank"
          className="underline text-blue-400 font-semibold"
          href={maps.openStreetMaps}
        >
          Open Street
        </Link>
      </ValueSpan>
    </div>
  );
}