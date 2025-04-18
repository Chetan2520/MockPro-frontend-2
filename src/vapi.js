// src/vapi.js
import Vapi from '@vapi-ai/web';

let vapi = null;

export const initVapi = async () => {
  const res = await fetch('http://localhost:5000/api/vapi/token'); // adjust URL as needed
  const data = await res.json();
  vapi = new Vapi(data.token);
  return vapi;
};

export const getVapiInstance = () => vapi;
