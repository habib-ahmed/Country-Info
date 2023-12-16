import { CountryProp, NativeName } from '@/components/CountryCard';
import LabelSpan from '@/components/ui/LabelSpan';
import ValueSpan from '@/components/ui/ValueSpan';

export default function LeftSideData(country: CountryProp) {
  function getOfficialNames(navtiveName: NativeName): string[] {
    return Object.keys(navtiveName).map((key) => navtiveName[key]?.official);
  }

  return (
    <div className="flex flex-col gap-2 max-w-[320px] mt-8 md:mt-0">
      <div>
        <LabelSpan>Native Name : </LabelSpan>
        <ValueSpan>
          {getOfficialNames(country.name.nativeName).join(", ")}
        </ValueSpan>
      </div>
      <div>
        <LabelSpan>Population : </LabelSpan>
        <ValueSpan>          
         {new Intl.NumberFormat().format(country.population)}{" "}
        </ValueSpan>
      </div>
      <div>
        <LabelSpan> Region : </LabelSpan>
        <ValueSpan>{country.region} </ValueSpan>
      </div>
      <div>
        <LabelSpan> Sub Region : </LabelSpan>
        <ValueSpan>
          {country.subregion ? country.subregion : "No Sub Region"}
        </ValueSpan>
      </div>
      <div>
        <LabelSpan> Capital : </LabelSpan>
        <ValueSpan>
          {Array.isArray(country.capital) && country.capital.length > 0
            ? country.capital.map((d) => d).join(", ")
            : "No Capital"}
        </ValueSpan>
      </div>
    </div>
  );
}
