'use client';

import { useState } from 'react';
import { useKbStore } from '@/lib/store/kb-store';
import { UploadCloud, CheckCircle2, AlertCircle, FileText, Database, Cpu, Loader2, X } from 'lucide-react';

export default function KBDocumentsStatus() {
  const { docsActiveTab: activeTab, setDocsActiveTab: setActiveTab, docType, setDocType } = useKbStore();
  const [isUploading, setIsUploading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col h-full bg-background overflow-y-auto p-10 relative">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary tracking-tight mb-2">Tài liệu & Trạng thái</h1>
        <p className="text-on-surface-variant text-sm">Quản lý và tải lên các tệp dữ liệu vào cơ sở tri thức.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column: Upload & Logs */}
        <div className="w-full lg:w-1/4 flex flex-col gap-6 min-w-[300px]">
          {/* Upload Box */}
          <div className="border border-dashed border-surface-variant rounded-md p-8 flex flex-col items-center justify-center bg-surface relative group">
            <div className="w-14 h-14 bg-surface-highest rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <UploadCloud className="w-6 h-6 text-on-surface-variant" />
            </div>
            <h3 className="text-base font-bold text-primary mb-2">Kéo & Thả tệp vào đây</h3>
            <p className="text-xs text-on-surface-variant text-center mb-6 max-w-[200px] leading-relaxed">
              Hỗ trợ PDF, DOCX, TXT. Kích thước tối đa 50MB mỗi tệp.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              disabled={isUploading}
              className="bg-surface-highest hover:bg-white/10 text-primary text-xs font-semibold px-6 py-2.5 rounded-sm transition-colors border border-surface-variant shadow-sm w-full uppercase tracking-widest"
            >
              {isUploading ? 'Đang tải...' : 'Chọn tệp'}
            </button>
          </div>

          {/* Logs */}
          <div className="border border-surface-variant rounded-md p-5 bg-surface">
            <h4 className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-widest mb-4">Luồng nhập liệu</h4>
            <div className="flex flex-col gap-3 font-mono text-[11px] text-on-surface-variant">
              <div className="flex items-start gap-3">
                <span className="opacity-50 flex-shrink-0">[10:04:12]</span>
                <span>Chunking DOC-2...</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="opacity-50 flex-shrink-0">[10:04:14]</span>
                <span>Generating embeddings...</span>
              </div>
              <div className="flex items-start gap-3 justify-between">
                <div className="flex items-start gap-3">
                  <span className="opacity-50 flex-shrink-0">[10:04:15]</span>
                  <span>Writing to vector store...</span>
                </div>
                <Loader2 className="w-3 h-3 animate-spin opacity-50 flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column: Document List */}
        <div className="w-full lg:w-2/4 flex flex-col flex-1 border border-surface-variant rounded-md bg-surface p-6">
          {/* Tabs */}
          <div className="flex items-center gap-8 border-b border-surface-variant mb-6 pb-4">
            <button 
              onClick={() => setActiveTab('uploaded')}
              className={`text-xs font-semibold uppercase tracking-widest pb-4 -mb-[17px] transition-colors ${
                activeTab === 'uploaded' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-on-surface-variant hover:text-primary border-b-2 border-transparent'
              }`}
            >
              Đã tải lên (2)
            </button>
            <button 
              onClick={() => setActiveTab('processing')}
              className={`text-xs font-semibold uppercase tracking-widest pb-4 -mb-[17px] transition-colors ${
                activeTab === 'processing' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-on-surface-variant hover:text-primary border-b-2 border-transparent'
              }`}
            >
              Đang xử lý (1)
            </button>
          </div>

          {/* List */}
          <div className="flex flex-col">
            {activeTab === 'uploaded' ? (
              <>
                <div className="flex items-center justify-between py-4 border-b border-surface-variant group">
                  <div className="flex items-start gap-4">
                    <FileText className="w-5 h-5 text-on-surface-variant mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium text-primary mb-1">Quy chế công ty 2024.pdf</h4>
                      <div className="text-xs font-mono text-on-surface-variant">2.4 MB</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-500">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-[10px] font-semibold uppercase tracking-widest mt-0.5">Đã xong</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-surface-variant group">
                  <div className="flex items-start gap-4">
                    <FileText className="w-5 h-5 text-on-surface-variant mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium text-primary mb-1">Báo cáo tài chính Q1.xlsx</h4>
                      <div className="text-xs font-mono text-on-surface-variant">4.5 MB</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-error">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-[10px] font-semibold uppercase tracking-widest mt-0.5">Lỗi</span>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-between py-4 border-b border-surface-variant group">
                <div className="flex items-start gap-4">
                  <FileText className="w-5 h-5 text-on-surface-variant mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-primary mb-1">Chính sách bảo mật.pdf</h4>
                    <div className="text-xs font-mono text-on-surface-variant">5.6 MB</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-[10px] font-semibold uppercase tracking-widest mt-0.5">Đang xử lý</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Stats & Models */}
        <div className="w-full lg:w-1/4 flex flex-col gap-6 min-w-[280px]">
          {/* Stats Box */}
          <div className="border border-surface-variant rounded-md p-6 bg-surface">
            <h4 className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-widest mb-6">
              <Database className="w-3.5 h-3.5" />
              Thống kê dữ liệu
            </h4>
            
            <div className="mb-8">
              <div className="text-[10px] text-on-surface-variant uppercase font-semibold tracking-wider mb-2">Dung lượng sử dụng</div>
              <div className="text-xl font-mono font-medium text-primary">
                8.0 <span className="text-sm text-on-surface-variant">MB / 1.0 GB</span>
              </div>
              <div className="w-full bg-surface-highest h-1 rounded-full mt-4 overflow-hidden">
                <div className="bg-primary h-full w-[2%]" />
              </div>
            </div>

            <div>
              <div className="text-[10px] text-on-surface-variant uppercase font-semibold tracking-wider mb-2">Tổng tài liệu</div>
              <div className="text-2xl font-mono font-medium text-primary">3</div>
            </div>
          </div>

          {/* AI Models Box */}
          <div className="border border-surface-variant rounded-md p-6 bg-surface">
            <h4 className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-widest mb-6">
              <Cpu className="w-3.5 h-3.5" />
              Mô hình AI
            </h4>
            
            <div className="mb-6">
              <div className="text-[10px] text-on-surface-variant uppercase font-semibold tracking-wider mb-2">LLM Model</div>
              <div className="text-sm font-medium text-primary">Gemini 1.5 Pro</div>
            </div>

            <div>
              <div className="text-[10px] text-on-surface-variant uppercase font-semibold tracking-wider mb-2">Embedding Model</div>
              <div className="text-sm font-medium text-primary">Text-Embedding-004</div>
            </div>
          </div>
        </div>

      </div>

      {/* Upload Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-background/90 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1C1C1E] border border-surface-variant rounded-md w-full max-w-lg shadow-2xl flex flex-col">
            <div className="p-5 border-b border-surface-variant flex items-center justify-between">
              <h2 className="text-base font-bold text-primary">Tải tài liệu lên</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-on-surface-variant hover:text-primary transition-colors">
                <X className="w-5 h-5"/>
              </button>
            </div>

            <div className="p-6 flex flex-col gap-8">
              <div>
                <h3 className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-widest mb-3">1. CHỌN TỆP TỪ THIẾT BỊ</h3>
                <input 
                  type="file" 
                  className="block w-full text-sm text-on-surface-variant 
                             file:mr-4 file:py-2.5 file:px-4 file:rounded-sm file:border-0 
                             file:text-xs file:font-semibold file:uppercase file:tracking-widest
                             file:bg-surface-high file:text-primary hover:file:bg-surface-highest 
                             cursor-pointer transition-colors" 
                />
              </div>

              <div>
                <h3 className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-widest mb-3">2. PHÂN LOẠI TÀI LIỆU</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'pdf-text', label: 'PDF (Text)', desc: 'Văn bản có thể copy' },
                    { id: 'pdf-scan', label: 'PDF (Scan)', desc: 'Sử dụng OCR' },
                    { id: 'txt-md', label: 'TXT / MD', desc: 'Văn bản thuần túy' },
                    { id: 'other', label: 'Khác', desc: 'DOCX, Excel, v.v.' }
                  ].map(type => (
                    <button 
                      key={type.id} 
                      onClick={() => setDocType(type.id)} 
                      className={`text-left p-4 border rounded-sm transition-colors block w-full
                                 ${docType === type.id 
                                   ? 'border-primary bg-primary/5' 
                                   : 'border-surface-variant bg-surface hover:bg-surface-high'}`}
                    >
                      <div className={`text-sm font-semibold mb-1 ${docType === type.id ? 'text-primary' : 'text-primary'}`}>{type.label}</div>
                      <div className="text-xs text-on-surface-variant">{type.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-5 bg-surface-highest border-t border-surface-variant flex items-center justify-end gap-3 rounded-b-md">
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="px-5 py-2.5 text-xs font-semibold text-on-surface-variant hover:text-primary tracking-widest uppercase transition-colors"
              >
                Hủy
              </button>
              <button 
                onClick={() => { 
                  setIsUploading(true); 
                  setIsModalOpen(false); 
                  setTimeout(() => setIsUploading(false), 2000); 
                }} 
                className="px-5 py-2.5 text-[11px] font-semibold bg-white text-black rounded-sm hover:bg-gray-200 tracking-widest uppercase transition-colors shadow-sm"
              >
                Xác nhận tài lên
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
