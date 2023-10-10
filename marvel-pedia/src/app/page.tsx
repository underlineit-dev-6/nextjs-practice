import CharacterCard from "@/components/CharacterCard";
import CharacterCards from "@/components/CharacterCard";
import { getCharacters } from "@/utils/api";
import Image from "next/image";

export default async function Home() {
  const characters = await getCharacters();
  return (
    <main>
      <div className="container text-center mt-10">
        <h1 className="text-3xl font-bold underline">
          Popular Marvel Characters
        </h1>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mt-10">
        {characters.results.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </main>
  );
}
