'use client';

import { MdClose } from 'react-icons/md';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { ChatFileViewerBody } from './components/chat-file-viewer-body';
import { ChatFileViewerFooter } from './components/chat-file-viewer-footer';

import { useChatFileViewer } from './chat-file-viewer.hook';

import styles from './chat-file-viewer.module.css';

export const ChatFileViewer = () => {
  const { closeFileViewer } = useChatFileViewer();

  return (
    <div className={cn(styles.base, 'bg-chromatic')}>
      <button onClick={closeFileViewer} type="button">
        <MdClose
          className={cn(styles.base__close_icon, 'fill-neutral-500 size-6')}
        />
      </button>
      <ChatFileViewerBody />
      <ChatFileViewerFooter />
    </div>
  );
};
