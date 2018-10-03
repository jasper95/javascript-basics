const my_info = {
    name: 'Jasper',
    contacts: [
        {
            type: 'Mobile',
            number: 09123456789
        },
        {
            type: 'Home',
            number: 2319624
        }
    ],
    address: {
        street: '11B Sanson Rd',
        state: 'Cebu',
        city: 'Cebu',
        zip: '6000'
    }
}

let { name, contacts } = my_info
name = 'Jasper Bernales'
// console.log('@my_info-1', my_info)

contacts.push({
    type: 'Work',
    number: 090101930690
})
// console.log('@my_info-2', my_info)


// contacts = contacts.slice(0, 1)
// console.log('@my_info-3', my_info)


const [primary_contact, secondary_contact] = contacts
// console.log('primary_contact: ', primary_contact)
// console.log('secondary_contact: ', secondary_contact)


const { address: { state: province = 'Bohol', barangay = 'Tugas' } } = my_info
// console.log('barangay: ', barangay);
// console.log('province: ', province);


// Object.values(address)
//     .entr()