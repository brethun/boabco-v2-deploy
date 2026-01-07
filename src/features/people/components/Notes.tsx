import React, { useEffect, useState } from 'react';
import './Notes.css';

interface Note {
  id: string;
  content: string;
  timestamp: string;
  author: string;
  status: string;
}

interface NotesProps {
  data: any;
  onDataUpdate: (data: any) => void;
  isEditing?: boolean;
}

const Notes: React.FC<NotesProps> = ({ data, onDataUpdate, isEditing = false }) => {
  const [notes, setNotes] = useState<Note[]>(data.notes || []);
  const [newNoteContent, setNewNoteContent] = useState('');

  useEffect(() => {
    setNotes(data.notes || []);
  }, [data.notes]);

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const addNote = () => {
    if (newNoteContent.trim()) {
      const newNote: Note = {
        id: generateId(),
        content: newNoteContent.trim(),
        timestamp: new Date().toISOString(),
        author: 'Current User',
        status: 'Active'
      };
      
      const updatedNotes = [newNote, ...notes];
      setNotes(updatedNotes);
      setNewNoteContent('');
      onDataUpdate(updatedNotes);
    }
  };

  const deleteNote = (id: string) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      const updatedNotes = notes.filter(note => note.id !== id);
      setNotes(updatedNotes);
      onDataUpdate(updatedNotes);
    }
  };

  const updateNoteStatus = (id: string, status: string) => {
    const updatedNotes = notes.map(note => 
      note.id === id ? { ...note, status } : note
    );
    setNotes(updatedNotes);
    onDataUpdate(updatedNotes);
  };

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="notes-tab">
      <div className="form-section">
        <h3>Add New Note</h3>
        <div className="form-row">
          <div className="form-group full-width">
            <label className="required">Note Content</label>
            <textarea
              value={newNoteContent}
              onChange={(e) => setNewNoteContent(e.target.value)}
              disabled={!isEditing}
              rows={4}
              placeholder="Enter your note here..."
              required
            />
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={addNote}
          disabled={!isEditing || !newNoteContent.trim()}
        >
          Add Note
        </button>
      </div>

      <div className="form-section">
        <h3>Notes History ({notes.length})</h3>
        
        {notes.length === 0 ? (
          <div className="no-notes">
            <p>No notes have been added yet. Add your first note above.</p>
          </div>
        ) : (
          <div className="notes-list">
            {notes.map((note) => (
              <div key={note.id} className={`note-item ${note.status.toLowerCase()}`}>
                <div className="note-header">
                  <div className="note-meta">
                    <span className="note-author">{note.author}</span>
                    <span className="note-timestamp">{formatDate(note.timestamp)}</span>
                  </div>
                  <div className="note-actions">
                    <select
                      value={note.status}
                      onChange={(e) => updateNoteStatus(note.id, e.target.value)}
                      disabled={!isEditing}
                      className="note-status-select"
                    >
                      <option value="Active">Active</option>
                      <option value="Resolved">Resolved</option>
                      <option value="Archived">Archived</option>
                    </select>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteNote(note.id)}
                      disabled={!isEditing}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="note-content">
                  {note.content}
                </div>
                <div className="note-footer">
                  <span className={`status-badge ${note.status.toLowerCase()}`}>
                    {note.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default Notes;
