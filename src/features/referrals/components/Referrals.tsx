import React, { useState } from 'react';
import ReferralDetail from './ReferralDetail';
import './Referrals.css';

const Referrals: React.FC = () => {
  const [selectedReferral, setSelectedReferral] = useState<any>(null);
  const [referrals] = useState([
    {
      id: 'Referral #24784',
      title: 'Referral #24784',
      assignee: 'Wunan SP',
      status: 'Pending Approval',
      referred: 'Jul 24, 21:46',
      lastUpdated: 'Jul 24, 21:46',
      contactDetails: {
        name: 'Sarah Thompson',
        email: 'sarah.thompson@wunan.org.au',
        phone: '+61 8 9168 3881',
        company: 'Wunan Foundation',
        position: 'Senior Program Manager',
        linkedIn: 'https://linkedin.com/in/sarahthompson-wunan',
        address: {
          street: '123 Hannan Street',
          suburb: 'Kununurra',
          state: 'WA',
          postcode: '6743'
        },
        notes: 'Highly experienced in indigenous program management. Strong connections in the Kimberley region.'
      },
      linkedReferrals: [
        {
          id: 'REF-2024-001',
          title: 'Previous Healthcare Referral',
          status: 'Complete',
          date: '2024-06-15',
          outcome: 'Successfully placed'
        },
        {
          id: 'REF-2024-002',
          title: 'Mining Consultant Referral',
          status: 'Rejected',
          date: '2024-05-20',
          outcome: 'Skills mismatch'
        }
      ],
      history: [
        {
          id: '12',
          date: '2024-07-24',
          time: '9:46 PM',
          action: 'Referral Submitted',
          details: 'Initial referral submitted for review by Sarah Thompson from Wunan Foundation for Construction Project Manager position.',
          performedBy: 'Sarah Thompson',
          type: 'status_change'
        },
        {
          id: '11',
          date: '2024-07-24',
          time: '8:30 PM',
          action: 'Document Uploaded',
          details: 'Resume and certification documents uploaded to referral package.',
          performedBy: 'Sarah Thompson',
          type: 'document'
        },
        {
          id: '10',
          date: '2024-07-24',
          time: '7:15 PM',
          action: 'Referral to Service Provider',
          details: 'Referral forwarded to Elite Recruitment Solutions for Construction Project Manager role. Service provider notified via email.',
          performedBy: 'System Admin',
          type: 'status_change'
        },
        {
          id: '9',
          date: '2024-07-24',
          time: '7:16 PM',
          action: 'Service Provider Notification',
          details: 'Email notification sent to jennifer.smith@elite-recruit.com regarding new referral #24784.',
          performedBy: 'System',
          type: 'communication'
        },
        {
          id: '8',
          date: '2024-07-23',
          time: '10:30 AM',
          action: 'Service Provider Acknowledged',
          details: 'Elite Recruitment Solutions acknowledged receipt of referral. Expected review time: 3-5 business days.',
          performedBy: 'Jennifer Smith (Elite Recruitment)',
          type: 'communication'
        },
        {
          id: '7',
          date: '2024-07-22',
          time: '2:45 PM',
          action: 'Initial Assessment Note',
          details: 'Reviewed candidate profile. Strong background in construction management with 8+ years experience. Indigenous background aligns with project requirements. Scheduling initial interview.',
          performedBy: 'Jennifer Smith (Elite Recruitment)',
          type: 'note'
        },
        {
          id: '6',
          date: '2024-07-21',
          time: '4:20 PM',
          action: 'Interview Scheduled',
          details: 'Initial phone interview scheduled for July 20th at 2:00 PM. Candidate confirmed availability.',
          performedBy: 'Jennifer Smith (Elite Recruitment)',
          type: 'meeting'
        },
        {
          id: '5',
          date: '2024-07-20',
          time: '2:00 PM',
          action: 'Phone Interview Conducted',
          details: 'Conducted 45-minute phone interview. Candidate demonstrated excellent project management skills and cultural awareness. Proceeding to client interview stage.',
          performedBy: 'Jennifer Smith (Elite Recruitment)',
          type: 'meeting'
        },
        {
          id: '4',
          date: '2024-07-20',
          time: '3:30 PM',
          action: 'Post-Interview Assessment',
          details: 'Interview assessment: Technical skills - Excellent, Communication - Very Good, Cultural fit - Excellent. Recommending to client for final interview.',
          performedBy: 'Jennifer Smith (Elite Recruitment)',
          type: 'note'
        },
        {
          id: '3',
          date: '2024-07-19',
          time: '11:15 AM',
          action: 'Client Referral',
          details: 'Candidate profile forwarded to Department of Infrastructure for final assessment. Client interview scheduled for July 18th.',
          performedBy: 'Jennifer Smith (Elite Recruitment)',
          type: 'status_change'
        },
        {
          id: '2',
          date: '2024-07-18',
          time: '10:00 AM',
          action: 'Client Interview',
          details: 'Final interview conducted with Department of Infrastructure. Panel interview with 3 stakeholders. Candidate performed exceptionally well.',
          performedBy: 'Department of Infrastructure',
          type: 'meeting'
        },
        {
          id: '1',
          date: '2024-07-17',
          time: '4:45 PM',
          action: 'Placement Successful',
          details: 'Candidate successfully placed in Construction Project Manager role. Start date: August 1st, 2024. Salary: $95,000 + benefits. Referral closed successfully.',
          performedBy: 'Jennifer Smith (Elite Recruitment)',
          type: 'status_change'
        }
      ]
    },
    {
      id: 'Referral #24783',
      title: 'Referral #24783',
      assignee: 'Wunan SP',
      status: 'Pending Approval',
      referred: 'Jul 24, 21:34',
      lastUpdated: 'Jul 24, 21:34'
    },
    {
      id: 'Referral #24782',
      title: 'Referral #24782',
      assignee: 'Wunan SP',
      status: 'Pending Approval',
      referred: 'Jul 24, 21:26',
      lastUpdated: 'Jul 24, 21:26'
    },
    {
      id: 'Referral #24781',
      title: 'Referral #24781',
      assignee: 'Wunan SP',
      status: 'Pending Approval',
      referred: 'Jul 24, 21:10',
      lastUpdated: 'Jul 24, 21:10'
    },
    {
      id: 'Referral #24780',
      title: 'Referral #24780',
      assignee: 'Wunan SP',
      status: 'Pending Approval',
      referred: 'Jul 24, 21:09',
      lastUpdated: 'Jul 24, 21:09'
    },
    {
      id: 'New Demo 6',
      title: 'New Demo 6',
      assignee: 'Kit Lim',
      status: 'In Progress',
      response: 'Jun 23, 2025',
      referred: 'Jun 24, 19:46',
      lastUpdated: 'Jun 30, 12:57',
      contactDetails: {
        name: 'Michael Chen',
        email: 'michael.chen@techcorp.com.au',
        phone: '+61 2 9876 5432',
        company: 'TechCorp Australia',
        position: 'Software Developer',
        linkedIn: 'https://linkedin.com/in/michaelchen-dev',
        address: {
          street: '456 Collins Street',
          suburb: 'Melbourne',
          state: 'VIC',
          postcode: '3000'
        },
        notes: 'Senior full-stack developer with expertise in React and Node.js. Looking for remote opportunities.'
      },
      linkedReferrals: [
        {
          id: 'REF-2024-003',
          title: 'Previous Frontend Role',
          status: 'Complete',
          date: '2024-04-10',
          outcome: 'Successfully placed'
        }
      ],
      history: [
        {
          id: '8',
          date: '2024-06-30',
          time: '12:57 PM',
          action: 'Service Provider Update',
          details: 'TechTalent Specialists provided progress update: Currently in technical assessment phase. Client feedback expected by July 5th.',
          performedBy: 'Mike Johnson (TechTalent)',
          type: 'note'
        },
        {
          id: '7',
          date: '2024-06-28',
          time: '3:30 PM',
          action: 'Technical Assessment',
          details: 'Completed coding challenge and system design interview. Performance rated as "Excellent" - 9/10 score.',
          performedBy: 'TechCorp Review Panel',
          type: 'meeting'
        },
        {
          id: '6',
          date: '2024-06-26',
          time: '10:00 AM',
          action: 'Client Interview Scheduled',
          details: 'Second round interview with hiring manager scheduled for June 28th. Technical assessment to be completed beforehand.',
          performedBy: 'Mike Johnson (TechTalent)',
          type: 'meeting'
        },
        {
          id: '5',
          date: '2024-06-25',
          time: '2:20 PM',
          action: 'Service Provider Assessment',
          details: 'Initial screening completed. Candidate has strong technical skills matching job requirements. Cultural fit assessment positive.',
          performedBy: 'Mike Johnson (TechTalent)',
          type: 'note'
        },
        {
          id: '4',
          date: '2024-06-24',
          time: '7:46 PM',
          action: 'Referral to Service Provider',
          details: 'Referral forwarded to TechTalent Specialists for Software Developer position at TechCorp Australia.',
          performedBy: 'Kit Lim',
          type: 'status_change'
        },
        {
          id: '3',
          date: '2024-06-24',
          time: '4:30 PM',
          action: 'Skills Verification',
          details: 'Verified technical certifications and previous work samples. GitHub portfolio reviewed and approved.',
          performedBy: 'Kit Lim',
          type: 'document'
        },
        {
          id: '2',
          date: '2024-06-24',
          time: '11:15 AM',
          action: 'Initial Contact',
          details: 'First contact established via LinkedIn. Candidate expressed interest in remote software development opportunities.',
          performedBy: 'Kit Lim',
          type: 'communication'
        },
        {
          id: '1',
          date: '2024-06-23',
          time: '9:30 AM',
          action: 'Profile Created',
          details: 'Contact profile created with technical skill assessment and availability preferences.',
          performedBy: 'Kit Lim',
          type: 'note'
        }
      ]
    },
    {
      id: 'New Test4',
      title: 'New Test4',
      assignee: 'Wunan (BH)',
      status: 'In Progress',
      response: 'Jun 19, 2025',
      referred: 'Jun 19, 22:46',
      lastUpdated: 'Jun 19, 23:03'
    },
    {
      id: 'New Test3',
      title: 'New Test3',
      assignee: 'Wunan (BH)',
      status: 'In Progress',
      response: 'Jun 19, 2025',
      referred: 'Jun 19, 18:35',
      lastUpdated: 'Jun 19, 19:15'
    },
    {
      id: 'New Test3-2',
      title: 'New Test3',
      assignee: 'Wunan (BH)',
      status: 'In Progress',
      response: 'Jun 19, 2025',
      referred: 'Jun 19, 18:32',
      lastUpdated: 'Jun 20, 08:45'
    },
    {
      id: 'Client Two',
      title: 'Client Two',
      assignee: '54 Reasons',
      status: 'In Progress'
    },
    {
      id: 'New Demo 5',
      title: 'New Demo 5',
      assignee: 'Wunan (BH)',
      status: 'Complete',
      response: 'Jun 20, 2025',
      referred: 'Jun 20, 11:27',
      lastUpdated: 'Jun 20, 12:03'
    },
    {
      id: 'New Demo 6-2',
      title: 'New Demo 6',
      assignee: 'Wunan (BH)',
      status: 'Complete',
      response: 'Jun 20, 2025',
      referred: 'Jun 20, 08:41',
      lastUpdated: 'Jun 20, 08:47'
    },
    {
      id: 'New Test4-2',
      title: 'New Test4',
      assignee: 'Wunan (BH)',
      status: 'Complete',
      response: 'Jun 19, 2025',
      referred: 'Jun 19, 22:51',
      lastUpdated: 'Jun 19, 23:03'
    },
    {
      id: 'Demo Zero',
      title: 'Demo Zero',
      assignee: 'Services Australia',
      status: 'Complete',
      response: 'Jun 13, 2025',
      referred: 'Jun 13, 08:52',
      lastUpdated: 'Jun 13, 09:17',
      contactDetails: {
        name: 'Emma Wilson',
        email: 'emma.wilson@financecorp.com.au',
        phone: '+61 8 9234 5678',
        company: 'Finance Corp Perth',
        position: 'Senior Accountant',
        linkedIn: 'https://linkedin.com/in/emmawilson-cpa',
        address: {
          street: '321 Murray Street',
          suburb: 'Perth',
          state: 'WA',
          postcode: '6000'
        },
        notes: 'CPA qualified with 10+ years experience in government and private sector accounting.'
      },
      linkedReferrals: [
        {
          id: 'REF-2024-004',
          title: 'Government Finance Role',
          status: 'Complete',
          date: '2024-03-15',
          outcome: 'Successfully placed'
        },
        {
          id: 'REF-2024-005',
          title: 'Private Sector Opportunity',
          status: 'Complete',
          date: '2024-01-20',
          outcome: 'Successfully placed'
        }
      ],
      history: [
        {
          id: '10',
          date: '2024-06-13',
          time: '9:17 AM',
          action: 'Placement Completed',
          details: 'Candidate successfully commenced Senior Financial Analyst role with Services Australia. 6-month probation period commenced. Referral closed as successful placement.',
          performedBy: 'David Brown (Finance First)',
          type: 'status_change'
        },
        {
          id: '9',
          date: '2024-06-12',
          time: '4:30 PM',
          action: 'Offer Acceptance',
          details: 'Candidate accepted formal offer. Start date confirmed as June 13th, 2024. Salary: $78,000 + superannuation.',
          performedBy: 'Services Australia HR',
          type: 'communication'
        },
        {
          id: '8',
          date: '2024-06-11',
          time: '2:00 PM',
          action: 'Formal Offer Extended',
          details: 'Services Australia extended formal job offer following successful completion of security clearance and reference checks.',
          performedBy: 'Services Australia HR',
          type: 'document'
        },
        {
          id: '7',
          date: '2024-06-10',
          time: '11:45 AM',
          action: 'Reference Check Completed',
          details: 'All professional references verified. Previous supervisors provided excellent feedback on performance and reliability.',
          performedBy: 'David Brown (Finance First)',
          type: 'document'
        },
        {
          id: '6',
          date: '2024-06-09',
          time: '3:20 PM',
          action: 'Security Clearance Approved',
          details: 'Baseline security clearance approved by Australian Government Security Vetting Agency.',
          performedBy: 'AGSVA',
          type: 'document'
        },
        {
          id: '5',
          date: '2024-06-07',
          time: '10:00 AM',
          action: 'Final Interview - Panel',
          details: 'Panel interview with Services Australia management team. Candidate demonstrated excellent analytical skills and cultural alignment.',
          performedBy: 'Services Australia Panel',
          type: 'meeting'
        },
        {
          id: '4',
          date: '2024-06-05',
          time: '2:30 PM',
          action: 'Technical Assessment',
          details: 'Completed financial modeling and systems proficiency test. Achieved 95% score - highest in current recruitment round.',
          performedBy: 'Services Australia',
          type: 'meeting'
        },
        {
          id: '3',
          date: '2024-06-04',
          time: '11:00 AM',
          action: 'Initial Interview',
          details: 'First interview with hiring manager completed. Strong impression made - proceeding to technical assessment stage.',
          performedBy: 'David Brown (Finance First)',
          type: 'meeting'
        },
        {
          id: '2',
          date: '2024-06-13',
          time: '8:52 AM',
          action: 'Referral to Service Provider',
          details: 'Referral forwarded to Finance First Recruiters for Senior Financial Analyst position with Services Australia.',
          performedBy: 'Services Australia',
          type: 'status_change'
        },
        {
          id: '1',
          date: '2024-06-13',
          time: '8:30 AM',
          action: 'Qualification Verification',
          details: 'CPA certification and university qualifications verified. All documentation approved for government role application.',
          performedBy: 'Services Australia',
          type: 'document'
        }
      ]
    },
    {
      id: 'Client Two-2',
      title: 'Client Two',
      assignee: 'Wunan (BH)',
      status: 'Complete'
    },
    {
      id: 'New Test5',
      title: 'New Test5',
      assignee: 'Wunan (BH)',
      status: 'Rejected',
      response: 'Jun 19, 2025',
      referred: 'Jun 19, 23:23',
      lastUpdated: 'Jun 20, 08:45',
      contactDetails: {
        name: 'David Martinez',
        email: 'david.martinez@healthcorp.com.au',
        phone: '+61 7 3456 7890',
        company: 'HealthCorp Queensland',
        position: 'Registered Nurse',
        linkedIn: 'https://linkedin.com/in/davidmartinez-rn',
        address: {
          street: '789 Queen Street',
          suburb: 'Brisbane',
          state: 'QLD',
          postcode: '4000'
        },
        notes: 'Experienced RN seeking opportunities in rural/remote healthcare settings.'
      },
      linkedReferrals: [],
      history: [
        {
          id: '6',
          date: '2024-06-20',
          time: '8:45 AM',
          action: 'Referral Closed - Rejected',
          details: 'Referral marked as rejected due to candidate location preferences not matching available positions. Alternative opportunities to be explored.',
          performedBy: 'Sarah Wilson (Healthcare Heroes)',
          type: 'status_change'
        },
        {
          id: '5',
          date: '2024-06-20',
          time: '7:30 AM',
          action: 'Service Provider Decision',
          details: 'Healthcare Heroes Recruitment determined that candidate preferences for Brisbane-based roles do not align with current remote healthcare vacancies. All available positions require relocation to regional areas.',
          performedBy: 'Sarah Wilson (Healthcare Heroes)',
          type: 'note'
        },
        {
          id: '4',
          date: '2024-06-19',
          time: '3:45 PM',
          action: 'Location Preference Discussion',
          details: 'Conducted phone call to discuss remote location requirements. Candidate expressed concerns about family commitments preventing relocation outside Brisbane metro area.',
          performedBy: 'Sarah Wilson (Healthcare Heroes)',
          type: 'communication'
        },
        {
          id: '3',
          date: '2024-06-19',
          time: '11:20 AM',
          action: 'Service Provider Review',
          details: 'Initial assessment completed. Candidate qualifications excellent, however location preferences limit available opportunities.',
          performedBy: 'Sarah Wilson (Healthcare Heroes)',
          type: 'note'
        },
        {
          id: '2',
          date: '2024-06-19',
          time: '11:23 PM',
          action: 'Referral to Service Provider',
          details: 'Referral forwarded to Healthcare Heroes Recruitment for registered nurse positions in rural healthcare settings.',
          performedBy: 'Wunan (BH)',
          type: 'status_change'
        },
        {
          id: '1',
          date: '2024-06-19',
          time: '8:15 PM',
          action: 'Initial Assessment',
          details: 'Reviewed nursing qualifications and registration status. All certifications current and in good standing.',
          performedBy: 'Wunan (BH)',
          type: 'document'
        }
      ]
    },
    {
      id: 'New Test4-3',
      title: 'New Test4',
      assignee: 'Wunan (BH)',
      status: 'Rejected',
      response: 'Jun 19, 2025',
      referred: 'Jun 19, 22:51',
      lastUpdated: 'Jun 20, 12:02'
    },
    {
      id: 'New Test3-3',
      title: 'New Test3',
      assignee: 'Wunan (BH)',
      status: 'Rejected',
      response: 'Jun 19, 2025',
      referred: 'Jun 19, 18:34',
      lastUpdated: 'Jun 19, 19:14'
    },
    {
      id: 'Referral #24239',
      title: 'Referral #24239',
      assignee: 'Wunan (BH)',
      status: 'Rejected',
      response: 'Jun 13, 2025',
      referred: 'Jun 13, 08:24',
      lastUpdated: 'Jun 20, 08:45'
    },
    {
      id: 'Demo Zero-2',
      title: 'Demo Zero',
      assignee: 'Wunan (BH)',
      status: 'Rejected'
    }
  ]);

  const getColumnColor = (status: string) => {
    switch (status) {
      case 'Pending Approval':
        return '#4A90E2';
      case 'In Progress':
        return '#7ED321';
      case 'Complete':
        return '#50E3C2';
      case 'Rejected':
        return '#D0021B';
      default:
        return '#9B9B9B';
    }
  };

  const groupedReferrals = referrals.reduce((groups, referral) => {
    if (!groups[referral.status]) {
      groups[referral.status] = [];
    }
    groups[referral.status].push(referral);
    return groups;
  }, {} as Record<string, typeof referrals>);

  const columns = ['Pending Approval', 'In Progress', 'Complete', 'Rejected'];

  const handleReferralClick = (referral: any) => {
    setSelectedReferral(referral);
  };

  const handleBackToList = () => {
    setSelectedReferral(null);
  };

  const handleSaveReferral = (updatedReferral: any) => {
    // In a real app, this would update the backend
    console.log('Saving updated referral:', updatedReferral);
    setSelectedReferral(updatedReferral);
  };

  if (selectedReferral) {
    return (
      <ReferralDetail 
        referral={selectedReferral}
        onBack={handleBackToList}
        onSave={handleSaveReferral}
      />
    );
  }

  return (
    <div className="page referrals-page">
      <header className="page-header">
        <div className="stack">
          <h1 className="page-title">Referrals</h1>
          <p className="page-subtitle">Track referral progress with service partners and surface next actions.</p>
        </div>
        <div className="page-actions">
          <button className="btn btn-primary" type="button">New referral</button>
        </div>
      </header>

      <div className="page-sections">
        <div className="section-divider">
          <header className="section-divider__header">
            <h2 className="section-divider__title">Pipeline</h2>
            <p className="section-divider__meta">{referrals.length} total referrals</p>
          </header>
          <div className="section-divider__body">
            <div className="kanban-board">
              {columns.map(column => (
                <div key={column} className="kanban-column">
                  <div className="column-header" style={{ borderTopColor: getColumnColor(column) }}>
                    <div>
                      <h3>{column}</h3>
                      <p className="column-subtitle">{column === 'Awaiting Response' ? 'Pending feedback' : column === 'In Review' ? 'Under assessment' : column === 'Approved' ? 'Ready to progress' : 'Not proceeding'}</p>
                    </div>
                    <span className="column-count">{(groupedReferrals[column] || []).length}</span>
                  </div>
                  <div className="column-content">
                    {(groupedReferrals[column] || []).map(referral => (
                      <div key={referral.id} className="referral-card" onClick={() => handleReferralClick(referral)} role="button">
                        <div className="card-header">
                          <h4 className="card-title">{referral.title}</h4>
                          <div className="assignee">
                            <span className="assignee-avatar">{referral.assignee.slice(0, 1)}</span>
                            <span className="assignee-name">{referral.assignee}</span>
                          </div>
                        </div>
                        <div className="card-details">
                          {referral.response && (
                            <div className="detail-item">
                              <span className="detail-key">Response</span>
                              <span>{referral.response}</span>
                            </div>
                          )}
                          {referral.referred && (
                            <div className="detail-item">
                              <span className="detail-key">Referred</span>
                              <span>{referral.referred}</span>
                            </div>
                          )}
                          {referral.lastUpdated && (
                            <div className="detail-item">
                              <span className="detail-key">Updated</span>
                              <span>{referral.lastUpdated}</span>
                            </div>
                          )}
                        </div>
                        <div className="card-actions">
                          <button
                            className="card-action"
                            title="View details"
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleReferralClick(referral);
                            }}
                          >
                            View
                          </button>
                          <button
                            className="card-action"
                            title="Edit referral"
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleReferralClick(referral);
                            }}
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referrals;
