import type { BubbleVariants } from "@gnetwork-ui/components/molecules/blocks/bubble";

export interface ChatMessage {
  direction: BubbleVariants["mode"];
  id: string | number;
  message: string;
  time: string;
  username: string;
}
