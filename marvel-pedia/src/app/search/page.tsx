"use client";
import CharacterCard from "@/components/CharacterCard";
import LoadingBar from "@/components/LoadingBar";
import { Character } from "@/types/marvels";
import { searchedCharacters } from "@/utils/api";
import { useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";

const SearchPage: FC = ({}) => {
  const searchParams = useSearchParams();
  const querySearch = searchParams.get("query");
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await searchedCharacters(querySearch);
        setCharacters(data.results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    if (querySearch) {
      fetchData();
    }
  }, [querySearch]);

  return (
    <div className="container text-center mt-10">
      <h1 className="text-3xl font-bold">
        Search for<span>&quot;{querySearch}&quot;</span>
      </h1>
      {loading ? (
        <div className="mt-10">
          <LoadingBar />
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mt-10">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
