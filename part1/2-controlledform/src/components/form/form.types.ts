type DataType={

    userName: string;
    email: string;
    phoneNumber: string;
    gender: string;
    role: string;
    isCheck: boolean;
}

export type FormProps={
  data:DataType 

onChangeForm: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement, Element>) => void;
onSubmitForm: (e: React.SubmitEvent<HTMLFormElement>) => void
}
