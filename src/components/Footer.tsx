"use client";

import Link from 'next/link';
import { useTranslations } from '@/lib/LanguageContext';

export default function Footer() {
  const t = useTranslations('footer');
  const tHeader = useTranslations('header');

  return (
    <footer className="w-full border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-gold">
                <span className="text-2xl font-bold text-white">H</span>
              </div>
              <span className="text-xl font-bold gradient-gold-text">HABİZEN</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('tagline')}
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold">{t('product')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/features" className="hover:text-foreground transition-colors">{tHeader('features')}</Link></li>
              <li><Link href="/challenges" className="hover:text-foreground transition-colors">{tHeader('challenges')}</Link></li>
              <li><Link href="/badges" className="hover:text-foreground transition-colors">{tHeader('badges')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold">{t('download')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">{t('iosApp')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t('androidApp')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold">{t('legal')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy-policy" className="hover:text-foreground transition-colors">{t('privacyPolicy')}</Link></li>
              <li><Link href="/kvkk" className="hover:text-foreground transition-colors">{t('kvkk')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold">{t('connect')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
