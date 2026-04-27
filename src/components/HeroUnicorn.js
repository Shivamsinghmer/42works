'use client';

import { useEffect } from 'react';

const UNICORN_SCRIPT_SRC =
  'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.0-1/dist/unicornStudio.umd.js';

function initUnicornStudio() {
  if (
    typeof window !== 'undefined' &&
    window.UnicornStudio &&
    typeof window.UnicornStudio.init === 'function'
  ) {
    window.UnicornStudio.init();
    window.UnicornStudio.isInitialized = true;
    return true;
  }

  return false;
}

export default function HeroUnicorn() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
    }

    const existingScript = document.querySelector(
      `script[src="${UNICORN_SCRIPT_SRC}"]`
    );

    let initInterval;
    const tryInitUntilReady = () => {
      let attempts = 0;
      initInterval = window.setInterval(() => {
        attempts += 1;
        const initialized = initUnicornStudio();

        // Stop retrying after ~5 seconds.
        if (initialized || attempts >= 50) {
          window.clearInterval(initInterval);
        }
      }, 100);
    };

    if (existingScript) {
      const onLoad = () => initUnicornStudio();
      existingScript.addEventListener('load', onLoad, { once: true });

      if (!initUnicornStudio()) {
        tryInitUntilReady();
      }

      return () => {
        existingScript.removeEventListener('load', onLoad);
        if (initInterval) {
          window.clearInterval(initInterval);
        }
      };
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = UNICORN_SCRIPT_SRC;
    const onLoad = () => {
      if (
        document.readyState === 'complete' ||
        document.readyState === 'interactive'
      ) {
        initUnicornStudio();
      } else {
        document.addEventListener('DOMContentLoaded', initUnicornStudio, {
          once: true,
        });
      }
    };
    script.addEventListener('load', onLoad, { once: true });

    (document.head || document.body).appendChild(script);

    return () => {
      script.removeEventListener('load', onLoad);
      if (initInterval) {
        window.clearInterval(initInterval);
      }
    };
  }, []);

  return (
    <section className="unicorn-container" aria-label="Hero background">
      <div className="aura-background-component">
        <div
          data-us-project="PbfL8YshrLU8GjeTZ4HP"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </section>
  );
}
