'use client';

import { useState } from 'react';
import { Send, Terminal, Link2, ChevronRight, FileText, Settings2, FileQuestion, BookOpen, CheckSquare, Square, Search as SearchIcon, CheckCircle2, Play } from 'lucide-react';
import { useKbStore } from '@/lib/store/kb-store';

export default function ChatPage() {
  const {
    chatActiveTab: activeTab,
    setChatActiveTab: setActiveTab,
    chatFilterSelectedDocs: selectedDocs,
    setChatFilterSelectedDocs: setSelectedDocs,
    chatDocQuery: docSearchQuery,
    setChatDocQuery: setDocSearchQuery,
    systemPrompt,
    setSystemPrompt,
    quizStarted,
    setQuizStarted,
    quizSubmitted,
    setQuizSubmitted,
    quizAnswers: selectedAnswers,
    quizAnswersUpdater
  } = useKbStore();

  const setSelectedAnswers = quizAnswersUpdater;

  // Context State
  const allDocs = [
    { id: 1, name: 'Hướng dẫn sử dụng CRM.pdf' },
    { id: 2, name: 'Báo cáo doanh thu Q1.xlsx' },
    { id: 3, name: 'Chính sách bảo mật.pdf' },
    { id: 4, name: 'Quy trình Onboarding.docx' },
  ];

  const toggleDoc = (id: number) => {
    if (selectedDocs.includes(id)) {
      setSelectedDocs(selectedDocs.filter(d => d !== id));
    } else {
      setSelectedDocs([...selectedDocs, id]);
    }
  };

  const handleSelectAll = () => {
    if (selectedDocs.length === allDocs.length) {
      setSelectedDocs([]);
    } else {
      setSelectedDocs(allDocs.map(d => d.id));
    }
  };

  const filteredDocs = allDocs.filter(doc => 
    doc.name.toLowerCase().includes(docSearchQuery.toLowerCase())
  );

  // Prompt State
  
  // Quiz State
  
  const handleAnswerSelect = (qId: number, aId: number) => {
    if (!quizSubmitted) {
      setSelectedAnswers(prev => ({...prev, [qId]: aId}));
    }
  };

  return (
    <div className="flex h-full w-full overflow-hidden">
      {/* Left Chat Area */}
      <div className="flex-1 flex flex-col min-w-0 border-r border-surface-variant relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-surface-highest/10 via-background to-background pointer-events-none"></div>
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 z-10">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-sm bg-primary text-on-primary flex items-center justify-center flex-shrink-0 mt-1">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="bg-surface border border-surface-variant rounded-sm p-4 text-sm text-on-background flex-1 text-left leading-relaxed">
              Chào bạn. Tôi là LLM Agent được kết nối với cơ sở tri thức này.
              <br/><br/>
              Bạn có thể hỏi tôi bất kỳ thông tin nào và tôi sẽ tổng hợp câu trả lời dựa trên nội dung thực tế của các tài liệu. Các trích dẫn sẽ được hiển thị ở bảng bên phải.
            </div>
          </div>
          
          {/* User Message */}
          <div className="flex gap-4 flex-row-reverse">
            <div className="w-8 h-8 rounded-sm bg-surface-highest border border-surface-variant flex items-center justify-center flex-shrink-0 mt-1 font-mono text-xs text-primary">
              U
            </div>
            <div className="bg-surface-highest border border-surface-variant rounded-sm p-4 text-sm text-on-background max-w-xl leading-relaxed">
              Tóm tắt quy trình hoàn tiền theo chính sách mới nhất.
            </div>
          </div>

          {/* AI Response Example with Citations */}
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-sm bg-primary text-on-primary flex items-center justify-center flex-shrink-0 mt-1">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="bg-surface border border-surface-variant rounded-sm p-4 text-sm text-on-background flex-1 text-left leading-relaxed">
              Theo tài liệu quy định nội bộ, quy trình hoàn tiền bao gồm 3 bước chính: <br/><br/>
              1. Khách hàng gửi yêu cầu hoàn tiền qua cổng hỗ trợ trực tuyến kèm theo hóa đơn hợp lệ. <button className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-surface-highest border border-surface-variant text-[10px] text-on-surface-variant hover:text-primary transition-colors hover:border-outline ml-1 align-middle">[1]</button><br/>
              2. Bộ phận Dịch vụ Khách hàng (CS) có 24 giờ để xác minh tính chính xác của hóa đơn và nguyên nhân hoàn tiền. <button className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-surface-highest border border-surface-variant text-[10px] text-on-surface-variant hover:text-primary transition-colors hover:border-outline ml-1 align-middle">[2]</button><br/>
              3. Kế toán tiến hành chi trả trong vòng 3-5 ngày làm việc và gửi thông báo xác nhận. <button className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-surface-highest border border-surface-variant text-[10px] text-on-surface-variant hover:text-primary transition-colors hover:border-outline ml-1 align-middle">[3]</button>
            </div>
          </div>

        </div>

        <div className="p-4 bg-background z-10 border-t border-surface-variant">
          <div className="max-w-4xl mx-auto flex items-center gap-2 relative">
            <input 
              type="text" 
              placeholder="Nhập truy vấn để bắt đầu phân tích..." 
              className="w-full bg-surface border border-surface-variant rounded-sm pl-4 pr-12 py-4 text-sm focus:outline-none focus:border-outline focus:ring-1 focus:ring-outline transition-all shadow-sm"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-surface-highest text-on-background hover:bg-primary hover:text-on-primary rounded-sm transition-colors border border-surface-variant hover:border-transparent">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Source/References Area (NotebookLM style) */}
      <div className="w-[450px] bg-surface flex flex-col flex-shrink-0 collapse-panel border-l border-surface-variant">
        
        {/* Top Tabs */}
        <div className="flex items-center justify-between p-2 border-b border-surface-variant bg-surface-highest overflow-x-auto">
           <div className="flex gap-1 min-w-[max-content]">
              <button 
                 onClick={() => setActiveTab('citations')} 
                 className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-widest transition-colors ${activeTab === 'citations' ? 'bg-background text-primary border border-surface-variant shadow-sm' : 'text-on-surface-variant hover:text-primary'}`}
              >
                 <Link2 className="w-3.5 h-3.5" /> Nguồn
              </button>
              <button 
                 onClick={() => setActiveTab('context')} 
                 className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-widest transition-colors ${activeTab === 'context' ? 'bg-background text-primary border border-surface-variant shadow-sm' : 'text-on-surface-variant hover:text-primary'}`}
              >
                 <BookOpen className="w-3.5 h-3.5" /> Ngữ cảnh
              </button>
              <button 
                 onClick={() => setActiveTab('prompt')} 
                 className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-widest transition-colors ${activeTab === 'prompt' ? 'bg-background text-primary border border-surface-variant shadow-sm' : 'text-on-surface-variant hover:text-primary'}`}
              >
                 <Settings2 className="w-3.5 h-3.5" /> Cấu hình
              </button>
              <button 
                 onClick={() => setActiveTab('quiz')} 
                 className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-widest transition-colors ${activeTab === 'quiz' ? 'bg-background text-primary border border-surface-variant shadow-sm' : 'text-on-surface-variant hover:text-primary'}`}
              >
                 <FileQuestion className="w-3.5 h-3.5" /> Quiz
              </button>
           </div>
        </div>
        
        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === 'citations' && (
            <div className="p-4 flex flex-col gap-4">
               {/* Source 1 */}
               <div className="border border-surface-variant bg-background rounded-sm p-4 text-sm group hover:border-outline-variant transition-colors">
                  <div className="flex justify-between items-start mb-2">
                     <div className="flex items-center gap-2 font-medium text-primary">
                        <span className="w-5 h-5 rounded-full bg-surface-highest border border-surface-variant flex items-center justify-center text-[10px] text-on-surface-variant">1</span>
                        Chính sách hoàn tiền 2024.pdf
                     </div>
                     <button className="text-on-surface-variant hover:text-primary">
                       <ChevronRight className="w-4 h-4" />
                     </button>
                  </div>
                  <p className="text-on-surface-variant text-xs leading-relaxed line-clamp-4 font-serif">
                    &quot;...Yêu cầu hoàn trả chỉ được chấp thuận nếu khách hàng cung cấp qua cổng thông tin trực tuyến tại địa chỉ support.company.com/refund, có đính kèm tập tin hóa đơn (hóa đơn VAT hoặc biên lai mua hàng hợp lệ) trong vòng 14 ngày kể từ ngày mua hàng...&quot;
                  </p>
                  <div className="mt-3 text-[10px] font-mono text-on-surface-variant uppercase flex gap-4">
                     <span>Trang 12</span>
                     <span>Độ tin cậy: 98%</span>
                  </div>
               </div>

               {/* Source 2 */}
               <div className="border border-surface-variant bg-background rounded-sm p-4 text-sm group hover:border-outline-variant transition-colors">
                  <div className="flex justify-between items-start mb-2">
                     <div className="flex items-center gap-2 font-medium text-primary">
                        <span className="w-5 h-5 rounded-full bg-surface-highest border border-surface-variant flex items-center justify-center text-[10px] text-on-surface-variant">2</span>
                        Sổ tay Nhân viên CS.docx
                     </div>
                     <button className="text-on-surface-variant hover:text-primary">
                       <ChevronRight className="w-4 h-4" />
                     </button>
                  </div>
                  <p className="text-on-surface-variant text-xs leading-relaxed line-clamp-4 font-serif">
                    &quot;...Phạm vi trách nhiệm của chuyên viên CS trong quy trình xử lý khiếu nại và hoàn tiền: Trong thời hạn tối đa 24 giờ sau khi hệ thống ghi nhận ticket hợp lệ, chuyên viên phải thẩm định thông tin và đính kèm báo cáo nội bộ lên hệ thống kế toán...&quot;
                  </p>
                  <div className="mt-3 text-[10px] font-mono text-on-surface-variant uppercase flex gap-4">
                     <span>Đoạn 4.2</span>
                     <span>Độ tin cậy: 94%</span>
                  </div>
               </div>
            </div>
          )}

          {activeTab === 'context' && (
            <div className="p-4 flex flex-col gap-4">
              <p className="text-xs text-on-surface-variant leading-relaxed mb-2">
                Ai sẽ chỉ phân tích các tài liệu được kích hoạt dưới đây.
              </p>
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
                <input 
                  type="text"
                  placeholder="Lọc tài liệu..."
                  value={docSearchQuery}
                  onChange={(e) => setDocSearchQuery(e.target.value)}
                  className="w-full bg-background border border-surface-variant rounded-sm pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-outline focus:ring-1 focus:ring-outline transition-all"
                />
              </div>
              <button 
                onClick={handleSelectAll}
                className="flex items-center gap-2 p-2 rounded-sm hover:bg-surface-high transition-colors text-xs font-semibold uppercase tracking-widest text-on-surface-variant w-fit"
              >
                {selectedDocs.length === allDocs.length ? (
                  <><CheckSquare className="w-4 h-4 text-primary" /> Bỏ chọn tất cả</>
                ) : (
                  <><Square className="w-4 h-4" /> Chọn tất cả</>
                )}
              </button>
              <div className="flex flex-col gap-1 mt-2">
                {filteredDocs.length === 0 ? (
                  <div className="text-xs text-on-surface-variant p-2 text-center">Không tìm thấy tài liệu nào</div>
                ) : (
                  filteredDocs.map(doc => {
                    const isSelected = selectedDocs.includes(doc.id);
                    return (
                      <button 
                        key={doc.id}
                        onClick={() => toggleDoc(doc.id)}
                        className={`flex items-start gap-3 p-3 rounded-sm transition-colors text-left ${isSelected ? 'bg-surface-highest' : 'hover:bg-surface-high'}`}
                      >
                        <div className={`mt-0.5 flex-shrink-0 ${isSelected ? 'text-primary' : 'text-on-surface-variant'}`}>
                          {isSelected ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4 opacity-50" />}
                        </div>
                        <div className="flex items-center gap-2 text-sm overflow-hidden">
                          <FileText className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-on-surface' : 'text-on-surface-variant opacity-70'}`} />
                          <span className={`truncate ${isSelected ? 'text-primary font-medium' : 'text-on-surface-variant'}`}>
                            {doc.name}
                          </span>
                        </div>
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          )}

          {activeTab === 'prompt' && (
            <div className="p-4 flex flex-col gap-4">
               <div className="flex flex-col gap-2">
                 <label className="text-xs font-semibold uppercase tracking-widest text-primary flex items-center justify-between">
                   System Prompt
                   <span className="text-[10px] text-on-surface-variant">Lưu tự động</span>
                 </label>
                 <textarea
                   className="w-full h-[300px] bg-background border border-surface-variant p-3 text-sm rounded-sm focus:outline-none focus:border-outline focus:ring-1 focus:ring-outline transition-all resize-none text-on-surface-variant font-mono leading-relaxed"
                   value={systemPrompt}
                   onChange={(e) => setSystemPrompt(e.target.value)}
                 />
                 <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                   System prompt ảnh hưởng đến cách AI phản hồi. Hãy mô tả vai trò, giọng điệu, và các nguyên tắc trả lời. Có thể dùng markdown.
                 </p>
               </div>
            </div>
          )}

          {activeTab === 'quiz' && (
            <div className="p-4 flex flex-col h-full">
              {!quizStarted ? (
                <div className="flex flex-col items-center justify-center h-full text-center p-6 bg-background border border-surface-variant bg-[url('https://picsum.photos/seed/orag-tech/500/500')] bg-cover bg-center rounded-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-background/90 backdrop-blur-sm z-0"></div>
                  <div className="z-10 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-surface-highest flex items-center justify-center text-primary mb-4 border border-surface-variant shadow-lg">
                      <FileQuestion className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-lg text-primary mb-2">Sinh Quiz tự động</h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed max-w-[250px] mb-6">
                      AI sẽ tự động đọc các tài liệu bạn đã chọn và sinh ra các câu hỏi trắc nghiệm để kiểm tra kiến thức của bạn.
                    </p>
                    <button 
                      onClick={() => setQuizStarted(true)}
                      className="flex items-center gap-2 bg-primary hover:bg-primary-container text-on-primary text-xs uppercase tracking-widest font-semibold px-6 py-3 rounded-sm transition-colors shadow-sm"
                    >
                      <Play className="w-4 h-4" /> Bắt đầu tạo Quiz
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-6 w-full">
                  <div className="flex items-center justify-between pb-4 border-b border-surface-variant">
                    <h3 className="font-bold text-sm text-primary uppercase tracking-widest">Kiểm tra kiến thức</h3>
                    {quizSubmitted && <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-sm border border-emerald-500/30">Điểm: 10/10 (100%)</span>}
                  </div>
                  
                  {/* Fake UI Quiz form */}
                  <div className="flex flex-col gap-4">
                    <div className="bg-background border border-surface-variant rounded-sm p-4">
                      <p className="text-sm text-primary font-medium mb-4 leading-relaxed">
                        1. Theo chính sách hoàn tiền, Phòng Kế toán cần bao nhiêu ngày để thực hiện chi trả?
                      </p>
                      <div className="flex flex-col gap-2">
                        {[
                          { id: 1, text: '1-2 ngày làm việc', correct: false },
                          { id: 2, text: '3-5 ngày làm việc', correct: true },
                          { id: 3, text: '7 ngày làm việc', correct: false },
                          { id: 4, text: 'Trông vòng 24 giờ', correct: false }
                        ].map(opt => (
                          <button 
                            key={opt.id}
                            onClick={() => handleAnswerSelect(1, opt.id)}
                            className={`flex items-start gap-3 p-3 border rounded-sm text-left text-sm transition-colors
                               ${quizSubmitted 
                                  ? (opt.correct ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-300' 
                                      : (selectedAnswers[1] === opt.id ? 'bg-error/10 border-error/50 text-error' : 'border-surface-variant text-on-surface-variant opacity-50'))
                                  : (selectedAnswers[1] === opt.id ? 'bg-surface-high border-outline-variant text-primary' : 'bg-surface border-surface-variant text-on-surface-variant hover:bg-surface-highest')}
                            `}
                          >
                            <div className="mt-0.5 flex-shrink-0">
                               {quizSubmitted && opt.correct ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 
                                : <div className={`w-4 h-4 rounded-full border ${selectedAnswers[1] === opt.id && !quizSubmitted ? 'border-primary bg-primary' : 'border-surface-variant'}`} />
                               }
                            </div>
                            <span className="leading-snug">{opt.text}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {!quizSubmitted ? (
                       <button 
                         onClick={() => setQuizSubmitted(true)}
                         disabled={!selectedAnswers[1]}
                         className={`w-full py-3 rounded-sm text-xs font-semibold uppercase tracking-widest shadow-sm transition-colors mt-2 ${selectedAnswers[1] ? 'bg-primary text-on-primary hover:bg-primary-container' : 'bg-surface-highest text-on-surface-variant cursor-not-allowed opacity-50'}`}
                       >
                         Nộp bài
                       </button>
                    ) : (
                       <button 
                         onClick={() => {
                           setQuizStarted(false);
                           setQuizSubmitted(false);
                           setSelectedAnswers({});
                         }}
                         className="w-full py-3 rounded-sm text-xs font-semibold uppercase tracking-widest shadow-sm transition-colors mt-2 bg-surface-highest text-on-background border border-surface-variant hover:bg-surface-high"
                       >
                         Tạo Quiz mới
                       </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

