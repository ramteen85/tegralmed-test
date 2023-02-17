import { GlobalDataContext } from '../Helpers/Context';
import { useContext } from 'react';

export const useGlobal = () => {
  const ctx = useContext(GlobalDataContext);
  return {
    ...ctx,
  };
};
