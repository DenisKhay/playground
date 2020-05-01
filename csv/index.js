const generate = require('./nhs-generator');
const csvFrom = require('./csv-generator');

const systemOneFields = [
    'IDAppointment',
    'DateAppointment',
    'DateEnd',
    'AppointmentStatus',
    'DateAppointmentBooked',
    'DatePatientArrival',
    'DatePatientSeen',
    'TelephoneAppointment',
    'IDProfileClinician',
    'StaffName',
    'StaffIDNational',
    'RotaName',
    'RotaType',
    'DateAppointmentCancelled',
    'IDRota',
    'IDReferralIn',
    'IDPatient',
    'IDBranch',
    'Room',
    '18wkIDNumber',
    'UBRN',
    'NHSNumber',
    'Title',
    'FirstName',
    'MiddleNames',
    'Surname',
    'DateBirth',
    'DateDeath',
    'PatientHomeNameOfBuilding',
    'PatientHomeNumberOfBuilding',
    'PatientHomeNameOfRoad',
    'PatientHomeLocality',
    'PatientHomeTown',
    'PatientHomeCounty',
    'PatientHomeFullPostCode',
    'PatientCorrNameOfBuilding',
    'PatientCorrNumberOfBuilding',
    'PatientCorrNameOfRoad',
    'PatientCorrLocality',
    'PatientCorrTown',
    'PatientCorrCounty',
    'PatientCorrFullPostCode',
    'PatientTempNameOfBuilding',
    'PatientTempNumberOfBuilding',
    'PatientTempNameOfRoad',
    'PatientTempLocality',
    'PatientTempTown',
    'PatientTempCounty',
    'PatientTempFullPostCode',
    'PatientMobileNumber',
    'PatientLandlineNumber',
    'PatientEmailAddress',
];
const abc = async () => {
    const obs = [
        {
            NHSNumber: generate.one(),
            UBRN: 'Some',
            FirstName: 'Abdalla'
        }
    ];
    console.log('generate csv', await csvFrom(systemOneFields, obs), generate.few(300));
}
abc();
