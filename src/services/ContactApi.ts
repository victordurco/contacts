/* eslint-disable class-methods-use-this */
import { AxiosResponse } from "axios";
import api from "./api";

import {Contact} from '../protocols/Contact';

export default class ContactApi {
  create(body: Contact): Promise<AxiosResponse> {
    return api.post("/contacts", body );
  }

  getAllContacts(): Promise<AxiosResponse>  {
    return api.get("/contacts");
  }
}
