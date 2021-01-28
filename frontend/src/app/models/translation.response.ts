export interface TranslationResponse {
  data: {
    translations: Translations[];
  };
}

interface Translations {
  translatedText: string;
}
