import React, { useState, useEffect } from 'react';
import { JobData, CandidateMatch } from '../types';
import './CandidateMatching.css';

interface CandidateMatchingProps {
  job: JobData;
  onJobUpdate: (job: JobData) => void;
  isEditing?: boolean;
}

const CandidateMatching: React.FC<CandidateMatchingProps> = ({ 
  job, 
  onJobUpdate, 
  isEditing = false 
}) => {
  const [matches, setMatches] = useState<CandidateMatch[]>([]);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState<'matchScore' | 'lastInteraction' | 'location'>('matchScore');
  const [filterBy, setFilterBy] = useState<'all' | 'available' | 'local'>('all');

  useEffect(() => {
    calculateMatches();
  }, [job.id, job.details.requiredSkills, job.details.requiredCompetencies]);

  const calculateMatches = async () => {
    setLoading(true);
    try {
      // Mock candidate matches for demonstration
      const mockMatches: CandidateMatch[] = [
        {
          candidateId: '1',
          candidate: {
            fullName: 'Sarah Williams',
            community: 'Kununurra',
            currentRole: 'Support Worker',
            employer: 'Local Community Center',
            preferredIndustries: ['Community Services', 'Healthcare']
          },
          matchScore: 92,
          matchReasons: {
            skillMatches: [
              {
                skill: 'Communication',
                candidateRating: 'Advanced',
                relevance: 'high'
              },
              {
                skill: 'Case Management',
                candidateRating: 'Intermediate',
                relevance: 'high'
              }
            ],
            competencyMatches: [
              {
                competency: 'Community Engagement',
                candidateRating: 'Advanced',
                relevance: 'high'
              }
            ],
            experienceMatches: [
              {
                jobTitle: 'Community Support Worker',
                employer: 'Previous Organization',
                relevance: 'high'
              }
            ],
            locationMatch: true,
            industryMatch: true
          },
          availability: {
            openToRole: true,
            availableFrom: '2025-08-01',
            fifoWilling: false
          },
          lastInteraction: '2025-07-15'
        },
        {
          candidateId: '2',
          candidate: {
            fullName: 'David Chen',
            community: 'Kununurra',
            currentRole: 'Youth Worker',
            employer: 'Youth Services',
            preferredIndustries: ['Community Services', 'Education']
          },
          matchScore: 78,
          matchReasons: {
            skillMatches: [
              {
                skill: 'Communication',
                candidateRating: 'Intermediate',
                relevance: 'high'
              }
            ],
            competencyMatches: [
              {
                competency: 'Community Engagement',
                candidateRating: 'Intermediate',
                relevance: 'medium'
              }
            ],
            experienceMatches: [
              {
                jobTitle: 'Youth Engagement Officer',
                employer: 'Local NGO',
                relevance: 'medium'
              }
            ],
            locationMatch: true,
            industryMatch: true
          },
          availability: {
            openToRole: true,
            availableFrom: '2025-09-01',
            fifoWilling: false
          },
          lastInteraction: '2025-07-10'
        },
        {
          candidateId: '3',
          candidate: {
            fullName: 'Maria Santos',
            community: 'Broome',
            currentRole: 'Social Worker',
            employer: 'Regional Health Service',
            preferredIndustries: ['Healthcare', 'Community Services']
          },
          matchScore: 85,
          matchReasons: {
            skillMatches: [
              {
                skill: 'Case Management',
                candidateRating: 'Advanced',
                relevance: 'high'
              },
              {
                skill: 'Cultural Competency',
                candidateRating: 'Advanced',
                relevance: 'high'
              }
            ],
            competencyMatches: [
              {
                competency: 'Community Engagement',
                candidateRating: 'Advanced',
                relevance: 'high'
              }
            ],
            experienceMatches: [
              {
                jobTitle: 'Community Support Worker',
                employer: 'Health Department',
                relevance: 'high'
              }
            ],
            locationMatch: false,
            industryMatch: true
          },
          availability: {
            openToRole: true,
            availableFrom: '2025-08-15',
            fifoWilling: false
          },
          lastInteraction: '2025-07-05'
        }
      ];
      
      setMatches(mockMatches);
    } catch (error) {
      console.error('Error calculating matches:', error);
    } finally {
      setLoading(false);
    }
  };

  const getMatchScoreColor = (score: number) => {
    if (score >= 80) return 'match-excellent';
    if (score >= 60) return 'match-good';
    if (score >= 40) return 'match-fair';
    return 'match-poor';
  };

  const handleContactCandidate = (candidateId: string) => {
    console.log('Contacting candidate:', candidateId);
    // Logic to initiate contact with candidate
  };

  const handleInviteToApply = (candidateId: string) => {
    console.log('Inviting candidate to apply:', candidateId);
    // Logic to send job invitation to candidate
  };

  const filteredAndSortedMatches = matches
    .filter(match => {
      switch (filterBy) {
        case 'available':
          return match.availability.openToRole;
        case 'local':
          return match.candidate.community === job.location.split(',')[0];
        default:
          return true;
      }
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'matchScore':
          return b.matchScore - a.matchScore;
        case 'lastInteraction':
          return new Date(b.lastInteraction || '').getTime() - new Date(a.lastInteraction || '').getTime();
        case 'location':
          return a.candidate.community.localeCompare(b.candidate.community);
        default:
          return 0;
      }
    });

  if (loading) {
    return (
      <div className="candidate-matching-loading">
        <div className="spinner"></div>
        <p>Analyzing candidate matches...</p>
      </div>
    );
  }

  return (
    <div className="candidate-matching">
      {/* Matching Summary */}
      <div className="matching-summary">
        <div className="summary-stats">
          <div className="stat">
            <span className="stat-number">{matches.length}</span>
            <span className="stat-label">Total Candidates</span>
          </div>
          <div className="stat">
            <span className="stat-number">
              {matches.filter(m => m.matchScore >= 70).length}
            </span>
            <span className="stat-label">Strong Matches</span>
          </div>
          <div className="stat">
            <span className="stat-number">
              {matches.filter(m => m.availability.openToRole).length}
            </span>
            <span className="stat-label">Available</span>
          </div>
        </div>
      </div>

      {/* Filters and Sort */}
      <div className="matching-controls">
        <div className="control-group">
          <label>Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value as any)}>
            <option value="matchScore">Match Score</option>
            <option value="lastInteraction">Recent Interaction</option>
            <option value="location">Location</option>
          </select>
        </div>
        
        <div className="control-group">
          <label>Filter:</label>
          <select value={filterBy} onChange={(e) => setFilterBy(e.target.value as any)}>
            <option value="all">All Candidates</option>
            <option value="available">Available Only</option>
            <option value="local">Local Area Only</option>
          </select>
        </div>

        <button 
          className="btn btn-primary"
          onClick={() => calculateMatches()}
        >
          Refresh Matches
        </button>
      </div>

      {/* Candidate List */}
      <div className="candidates-list">
        {filteredAndSortedMatches.map(match => (
          <div key={match.candidateId} className="candidate-card">
            <div className="candidate-header">
              <div className="candidate-info">
                <h3>{match.candidate.fullName}</h3>
                <p className="candidate-location">{match.candidate.community}</p>
                {match.candidate.currentRole && (
                  <p className="candidate-role">
                    {match.candidate.currentRole} at {match.candidate.employer}
                  </p>
                )}
              </div>
              
              <div className="match-score">
                <div className={`score-circle ${getMatchScoreColor(match.matchScore)}`}>
                  {match.matchScore}%
                </div>
                <span className="score-label">Match</span>
              </div>
            </div>

            <div className="match-details">
              {/* Skill Matches */}
              {match.matchReasons.skillMatches.length > 0 && (
                <div className="match-section">
                  <h4>Skill Matches</h4>
                  <div className="match-items">
                    {match.matchReasons.skillMatches.slice(0, 3).map((skillMatch, idx) => (
                      <span key={idx} className={`match-tag ${skillMatch.relevance}`}>
                        {skillMatch.skill} ({skillMatch.candidateRating})
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Experience Matches */}
              {match.matchReasons.experienceMatches.length > 0 && (
                <div className="match-section">
                  <h4>Experience Matches</h4>
                  <div className="match-items">
                    {match.matchReasons.experienceMatches.slice(0, 2).map((expMatch, idx) => (
                      <span key={idx} className={`match-tag ${expMatch.relevance}`}>
                        {expMatch.jobTitle}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Availability */}
              <div className="availability-info">
                <span className={`availability-status ${match.availability.openToRole ? 'available' : 'unavailable'}`}>
                  {match.availability.openToRole ? 'Available' : 'Not Available'}
                </span>
                {match.availability.availableFrom && (
                  <span className="available-from">From {match.availability.availableFrom}</span>
                )}
                {job.details.fifoRole && match.availability.fifoWilling && (
                  <span className="fifo-willing">FIFO Willing</span>
                )}
              </div>
            </div>

            <div className="candidate-actions">
              <button 
                className="btn btn-secondary"
                onClick={() => handleContactCandidate(match.candidateId)}
              >
                Contact
              </button>
              <button 
                className="btn btn-primary"
                onClick={() => handleInviteToApply(match.candidateId)}
              >
                Invite to Apply
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredAndSortedMatches.length === 0 && (
        <div className="no-matches">
          <h3>No matching candidates found</h3>
          <p>Try adjusting the job requirements or broadening the search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default CandidateMatching;