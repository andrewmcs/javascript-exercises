function getAge(person) {
    if (!person.yearOfDeath) {
        const date = new Date();
        let year = date.getFullYear();
        return year - person.yearOfBirth;
    }
    else {
        return person.yearOfDeath - person.yearOfBirth;
    }
}

const findTheOldest = function (people) {

    return people.reduce((oldest, currentPerson) => { console.log(currentPerson); return getAge(oldest) > getAge(currentPerson) ? oldest : currentPerson });
};

// Do not edit below this line
module.exports = findTheOldest;
