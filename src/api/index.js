import axios from 'axios';

const base_url = 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/';

export function getPatientByName(patientName) {
  return axios.get(`${base_url}Patient?name=${patientName}`);
}

export function getConditionsById(patient_id) {
  return axios.get(`${base_url}Condition?patient=${patient_id}`);
}
