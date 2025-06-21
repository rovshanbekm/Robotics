import CoursesCards from "./CoursesCards"


function Cards() {

    let cards = [
        {
            id: 1,
            pic: '/restangle-19.png',
            desc:'Робототехника'
        },
        {
            id: 2,
            pic: '/restangle-21.png',
            desc:'Живопись для детей'
        },
        {
            id: 3,
            pic: '/restangle-24.png',
            desc:'Живопись для взрослых'
        },
        {
            id: 4,
            pic: '/restangle-23.png',
            desc:'Английский язык для детей'
        },
        {
            id: 5,
            pic: '/restangle-25.png',
            desc:'Шахмат'
        }
    ]

    return(
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 px-10 pt-20 ">
            {cards.map(({ pic, id, desc }) => (
                <CoursesCards
                pic={pic}
                desc={desc}
                key={id}
                />
            ))}
        </div>
    )
}
export default Cards