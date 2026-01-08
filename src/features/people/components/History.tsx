import React from 'react';
import { PersonRecord, HistoryItem } from '../types';

interface HistoryProps {
  data: PersonRecord;
  onDataUpdate: (data: HistoryItem[]) => void;
  isEditing?: boolean;
}

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'status_change':
      return '✅';
    case 'communication':
      return '📧';
    case 'document':
      return '📋';
    case 'meeting':
      return '🔗';
    case 'note':
      return '📝';
    default:
      return '📌';
  }
};

const History: React.FC<HistoryProps> = ({ data, isEditing = false }) => {
  return (
    <div className="tab-content-section">
      <div className="history-timeline">
        {data.history && data.history.length > 0 ? (
          data.history.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-icon">{getActivityIcon(item.type)}</span>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h5 className="timeline-action">{item.action}</h5>
                  <span className="timeline-date">{item.date} at {item.time}</span>
                </div>
                <p className="timeline-details">{item.details}</p>
                <span className="timeline-performer">by {item.performedBy}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="no-history">
            <p>No activity history available for this contact.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
