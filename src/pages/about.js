import Nav from '../components/nav';

export default function About(props) {
    return (
        <div>
            <Nav/>
            <h1> About ({props.var})</h1>
        </div>
    );
}

export async function getStaticProps(context) {
    return {
        props: {
            var: process.env.SERVER_VARIABLE,
        },
    };
}