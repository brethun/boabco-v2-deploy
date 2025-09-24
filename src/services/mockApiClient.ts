import { initialPeopleRecords } from '../mocks/personMockData';
import { PersonRecord, PersonSummary, PeopleTabSection } from '../features/people/types';

type PersonSectionKey = PeopleTabSection;

const clone = <T>(data: T): T => JSON.parse(JSON.stringify(data));

const delay = (ms = 200) => new Promise((resolve) => setTimeout(resolve, ms));

const peopleStore: { records: PersonRecord[] } = {
  records: clone(initialPeopleRecords)
};

const getLatestInteraction = (person: PersonRecord) => {
  const interactionDates = [
    ...person.notes.map((note) => note.timestamp),
    ...person.recommendations.map((rec) => rec.createdAt)
  ]
    .map((value) => new Date(value).getTime())
    .filter((value) => !Number.isNaN(value));

  if (!interactionDates.length) {
    return new Date().toISOString();
  }

  const latestTimestamp = Math.max(...interactionDates);
  return new Date(latestTimestamp).toISOString();
};

const buildSummary = (person: PersonRecord): PersonSummary => {
  const activeRole = person.workHistory.find((role) => role.currentJob) ?? person.workHistory[0];

  return {
    id: person.id,
    fullName: `${person.personalDetails.firstName} ${person.personalDetails.lastName}`.trim(),
    community: person.personalDetails.community || 'Not recorded',
    engagementStatus: person.engagementStatus || 'Unknown',
    currentRole: activeRole?.jobTitle ?? 'Not recorded',
    employer: activeRole?.employer ?? 'Not recorded',
    preferredIndustries: person.profile.preferredIndustries ?? [],
    lastInteraction: getLatestInteraction(person)
  };
};

export const mockApiClient = {
  async getPeopleList() {
    await delay();
    return clone(peopleStore.records.map(buildSummary));
  },

  async getPersonRecord(personId: string) {
    await delay();
    const record = peopleStore.records.find((person) => person.id === personId);

    if (!record) {
      throw new Error('Person record not found');
    }

    return clone(record);
  },

  async updatePersonSection<K extends PersonSectionKey>(
    personId: string,
    section: K,
    payload: PersonRecord[K]
  ) {
    await delay();
    const recordIndex = peopleStore.records.findIndex((person) => person.id === personId);

    if (recordIndex < 0) {
      throw new Error('Person record not found');
    }

    const updatedRecord: PersonRecord = {
      ...peopleStore.records[recordIndex],
      [section]: clone(payload)
    } as PersonRecord;

    peopleStore.records[recordIndex] = updatedRecord;

    return {
      person: clone(updatedRecord),
      summary: buildSummary(updatedRecord)
    };
  }
};

export type MockApiClient = typeof mockApiClient;
