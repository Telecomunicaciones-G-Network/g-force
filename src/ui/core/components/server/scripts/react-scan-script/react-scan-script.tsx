export const ReactScanScript = () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('ReactScanScript');
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
