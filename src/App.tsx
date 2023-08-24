import { TitleFlex } from '@/components/TitleFlex.tsx';
import {
  VITE_API_TOKEN,
  VITE_APP_TITLE,
  VITE_APP_VERSION,
} from '@/utils/const/env.ts';

export const App: FC = () => {
  return (
    <>
      <TitleFlex>
        <h2>{VITE_APP_TITLE}</h2>
        <span>{VITE_APP_VERSION}</span>
      </TitleFlex>
      <p>API TOKEN: {VITE_API_TOKEN}</p>
    </>
  );
};
