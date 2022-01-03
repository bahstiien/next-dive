import React from "react";
import CTAbtn from "../../components/CTAbtn";
import FormNewDive from "../../components/FormNewDive";
import AdminLayout from "../../components/Layout/AdminLayout";
import Layout from "../../components/Layout/Layout";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const NewDive = () => {
  const {
    register,
    handleSubmit,
    setError,
    control,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log(data);
    // axios
    //   .post("/api/newDive", data)
    //   .then((res) => {
    //     Swal.fire({
    //       position: "center",
    //       icon: "success",
    //       title: "Vous allez recevoir un mail de confirmation",
    //       showConfirmButton: false,
    //       timer: 2500,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log("fail");
    //   });
  };

  return (
    <Layout name="Créer une Nouvelle plongée">
      <AdminLayout>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg ">
          {/* FORM NEW DIVE */}
          <div className="flex flex-col items-center justify-center w-full">
            {/* CRENEAUX HORAIRES */}
            {/* <div className="flex w-full">
                <FormNewDive
                  label="Date"
                  type="date"
                  {...register("date")}
                  id="date"
                />
              </div> */}

            {/* CAPACITE*/}
            <div className="flex w-full">
              <FormNewDive label="Bateau" type="text" {...register("boat")} />
              <FormNewDive
                label="Places dispo"
                type="number"
                id="placesOnBoat"
                name="placesOnBoat"
                {...register("placesOnBoat", {
                  required: " ❌ Champs obligatoire ",
                })}
              />
              {errors.placesOnBoat && (
                <span className="text-xs">{errors.placesOnBoat.message}</span>
              )}
            </div>

            {/* SPOT */}
            <div className="flex  flex-col w-full">
              <FormNewDive
                label="Point de départ"
                type="text"
                id="meetingSpot"
                name="meetingSpot"
                {...register("meetingSpot", {
                  required: " ❌ Champs obligatoire ",
                })}
              />
              {errors.meetingSpot && (
                <span className="text-xs"> {errors.meetingSpot.message}</span>
              )}
              <FormNewDive
                label="Spot de la plongée"
                type="text"
                id="spot"
                name="spot"
                {...register("spot", {
                  required: " ❌ Champs obligatoire ",
                })}
              />
              {errors.spot && (
                <span className="text-xs">{errors.spot.message}</span>
              )}
              <FormNewDive
                label="Niveau minimum requis"
                type="text"
                id="miniLevel"
                name="miniLevel"
                {...register("miniLevel", {
                  required: " ❌ Champs obligatoire ",
                })}
              />
              {errors.miniLevel && (
                <span className="text-xs">{errors.miniLevel.message}</span>
              )}
              <FormNewDive
                label="Tarif initial TTC"
                type="number"
                id="price"
                name="price"
                {...register("price", {
                  required: " ❌ Champs obligatoire ",
                })}
              />
              {errors.spot && (
                <span className="text-xs">{errors.price.message}</span>
              )}
            </div>

            <FormNewDive
              label="Informations additionnels"
              type="text"
              id="additionalInformation"
              name="additionalInformation"
              {...register("additionalInformation", {
                required: " ❌ Champs obligatoire ",
              })}
            />
            {errors.additionalInformation && (
              <span className="text-xs">
                {errors.additionalInformation.message}
              </span>
            )}

            <CTAbtn title="Soumettre une nouvelle session" type="submit" />
          </div>
        </form>
      </AdminLayout>
    </Layout>
  );
};

export default NewDive;
