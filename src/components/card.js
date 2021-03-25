import {
  Box,
  Button,
  CSSReset,
  Heading,
  IconButton,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

import { useDispatch } from "react-redux";
import { deleteData } from "../store/userReducer";
import { useHistory } from "react-router-dom";

const Card = ({ allUsers }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDeleteClick = (e, id) => {
    e.stopPropagation();
    dispatch(deleteData(id));
  };

  const handleCardClick = (id) => {
    history.push(`users/${id}`);
  };
  return (
    <>
      <Box>
        <Button colorScheme="blue" onClick={() => history.push("/add")}>
          Add a Card
        </Button>
      </Box>
      <Wrap style={{ margin: "0 15px" }}>
        <CSSReset />
        {allUsers &&
          allUsers.map((note) => (
            <WrapItem id={note.id}>
              <Box
                w="300px"
                p={10}
                h="min-content"
                borderRadius={10}
                bg="#E9D8FD"
                border="1px solid black"
                onClick={() => handleCardClick(note.id)}
              >
                <Heading as="h3" size="lg" m={0}>
                  {note.name}
                </Heading>
                <Text fontSize="2xl">@{note.username}</Text>
                <Text fontSize="2xl">{note.email}</Text>

                <Text fontSize="2xl">{note.phone}</Text>
                <Text fontSize="2xl">
                  <a href={note.website}>{note.website}</a>
                </Text>
                <IconButton
                  colorScheme="red"
                  aria-label="delete card"
                  onClick={(e) => handleDeleteClick(e, note.id)}
                  icon={<DeleteIcon />}
                />
              </Box>
            </WrapItem>
          ))}
      </Wrap>
    </>
  );
};

export default Card;
