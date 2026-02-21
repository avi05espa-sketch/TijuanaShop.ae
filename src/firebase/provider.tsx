'use client';
import React from 'react';

export const FirebaseProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export const useFirebase = () => ({});
