import { clean } from "@/lib/clean";
import { updateTemplates } from "@/lib/update-templates";

(async () => {
  await updateTemplates();
  await clean();
})();
