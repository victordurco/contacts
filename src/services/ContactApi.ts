/* eslint-disable class-methods-use-this */
import { AxiosResponse } from "axios";
import api from "./api";

import {ContactBody} from '../protocols/Contact';

export default class ContactApi {
  create(body: ContactBody): Promise<AxiosResponse> {
    return api.post("/contacts", body );
  }

  edit(body: ContactBody, id: number): Promise<AxiosResponse> {
    return api.put(`/contacts/${id}`, body );
  }

  getContactInfo(id: number): Promise<AxiosResponse> {
    return api.get(`/contacts/${id}`);
  }

  getAllContacts(): Promise<AxiosResponse>  {
    return api.get("/contacts");
  }

  deleteContact(id: number): Promise<AxiosResponse> {
    return api.delete(`/contacts/${id}`);
  }
}
