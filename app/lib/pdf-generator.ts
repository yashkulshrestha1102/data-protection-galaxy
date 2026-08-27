import { renderToString } from '@react-pdf/renderer';
import { PDFDocument } from '@/components/generator/PDFDocument';

export async function generatePDF(tool: string, type: string, formData: any, content: string) {
  try {
    // ===== RENDER TO STRING =====
    const pdfString = await renderToString(
      PDFDocument({
        tool,
        type,
        formData,
        generatedContent: content,
      })
    );
    
    // ===== CONVERT TO BUFFER =====
    const pdfBuffer = Buffer.from(pdfString, 'utf-8');
    return pdfBuffer;
  } catch (error) {
    console.error('PDF generation error:', error);
    throw error;
  }
}