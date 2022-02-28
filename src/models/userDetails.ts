import { Timestamp } from "firebase/firestore";

type UserDetails = {
  about: string;
  email: string;
  language: string;
  first_name: string;
  last_name: string;
  creation_date: Timestamp;
}

export default UserDetails;