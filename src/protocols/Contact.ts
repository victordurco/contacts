export interface ContactBody{
  name: string;
  phone: string;
  email: string;
}

export interface ContactFromApi extends ContactBody{
  id: number
}


