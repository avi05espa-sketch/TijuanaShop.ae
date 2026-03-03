"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { app } from "./config"; // Asegúrate de que la ruta sea correcta
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { FirebaseApp } from "firebase/app"; // Añade este import de tipo

// Opcional: Forzar el tipo si el error persiste en Vercel
const firebaseApp = app as FirebaseApp;

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

// ... resto del código igual
