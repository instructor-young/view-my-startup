import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const CompareMyStartupContext = createContext();

export const useCompareMyStartup = () => useContext(CompareMyStartupContext);

export function CompareMyStartupProvider({ children }) {
  const [selectedMyStartup, setSelectedMyStartup] = useState(null);
  const [selectedCompaniesForComparision, setSelectedCompaniesForComparision] =
    useState(null);

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
  }, []);

  const value = useMemo(
    () => ({
      selectedMyStartup,
      selectMyStartup,
      removeMyStartup,
      selectedCompaniesForComparision,
      setSelectedCompaniesForComparision,
      removeCompanyForComparision,
      reset,
    }),
    [
      removeCompanyForComparision,
      removeMyStartup,
      selectMyStartup,
      selectedCompaniesForComparision,
      selectedMyStartup,
      reset,
    ]
  );

  return (
    <CompareMyStartupContext.Provider value={value}>
      {children}
    </CompareMyStartupContext.Provider>
  );
}
