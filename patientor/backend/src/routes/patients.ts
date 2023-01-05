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

router.post('/', (_req, res) => {
  res.send('Adding a patient...');
});

export default router;