export const ReactScanScript = () => {
  if (process.env.MODE === 'development') {
    console.log('🚀 ReactScanScript is running on development mode');
  }

  return (
    <>
      {process.env.MODE === 'development' &&
        Boolean(process.env.REACT_SCAN_ON) && (
          <script
            async
            src="https://unpkg.com/react-scan/dist/auto.global.js"
          />
        )}
    </>
  );
};
