"use client"
import { useEffect } from 'react';

const Bot = () => {
  useEffect(() => {
    const iframe = document.createElement('iframe');

    const iframeStyles = (styleString: string) => {
      const style = document.createElement('style');
      style.textContent = styleString;
      document.head.appendChild(style);
    };

    iframeStyles(`
      .chat-frame {
        position: fixed;
        bottom: 50px;
        right: 50px;
        border: none;
      }
    `);

    iframe.src = "http://localhost:3000/chatbot";
    iframe.classList.add('chat-frame');
    document.body.appendChild(iframe);

    const handleMessage = (e: MessageEvent) => {
      if (e.origin !== "http://localhost:3000") return;
      try {
        const dimensions = JSON.parse(e.data);
        if (typeof dimensions.width === 'string') iframe.width = dimensions.width;
        if (typeof dimensions.height === 'string') iframe.height = dimensions.height;

        iframe.contentWindow?.postMessage("3533e6f8-c7d4-4ce4-9647-09085eefa74d", "http://localhost:3000/");
      } catch (err) {
        console.error("Invalid message data:", err);
      }
    };

    window.addEventListener("message", handleMessage);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("message", handleMessage);
      document.body.removeChild(iframe);
    };
  }, []);

  return null; // No JSX needed as iframe is handled manually
};

export default Bot;
