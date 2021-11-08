
const data = {
    exercises : [
        {
            id : '1',
            name : 'back muscles',
            image : '/images/back.jpg',
            sum : 10,
        },
        {
            id : '2',
            name : 'biceps muscles',
            image : '/images/biceps.jpg',
            sum : 10,
        },
        {
            id : '3',
            name : 'triceps muscles',
            image : '/images/triceps.jpg',
            sum : 10,
        },
        {
            id : '4',
            name : 'leg muscles',
            image : '/images/leg.jpg',
            sum : 10,
        },
        {
            id : '5',
            name : 'chest muscles',
            image : '/images/chest.png',
            sum : 10,
        },
        {
            id : '6',
            name : 'shoulder muscles',
            image : '/images/shoulder.jpg',
            sum : 10,
        }
    ],
    items : [
        {
            id : '1',
            ex_id : '1',
            name : 'back-1',
            image : '/images/back-1.jpg',
            description : 'nice training'
        },
        {
            id : '2',
            ex_id : '1',
            name : 'back-2',
            image : '/images/back-2.jpg'
        },
        {
            id : '3',
            ex_id : '1',
            name : 'back-3',
            image : '/images/back-3.webp'
        },
        {
            id : '4',
            ex_id : '1',
            name : 'back-4',
            image : '/images/back3.jpg'
        },
        {
            id : '5',
            ex_id : '1',
            name : 'back-5',
            image : '/images/back-4.jpg'
        },
        {
            id : '6',
            ex_id : '1',
            name : 'back-6',
            image : '/images/back-6.jpg'
        },
        {
            id : '7',
            ex_id : '2',
            name : 'biceps-1',
            image : '/images/biceps-1.jpg'
        },
        {
            id : '8',
            ex_id : '2',
            name : 'biceps-2',
            image : '/images/biceps-2.jpg'
        },
        {
            id : '9',
            ex_id : '2',
            name : 'biceps-3',
            image : '/images/biceps-3.png'
        },
        {
            id : '10',
            ex_id : '3',
            name : 'triceps-1',
            image : '/images/triceps-1.jpg'
        },
        {
            id : '11',
            ex_id : '3',
            name : 'triceps-2',
            image : '/images/triceps-4.jpg'
        },
        {
            id : '12',
            ex_id : '3',
            name : 'triceps-3',
            image : '/images/triceps.jpg'
        },
        {
            id : '13',
            ex_id : '4',
            name : 'leg-1',
            image : '/images/leg-1.jpg'
        },
        {
            id : '14',
            ex_id : '4',
            name : 'leg-2',
            image : '/images/leg-2.jpg'
        },
        {
            id : '15',
            ex_id : '4',
            name : 'leg-3',
            image : '/images/leg-3.jpg'
        },
        {
            id : '16',
            ex_id : '4',
            name : 'leg-4',
            image : '/images/leg-4.jpg'
        },
        {
            id : '17',
            ex_id : '5',
            name : 'chest-1',
            image : '/images/chest-1.jpg'
        },
        {
            id : '18',
            ex_id : '5',
            name : 'chest-2',
            image : '/images/chest-2.jpg'
        },
        {
            id : '19',
            ex_id : '5',
            name : 'chest-3',
            image : '/images/chest-3.jpg'
        },
        {
            id : '20',
            ex_id : '5',
            name : 'chest-4',
            image : '/images/chest-4.jpg'
        },
        {
            id : '21',
            ex_id : '5',
            name : 'chest-5',
            image : '/images/chest-5.jpg'
        },
        {
            id : '22',
            ex_id : '6',
            name : 'shoulder-1',
            image : '/images/shoulder-1.jpg'
        },
        {
            id : '23',
            ex_id : '6',
            name : 'shoulder-2',
            image : '/images/shoulder-2.jpg'
        },
        {
            id : '26',
            ex_id : '6',
            name : 'shoulder-3',
            image : '/images/shoulder-3.jpg'
        },
        {
            id : '24',
            ex_id : '6',
            name : 'shoulder-4',
            image : '/images/shoulder-4.jpg'
        },
        {
            id : '25',
            ex_id : '6',
            name : 'shoulder-5',
            image : '/images/shoulder-5.jpg'
        },
    ],
    users : [
        {
            name: 'momo',
            email: 'm@example.com',
            password: '222',
            isAdmin: true,
            training_days: ['monday', 'thursday', 'friday'],
            selected_exercises : [['1','2','3','4','5','6','7','8'],
            ['9','10','11','12','13','14','15','16'],
            ['17','18','19','20','21','22','23','24']]
        },
        {
            name: 'ali',
            email: 'a@example.com',
            password: '222',
            isAdmin: false,
            training_days: ['sunday', 'wednsday', 'friday'],
            selected_exercises:[['5','6','7','8','15','16','17','18'],
            ['25','26','27','28','35','36','37','38'],
            ['45','46','47','48','55','56','57','58']]
        },
    ]
}

export default data;


