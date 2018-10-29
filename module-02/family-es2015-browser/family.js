// Файл family.mjs

import {name as fatherName} from './father.js';
import mother from './mother.js';
import brother from './brother.js';
import sister from './sister.js';

const motherName = mother.name;

const makeChild = () => `Отец: ${fatherName}, мать: ${motherName}, сестра: ${sister.name}, брат: ${brother.name}`;

export default makeChild();
