'use client';

import type { CountryCode } from '../../constants/country-codes.constant';
import type { WhatsappTemplate } from '@module-chat/domain/interfaces';

import { useRef, useEffect } from 'react';

import {
  MdExpandMore,
  MdOutlineArticle,
  MdOutlineLock,
  MdOutlineCampaign,
  MdOutlineHandyman,
} from 'react-icons/md';

import { Skeleton } from '@gnetwork-ui/components/atoms/skeletons/skeleton';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { SearchInput } from '@gnetwork-ui/components/molecules/inputs/search-input';

import { cn } from '@gnetwork-ui/utils/cn.util';

import styles from './chat-whatsapp-templates-modal-body.module.css';

interface ChatWhatsappTemplatesModalBodyProps {
  countrySearch: string;
  errors: {
    phoneNumber?: { message?: string };
    templateId?: { message?: string };
    params?: Record<string, { message?: string } | undefined>;
  };
  filteredCountries: CountryCode[];
  isCountryDropdownOpen: boolean;
  isError: boolean;
  isLoading: boolean;
  onCountrySelect: (country: CountryCode) => void;
  onParamChange: (index: number, value: string) => void;
  onPhoneNumberChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectTemplate: (template: WhatsappTemplate) => void;
  onTemplateSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  paramValues: Record<number, string>;
  phoneNumber: string;
  selectedCountry: CountryCode;
  selectedTemplate: WhatsappTemplate | null;
  setCountrySearch: (value: string) => void;
  setIsCountryDropdownOpen: (open: boolean) => void;
  templateParams: number[];
  templateSearch: string;
  templates: WhatsappTemplate[];
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  AUTHENTICATION: <MdOutlineLock className="fill-purple-500 size-4" />,
  MARKETING: <MdOutlineCampaign className="fill-orange-500 size-4" />,
  UTILITY: <MdOutlineHandyman className="fill-blue-500 size-4" />,
  UNKNOWN: <MdOutlineArticle className="fill-neutral-500 size-4" />,
};

const CATEGORY_LABELS: Record<string, string> = {
  AUTHENTICATION: 'Authentication',
  MARKETING: 'Marketing',
  UTILITY: 'Utility',
  UNKNOWN: 'Otro',
};

/**
 * @name ChatWhatsappTemplatesModalBody
 *
 * @description Left panel of step-2 modal:
 *  1. Phone number with country code selector
 *  2. Searchable template list (scrollable)
 *  3. Valores (param inputs) below the list — visible when a template is selected
 *  4. Action buttons at the bottom
 */
export const ChatWhatsappTemplatesModalBody = ({
  countrySearch,
  errors,
  filteredCountries,
  isCountryDropdownOpen,
  isError,
  isLoading,
  onCountrySelect,
  onParamChange,
  onPhoneNumberChange,
  onSelectTemplate,
  onTemplateSearchChange,
  paramValues,
  phoneNumber,
  selectedCountry,
  selectedTemplate,
  setCountrySearch,
  setIsCountryDropdownOpen,
  templateParams,
  templateSearch,
  templates,
}: Readonly<ChatWhatsappTemplatesModalBodyProps>) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCountryDropdownOpen(false);
        setCountrySearch('');
      }
    };

    if (isCountryDropdownOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isCountryDropdownOpen, setIsCountryDropdownOpen, setCountrySearch]);

  return (
    <div className={styles.body}>
      {/* ─── 1. Phone number section ──────────────────────── */}
      <div className={styles.phone_section}>
        <Text className="text-neutral-700" level="small" scheme="label">
          Número de WhatsApp
        </Text>

        <div style={{ position: 'relative' }} ref={dropdownRef}>
          <div
            className={cn(
              styles.phone_input_row,
              errors.phoneNumber && styles['phone_input_row--error'],
            )}
          >
            {/* Country code trigger */}
            <button
              className={styles.country_trigger}
              onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
              type="button"
              aria-label="Seleccionar código de país"
            >
              <span className={styles.country_trigger__flag}>
                {selectedCountry.flag}
              </span>
              <span className={styles.country_trigger__code}>
                {selectedCountry.dialCode}
              </span>
              <MdExpandMore
                className={cn(
                  styles.country_trigger__chevron,
                  'size-4 transition-transform duration-200',
                  isCountryDropdownOpen && 'rotate-180',
                )}
              />
            </button>

            {/* Phone number input */}
            <input
              className={styles.phone_number_input}
              id="whatsapp_phone_number"
              inputMode="numeric"
              onChange={onPhoneNumberChange}
              placeholder="Número..."
              type="text"
              value={phoneNumber}
            />
          </div>

          {errors.phoneNumber?.message && (
            <p className={styles.field_error}>{errors.phoneNumber.message}</p>
          )}

          {/* Country dropdown */}
          {isCountryDropdownOpen && (
            <div
              className={styles.country_dropdown}
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                marginTop: 4,
              }}
            >
              <div className={styles.country_dropdown__search}>
                <input
                  onChange={(e) => setCountrySearch(e.target.value)}
                  placeholder="Buscar país..."
                  type="text"
                  value={countrySearch}
                />
              </div>
              <div className={styles.country_dropdown__list}>
                {filteredCountries.map((country) => (
                  <button
                    key={country.code}
                    className={cn(
                      styles.country_item,
                      selectedCountry.code === country.code &&
                        styles['country_item--active'],
                    )}
                    onClick={() => onCountrySelect(country)}
                    type="button"
                  >
                    <span className={styles.country_item__flag}>
                      {country.flag}
                    </span>
                    <span className={styles.country_item__name}>
                      {country.name}
                    </span>
                    <span className={styles.country_item__dial}>
                      {country.dialCode}
                    </span>
                  </button>
                ))}
                {filteredCountries.length === 0 && (
                  <div className="px-4 py-3 text-center text-sm text-neutral-400">
                    No se encontraron países
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ─── 2. Templates section ─────────────────────────── */}
      <div className={styles.templates_section}>
        <Text
          className={cn(styles.templates_label, 'text-neutral-700')}
          level="small"
          scheme="label"
        >
          Plantillas
        </Text>

        <div className={styles.templates_search}>
          <SearchInput
            className="bg-chromatic gap-2"
            fullWidth
            id="template_search"
            name="template-search"
            onChange={onTemplateSearchChange}
            placeholder="Buscar..."
            value={templateSearch}
          />
        </div>

        {isLoading && (
          <div className={styles.skeleton_list}>
            {[...Array(3)].map((_, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static skeleton
              <Skeleton key={i} className="h-[72px] w-full rounded-xl" />
            ))}
          </div>
        )}

        {!isLoading && isError && (
          <div className={styles.empty}>
            <MdOutlineArticle className="fill-neutral-400 size-8" />
            <Text
              className="text-neutral-500"
              level="xsmall"
              scheme="paragraph"
            >
              Error al cargar las plantillas.
            </Text>
          </div>
        )}

        {!isLoading && !isError && templates.length === 0 && (
          <div className={styles.empty}>
            <MdOutlineArticle className="fill-neutral-400 size-8" />
            <Text
              className="text-neutral-500"
              level="xsmall"
              scheme="paragraph"
            >
              No se encontraron plantillas.
            </Text>
          </div>
        )}

        {!isLoading && !isError && templates.length > 0 && (
          <div className={styles.templates_list}>
            {templates.map((template) => {
              const bodyComponent = template.components.find(
                (c) => c.type === 'BODY',
              );
              const bodyText =
                typeof bodyComponent?.text === 'string'
                  ? bodyComponent.text
                  : null;
              const categoryIcon =
                CATEGORY_ICONS[template.category] ?? CATEGORY_ICONS.UNKNOWN;
              const categoryLabel =
                CATEGORY_LABELS[template.category] ?? template.category;
              const isSelected = selectedTemplate?.id === template.id;

              return (
                <button
                  key={template.id}
                  className={cn(
                    styles.template_item,
                    isSelected && styles['template_item--selected'],
                  )}
                  onClick={() => onSelectTemplate(template)}
                  type="button"
                >
                  <div className={styles.template_item__header}>
                    <div className={styles.template_item__icon}>
                      {categoryIcon}
                    </div>
                    <div className={styles.template_item__info}>
                      <Text
                        className="text-neutral-500 leading-none"
                        level="xsmall"
                        scheme="paragraph"
                      >
                        {categoryLabel}
                      </Text>
                      <Text
                        className="text-chromatic-inverted"
                        level="xsmall"
                        scheme="label"
                      >
                        {template.name}
                      </Text>
                    </div>
                  </div>
                  {bodyText && (
                    <Text
                      className="text-neutral-500 text-left line-clamp-2 pl-[42px]"
                      level="xsmall"
                      scheme="paragraph"
                    >
                      {bodyText}
                    </Text>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {selectedTemplate && templateParams.length > 0 && (
        <div className={styles.params_section}>
          <Text className="text-neutral-700" level="small" scheme="label">
            Valores
          </Text>
          <div className={styles.params_list}>
            {templateParams.map((idx) => {
              const paramError = errors.params?.[String(idx)];
              return (
                <div key={idx} className={styles.param_field}>
                  <div
                    className={cn(
                      styles.param_row,
                      paramError && styles['param_row--error'],
                    )}
                  >
                    <span className={styles.param_label}>{`{{${idx}}}`}</span>
                    <input
                      className={styles.param_input}
                      id={`template_param_${idx}`}
                      onChange={(e) => onParamChange(idx, e.target.value)}
                      placeholder="Requerido..."
                      type="text"
                      value={paramValues[idx] ?? ''}
                    />
                  </div>
                  {paramError?.message && (
                    <p className={styles.field_error}>{paramError.message}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
