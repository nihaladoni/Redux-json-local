import { Button, Center, StackDivider, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { updateData } from "../store/userReducer";
import MyInput from "./MyInput";

const EditCard = ({ allUsers }) => {
  const [data, setData] = useState(null);
  const [update, setUpdate] = useState([]);
  const params = useParams();
  const history = useHistory();
  const { errors, register, formState, handleSubmit, reset } = useForm({
    defaultValues: update,
  });

  const dispatch = useDispatch();

  const onSubmit = (val) => {
    dispatch(updateData(val));
    history.push("/");
  };

  useEffect(() => {
    if (allUsers === []) {
      return setData(null);
    } else {
      setData(allUsers);
    }
  }, [allUsers]);

  useEffect(() => {
    fetch(`http://localhost:3300/users/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdate(data);
        reset(data);
      });
  }, [params.id, reset]);

  if (!data) return data;

  if (data)
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

export default EditCard;
