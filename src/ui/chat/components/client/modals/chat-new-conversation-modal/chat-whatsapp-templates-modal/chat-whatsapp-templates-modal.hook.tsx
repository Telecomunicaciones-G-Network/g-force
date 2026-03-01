'use client';

import { useState, useMemo, useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useDebounce } from '@hook/use-debounce.hook';

import type {
  GetWhatsappTemplatesResponse,
  WhatsappTemplate,
} from '@module-chat/domain/interfaces';

import { useToast } from '@gnetwork-ui/components/organisms/toasts/toast/toast.hook';
import { AlertSchemes as ToastSchemes } from '@gnetwork-ui/components/molecules/alerts/alert/enums/alert-scheme.enum';

import { CHAT_TAGS } from '@module-chat/infrastructure/dictionaries/chat-tags.dictionary';
import { GetWhatsappTemplatesQuery } from '@module-chat/infrastructure/queries/get-whatsapp-templates.query';
import { sendWhatsappTemplateService } from '@module-chat/infrastructure/services/send-whatsapp-template.service';

import { ENVS } from '@ui-core/envs/envs';

import {
  COUNTRY_CODES,
  type CountryCode,
} from './constants/country-codes.constant';

import {
  sendWhatsappTemplateFormSchema,
  type SendWhatsappTemplateFormData,
} from './schemas/chat-whatsapp-templates-modal-form.schema';

interface UseChatWhatsappNewChatModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * Extracts all {{N}} parameters from a template's BODY component text.
 * Returns a sorted array of unique parameter indices like [1, 2, 3].
 */
const extractTemplateParams = (template: WhatsappTemplate): number[] => {
  const bodyComp = template.components.find((c) => c.type === 'BODY');
  if (!bodyComp?.text || typeof bodyComp.text !== 'string') return [];

  const matches = bodyComp.text.match(/\{\{(\d+)\}\}/g) ?? [];
  const indices = matches.map((m) => parseInt(m.replace(/\{\{|\}\}/g, ''), 10));
  return [...new Set(indices)].sort((a, b) => a - b);
};

/**
 * Replaces {{N}} placeholders in text with the corresponding param values.
 */
export const applyTemplateParams = (
  text: string,
  params: Record<string, string>,
): string => {
  return text.replace(/\{\{(\d+)\}\}/g, (_, n) => params[n] || `{{${n}}}`);
};

/**
 * Parses the NEXT_PUBLIC_WHATSAPP_TEMPLATE_NAMES env var into an array of template names.
 * Returns an empty array if not set (meaning all templates are allowed).
 */
const getAllowedTemplateNames = (): string[] => {
  const raw = ENVS.WHATSAPP_TEMPLATE_NAMES;
  if (!raw || typeof raw !== 'string') return [];
  return raw
    .split(',')
    .map((n) => n.trim().toLowerCase())
    .filter(Boolean);
};

export const useChatWhatsappNewChatModal = ({
  isOpen,
  onOpenChange,
}: UseChatWhatsappNewChatModalProps) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(
    COUNTRY_CODES[0], // Venezuela by default
  );
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const [templateSearch, setTemplateSearch] = useState('');
  const [selectedTemplate, setSelectedTemplate] =
    useState<WhatsappTemplate | null>(null);

  const { showToast } = useToast();

  // ─── react-hook-form ──────────────────────────────────────────────────────
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    setValue,
    watch,
  } = useForm<SendWhatsappTemplateFormData>({
    defaultValues: {
      phoneNumber: '',
      templateId: '',
      params: {},
    },
    mode: 'onSubmit',
    resolver: zodResolver(sendWhatsappTemplateFormSchema),
    reValidateMode: 'onChange',
  });

  const paramValues = watch('params') ?? {};

  const debouncedTemplateSearch = useDebounce(templateSearch, 350);
  const allowedNames = useMemo(() => getAllowedTemplateNames(), []);

  // ─── Reset on close ───────────────────────────────────────────────────────
  const resetState = () => {
    reset({ phoneNumber: '', templateId: '', params: {} });
    setSelectedTemplate(null);
    setTemplateSearch('');
    setCountrySearch('');
    setIsCountryDropdownOpen(false);
  };

  const onClose = () => {
    onOpenChange(false);
    setTimeout(resetState, 300);
  };

  // ─── Templates query ──────────────────────────────────────────────────────
  const { data, isLoading, isError } = useQuery<GetWhatsappTemplatesResponse>({
    queryKey: [
      CHAT_TAGS.GET_WHATSAPP_TEMPLATES,
      { search: debouncedTemplateSearch },
    ],
    queryFn: () =>
      GetWhatsappTemplatesQuery({
        nameOrContent: debouncedTemplateSearch || undefined,
        limit: 50,
      }),
    enabled: isOpen,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  // ─── Send mutation ────────────────────────────────────────────────────────
  const { mutate: sendTemplate, isPending: isSending } = useMutation({
    mutationFn: sendWhatsappTemplateService,
    onSuccess: () => {
      showToast('Plantilla enviada exitosamente', {
        id: 'chat-whatsapp-template-success',
        position: 'top-right',
        scheme: ToastSchemes.SUCCESS,
      });
      onClose();
    },
    onError: (err: Error) => {
      showToast(
        err?.message || 'Error al enviar la plantilla. Intente nuevamente.',
        {
          id: 'chat-whatsapp-template-error',
          position: 'top-right',
          scheme: ToastSchemes.ERROR,
        },
      );
    },
  });

  // ─── Filtered templates ───────────────────────────────────────────────────
  const templates = useMemo(() => {
    const all = data?.results ?? [];
    return allowedNames.length > 0
      ? all.filter((t) => allowedNames.includes(t.name.toLowerCase()))
      : all;
  }, [data, allowedNames]);

  const filteredCountries = COUNTRY_CODES.filter(
    (c) =>
      c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.dialCode.includes(countrySearch),
  );

  // ─── Handlers ─────────────────────────────────────────────────────────────
  const onPhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, '');
    setValue('phoneNumber', value, { shouldValidate: false });
  };

  const onCountrySelect = (country: CountryCode) => {
    setSelectedCountry(country);
    setIsCountryDropdownOpen(false);
    setCountrySearch('');
  };

  const onTemplateSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setTemplateSearch(event.target.value);
  };

  const onSelectTemplate = (template: WhatsappTemplate) => {
    const isSame = selectedTemplate?.id === template.id;
    const next = isSame ? null : template;
    setSelectedTemplate(next);
    setValue('templateId', next?.id ?? '', { shouldValidate: false });
    setValue('params', {}, { shouldValidate: false });
  };

  const onParamChange = (index: number, value: string) => {
    const current = watch('params') ?? {};
    setValue(
      'params',
      { ...current, [String(index)]: value },
      { shouldValidate: false },
    );
  };

  // ─── Template params ──────────────────────────────────────────────────────
  const templateParams = useMemo(
    () => (selectedTemplate ? extractTemplateParams(selectedTemplate) : []),
    [selectedTemplate],
  );

  // Reset params in the form when the template changes
  useEffect(() => {
    if (!selectedTemplate) return;
    const empty: Record<string, string> = {};
    for (const idx of extractTemplateParams(selectedTemplate)) {
      empty[String(idx)] = '';
    }
    setValue('params', empty, { shouldValidate: false });
  }, [selectedTemplate, setValue]);

  // ─── Submit ───────────────────────────────────────────────────────────────
  const onSend = handleSubmit((formData) => {
    if (!selectedTemplate) return;

    const fullPhoneNumber = `${selectedCountry.dialCode.replace('+', '')}${formData.phoneNumber}`;

    sendTemplate({
      phoneNumber: fullPhoneNumber,
      template: selectedTemplate,
      paramValues: formData.params,
    });
  });

  const phoneNumber = watch('phoneNumber');
  const fullPhoneNumber = `${selectedCountry.dialCode}${phoneNumber}`;

  return {
    countrySearch,
    errors,
    filteredCountries,
    fullPhoneNumber,
    isCountryDropdownOpen,
    isError,
    isLoading,
    isSending,
    onClose,
    onCountrySelect,
    onParamChange,
    onPhoneNumberChange,
    onSelectTemplate,
    onSend,
    onTemplateSearchChange,
    paramValues: paramValues as Record<string, string>,
    phoneNumber,
    register,
    selectedCountry,
    selectedTemplate,
    setCountrySearch,
    setIsCountryDropdownOpen,
    templateParams,
    templateSearch,
    templates,
  };
};
