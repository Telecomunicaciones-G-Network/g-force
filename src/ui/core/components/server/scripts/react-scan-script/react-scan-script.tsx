import { ENVS } from '@ui-core/envs/envs';

export const ReactScanScript = () => {
  if (ENVS.MODE === 'development') {
    console.log('🚀 ReactScanScript is running on development mode');
  }

  return (
    <>
      {ENVS.MODE === 'development' && Boolean(ENVS.REACT_SCAN_ON) && (
        <script
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
        />
      )}
    </>
  );
};
