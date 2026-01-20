import { ENVS } from '@ui-core/envs/envs';

import { EnvModes } from '@ui-core/enums/env-modes.enum';

export const ReactScanScript = () => {
  if (ENVS.MODE === EnvModes.DEVELOPMENT || ENVS.MODE === EnvModes.STAGING) {
    console.log('🚀 ReactScanScript is running on development mode');
  }

  return (
    <>
      {(ENVS.MODE === EnvModes.DEVELOPMENT || ENVS.MODE === EnvModes.STAGING) &&
        Boolean(ENVS.REACT_SCAN_ON) && (
          <script
            crossOrigin="anonymous"
            src="//unpkg.com/react-scan/dist/auto.global.js"
          />
        )}
    </>
  );
};
