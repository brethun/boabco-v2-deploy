import React, { useState, useEffect } from 'react';
import { TrainingData, ParticipantMatch } from '../types';
import './ParticipantMatcher.css';

interface ParticipantMatcherProps {
  training: TrainingData;
}

const ParticipantMatcher: React.FC<ParticipantMatcherProps> = ({ training }) => {
  const [potentialMatches, setPotentialMatches] = useState<ParticipantMatch[]>([]);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState<'matchScore' | 'lastInteraction' | 'location'>('matchScore');
  const [filterBy, setFilterBy] = useState<'all' | 'available' | 'local' | 'skills-gap'>('all');

  useEffect(() => {
    calculateMatches();
  }, [training.id, training.skillsTargeted]);

  const calculateMatches = async () => {
    setLoading(true);
    try {
      // Mock participant matches for demonstration
      const mockMatches: ParticipantMatch[] = [
        {
          personId: '1',
          participant: {
            fullName: 'Rebecca Johnson',
            community: 'Kununurra',
            currentRole: 'Administrative Assistant',
            employer: 'Local Government',
            skillsGaps: ['Communication', 'Case Management', 'Cultural Competency']
          },
          matchScore: 89,
          matchReasons: {
            skillsGapFill: [
              {
                skill: 'Communication',
                currentLevel: 'Novice',
                trainingOutcome: 'Intermediate',
                relevance: 'high'
              },
              {
                skill: 'Case Management',
                currentLevel: 'Novice',
                trainingOutcome: 'Intermediate',
                relevance: 'high'
              },
              {
                skill: 'Cultural Competency',
                currentLevel: 'Intermediate',
                trainingOutcome: 'Advanced',
                relevance: 'high'
              }
            ],
            careerAlignment: [
              {
                careerGoal: 'Community Support Worker',
                trainingSupport: 'Direct pathway to qualification',
                relevance: 'high'
              }
            ],
            geographicMatch: true,
            scheduleMatch: true
          },
          availability: {
            openToTraining: true,
            availableFrom: '2025-09-01',
            preferredDelivery: ['Face-to-face', 'Hybrid']
          },
          barriers: [
            {
              type: 'Support',
              description: 'May need childcare support during training',
              severity: 'Medium'
            }
          ],
          lastInteraction: '2025-07-20'
        },
        {
          personId: '2',
          participant: {
            fullName: 'Michael Thompson',
            community: 'Kununurra',
            currentRole: 'Volunteer',
            employer: 'Community Organization',
            skillsGaps: ['Communication', 'Advocacy', 'Program Delivery']
          },
          matchScore: 75,
          matchReasons: {
            skillsGapFill: [
              {
                skill: 'Communication',
                currentLevel: 'Intermediate',
                trainingOutcome: 'Advanced',
                relevance: 'medium'
              },
              {
                skill: 'Advocacy',
                currentLevel: 'Novice',
                trainingOutcome: 'Intermediate',
                relevance: 'high'
              }
            ],
            careerAlignment: [
              {
                careerGoal: 'Community Development Worker',
                trainingSupport: 'Foundation for career advancement',
                relevance: 'medium'
              }
            ],
            geographicMatch: true,
            scheduleMatch: true
          },
          availability: {
            openToTraining: true,
            availableFrom: '2025-08-15',
            preferredDelivery: ['Face-to-face', 'Online']
          },
          barriers: [],
          lastInteraction: '2025-07-15'
        },
        {
          personId: '3',
          participant: {
            fullName: 'Sarah Williams',
            community: 'Wyndham',
            currentRole: 'Unemployed',
            employer: 'Seeking Employment',
            skillsGaps: ['Communication', 'Case Management', 'Computer Skills']
          },
          matchScore: 92,
          matchReasons: {
            skillsGapFill: [
              {
                skill: 'Communication',
                currentLevel: 'Novice',
                trainingOutcome: 'Intermediate',
                relevance: 'high'
              },
              {
                skill: 'Case Management',
                currentLevel: 'Novice',
                trainingOutcome: 'Intermediate',
                relevance: 'high'
              }
            ],
            careerAlignment: [
              {
                careerGoal: 'Return to workforce in community services',
                trainingSupport: 'Perfect foundation qualification',
                relevance: 'high'
              }
            ],
            geographicMatch: false,
            scheduleMatch: true
          },
          availability: {
            openToTraining: true,
            availableFrom: '2025-09-01',
            preferredDelivery: ['Hybrid', 'Online']
          },
          barriers: [
            {
              type: 'Geographic',
              description: 'May need transport assistance from Wyndham',
              severity: 'High'
            },
            {
              type: 'Cost',
              description: 'May need financial assistance',
              severity: 'Medium'
            }
          ],
          lastInteraction: '2025-07-12'
        },
        {
          personId: '4',
          participant: {
            fullName: 'David Chen',
            community: 'Kununurra',
            currentRole: 'Labourer',
            employer: 'Construction Company',
            skillsGaps: ['Safety Management', 'Leadership', 'Project Management']
          },
          matchScore: 45,
          matchReasons: {
            skillsGapFill: [],
            careerAlignment: [
              {
                careerGoal: 'Construction Supervisor',
                trainingSupport: 'Not directly aligned',
                relevance: 'low'
              }
            ],
            geographicMatch: true,
            scheduleMatch: false
          },
          availability: {
            openToTraining: false,
            preferredDelivery: ['Workplace']
          },
          barriers: [
            {
              type: 'Schedule',
              description: 'Current work commitments prevent participation',
              severity: 'High'
            }
          ],
          lastInteraction: '2025-06-28'
        }
      ];
      
      setPotentialMatches(mockMatches);
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

  const getBarrierSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High':
        return 'severity-high';
      case 'Medium':
        return 'severity-medium';
      case 'Low':
        return 'severity-low';
      default:
        return '';
    }
  };

  const handleInviteToEnroll = (personId: string) => {
    console.log('Inviting participant to enroll:', personId);
    // Logic to send training invitation
  };

  const handleContactParticipant = (personId: string) => {
    console.log('Contacting participant:', personId);
    // Logic to initiate contact
  };

  const filteredAndSortedMatches = potentialMatches
    .filter(match => {
      switch (filterBy) {
        case 'available':
          return match.availability.openToTraining;
        case 'local':
          return match.participant.community === training.location.primary.split(',')[0];
        case 'skills-gap':
          return match.participant.skillsGaps.some(gap => 
            training.skillsTargeted.some(skill => skill.skillName === gap)
          );
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
          return a.participant.community.localeCompare(b.participant.community);
        default:
          return 0;
      }
    });

  if (loading) {
    return (
      <div className="participant-matching-loading">
        <div className="spinner"></div>
        <p>Analyzing participant matches...</p>
      </div>
    );
  }

  return (
    <div className="participant-matching">
      {/* Matching Summary */}
      <div className="matching-summary">
        <div className="summary-stats">
          <div className="stat">
            <span className="stat-number">{potentialMatches.length}</span>
            <span className="stat-label">Potential Participants</span>
          </div>
          <div className="stat">
            <span className="stat-number">
              {potentialMatches.filter(m => m.matchScore >= 70).length}
            </span>
            <span className="stat-label">Strong Matches</span>
          </div>
          <div className="stat">
            <span className="stat-number">
              {potentialMatches.filter(m => m.availability.openToTraining).length}
            </span>
            <span className="stat-label">Available</span>
          </div>
          <div className="stat">
            <span className="stat-number">
              {potentialMatches.filter(m => m.barriers.length === 0).length}
            </span>
            <span className="stat-label">No Barriers</span>
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
            <option value="all">All Participants</option>
            <option value="available">Available Only</option>
            <option value="local">Local Area Only</option>
            <option value="skills-gap">Skills Gap Match</option>
          </select>
        </div>

        <button 
          className="btn btn-primary"
          onClick={() => calculateMatches()}
        >
          Refresh Matches
        </button>
      </div>

      {/* Participants List */}
      <div className="participants-list">
        {filteredAndSortedMatches.map(match => (
          <div key={match.personId} className="participant-card">
            <div className="participant-header">
              <div className="participant-info">
                <h3>{match.participant.fullName}</h3>
                <p className="participant-location">{match.participant.community}</p>
                {match.participant.currentRole && (
                  <p className="participant-role">
                    {match.participant.currentRole} 
                    {match.participant.employer && match.participant.employer !== 'Seeking Employment' && 
                      ` at ${match.participant.employer}`
                    }
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
              {/* Skills Gap Fill */}
              {match.matchReasons.skillsGapFill.length > 0 && (
                <div className="match-section">
                  <h4>Skills Development</h4>
                  <div className="skills-development">
                    {match.matchReasons.skillsGapFill.map((skillFill, idx) => (
                      <div key={idx} className="skill-development-item">
                        <span className="skill-name">{skillFill.skill}</span>
                        <span className="skill-progression">
                          {skillFill.currentLevel} → {skillFill.trainingOutcome}
                        </span>
                        <span className={`relevance-tag ${skillFill.relevance}`}>
                          {skillFill.relevance}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Career Alignment */}
              {match.matchReasons.careerAlignment.length > 0 && (
                <div className="match-section">
                  <h4>Career Goals</h4>
                  <div className="career-alignment">
                    {match.matchReasons.careerAlignment.map((alignment, idx) => (
                      <div key={idx} className="career-item">
                        <strong>{alignment.careerGoal}:</strong> {alignment.trainingSupport}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Barriers */}
              {match.barriers.length > 0 && (
                <div className="match-section">
                  <h4>Potential Barriers</h4>
                  <div className="barriers-list">
                    {match.barriers.map((barrier, idx) => (
                      <div key={idx} className={`barrier-item ${getBarrierSeverityColor(barrier.severity)}`}>
                        <span className="barrier-type">{barrier.type}:</span>
                        <span className="barrier-description">{barrier.description}</span>
                        <span className="barrier-severity">{barrier.severity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Availability */}
              <div className="availability-section">
                <div className="availability-status">
                  <span className={`status-indicator ${match.availability.openToTraining ? 'available' : 'unavailable'}`}>
                    {match.availability.openToTraining ? 'Available for Training' : 'Not Available'}
                  </span>
                  {match.availability.availableFrom && (
                    <span className="available-from">From {match.availability.availableFrom}</span>
                  )}
                </div>
                
                {match.availability.preferredDelivery.length > 0 && (
                  <div className="preferred-delivery">
                    <strong>Preferred Delivery:</strong> {match.availability.preferredDelivery.join(', ')}
                  </div>
                )}
              </div>
            </div>

            <div className="participant-actions">
              <button 
                className="btn btn-secondary"
                onClick={() => handleContactParticipant(match.personId)}
              >
                Contact
              </button>
              <button 
                className="btn btn-primary"
                onClick={() => handleInviteToEnroll(match.personId)}
                disabled={!match.availability.openToTraining}
              >
                Invite to Enroll
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredAndSortedMatches.length === 0 && (
        <div className="no-matches">
          <h3>No matching participants found</h3>
          <p>Try adjusting the training requirements or broadening the search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ParticipantMatcher;