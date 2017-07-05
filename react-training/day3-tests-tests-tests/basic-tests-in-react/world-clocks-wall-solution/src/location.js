import {id} from './helper';

const Location = (label, timeZone) => ({
    id: id(),
    label,
    timeZone
});

export default Location;