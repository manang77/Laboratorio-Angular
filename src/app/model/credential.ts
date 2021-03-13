export interface Credential
{
  userId: string,
  password: string,
  profileName: string,
}

export const newCredential = (): Credential => {
  return {
    userId: '',
    password: '',
    profileName: '',
  }
}


