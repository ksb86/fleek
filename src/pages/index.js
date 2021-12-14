import Nav from '../components/nav';
import Footer from '../components/footer';

export default function Index({env}) {
    return (
        <div>
            <Nav/>
            <h1> Index </h1>
            <Footer env={env}/>
        </div>
    );
}

export async function getStaticProps() {
    return {
        props: {
            env: process.env.ENVIRONMENT,
        },
    };
}