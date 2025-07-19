import { Link } from "wouter";
import { useTranslation } from 'react-i18next';
import skycropsLogo from '@/assets/skycrops.svg';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <img src={skycropsLogo} alt="SKYCROPS" className="h-8 w-auto" />
            </div>
            <p className="text-muted-foreground mb-1">
              {t('footer_tagline')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-1">{t('products')}</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>
                <Link href="/shop" className="hover:text-primary transition-colors">
                  Tüm Ürünler
                </Link>
              </li>
              <li>
                <Link href="/shop?category=paketler" className="hover:text-primary transition-colors">
                  Paketler
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-1">{t('company')}</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  {t('about_us')}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  {t('blog')}
                </Link>
              </li>
              <li>
                <a href="https://sartlar.com/gizlilik-politikasi-ornegi/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {t('privacy_policy')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-1">{t('contact')}</h4>
            <div className="space-y-1 text-muted-foreground text-sm">
              <p>{t('footer_address')}</p>
              <p>{t('footer_phone')}</p>
              <p>{t('footer_email')}</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-2 pt-2 text-center text-muted-foreground text-sm">
          <p>&copy; 2025 Skycrops. {t('all_rights_reserved')}</p>
        </div>
      </div>
    </footer>
  );
}
