'use client';

import type { CreateTicketFormProps } from './create-ticket-form.props';

import { MdOutlineAccountTree, MdOutlineArticle } from 'react-icons/md';
import { IoAttach, IoCloseCircle } from 'react-icons/io5';

import { Controller } from 'react-hook-form';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Button } from '@gnetwork-ui/components/molecules/buttons/button';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { SelectInputController } from '@ui-core/components/client/inputs/select-input-controller';

import { useCreateTicketForm } from './create-ticket-form.hook';

import styles from './create-ticket-form.module.css';

/**
 * @name CreateTicketForm
 *
 * @description Component to display the create ticket form.
 *
 * TODO: Refactor pending all code in text area container fragment
 * TODO: Delete from component css the rest of code on text area
 * TODO: Use the standar input file
 * TODO: Create a text area input component and textarea input controller component
 * TODO: Use Material Design icons change this IoAttach
 * TODO: Create a thumbnail image component
 * TODO: Handler errror case on ticket creation
 */
export const CreateTicketForm = ({
  filterClientId,
  isSearchMode = false,
  onSuccess,
  selectedContract,
}: Readonly<CreateTicketFormProps>) => {
  const {
    clearErrors,
    control,
    departmentValue,
    departments,
    errors,
    fileInputRef,
    handleSubmit,
    isFormValid,
    isLoadingDepartaments,
    isLoadingIssues,
    isSendingForm,
    issues,
    onImageSelect,
    onRemoveImage,
    onSubmit,
    selectedImages,
  } = useCreateTicketForm({
    filterClientId,
    isSearchMode,
    onSuccess,
    selectedContract,
  });

  return (
    <form className={styles.base} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.base__row}>
        <div className={styles.base__column}>
          <SelectInputController
            control={control}
            fullWidth
            indicator="Departamento"
            isLoading={isLoadingDepartaments}
            leftIcon={
              <MdOutlineAccountTree className="fill-neutral-500 min-h-6 min-w-6 size-6" />
            }
            name="department"
            onClear={() => clearErrors()}
            options={departments}
            triggerLabel="Departamento"
            triggerWrapperClassName="bg-chromatic"
          />
        </div>
        {departmentValue && (
          <div className={styles.base__column}>
            <SelectInputController
              control={control}
              fullWidth
              indicator="Asunto"
              isLoading={isLoadingIssues}
              leftIcon={
                <MdOutlineArticle className="fill-neutral-500 min-h-6 min-w-6 size-6" />
              }
              name="issue"
              onClear={() => clearErrors()}
              options={issues}
              triggerLabel="Asunto"
              triggerWrapperClassName="bg-chromatic"
            />
          </div>
        )}
      </div>
      <div className={styles.base__textarea_container}>
        <Text as="label" className="text-neutral" level="small" scheme="label">
          Descripción del asunto
        </Text>
        <div className={styles.base__textarea_wrapper}>
          <Controller
            control={control}
            name="description"
            render={({ field }) => (
              <textarea
                className={cn(
                  styles.base__textarea,
                  'border border-solid border-neutral-200',
                  errors.description?.message &&
                    'border-2 border-solid border-warning-200',
                )}
                onChange={(e) => {
                  field.onChange(e);
                  clearErrors();
                }}
                placeholder="Escribe comentarios aquí..."
                rows={4}
                value={field.value}
              />
            )}
          />
          <input
            ref={fileInputRef}
            accept="image/*"
            className="hidden"
            multiple
            onChange={(e) => {
              onImageSelect(e.target.files);
              e.target.value = '';
            }}
            type="file"
          />
          <button
            className={styles.base__attach_button}
            onClick={() => fileInputRef.current?.click()}
            type="button"
          >
            <IoAttach className="size-6" />
          </button>
        </div>

        {selectedImages?.length > 0 && (
          <div className={styles.base__images_preview}>
            {selectedImages?.map((image, index) => (
              <div
                key={image?.name ?? index}
                className={styles.base__image_item}
              >
                {/** biome-ignore lint/performance/noImgElement: <fix this> */}
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Preview ${index + 1}`}
                  className={styles.base__image_thumbnail}
                />
                <button
                  type="button"
                  className={styles.base__image_remove}
                  onClick={() => onRemoveImage(index)}
                >
                  <IoCloseCircle size={20} />
                </button>
                <Text
                  as="span"
                  level="small"
                  scheme="label"
                  className={styles.base__image_name}
                >
                  {image.name}
                </Text>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={styles.base__button_container}>
        <Button
          className="max-h-8 min-h-8 min-w-[131px] py-0"
          color="red"
          disabled={!isFormValid}
          loading={isSendingForm || isSendingForm}
          isStatic={!isFormValid}
          type="submit"
        >
          Crear ticket
        </Button>
      </div>
    </form>
  );
};
