import React, {useEffect} from 'react';
import HomeStack from './HomeStack';
import {useStore} from '../store';
import supabaseClient from '../utils/supabaseClient';
import AuthStack from './AuthStack';
export default function RootNavigation() {
  const session = useStore(state => state.session);
  const setSession = useStore(state => state.setSession);
  console.log('Session: ', session);
  useEffect(() => {
    supabaseClient.auth.getSession().then(({data: {currentSession}}) => {
      setSession(currentSession);
    });

    const {data: subscription} = supabaseClient.auth.onAuthStateChange(
      (_event, newSession) => {
        setSession(newSession);
      },
    );
    return () => subscription?.unsubscribe();
  }, [setSession]);

  return session ? <HomeStack /> : <AuthStack />;
}
