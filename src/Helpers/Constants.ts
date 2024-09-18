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
        value: 'clothing'
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


export const rentTypes = [
    {
        label : 'Lease Transfer',
        value : 'leasetransfer'
    },
    {
        label : 'House Share',
        value : 'houseshare'
    },
    {
        label : 'Room share',
        value : 'roomshare'
    },
    {
        label : 'Property for Rent',
        value : 'propertyrent'
    }

]

export const propertyTypes = [
    {
        label : 'Apartment or unit',
        value : 'apartment'
    },
    {
        label : 'House',
        value : 'house'
    },
    {
        label : 'Townhouse',
        value : 'townhouse'
    },
    {
        label : 'Other Rental',
        value : 'other'
    },
]

export const bedRoomTypes = [
    {
        label : 'Studio',
        value : 'studio'
    },
    {
        label : '1 Bedroom',
        value : '1'
    },
    {
        label : '2 Bedrooms',
        value : '2'
    },
    {
        label : '3 Bedrooms',
        value : '3'
    },
    {
        label : '4 Bedrooms',
        value : '4'
    },
];

export const bathRoomTypes = [
    {
        label : 'One',
        value : '1'
    },
    {
        label : 'Two',
        value : '3'
    },
    {
        label : 'Three or more',
        value : '3'
    },

];

export const durationTypes = [
    {
        label : 'Per week',
        value : 'week'
    },
    {
        label : 'Per Fortnight',
        value : 'fortnight'
    },
    {
        label : 'Per Month',
        value : 'month'
    }
]