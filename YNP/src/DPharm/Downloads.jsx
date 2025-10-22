import React from 'react';
import { Download, BookOpen, DollarSign } from 'lucide-react';

export default function PDFDownloadButtons() {
  const downloadSyllabus = () => {
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjQKJeLjz9MKMyAwIG9iago8PC9UeXBlL1BhZ2UvUGFyZW50IDIgMCBSL1Jlc291cmNlczw8L0ZvbnQ8PC9GMSA1IDAgUj4+Pj4vTWVkaWFCb3hbMCAwIDYxMiA3OTJdL0NvbnRlbnRzIDQgMCBSPj4KZW5kb2JqCjQgMCBvYmoKPDwvTGVuZ3RoIDQ0Pj4Kc3RyZWFtCkJUCi9GMSA0OCBUZgoxMDAgNzAwIFRkCihTeWxsYWJ1cykgVGoKRVQKZW5kc3RyZWFtCmVuZG9iago1IDAgb2JqCjw8L1R5cGUvRm9udC9TdWJ0eXBlL1R5cGUxL0Jhc2VGb250L1RpbWVzLVJvbWFuPj4KZW5kb2JqCjIgMCBvYmoKPDwvVHlwZS9QYWdlcy9Db3VudCAxL0tpZHNbMyAwIFJdPj4KZW5kb2JqCjEgMCBvYmoKPDwvVHlwZS9DYXRhbG9nL1BhZ2VzIDIgMCBSPj4KZW5kb2JqCnRyYWlsZXIKPDwvU2l6ZSA2L1Jvb3QgMSAwIFI+PgpzdGFydHhyZWYKNDkwCiUlRU9G';
    link.download = 'ynp_bpharm_syllabus.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadFeeStructure = () => {
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjQKJeLjz9MKMyAwIG9iago8PC9UeXBlL1BhZ2UvUGFyZW50IDIgMCBSL1Jlc291cmNlczw8L0ZvbnQ8PC9GMSA1IDAgUj4+Pj4vTWVkaWFCb3hbMCAwIDYxMiA3OTJdL0NvbnRlbnRzIDQgMCBSPj4KZW5kb2JqCjQgMCBvYmoKPDwvTGVuZ3RoIDUyPj4Kc3RyZWFtCkJUCi9GMSA0OCBUZgoxMDAgNzAwIFRkCihGZWUgU3RydWN0dXJlKSBUagpFVAplbmRzdHJlYW0KZW5kb2JqCjUgMCBvYmoKPDwvVHlwZS9Gb250L1N1YnR5cGUvVHlwZTEvQmFzZUZvbnQvVGltZXMtUm9tYW4+PgplbmRvYmoKMiAwIG9iago8PC9UeXBlL1BhZ2VzL0NvdW50IDEvS2lkc1szIDAgUl0+PgplbmRvYmoKMSAwIG9iago8PC9UeXBlL0NhdGFsb2cvUGFnZXMgMiAwIFI+PgplbmRvYmoKdHJhaWxlcgo8PC9TaXplIDYvUm9vdCAxIDAgUj4+CnN0YXJ0eHJlZgo1MDYKJSVFT0Y=';
    link.download = 'ynp_fee_structure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-fit bg-white flex items-center justify-center p-8">
      <div className="bg-white rounded-3xl max-w-6xl w-full px-6 md:px-12 py-14">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-semibold text-gray-900 mb-3">
            Official Academic Resources
          </h1>
          <p className="text-gray-600 text-lg">
            Stay informed with accredited academic documents from YNP College of Pharmacy trusted, transparent, and easily accessible.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  {/* Syllabus Download */}
                  <button
                    onClick={downloadSyllabus}
                    className="flex-1 group relative overflow-hidden bg-gray-100   px-10 py-10 rounded-3xl font-medium text-2xl transition-all duration-300 ease-in-out shadow-sm"
                  >
                    <div className="relative flex items-center justify-center gap-3">
                    
                      <span>D.Pharm Syllabus</span>
                      <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                    </div>
                  </button>
        
                  {/* Fee Structure Download */}
                  <button
                    onClick={downloadFeeStructure}
                    className="flex-1 group relative overflow-hidden bg-gray-100  px-10 py-10 rounded-3xl font-medium text-2xl transition-all duration-300 ease-in-out shadow-sm"
                  >
                    <div className="relative flex items-center justify-center gap-3">
                    
                      <span>Annual Fee Structure</span>
                      <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                    </div>
                  </button>
                </div>

        <div className="mt-10 text-center text-sm text-gray-500">
          <p>
            These downloadable PDFs contain PCI-approved syllabi and transparent annual fee details for both the D.Pharm programs.
          </p>
          <p className="mt-2 italic">
            Empowering learners through open access to information a cornerstone of YNP’s mission.
          </p>
        </div>
      </div>
    </div>
  );
}
