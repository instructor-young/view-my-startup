import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import API from "../api/index.api";

const CompareMyStartupContext = createContext();

export const useCompareMyStartup = () => useContext(CompareMyStartupContext);

export function CompareMyStartupProvider({ children }) {
  const [selectedMyStartup, setSelectedMyStartup] = useState(null);
  const [selectedCompaniesForComparision, setSelectedCompaniesForComparision] =
    useState(null);
  const [comparision, setComparision] = useState(null);

  const selectMyStartup = useCallback(
    (startup) => {
      setSelectedMyStartup(startup);
      if (selectedCompaniesForComparision === null) {
        setSelectedCompaniesForComparision([]);
      }
    },
    [selectedCompaniesForComparision]
  );
  const removeMyStartup = useCallback(() => setSelectedMyStartup(null), []);
  const removeCompanyForComparision = useCallback(
    (startup) =>
      setSelectedCompaniesForComparision((prev) =>
        prev.filter((prevCompany) => prevCompany.id !== startup.id)
      ),
    []
  );
  const reset = useCallback(() => {
    setSelectedMyStartup(null);
    setSelectedCompaniesForComparision(null);
    setComparision(null);
  }, []);
  const resetComparision = useCallback(() => {
    setSelectedCompaniesForComparision([]);
    setComparision(null);
  }, []);

  const compare = useCallback(async () => {
    const companyIdsToCompare = selectedCompaniesForComparision.map(
      (c) => c.id
    );
    const result = await API.companies.compareCompanies(
      selectedMyStartup.id,
      companyIdsToCompare
    );
    setComparision(result);
  }, [selectedMyStartup, selectedCompaniesForComparision]);

  useEffect(() => {
    if (selectedMyStartup) {
      const prevRecentlySelectedMyStartups = JSON.parse(
        localStorage.getItem("recentlySelectedMyStartups")
      );
      const filteredStartups =
        prevRecentlySelectedMyStartups?.filter(
          (s) => s.id !== selectedMyStartup.id
        ) || [];
      const newStartups = [...filteredStartups, selectedMyStartup].slice(-5);
      localStorage.setItem(
        "recentlySelectedMyStartups",
        JSON.stringify(newStartups)
      );
    }
  }, [selectedMyStartup]);

  const value = useMemo(
    () => ({
      selectedMyStartup,
      selectMyStartup,
      removeMyStartup,
      selectedCompaniesForComparision,
      setSelectedCompaniesForComparision,
      removeCompanyForComparision,
      reset,
      compare,
      comparision,
      resetComparision,
    }),
    [
      removeCompanyForComparision,
      removeMyStartup,
      selectMyStartup,
      selectedCompaniesForComparision,
      selectedMyStartup,
      reset,
      compare,
      comparision,
      resetComparision,
    ]
  );

  return (
    <CompareMyStartupContext.Provider value={value}>
      {children}
    </CompareMyStartupContext.Provider>
  );
}
