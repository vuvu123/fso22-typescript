import patientData from '../../data/patients';

import { NonSensitivePatientEntry,  } from '../types';

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

const addPatient = () => {
  return null;
};

export default {
  getPatientEntries,
  addPatient,
  getNonSensitivePatientEntries
};