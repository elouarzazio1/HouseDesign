"use client"

// components/TawkToScript.tsx
import { useEffect } from 'react';

const TawkToScript = () => {
  useEffect(() => {
    var Tawk_API: any = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function(){
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/66853f079d7f358570d68aa6/1i1s7se2i';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      if (s0) {
        s0.parentNode?.insertBefore(s1, s0);
      }
    })();
  }, []);

  return null;
};

export default TawkToScript;
