import patientData from '../../data/patients';
import { v1 as uuid } from 'uuid';
import { NonSensitivePatientEntry, NewPatientEntry } from '../types';

const patients: NonSensitivePatientEntry[] = patientData;

const getPatientEntries = () => {
  return patients;
};

const getNonSensitivePatientEntries = (): NonSensitivePatientEntry[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const findById = (id: string): NonSensitivePatientEntry | undefined => {
  const patient = patients.find(p => p.id === id);
  return patient;
};

const addPatient = (entry: NewPatientEntry): NonSensitivePatientEntry => {
  const id = uuid();
  const newPatientEntry = {
    id,
    ...entry
  };
  patients.push(newPatientEntry);
  return newPatientEntry;
};

export default {
  getPatientEntries,
  addPatient,
  getNonSensitivePatientEntries,
  findById
};