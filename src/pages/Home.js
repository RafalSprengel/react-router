import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Why Dark Energy Is The Biggest Unsolved Problem In The Universe?",
        author: "Jan Nowak",
        text: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
    },
    {
        id: 2,
        title: "Fermi Paradox: Where Are the Aliens?",
        author: "Ania Kwiatkowska",
        text: "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
    },
    {
        id: 3,
        title: "Are We Alone in the Universe??",
        author: "Jan Kowalski",
        text: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.."
    }
]

const allArticles = articles.map(art => <Article key={art.id} {...art} />)

const Home = () => {
    return (
        <>
            {allArticles}
        </>
    )
}
export default Home;