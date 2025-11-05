"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Locale = 'tr' | 'en' | 'ar' | 'zh' | 'ru' | 'ko';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('tr');
  const [messages, setMessages] = useState<any>({});

  useEffect(() => {
    // Load locale from localStorage or use default
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && ['tr', 'en', 'ar', 'zh', 'ru', 'ko'].includes(savedLocale)) {
      setLocaleState(savedLocale);
    }
  }, []);

  useEffect(() => {
    // Load messages for the current locale
    import(`../../messages/${locale}.json`)
      .then((module) => {
        setMessages(module.default);
      })
      .catch((error) => {
        console.error('Failed to load messages:', error);
      });
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
    // Update HTML lang attribute
    document.documentElement.lang = newLocale;
    // Update HTML dir attribute for RTL languages
    document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, messages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Helper hook to get translations
export function useTranslations(namespace?: string) {
  const { messages } = useLanguage();
  
  return (key: string) => {
    const keys = namespace ? `${namespace}.${key}` : key;
    const parts = keys.split('.');
    let value = messages;
    
    for (const part of parts) {
      if (value && typeof value === 'object' && part in value) {
        value = value[part];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
}
