// import { createContext, useContext, useState } from "react";

// interface StepperContextType {
//   formData: Record<string, unknown>;
//   updateField: (name: string, value: string) => void;
// }

// /**
//  * Context for the Stepper form.
//  * 
//  * This context allows form data to be shared and persisted
//  * across route changes within the stepper flow. Without it,
//  * navigating between steps (routes) would unmount the form fields
//  * and lose their values.
//  */
// const StepperContext = createContext<StepperContextType | null>(null);

// /**
//  * Custom hook to access the StepperContext.
//  * This keeps our imports cleaner in component.
//  * The alternative is having to import "useContext" from React and "StepperContext" from here for every new component; not ideal.
//  */
// export const useStepperForm = () => useContext(StepperContext);

// function StepperProvider({ children }: { children: React.ReactNode }) {
//   const [formData, setFormData] = useState({});

//   const updateField = (name: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <StepperContext.Provider value={{ formData, updateField }}>
//       {children}
//     </StepperContext.Provider>
//   );
// }

// export default StepperProvider;
