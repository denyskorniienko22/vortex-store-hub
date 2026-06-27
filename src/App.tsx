import { Toaster } from "./components/ui/sonner";
import { AppRouter } from "./root/app-router";

const App = () => {
  return (
    <>
      <AppRouter />
      <Toaster position="bottom-right" richColors />
    </>
  );
};

export default App;
