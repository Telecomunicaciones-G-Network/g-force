'use client';

import type { SharedMediaItem } from '@module-chat/domain/interfaces';

import { useRef } from 'react';

import {
  MdCheck,
  MdCloudUpload,
  MdOutlineDescription,
  MdOutlineImage,
  MdOutlineInsertDriveFile,
  MdOutlineSearch,
  MdOutlineVideoLibrary,
  MdOutlineVolumeUp,
  MdClose,
} from 'react-icons/md';

import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { Modal } from '@gnetwork-ui/components/organisms/modals/modal';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { useChatCloudStorageModal } from './chat-cloud-storage-modal.hook';

import styles from './chat-cloud-storage-modal.module.css';

const MEDIA_TYPE_ICONS: Record<string, React.ReactNode> = {
  IMAGE: <MdOutlineImage className={styles.grid_item__icon} />,
  VIDEO: <MdOutlineVideoLibrary className={styles.grid_item__icon} />,
  AUDIO: <MdOutlineVolumeUp className={styles.grid_item__icon} />,
  DOCUMENT: <MdOutlineDescription className={styles.grid_item__icon} />,
  STICKER: <MdOutlineImage className={styles.grid_item__icon} />,
};

interface ChatCloudStorageMediaGridItemProps {
  item: SharedMediaItem;
  isSelected: boolean;
  onSelect: (item: SharedMediaItem) => void;
}

const ChatCloudStorageMediaGridItem = ({
  item,
  isSelected,
  onSelect,
}: Readonly<ChatCloudStorageMediaGridItemProps>) => {
  const filename =
    item.storagePath?.split('/').pop() ??
    `${item.type.toLowerCase()}-${item.id.slice(0, 8)}`;

  return (
    <button
      className={cn(
        styles.grid_item,
        isSelected && styles['grid_item--selected'],
      )}
      onClick={() => onSelect(item)}
      title={filename}
      type="button"
    >
      {MEDIA_TYPE_ICONS[item.type] ?? (
        <MdOutlineInsertDriveFile className={styles.grid_item__icon} />
      )}
      <span className={styles.grid_item__label}>{filename}</span>
      {isSelected && (
        <span className={styles.grid_item__check}>
          <MdCheck />
        </span>
      )}
    </button>
  );
};

interface ChatCloudStorageModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  triggerComponent: React.ReactNode;
}

export const ChatCloudStorageModal = ({
  isOpen,
  onOpenChange,
  triggerComponent,
}: Readonly<ChatCloudStorageModalProps>) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClose = () => onOpenChange(false);

  const {
    activeTab,
    isErrorSharedMedia,
    isLoadingSharedMedia,
    isSending,
    isUploading,
    onReset,
    onSearchChange,
    onSelectMedia,
    onSend,
    onTabChange,
    onSelectLocalFiles,
    onRemoveLocalFile,
    search,
    selectedSharedMedia,
    selectedLocalFiles,
    sharedMediaItems,
    teamCodename,
  } = useChatCloudStorageModal({ onClose: handleClose });

  const handleOpenChange = (open: boolean) => {
    if (!open) onReset();
    onOpenChange(open);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onSelectLocalFiles(Array.from(files));
      // Reset so the same file can be re-selected
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  return (
    <Modal
      className="sm:max-w-[580px] overflow-hidden rounded-2xl"
      isOpen={isOpen}
      onOpenChange={handleOpenChange}
      triggerComponent={triggerComponent}
    >
      <div className={styles.modal_root}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.header__icon}>
            <MdCloudUpload className="size-5 text-red-600 fill-red-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-chromatic-inverted">
              Almacenamiento en la Nube
            </p>
            {teamCodename && (
              <p className="text-xs text-neutral-500">Equipo: {teamCodename}</p>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          <button
            className={cn(
              styles.tab,
              activeTab === 'pc'
                ? styles['tab--active']
                : styles['tab--inactive'],
            )}
            onClick={() => onTabChange('pc')}
            type="button"
          >
            Mi Computadora
          </button>
          <button
            className={cn(
              styles.tab,
              activeTab === 'shared'
                ? styles['tab--active']
                : styles['tab--inactive'],
            )}
            onClick={() => onTabChange('shared')}
            type="button"
          >
            Almacenamiento Compartido
          </button>
        </div>

        {/* Content */}
        {activeTab === 'pc' ? (
          <div className={styles.tab_content_wrapper}>
            <input
              accept="*/*"
              className={styles.hidden_input}
              multiple
              onChange={handleFileInputChange}
              ref={fileInputRef}
              type="file"
            />
            {selectedLocalFiles.length === 0 ? (
              <button
                className={styles.upload_area}
                disabled={isUploading}
                onClick={() => fileInputRef.current?.click()}
                type="button"
              >
                <MdCloudUpload className={styles.upload_area__icon} />
                <p className={styles.upload_area__text}>
                  Haz clic para seleccionar archivos
                </p>
                <p className={styles.upload_area__subtext}>
                  Los archivos se subirán al almacenamiento compartido del
                  equipo al enviarlos.
                </p>
              </button>
            ) : (
              <div className={styles.local_files_container}>
                <div className={styles.local_files_list}>
                  {selectedLocalFiles.map((localFile, index) => (
                    <div className={styles.local_file_card} key={localFile.id}>
                      {localFile.previewUrl ? (
                        // biome-ignore lint/performance/noImgElement: for preview images
                        <img
                          alt="Preview"
                          className={styles.file_preview_img}
                          src={localFile.previewUrl}
                        />
                      ) : (
                        <div className={styles.file_preview_placeholder}>
                          <MdOutlineInsertDriveFile size={26} />
                        </div>
                      )}
                      <div className={styles.file_info}>
                        <p className={styles.file_name}>
                          {localFile.file.name}
                        </p>
                        <p className={styles.file_size}>
                          {(localFile.file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <button
                        className={styles.remove_button}
                        onClick={() => onRemoveLocalFile(index)}
                        title="Eliminar archivo"
                        type="button"
                      >
                        <MdClose size={20} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className={styles.local_files_footer}>
                  <Button
                    className={styles.add_more_button}
                    color="default"
                    onClick={() => fileInputRef.current?.click()}
                    type="button"
                  >
                    Agregar más archivos
                  </Button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* Search + Upload button */}
            <div className={styles.toolbar}>
              <div className={styles.search}>
                <MdOutlineSearch size={16} />
                <input
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Buscar..."
                  value={search}
                />
              </div>
              <Button
                className="px-3 shrink-0 text-xs text-chromatic hover:bgs-neutral-500"
                color="gray"
                disabled={!teamCodename || isUploading}
                onClick={() => fileInputRef.current?.click()}
                type="button"
              >
                {isUploading ? 'Subiendo…' : 'Subir Archivo'}
              </Button>
              <input
                accept="*/*"
                className="hidden"
                multiple
                onChange={handleFileInputChange}
                ref={fileInputRef}
                type="file"
              />
            </div>

            {/* Grid */}
            {isLoadingSharedMedia ? (
              <div className={styles.empty}>
                <span>Cargando archivos…</span>
              </div>
            ) : isErrorSharedMedia ? (
              <div className={styles.empty}>
                <span>Error al cargar los archivos</span>
              </div>
            ) : sharedMediaItems.length === 0 ? (
              <div className={styles.empty}>
                <MdCloudUpload size={40} opacity={0.3} />
                <span>No hay archivos en el almacenamiento compartido</span>
              </div>
            ) : (
              <div className={styles.grid}>
                {sharedMediaItems.map((item) => (
                  <ChatCloudStorageMediaGridItem
                    isSelected={selectedSharedMedia.some(
                      (media) => media.id === item.id,
                    )}
                    item={item}
                    key={item.id}
                    onSelect={onSelectMedia}
                  />
                ))}
              </div>
            )}
          </>
        )}

        {/* Footer */}
        <div className={styles.footer}>
          <Button
            disabled={isSending}
            onClick={() => {
              onReset();
              onOpenChange(false);
            }}
            type="button"
          >
            Cancelar
          </Button>
          <Button
            color="red"
            disabled={
              (selectedSharedMedia.length === 0 &&
                selectedLocalFiles.length === 0) ||
              isSending ||
              isUploading
            }
            onClick={onSend}
            type="button"
          >
            {isUploading ? 'Subiendo...' : isSending ? 'Enviando…' : 'Enviar'}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
