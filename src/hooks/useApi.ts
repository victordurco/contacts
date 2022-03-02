import ContactApi from '../services/ContactApi';

export default function useApi() {
  return {
    contact: new ContactApi(),
  };
}
