import { renderToBuffer } from '@react-pdf/renderer';
import { PDFDocument } from '@/components/generator/PDFDocument';

export async function generatePDF(tool: string, type: string, formData: any, content: string) {
  try {
    const pdfBuffer = await renderToBuffer(
      PDFDocument({
        tool,
        type,
        formData,
        generatedContent: content,
      })
    );
    return pdfBuffer;
  } catch (error) {
    console.error('PDF generation error:', error);
    throw error;
  }
}