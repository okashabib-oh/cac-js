const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filterValues = []

//console.log(filterValues) // []
myArr.forEach((nums) => {
    if (nums > 4) {
        filterValues.push(nums)
    }
})
//console.log(filterValues) // [ 5, 6, 7, 8, 9, 10 ]

const gop = myArr.filter((nums) => {
    return nums > 6
})

//console.log(gop)

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
    {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
    {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
    {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
    {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
];

const bk = books.filter((b) => {
    return b.publish > 2000 && b.edition > 2015;
})
//console.log(bk)

const ti = books.map((e) => {
    return e.title // retreiving books title
})
//console.log(ti)

const courses = [
    {
        name: 'MERN',
        price: 5999
    },
    {
        name: 'Full Stack',
        price: 1999
    },
    {
        name: 'Frontend Dev',
        price: 2499
    },
    {
        name: 'Backend Dev',
        price: 29999
    }
]

const total = courses.reduce((ac, dc) => ac + dc.price, 1) // at first iteration ac val will be the 1 and after will be the sum of iteration
//console.log(total)

const numArr = [21, 44, 22, 90, 32, 11]
const nu = numArr.reduce((a, d) => {
    return a + d
}, 1)
console.log(nu)