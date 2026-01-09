import html2pdf from 'html2pdf.js';
import { AnalyticsReport } from '../features/analytics/types';

interface PDFExportOptions {
	margin: number;
	filename: string;
	image: { type: 'jpeg' | 'png' | 'webp'; quality: number };
	html2canvas: { scale: number; useCORS: boolean; logging: boolean };
	jsPDF: { unit: 'mm' | 'pt' | 'in' | 'px'; format: string; orientation: 'portrait' | 'landscape' };
}

const DEFAULT_OPTIONS: Omit<PDFExportOptions, 'filename'> = {
	margin: 10,
	image: { type: 'jpeg' as const, quality: 0.98 },
	html2canvas: { scale: 2, useCORS: true, logging: false },
	jsPDF: { unit: 'mm' as const, format: 'a4', orientation: 'portrait' as const }
};

const formatDate = (dateString: string): string => {
	const date = new Date(dateString);
	return date.toISOString().split('T')[0];
};

export const pdfExportService = {
	async exportReport(report: AnalyticsReport, element: HTMLElement): Promise<void> {
		const dateStr = formatDate(report.generatedAt);
		const filename = `${report.variable}-report-${dateStr}.pdf`;

		const options: PDFExportOptions = {
			...DEFAULT_OPTIONS,
			filename
		};

		try {
			element.classList.add('report-content--print');

			await html2pdf()
				.set(options)
				.from(element)
				.save();

			element.classList.remove('report-content--print');
		} catch (error) {
			element.classList.remove('report-content--print');
			console.error('PDF export failed:', error);
			throw new Error('Failed to export PDF. Please try again.');
		}
	},

	async generatePDFBlob(element: HTMLElement): Promise<Blob> {
		element.classList.add('report-content--print');

		try {
			const blob = await html2pdf()
				.set(DEFAULT_OPTIONS)
				.from(element)
				.outputPdf('blob');

			element.classList.remove('report-content--print');
			return blob;
		} catch (error) {
			element.classList.remove('report-content--print');
			throw error;
		}
	}
};
