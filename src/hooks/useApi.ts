import ContactApi from '../services/ContactApi';

export default function useApi() {
  return {
    contactApi: new ContactApi(),
  };
}
