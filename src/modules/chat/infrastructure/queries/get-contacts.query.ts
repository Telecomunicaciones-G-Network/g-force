// DONE:

import type { GetContactsRequest } from '../../domain/interfaces';
import type { GetContactsViewModel } from '../viewmodels';

import { getContactsUsecase } from '../../application/usecases/get-contacts.usecase';

import { httpChatRepository } from '../repositories/http-chat.repository';

import { getContactsPresenter } from '../presenters/get-contacts.presenter';

export const GetContactsQuery = async (
  query?: GetContactsRequest,
): Promise<GetContactsViewModel> => {
  const response = await getContactsUsecase(httpChatRepository, query);

  return getContactsPresenter(response);
};
