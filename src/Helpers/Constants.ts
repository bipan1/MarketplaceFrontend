export type categoryType = {
    label : string;
    value : string;
}

export const categories : categoryType[] = [
    {
        label: 'Jobs',
        value: 'jobs'
    },
    {
        label: 'Household',
        value: 'household'
    },
    {
        label: 'Room and Real Estate',
        value: 'rooms'
    },
    {
        label: 'Clothing and Jewellery',
        value: 'clothingjewellery'
    },
    {
        label: 'Cars',
        value: 'cars'
    },
    {
        label: 'Electronics and Computer',
        value: 'electronics'
    },
    {
        label: 'Service for hire',
        value: 'service'
    },
    {
        label: 'Events',
        value: 'events'
    }
];

export const jobTypes = [
    {
        label : 'Casual',
        value : 'casual'
    },
    {
        label : 'Temp',
        value : 'temp'
    },
    {
        label : 'Part Time',
        value : 'parttime'
    },
    {
        label : 'Full Time',
        value : 'fulltime'
    },
    {
        label : 'Internship',
        value : 'internship'
    }
];

export const salaryTypes = [
    {
        label: 'Hourly Rate',
        value : 'hourly'
    },
    {
        label: 'Hourly Rate (Cash)',
        value : 'hourlycash'
    },
    {
        label: 'Annual Salary Package',
        value : 'annual'
    },
    {
        label: 'Commssion',
        value : 'commission'
    },
]