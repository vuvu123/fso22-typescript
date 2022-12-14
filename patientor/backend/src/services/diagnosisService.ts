import diagnosesData from '../../data/diagnoses';

import { DiagnosisEntry } from '../types';

const diagnoses: DiagnosisEntry[] = diagnosesData;

const getDiagnosesEntries = (): DiagnosisEntry[] => {
  return diagnoses;
};

const addDiagnosis = () => {
  return null;
};

export default {
  getDiagnosesEntries,
  addDiagnosis
};