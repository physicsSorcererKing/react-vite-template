import {
  VITE_API_TOKEN,
  VITE_APP_TITLE,
  VITE_APP_VERSION,
} from '@/utils/const/env.ts';

export const App = () => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
        <h2>{VITE_APP_TITLE}</h2>
        <span>{VITE_APP_VERSION}</span>
      </div>
      <p>API TOKEN: {VITE_API_TOKEN}</p>
    </>
  );
};
