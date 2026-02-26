export interface FlowData {
  buttonText: string | null;
  flowActionType: string | null;
  flowCodename: string | null;
  flowToken: string | null;
}

export interface ReplyButton {
  id: string;
  title: string;
  type: string;
}

export interface ListRow {
  description: string | null;
  id: string;
  title: string;
}

export interface ListSection {
  rows: ListRow[];
  title: string | null;
}

export interface InteractiveOptions {
  buttonText: string | null;
  flowData: FlowData | null;
  interactiveType: string;
  listButtonText: string | null;
  listSections: ListSection[] | null;
  replyButtons: ReplyButton[] | null;
  templateButtons: ReplyButton[] | null;
  urlButton: InteractiveUrlButton | null;
}

export interface InteractiveUrlButton {
  url: string;
  title: string;
}
