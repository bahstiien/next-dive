import { diveSession } from "../db";

const db = require("../db");
const Joi = require("joi");

const ValidateDiveSession = (data, forUpdate = false) => {
  return Joi.object({
    // date: Joi.date(),
    boat: Joi.string().required(),
    placeOnBoat: Joi.number().required(),
    meetingSpot: Joi.string().required(),
    miniLevel: Joi.string().required(),
    price: Joi.number().required(),
    additionalInformation: Joi.string().required(),
    spot: Joi.string().required(),
  }).validate(data, { abortEarly: false }).error;
};

const createNewDive = async ({
  additionalInformation,
  date,
  boat,
  placeOnBoat,
  meetingSpot,
  miniLevel,
  price,
  spot,
}) => {
  return await db.diveSession.create({
    data: {
      additionalInformation,
      boat,
      placeOnBoat,
      meetingSpot,
      miniLevel,
      price,
      spot,
    },
  });
};

const diveSessionToShow = {
  date: true,
  additionalInformation: true,
  boat: true,
  placeOnBoat: true,
  meetingSpot: true,
  miniLevel: true,
  price: true,
  spot: true,
};

const getDiveSession = async () => {
  return db.diveSession.findMany({
    select: estimateToShow,
  });
};

// const updateAskEstimate = async (additionalInformation, deadLine) => {
//   return db.diveSession
//     .patch({ where: { deadLine, attachedFiles } })
//     .catch(() => false);
// };

module.exports = {
  ValidateDiveSession,
  createNewDive,
  // updateAskEstimate,
  getDiveSession,
};
