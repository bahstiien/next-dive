import base from "../../../middleware/commons";
import {
  createNewDive,
  getDiveSession,
  ValidateDiveSession,
} from "../../../models/newDive";

const handleGet = async (req, res) => {
  res.send(await getDiveSession());
};

async function handlerPost(req, res) {
  const validationError = ValidateDiveSession(req.body);
  console.log(validationError);
  if (validationError) return res.status(422).send(validationError);

  const newDive = await createNewDive({
    ...req.body,
    // customer: { connect: { id: 1 } },
  });

  res.status(201).send(newDive);
}

export default base().post(handlerPost).get(handleGet);
