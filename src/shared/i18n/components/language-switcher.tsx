import { useTranslation } from '..'

interface Language {
    code: string
    name: string
    flag: string
}

const SUPPORTED_LANGUAGES: Language[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    // Add more languages as they become available
    // { code: 'fr', name: 'Français', flag: '🇫🇷' },
    // { code: 'es', name: 'Español', flag: '🇪🇸' },
]

interface LanguageSwitcherProps {
    className?: string
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
    const { t } = useTranslation()
    // const currentLanguage = 'en' // TODO: Get from context

    return (
        <div className={className}>
            <select
                className="bg-transparent border border-gray-700 rounded-md px-2 py-1 text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                // onChange={(e) => setLanguage(e.target.value)}
                // value={currentLanguage}
                disabled // Remove when implementing language switching
            >
                {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.flag} {lang.name}
                    </option>
                ))}
            </select>
        </div>
    )
}