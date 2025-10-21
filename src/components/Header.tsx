import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "../hooks/react-i18next";
import { LanguageToggle } from "./LanguageToggle";
import cowLogo from "/attached_assets/stock_images/beautiful_indian_cow_195670f8.jpg";

export const Header = () => {
  const location = useLocation();
  const { t } = useTranslation();

  // Check if we're on the home page to apply transparent styling
  const isHomePage = location.pathname === '/';

  return (
    <header className={`sticky top-0 z-50 ${isHomePage
      ? 'bg-transparent backdrop-blur-sm border-b border-white/20'
      : 'bg-background/95 backdrop-blur-sm border-b border-border'
      }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
              <img
                src={cowLogo}
                alt="Saubhagya Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className={`text-xl font-bold ${isHomePage ? 'text-white drop-shadow-lg' : 'text-foreground'}`}>Saubhagya</span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className={`transition-smooth font-medium ${location.pathname === '/'
                  ? isHomePage
                    ? 'text-white border-b-2 border-white drop-shadow-lg'
                    : 'text-primary border-b-2 border-primary'
                  : isHomePage
                    ? 'text-white/90 hover:text-white drop-shadow-lg'
                    : 'text-foreground hover:text-primary'
                  }`}
              >
                {t('nav.home')}
              </Link>

              <Link
                to="/benefits"
                className={`transition-smooth font-medium ${location.pathname === '/benefits'
                  ? 'text-primary border-b-2 border-primary'
                  : isHomePage
                    ? 'text-white/90 hover:text-white drop-shadow-lg'
                    : 'text-foreground hover:text-primary'
                  }`}
              >
                {t('nav.benefits')}
              </Link>
              <Link
                to="/user-types"
                className={`transition-smooth font-medium ${location.pathname === '/user-types'
                  ? 'text-primary border-b-2 border-primary'
                  : isHomePage
                    ? 'text-white/90 hover:text-white drop-shadow-lg'
                    : 'text-foreground hover:text-primary'
                  }`}
              >
                {t('nav.users')}
              </Link>
              <Link
                to="/about"
                className={`transition-smooth font-medium ${location.pathname === '/about'
                  ? 'text-primary border-b-2 border-primary'
                  : isHomePage
                    ? 'text-white/90 hover:text-white drop-shadow-lg'
                    : 'text-foreground hover:text-primary'
                  }`}
              >
                {t('nav.about')}
              </Link>
              <Link
                to="/contact"
                className={`transition-smooth font-medium ${location.pathname === '/contact'
                  ? 'text-primary border-b-2 border-primary'
                  : isHomePage
                    ? 'text-white/90 hover:text-white drop-shadow-lg'
                    : 'text-foreground hover:text-primary'
                  }`}
              >
                {t('nav.contact')}
              </Link>
            </nav>

            {/* Language Toggle */}
            <div className={isHomePage ? 'drop-shadow-lg' : ''}>
              <LanguageToggle variant="compact" className={isHomePage ? 'bg-white/20 hover:bg-white/30 backdrop-blur-sm' : ''} />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};