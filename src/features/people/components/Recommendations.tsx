import React from 'react';
import './Recommendations.css';

interface RecommendationsProps {
  data: any;
  onDataUpdate: (data: any) => void;
  isEditing?: boolean;
}

const Recommendations: React.FC<RecommendationsProps> = ({ data, isEditing = false }) => {
  const qualificationRecommendations = [
    {
      id: 1,
      title: "Certificate III in Mining Operations",
      description: "Based on your interest in mining work and current skill level, this qualification would enhance your career prospects in the mining industry.",
      relevance: "High",
      timeToComplete: "6-12 months"
    },
    {
      id: 2,
      title: "White Card - Construction Induction",
      description: "Essential for any construction or mining work. This short course is a mandatory requirement for site access.",
      relevance: "High",
      timeToComplete: "1 day"
    },
    {
      id: 3,
      title: "First Aid Certificate",
      description: "Valuable across all industries and often required for workplace safety roles.",
      relevance: "Medium",
      timeToComplete: "2 days"
    },
    {
      id: 4,
      title: "Forklift Operation License",
      description: "Based on your work history, this license would open additional job opportunities in warehousing and logistics.",
      relevance: "Medium",
      timeToComplete: "1-2 days"
    }
  ];

  const jobRecommendations = [
    {
      id: 1,
      title: "Mining Operator",
      description: "Your background and interests align well with mining operations roles. These positions offer good career progression.",
      matchScore: "85%",
      salaryRange: "$70,000 - $90,000",
      locations: ["Pilbara", "Hunter Valley", "Bowen Basin"]
    },
    {
      id: 2,
      title: "Construction Labourer",
      description: "Entry-level position with opportunities for skills development and career advancement.",
      matchScore: "75%",
      salaryRange: "$50,000 - $65,000",
      locations: ["Perth", "Regional WA"]
    },
    {
      id: 3,
      title: "Warehouse Supervisor",
      description: "Your leadership experience and practical skills make you a good candidate for supervisory roles.",
      matchScore: "70%",
      salaryRange: "$55,000 - $70,000",
      locations: ["Perth", "Bunbury", "Geraldton"]
    },
    {
      id: 4,
      title: "Equipment Operator",
      description: "Opportunities to operate heavy machinery with proper training and certification.",
      matchScore: "80%",
      salaryRange: "$65,000 - $85,000",
      locations: ["Mining sites", "Construction projects"]
    }
  ];

  return (
    <div className="recommendations-tab">
      <div className="form-section">
        <h3>Recommended Qualifications</h3>
        <p>Based on your profile, skills, and career interests, here are some qualifications that could enhance your opportunities:</p>
        
        <div className="recommendations-grid">
          {qualificationRecommendations.map(recommendation => (
            <div key={recommendation.id} className="recommendation-card">
              <h4>{recommendation.title}</h4>
              <p>{recommendation.description}</p>
              <div className="recommendation-details">
                <span className={`relevance ${recommendation.relevance.toLowerCase()}`}>
                  Relevance: {recommendation.relevance}
                </span>
                <span className="time-to-complete">
                  Duration: {recommendation.timeToComplete}
                </span>
              </div>
              <button className="btn btn-primary" disabled={!isEditing}>View Details</button>
            </div>
          ))}
        </div>
      </div>

      <div className="form-section">
        <h3>Recommended Job Roles</h3>
        <p>These job opportunities align with your current skills, experience, and career goals:</p>
        
        <div className="recommendations-grid">
          {jobRecommendations.map(recommendation => (
            <div key={recommendation.id} className="recommendation-card">
              <h4>{recommendation.title}</h4>
              <p>{recommendation.description}</p>
              <div className="recommendation-details">
                <span className="match-score">
                  Match: {recommendation.matchScore}
                </span>
                <span className="salary-range">
                  Salary: {recommendation.salaryRange}
                </span>
              </div>
              <div className="locations">
                <strong>Locations:</strong>
                <ul>
                  {recommendation.locations.map((location, index) => (
                    <li key={index}>{location}</li>
                  ))}
                </ul>
              </div>
              <button className="btn btn-primary" disabled={!isEditing}>Explore Role</button>
            </div>
          ))}
        </div>
      </div>

      <div className="form-section">
        <h3>Next Steps</h3>
        <div className="next-steps">
          <div className="step">
            <h4>1. Complete Training</h4>
            <p>Start with high-priority qualifications like White Card and First Aid to increase your immediate job prospects.</p>
          </div>
          <div className="step">
            <h4>2. Update Skills Profile</h4>
            <p>Add any new skills or experiences you gain to improve future recommendations.</p>
          </div>
          <div className="step">
            <h4>3. Network & Apply</h4>
            <p>Connect with local employers and training providers to explore opportunities.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Recommendations;