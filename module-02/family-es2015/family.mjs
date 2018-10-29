// Файл family.mjs

import {name as fatherName} from './father';
import mother from './mother';
import brother from './brother';
import sister from './sister';

const motherName = mother.name;

const makeChild = () => `Отец: ${fatherName}, мать: ${motherName}, сестра: ${sister.name}, брат: ${brother.name}`;

export default makeChild();
