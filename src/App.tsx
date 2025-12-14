import "@radix-ui/themes/styles.css";
import FormBuilderPage from "./components/pages/form-builder";
import { Theme } from "@radix-ui/themes";

export default function App() {
  return (
    <Theme>
      <FormBuilderPage />
    </Theme>
  );
}
