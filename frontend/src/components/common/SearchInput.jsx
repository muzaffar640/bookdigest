import { InputField } from "./InputField";
import { useState } from "react";

export const SearchInput = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="relative inline-block group">
      <InputField
        className="min-w-[330px]"
        inputClassName={`!bg-white !outline-white focus:border-l focus:border-t focus:border-r focus:border-slate-300 ${
          !search
            ? "focus:border-b border border-white"
            : "border-l border-t border-r border-slate-300"
        }`}
        icon="search"
        value={search}
        name="search"
        placeholder="  "
        onChange={(e) => setSearch(e.target.value)}
        onBlur={() => {
          setSearch("");
        }}
      />
    </div>
  );
};
