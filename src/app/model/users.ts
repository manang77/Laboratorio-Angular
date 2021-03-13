export interface User {
  id: string;
  name: string,
  email: string,
  phoneNumber: string,
};

export const userList: User[] =  [
  { id: "1", name: "Miner Balcers", email: "mbalcers0@google.es", phoneNumber: "181-757-8837" },
  { id: "2", name: "Malanie Tuckwood", email: "mtuckwood1@usatoday.com", phoneNumber: "521-142-2638" },
  { id: "3", name: "Milo Sheekey", email: "msheekey2@reference.com", phoneNumber: "294-297-3501" },
  { id: "4", name: "Dean Bonniface", email: "dbonniface3@mediafire.com", phoneNumber: "350-171-1421" },
  { id: "5", name: "Lewes Avo", email: "lavo4@youtube.com", phoneNumber: "477-553-4781" },
  { id: "6", name: "Benjamen Lorrimer", email: "blorrimer5@upenn.edu", phoneNumber: "108-678-8122" },
];

export const newUser = (): User => {
  return {
    id: '',
    name: '',
    email: '',
    phoneNumber: '',
  }
}
