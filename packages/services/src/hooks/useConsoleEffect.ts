import { useEffect } from 'react';

export default function useConsoleEffect() {
  useEffect(() => {
    console.log('hola')
  }, []);
}
