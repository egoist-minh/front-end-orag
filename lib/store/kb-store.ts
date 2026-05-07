import { create } from 'zustand';

interface KbStoreState {
  // Docs Tab State
  docsActiveTab: string;
  setDocsActiveTab: (tab: string) => void;
  docType: string;
  setDocType: (type: string) => void;

  // Search Tab State
  searchInputValue: string;
  setSearchInputValue: (val: string) => void;
  hasSearched: boolean;
  setHasSearched: (val: boolean) => void;
  selectedChunk: any | null;
  setSelectedChunk: (chunk: any | null) => void;
  searchFilterSelectedDocs: number[];
  setSearchFilterSelectedDocs: (docs: number[]) => void;
  searchDocQuery: string;
  setSearchDocQuery: (q: string) => void;

  // Chat Tab State
  chatActiveTab: 'citations' | 'context' | 'prompt' | 'quiz';
  setChatActiveTab: (tab: 'citations' | 'context' | 'prompt' | 'quiz') => void;
  chatFilterSelectedDocs: number[];
  setChatFilterSelectedDocs: (docs: number[]) => void;
  chatDocQuery: string;
  setChatDocQuery: (q: string) => void;
  systemPrompt: string;
  setSystemPrompt: (prompt: string) => void;
  quizStarted: boolean;
  setQuizStarted: (started: boolean) => void;
  quizSubmitted: boolean;
  setQuizSubmitted: (submitted: boolean) => void;
  quizAnswers: Record<number, number>;
  setQuizAnswers: (answers: Record<number, number>) => void;
  quizAnswersUpdater: (update: Record<number, number> | ((prev: Record<number, number>) => Record<number, number>)) => void;
}

export const useKbStore = create<KbStoreState>((set) => ({
  // Docs Tab State
  docsActiveTab: 'uploaded',
  setDocsActiveTab: (tab) => set({ docsActiveTab: tab }),
  docType: 'pdf-text',
  setDocType: (type) => set({ docType: type }),

  // Search Tab State
  searchInputValue: '',
  setSearchInputValue: (val) => set({ searchInputValue: val }),
  hasSearched: false,
  setHasSearched: (val) => set({ hasSearched: val }),
  selectedChunk: null,
  setSelectedChunk: (chunk) => set({ selectedChunk: chunk }),
  searchFilterSelectedDocs: [1, 3],
  setSearchFilterSelectedDocs: (docs) => set({ searchFilterSelectedDocs: docs }),
  searchDocQuery: '',
  setSearchDocQuery: (q) => set({ searchDocQuery: q }),

  // Chat Tab State
  chatActiveTab: 'citations',
  setChatActiveTab: (tab) => set({ chatActiveTab: tab }),
  chatFilterSelectedDocs: [1, 3],
  setChatFilterSelectedDocs: (docs) => set({ chatFilterSelectedDocs: docs }),
  chatDocQuery: '',
  setChatDocQuery: (q) => set({ chatDocQuery: q }),
  systemPrompt: 'Bạn là trung tâm phân tích tài liệu chuyên nghiệp của OrAG.\n\nHướng dẫn cốt lõi:\n1. Luôn ưu tiên dùng thông tin từ tài liệu đính kèm.\n2. Trích dẫn nguồn chi tiết (Tên tài liệu, trang/đoạn).\n3. Nếu thông tin không có trong tài liệu, hãy thành thật trả lời là không tìm thấy, không được bịa đặt.\n4. Trả lời súc tích, định dạng dễ đọc.',
  setSystemPrompt: (prompt) => set({ systemPrompt: prompt }),
  quizStarted: false,
  setQuizStarted: (started) => set({ quizStarted: started }),
  quizSubmitted: false,
  setQuizSubmitted: (submitted) => set({ quizSubmitted: submitted }),
  quizAnswers: {},
  setQuizAnswers: (answers) => set({ quizAnswers: answers }),
  quizAnswersUpdater: (update) => set((state) => ({ 
    quizAnswers: typeof update === 'function' ? update(state.quizAnswers) : update 
  }))
}));
