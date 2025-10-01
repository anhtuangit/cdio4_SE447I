import React, { createContext, useContext, useState } from "react";

type Estate = {
  id: number;
  img: string;
  describe: string;
  price: number;
  location: string;
  acreage: number;
};

type CompareContextType = {
  selected: Estate[];
  toggleSelect: (estate: Estate) => void;
};

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const CompareProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selected, setSelected] = useState<Estate[]>([]);

  const toggleSelect = (estate: Estate) => {
    if (selected.find((s) => s.id === estate.id)) {
      setSelected(selected.filter((s) => s.id !== estate.id));
    } else {
      if (selected.length < 3) setSelected([...selected, estate]);
    }
  };

  return (
    <CompareContext.Provider value={{ selected, toggleSelect }}>
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (!context) throw new Error("useCompare must be used within CompareProvider");
  return context;
};
