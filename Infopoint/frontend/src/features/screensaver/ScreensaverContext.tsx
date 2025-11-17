import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type ScreensaverContextType = {
  active: boolean;
  show: () => void;
  hide: () => void;
};

const ScreensaverContext = createContext<ScreensaverContextType | undefined>(
  undefined
);

export function ScreensaverProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(true); // App startet mit Screensaver

  const show = () => setActive(true);
  const hide = () => setActive(false);

  return (
    <ScreensaverContext.Provider value={{ active, show, hide }}>
      {children}
    </ScreensaverContext.Provider>
  );
}

export function useScreensaver() {
  const ctx = useContext(ScreensaverContext);
  if (!ctx) {
    throw new Error(
      "useScreensaver muss innerhalb von <ScreensaverProvider> verwendet werden"
    );
  }
  return ctx;
}