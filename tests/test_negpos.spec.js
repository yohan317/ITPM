const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    // Simple Sentences
    {
      tcId: 'Pos_01',
      name: 'Simple present tense statement',
      input: 'maamaa heta koLaBA enavaa kivvaa',
      expected: 'මාමා හෙට කොළඹ එනවා කිව්වා',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_02',
      name: 'Simple food request',
      input: 'mata bath kanna oonaee',
      expected: 'මට බත් කන්න ඕනෑ',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_03',
      name: 'Going somewhere statement',
      input: 'api heta pansal yanavaa.',
      expected: 'අපි හෙට පන්සල් යනවා.',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Compound Sentences
    {
      tcId: 'Pos_04',
      name: 'Two activities connected',
      input: 'mama thee bilaa sellam karanna ennam',
      expected: 'මම තේ බිලා සෙල්ලම් කරන්න එන්නම්',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_05',
      name: 'Weather condition compound',
      input: 'vaessoth nam api sellam karanna yannee naehae',
      expected: 'වැස්සොත් නම් අපි සෙල්ලම් කරන්න යන්නේ නැහැ',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'S'
    },
    
    // Complex Sentences
    {
      tcId: 'Pos_06',
      name: 'Conditional complex sentence',
      input: 'oyaa mata boruvak kiyana nisa oyaa vishvaasa naehae',
      expected: 'ඔයා මට බොරුවක් කියන නිසා ඔයා විශ්වාස නැහැ',
      category: 'Daily language usage',
      grammar: 'Complex sentence',
      length: 'S'
    },
    
    // Questions
    {
      tcId: 'Pos_07',
      name: 'Simple question about state',
      input: 'maavaa dhaekke naeththe aeyi',
      expected: 'මාවා දැක්කේ නැත්තේ ඇයි',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_08',
      name: 'Question about time',
      input: 'lesi kiyalaa kivva eka dhaen kohedha',
      expected: 'ලේසි කියලා කිව්වා එක දැන් කොහෙද',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_09',
      name: 'Polite question request',
      input: 'heta kiyalaa kiyana dhavasa aeththatama enavadha',
      expected: 'හෙට කියලා කියන දවස ඇත්තටම එනවද',
      category: 'Greeting / request / response',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    
    // Commands
    {
      tcId: 'Pos_10',
      name: 'Direct command',
      input: 'dhaen gihin naagena bath kanna',
      expected: 'දැන් ගිහින් නාගෙන බත් කන්න',
      category: 'Daily language usage',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    {
      tcId: 'Pos_11',
      name: 'Polite command',
      input: 'karuNaakaralaa gihin panthiya athugaanna',
      expected: 'කරුණාකරලා ගිහින් පන්තිය අතුගාන්න',
      category: 'Greeting / request / response',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    
    // Greetings and Responses
    {
      tcId: 'Pos_12',
      name: 'Morning greeting',
      input: 'suba raathriyak veevaa',
      expected: 'සුබ රාත්‍රියක් වේවා',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_13',
      name: 'Affirmative response',
      input: 'ov eka ehema venna ooni',
      expected: 'ඔව් එක එහෙම වෙන්න ඕනි',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Tense Variations
    {
      tcId: 'Pos_14',
      name: 'Past tense action',
      input: 'mama iiyee iskolee giyaa',
      expected: 'මම ඊයේ ඉස්කෝලේ ගියා',
      category: 'Daily language usage',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Pos_15',
      name: 'Future tense plan',
      input: 'api heta gampahata yamu',
      expected: 'අපි හෙට ගම්පහට යමු',
      category: 'Daily language usage',
      grammar: 'Future tense',
      length: 'S'
    },
    
    // Negations
    {
      tcId: 'Pos_16',
      name: 'Simple negation',
      input: 'mata epaa eeka',
      expected: 'මට එපා ඒක',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
    {
      tcId: 'Pos_17',
      name: 'Cannot statement',
      input: 'mata eeka karanna baee',
      expected: 'මට ඒක කරන්න බෑ',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
    
    // Plural and Pronouns
    {
      tcId: 'Pos_18',
      name: 'Plural pronoun usage',
      input: 'kimadha maa athahaera giye',
      expected: 'කිමද මා අතහැර ගියේ',
      category: 'Daily language usage',
      grammar: 'Plural form',
      length: 'S'
    },
    
    // Word Combinations
    {
      tcId: 'Pos_19',
      name: 'Common phrase pattern',
      input: 'poddak innako mama ennam',
      expected: 'පොඩ්ඩක් ඉන්නකො මම එන්නම්',
      category: 'Word combination / phrase pattern',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Mixed Language
    {
      tcId: 'Pos_20',
      name: 'English brand term embedded',
      input: 'mata Facebook account ekee password mathaka naee',
      expected: 'මට Facebook account එකේ password මතක නැහැ',
      category: 'Mixed Singlish + English',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_21',
      name: 'Place name preservation',
      input: 'osada katharagama giyaa',
      expected: 'ඔසඳ කතරගම ගියා',
      category: 'Names / places / common English words',
      grammar: 'Past tense',
      length: 'S'
    },
    
    // Punctuation
    {
      tcId: 'Pos_22',
      name: 'Exclamation mark handling',
      input: 'eeyi! mata oya malla evanna!',
      expected: 'එයි! මට ඔයා මල්ල එවන්න!',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Numbers and Formats
    {
      tcId: 'Pos_23',
      name: 'Currency amount',
      input: 'mata Rs.5000k oonee',
      expected: 'මට Rs.5000ක් ඕනෑ',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Medium Length
    {
      tcId: 'Pos_24',
      name: 'Medium length conversation',
      input: 'giya sathiyee thamayi mata vaeda tika ivara kara ganna puluvan vuNee',
      expected: 'ගිය සතියේ තමයි මට වැඩ ටික ඉවර කර ගන්න පුළුවන් වුණේ',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    }
  ],
  
  negative: [
    {
      tcId: 'Neg_01',
      name: 'Missing space between words',
      input: 'mamapansaleinnee',
      expected: 'මම පන්සලේ ඉන්නේ',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_02',
      name: 'Joined compound words',
      input: 'apihetakatharagaamayamu',
      expected: 'අපි හෙට කතරගම යමු',
      category: 'Typographical error handling',
      grammar: 'Future tense',
      length: 'S'
    },
    {
      tcId: 'Neg_03',
      name: 'Mixed spacing issues',
      input: 'mata     eeka  epa',
      expected: 'මට ඒක එපා',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_04',
      name: 'Joined compound words',
      input: 'api yamuhetapansal',
      expected: 'අපි යමු හෙට පන්සල',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_05',
      name: 'Informal slang phrase',
      input: 'machaang supiriyaane mee game eka',
      expected: 'මචාං සුපිරියානේ මේ ගේම් එක',
      category: 'Slang / informal language',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_06',
      name: 'Colloquial expression',
      input: 'adooo mokakkdha mee une',
      expected: 'අඩෝඕ මොකක්ක්ද මේ උනේ',
      category: 'Slang / informal language',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Neg_07',
      name: 'Mixed English with errors',
      input: 'mamaWhatsAppekagiyaa',
      expected: 'මම WhatsApp එකගියා',
      category: 'Mixed Singlish + English',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Neg_08',
      name: 'Abbreviation in sentence',
      input: 'mata ASAP eeka submit karanna oonee',
      expected: 'මට ASAP ඒක submit කරන්න ඕනෑ',
      category: 'Names / places / common English words',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_09',
      name: 'Question with spacing error',
      input: 'oyaakohedhainnee',
      expected: 'ඔයා කොහෙද ඉන්නේ',
      category: 'Typographical error handling',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Neg_10',
      name: 'Complex slang statement',
      input: 'eeyi bro eeka apita set karala denna',
      expected: 'එයි bro ඒක අපිට set කරලා දෙන්න',
      category: 'Slang / informal language',
      grammar: 'Imperative (command)',
      length: 'S'
    }
  ],
  
  ui: {
    tcId: 'Pos_UI_01',
    name: 'Real-time translation updates as typing',
    input: 'mama kaeema kanavaa',
    partialInput: 'mama kae',
    expectedFull: 'මම කෑම කනවා',
    category: 'Usability flow',
    grammar: 'Present tense',
    length: 'S'
  }
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
