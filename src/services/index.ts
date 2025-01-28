import { useContextStore } from "~/stores/context.ts";
import { log } from "~/utils/logger.ts";
import { perfEnd, perfStart } from "~/utils/performance.ts";

export async function bootstrap(): Promise<void> {
  const perf = perfStart();
  const context = useContextStore();

  if (context.loading) {
    return;
  }

  context.setLoading(true);

  try {
    // Load global data here
  }
  catch (error) {
    log.error("bootstrap", error);
  }
  finally {
    context.setLoading(false);
    perfEnd("bootstrap", perf);
  }
}
