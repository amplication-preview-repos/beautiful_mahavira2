import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  PasswordInput,
} from "react-admin";

import { CompStatusTitle } from "../compStatus/CompStatusTitle";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="compStatuses"
          reference="CompStatus"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CompStatusTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Name" source="Name" />
        <PasswordInput label="Password" source="password" />
        <TextInput label="Phone Number" source="phoneNumber" />
        <TextInput label="Roles" source="roles" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
