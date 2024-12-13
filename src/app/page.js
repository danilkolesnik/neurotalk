'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    console.log('Code:', code);
  
    if (code) {
      const exchangeCodeForToken = async () => {
        try {
          const response = await axios.get(`/api/exchangeCode?code=${code}`);
          const accessToken = response.data.access_token;
          console.log('Access Token:', accessToken);

        } catch (error) {
          console.error('Error exchanging code for token:', error);
        }
      };

      exchangeCodeForToken();
    }
  }, []);

  return <>Loading...</>;
}
