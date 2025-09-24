import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  clearSelectedPerson,
  fetchPeopleList,
  fetchPersonRecord,
  savePersonSection,
  selectPeopleList,
  selectPeopleListStatus,
  selectPeopleSaveStatus,
  selectPersonRecord,
  selectPersonStatus,
  selectSelectedPersonId
} from '../peopleSlice';
import { PeopleTabSection, PersonRecord } from '../types';
import PersonalDetails from './PersonalDetails';
import Work from './Work';
import SkillsComp from './SkillsComp';
import Recommendations from './Recommendations';
import Notes from './Notes';
import MyProfile from './MyProfile';
import './PeopleTab.css';

type TabType = 'personal' | 'work' | 'skills' | 'recommendations' | 'notes' | 'profile';

const DATA_KEY_MAP: Record<TabType, PeopleTabSection> = {
  personal: 'personalDetails',
  work: 'workHistory',
  skills: 'skillsComp',
  recommendations: 'recommendations',
  notes: 'notes',
  profile: 'profile'
};

const formatDate = (value: string) => {
  if (!value) {
    return 'Not recorded';
  }

  const parsed = new Date(value);

  if (Number.isNaN(parsed.getTime())) {
    return 'Not recorded';
  }

  return new Intl.DateTimeFormat('en-AU', { dateStyle: 'medium' }).format(parsed);
};

const PeopleTab: React.FC = () => {
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState<TabType>('personal');
  const people = useAppSelector(selectPeopleList);
  const listStatus = useAppSelector(selectPeopleListStatus);
  const selectedPersonId = useAppSelector(selectSelectedPersonId);
  const personData = useAppSelector(selectPersonRecord);
  const personStatus = useAppSelector(selectPersonStatus);
  const saveStatus = useAppSelector(selectPeopleSaveStatus);
  const [toast, setToast] = useState<{ message: string; variant: 'saving' | 'success' | 'error' } | null>(null);
  const toastTimerRef = useRef<number | null>(null);
  const isPersonSelected = Boolean(selectedPersonId);
  const isLoadingDirectory = listStatus === 'loading';

  useEffect(() => {
    if (listStatus === 'idle') {
      dispatch(fetchPeopleList());
    }
  }, [dispatch, listStatus]);

  const selectedSummary = useMemo(
    () => people.find((person) => person.id === selectedPersonId),
    [people, selectedPersonId]
  );

  const statusMessage = useMemo(() => {
    if (!isPersonSelected) {
      if (listStatus === 'failed') {
        return 'Unable to load the people directory. Try refreshing the page.';
      }

      if (listStatus === 'loading') {
        return 'Loading people directory...';
      }

      return '';
    }

    if (personStatus === 'failed') {
      return 'Unable to load the selected record. Try selecting the person again.';
    }

    if (personStatus === 'loading') {
      return 'Loading person record...';
    }

    return '';
  }, [isPersonSelected, listStatus, personStatus]);

  const handlePersonSelect = (personId: string) => {
    if (personId === selectedPersonId) {
      setActiveTab('personal');
      return;
    }

    setActiveTab('personal');
    dispatch(fetchPersonRecord(personId));
  };

  const handleBackToDirectory = () => {
    setActiveTab('personal');
    dispatch(clearSelectedPerson());
  };

  useEffect(() => {
    if (saveStatus === 'saving') {
      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current);
        toastTimerRef.current = null;
      }

      setToast({
        message: 'Saving updates...',
        variant: 'saving'
      });
      return;
    }

    if (saveStatus === 'succeeded') {
      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current);
      }

      setToast({
        message: 'Changes saved successfully.',
        variant: 'success'
      });

      toastTimerRef.current = window.setTimeout(() => {
        setToast(null);
        toastTimerRef.current = null;
      }, 3000);
      return;
    }

    if (saveStatus === 'failed') {
      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current);
      }

      setToast({
        message: 'Unable to save changes. Try again.',
        variant: 'error'
      });

      toastTimerRef.current = window.setTimeout(() => {
        setToast(null);
        toastTimerRef.current = null;
      }, 4000);
    }
  }, [saveStatus]);

  useEffect(() => () => {
    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
      toastTimerRef.current = null;
    }
  }, []);

  const tabs = useMemo(
    () => [
      { id: 'personal', label: 'Personal Details', component: PersonalDetails },
      { id: 'work', label: 'Work History', component: Work },
      { id: 'skills', label: 'Skills & Competencies', component: SkillsComp },
      { id: 'recommendations', label: 'Recommendations', component: Recommendations },
      { id: 'notes', label: 'Notes & Interactions', component: Notes },
      { id: 'profile', label: 'My Profile', component: MyProfile }
    ],
    []
  );

  const activeTabConfig = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];
  const ActiveComponent = activeTabConfig.component;

  const selectedPersonName = useMemo(() => {
    const firstName = personData.personalDetails.firstName?.trim();
    const lastName = personData.personalDetails.lastName?.trim();
    const name = [firstName, lastName].filter(Boolean).join(' ');
    return name || 'People record';
  }, [personData.personalDetails.firstName, personData.personalDetails.lastName]);

  const formattedLastInteraction = useMemo(() => {
    if (!selectedSummary) {
      return '';
    }

    return formatDate(selectedSummary.lastInteraction);
  }, [selectedSummary]);

  const handleDataUpdate = (tabType: TabType, data: unknown) => {
    if (!selectedPersonId || personStatus !== 'succeeded') {
      return;
    }

    const section = DATA_KEY_MAP[tabType];
    dispatch(
      savePersonSection({
        personId: selectedPersonId,
        section,
        data: data as PersonRecord[PeopleTabSection]
      })
    );
  };

  return (
    <div className="page people-page">
      <header className={`page-header ${isPersonSelected ? 'has-tabs' : ''}`}>
        <div className="stack">
          {isPersonSelected ? (
            <>
              <button
                type="button"
                className="people-directory__back"
                onClick={handleBackToDirectory}
              >
                Back to people directory
              </button>
              <h1 className="page-title">{selectedPersonName}</h1>
              <p className="page-subtitle">
                Review and update participant information across personal, work, and engagement records on a single
                page.
              </p>
            </>
          ) : (
            <>
              <h1 className="page-title">People directory</h1>
              <p className="page-subtitle">
                Browse the participant directory and open an individual record to review detailed information.
              </p>
            </>
          )}
          {statusMessage && (
            <p className="page-subtitle status-message">{statusMessage}</p>
          )}
        </div>
        {isPersonSelected && (
          <nav className="page-tabs" aria-label="People record sections">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={activeTab === tab.id ? 'is-active' : ''}
                onClick={() => setActiveTab(tab.id as TabType)}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      {!isPersonSelected ? (
        <div className="surface">
          <div className="people-directory">
            {isLoadingDirectory && people.length === 0 ? (
              <div className="people-directory__loading">
                <span>Loading people...</span>
              </div>
            ) : listStatus === 'failed' ? (
              <div className="people-directory__empty">
                <p>We couldn&apos;t load the directory right now.</p>
                <button
                  type="button"
                  onClick={() => dispatch(fetchPeopleList())}
                  disabled={isLoadingDirectory}
                >
                  Try again
                </button>
              </div>
            ) : people.length === 0 && listStatus === 'succeeded' ? (
              <div className="people-directory__empty">
                <p>No people are available yet. Add a participant to get started.</p>
              </div>
            ) : (
              <div className="people-directory__grid">
                {people.map((person) => (
                  <button
                    key={person.id}
                    type="button"
                    className="people-card"
                    onClick={() => handlePersonSelect(person.id)}
                    aria-label={`Open record for ${person.fullName}`}
                  >
                    <div className="people-card__header">
                      <span className="people-card__status">{person.engagementStatus}</span>
                      <span className="people-card__interaction">{formatDate(person.lastInteraction)}</span>
                    </div>
                    <h2 className="people-card__name">{person.fullName}</h2>
                    <p className="people-card__community">{person.community}</p>
                    <p className="people-card__role">
                      {person.currentRole}
                      {person.employer ? ` · ${person.employer}` : ''}
                    </p>
                    {person.preferredIndustries.length > 0 && (
                      <div className="people-card__industries">
                        {person.preferredIndustries.map((industry) => (
                          <span key={industry} className="people-card__industry">
                            {industry}
                          </span>
                        ))}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="surface">
          {selectedSummary && (
            <div className="people-record-overview">
              <div className="people-record-overview__meta">
                <span className="people-record-overview__status">{selectedSummary.engagementStatus}</span>
                <span className="people-record-overview__community">{selectedSummary.community}</span>
              </div>
              <div className="people-record-overview__role">
                <span>{selectedSummary.currentRole}</span>
                {selectedSummary.employer && <span> · {selectedSummary.employer}</span>}
              </div>
              <div className="people-record-overview__footer">
                <span>Last interaction {formattedLastInteraction}</span>
              </div>
              {selectedSummary.preferredIndustries.length > 0 && (
                <div className="people-record-overview__industries">
                  {selectedSummary.preferredIndustries.map((industry) => (
                    <span key={industry}>{industry}</span>
                  ))}
                </div>
              )}
            </div>
          )}
          {personStatus === 'failed' && selectedPersonId && (
            <div className="people-record-error">
              <p>We couldn&apos;t load this record just now.</p>
              <button type="button" onClick={() => dispatch(fetchPersonRecord(selectedPersonId))}>
                Try again
              </button>
            </div>
          )}
          <div className="section-divider">
            <header className="section-divider__header">
              <h2 className="section-divider__title">{activeTabConfig.label}</h2>
            </header>
            <div className="section-divider__body">
              {personStatus !== 'succeeded' ? (
                <div className="people-record-loading">
                  {personStatus === 'loading'
                    ? 'Loading record...'
                    : 'Select “Try again” to reload this record.'}
                </div>
              ) : (
                <ActiveComponent
                  data={personData}
                  onDataUpdate={(data: unknown) => handleDataUpdate(activeTabConfig.id as TabType, data)}
                />
              )}
            </div>
          </div>
        </div>
      )}
      {toast && (
        <div
          className={`people-toast people-toast--${toast.variant}`}
          role="status"
          aria-live="polite"
        >
          <span>{toast.message}</span>
        </div>
      )}
    </div>
  );
};

export default PeopleTab;
