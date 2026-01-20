// PENDING:

'use client';

import { ReactQueryDevtools as ReactQueryDevtoolsBase } from '@tanstack/react-query-devtools';

import { ENVS } from '@ui-core/envs/envs';

import { EnvModes } from '@ui-core/enums/env-modes.enum';

export const ReactQueryDevtools = () => {
  if (
    (ENVS.MODE === EnvModes.DEVELOPMENT || ENVS.MODE === EnvModes.STAGING) &&
    ENVS.REACT_QUERY_DEV_TOOLS_ON
  ) {
    console.log('🚀 ReactQueryDevtools is running on development mode');
    return <ReactQueryDevtoolsBase initialIsOpen={false} />;
  }

  return null;
};
