"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchCountries } from "./action";
import CountryCard, {
  CountryCardSkeleton,
  CountryProp,
} from "@/components/CountryCard";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import SearchBar from "@/components/SearchBar";
import { useEffect, useState } from "react";

export default function Home() {
  const [animationParent] = useAutoAnimate();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [filteredData, setFilteredData] = useState<CountryProp[] | undefined>(
    []
  );

  const {
    isPending,
    error,
    data: countryData,
  } = useQuery<CountryProp[]>({
    queryKey: ["countries"],
    queryFn: () => fetchCountries(),
  });
  // console.log(countryData);

  const regions = [...new Set(countryData?.map((d) => d.region))];

  function handleOnchangeSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  function handleOnChangeFilter(e: string | any) {
    setSelectedCategory(e.target.value);
  }

  useEffect(() => {
    let data = countryData;
    if (searchTerm) {
      data = data?.filter((item) =>
        item.name.common
          ?.toLowerCase()
          .includes(searchTerm.trim().toLowerCase())
      );
    }

    if (selectedCategory || selectedCategory == "all") {
      data = data?.filter((item) => {
        if (selectedCategory == "all") {
          return item;
        }
        return item.region === selectedCategory;
      });
    }

    setFilteredData(data);
  }, [searchTerm, countryData, selectedCategory]);

  return (
    <div className="w-full">
      <section className="mb-8 flex flex-col sm:flex-row justify-between gap-4">
        <SearchBar value={searchTerm} onChange={handleOnchangeSearch} />

        <select
          onChange={handleOnChangeFilter}
          className="rounded-md dark:bg-slate-800 px-3 focus:outline-none border border-gray-300 focus:border-blue-500 duration-300 dark:text-gray-300 cursor-pointer"
        >
          <option selected value="all">
            All Regions
          </option>
          {regions?.map((d, i) => (
            <option key={i} value={d}>
              {d}
            </option>
          ))}
        </select>
      </section>

      <section
        ref={animationParent}
        className="flex flex-wrap md:justify-between justify-center gap-3 gap-y-9 "
      >
        {/* Loading (like shadow of cards) */}
        {isPending &&
          Array(8)
            .fill(null)
            .map((d, i) => <CountryCardSkeleton key={i} />)}

        {/* Get countryData */}
        {filteredData?.map((d, i) => (
          <CountryCard key={i} {...d} />
        ))}
        
        {/* If No result Found */}
        {Array.isArray(filteredData) && filteredData.length < 1 && (
          <p className="text-center text-gray-600 dark:text-gray-400 mt-8 w-full text-3xl font-semibold">
            Your search did not match any results
          </p>
        )}
      </section>
    </div>
  );
}
