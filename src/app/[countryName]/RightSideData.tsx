import LabelSpan from "@/components/ui/LabelSpan";
import ValueSpan from "@/components/ui/ValueSpan";
import CountryMap from "./CountryMap";
import { CountryProp } from "@/components/CountryCard";

export default function RightSideData(country: CountryProp) {
  return (
    <div className="flex mt-2 md:mt-0 flex-col gap-2  max-w-[350px]  ">
      <div>
        <LabelSpan> Top Level Domain :</LabelSpan>
        <ValueSpan> {country.tld} </ValueSpan>
      </div>
      <div>
        <LabelSpan> Currencies : </LabelSpan>
        <ValueSpan>
          {country.currencies
            ? country.currencies[Object.keys(country.currencies)[0]].name
            : "No Currencies"}
        </ValueSpan>
      </div>
      <div>
        <LabelSpan> Languages : </LabelSpan>
        <ValueSpan>
          {Object.keys(country.languages)
            .map(function (key, index) {
              return country.languages[key];
            })
            .join(", ")}
        </ValueSpan>
      </div>
      <CountryMap maps={country.maps} />
    </div>
  );
}