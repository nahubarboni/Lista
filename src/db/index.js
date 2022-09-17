import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("lista.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS datos (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, image TEXT NOT NULL, address TEXT NOT NULL, coords TEXT NOT NULL);",
        [],
        () => resolve(),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};

export const insertLista = (title, image, address, coords) => {
   const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
      'INSERT INTO lista (title, image, address, coords) VALUES (?, ?, ?, ?);',
      [title, image, address, JSON.stringify(coords)],
      (_, result) => {
        console.warn(result);
        resolve(result);
      },
      (_, err) => reject(err)
      )
    });
   });
   return promise;
};

export const getLista = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM lista",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

