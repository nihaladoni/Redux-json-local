import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const MyInput = ({ field, register, errors }) => {
  return (
    <FormControl isInvalid={`errors.${field}`}>
      <FormLabel htmlFor={field}> {field}</FormLabel>
      <Input name={field} placeholder={field} ref={register} />
      <FormErrorMessage>
        {errors[field] && errors[field].message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default MyInput;
