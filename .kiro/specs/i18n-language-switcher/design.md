# Design Document

## Overview

The i18n system will be built using React Context API for state management, custom hooks for component integration, and JSON files for translation storage. The architecture will support dynamic language switching with localStorage persistence and automatic component re-rendering when language changes.

## Architecture

### Core Components

1. **I18nProvider**: React Context provider that manages language state and translation loading
2. **useTranslation Hook**: Custom hook that provides translation functions to components
3. **LanguageSwitcher Component**: UI component for language selection in navbar
4. **LanguageToggle Component**: Toggle button component for switching between EN/HI
5. **Translation Loader**: Utility for loading and caching translation files
6. **LocalStorage Manager**: Handles persistence of language preferences

### Data Flow

```
User selects language → LanguageSwitcher → I18nProvider → 
Updates Context → Components re-render → localStorage updated
```

## Components and Interfaces

### I18nContext Interface

```typescript
interface I18nContextType {
  language: 'en' | 'hi';
  setLanguage: (lang: 'en' | 'hi') => void;
  t: (key: string, fallback?: string) => string;
  isLoading: boolean;
}
```

### Translation File Structure

```typescript
interface TranslationFile {
  [key: string]: string | TranslationFile;
}
```

### useTranslation Hook

```typescript
interface UseTranslationReturn {
  t: (key: string, fallback?: string) => string;
  language: 'en' | 'hi';
  setLanguage: (lang: 'en' | 'hi') => void;
  isLoading: boolean;
}
```

### LanguageToggle Component

```typescript
interface LanguageToggleProps {
  variant?: 'default' | 'compact' | 'icon-only';
  className?: string;
  showLabels?: boolean;
}
```

**Design Specifications:**
- **Toggle Style**: Animated switch with EN/HI labels
- **Visual States**: 
  - Active state shows selected language highlighted
  - Smooth transition animation (300ms ease-in-out)
  - Hover effects for better UX
- **Accessibility**: 
  - ARIA labels for screen readers
  - Keyboard navigation support (Tab, Enter, Space)
  - Focus indicators
- **Responsive Behavior**:
  - Desktop: Full toggle with labels
  - Mobile: Compact version or icon-only mode
- **Positioning**: 
  - Desktop navbar: Right side near other nav items
  - Mobile menu: Prominent position at top of menu

## Data Models

### Translation Files Location
- `src/locales/en.json` - English translations
- `src/locales/hi.json` - Hindi translations

### Translation Key Structure
```json
{
  "nav": {
    "home": "Home",
    "benefits": "Benefits",
    "contact": "Contact"
  },
  "hero": {
    "title": "From Dung to Dhan",
    "subtitle": "गौशाला से रोज़ी — किसानों के लिए न्यायपूर्ण भुगतान",
    "description": "IoT-verified weighments, same-day payouts, local CBG production"
  },
  "buttons": {
    "joinFarmer": "Join as Farmer",
    "requestPickup": "Request Pickup"
  }
}
```

### Font Configuration
- Primary font: Inter (supports Latin characters)
- Hindi font: Noto Sans Devanagari (supports Devanagari script)
- Fallback: system fonts

## Error Handling

### Missing Translation Keys
1. Log warning to console with missing key information
2. Return fallback text if provided
3. Return the key itself as last resort
4. Display error boundary for critical translation failures

### Translation File Loading Errors
1. Retry mechanism for network failures
2. Fallback to cached translations if available
3. Default to English if Hindi translations fail to load
4. User notification for persistent loading issues

### LocalStorage Errors
1. Graceful degradation if localStorage is unavailable
2. Session-based language preference as fallback
3. Default language selection if no preference available

## Testing Strategy

### Unit Tests
- Translation key resolution
- Language switching functionality
- LocalStorage persistence
- Hook behavior and state management

### Integration Tests
- Component re-rendering on language change
- Translation file loading and caching
- Error handling scenarios
- Cross-component language consistency

### Visual Tests
- Hindi text rendering and font display
- Layout adaptation for different text lengths
- Mobile responsiveness of language switcher
- Accessibility compliance for both languages

### Performance Tests
- Translation loading speed
- Memory usage with large translation files
- Component re-render optimization
- Bundle size impact analysis

## Implementation Phases

### Phase 1: Core Infrastructure
- I18nProvider and Context setup
- useTranslation hook implementation
- Basic translation file loading
- LocalStorage integration

### Phase 2: UI Components
- LanguageToggle component with animated switch design
- Integration with existing navbar (desktop)
- Mobile menu language toggle integration
- Loading states and error handling
- Accessibility features and keyboard navigation

### Phase 3: Content Translation
- Create comprehensive translation files
- Replace static text in all components
- Implement nested translation keys
- Add fallback mechanisms

### Phase 4: Optimization & Polish
- Font loading optimization
- Performance improvements
- Accessibility enhancements
- Testing and bug fixes
## Lang
uage Toggle Button Design Details

### Visual Design
- **Switch Style**: Modern toggle switch with sliding indicator
- **Dimensions**: 60px width × 32px height (desktop), 50px × 28px (mobile)
- **Colors**: 
  - Background: Light gray (#f1f5f9) when inactive
  - Active: Primary green (#16a34a) 
  - Indicator: White circle with subtle shadow
- **Typography**: 
  - Font size: 12px (desktop), 10px (mobile)
  - Font weight: 500 (medium)
  - Labels: "EN" and "हि" positioned on toggle

### Animation Specifications
- **Transition Duration**: 300ms ease-in-out
- **Indicator Movement**: Smooth slide from left (EN) to right (HI)
- **Color Transition**: Background color fades between states
- **Hover Effects**: Slight scale (1.05x) and shadow enhancement
- **Active State**: Brief scale down (0.95x) on click

### Responsive Behavior
- **Desktop (≥768px)**: Full toggle with visible EN/HI labels
- **Tablet (≥640px)**: Compact toggle with smaller labels
- **Mobile (<640px)**: Icon-only version with tooltip showing current language

### Integration Points
- **Desktop Navbar**: Positioned after main navigation links, before user menu
- **Mobile Menu**: Featured prominently at top of slide-out menu
- **Footer**: Optional secondary placement for easy access