import type { Request, Response } from "express";
import { getIndexInsertQueueLength } from "../../../services";
import { getWebhookInsertQueueLength } from "../../../services/webhook";

export async function indexQueuePrometheus(req: Request, res: Response) {
  const queueLength = await getIndexInsertQueueLength();
  const webhookQueueLength = await getWebhookInsertQueueLength();
  res.setHeader("Content-Type", "text/plain");
  res.send(`\
# HELP firecrawl_index_queue_length The number of items in the index insert queue
# TYPE firecrawl_index_queue_length gauge
firecrawl_index_queue_length ${queueLength}
firecrawl_webhook_queue_length ${webhookQueueLength}
`);
}