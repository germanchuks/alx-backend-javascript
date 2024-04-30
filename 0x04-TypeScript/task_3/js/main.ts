// main.ts
/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Row object
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};

// Insert new row and store the id
const newRowID: RowID = CRUD.insertRow(row);

// Update row
const updatedRow: RowElement = {...row, age: 23};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
