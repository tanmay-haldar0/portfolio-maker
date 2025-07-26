import { createContext, useContext, useState, type ReactNode } from "react";

// Define types
export type TemplateType = "template-a" | "template-b" | null;

interface PortfolioContextType {
  selectedTemplate: TemplateType;
  setSelectedTemplate: (template: TemplateType) => void;
}

// Create context
const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

// Provider
export const PortfolioProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>(null);

  return (
    <PortfolioContext.Provider value={{ selectedTemplate, setSelectedTemplate }}>
      {children}
    </PortfolioContext.Provider>
  );
};

// Custom hook
export const usePortfolioContext = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolioContext must be used within a PortfolioProvider");
  }
  return context;
};
