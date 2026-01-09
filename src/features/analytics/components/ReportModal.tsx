import React, { useState, useRef } from 'react';
import { ReportVariable, AnalyticsFilters, ReportGenerationState } from '../types';
import { reportGenerationService } from '../../../services/reportGenerationService';
import { pdfExportService } from '../../../services/pdfExportService';
import ReportVariableSelector from './ReportVariableSelector';
import ReportLoadingState from './ReportLoadingState';
import ReportSection from './ReportSection';
import './ReportModal.css';

interface ReportModalProps {
	isOpen: boolean;
	onClose: () => void;
	currentFilters: AnalyticsFilters;
}

const ReportModal: React.FC<ReportModalProps> = ({ isOpen, onClose, currentFilters }) => {
	const [selectedVariable, setSelectedVariable] = useState<ReportVariable | null>(null);
	const [state, setState] = useState<ReportGenerationState>({
		isGenerating: false,
		currentStep: 'idle',
		progress: 0,
		error: null,
		report: null
	});
	const [isExporting, setIsExporting] = useState(false);
	const reportContentRef = useRef<HTMLDivElement>(null);

	if (!isOpen) return null;

	const handleGenerateReport = async () => {
		if (!selectedVariable) return;

		setState({
			isGenerating: true,
			currentStep: 'aggregating',
			progress: 0,
			error: null,
			report: null
		});

		try {
			const report = await reportGenerationService.generateReport(
				selectedVariable,
				currentFilters,
				(progress) => {
					setState(prev => ({
						...prev,
						currentStep: progress.step,
						progress: progress.progress
					}));
				}
			);

			setState({
				isGenerating: false,
				currentStep: 'complete',
				progress: 100,
				error: null,
				report
			});
		} catch (error) {
			setState({
				isGenerating: false,
				currentStep: 'idle',
				progress: 0,
				error: error instanceof Error ? error.message : 'Failed to generate report',
				report: null
			});
		}
	};

	const handleExportPDF = async () => {
		if (!state.report || !reportContentRef.current) return;

		setIsExporting(true);
		try {
			await pdfExportService.exportReport(state.report, reportContentRef.current);
		} catch (error) {
			console.error('PDF export failed:', error);
		} finally {
			setIsExporting(false);
		}
	};

	const handleBack = () => {
		setState({
			isGenerating: false,
			currentStep: 'idle',
			progress: 0,
			error: null,
			report: null
		});
	};

	const handleClose = () => {
		setState({
			isGenerating: false,
			currentStep: 'idle',
			progress: 0,
			error: null,
			report: null
		});
		setSelectedVariable(null);
		onClose();
	};

	const formatDate = (dateString: string): string => {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-AU', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	};

	const renderVariableSelection = () => (
		<>
			<ReportVariableSelector
				selectedVariable={selectedVariable}
				onSelect={setSelectedVariable}
			/>
			<div className="report-modal__actions">
				<button
					type="button"
					className="btn btn--secondary"
					onClick={handleClose}
				>
					Cancel
				</button>
				<button
					type="button"
					className="btn btn--primary"
					onClick={handleGenerateReport}
					disabled={!selectedVariable}
				>
					Generate Report
				</button>
			</div>
		</>
	);

	const renderGenerating = () => (
		<ReportLoadingState
			step={state.currentStep}
			progress={state.progress}
		/>
	);

	const renderError = () => (
		<div className="report-modal__error">
			<div className="error-icon">
				<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<circle cx="12" cy="12" r="10" />
					<line x1="12" y1="8" x2="12" y2="12" />
					<line x1="12" y1="16" x2="12.01" y2="16" />
				</svg>
			</div>
			<h3>Report Generation Failed</h3>
			<p>{state.error}</p>
			<div className="report-modal__actions">
				<button
					type="button"
					className="btn btn--secondary"
					onClick={handleBack}
				>
					Try Again
				</button>
			</div>
		</div>
	);

	const renderReport = () => {
		if (!state.report) return null;

		return (
			<>
				<div className="report-content" ref={reportContentRef}>
					<div className="report-header">
						<h2 className="report-header__title">{state.report.title}</h2>
						<div className="report-header__meta">
							<span>Generated: {formatDate(state.report.generatedAt)}</span>
							<span>Records: {state.report.dataSnapshot.totalRecords.toLocaleString()}</span>
						</div>
					</div>

					{state.report.sections.map((section) => (
						<ReportSection key={section.id} section={section} />
					))}

					<div className="report-footer">
						<p className="report-footer__disclaimer">
							This report contains aggregated, anonymized data. Categories with fewer than {state.report.metadata.anonymizationThreshold} participants have been grouped to protect privacy.
						</p>
					</div>
				</div>

				<div className="report-modal__actions">
					<button
						type="button"
						className="btn btn--secondary"
						onClick={handleBack}
					>
						New Report
					</button>
					<button
						type="button"
						className="btn btn--primary"
						onClick={handleExportPDF}
						disabled={isExporting}
					>
						{isExporting ? 'Exporting...' : 'Export PDF'}
					</button>
				</div>
			</>
		);
	};

	const getModalTitle = () => {
		if (state.report) return state.report.title;
		if (state.isGenerating) return 'Generating Report...';
		return 'Generate Analytics Report';
	};

	return (
		<div className="report-modal-overlay" onClick={handleClose}>
			<div className="report-modal" onClick={(e) => e.stopPropagation()}>
				<div className="report-modal__header">
					<h2 className="report-modal__title">{getModalTitle()}</h2>
					<button
						type="button"
						className="report-modal__close"
						onClick={handleClose}
						aria-label="Close modal"
					>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<line x1="18" y1="6" x2="6" y2="18" />
							<line x1="6" y1="6" x2="18" y2="18" />
						</svg>
					</button>
				</div>

				<div className="report-modal__body">
					{state.error && renderError()}
					{!state.error && state.isGenerating && renderGenerating()}
					{!state.error && !state.isGenerating && !state.report && renderVariableSelection()}
					{!state.error && !state.isGenerating && state.report && renderReport()}
				</div>
			</div>
		</div>
	);
};

export default ReportModal;
