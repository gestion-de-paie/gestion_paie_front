import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import TextField from '@mui/material/TextField';
import AxiosInstance from "../common/axios";

const DernierBulletinPaie = ({ matricule, onclose }) => {
    const aujourdHui = new Date().toLocaleDateString('fr-FR');
    console.log(aujourdHui); // affiche "12/05/2025"
    const [employe, setEmploye] = useState(null);
    const [fonction, setFonction] = useState("");
    const getFonction = (idFonc) => {
        AxiosInstance.get(`/fonctions/${idFonc}`)
            .then((response) => {
                console.log("Fonction de l employe ", matricule, ":", response);
                setFonction(response.nom_fonction);
            })
            .catch((error) => {
                console.error("Erreur lors de la recuperation de l employe", error)
            });
    }


    useEffect(() => {
        AxiosInstance.get(`/employes/${matricule}`)
            .then((response) => {
                console.log("information de l employe ", matricule, ":", response);
                setEmploye(response);


            })
            .catch((error) => {
                console.error("Erreur lors de la recuperation de l employe", error)
            });
    }, [matricule]);

    return (
        <div className="w-full h-full">
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="Logo de l'entreprise"
                        className="h-24 w-auto"
                    />
                </div>
                <h2 className="text-xl font-semibold">
                    Fiche de paie du {aujourdHui}
                </h2>
            </div>
            <h1 className="w-full bg-slate-300 text-black flex justify-center items-center align-center font-bold h-9">
                INFORMATIONS SUR L'EMPLOYE'
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-4">
                <div className="mt-3">
                    <TextField
                        label="Nom"
                        defaultValue={employe ? employe.nom : ''}
                        slotProps={{
                            input: {
                                readOnly: true,
                            },
                        }}
                    />
                </div>
                <div className="mt-3">
                    <TextField
                        label="Prenom"
                        defaultValue={employe ? employe.prenom : ''}
                        slotProps={{
                            input: {
                                readOnly: true,
                            },
                        }}
                    />
                </div>
                <div className="mt-3">
                    <TextField
                        label="Contact"
                        defaultValue={employe ? employe.contact : ''}
                        slotProps={{
                            input: {
                                readOnly: true,
                            },
                        }}
                    />
                </div>
                <div className="mt-3">
                    <TextField
                        label="Email"
                        defaultValue={employe ? employe.email : ''}
                        slotProps={{
                            input: {
                                readOnly: true,
                            },
                        }}
                    />
                </div>
                <div className="mt-3">
                    <TextField
                        label="Fonction"
                        defaultValue={fonction ? fonction : "directeur"}
                        slotProps={{
                            input: {
                                readOnly: true,
                            },
                        }}
                    />
                </div>
                <div className="mt-3">
                    <TextField
                        label="Cas employe"
                        defaultValue={employe ? employe.cas_employe : ''}
                        slotProps={{
                            input: {
                                readOnly: true,
                            },
                        }}
                    />
                </div>
            </div>  {/* Paiement */}
            <h1 className="w-full bg-slate-300 text-black flex justify-center items-center align-center font-bold h-9">
                INFORMATIONS SUR LE SALAIRE
            </h1>
            <div className="mb-4">
                <h2 className="font-semibold mb-2">TYPE DE PAIEMENT</h2>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-4">
                    <div className="mt-3">
                        <TextField
                            label="Taux"
                            defaultValue="Hello World"
                            slotProps={{
                                input: {
                                    readOnly: true,
                                },
                            }}
                        />
                    </div>
                    <div className="mt-3">
                        <TextField
                            label="Nb Heures"
                            defaultValue="Hello World"
                            slotProps={{
                                input: {
                                    readOnly: true,
                                },
                            }}
                        />
                    </div>
                    <div className="mt-3">
                        <TextField
                            label="Salaire Brut"
                            defaultValue="Hello World"
                            slotProps={{
                                input: {
                                    readOnly: true,
                                },
                            }}
                        />
                    </div>
                    <div className="mt-3">
                        <TextField
                            label="Taux heure sup"
                            defaultValue="Hello World"
                            slotProps={{
                                input: {
                                    readOnly: true,
                                },
                            }}
                        />
                    </div>
                    <div className="mt-3">
                        <TextField
                            label="Nb Heures supplementaire"
                            defaultValue="Hello World"
                            slotProps={{
                                input: {
                                    readOnly: true,
                                },
                            }}
                        />
                    </div>
                    <div className="mt-3">
                        <TextField
                            label="Primes"
                            defaultValue="Hello World"
                            slotProps={{
                                input: {
                                    readOnly: true,
                                },
                            }}
                        />
                    </div>

                </div>
            </div>
            <div className="mb-4">
                <h2 className="font-semibold mb-2">DEDUCTION</h2>
                <div className="mt-3">
                    <TextField
                        label="IRSA"
                        defaultValue="Hello World"
                        slotProps={{
                            input: {
                                readOnly: true,
                            },
                        }}
                    />
                </div>
            </div>
            {/* Solde des congés */}
            <div className="mb-4">
                <h2 className="font-semibold mb-2">SOLDE DES CONGÉS PAYÉS</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <TextField
                        label="Heures disponnibles"
                        defaultValue="Hello World"
                        slotProps={{
                            input: {
                                readOnly: true,
                            },
                        }}
                    />
                    <TextField
                        label="Heures utilisees"
                        defaultValue="Hello World"
                        slotProps={{
                            input: {
                                readOnly: true,
                            },
                        }}
                    />
                    <TextField
                        label="Heures restantes"
                        defaultValue="Hello World"
                        slotProps={{
                            input: {
                                readOnly: true,
                            },
                        }}
                    />
                    <TextField
                        label="Total utilise"
                        defaultValue="Hello World"
                        slotProps={{
                            input: {
                                readOnly: true,
                            },
                        }}
                    />
                </div>
            </div>

            {/* Récapitulatif */}
            <div className="mb-4">
                <h2 className="font-semibold mb-2">RÉCAPITULATIF</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <TextField
                        label="Brut a ce jour"
                        defaultValue="Hello World"
                        slotProps={{
                            input: {
                                readOnly: true,
                            },
                        }}
                    />
                    <TextField
                        label="Deduction a ce jour"
                        defaultValue="Hello World"
                        slotProps={{
                            input: {
                                readOnly: true,
                            },
                        }}
                    />

                </div>
            </div>
            <br />
            <TextField
                label="Salaire net"
                defaultValue="Hello World"
                slotProps={{
                    input: {
                        readOnly: true,
                    },
                }}
            />
        </div>
    )
}
export default DernierBulletinPaie;