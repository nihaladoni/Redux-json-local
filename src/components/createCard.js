import { Button, Center, StackDivider, VStack } from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { postData } from "../store/userReducer";
import MyInput from "./MyInput";

const CreateCard = () => {
  const { errors, register, formState, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (val) => {
    console.log(val);
    dispatch(postData(val));
    history.push("/");
  };

  return (
    <Center>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
        >
          <MyInput field="id" register={register} errors={errors} />
          <MyInput field="name" register={register} errors={errors} />
          <MyInput field="username" register={register} errors={errors} />
          <MyInput field="email" register={register} errors={errors} />
          <MyInput field="website" register={register} errors={errors} />
        </VStack>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={formState.isSubmitting}
          type="submit"
          p={10}
        >
          Submit
        </Button>
      </form>
    </Center>
  );
};

export default CreateCard;
