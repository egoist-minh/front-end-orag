'use client';

import { Search as SearchIcon, FileText, CheckSquare, Square, Filter, ChevronRight, X } from 'lucide-react';
import { useKbStore } from '@/lib/store/kb-store';

export default function SearchPage() {
  const allDocs = [
    { id: 1, name: 'Hướng dẫn sử dụng CRM.pdf' },
    { id: 2, name: 'Báo cáo doanh thu Q1.xlsx' },
    { id: 3, name: 'Chính sách bảo mật.pdf' },
    { id: 4, name: 'Quy trình Onboarding.docx' },
  ];

  const syntheticResults = [
    {
      id: 1,
      docName: 'Hướng dẫn sử dụng CRM.pdf',
      snippet: '...Để tìm kiếm khách hàng trong hệ thống, bạn cần truy cập vào module Khách hàng từ menu chính. Sau đó, sử dụng thanh tìm kiếm nâng cao ở phía trên cùng màn hình...',
      fullChunk: 'Chương 3: Quản lý Khách hàng\n\n3.1. Tìm kiếm và Lọc dữ liệu\nĐể tìm kiếm khách hàng trong hệ thống, bạn cần truy cập vào module Khách hàng từ menu chính. Sau đó, sử dụng thanh tìm kiếm nâng cao ở phía trên cùng màn hình. Tại đây, bạn có thể lọc theo tên, số điện thoại, email, hoặc phân loại khách hàng (VIP, Thường, Tiềm năng).\n\nLưu ý: Hệ thống hỗ trợ tìm kiếm gần đúng (fuzzy search) cho tên khách hàng, nhưng yêu cầu nhập chính xác đối với số điện thoại và mã số thuế. Kết quả tìm kiếm có thể được xuất ra file Excel bằng nút "Export" ở góc trên bên phải bảng dữ liệu.',
      matchScore: 92,
      page: 'Trang 15'
    },
    {
      id: 2,
      docName: 'Chính sách bảo mật.pdf',
      snippet: '...Mọi dữ liệu tìm kiếm khách hàng và thông tin cá nhân đều phải tuân thủ nghiêm ngặt theo quy định bảo mật cấp độ 2. Chỉ có nhân sự thuộc phòng Kinh doanh và CSKH mới được phép truy xuất...',
      fullChunk: 'Điều 4: Quy định về Truy xuất Dữ liệu Khách hàng\n\nMọi dữ liệu tìm kiếm khách hàng và thông tin cá nhân đều phải tuân thủ nghiêm ngặt theo quy định bảo mật cấp độ 2. Chỉ có nhân sự thuộc phòng Kinh doanh và CSKH mới được phép truy xuất giới hạn các thông tin này phục vụ cho mục đích công việc.\n\nBất kỳ truy vấn nào vào cơ sở dữ liệu khách hàng đều được hệ thống ghi log tự động. Việc chia sẻ thông tin khách hàng ra ngoài tổ chức mà không có sự ủy quyền bằng văn bản từ Ban Giám Đốc sẽ bị coi là vi phạm nghiêm trọng và chịu chế tài kỷ luật tương ứng.',
      matchScore: 78,
      page: 'Đoạn 3.2'
    }
  ];

  const {
    searchFilterSelectedDocs: selectedDocs,
    setSearchFilterSelectedDocs: setSelectedDocs,
    searchDocQuery: docSearchQuery,
    setSearchDocQuery: setDocSearchQuery,
    searchInputValue: searchValue,
    setSearchInputValue: setSearchValue,
    hasSearched,
    setHasSearched,
    selectedChunk,
    setSelectedChunk
  } = useKbStore();

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

  return (
    <div className="flex h-full w-full overflow-hidden">
      {/* Main Search Area */}
      <div className="flex-1 flex flex-col min-w-0 relative">
        <div className="p-8 pb-4">
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight text-primary mb-2">Tìm kiếm Ngữ nghĩa</h1>
            <p className="text-on-surface-variant text-sm">Truy xuất thông tin sâu từ các tài liệu được chọn.</p>
          </div>
          
          <div className="relative max-w-3xl">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
              <SearchIcon className="w-5 h-5" />
            </div>
            <input 
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && searchValue.trim() !== '') {
                  setHasSearched(true);
                }
              }}
              placeholder="Nhập câu hỏi hoặc ngữ cảnh cần tìm (vd: tìm kiếm khách hàng)..."
              className="w-full bg-surface border border-surface-variant rounded-sm pl-12 pr-4 py-4 text-base focus:outline-none focus:border-outline focus:ring-1 focus:ring-outline transition-all shadow-sm"
            />
            <button 
              onClick={() => {
                if (searchValue.trim() !== '') setHasSearched(true);
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-surface-highest hover:bg-surface-bright text-on-background px-4 py-2 rounded-sm text-xs uppercase tracking-widest font-semibold transition-colors border border-surface-variant"
            >
              Tìm kiếm
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8 pt-4 relative">
          {!hasSearched ? (
            <div className="flex flex-col items-center justify-center h-full text-on-surface-variant relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                 <SearchIcon className="w-[400px] h-[400px]" />
              </div>
              <p className="text-sm z-10">Kết quả tìm kiếm sẽ hiển thị tại đây.</p>
              <p className="text-xs mt-2 font-mono z-10 opacity-60">AWAITING_QUERY...</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6 max-w-3xl pb-20">
              <h2 className="text-lg font-bold text-primary">Kết quả cho &quot;{searchValue}&quot;</h2>
              
              {syntheticResults.map(result => (
                <div 
                  key={result.id}
                  onClick={() => setSelectedChunk(result)}
                  className="bg-surface border border-surface-variant rounded-sm p-6 group hover:border-outline-variant transition-colors cursor-pointer shadow-sm hover:shadow"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-primary font-medium text-sm">
                      <FileText className="w-4 h-4 text-outline" /> {result.docName}
                    </div>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                    {/* Highlight keywords naively for demo */}
                    {result.snippet.split('tìm kiếm khách hàng').map((part: string, i: number, arr: string[]) => (
                      <span key={i}>
                        {part}
                        {i !== arr.length - 1 && <span className="bg-primary/20 text-primary px-1 rounded-sm">tìm kiếm khách hàng</span>}
                      </span>
                    ))}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-mono text-on-surface-variant">
                    <span className="bg-surface-highest px-2 py-1 rounded-sm text-[10px] uppercase tracking-widest border border-surface-variant/50">Độ tương thích: {result.matchScore}%</span>
                    <span>{result.page}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Full Chunk Modal */}
        {selectedChunk && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-8">
            <div className="bg-surface border border-surface-variant rounded-sm shadow-2xl w-full max-w-3xl flex flex-col max-h-full overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              <div className="px-6 py-4 border-b border-surface-variant flex items-center justify-between bg-surface-highest">
                <div className="flex flex-col">
                  <h3 className="font-bold text-lg text-primary flex items-center gap-2">
                    <FileText className="w-5 h-5 text-outline" /> {selectedChunk.docName}
                  </h3>
                  <div className="flex items-center gap-4 text-xs font-mono text-on-surface-variant mt-1.5 opacity-80">
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-sm text-[10px] uppercase tracking-widest border border-primary/20">Match Score: {selectedChunk.matchScore}%</span>
                    <span>Location: {selectedChunk.page}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedChunk(null)}
                  className="text-on-surface-variant hover:text-error transition-colors p-2 rounded-sm hover:bg-surface-high"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-8 overflow-y-auto bg-background text-sm leading-loose text-on-surface whitespace-pre-wrap font-serif">
                {selectedChunk.fullChunk.split('tìm kiếm khách hàng').map((part: string, i: number, arr: string[]) => (
                  <span key={i}>
                    {part}
                    {i !== arr.length - 1 && <strong className="bg-primary/20 text-primary px-1 rounded-sm">tìm kiếm khách hàng</strong>}
                  </span>
                ))}
              </div>
              <div className="px-6 py-4 border-t border-surface-variant flex justify-between items-center text-xs text-on-surface-variant bg-surface">
                <span className="font-mono">Chunk ID: doc_{selectedChunk.id}_chunk_042</span>
                <button 
                  onClick={() => setSelectedChunk(null)}
                  className="px-6 py-2 bg-primary text-on-primary font-semibold uppercase tracking-widest rounded-sm hover:bg-primary-container transition-colors shadow-sm"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Side Panel: Custom Context Selector */}
      <div className="w-80 border-l border-surface-variant bg-surface flex flex-col flex-shrink-0 z-10">
        <div className="p-4 border-b border-surface-variant flex items-center gap-2 text-primary">
          <Filter className="w-4 h-4 text-on-surface-variant" />
          <h3 className="font-semibold text-sm uppercase tracking-widest">Ngữ cảnh Tìm kiếm</h3>
        </div>
        
        <div className="p-4 flex flex-col gap-4">
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Chọn các tài liệu cụ thể bên dưới để giới hạn phạm vi tìm kiếm của động cơ vector.
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
            className="flex items-center gap-2 p-2 rounded-sm hover:bg-surface-high transition-colors text-xs text-on-surface-variant w-fit"
          >
            {selectedDocs.length === allDocs.length ? (
              <><CheckSquare className="w-4 h-4 text-primary" /> Bỏ chọn tất cả</>
            ) : (
              <><Square className="w-4 h-4" /> Chọn tất cả</>
            )}
          </button>
          
          <div className="flex flex-col gap-1 overflow-y-auto max-h-[400px]">
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
      </div>
    </div>
  );
}
