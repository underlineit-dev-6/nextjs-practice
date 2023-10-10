"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";

const NavBar = () => {
  const router = useRouter();
  const [querySearch, setQuerySearch] = useState<string>("");

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && querySearch.trim() !== "") {
      setQuerySearch("");
      router.push(`/search?query=${querySearch}`);
    }
  };
  return (
    <header>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href={"/"} className="btn btn-ghost normal-case text-xl">
            Marvel Pedia
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              value={querySearch}
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
              onChange={(e) => setQuerySearch(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
