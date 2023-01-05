import express from 'express';
import patientService from '../services/patientService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getNonSensitivePatientEntries());
});

router.get('/:id', (req, res) => {
  const patient = patientService.findById(req.params.id);

  if (patient) {
    res.send(patient);
  } else {
    res.status(404).send({ 'error' : 'id not found' });
  }
});

router.post('/', (req, res) => {
  // const { name, dateOfBirth, ssn, gender, occupation } = req.body;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const patient = patientService.addPatient(req.body);
  res.send(patient);
});

export default router;