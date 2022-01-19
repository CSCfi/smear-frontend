import { useEffect } from 'react';

import { METRICS_SCRIPT_URL } from '../constants'

const useScript = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = METRICS_SCRIPT_URL;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
};

export default useScript;
