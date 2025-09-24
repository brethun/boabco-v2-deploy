import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { mockApiClient } from '../../services/mockApiClient';
import {
  PeopleTabSection,
  PersonRecord,
  PersonSummary,
  createEmptyPersonRecord
} from './types';

interface PeopleState {
  list: PersonSummary[];
  person: PersonRecord | null;
  selectedPersonId: string | null;
  listStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  personStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  saveStatus: 'idle' | 'saving' | 'succeeded' | 'failed';
  error: string | null;
  lastUpdatedSection: PeopleTabSection | null;
}

const initialState: PeopleState = {
  list: [],
  person: null,
  selectedPersonId: null,
  listStatus: 'idle',
  personStatus: 'idle',
  saveStatus: 'idle',
  error: null,
  lastUpdatedSection: null
};

export const fetchPeopleList = createAsyncThunk('people/fetchPeopleList', async () => {
  const response = await mockApiClient.getPeopleList();
  return response;
});

export const fetchPersonRecord = createAsyncThunk('people/fetchPersonRecord', async (personId: string) => {
  const response = await mockApiClient.getPersonRecord(personId);
  return response;
});

export const savePersonSection = createAsyncThunk(
  'people/savePersonSection',
  async ({
    personId,
    section,
    data
  }: {
    personId: string;
    section: PeopleTabSection;
    data: PersonRecord[PeopleTabSection];
  }) => {
    const response = await mockApiClient.updatePersonSection(personId, section, data);
    return {
      person: response.person,
      summary: response.summary,
      section
    };
  }
);

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    clearSelectedPerson(state) {
      state.selectedPersonId = null;
      state.person = null;
      state.personStatus = 'idle';
      state.saveStatus = 'idle';
      state.lastUpdatedSection = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeopleList.pending, (state) => {
        state.listStatus = 'loading';
        state.error = null;
      })
      .addCase(fetchPeopleList.fulfilled, (state, action) => {
        state.listStatus = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchPeopleList.rejected, (state, action) => {
        state.listStatus = 'failed';
        state.error = action.error.message ?? 'Unable to load people directory';
      })
      .addCase(fetchPersonRecord.pending, (state, action) => {
        state.personStatus = 'loading';
        state.selectedPersonId = action.meta.arg;
        state.person = createEmptyPersonRecord();
        state.person.id = action.meta.arg;
        state.error = null;
        state.lastUpdatedSection = null;
      })
      .addCase(fetchPersonRecord.fulfilled, (state, action) => {
        state.personStatus = 'succeeded';
        state.person = action.payload;
        state.selectedPersonId = action.payload.id;
      })
      .addCase(fetchPersonRecord.rejected, (state, action) => {
        state.personStatus = 'failed';
        state.error = action.error.message ?? 'Unable to load person record';
      })
      .addCase(savePersonSection.pending, (state) => {
        state.saveStatus = 'saving';
        state.error = null;
      })
      .addCase(savePersonSection.fulfilled, (state, action) => {
        state.saveStatus = 'succeeded';
        state.person = action.payload.person;
        state.lastUpdatedSection = action.payload.section;
        state.list = state.list.map((person) =>
          person.id === action.payload.person.id ? action.payload.summary : person
        );
      })
      .addCase(savePersonSection.rejected, (state, action) => {
        state.saveStatus = 'failed';
        state.error = action.error.message ?? 'Unable to save updates';
      });
  }
});

export const { clearSelectedPerson } = peopleSlice.actions;

export const selectPeopleList = (state: RootState) => state.people.list;
export const selectPeopleListStatus = (state: RootState) => state.people.listStatus;
export const selectSelectedPersonId = (state: RootState) => state.people.selectedPersonId;
export const selectPersonRecord = (state: RootState) => state.people.person ?? createEmptyPersonRecord();
export const selectPersonStatus = (state: RootState) => state.people.personStatus;
export const selectPeopleSaveStatus = (state: RootState) => state.people.saveStatus;
export const selectPeopleLastUpdatedSection = (state: RootState) => state.people.lastUpdatedSection;

export default peopleSlice.reducer;
